import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import  {environment}  from '../../environments.environment';
import { User } from '../models/user.model';
import * as bcrypt from 'bcryptjs';
import { jwtDecode } from 'jwt-decode';

// ------------------------------------------------------------------
// Utility type – strips `password` from any object
// ------------------------------------------------------------------
type OmitPassword<T> = Omit<T, 'password'>;

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseAnonKey);
  }

  // ------------------------------------------------------------------
  // Password helpers (unchanged)
  // ------------------------------------------------------------------
  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  private async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  // ------------------------------------------------------------------
  // Session helpers – **password is omitted**
  // ------------------------------------------------------------------
  private createSession<T>(user: T) {
    const safeUser: OmitPassword<T> = { ...user };
    delete (safeUser as any).password;               // explicit delete (type-safe)
    const token = btoa(JSON.stringify(safeUser));
    localStorage.setItem('session', token);
  }

  getSession(): OmitPassword<User> | null {
    const token = localStorage.getItem('session');
    if (!token) return null;
    try {
      return JSON.parse(atob(token));
    } catch {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('session');
  }

  // ------------------------------------------------------------------
  // SIGN-UP (manual)
  // ------------------------------------------------------------------
  async signUp(email: string, password: string, name: string) {
    // 1. Check duplicate
    const { data: existing } = await this.supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (existing) throw new Error('User already exists');

    const hashedPassword = await this.hashPassword(password);

    const newUser: User = {
      name,
      email,
      provider: 'email',
      password: hashedPassword,
      createdAt: new Date(),
    };

    const { data, error } = await this.supabase
      .from('users')
      .insert([
        {
          name: newUser.name,
          email: newUser.email,
          password: hashedPassword,
          provider: newUser.provider,
          created_at: newUser.createdAt,
        },
      ])
      .select(); // <-- add .select() to get the inserted row back

    if (error) throw error;

    // ---- SESSION: omit password ----
    const sessionPayload: OmitPassword<User> = {
      id: data![0].id,
      name: data![0].name,
      email: data![0].email,
      provider: data![0].provider,
      createdAt: data![0].created_at,
      // any other fields you want in the session
    };

    this.createSession(sessionPayload);
    return sessionPayload;
  }

  // ------------------------------------------------------------------
  // SIGN-IN (manual)
  // ------------------------------------------------------------------
  async signIn(email: string, password: string) {
    const { data: user, error } = await this.supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) throw new Error('User not found');

    const isMatch = await this.comparePassword(password, user.password);
    if (!isMatch) throw new Error('Invalid password');

    // ---- SESSION: omit password ----
    const sessionUser: OmitPassword<User> = {
      id: user.id,
      name: user.name,
      email: user.email,
      provider: user.provider,
      createdAt: user.created_at,
    };

    this.createSession(sessionUser);
    return sessionUser;
  }

  // ------------------------------------------------------------------
  // SOCIAL LOGIN
  // ------------------------------------------------------------------
  async loginWithSocial(socialData: any, provider: 'google' | 'facebook' | 'spotify') {
    const newUser: User = {
      name: socialData.name,
      email: socialData.email,
      photoUrl: socialData.photoUrl,
      password: 'social',               // keep a dummy value for DB consistency
      provider,
      accessToken: socialData.accessToken,
      createdAt: new Date(),
    };

    const { data, error } = await this.supabase
      .from('users')
      .upsert(
        [
          {
            name: newUser.name,
            email: newUser.email,
            photo_url: newUser.photoUrl,
            provider: newUser.provider,
            access_token: newUser.accessToken,
            created_at: newUser.createdAt,
            // password column stays `social` – never sent to client
          },
        ],
        { onConflict: 'email' }
      )
      .select();

    if (error) throw error;

    // ---- SESSION: omit password ----
    const sessionPayload: OmitPassword<User> = {
      id: data![0].id,
      name: data![0].name,
      email: data![0].email,
      provider: data![0].provider,
      photoUrl: data![0].photo_url,
      accessToken: data![0].access_token,
      createdAt: data![0].created_at,
    };

    this.createSession(sessionPayload);
    return sessionPayload;
  }
}


export interface User{
    id?: string;
    name:string;
    email:string;
    photoUrl?:string;
    provider: 'email' | 'google' | 'facebook' | 'spotify';
    accessToken?: string;      // For Spotify or Google API calls
   createdAt?: Date;
}
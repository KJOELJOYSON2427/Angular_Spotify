// models/user.model.ts
export interface User {
  fullName: string;
  email: string;
  no_of_parcels: number;
}

export interface UserResource {

  id: number;

  fullName: string;

  email: string;

  parcelCount: number;

}
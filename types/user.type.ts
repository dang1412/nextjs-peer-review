export enum UserRole {
  Frontend = "Frontend",
  Backend = "Backend",
  IOS="IOS",
  Android = "Android"
}

export interface IUser {
  _id?: string;
  name: string;
  isAdmin: boolean;
  role: UserRole;
  des?: string;
}

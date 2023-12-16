export interface User {
  fullName: string;
  email: string;
  profilePicture: string;
  bannerPicture?: string;
  username: string;
  password: string;
  isCritic: boolean;
  createdAt: Date;
  bio?: string;
}

export interface ITeamMember {
  _id: number | string;
  name: string;
  email: string;
  designation: string;
  img: string;
  facebook: string;
  twitter: string;
  linkedin: string;
}

export interface IUser {
  _id: number | string;
  name: string;
  email: string;
  password?: string;
  img: string;
}

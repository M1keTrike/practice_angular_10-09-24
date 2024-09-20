import { IUser } from '../../users/modelo/iuser';

export interface PostView {
  posted_by: IUser;
  title: string;
  body: string;
}

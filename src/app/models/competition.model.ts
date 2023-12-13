import { User } from './user.model';

export interface Competition {
  name: string;
  usersAmount: number;
  isOver: boolean;
  daysPast: number;
  bestUsers: User[];
}

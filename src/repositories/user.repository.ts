import { User } from '../entities/user';

export interface UserRepository {
  find(): Promise<User[]>;
  create(user: User): Promise<void>;
  findUserByEmail(email: string): Promise<User | null>;
}

import { User } from '../../entities/user';
import { UserRepository } from '../user.repository';

export class InMemoryUserRepository implements UserRepository {
  public items: User[] = [];

  async find(): Promise<User[]> {
    return this.items;
  }

  async create(user: User): Promise<void> {
    this.items.push(user);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = this.items.find((item) => {
      return item.email === email;
    });

    if (!user) {
      return null;
    }

    return user;
  }
}

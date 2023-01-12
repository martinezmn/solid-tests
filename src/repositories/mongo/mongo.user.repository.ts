import { User } from '../../entities/user';
import { UserRepository } from '../user.repository';
import { UserSchema } from './schemas/user.schema';

export class MongoUserRepository implements UserRepository {
  async find(): Promise<User[]> {
    const users = await UserSchema.find();

    return users.map((user) => {
      return new User(user);
    });
  }

  async create(user: User): Promise<void> {
    const userSchema = new UserSchema({
      email: user.email,
      password: user.password,
      name: user.name,
    });

    userSchema.save();
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = UserSchema.findOne({ email });

    if (!user) {
      return null;
    }

    return user;
  }
}

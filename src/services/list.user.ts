import { User } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';

type ListUserResponse = User[];

export class ListUser {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<ListUserResponse> {
    const users = await this.userRepository.find();

    return users;
  }
}

import { User } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';
import { Conflict } from 'http-errors';

interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
}

type CreateUserResponse = User;

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    password,
    name,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User({ email, password, name });

    const emailAlreadyExists = await this.userRepository.findUserByEmail(
      user.email
    );

    if (emailAlreadyExists) {
      throw new Conflict('Email already exists');
    }

    await this.userRepository.create(user);

    return user;
  }
}

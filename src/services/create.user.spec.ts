import { describe, expect, it } from 'vitest';
import { User } from '../entities/user';
import { InMemoryUserRepository } from '../repositories/in-memory/in.memory.user.repository';
import { CreateUser } from './create.user';

describe('Create User', () => {
  it('should be able to create an user', () => {
    const userRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(userRepository);

    expect(
      createUser.execute({
        email: 'pedro@gmail.com',
        password: '123123',
        name: 'Pedro Primeiro',
      })
    ).resolves.toBeInstanceOf(User);
  });

  it('should not be able to create users with duplicated email', async () => {
    const userRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(userRepository);

    await createUser.execute({
      email: 'pedro@gmail.com',
      password: '123123',
      name: 'Pedro Primeiro',
    });

    expect(
      createUser.execute({
        email: 'pedro@gmail.com',
        password: '321321',
        name: 'Pedro Segundo',
      })
    ).rejects.toBeInstanceOf(Error);
  });
});

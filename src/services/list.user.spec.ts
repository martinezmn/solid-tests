import { describe, expect, it } from 'vitest';
import { InMemoryUserRepository } from '../repositories/in-memory/in.memory.user.repository';
import { ListUser } from './list.user';

describe('List Users', () => {
  it('should be able to list an empty list of users', async () => {
    const userRepository = new InMemoryUserRepository();
    const listUser = new ListUser(userRepository);

    await expect(listUser.execute()).resolves.toMatchObject([]);
  });
});

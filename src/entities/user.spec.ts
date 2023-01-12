import { expect, test } from 'vitest';
import { User } from './user';

test('create an user', () => {
  const user = new User({
    email: 'gabriel@gmail.com',
    password: '123456',
    name: 'Gabriel Martinez',
  });

  expect(user).toBeInstanceOf(User);
  expect(user.name).toEqual('Gabriel Martinez');
});

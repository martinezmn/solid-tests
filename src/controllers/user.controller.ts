import { Request, Response } from 'express';
import { MongoUserRepository } from '../repositories/mongo/mongo.user.repository';
import { CreateUser } from '../services/create.user';
import { ListUser } from '../services/list.user';

export default class UserController {
  static async list(req: Request, res: Response) {
    const mongoUserRepository = new MongoUserRepository();
    const listUser = new ListUser(mongoUserRepository);

    const users = await listUser.execute();

    res.status(200).send(users);
  }

  static async create(req: Request, res: Response) {
    const { email, password, name } = req.body;

    const mongoUserRepository = new MongoUserRepository();
    const createUser = new CreateUser(mongoUserRepository);

    const user = await createUser.execute({ email, password, name });

    res.status(201).send(user);
  }
}

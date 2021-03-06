import { CreateUserService } from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const createUser = await createUserService.execute({
      username,
      email,
      password,
    });

    return response.status(201).json(createUser);
  }
}

export { CreateUserController };

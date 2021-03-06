import { CreateDogService } from '@modules/dogs/services/CreateDogService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateDogController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { name, weight, age } = request.body;

    const createDogService = container.resolve(CreateDogService);

    const createDog = await createDogService.execute({
      user_id: id,
      name,
      weight,
      age,
    });

    return response.status(201).json(createDog);
  }
}

export { CreateDogController };

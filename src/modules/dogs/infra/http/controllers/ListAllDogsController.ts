import { ListAllDogsService } from '@modules/dogs/services/ListAllDogsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListAllDogsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllDogsService = container.resolve(ListAllDogsService);

    const allDogs = await listAllDogsService.execute();

    return response.json(allDogs);
  }
}

export { ListAllDogsController };

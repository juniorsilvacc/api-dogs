import { ListDogCommentsService } from '@modules/dogs/services/ListDogCommentsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListDogCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listDogCommentsService = container.resolve(ListDogCommentsService);

    const dogs = await listDogCommentsService.execute(id);

    return response.json(dogs);
  }
}

export { ListDogCommentsController };

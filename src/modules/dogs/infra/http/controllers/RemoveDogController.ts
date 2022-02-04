import { RemoveDogService } from '@modules/dogs/services/RemoveDogService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class RemoveDogController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeDogService = container.resolve(RemoveDogService);

    await removeDogService.execute(id);

    return response.status(204).send();
  }
}

export { RemoveDogController };

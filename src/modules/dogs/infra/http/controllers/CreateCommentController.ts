import { CreateCommentService } from '@modules/dogs/services/CreateCommentService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { comment, user_id, dog_id } = request.body;

    const createCommentService = container.resolve(CreateCommentService);

    await createCommentService.execute({
      comment,
      dog_id,
      user_id,
    });

    return response.status(204).send();
  }
}

export { CreateCommentController };

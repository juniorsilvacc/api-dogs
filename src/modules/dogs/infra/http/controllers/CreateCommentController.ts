import { CreateCommentService } from '@modules/dogs/services/CreateCommentService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { comment, user_id } = request.body;

    const createCommentService = container.resolve(CreateCommentService);

    await createCommentService.execute({
      dog_id: id,
      user_id,
      comment,
    });

    return response.status(204).send();
  }
}

export { CreateCommentController };

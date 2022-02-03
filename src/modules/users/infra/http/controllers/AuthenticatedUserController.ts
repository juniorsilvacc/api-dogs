import { AuthenticatedUserService } from '@modules/users/services/AuthenticatedUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class AuthenticatedUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticatedUserService = container.resolve(
      AuthenticatedUserService,
    );

    const authenticated = await authenticatedUserService.execute({
      email,
      password,
    });

    return response.json(authenticated);
  }
}

export { AuthenticatedUserController };

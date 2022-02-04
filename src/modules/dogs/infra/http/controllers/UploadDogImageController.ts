import { UploadDogImageService } from '@modules/dogs/services/UploadDogImageService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UploadDogImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const uploadDogImageService = container.resolve(UploadDogImageService);

    await uploadDogImageService.execute({
      dog_id: request.params.id,
      image_name: request.file?.filename as string,
    });

    return response.status(201).send();
  }
}

export { UploadDogImageController };

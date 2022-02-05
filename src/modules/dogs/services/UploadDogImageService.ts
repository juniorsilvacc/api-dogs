import { inject, injectable } from 'tsyringe';
import { IDogImageRepository } from '../domain/repositories/IDogImageRepository';

interface IRequest {
  dog_id: string;
  image_name: string;
}

@injectable()
class UploadDogImageService {
  constructor(
    @inject('DogImageRepository')
    private dogImageRepository: IDogImageRepository,
  ) {}

  async execute({ dog_id, image_name }: IRequest): Promise<void> {
    await this.dogImageRepository.create(dog_id, image_name);
  }
}

export { UploadDogImageService };

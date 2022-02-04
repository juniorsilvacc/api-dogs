import { IDogImage } from '@modules/dogs/domain/models/IDogImage';
import { IDogImageRepository } from '@modules/dogs/domain/repositories/IDogImageRepository';
import { getRepository, Repository } from 'typeorm';
import { DogImage } from '../entities/DogImage';

class DogImageRepository implements IDogImageRepository {
  private repository: Repository<DogImage>;

  constructor() {
    this.repository = getRepository(DogImage);
  }

  async create(dog_id: string, image_name: string): Promise<IDogImage> {
    const dogImage = this.repository.create({
      dog_id,
      image_name,
    });

    await this.repository.save(dogImage);

    return dogImage;
  }
}

export { DogImageRepository };

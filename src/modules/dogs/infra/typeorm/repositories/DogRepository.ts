import { ICreateDogDTO } from '@modules/dogs/domain/dtos/ICreateDogDTO';
import { IDog } from '@modules/dogs/domain/models/IDog';
import { IDogRepository } from '@modules/dogs/domain/repositories/IDogRepository';
import { getRepository, Repository } from 'typeorm';
import { Dog } from '../entities/Dog';

class DogRepository implements IDogRepository {
  private repository: Repository<Dog>;

  constructor() {
    this.repository = getRepository(Dog);
  }

  async create({ name, weight, age }: ICreateDogDTO): Promise<IDog> {
    const dog = this.repository.create({
      name,
      weight,
      age,
    });

    await this.repository.save(dog);

    return dog;
  }
}

export { DogRepository };

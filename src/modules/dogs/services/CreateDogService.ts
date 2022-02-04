import { inject, injectable } from 'tsyringe';
import { ICreateDogDTO } from '../domain/dtos/ICreateDogDTO';
import { IDog } from '../domain/models/IDog';
import { IDogRepository } from '../domain/repositories/IDogRepository';

@injectable()
class CreateDogService {
  constructor(
    @inject('DogRepository')
    private dogRepository: IDogRepository,
  ) {}

  async execute({ name, weight, age }: ICreateDogDTO): Promise<IDog> {
    const dog = await this.dogRepository.create({
      name,
      weight,
      age,
    });

    return dog;
  }
}

export { CreateDogService };

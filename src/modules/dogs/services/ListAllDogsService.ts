import { inject, injectable } from 'tsyringe';
import { IDog } from '../domain/models/IDog';
import { IDogRepository } from '../domain/repositories/IDogRepository';

@injectable()
class ListAllDogsService {
  constructor(
    @inject('DogRepository')
    private dogRepository: IDogRepository,
  ) {}

  async execute(): Promise<IDog[]> {
    const allDogs = await this.dogRepository.findAllDogs();

    return allDogs;
  }
}

export { ListAllDogsService };

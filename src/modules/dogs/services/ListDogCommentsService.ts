import { inject, injectable } from 'tsyringe';
import { IDog } from '../domain/models/IDog';
import { IDogRepository } from '../domain/repositories/IDogRepository';

@injectable()
class ListDogCommentsService {
  constructor(
    @inject('DogRepository')
    private dogRepository: IDogRepository,
  ) {}

  async execute(user_id: string): Promise<IDog[]> {
    const dogsByUser = await this.dogRepository.findByUser(user_id);

    return dogsByUser;
  }
}

export { ListDogCommentsService };

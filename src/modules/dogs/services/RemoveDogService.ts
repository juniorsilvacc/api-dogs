import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IDogRepository } from '../domain/repositories/IDogRepository';

@injectable()
class RemoveDogService {
  constructor(
    @inject('DogRepository')
    private dogRepository: IDogRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const dog = await this.dogRepository.findById(id);

    if (!dog) {
      throw new AppError('This post not does exists');
    }

    await this.dogRepository.delete(id);
  }
}

export { RemoveDogService };

import { inject, injectable } from 'tsyringe';
import { ICreateCommentDTO } from '../domain/dtos/ICreateCommentDTO';
import { ICommentRepository } from '../domain/repositories/ICommentRepository';

@injectable()
class CreateCommentService {
  constructor(
    @inject('CommentRepository')
    private commentsRepository: ICommentRepository,
  ) {}

  async execute({
    comment,
    dog_id,
    user_id,
  }: ICreateCommentDTO): Promise<void> {
    await this.commentsRepository.create({
      comment,
      dog_id,
      user_id,
    });
  }
}

export { CreateCommentService };

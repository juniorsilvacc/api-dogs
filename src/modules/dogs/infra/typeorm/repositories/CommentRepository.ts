import { ICreateCommentDTO } from '@modules/dogs/domain/dtos/ICreateCommentDTO';
import { IComment } from '@modules/dogs/domain/models/IComment';
import { ICommentRepository } from '@modules/dogs/domain/repositories/ICommentRepository';
import { getRepository, Repository } from 'typeorm';
import { Comment } from '../entities/Comment';

class CommentRepository implements ICommentRepository {
  private repository: Repository<Comment>;

  constructor() {
    this.repository = getRepository(Comment);
  }

  async create({
    comment,
    dog_id,
    user_id,
  }: ICreateCommentDTO): Promise<IComment> {
    const commentPost = this.repository.create({
      comment,
      dog_id,
      user_id,
    });

    await this.repository.save(commentPost);

    return commentPost;
  }
}

export { CommentRepository };

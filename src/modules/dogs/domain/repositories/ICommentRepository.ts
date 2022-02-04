import { ICreateCommentDTO } from '../dtos/ICreateCommentDTO';
import { IComment } from '../models/IComment';

interface ICommentRepository {
  create(data: ICreateCommentDTO): Promise<IComment>;
}

export { ICommentRepository };

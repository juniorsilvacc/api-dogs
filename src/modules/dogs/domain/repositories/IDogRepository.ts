import { ICreateDogDTO } from '../dtos/ICreateDogDTO';
import { IDog } from '../models/IDog';

interface IDogRepository {
  create(data: ICreateDogDTO): Promise<IDog>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<IDog | undefined>;
  findByUser(user_id: string): Promise<IDog[]>;
}

export { IDogRepository };

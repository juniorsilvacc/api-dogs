import { ICreateDogDTO } from '../dtos/ICreateDogDTO';
import { IDog } from '../models/IDog';

interface IDogRepository {
  create(data: ICreateDogDTO): Promise<IDog>;
}

export { IDogRepository };

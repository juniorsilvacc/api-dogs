import { IDogImage } from '../models/IDogImage';

interface IDogImageRepository {
  create(dog_id: string, image_name: string): Promise<IDogImage>;
}

export { IDogImageRepository };

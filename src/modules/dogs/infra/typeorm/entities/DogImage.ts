import { IDogImage } from '@modules/dogs/domain/models/IDogImage';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('dog_images')
class DogImage implements IDogImage {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  dog_id: string;

  @Column()
  image_name: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { DogImage };

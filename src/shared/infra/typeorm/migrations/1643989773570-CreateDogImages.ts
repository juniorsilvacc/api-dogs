import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDogImages1643989773570 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dog_images',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'dog_id',
            type: 'uuid',
          },
          {
            name: 'image_name',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKDogImage',
            referencedTableName: 'dogs',
            referencedColumnNames: ['id'],
            columnNames: ['dog_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dog_images');
  }
}

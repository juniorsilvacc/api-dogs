import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIdUserInTableDog1643999679574 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'dogs',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('dogs', 'user_id');
  }
}

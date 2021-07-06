import { MigrationInterface, QueryRunner } from 'typeorm';

export class lottery1625157895313 implements MigrationInterface {
  name = 'lottery1625157895313';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `ticket` (`id` int NOT NULL AUTO_INCREMENT, `number` varchar(255) NOT NULL, `price` varchar(255) NOT NULL, `unit` int NOT NULL, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `agentId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `agent` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `draw` (`id` int NOT NULL AUTO_INCREMENT, `date` datetime NOT NULL, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `ticket` ADD CONSTRAINT `FK_f5989db50fbbea2647f37d0d4d1` FOREIGN KEY (`agentId`) REFERENCES `agent`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `ticket` DROP FOREIGN KEY `FK_f5989db50fbbea2647f37d0d4d1`',
    );
    await queryRunner.query('DROP TABLE `draw`');
    await queryRunner.query('DROP TABLE `agent`');
    await queryRunner.query('DROP TABLE `ticket`');
  }
}

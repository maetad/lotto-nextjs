import { MigrationInterface, QueryRunner } from 'typeorm';

export class ticket1625158226521 implements MigrationInterface {
  name = 'ticket1625158226521';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `ticket` ADD `drawId` int NULL');
    await queryRunner.query(
      'ALTER TABLE `ticket` DROP FOREIGN KEY `FK_f5989db50fbbea2647f37d0d4d1`',
    );
    await queryRunner.query(
      'ALTER TABLE `ticket` CHANGE `agentId` `agentId` int NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `ticket` ADD CONSTRAINT `FK_f5989db50fbbea2647f37d0d4d1` FOREIGN KEY (`agentId`) REFERENCES `agent`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `ticket` ADD CONSTRAINT `FK_cdc95b93e056aaaed871aca81fc` FOREIGN KEY (`drawId`) REFERENCES `draw`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `ticket` DROP FOREIGN KEY `FK_cdc95b93e056aaaed871aca81fc`',
    );
    await queryRunner.query(
      'ALTER TABLE `ticket` DROP FOREIGN KEY `FK_f5989db50fbbea2647f37d0d4d1`',
    );
    await queryRunner.query(
      "ALTER TABLE `ticket` CHANGE `agentId` `agentId` int NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      'ALTER TABLE `ticket` ADD CONSTRAINT `FK_f5989db50fbbea2647f37d0d4d1` FOREIGN KEY (`agentId`) REFERENCES `agent`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query('ALTER TABLE `ticket` DROP COLUMN `drawId`');
  }
}

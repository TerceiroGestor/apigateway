import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685066919053 implements MigrationInterface {
    name = 'Default1685066919053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" ADD "permissions" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "permissions"`);
    }

}

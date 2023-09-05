import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTables1683641422814 implements MigrationInterface {
    name = 'UpdateTables1683641422814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "zipCode" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "zipCode" DROP NOT NULL`);
    }

}

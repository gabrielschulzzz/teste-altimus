import {MigrationInterface, QueryRunner} from "typeorm";

export class CriarCarTable1622311485119 implements MigrationInterface {
    name = 'CriarCarTable1622311485119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "placa" character varying NOT NULL, "marca" character varying NOT NULL, "modelo" character varying NOT NULL, "ano" character varying NOT NULL, "quilometragem" integer NOT NULL, "opcionais" text array, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cars"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class createProd1671739639411 implements MigrationInterface {
    name = 'createProd1671739639411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "year" integer NOT NULL, "kilometers" integer NOT NULL, "ad_type" character varying NOT NULL, "price" character varying NOT NULL, "user" character varying NOT NULL, "comments" character varying, "vehicle_type" character varying NOT NULL, "images" character varying NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}

/*
  Warnings:

  - Made the column `mainQuestion` on table `elections` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `elections` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nameOrganization` on table `elections` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "elections" ALTER COLUMN "mainQuestion" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "nameOrganization" SET NOT NULL;

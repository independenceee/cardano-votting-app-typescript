/*
  Warnings:

  - Added the required column `addressWallet` to the `Ballot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ballot" ADD COLUMN     "addressWallet" TEXT NOT NULL;

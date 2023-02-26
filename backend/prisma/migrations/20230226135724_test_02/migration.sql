/*
  Warnings:

  - You are about to drop the column `candidateId` on the `candidate` table. All the data in the column will be lost.
  - Added the required column `electionId` to the `candidate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "candidate" DROP CONSTRAINT "candidate_candidateId_fkey";

-- AlterTable
ALTER TABLE "candidate" DROP COLUMN "candidateId",
ADD COLUMN     "electionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "candidate" ADD CONSTRAINT "candidate_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "elections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

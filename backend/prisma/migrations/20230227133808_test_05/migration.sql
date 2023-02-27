-- DropForeignKey
ALTER TABLE "elections" DROP CONSTRAINT "elections_userId_fkey";

-- AddForeignKey
ALTER TABLE "elections" ADD CONSTRAINT "elections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

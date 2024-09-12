/*
  Warnings:

  - The values [DRAFT] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('DRAFT_BY_REPORTER', 'UNDER_REVIEW', 'FEEDBACK_OPEN', 'APPROVED', 'PUBLISHED');
ALTER TABLE "NewsArticle" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "NewsArticle" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "NewsArticle" ALTER COLUMN "status" SET DEFAULT 'DRAFT_BY_REPORTER';
COMMIT;

-- AlterTable
ALTER TABLE "NewsArticle" ADD COLUMN     "newsCourtesy" TEXT,
ADD COLUMN     "newsImage" TEXT,
ADD COLUMN     "newsPriority" TEXT,
ADD COLUMN     "newsSource" TEXT,
ADD COLUMN     "newsVideoLink" TEXT,
ADD COLUMN     "reportedTimeCST" TEXT,
ADD COLUMN     "reportedTimeIST" TEXT,
ADD COLUMN     "reportingCountry" TEXT,
ADD COLUMN     "reworkComments" TEXT,
ADD COLUMN     "storyId" INTEGER,
ALTER COLUMN "status" SET DEFAULT 'DRAFT_BY_REPORTER';

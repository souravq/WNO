/*
  Warnings:

  - You are about to drop the `NewsArticle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NewsArticle";

-- CreateTable
CREATE TABLE "masternewsarticle" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[],
    "status" "Status" NOT NULL DEFAULT 'DRAFT_BY_REPORTER',
    "newsImage" TEXT,
    "newsVideoLink" TEXT,
    "reworkComments" TEXT,
    "newsSource" TEXT,
    "newsCourtesy" TEXT,
    "newsPriority" TEXT,
    "storyId" INTEGER,
    "reportedTimeIST" TEXT,
    "reportingCountry" TEXT,
    "reportedTimeCST" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "masternewsarticle_pkey" PRIMARY KEY ("id")
);

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT_BY_REPORTER', 'UNDER_REVIEW', 'FEEDBACK_OPEN', 'APPROVED', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EDITOR', 'REPORTER');

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

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'REPORTER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

/*
  Warnings:

  - Added the required column `images` to the `Superhero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Superhero" ADD COLUMN     "catch_phrase" TEXT,
ADD COLUMN     "images" TEXT NOT NULL,
ALTER COLUMN "origin_description" DROP NOT NULL;

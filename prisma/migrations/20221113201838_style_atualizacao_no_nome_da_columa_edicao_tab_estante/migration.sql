/*
  Warnings:

  - You are about to drop the column `Edicao` on the `estante` table. All the data in the column will be lost.
  - Added the required column `edicao` to the `estante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "estante" DROP COLUMN "Edicao",
ADD COLUMN     "edicao" TEXT NOT NULL;

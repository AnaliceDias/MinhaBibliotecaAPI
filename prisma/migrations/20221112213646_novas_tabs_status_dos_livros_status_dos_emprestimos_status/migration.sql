/*
  Warnings:

  - You are about to drop the column `livroId` on the `statusDosLivros` table. All the data in the column will be lost.
  - You are about to drop the column `statusId` on the `statusDosLivros` table. All the data in the column will be lost.
  - You are about to drop the `status` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[status]` on the table `statusDosLivros` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `statusEmprestimo` to the `emprestimos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusLivro` to the `estante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `statusDosLivros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "statusDosLivros" DROP CONSTRAINT "statusDosLivros_livroId_fkey";

-- DropForeignKey
ALTER TABLE "statusDosLivros" DROP CONSTRAINT "statusDosLivros_statusId_fkey";

-- AlterTable
ALTER TABLE "emprestimos" ADD COLUMN     "statusEmprestimo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "estante" ADD COLUMN     "statusLivro" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "statusDosLivros" DROP COLUMN "livroId",
DROP COLUMN "statusId",
ADD COLUMN     "status" TEXT NOT NULL;

-- DropTable
DROP TABLE "status";

-- CreateTable
CREATE TABLE "statusDosEmprestimos" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "statusDosEmprestimos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "statusDosEmprestimos_status_key" ON "statusDosEmprestimos"("status");

-- CreateIndex
CREATE UNIQUE INDEX "statusDosLivros_status_key" ON "statusDosLivros"("status");

-- AddForeignKey
ALTER TABLE "estante" ADD CONSTRAINT "estante_statusLivro_fkey" FOREIGN KEY ("statusLivro") REFERENCES "statusDosLivros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimos" ADD CONSTRAINT "emprestimos_statusEmprestimo_fkey" FOREIGN KEY ("statusEmprestimo") REFERENCES "statusDosEmprestimos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "estante" (
    "id" SERIAL NOT NULL,
    "nomeDoLivro" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "Edicao" TEXT NOT NULL,

    CONSTRAINT "estante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statusDosLivros" (
    "id" SERIAL NOT NULL,
    "livroId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "statusDosLivros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emprestimos" (
    "id" SERIAL NOT NULL,
    "livroId" INTEGER NOT NULL,
    "quemPegou" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "emprestimos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "status_status_key" ON "status"("status");

-- AddForeignKey
ALTER TABLE "statusDosLivros" ADD CONSTRAINT "statusDosLivros_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "estante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statusDosLivros" ADD CONSTRAINT "statusDosLivros_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimos" ADD CONSTRAINT "emprestimos_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "estante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

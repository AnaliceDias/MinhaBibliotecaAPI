import { estante , statusDosLivros , statusDosEmprestimos , emprestimos } from "@prisma/client";

export type livroInterface = Omit< estante , "id" >
export type statusDosEmprestimosInterface = Omit< statusDosEmprestimos , "id" >
export type statusDosLivrosInterface = Omit< statusDosLivros , "id" >
export type emprestimosInterface = Omit< emprestimos , "id" >
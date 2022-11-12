import { estante , status , statusDosLivros , emprestimos } from "@prisma/client";

export type livroInterface = Omit< estante , "id" >
export type statusInterface = Omit< status , "id" >
export type statusDosLivrosInterface = Omit< statusDosLivros , "id" >
export type emprestimosInterface = Omit< emprestimos , "id" >
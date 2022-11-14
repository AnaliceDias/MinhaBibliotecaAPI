import db from "../src/config/database";
import { statusDosLivrosInterface , statusDosEmprestimosInterface } from "../src/interfaces/interfaces";

async function main(){
    const listaStatusLivros : Omit <statusDosLivrosInterface , "id">[] = [
        {status: "disponível"},
        {status: "emprestado"},
    ];

    const listaStatusEmprestimos : Omit <statusDosEmprestimosInterface , "id">[] = [
        {status: "ativo"},
        {status: "finalizado"},
    ];

    await db.statusDosLivros.createMany({ data: listaStatusLivros });
    await db.statusDosEmprestimos.createMany({ data: listaStatusEmprestimos });
}

main();
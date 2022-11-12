import db from "../src/config/database";
import { statusDosLivrosInterface , statusDosEmprestimosInterface } from "../src/interfaces/index";

async function main(){
    const listaStatusLivros : Omit <statusDosLivrosInterface , "id">[] = [
        {status: "Disponível"},
        {status: "Emprestado"},
    ];

    const listaStatusEmprestimos : Omit <statusDosEmprestimosInterface , "id">[] = [
        {status: "Ativo"},
        {status: "Finalizado"},
    ];

    await db.statusDosLivros.createMany({ data: listaStatusLivros });
    await db.statusDosEmprestimos.createMany({ data: listaStatusEmprestimos });
}

main();
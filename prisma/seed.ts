import db from "../src/config/database";
import { statusInterface } from "../src/interfaces/index";

async function main(){
    const listaStatus : Omit <statusInterface , "id">[] = [
        {status: "Disponível"},
        {status: "Emprestado"},
    ];

    await db.status.createMany({ data: listaStatus });
}

main();
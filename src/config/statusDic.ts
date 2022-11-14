import { solicitarStatusEmprestimos, solicitarStatusLivros } from "../repositories/statusRepositories";

export let statusLivros: {
    "disponivel": number,
    "emprestado": number    
};
export let statusEmprestimos: {
    "ativo": number,
    "finalizado": number
};

async function main(){
    statusLivros = {
        "disponivel": await solicitarStatusLivros("disponível"),
        "emprestado": await solicitarStatusLivros("emprestado")
    };

    statusEmprestimos = {
        "ativo": await solicitarStatusEmprestimos("ativo"),
        "finalizado": await solicitarStatusEmprestimos("finalizado")
    };

    return {
        statusLivros,
        statusEmprestimos
    };
}

main();
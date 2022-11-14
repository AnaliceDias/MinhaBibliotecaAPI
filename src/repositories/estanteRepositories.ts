import db from "../config/database";

export async function listarLivrosRepository(){
    return await db.estante.findMany();
}

export async function listarEmprestimosRepository(){
    return await db.emprestimos.findMany();
}

export async function adicionarLivroRepository(nome: string, autor: string, edicao: string, status: number){
    return await db.estante.create({
        data: {
            nomeDoLivro: nome,
            autor: autor,
            edicao: edicao,
            statusLivro: status
        }
    });
}

export async function removerLivroRepository(id: number){

    return await db.estante.delete({
        where: {
            id: id,
        }
    });

}

export async function registarEmprestimoRepository(livroId: number , quemPegou: string , status: number){
    return await db.emprestimos.create({
        data: {
            livroId: livroId,
            quemPegou: quemPegou,
            statusEmprestimo: status
        }
    });
}

export async function registrarDevolucaoRepository(id: number , status: number){
    return await db.emprestimos.update({
        where: {
            id: id,
        },
        data: {
            statusEmprestimo: status,
        },
    });
}

export async function atualizarStatuslivroRepository(id: number , status: number){
    return await db.estante.update({
        where: {
            id: id,
        },
        data: {
            statusLivro: status
        }
    });
}

export async function solicitarLivroEmprestadoIdRepository(idEmprestimo: number){
    const livroEmprestado = await db.emprestimos.findUnique({
        where: {
            id: idEmprestimo
        }
    });

    return livroEmprestado.livroId;
}
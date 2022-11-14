import { Request, Response } from "express";
import { adicionarLivroRepository, atualizarStatuslivroRepository, listarEmprestimosRepository, listarLivrosRepository, registarEmprestimoRepository, registrarDevolucaoRepository, removerLivroRepository, solicitarLivroEmprestadoIdRepository } from "../repositories/estanteRepositories";
import { statusLivros , statusEmprestimos } from "../config/statusDic";

export async function addLivroController (req: Request , res: Response){
    const livro = req.body;
    try{
        await adicionarLivroRepository(livro.nome , livro.autor, livro.edicao, statusLivros.disponivel);

        res.status(201).send("Livro adicionado");
        
    }catch(e){
        res.send(e);
    }
}

export async function removerLivroController (req: Request , res: Response){
    try{
        const idLivro = +req.params.idLivro;
        await removerLivroRepository(idLivro);

        res.status(200);
   
    }catch(e){
        console.log(e);
        res.send(500);
    }

}

export async function emprestimoController (req: Request , res: Response){
    const livroId = +req.params.idLivro;
    const quemPegou = req.body.quemPegou;

    try{
        await atualizarStatuslivroRepository(livroId , statusLivros.emprestado);
        await registarEmprestimoRepository(livroId , quemPegou , statusEmprestimos.ativo);

        res.send("Empréstimo registrado");
    }catch(e){
        res.send(e);
    }   
}

export async function devolucaoController (req: Request , res: Response){
    const emprestimoId = +req.params.idEmprestimo;

    try{
        const livroId = await solicitarLivroEmprestadoIdRepository(emprestimoId);
        await atualizarStatuslivroRepository(livroId , statusLivros.disponivel);
        await registrarDevolucaoRepository(emprestimoId  , statusEmprestimos.finalizado);

        res.send("Livro Devolvido");

    }catch(e){
        res.send(e);
    }
}

export async function listarLivrosController (req: Request , res: Response){
    try{
        const lista = await listarLivrosRepository();
        res.send(lista);
    }catch(e){
        console.log(e);
        res.status(500);
    }
}

export async function listarEmprestimosController (req: Request , res: Response){
    try{
        const lista = await listarEmprestimosRepository();
        res.send(lista);
    }catch(e){
        console.log(e);
        res.status(500);
    }
}
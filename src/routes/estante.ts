import { Router } from "express";
import { addLivroController, devolucaoController, emprestimoController, listarEmprestimosController, listarLivrosController, removerLivroController } from "../controllers/estanteController";
import validarSchema from "../middlewares/validarSchema";
import { emprestimoSchema, livroSchema } from "../schemas/estanteSchemas";

const estanteRouter = Router();

estanteRouter.post("/estante/cadastrar" , validarSchema(livroSchema) , addLivroController);
estanteRouter.post("/estante/remover/:idLivro" , removerLivroController);
estanteRouter.post("/estante/emprestar/:idLivro" , validarSchema(emprestimoSchema) , emprestimoController);
estanteRouter.put("/estante/devolver/:idEmprestimo" , devolucaoController);
estanteRouter.get("/estante/livros" , listarLivrosController);
estanteRouter.get("/estante/emprestimos" , listarEmprestimosController);

export default estanteRouter;
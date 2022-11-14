import Joi, { Schema } from "joi";

export const livroSchema: Schema = Joi.object({
    nome: Joi.string(),
    autor: Joi.string(),
    edicao: Joi.string()
});

export const emprestimoSchema: Schema = Joi.object({quemPegou: Joi.string()});
import { Entidade } from "shared";

export interface Aula extends Entidade {
    nome: string
    duracao: number
    videoURL: string
    visivel: boolean
    ordem: number
}
import { Entidade } from 'shared';
import { Nivel } from './Nivel';
import { Aula } from './Aula'

export interface Curso extends Entidade {
    nome: string
    nivel: Nivel
    instrutores: string[]
    aulas: Aula[]
}
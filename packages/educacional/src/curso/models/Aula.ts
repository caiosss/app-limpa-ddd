import { Entidade, EntidadeProps } from "shared";

export interface AulaProps extends EntidadeProps {
    nome?: string
    duracao?: number
    videoURL?: string
    visivel?: boolean
    ordem?: number
}

export default class Aula extends Entidade<Aula, AulaProps> {
    constructor(readonly props: AulaProps) {
        super(props)
    }

    static novo(props: Partial<AulaProps>): Aula {
        return new Aula({
            ...props
        } as AulaProps)
    }
    
    get nome() { 
        return this.props.nome 
    }

    get duracao() {
        return this.props.duracao
    }

    get video() {
        return this.props.videoURL
    }
}
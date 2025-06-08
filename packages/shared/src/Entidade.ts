import Id from "./Id"

export interface EntidadeProps {
    id: string
}

export default class Entidade<E, P extends EntidadeProps> {

    constructor(readonly props: P){
        this.props = {
            ...props, 
            id: props.id ?? Id.newHash(),
        }
    }

    get id() {
        return this.props.id
    }

    igual(entidade: E):boolean {
        return this.id === (entidade as any).id
    }

    diferente(entidade: E): boolean {
        return !this.igual(entidade)
    }

    clone(props: Partial<P>): E {
        return new(this.constructor as any)({
            ...this.props, 
            ...props
        })
    }

}
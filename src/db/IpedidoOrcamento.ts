// Interface que exporta os métodos que deverão ser implementadas.
export interface IpedidoOrcamento<T> {
    save(obj: T): Promise<string>
}
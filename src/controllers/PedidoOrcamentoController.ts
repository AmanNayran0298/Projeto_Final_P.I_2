import { Response, Request } from "express";
// import { getAll, MongoPedidoOrcamentoRepository } from "../db/mongo/repositories/MongoPedidoOrcamentoRepository";
// importar repositorio especifico
// importar comandos

export class PedidoOrcamentoController {
    // instanciar repositorio

    // criar métodos get, create, etc...
    // executar uma query/command passando como parametro o a instancia do repositorio criada

    public async getPedido (req: Request, res: Response): Promise<Response>{
        // const data = MongoPedidoOrcamentoRepository.getAll()
        // console.log(data);
        
        return res.status(200).json({ 'ok': 'ok' })
    }

    // public async create (req: Request, res: Response): Promise<Response> => {
    //     const {
    //         numeroPedido,
    //         marcaVeiculo,
    //         modeloVeiculo,
    //         quilometragem,
    //         servicos,
    //         totalServico,
    //         dataPedidoOrcamento
    //     } = req.body


    //     return res.status(201).json({ numeroPedido, marcaVeiculo, modeloVeiculo, quilometragem, servicos, totalServico, dataPedidoOrcamento })
    // }
}
import { Response, Request } from "express";
// importar repositorio especifico
// importar comandos

export class PedidoOrcamentoController {
    // instanciar repositorio

    // criar métodos get, create, etc...
    // executar uma query/command passando como parametro o a instancia do repositorio criada

    public getPedido = async (req: Request, res: Response) => {
        return res.status(200).json({ msg: 'ok' })
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        const {
            numeroPedido,
            marcaVeiculo,
            modeloVeiculo,
            quilometragem,
            servicos,
            totalServico,
            dataPedidoOrcamento
        } = req.body


        return res.status(201).json({ numeroPedido, marcaVeiculo, modeloVeiculo, quilometragem, servicos, totalServico, dataPedidoOrcamento })
    }
}
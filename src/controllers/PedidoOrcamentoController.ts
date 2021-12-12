import { Response, Request } from "express";
import { MongoPedidoOrcamentoRepository } from "../db/mongo/repositories/MongoPedidoOrcamentoRepository";
// import { getAll, MongoPedidoOrcamentoRepository } from "../db/mongo/repositories/MongoPedidoOrcamentoRepository";
// importar repositorio especifico
// importar comandos

export class PedidoOrcamentoController {
    // instanciar repositorio
    // const mongoDbRepo = new MongoPedidoOrcamentoRepository();

    // criar métodos get, create, etc...
    // executar uma query/command passando como parametro o a instancia do repositorio criada

    public async getPedido(req: Request, res: Response): Promise<Response> {
        // const data = mongoDbRepo.getAll()
        // console.log(data);

        return res.status(200).json({ 'ok': 'ok' })
    }

    public async createPedido(req: Request, res: Response): Promise<Response> {
        const {
            numeroPedido,
            marcaVeiculo,
            modeloVeiculo,
            quilometragem,
            servicos,
            totalServico,
            dataPedidoOrcamento
        } = req.body
        if (!numeroPedido || !marcaVeiculo || !modeloVeiculo || !quilometragem || !servicos || !totalServico || !dataPedidoOrcamento){
            return res.status(400).json( { msg: "not ok"})
        }
        console.log(numeroPedido,
            marcaVeiculo,
            modeloVeiculo,
            quilometragem,
            servicos,
            totalServico,
            dataPedidoOrcamento);


        return res.status(201).json({ numeroPedido, marcaVeiculo, modeloVeiculo, quilometragem, servicos, totalServico, dataPedidoOrcamento })
    }
}
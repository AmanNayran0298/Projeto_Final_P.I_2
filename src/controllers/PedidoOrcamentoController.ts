import { Response, Request } from "express";
import { FirebasePedidoOrcamentoRepository } from "../db/firebase/repositories/FirebasePedidoOrcamentoRepository";
import { MongoPedidoOrcamentoRepository } from "../db/mongo/repositories/MongoPedidoOrcamentoRepository";
// importar repositorio especifico
// importar comandos
export class PedidoOrcamentoController {
    // instanciar repositorio

    // criar métodos get, create, etc...
    // executar uma query/command passando como parametro o a instancia do repositorio criada

    public async getPedido(req: Request, res: Response): Promise<Response> {
        const data = new FirebasePedidoOrcamentoRepository().getAll();
        console.log(await data);

        // const data = MongoPedidoOrcamentoRepository.getAll()
        // console.log(data);

        return res.status(200).json(await data)
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
        if (!numeroPedido || !marcaVeiculo || !modeloVeiculo || !quilometragem || !servicos || !totalServico || !dataPedidoOrcamento) {
            return res.status(400).json({ msg: "not ok" })
        }
        console.log(numeroPedido,
            marcaVeiculo,
            modeloVeiculo,
            quilometragem,
            servicos,
            totalServico,
            dataPedidoOrcamento);
        console.log('tried');

        new FirebasePedidoOrcamentoRepository().save({
            numeroPedido,
            marcaVeiculo,
            modeloVeiculo,
            quilometragem,
            servicos,
            totalServico,
            dataPedidoOrcamento
        })


        return res.status(201).json({ ok: "ok" })
    }
}
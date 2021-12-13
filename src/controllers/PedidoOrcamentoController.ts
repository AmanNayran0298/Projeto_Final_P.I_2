import { Response, Request } from "express";
import { FirebasePedidoOrcamentoRepository } from "../db/firebase/repositories/FirebasePedidoOrcamentoRepository";

export class PedidoOrcamentoController {

    public async getPedido(req: Request, res: Response): Promise<Response> {
        const data = new FirebasePedidoOrcamentoRepository().getAll();
        console.log(await data);
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
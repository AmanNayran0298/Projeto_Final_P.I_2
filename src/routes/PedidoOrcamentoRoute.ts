import { Router } from "express";
import { PedidoOrcamentoController } from "../controllers/PedidoOrcamentoController";

const router = Router()

const pedidoOrcamentoController = new PedidoOrcamentoController()

router.get('/', pedidoOrcamentoController.getPedido)

export default router;
import { Router } from "express";
import AutenticacaoRoute from "./AutenticacaoRoute";
import PedidoOrcamentoRoute from "./PedidoOrcamentoRoute";

const router = Router()

router.use('/pedido-orcamento', PedidoOrcamentoRoute)
router.use('/login', AutenticacaoRoute)

export default router

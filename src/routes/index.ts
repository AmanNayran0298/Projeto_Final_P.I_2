import { Router } from "express";
import PedidoOrcamentoRoute from "./PedidoOrcamentoRoute";
// Importar rotas específicas

const router = Router()

// Adicionar rotas
router.use('/pedido-orcamento', PedidoOrcamentoRoute)

export default router

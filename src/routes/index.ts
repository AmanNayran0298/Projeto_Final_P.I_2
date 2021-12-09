import { Router } from "express";
import pedidoOrcamentoRoute from './PedidoOrcamentoRoute'
// Importar rotas específicas

const router = Router()

// Adicionar rotas
router.use('/pedido-orcamento', pedidoOrcamentoRoute)

export default router

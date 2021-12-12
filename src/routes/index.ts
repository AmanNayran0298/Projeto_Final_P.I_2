import { Router } from "express";
import AutenticacaoRoute from "./AutenticacaoRoute";
import PedidoOrcamentoRoute from "./PedidoOrcamentoRoute";
// Importar rotas específicas

const router = Router()

// Adicionar rotas
router.use('/pedido-orcamento', PedidoOrcamentoRoute)
router.use('/login', AutenticacaoRoute)

export default router

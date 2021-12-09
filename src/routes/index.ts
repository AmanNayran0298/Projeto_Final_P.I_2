import { Router } from "express";
// Importar rotas específicas

const router = Router()

// Adicionar rotas
router.use('/pedido-orcamento', PedidoOrcaomentoRoutes)

export default router

import { Router, Request, Response } from "express";
// importar banco de dados da camada de persistencia
// importar controllers
// importar middleware para autenticação

const router = Router()

// Adicionar rotas específicas
// Por exemplo
// const movieController = new MovieController()
// router.get('/', movieController.getAll)
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'ok'})
})
// get by id
// post
// create
// delete
export default router;
import { NextFunction, Router, Request, Response } from "express";
import { AutenticacaoController } from "../controllers/AutenticacaoController";
const jwt = require('jsonwebtoken')

const router = Router()

const checkToken = function(req: Request, res: Response, next: NextFunction){
    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token)return res.status(401).json({msg: 'Acesso negado'});
    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()    
    } catch (error) {
        return res.status(404).json({msg: 'Token invalido'})
    }
}

router.use(checkToken)

// instancia da classe de autenticação
const autenticacaoController = new AutenticacaoController();

// #TODO: corrigir middlware
router.get('/user/:id',checkToken, autenticacaoController.getUserId)

// Register User
router.post('/auth/register', autenticacaoController.registerUser)

// Login User
router.post('/auth/login', autenticacaoController.authLogin)

export default router;
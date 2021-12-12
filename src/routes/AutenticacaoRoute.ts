import { Router } from "express";
import { AutenticacaoController } from "../controllers/AutenticacaoController";

const router = Router()

// instancia da classe de autenticação
const autenticacaoController = new AutenticacaoController();

// #TODO: corrigir middlware
router.get('/user/:id',checkToken, autenticacaoController.getUserId)

// middleware

// Register User
router.post('/auth/register', autenticacaoController.registerUser)

// Login User
router.post('/auth/login', autenticacaoController.authLogin)

export default router;
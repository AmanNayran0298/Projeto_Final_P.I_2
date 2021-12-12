import { NextFunction, Request, Response } from "express"
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Middleware
// TODO: corrigir middleware
function checkToken(req: Request, res: Response, next: NextFunction){
    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token) {
        return res.status(401).json({msg: 'Acesso negado'})
    }

    try {
        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()    
    } catch (error) {
        return res.status(404).json({msg: 'Token invalido'})
    }
}

export class AutenticacaoController {

    public async getUserId(req: Request, res: Response): Promise<Response> {
        const id = req.params.id

        //check if user exists
        const user = await User.findById(id, '-password')

        if (!user) {
            return res.status(404).json({ msg: 'Usuário não foi encontrado' })
        }

       return res.status(200).json({ user })
    }

    public async registerUser(req: Request, res: Response) {
        const {name, email, password, confirmpassword} = req.body
    
        // validations
        if(!name) {
            return res.status(422).json({ msg: 'O nome é obrigatorio' })
        }
    
        if(!email) {
            return res.status(422).json({ msg: 'O email é obrigatorio' })
        }
    
        if(!password) {
            return res.status(422).json({ msg: 'O password é obrigatorio' })
        }
        
        if(password !== confirmpassword){
            return res.status(422).json({ msg: 'As senhas não conferem' })
        }
        
        // check if user exists
        const userExists = await User.findOne({email : email})
        
        if(userExists){
            return res.status(422).json({ msg: 'Email já cadastrado' })
        }
    
        // create password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)
    
        // create user
        const user = new User({
            name,
            email,
            password: passwordHash,
        })
        
        try {
            await user.save()
            
            res.status(201).json({msg: 'Usuário criado'})
            
        } catch (error) {
            console.log(error)
    
            res.status(500).json({ msg: 'Ocorreu um erro, tente novamente',})
        }
    }

    public async authLogin(req: Request, res: Response){
        const { email, password } = req.body
    
        // validations
        if(!email) {
            return res.status(422).json({ msg: 'O email é obrigatorio' })
        }
        
        if(!password) {
            return res.status(422).json({ msg: 'O password é obrigatorio' })
        }
    
        // check if user exists
        const user = await User.findOne({email : email})
        
        if(!user){
            return res.status(404).json({ msg: 'Usuário não foi encontrado' })
        }
        
        // check if password 
        const checkPassword = await bcrypt.compare(password, user.password)
        
        if(!checkPassword){
            return res.status(422).json({ msg: 'Senha incorreta' })
    
        }
    
        try {
            const secret = process.env.SECRET
    
            const token = jwt.sign(
                {
                id: user._id,
                },
                secret,
            )
    
            res.status(200).json({msg: 'Autenticação bem sucedida', token})
    
        } catch (error) {
            console.log(error)
    
            res.status(500).json({ msg: 'Ocorreu um erro, tente novamente',})
        }
    
    }
}
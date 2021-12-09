import express from "express";
import { Request, Response } from "express";
import cors from 'cors'
import routes from "./routes";
require('dotenv').config()

const PORT = process.env.PORT;
const app = express()
// Middlewares
app.use(express.json())
app.use(cors())
app.use(routes)



//
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'ok'})
})

app.listen(PORT)
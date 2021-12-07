import express from "express";
import { Request, Response } from "express";
require('dotenv').config()

const app = express()
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'ok'})
})

app.listen(PORT)
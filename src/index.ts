import express from "express";
import cors from 'cors'
import routes from "./routes";
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(process.env.PORT, () => {
    console.log(`Running at PORT ${process.env.PORT} access http://localhost:${process.env.PORT}`);
})
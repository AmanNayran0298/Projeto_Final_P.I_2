import express from "express";
import cors from 'cors'
import routes from "./routes";
require('dotenv').config()

const app = express()
// Middlewares
app.use(express.json())
app.use(cors())
app.use(routes)


//
app.listen(process.env.PORT, () => {
    console.log("Running at PORT 3000 access http://localhost:3000");
    
})
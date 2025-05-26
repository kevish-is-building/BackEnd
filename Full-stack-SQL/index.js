import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import userRouter from "./routes/auth.route"

dotenv.config()

const port = process.env.PORT || 4000

const app = express()

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.status(200).json({
        success: true,
        message:"Welcome to home route",
    })
})


app.use("/api/v1/user", userRouter)

app.listen(port,()=>{
    console.log(`app listening on port: ${port}`)
})
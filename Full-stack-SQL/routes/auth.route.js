import express from "express"
import { registerUser } from "../controllers/auth.controller"

const userRouter = express.Router()

userRouter.get("/register", registerUser)

export default userRouter
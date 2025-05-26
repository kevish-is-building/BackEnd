import { body } from "express-validator"
import {asyncHandler} from "../utils/async-handler.js"

const resisterUser = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const loginUser = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const logoutUser = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const verifyEmail = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const resendVerifyEmail = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const refreshAccessToken = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const forgotPasswordRequest = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const changeCurrentPassword = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const getCurrentUser = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})


export {resisterUser}
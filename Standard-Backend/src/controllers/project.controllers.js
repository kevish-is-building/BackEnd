import {asyncHandler} from "../utils/async-handler.js"

const createProject = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const updateProject = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const deleteProject = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const getProjects = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const getProjectById = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const addMemberToProject = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const updateProjectMember = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const updateMemberRole = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})

const deleteMember = asyncHandler(async(req,res)=>{
    const {email,password,username,role} = req.body
})
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const registerUser = async (req,res)=>{

    await prisma.user.findUnique({
        where: {email}
    })

    res.status(200).json({
        success:true,
        message:"User registered successfully",
    })
}

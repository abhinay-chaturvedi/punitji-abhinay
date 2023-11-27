import prisma from "@/prisma/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const POST = async (req) => {
    try {
        const loginData = await req.json();
        console.log("cookies", req.cookies.get("token"));
        console.log("🚀 ~ file: route.js:4 ~ POST ~ loginData:", loginData)
        const prismaResult = await prisma.user.findUnique({
            where: {
                email: loginData.email
            }
        })
        console.log("Result of Prisma query", prismaResult);
        if(!prismaResult) {
            return NextResponse.json({message: "User does not exist! Please Use correct email or signup first. 🙁", status: 400}, {status: 400})
        }
        const match = await bcrypt.compare(loginData.password, prismaResult.password);
        if(!match) {
            return NextResponse.json({message: "Incorrect password!", status: 400}, {status: 400});
        }
        const token = jwt.sign({_id: prismaResult.id, email: prismaResult.email, role: prismaResult.role}, process.env.JWT_SECRET);
        const { password, ...rest} = prismaResult;
        return  NextResponse.json({data: rest, message: "success", status: 200}, {status: 200, headers: {'Set-Cookie': `token=${token}; Max-Age=${60*60*24*7};HttpOnly;path=/`}});
    } catch(err) {
        return NextResponse.json({err: err, message: "Something went wrong!", status: 500}, {status: 500});
    }
}
export { POST }
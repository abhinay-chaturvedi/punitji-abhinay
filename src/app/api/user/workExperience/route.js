import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server"

const GET = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        if(!userId) {
            return NextResponse.json({status: 400, message: "userId does not exist"});
        }  
        const prismaResult = await prisma.workExperience.findMany({
            where: {
                userId: userId
            }
        })
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        return NextResponse.json({status: 500, message: "something went wrong!"}, {status: 500});
    }
}
const POST = async (req) => {
    try {
        const body = await req.json();
        console.log("🚀 ~ file: route.js:23 ~ POST ~ body:", body)
        // return NextResponse.json({status: 200});
        const prismaResult = await prisma.workExperience.create({
            data: {
                ...body
            }
        })
        if(!prismaResult) {
            return NextResponse.json({status: 400, message: "error occured!"}, {status: 400});
        }
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        console.log("🚀 ~ file: route.js:24 ~ POST ~ err:", err)
        return NextResponse.json({status: 500, message: "something went wrong!"}, {status: 500});
    }
}
export { GET, POST };
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server"

const GET = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        console.log("🚀 ~ file: route.js:6 ~ GET ~ userId:", userId);
        if(!userId) {
            return NextResponse.json({status: 400, message: "userId does not exist!"}, {status: 400});
        }
        const prismaResult = await prisma.languageTest.findMany({
            where: {
                userId: userId
            }
        })
        return NextResponse.json({status: 200, message: "success", data: prismaResult},{status: 200});
        
    } catch(err) {
        return NextResponse.json({status: 500, message: "something went wrong!"}, {status: 500});
    }
}
const POST = async (req) => {
    try {
        const data = await req.json();
        // console.log("🚀 ~ file: route.js:25 ~ POST ~ data:", data)
        const prismaResult = await prisma.languageTest.create({
            data: {
                ...data
            }
        })
        if(!prismaResult) {
            return NextResponse.json({status: 400, message: "error occured!"}, {status: 400});
        }
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        return NextResponse.json({status: 500, messsage: "something went wrong!"}, {status: 500});
    }
}
export {GET, POST}
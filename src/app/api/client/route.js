// const { NextRequest } = require("next/server")\
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server"




const GET = async (req: NextRequest) => {
    try {
        // const = const email = req.nextUrl.searchParams.get("email");
        const pId = req.nextUrl.searchParams.get("pid");
        if(!pId) {
            return NextResponse.json({status: 400, "message": "wrong partnner id"}, {status: 400});
        }
        const prismaResult = await prisma.user.findMany({
            where: {
                partnerId: pId
            }
        })
        NextResponse.json({status: 200, "message": "successfully find the clients", data: prismaResult},{status: 200});
    } catch(err) {
        console.log("🚀 ~ file: route.js:9 ~ GET ~ err:", err)
        NextResponse.json({status: 500, "message": "something went wrong", err: err}, {status: 500});
    }
}
const PUT = async (req: NextRequest) => {
    try {
        const reqBody = await req.json()
        console.log("🚀 ~ file: route.js:29 ~ POST ~ body:", reqBody);
        const prismaResult  = await prisma.user.update({
            where: {
                id: reqBody.userId
            },
            data: {
                partnerId: reqBody.pId
            }
        })
        if(!prismaResult) {
            NextResponse.json({status: 400, "message": "error occured"}, {status: 400});
        }
        NextResponse.json({status: 200, "message": "client assigned succussfully", data: prismaResult}, {status: 200});
    } catch(err) {
        console.log("🚀 ~ file: route.js:30 ~ POST ~ err:", err)
        NextResponse.json({status: 500, "message": "something went wrong", err: err},{status: 500});
    }
}
export { GET, PUT };
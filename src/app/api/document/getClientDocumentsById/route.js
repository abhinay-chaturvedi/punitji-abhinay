// const { NextRequest } = require("next/server");
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server"

const GET = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        if(!userId) {
            return NextResponse.json({status: 400, message: "userId does not exist!"}, {status: 400});
        }
        const prismaResult = await prisma.client.findUnique({
            where: {
                userId: userId
            },
            select: {
                documents: true,
            }
        })
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        return NextResponse.json({status: 500, message: "something went wrong!", err: err}, {status: 500});
    }
}
export {GET};
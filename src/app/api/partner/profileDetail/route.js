import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server"

const GET = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        console.log("🚀 ~ file: route.js:6 ~ GET ~ userId:", userId)
        if(!userId) {
            return NextResponse.json({status: 400, message: "userId does not exist!"}, {status: 400});
        }
        const prismaResult = await prisma.partner.findUnique({
            where: {
                userId: userId
            }
        })
        console.log("🚀 ~ file: route.js:16 ~ GET ~ prismaResult:", prismaResult)
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        console.log("🚀 ~ file: route.js:18 ~ GET ~ err:", err)
        return NextResponse.json({status: 500, message: "something went wrong!", err: err}, {status: 500});
    }
}
export { GET };
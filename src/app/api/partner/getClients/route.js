// const { NextResponse } = require("next/server");
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server"

const GET = async (req) => {
    try {
        const partnerId = req.nextUrl.searchParams.get("partnerId");
        // here we find all the clients those are assigned to partner with id = partnerId
        if(!partnerId) {
            return NextResponse.json({status: 400, message: "partnerId does not exist"}, {status: 400});
        }
        const prismaResult = await prisma.client.findMany({
            where: {
                partnerId: partnerId
            },
            select: {
                id: true,
                userId: true,
                name: true,
                email: true
            }
        })
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        return NextResponse.json({status: 500, message: "something went wrong", err: err}, {status: 500});
    }
}
export {GET};
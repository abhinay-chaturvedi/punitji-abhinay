// const { NextRequest } = require("next/server");
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server"
export const dynamic = "force-dynamic";
const GET = async (req) => {
    try {
        const prismaResult = await prisma.user.findMany({
            where: {
                role: "PARTNER"
            },
            include: {
                partner: {
                    select: {
                        isVerified: true,
                        phone: true,
                        dealIn: true
                    }
                }
            }
        })

        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        return NextResponse.json({status: 500, message: "somthing went wrong", err: err}, {status: 500});
    }
}
export {GET};
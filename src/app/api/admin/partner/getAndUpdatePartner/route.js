// const { NextRequest } = require("next/server");
import prisma from "@/prisma/connect";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server"

const GET = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        if(!userId) {
            return NextResponse.json({status: 400, message: "error occured"}, {status: 400});
        }
        const prismaResult = await prisma.partner.findUnique({
            where: {
                userId: userId
            }
        });
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        return NextResponse.json({status: 500, message: "something went wrong!", err: err}, {status: 500});
    }
}
const PUT = async (req) => {
    try {
        const body = await req.json();
        const {userId, isVerified} = body;
        const prismaResult = await prisma.partner.update({
            where: {
                userId: userId
            },
            data: {
                isVerified: isVerified,
                joiningDate: new Date()
            }
        })
        revalidatePath("/admin/partner/6130e062-7aec-47b0-a628-ebdd68c01b2d")
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200})
    } catch(err) {
        return NextResponse.json({status: 500, message: "something went wrong!", err: err}, {status: 500})
    }
}
export { GET, PUT };
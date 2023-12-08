// const { NextRequest } = require("next/server");
import prisma from "@/prisma/connect";
import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const GET = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        const prismaResult = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                client: true,
                steps: true,
                education: true,
                workExperience: true,
                languageTest: true
            }
        })
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        return NextResponse.json({status: 500, message: "something went wrong"}, {status: 500});
    }
}
export { GET };
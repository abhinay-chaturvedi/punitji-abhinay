import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server"

const GET = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        console.log("🚀 ~ file: route.js:7 ~ GET ~ userId:", userId)
        if(!userId) {
            return NextResponse.json({status: 400, message: "userId does not exist!"}, {status: 400});
        }
        const prismaResult = await prisma.client.findUnique({
            where: {
                userId: userId
            }
        })
        return NextResponse.json({status: 200, message: "succussfully fetched the data!", data: prismaResult});
    } catch(err) {
        console.log("🚀 ~ file: rout.js:5 ~ GET ~ err:", err)
        
    }
}
const PATCH = async (req) => {
    try {
        const body = await req.json();
        console.log("🚀 ~ file: rout.js:15 ~ POST ~ body:", body)
        // return NextResponse.json({status: 200});
        const { userId, address, dob, visaCountry } = body;
        const prismaResult = await prisma.client.update({
            where: {
                userId: userId
            },
            data: {
                address,
                dob,
                visaCountry
            }
        })
        if(!prismaResult) {
            return NextResponse.json({status: 400, message: "error occured"}, {status: 400});
        }
        return NextResponse.json({status: 200, message: "successfully saved!", data: prismaResult}, {status: 200});
    } catch(err) {
        console.log("🚀 ~ file: rout.js:13 ~ POST ~ err:", err)
        return NextResponse.json({status: 500, message: "something went wrong!", err: err}, {status: 500});
    }
}
export { GET, PATCH };
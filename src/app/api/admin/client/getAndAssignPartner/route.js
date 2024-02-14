// const { NextRequest } = require("next/server");
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server"

const GET = async (req) => {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        console.log("🚀 ~ file: route.js:8 ~ GET ~ userId:", typeof userId)
        if(userId == "null") {
            return NextResponse.json({status: 200, message: "partner not exist or bad request", data: null}, {status: 200});
        }
        console.log("why this runs")
        const prismaResult = await prisma.partner.findUnique({
            where: {
                userId: userId
            }
        })
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        console.log("🚀 ~ file: route.js:8 ~ GET ~ err:", err)
        return NextResponse.json({status: 500, message: "something went wrong!", err: err}, {status: 500});
    }
}
const POST = async (req) => {
    try {
        const body = await req.json();
        const {partnerId, userId} = body;
        const prismaResult = await prisma.client.update({
            where: {
                userId: userId
            },
            data: {
                partnerId: partnerId
            }
        })
        const update  = await prisma.partner.update({
            where: {
                userId: partnerId
            },
            data: {
                casesAssigned: {
                    increment: 1
                }
            }
        })
        if(!prismaResult) {
            return NextResponse.json({status: 400, message: "error occured"}, {status: 400})
        }
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 400});
    } catch(err) {
        console.log("🚀 ~ file: route.js:28 ~ POST ~ err:", err)
        return NextResponse.json({status: 500, message: "something went wrong", err: err}, {status: 500});
    }
}
export {GET, POST};
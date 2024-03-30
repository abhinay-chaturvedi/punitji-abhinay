import db from "@/lib/db";
import prisma from "@/prisma/connect";
const { NextResponse, NextRequest } = require("next/server")
import {v4 as uuidv4} from "uuid"
export const dynamic = 'force-dynamic';
const GET  = async (req) => {
    try {
        const email = req.nextUrl.searchParams.get("email");
        const role = req.nextUrl.searchParams.get('role');
        // console.log("🚀 ~ file: route.js:7 ~ GET ~ email:", email)
        // return ;
        if(!email) return ;
        const prismaResult = await prisma.user.findUnique({
            where: {
                email: email,
                role: role
            }
        })
        return NextResponse.json({status: 200, message: "successfully fetched the user detail", data: prismaResult}, {status: 200});
    } catch(err) {
        console.log("🚀 ~ file: route.js:5 ~ GET ~ err:", err)
        return NextResponse.json({status: 500, message: "something went wrong!",err: err}, {status: 500});
    }
}

const PUT = async (req) => {
    try {
        const body = await req.json();
        
        if(body.field == "previousRefusal") {
            body.value.id = uuidv4();
            body.value = {
                push: body.value
            }
        }
        console.log("🚀 ~ PUT ~ body:", body)
        const prismaResult = await db.client.update({
            where: {
                userId: body.userId
            },
            data: {
                [body.field]: body.value
            },
            select: {
                userId: true,
                previousRefusal: true
            }
        })
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        return NextResponse.json({status: 500, message: "error occured", err: err}, {status: 500})
    }
}
export { GET, PUT }
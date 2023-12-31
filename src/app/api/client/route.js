import prisma from "@/prisma/connect";
const { NextResponse } = require("next/server")
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
export { GET }
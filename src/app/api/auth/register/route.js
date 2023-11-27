import { NextResponse } from "next/server";
import prisma from "@/prisma/connect";
import bcrypt from "bcrypt";

const POST = async (req) => {
    try {
        const regData = await req.json();
        console.log("Req body for the register api", regData);
        const check = await prisma.user.findUnique({
            where: {
                email: regData.email
            }
        })
        if(check) {
            return NextResponse.json({message: "This email already in use. Try different one😒", status: 409}, {status: 409})
        }
        const password = await bcrypt.hash(regData.password, 10);
        const prismaResult = await prisma.user.create({
            data: {
                email: regData.email,
                password: password,
                name: regData.name,
                role: regData.role
            }
        })
        if(!prismaResult) {
            return NextResponse.json({message: "error occured!", status: 400}, {status: 400});
        }
        console.log("prisma result", prismaResult);
        // need to create to create the client or partner in their respective table
        if(regData.role === "CLIENT") {
            const client = await prisma.client.create({
                data: {
                    name: regData.name,
                    userId: prismaResult.id,
                    email: regData.email,
                }
            })
        } else if(regData.role === "PARTNER") {
            const partner = await prisma.partner.create({
                data: {
                    name: regData.name,
                    userId: prismaResult.id,
                    email: regData.email
                }
            })
        }
        return NextResponse.json({message: "User Created Successfully!", status: 200, data: prismaResult}, {status: 200});
    } catch(err) {
        console.log("error in register api", err);
        return NextResponse.json({err: err, message: "something went wrong!", status: 500}, {status: 500})
    }
}
export { POST }
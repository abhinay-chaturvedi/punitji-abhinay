import { NextResponse } from "next/server";
import prisma from "@/prisma/connect";
import bcrypt from "bcrypt";

const POST = async (req) => {
    try {
        const regData = await req.json();
        console.log("Req body for the register api", regData);
        const password = await bcrypt.hash(regData.password, 10);
        const check = await prisma.user.findUnique({
            where: {
                email: regData.email
            }
        })
        if(check) {
            return NextResponse.json({message: "This email already in use. Try different one😒", status: 409}, {status: 409})
        }
        const prismaResult = await prisma.user.create({
            data: {
                email: regData.email,
                password: password,
                phone: regData.phone,
                name: regData.name,
                address: {
                    create: {
                        ...regData.address
                    }
                }
            }
        })
        console.log("prisma result", prismaResult);
        return NextResponse.json({message: "User Created Successfully!", status: 200, data: prismaResult}, {status: 200});
    } catch(err) {
        console.log("error in register api", err);
        return NextResponse.json({err: err, message: "something went wrong!", status: 500}, {status: 500})
    }
}
export { POST }
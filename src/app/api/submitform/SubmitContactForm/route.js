import { NextResponse } from "next/server"
import prisma from "@/prisma/connect";
const POST = async (req) => {
    try {
        const body = await req.json()
        console.log("req object for", body);
        const prismaResult = await prisma.consultingRequest.create({
            data: body
        });
        console.log("response got in submitcontactform prismaResult:", prismaResult);
        return new NextResponse(JSON.stringify({message: "successfull called api", status: 200}), { status: 200 })
    } catch(err) {
        console.error("an error occured in SubmintContactForm api: Error", err);
    }
}
export { POST }
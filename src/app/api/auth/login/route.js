const { default: prisma } = require("@/prisma/connect");
const { NextResponse } = require("next/server");

const POST = async (req) => {
    try {
        const loginData = await req.json();
        console.log("🚀 ~ file: route.js:4 ~ POST ~ loginData:", loginData)
        const prismaResult = await prisma.user.findUnique({
            where: {
                email: loginData.email
            }
        })
        console.log("Result of Prisma query", prismaResult);
        if(!prismaResult) {
            return NextResponse.json({message: "User does not exist! Please Use correct email or signup first. 🙁", status: 400}, {status: 400})
        }
        return  NextResponse.json({data:prismaResult, message: "success"}, {status: 200});
    } catch(err) {
        return NextResponse.json({err: err, message: "Something went wrong!"}, {status: 500});
    }
}
export { POST }
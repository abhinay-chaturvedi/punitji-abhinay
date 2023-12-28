import prisma from "@/prisma/connect";

const { NextResponse, NextRequest } = require("next/server")

const POST = async (req) => {
    try {
        const formData = await req.formData();
        console.log("🚀 ~ file: route.js:6 ~ POST ~ formData:", formData);
        const upload = await fetch("http://localhost:5000/api/upload", {
            method: "POST",
            body: formData
        })
        const data = await upload.json();
        if(data.ok === false) {
            return NextResponse.json({status: 400, message: "invalid file"}, {status: 400})
        }
        console.log("🚀 ~ file: route.js:11 ~ POST ~ upload:", data);
        const userId = formData.get('userId');
        const doc_id = formData.get('doc_id');
        // console.log("🚀 ~ file: route.js:16 ~ POST ~ email:", email);
        
        const prePrisma = await prisma.client.findUnique({
            where: {
                userId: userId
            }
        });
        let updatedDocs = prePrisma.documents.map((doc) => {
            if(doc_id === doc.id) {
                doc.url = data.url
            }
            return doc;
        })
        const prismaResult = await prisma.client.update({
            where: {
                userId: userId
            },
            data: {
                documents: updatedDocs
            }
        })
        console.log("🚀 ~ file: route.js:32 ~ POST ~ prismaResult:", prismaResult)
        return NextResponse.json({status: 200, message: "file uploaded successfully!", data:prismaResult, uploadData: data}, {status: 200});
    } catch(err) {
        console.log("🚀 ~ file: route.js:5 ~ POST ~ err:", err)
        return NextResponse.json({status: 500, err: err, message: "something went wrong!"}, {status: 500});
    }
}
const GET = async (req) => {
    try {
        const prismaResult = await prisma.document.findMany();
        return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
    } catch(err) {
        return NextResponse.json({status: 500, message: "something went wrong!", err: err}, {status: 500})
    }
}
export { POST, GET }
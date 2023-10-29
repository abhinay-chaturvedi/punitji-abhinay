import prisma from "@/prisma/connect";

const { NextResponse } = require("next/server")

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
        const email = formData.get('email');
        const doc_id = formData.get('doc_id');
        console.log("🚀 ~ file: route.js:16 ~ POST ~ email:", email);
        
        const prePrisma = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        let updatedDocs = prePrisma.documents.map((doc) => {
            if(doc_id === doc.id) {
                doc.url = data.url
            }
            return doc;
        })
        const prismaResult = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                documents: updatedDocs
            }
        })
        console.log("🚀 ~ file: route.js:32 ~ POST ~ prismaResult:", prismaResult)
        return NextResponse.json({status: 200, message: "file uploaded successfully!", data, prismaData: prismaResult}, {status: 200});
    } catch(err) {
        console.log("🚀 ~ file: route.js:5 ~ POST ~ err:", err)
        return NextResponse.json({status: 500, err: err, message: "something went wrong!"}, {status: 500});
    }
}
export { POST }
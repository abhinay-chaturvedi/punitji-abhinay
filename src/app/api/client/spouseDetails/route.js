import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid";

const PUT = async (req) => {
    try {
        console.log("hello")
        let body = await req.json();
        console.log("🚀 ~ PUT ~ body:", body);
        if(body.field == "dob") {
            body.value = new Date(body.value);
        }
        if(body.field == "education" || body.field == "workExperience") {
            body.value.startDate = new Date(body.value.startDate);
            body.value.endDate = new Date(body.value.endDate);
            body.value.id = uuidv4();
            body.value = {
                push: body.value
            }  
        } 
        if(body.field == "language") {
            body.value.id = uuidv4();
            body.value = {
                push: body.value
            }
        }
        if(body.field == "previousRefusal") {
            body.value.id = uuidv4();
            body.value = {
                push: body.value
            }
        }
        // if(body.field == "personalTies") {
        // }
        // const res = await db.spouseDetail.upsert({
        //     where: {
        //         userId: body.userId,
        //     },
        //     update: {
        //         [body.field]: body.value
        //     },
        //     create: {
        //         userId: body.userId,
        //         [body.field]: body.value
        //     }
        // })
        const res = await db.spouseDetail.update({
            where: {
                userId: body.userId
            },
            data: {
                [body.field]: body.value
            }
        })
        // revalidatePath("/client");
        return NextResponse.json({status: 200, message: "success", data: res}, {status: 200});
    } catch(err) {
        console.log("🚀 ~ PUT ~ err:", err)
        return NextResponse.json({status: 500, message: "something went wrong!", err: err}, {status: 500});
    }
}
export {PUT}
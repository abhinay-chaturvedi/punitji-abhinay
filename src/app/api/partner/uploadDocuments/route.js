// const { NextRequest } = require("next/server");
import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req) => {
  try {
    const formData = await req.formData();
    const res = await fetch(`${process.env.UPLOAD_DOMAIN}/api/upload`, {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    if (result.ok == true) {
      await db.partner.update({
        where: {
          userId: formData.get("userId"),
        },
        data: {
          documents: result.url,
        },
      });
      return NextResponse.json(
        { status: 200, message: "success", data: result },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { status: 400, message: "error while uploading documents" },
        { status: 400 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({status: 500, message: "error occured", err: err}, {status: 500});
  }
};
export { POST };

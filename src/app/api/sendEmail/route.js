import prisma from "@/prisma/connect";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const POST = async (req) => {
  try {
    const body = await req.json();
    const { email } = body;
    const check = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (check) {
      return NextResponse.json(
        {
          message: "This email already in use. Try different one😒",
          status: 409,
        },
        { status: 409 }
      );
    }
    const code = Math.floor(100000 + Math.random() * 900000);
    const { data, error } = await resend.emails.send({
      from: "HHHimmigration <authService@resend.dev>",
      to: [email],
      subject: "Verification",
      html: `<h1>Hi there, this is the code for verifying the email address!</h1> <br> <h1>${code}</h1>`,
    });
    if (error) {
      return NextResponse.json(
        {
          status: 400,
          message: error.message,
          err: error,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { status: 200, message: "success", data: data, code: code },
      { status: 200 }
    );
  } catch (err) {
    console.log("error in api while sending email ", err);
    return NextResponse.json(
      { status: 500, message: "something went wrong!", err: err },
      { status: 500 }
    );
  }
};
export { POST };

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
      html: `<h2>Dear Valued Customer,</h2> <br> <h3>Greetings from the hhhimmigration!</h3> <br> <span>Please use the verification below to signin.</span> <br> <h2>${code}</h2> <br> <span> if you didn't request this, you can ignore this email.</span> <br> <span><b>NOTE:</b> OTP will expires in 5 minutes </span> <br> <span>Please do not share your OTP with others for security reason. </span> <br> <h4> Best Regards, <br> HHH IMMIGRATION TEAM </h4>`,
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



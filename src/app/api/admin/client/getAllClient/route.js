// const { NextRequest } = require("next/server");
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req) => {
  try {
    const prismaResult = await prisma.user.findMany({
      where: {
        role: "CLIENT",
      },
      include: {
        client: {
          select: { partnerId: true },
        },
      },
    });
    return NextResponse.json(
      { status: 200, message: "success", data: prismaResult },
      { status: 200 }
    );
  } catch (err) {
    console.log("🚀 ~ file: route.js:19 ~ GET ~ err:", err);
    return NextResponse.json(
      { status: 500, message: "something went wrong!", err: err },
      { status: 500 }
    );
  }
};
export { GET };

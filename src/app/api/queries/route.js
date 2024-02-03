// const { NextRequest } = require("next/server");
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req) => {
  try {
    const body = await req.json();
    if (!body.userId) {
      return NextResponse.json(
        { status: 400, message: "error occured" },
        { status: 400 }
      );
    }
    const prismaResult = await prisma.query.create({
      data: body,
    });
    if (!prismaResult) {
      return NextResponse.json(
        { status: 400, message: "error occured" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { status: 200, message: "success", data: prismaResult },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: 500, message: "something went wrong!" },
      { status: 500 }
    );
  }
};
const GET = async (req) => {
  try {
    let prismaResult;
    const userId = req.nextUrl.searchParams.get("userId");
    console.log("🚀 ~ GET ~ userId:", userId);
    if (!userId) {
      prismaResult = await prisma.query.findMany();
    } else {
      prismaResult = await prisma.query.findMany({
        where: {
          userId: userId,
        },
      });
    }
    // console.log("🚀 ~ GET ~ prismaResult:", prismaResult)
    return NextResponse.json({
      status: 200,
      message: "success",
      data: prismaResult,
    });
  } catch (err) {
    console.log("🚀 ~ GET ~ err:", err)
    return NextResponse.json(
      { status: 500, message: "something went wrong!", err: err },
      { status: 500 }
    );
  }
};
export { POST, GET };

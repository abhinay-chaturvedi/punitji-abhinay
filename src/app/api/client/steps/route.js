// const { NextRequest } = require("next/server");
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req) => {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    console.log("🚀 ~ GET ~ userId:", userId)
    if(!userId) {
      return NextResponse.json({status: 400, message: "error occured"}, {status: 400})
    }
    const prismaResult = await prisma.processSteps.findUnique({
      where: {
        userId: userId
      }
    })
    return NextResponse.json({status: 200, message: "success", data: prismaResult}, {status: 200});
  } catch (err) {
    return NextResponse.json(
      { status: 500, message: "something went wrong", err: err },
      { status: 500 }
    );
  }
};
const POST = async (req) => {
  try {
    const body = await req.json();
    const { userId } = body;
    if (!userId) {
      return NextResponse.json(
        { status: 400, message: "userId does not exist" },
        { status: 400 }
      );
    }
    const prismaResult = await prisma.processSteps.create({
      data: {
        userId: userId,
      },
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
      { status: 500, message: "something went wrong", err: err },
      { status: 500 }
    );
  }
};
const PUT = async (req) => {
  try {
    const body = await req.json();
    
    const { userId, ...rest } = body;
    console.log("🚀 ~ file: route.js:51 ~ PUT ~ rest:", rest)

    const prismaResult = await prisma.processSteps.update({
      where: {
        userId: userId,
      },
      data: {
        ...rest,
      },
    });

    if (!prismaResult) {
      return NextResponse.json(
        { status: 400, message: "error occured" },
        { status: 400 }
      );
    }

    if(prismaResult.finalResult) {
      await prisma.partner.update({
        where: {
          userId: userId
        },
        data: {
          casesSolved: {
            increment: 1
          }
        }
      })
    }
    return NextResponse.json(
      { status: 200, message: "success", data: prismaResult },
      { satus: 200 }
    );

  } catch (err) {
    return NextResponse.json(
      { status: 500, message: "something went wrong", err: err },
      { status: 500 }
    );
  }
};
export { GET, POST, PUT };

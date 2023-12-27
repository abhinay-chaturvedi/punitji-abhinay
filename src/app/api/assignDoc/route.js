// const { NextRequest } = require("next/server");
import prisma from "@/prisma/connect";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req) => {
  try {
    const body = await req.json();
    const { userId, docs } = body;
    // console.log("🚀 ~ file: route.js:9 ~ POST ~ docs:", docs);
    // const prismaResult = await prisma.client.update({
    //     where: {
    //         userId: userId
    //     },
    //     data: {
    //         documents: {
    //             push: [...docs]
    //         }
    //     }
    // })
    const promiseArray = docs.map((doc) => {
      return prisma.client.update({
        where: {
          userId: userId,
        },
        data: {
          documents: {
            push: doc,
          },
        },
      });
    });
    const prismaResult = await Promise.all(promiseArray);
    if (!prismaResult) {
      return NextResponse.json(
        { status: 400, message: "error occured" },
        { status: 400 }
      );
    }
    let index = prismaResult.length;
    if (index == 0) index = 1;
    return NextResponse.json(
      { status: 200, message: "success", data: prismaResult[index - 1] },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: 500, message: "something went wrong!", err: err },
      { status: 500 }
    );
  }
};
export { POST };

// const { NextResponse } = require("next/server");
import { NextRequest, NextResponse } from "next/server";

const GET = async (req) => {
  try {
    // const body = await req.json();
    // const { url } = body;
    const url = req.nextUrl.searchParams.get("url")
    // const url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    const filename = url.split("/").pop();

    // use fetch to get a response
    const response= await fetch(url);

    // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
    return new Response(response.body, {
      headers: {
        ...response.headers, // copy the previous headers
        "content-disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err) {
    // return NextResponse.redirect()
    return new Response();
  }
};
export {GET}
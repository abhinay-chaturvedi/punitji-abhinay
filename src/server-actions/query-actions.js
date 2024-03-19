// "use server"

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createQuery = async (payload) => {
    console.log("create query", payload);
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    })
    const query = await db.query.create({
        data: payload,
      });
      revalidatePath(`${payload.userType.toLowerCase()}/query`);
    return query;
}
export const demoAction = async () => {
    // console.log("create query", payload);
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    })
    // const query = await db.query.create({
    //     data: payload,
    //   });
    //   revalidatePath(`${payload.userType.toLowerCase()}/query`);
    return {data: "ksjdkjs"};
}
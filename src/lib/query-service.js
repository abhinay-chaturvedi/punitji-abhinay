"use server"
import db from "./db";
import { revalidatePath } from "next/cache";

const getQueries = async (id) => {
  try {
    const queries = await db.query.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    return queries;
  } catch (err) {
    console.log("🚀 ~ getQueries ~ err:", err);
    return [];
  }
};


const createQuery = async (payload) => {
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
export { getQueries, createQuery };

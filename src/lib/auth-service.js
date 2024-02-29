"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export const getSession = async () => {
  try {
    const token = cookies().get("token")?.value;
    console.log(token, "token in session");
    if (!token) {
      // redirect("/login");
      return null;
    }
    const currentUser = jwt.verify(token, process.env.JWT_SECRET);
    console.log("🚀 ~ Page ~ currentUser:", currentUser);
    return currentUser;
  } catch (err) {
    console.log(err);
    throw new Error("some thing went wrong");
  }
};
export const logout = async () => {

  cookies().delete("token");
}

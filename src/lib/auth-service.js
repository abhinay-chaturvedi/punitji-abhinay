"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import db from "./db";
import bcrypt from "bcrypt";

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

export const updatePassword = async (prevState, formData) => {

  const password = formData.get("password");
  const hashedPassword = await bcrypt.hash(password, 10);
  const res = await db.user.update({
    where: {
      id: prevState.id
    },
    data: {
      password: hashedPassword
    }
  })
  return { id: prevState.id, data: res };
};
export const logout = async () => {
  cookies().delete("token");
};

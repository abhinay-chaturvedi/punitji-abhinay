"use server";

import { Resend } from "resend";
// const { default: db } = require("./db");
import db from "./db";

export const sendEmail = async (email, subject, html) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "HHHimmigration <authService@resend.dev>",
      to: [email],
      subject: subject,
      html: html,
    });
    if (error) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};

export const sendForgotEmail = async (args) => {
  try {
    const { email } = args;
    const dbData = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!dbData) {
      return { err: "Bad luck, user does not exist!" };
    }
    const forgotHtml = `<h2>Dear Valued Client,</h2> <br>
                            <h3> A request has been received to change your password for you hhhimmigration account </h3> <br>
                            <a href="https://hhhimmigration.com/update-password?userId=${dbData.id}" target="_blank" style="border: 2px solid blue; text-decoration: none; padding: 5px;border-radius: 5px; cursor: pointer; "> reset password </a>
                            <h4>Thanks & regards </h4>
                            <h5>HHHimmigration team</h5>`;
    const isEmailSend = await sendEmail(email, "Forgot Password!", forgotHtml);
    if (isEmailSend) {
      return { ok: true, data: isEmailSend };
    }
    return { error: "something went wrong" };
  } catch (err) {
    return err;
  }
};

import { NextResponse } from "next/server";
import { sendMail } from "../../../services/mailService";

export async function GET() {
  return NextResponse.json({ hello: "world" });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    return await sendMail(data.email, data.message, data.name)
      .then((result) =>
        NextResponse.json({
          msg: "Successfully Sent The Messages",
          status: 200,
        })
      )
      .catch((err) => {
        return NextResponse.json({
          error: err,
          status: 500,
        });
      });
  } catch (e) {
    return NextResponse.json({
      error: e,
      status: 500,
    });
  }
}

import { MessageEmailTemplate } from "@/components/molecules";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message } = body;

    console.log(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing email or message" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["jainsahabdj07@gmail.com"],
      subject: "Message from portfolio",
      react: MessageEmailTemplate({ email, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

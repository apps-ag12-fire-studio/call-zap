import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text } = body;

    if (typeof text !== "string") {
      return NextResponse.json(
        { reply: 'Invalid input: "text" field must be a string.' },
        { status: 400 }
      );
    }

    if (text === "ping") {
      return NextResponse.json({ reply: "pong" });
    } else {
      return NextResponse.json({ reply: "Command not recognized" });
    }
  } catch (error) {
    return NextResponse.json(
      { reply: "Invalid JSON payload provided." },
      { status: 400 }
    );
  }
}

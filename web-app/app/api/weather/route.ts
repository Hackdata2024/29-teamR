import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch(process.env.API_END_POINT ?? "");
    const data = await res.json();
    return NextResponse.json({
        data
    })
}
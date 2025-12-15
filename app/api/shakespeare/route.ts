import { NextResponse } from "next/server";


const BASE_TRANSLATIONS_URL = "https://api.funtranslations.com/translate";

export async function POST(req: Request) {
    const { text } = await req.json();

    const response = await fetch(`${BASE_TRANSLATIONS_URL}/shakespeare.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });

    const data = await response.json();
    return NextResponse.json(data);
}

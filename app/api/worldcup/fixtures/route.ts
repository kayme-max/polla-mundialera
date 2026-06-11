import { NextResponse } from "next/server"
import { getFixtures } from "@/lib/api-football"

export async function GET() {
  try {
    const data = await getFixtures()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

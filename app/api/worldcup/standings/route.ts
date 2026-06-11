import { NextResponse } from "next/server"
import { getStandings } from "@/lib/api-football"

export async function GET() {
  try {
    const data = await getStandings()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

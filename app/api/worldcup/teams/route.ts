import { NextResponse } from "next/server"
import { getTeams } from "@/lib/api-football"

export async function GET() {
  try {
    const data = await getTeams()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

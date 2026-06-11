import { NextResponse } from "next/server"
import { readExcelLocal } from "@/lib/api/read-excel"

export async function GET() {
  try {
    const data = readExcelLocal("predicciones.xlsx")
    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "No se pudo leer el archivo" }, { status: 500 })
  }
}
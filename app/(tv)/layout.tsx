import { TopBar } from "@/components/topbar"

export const dynamic = "force-dynamic"

export default function TvLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-bg">
      <TopBar />
      <main className="flex-1 overflow-hidden min-h-0">{children}</main>
    </div>
  )
}

"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const user = localStorage.getItem("ghostCallUser")
    if (!user) {
      router.push("/login")
    }
  }, [router])

  if (!isClient) {
    return (
      <div className="min-h-svh flex items-center justify-center bg-background">
        <div className="font-mono text-foreground/60">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-background">
      <Sidebar />
      <main className="lg:pl-64 pt-16 lg:pt-0">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}

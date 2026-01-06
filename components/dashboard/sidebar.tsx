"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { GhostLogo } from "@/components/sip-logo"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Phone, User, LogOut, Send, Menu, X, Users, CreditCard } from "lucide-react"
import { useState } from "react"

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Caller ID",
    href: "/dashboard/caller-id",
    icon: Phone,
  },
  {
    name: "Contactos",
    href: "/dashboard/contacts",
    icon: Users,
  },
  {
    name: "Recargar",
    href: "/dashboard/recharge",
    icon: CreditCard,
  },
  {
    name: "Mi Cuenta",
    href: "/dashboard/account",
    icon: User,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("ghostCallUser")
    router.push("/")
  }

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-background border-b border-border flex items-center justify-between px-4">
        <Link href="/dashboard">
          <GhostLogo className="w-12 h-12" />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-svh w-64 bg-background border-r border-border flex flex-col transition-transform duration-300",
          "lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-6 border-b border-border flex items-center justify-center">
          <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
            <GhostLogo className="w-16 h-16" />
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 font-mono text-sm uppercase transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary border-l-2 border-primary"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5",
              )}
            >
              <item.icon className="size-5" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <a
            href="https://t.me/GhostCall_Support"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 font-mono text-sm uppercase text-foreground/60 hover:text-primary transition-colors"
          >
            <Send className="size-5" />
            Soporte
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 font-mono text-sm uppercase text-foreground/60 hover:text-destructive transition-colors"
          >
            <LogOut className="size-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>
    </>
  )
}

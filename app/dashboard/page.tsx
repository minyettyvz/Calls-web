"use client"

import { useEffect, useState } from "react"
import { Pill } from "@/components/pill"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Clock, Phone, User, TrendingUp } from "lucide-react"
import Link from "next/link"

interface UserData {
  email: string
  name: string
  minutes: number
  callerId: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserData | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem("ghostCallUser")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  if (!user) {
    return null
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Buenos días"
    if (hour < 18) return "Buenas tardes"
    return "Buenas noches"
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <Pill className="mb-4">DASHBOARD</Pill>
        <h1 className="text-3xl sm:text-4xl font-sentient mb-2">
          {getGreeting()}, <i className="font-light">{user.name}</i>
        </h1>
        <p className="font-mono text-foreground/60">Bienvenido a tu panel de control Ghost Call Pro</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Minutos Disponibles"
          value={user.minutes}
          subtitle="minutos restantes"
          icon={<Clock className="size-6" />}
          highlight
        />
        <StatsCard
          title="Caller ID Actual"
          value={user.callerId || "No configurado"}
          subtitle="número de identificación"
          icon={<Phone className="size-6" />}
        />
        <StatsCard
          title="Estado de Cuenta"
          value="Activa"
          subtitle="cuenta verificada"
          icon={<User className="size-6" />}
        />
        <StatsCard
          title="Uso del Mes"
          value="32"
          subtitle="minutos consumidos"
          icon={<TrendingUp className="size-6" />}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-border bg-background/50">
          <h3 className="font-mono text-lg mb-4">Acciones Rápidas</h3>
          <div className="space-y-3">
            <Link
              href="/dashboard/caller-id"
              className="block p-4 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <div>
                  <p className="font-mono text-sm">Cambiar Caller ID</p>
                  <p className="font-mono text-xs text-foreground/40">Actualiza tu número de identificación</p>
                </div>
              </div>
            </Link>
            <Link
              href="/dashboard/recharge"
              className="block p-4 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="size-5 text-primary" />
                <div>
                  <p className="font-mono text-sm">Recargar Balance</p>
                  <p className="font-mono text-xs text-foreground/40">Agrega más minutos a tu cuenta</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="p-6 border border-border bg-background/50">
          <h3 className="font-mono text-lg mb-4">Información de Cuenta</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="font-mono text-sm text-foreground/60">Email</span>
              <span className="font-mono text-sm">{user.email}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="font-mono text-sm text-foreground/60">Usuario</span>
              <span className="font-mono text-sm">{user.name}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="font-mono text-sm text-foreground/60">Caller ID</span>
              <span className="font-mono text-sm">{user.callerId}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-mono text-sm text-foreground/60">Minutos</span>
              <span className="font-mono text-sm text-primary font-bold">{user.minutes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

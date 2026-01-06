"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Pill } from "@/components/pill"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Check, AlertCircle } from "lucide-react"
import { px } from "@/components/utils"

interface UserData {
  email: string
  name: string
  minutes: number
  callerId: string
}

export default function CallerIdPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [newCallerId, setNewCallerId] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem("ghostCallUser")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)
    setLoading(true)

    const phoneRegex = /^\+?[1-9]\d{6,14}$/
    if (!phoneRegex.test(newCallerId.replace(/\s/g, ""))) {
      setError("Por favor ingresa un número de teléfono válido (ej: +1234567890)")
      setLoading(false)
      return
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (user) {
      const updatedUser = { ...user, callerId: newCallerId }
      localStorage.setItem("ghostCallUser", JSON.stringify(updatedUser))
      setUser(updatedUser)
      setSuccess(true)
      setNewCallerId("")
    }

    setLoading(false)
  }

  if (!user) {
    return null
  }

  const polyRoundness = 8

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Pill className="mb-4">CALLER ID</Pill>
        <h1 className="text-3xl sm:text-4xl font-sentient mb-2">
          Cambiar <i className="font-light">Caller ID</i>
        </h1>
        <p className="font-mono text-foreground/60">Actualiza el número que se mostrará en tus llamadas</p>
      </div>

      {/* Current Caller ID */}
      <div className="p-6 border border-border bg-background/50 mb-6">
        <h3 className="font-mono text-sm uppercase text-foreground/40 mb-4">Caller ID Actual</h3>
        <div className="flex items-center gap-4 p-4 border border-primary bg-primary/5">
          <div className="p-3 bg-primary text-background">
            <Phone className="size-6" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-xs text-foreground/40 uppercase">Número Actual</p>
            <p className="font-mono text-2xl text-primary">{user.callerId || "No configurado"}</p>
          </div>
        </div>
      </div>

      {/* Change Caller ID Form */}
      <div className="p-6 border border-border bg-background/50">
        <h3 className="font-mono text-sm uppercase text-foreground/40 mb-4">Nuevo Caller ID</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="newCallerId" className="block font-mono text-sm text-foreground/80 mb-2 uppercase">
              Nuevo Número de Teléfono
            </label>
            <div className="relative">
              <input
                id="newCallerId"
                type="tel"
                value={newCallerId}
                onChange={(e) => setNewCallerId(e.target.value)}
                style={
                  {
                    "--poly-roundness": px(polyRoundness),
                  } as React.CSSProperties
                }
                className="w-full h-14 px-4 pl-12 bg-background border border-border font-mono text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_var(--poly-roundness),100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,var(--poly-roundness)_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]"
                placeholder="+1234567890"
              />
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-foreground/40" />
            </div>
            <p className="font-mono text-xs text-foreground/40 mt-2">
              Ingresa el número con código de país (ej: +1 para USA)
            </p>
          </div>

          {/* Visual comparison */}
          {newCallerId && (
            <div className="flex items-center gap-4 p-4 border border-border bg-background">
              <div className="flex-1 text-center">
                <p className="font-mono text-xs text-foreground/40 uppercase mb-1">Antes</p>
                <p className="font-mono text-lg text-foreground/60">{user.callerId || "No configurado"}</p>
              </div>
              <ArrowRight className="size-5 text-primary shrink-0" />
              <div className="flex-1 text-center">
                <p className="font-mono text-xs text-foreground/40 uppercase mb-1">Después</p>
                <p className="font-mono text-lg text-primary">{newCallerId}</p>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-3 p-4 border border-destructive bg-destructive/10 text-destructive">
              <AlertCircle className="size-5 shrink-0" />
              <p className="font-mono text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-3 p-4 border border-green-500 bg-green-500/10 text-green-500">
              <Check className="size-5 shrink-0" />
              <p className="font-mono text-sm">Caller ID actualizado correctamente</p>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={loading || !newCallerId}>
            {loading ? "[Actualizando...]" : "[Cambiar Caller ID]"}
          </Button>
        </form>
      </div>

      <div className="mt-6 p-4 border border-border bg-background/50">
        <p className="font-mono text-xs text-foreground/40 text-center">
          Nota: El cambio de Caller ID puede tardar hasta 24 horas en reflejarse. Si tienes problemas, contacta{" "}
          <a
            href="https://t.me/tu_usuario_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            soporte
          </a>
        </p>
      </div>
    </div>
  )
}

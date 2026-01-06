"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { GhostLogo } from "@/components/sip-logo"
import { Button } from "@/components/ui/button"
import { Pill } from "@/components/pill"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import { px } from "@/components/utils"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (email && password) {
      localStorage.setItem(
        "ghostCallUser",
        JSON.stringify({
          email,
          name: email.split("@")[0],
          minutes: 150,
          callerId: "+1234567890",
          contacts: [],
        }),
      )
      router.push("/dashboard")
    } else {
      setError("Por favor ingresa tu correo y contraseña")
    }

    setLoading(false)
  }

  const polyRoundness = 8

  return (
    <div className="min-h-svh flex flex-col items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-8">
            <GhostLogo className="w-24 h-24 mx-auto" />
          </Link>
          <Pill className="mb-6">ACCESO AL PANEL</Pill>
          <h1 className="text-3xl sm:text-4xl font-sentient mb-2">
            Iniciar <i className="font-light">Sesión</i>
          </h1>
          <p className="font-mono text-sm text-foreground/60">Ingresa tus credenciales para acceder</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block font-mono text-sm text-foreground/80 mb-2 uppercase">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={
                {
                  "--poly-roundness": px(polyRoundness),
                } as React.CSSProperties
              }
              className="w-full h-14 px-4 bg-background border border-border font-mono text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_var(--poly-roundness),100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,var(--poly-roundness)_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]"
              placeholder="tu@correo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-mono text-sm text-foreground/80 mb-2 uppercase">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={
                  {
                    "--poly-roundness": px(polyRoundness),
                  } as React.CSSProperties
                }
                className="w-full h-14 px-4 pr-12 bg-background border border-border font-mono text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_var(--poly-roundness),100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,var(--poly-roundness)_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-4 border border-destructive bg-destructive/10 text-destructive font-mono text-sm">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "[Cargando...]" : "[Iniciar Sesión]"}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center font-mono text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4 mr-2" />
            Volver al inicio
          </Link>
        </div>

        <div className="mt-8 p-4 border border-border bg-background/50">
          <p className="font-mono text-xs text-foreground/40 text-center">
            ¿No tienes cuenta? Contacta por{" "}
            <a
              href="https://t.me/GhostCall_Support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Telegram
            </a>{" "}
            para solicitar tu usuario.
          </p>
        </div>
      </div>
    </div>
  )
}

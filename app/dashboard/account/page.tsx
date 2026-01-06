"use client"

import { useEffect, useState } from "react"
import { Pill } from "@/components/pill"
import { User, Mail, Phone, Clock } from "lucide-react"

interface UserData {
  email: string
  name: string
  minutes: number
  callerId: string
}

export default function AccountPage() {
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

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Pill className="mb-4">MI CUENTA</Pill>
        <h1 className="text-3xl sm:text-4xl font-sentient mb-2">
          Información del <i className="font-light">Usuario</i>
        </h1>
        <p className="font-mono text-foreground/60">Detalles de tu cuenta Ghost Call Pro</p>
      </div>

      <div className="p-6 border border-border bg-background/50 space-y-6">
        <div className="flex items-center gap-4 p-4 border border-border">
          <div className="p-3 bg-primary/10 text-primary">
            <User className="size-6" />
          </div>
          <div>
            <p className="font-mono text-xs text-foreground/40 uppercase">Nombre</p>
            <p className="font-mono text-lg">{user.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 border border-border">
          <div className="p-3 bg-primary/10 text-primary">
            <Mail className="size-6" />
          </div>
          <div>
            <p className="font-mono text-xs text-foreground/40 uppercase">Correo Electrónico</p>
            <p className="font-mono text-lg">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 border border-border">
          <div className="p-3 bg-primary/10 text-primary">
            <Phone className="size-6" />
          </div>
          <div>
            <p className="font-mono text-xs text-foreground/40 uppercase">Caller ID</p>
            <p className="font-mono text-lg">{user.callerId}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 border border-primary bg-primary/5">
          <div className="p-3 bg-primary text-background">
            <Clock className="size-6" />
          </div>
          <div>
            <p className="font-mono text-xs text-foreground/40 uppercase">Minutos Disponibles</p>
            <p className="font-mono text-2xl text-primary font-bold">{user.minutes}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 border border-border bg-background/50">
        <p className="font-mono text-xs text-foreground/40 text-center">
          Para modificar los datos de tu cuenta o agregar balance, contacta por{" "}
          <a
            href="https://t.me/tu_usuario_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Telegram
          </a>
        </p>
      </div>
    </div>
  )
}

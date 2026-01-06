"use client"

import { Pill } from "@/components/pill"
import { Button } from "@/components/ui/button"
import { Clock, MessageCircle, Zap, Send } from "lucide-react"

export function SupportSection() {
  return (
    <section id="support" className="py-24 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Pill className="mb-6">SOPORTE 24/7</Pill>
            <h2 className="text-4xl sm:text-5xl font-sentient mb-6">
              Siempre <i className="font-light">disponibles</i>
            </h2>
            <p className="font-mono text-foreground/60 mb-8 text-balance">
              Nuestro equipo de soporte técnico está disponible las 24 horas del día, los 7 días de la semana para
              resolver cualquier duda o problema que tengas.
            </p>

            <a href="https://t.me/GhostCall_Support" target="_blank" rel="noopener noreferrer" className="contents">
              <Button>
                <Send className="mr-2 size-5" />
                [Contactar Soporte]
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-border bg-background/50 backdrop-blur-sm">
              <Clock className="size-8 text-primary mb-4" />
              <h3 className="font-mono text-lg mb-2">24/7</h3>
              <p className="font-mono text-sm text-foreground/60">Disponibilidad total</p>
            </div>
            <div className="p-6 border border-border bg-background/50 backdrop-blur-sm">
              <Zap className="size-8 text-primary mb-4" />
              <h3 className="font-mono text-lg mb-2">Respuesta Rápida</h3>
              <p className="font-mono text-sm text-foreground/60">Menos de 5 minutos</p>
            </div>
            <div className="p-6 border border-border bg-background/50 backdrop-blur-sm sm:col-span-2">
              <MessageCircle className="size-8 text-primary mb-4" />
              <h3 className="font-mono text-lg mb-2">Telegram Directo</h3>
              <p className="font-mono text-sm text-foreground/60">
                Comunicación instantánea con nuestro equipo de soporte técnico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Pill } from "@/components/pill"
import { Send } from "lucide-react"

interface HeroSectionProps {
  onHover: (hovering: boolean) => void
}

export function HeroSection({ onHover }: HeroSectionProps) {
  return (
    <div className="min-h-svh flex flex-col justify-end pb-16 relative">
      <div className="text-center">
        <Pill className="mb-6">GHOST CALL PRO</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Conexiones <br />
          <i className="font-light">sin límites</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Servicio de llamadas profesional con la mejor calidad y soporte técnico 24/7
        </p>

        <a className="contents" href="https://t.me/GhostCall_Support" target="_blank" rel="noopener noreferrer">
          <Button
            className="mt-14 max-sm:hidden"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <Send className="mr-2 size-5" />
            [Contactar por Telegram]
          </Button>
          <Button
            size="sm"
            className="mt-14 sm:hidden"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <Send className="mr-2 size-4" />
            [Telegram]
          </Button>
        </a>
      </div>
    </div>
  )
}

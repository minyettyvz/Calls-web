"use client"

import { Pill } from "@/components/pill"
import { Button } from "@/components/ui/button"
import { Send, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <Pill className="mb-6">CONTACTO</Pill>
          <h2 className="text-4xl sm:text-5xl font-sentient mb-6">
            Hablemos por <i className="font-light">Telegram</i>
          </h2>
          <p className="font-mono text-foreground/60 mb-8 text-balance">
            La forma más rápida de contactarnos es a través de Telegram. Responderemos todas tus dudas y te ayudaremos a
            comenzar.
          </p>

          <div className="p-8 border border-primary bg-background/50 backdrop-blur-sm">
            <MessageCircle className="size-16 text-primary mx-auto mb-6" />
            <h3 className="font-mono text-2xl mb-2">@GhostCall_Support</h3>
            <p className="font-mono text-foreground/60 mb-6">
              Escríbenos directamente para solicitar tu usuario, recargas o soporte
            </p>
            <a href="https://t.me/GhostCall_Support" target="_blank" rel="noopener noreferrer" className="contents">
              <Button>
                <Send className="mr-2 size-5" />
                [Abrir Telegram]
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

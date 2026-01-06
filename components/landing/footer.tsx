"use client"

import { GhostLogoText } from "@/components/sip-logo"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <GhostLogoText className="text-lg" />
          <p className="font-mono text-sm text-foreground/40">
            © {new Date().getFullYear()} Ghost Call Pro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { GhostLogo } from "./sip-logo"
import { MobileMenu } from "./mobile-menu"
import { useEffect, useState } from "react"

export const LandingHeader = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm py-4 border-b border-foreground/10" : "pt-8 md:pt-14"
      }`}
    >
      <header className="flex items-center justify-between container">
        <Link href="/">
          <GhostLogo
            className={`transition-all duration-300 ${scrolled ? "w-12 h-12" : "w-16 h-16 md:w-20 md:h-20"}`}
          />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { name: "Inicio", href: "#" },
            { name: "Nosotros", href: "#about" },
            { name: "Planes", href: "#plans" },
            { name: "Soporte", href: "#support" },
            { name: "Contacto", href: "#contact" },
          ].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
          href="/login"
        >
          Iniciar Sesión
        </Link>
        <MobileMenu variant="landing" />
      </header>
    </div>
  )
}

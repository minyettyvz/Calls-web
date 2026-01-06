"use client"

import { useState, useEffect } from "react"
import { Leva } from "leva"
import { GL } from "@/components/gl"
import { LandingHeader } from "@/components/landing-header"
import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import { PlansSection } from "@/components/landing/plans-section"
import { SupportSection } from "@/components/landing/support-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  const [hovering, setHovering] = useState(false)
  const [glHeight, setGlHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Animation shrinks from full viewport to header area (120px)
      const headerHeight = 120
      const newHeight = Math.max(headerHeight, windowHeight - scrollY)
      setGlHeight(newHeight)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <LandingHeader />
      <GL hovering={hovering} heightLimit={glHeight} />

      <main className="relative z-10">
        <HeroSection onHover={setHovering} />

        <div className="bg-background">
          <AboutSection />
          <PlansSection />
          <SupportSection />
          <ContactSection />
          <Footer />
        </div>
      </main>

      <Leva hidden />
    </>
  )
}

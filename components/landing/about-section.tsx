"use client"

import { Pill } from "@/components/pill"
import { Phone, Shield, Clock, Headphones } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Calidad Premium",
    description: "Conexiones de alta calidad con audio cristalino en todas tus llamadas.",
  },
  {
    icon: Shield,
    title: "Seguridad Total",
    description: "Tus comunicaciones protegidas con encriptación de última generación.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Servicio activo las 24 horas del día, los 7 días de la semana.",
  },
  {
    icon: Headphones,
    title: "Soporte Dedicado",
    description: "Equipo de soporte técnico siempre disponible para ayudarte.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">QUIÉNES SOMOS</Pill>
          <h2 className="text-4xl sm:text-5xl font-sentient mb-6">
            Tu socio en <i className="font-light">comunicaciones</i>
          </h2>
          <p className="font-mono text-foreground/60 max-w-2xl mx-auto text-balance">
            Somos expertos en servicios de telecomunicaciones con años de experiencia brindando soluciones confiables y
            de alta calidad para profesionales y empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
            >
              <feature.icon className="size-10 text-primary mb-4" />
              <h3 className="font-mono text-lg mb-2">{feature.title}</h3>
              <p className="font-mono text-sm text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

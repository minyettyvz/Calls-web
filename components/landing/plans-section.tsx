"use client"

import { Pill } from "@/components/pill"
import { Button } from "@/components/ui/button"
import { Check, Gift, Send, CreditCard } from "lucide-react"

const plans = [
  {
    type: "usuario",
    title: "Nuevo Usuario",
    price: 40,
    description: "Solicita tu usuario",
    features: ["Cuenta personal", "Configuración inicial", "Soporte de activación", "Acceso al panel"],
    popular: false,
    link: "https://t.me/GhostCall_Support",
    linkType: "telegram",
  },
  {
    type: "recarga",
    title: "Recarga $50",
    price: 50,
    description: "Recarga de balance",
    features: ["50 minutos de llamadas", "Sin fecha de expiración", "Uso flexible", "Soporte incluido"],
    popular: false,
    link: "https://pay.oxapay.com/10176811",
    linkType: "payment",
  },
  {
    type: "recarga",
    title: "Recarga $100",
    price: 100,
    description: "Recarga de balance",
    features: ["100 minutos de llamadas", "Sin fecha de expiración", "Uso flexible", "Soporte incluido"],
    popular: false,
    link: "https://pay.oxapay.com/14242167",
    linkType: "payment",
  },
  {
    type: "recarga",
    title: "Recarga $200",
    price: 200,
    description: "Recarga de balance",
    features: ["200 minutos de llamadas", "+25 minutos GRATIS", "Sin fecha de expiración", "Soporte prioritario"],
    popular: true,
    bonus: "+25 MIN GRATIS",
    link: "https://pay.oxapay.com/10316128",
    linkType: "payment",
  },
]

export function PlansSection() {
  return (
    <section id="plans" className="py-24 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">PLANES Y RECARGAS</Pill>
          <h2 className="text-4xl sm:text-5xl font-sentient mb-6">
            Elige tu <i className="font-light">plan ideal</i>
          </h2>
          <p className="font-mono text-foreground/60 max-w-2xl mx-auto text-balance">
            Opciones flexibles para usuarios nuevos y recargas de balance. Recarga $200 y recibe 25 minutos adicionales
            de regalo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative p-6 border bg-background/50 backdrop-blur-sm transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "border-primary shadow-[0_0_30px_-5px] shadow-primary/30"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.bonus && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-mono font-bold flex items-center gap-1">
                  <Gift className="size-3" />
                  {plan.bonus}
                </div>
              )}

              <div className="mb-6">
                <span className="font-mono text-xs text-foreground/40 uppercase">
                  {plan.type === "usuario" ? "Registro" : "Recarga"}
                </span>
                <h3 className="font-mono text-xl mt-1">{plan.title}</h3>
                <p className="font-mono text-sm text-foreground/60 mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-sentient text-primary">${plan.price}</span>
                <span className="font-mono text-foreground/40 text-sm ml-1">USD</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="font-mono text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={plan.link} target="_blank" rel="noopener noreferrer" className="contents">
                <Button size="sm" className="w-full">
                  {plan.linkType === "payment" ? (
                    <>
                      <CreditCard className="mr-2 size-4" />
                      [Pagar Ahora]
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 size-4" />
                      [Solicitar]
                    </>
                  )}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

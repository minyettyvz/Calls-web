"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { px } from "@/components/utils"

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: React.ReactNode
  highlight?: boolean
}

export function StatsCard({ title, value, subtitle, icon, highlight }: StatsCardProps) {
  const polyRoundness = 8

  return (
    <div
      style={
        {
          "--poly-roundness": px(polyRoundness),
        } as React.CSSProperties
      }
      className={cn(
        "p-6 border bg-background/50 backdrop-blur-sm transition-all [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_var(--poly-roundness),100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,var(--poly-roundness)_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]",
        highlight ? "border-primary shadow-[0_0_30px_-5px] shadow-primary/30" : "border-border",
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs uppercase text-foreground/40">{title}</span>
        <div className={cn("p-2", highlight ? "text-primary" : "text-foreground/60")}>{icon}</div>
      </div>
      <div className="space-y-1">
        <p className={cn("text-4xl font-sentient", highlight ? "text-primary" : "text-foreground")}>{value}</p>
        {subtitle && <p className="font-mono text-sm text-foreground/40">{subtitle}</p>}
      </div>
    </div>
  )
}

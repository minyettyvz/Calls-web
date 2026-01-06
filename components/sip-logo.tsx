import Image from "next/image"

export const GhostLogo = ({ className }: { className?: string }) => {
  return <Image src="/images/png-logo-call.png" alt="Ghost Call Pro" width={160} height={160} className={className} />
}

export const GhostLogoText = ({ className }: { className?: string }) => {
  return (
    <span className={`font-mono font-bold ${className}`}>
      GHOST<span className="text-primary">CALL</span> PRO
    </span>
  )
}

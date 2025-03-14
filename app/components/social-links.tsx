"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

interface SocialLinksProps {
  className?: string
  iconSize?: number
}

export function SocialLinks({ className = "", iconSize = 24 }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/jekaterinamargalnikova/",
      icon: Instagram,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100001315461428",
      icon: Facebook,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@jekaterinamargalnikova",
      icon: Youtube,
    },
  ]

  return (
    <div className={`flex gap-6 ${className}`}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={social.name}
        >
          <social.icon size={iconSize} />
        </Link>
      ))}
    </div>
  )
}


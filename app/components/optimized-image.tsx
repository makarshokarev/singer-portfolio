"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallback?: string
}

export function OptimizedImage({
  src,
  alt,
  fallback = "/placeholder.svg?height=600&width=800",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <Image
      src={error ? fallback : src}
      alt={alt}
      {...props}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setIsLoading(false)
        setError(true)
      }}
      className={`
        ${props.className || ""}
        ${isLoading ? "blur-sm" : "blur-0"}
        transition-all duration-300
      `}
    />
  )
}


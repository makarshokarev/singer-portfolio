"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { 
        threshold: 0.1,
        rootMargin: '100px'
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  if (!isLoaded) {
    return (
      <div
        ref={containerRef}
        className="aspect-video bg-muted animate-pulse flex items-center justify-center rounded-lg"
      >
        <span className="sr-only">{title}</span>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="aspect-video rounded-lg overflow-hidden relative">
      {!isPlaying && (
        <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
          <div className="relative w-full h-full">
            <Image
              src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
              alt={title}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              unoptimized
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-4 transition-all duration-300 transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {(isIntersecting && isPlaying) && (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="border-0"
          loading="lazy"
        ></iframe>
      )}
    </div>
  )
}


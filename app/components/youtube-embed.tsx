"use client"

import { useState, useEffect, useRef } from "react"

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1 },
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
    <div ref={containerRef} className="aspect-video rounded-lg overflow-hidden">
      {isIntersecting ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="border-0"
          loading="lazy"
        ></iframe>
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <button
            onClick={() => setIsIntersecting(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground"
            aria-label={`Load video: ${title}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Load Video
          </button>
        </div>
      )}
    </div>
  )
}


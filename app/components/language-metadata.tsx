"use client"

import { useLanguage } from "../contexts/language-context"
import { useEffect } from "react"
import Script from "next/script"

export function LanguageMetadata() {
  const { language } = useLanguage()

  useEffect(() => {
    // Update HTML lang attribute when language changes
    document.documentElement.lang = language
  }, [language])

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Jekaterina Margalnikova",
    url: "https://jekaterina-margalnikova.com",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157219200_2277091405768905_8626492048496962213_n.jpg-pvCit7aYS8D2AGLPoqo99sCvcCx0nM.jpeg",
    description:
      language === "et"
        ? "Jekaterina Margalnikova on mitmekülgne vokalist, kes on tuntud oma võimsate esinemiste ja emotsionaalse sügavuse poolest."
        : "Екатерина Маргальникова — разносторонняя вокалистка, известная своими мощными выступлениями и эмоциональной глубиной.",
    genre: "Pop, Rock, Cover",
    sameAs: [
      "https://www.instagram.com/jekaterinamargalnikova/",
      "https://www.facebook.com/profile.php?id=100001315461428",
      "https://www.youtube.com/@jekaterinamargalnikova",
    ],
  }

  return (
    <Script id="schema-org" type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  )
}


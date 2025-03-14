import type React from "react"
import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import type { Metadata } from "next"
import { LanguageProvider } from "./contexts/language-context"
import Script from "next/script"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jekaterina Margalnikova | Vokalist & Esineja",
  description:
    "Jekaterina Margalnikova ametlik veebileht, mis tutvustab tema sooloesinemisi ja bänditööd. Elavad emotsioonid igas laulus!",
  keywords: "Jekaterina Margalnikova, vokalist, laulja, muusika, esineja, kontserdid, Eesti muusika",
  authors: [{ name: "Jekaterina Margalnikova" }],
  creator: "Jekaterina Margalnikova",
  publisher: "Jekaterina Margalnikova",
  openGraph: {
    type: "website",
    locale: "et_EE",
    url: "https://jekaterina-margalnikova.com",
    title: "Jekaterina Margalnikova | Vokalist & Esineja",
    description:
      "Jekaterina Margalnikova ametlik veebileht, mis tutvustab tema sooloesinemisi ja bänditööd. Elavad emotsioonid igas laulus!",
    siteName: "Jekaterina Margalnikova",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157219200_2277091405768905_8626492048496962213_n.jpg-pvCit7aYS8D2AGLPoqo99sCvcCx0nM.jpeg",
        width: 1200,
        height: 630,
        alt: "Jekaterina Margalnikova performing on stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jekaterina Margalnikova | Vokalist & Esineja",
    description:
      "Jekaterina Margalnikova ametlik veebileht, mis tutvustab tema sooloesinemisi ja bänditööd. Elavad emotsioonid igas laulus!",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157219200_2277091405768905_8626492048496962213_n.jpg-pvCit7aYS8D2AGLPoqo99sCvcCx0nM.jpeg",
    ],
  },
  alternates: {
    languages: {
      ru: "/ru",
      et: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token", // Replace with actual Google verification token when available
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="et">
      <head>
        <link rel="canonical" href="https://jekaterina-margalnikova.com" />
        <link rel="alternate" hrefLang="et" href="https://jekaterina-margalnikova.com/" />
        <link rel="alternate" hrefLang="ru" href="https://jekaterina-margalnikova.com/ru" />
        <link rel="alternate" hrefLang="x-default" href="https://jekaterina-margalnikova.com/" />
      </head>
      <body className={montserrat.className}>
        <LanguageProvider>{children}</LanguageProvider>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Jekaterina Margalnikova",
              "url": "https://jekaterina-margalnikova.com",
              "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157219200_2277091405768905_8626492048496962213_n.jpg-pvCit7aYS8D2AGLPoqo99sCvcCx0nM.jpeg",
              "description": "Jekaterina Margalnikova on mitmekülgne vokalist, kes on tuntud oma võimsate esinemiste ja emotsionaalse sügavuse poolest.",
              "genre": "Pop, Rock, Cover",
              "sameAs": [
                "https://www.instagram.com/jekaterinamargalnikova/",
                "https://www.facebook.com/profile.php?id=100001315461428",
                "https://www.youtube.com/@jekaterinamargalnikova"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'
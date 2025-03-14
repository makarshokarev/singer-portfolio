import type { Metadata } from "next"

type GenerateMetadataProps = {
  language: "et" | "ru"
}

export function generateMetadata({ language }: GenerateMetadataProps): Metadata {
  const isEstonian = language === "et"

  const title = isEstonian
    ? "Jekaterina Margalnikova | Vokalist & Esineja"
    : "Екатерина Маргальникова | Вокалистка & Исполнитель"

  const description = isEstonian
    ? "Jekaterina Margalnikova ametlik veebileht, mis tutvustab tema sooloesinemisi ja bänditööd. Elavad emotsioonid igas laulus!"
    : "Официальный сайт Екатерины Маргальниковой, представляющий её сольные выступления и работу с группой. Живые эмоции в каждой песне!"

  return {
    title,
    description,
    keywords: isEstonian
      ? "Jekaterina Margalnikova, vokalist, laulja, muusika, esineja, kontserdid, Eesti muusika"
      : "Екатерина Маргальникова, вокалистка, певица, музыка, исполнитель, концерты, русская музыка",
    authors: [{ name: "Jekaterina Margalnikova" }],
    creator: "Jekaterina Margalnikova",
    publisher: "Jekaterina Margalnikova",
    openGraph: {
      type: "website",
      locale: isEstonian ? "et_EE" : "ru_RU",
      url: "https://jekaterina-margalnikova.com",
      title,
      description,
      siteName: "Jekaterina Margalnikova",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157219200_2277091405768905_8626492048496962213_n.jpg-pvCit7aYS8D2AGLPoqo99sCvcCx0nM.jpeg",
          width: 1200,
          height: 630,
          alt: isEstonian
            ? "Jekaterina Margalnikova performing on stage"
            : "Екатерина Маргальникова выступает на сцене",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
  }
}


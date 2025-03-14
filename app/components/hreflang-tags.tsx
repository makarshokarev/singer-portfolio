"use client"

import { useLanguage } from "../contexts/language-context"

export function HreflangTags() {
  const { language } = useLanguage()

  return (
    <>
      <link rel="alternate" hrefLang="et" href="https://jekaterina-margalnikova.com/" />
      <link rel="alternate" hrefLang="ru" href="https://jekaterina-margalnikova.com/ru" />
      <link rel="alternate" hrefLang="x-default" href="https://jekaterina-margalnikova.com/" />
    </>
  )
}


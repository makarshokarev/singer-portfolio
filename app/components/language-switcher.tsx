"use client"

import { useLanguage } from "../contexts/language-context"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === "ru" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("ru")}
        className="text-xs px-2 h-8"
      >
        RU
      </Button>
      <Button
        variant={language === "et" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("et")}
        className="text-xs px-2 h-8"
      >
        ET
      </Button>
    </div>
  )
}


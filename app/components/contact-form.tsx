"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "../contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ContactForm() {
  const { translations } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = translations.required
    }

    if (!formData.email.trim()) {
      newErrors.email = translations.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = translations.invalidEmail
    }

    if (!formData.message.trim()) {
      newErrors.message = translations.required
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, eventType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        eventType: "",
        message: "",
      })
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">{translations.contactForm}</h3>

      {formStatus === "success" && (
        <Alert className="mb-6 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300 border-green-200 dark:border-green-900">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{translations.formSuccess}</AlertDescription>
        </Alert>
      )}

      {formStatus === "error" && (
        <Alert className="mb-6 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300 border-red-200 dark:border-red-900">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{translations.formError}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">{translations.nameLabel}</Label>
          <Input
            id="name"
            name="name"
            placeholder={translations.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{translations.emailLabel}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={translations.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventType">{translations.eventTypeLabel}</Label>
          <Select value={formData.eventType} onValueChange={handleSelectChange}>
            <SelectTrigger id="eventType">
              <SelectValue placeholder={translations.eventTypePlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">{translations.wedding}</SelectItem>
              <SelectItem value="birthday">{translations.birthday}</SelectItem>
              <SelectItem value="corporate">{translations.corporate}</SelectItem>
              <SelectItem value="private">{translations.private}</SelectItem>
              <SelectItem value="other">{translations.other}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{translations.messageLabel}</Label>
          <Textarea
            id="message"
            name="message"
            placeholder={translations.messagePlaceholder}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {translations.send}...
            </>
          ) : (
            translations.send
          )}
        </Button>
      </form>
    </div>
  )
}


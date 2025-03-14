"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, User, ImageIcon, Mail, Video, Phone } from "lucide-react"
import { useLanguage } from "./contexts/language-context"
import { LanguageSwitcher } from "./components/language-switcher"
import { ThemeToggle } from "./components/theme-toggle"
import { useEffect, useState } from "react"
import { YouTubeEmbed } from "./components/youtube-embed"
import { SocialLinks } from "./components/social-links"
import { LanguageMetadata } from "./components/language-metadata"
import { ContactForm } from "./components/contact-form"
import { FadeInOnScroll, SlideIn, ScaleIn } from "@/components/animations"

export default function Home() {
  const { language, translations } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col" suppressHydrationWarning>
      <LanguageMetadata />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            Jekaterina Margalnikova
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              {translations.about}
            </Link>
            <Link href="#performances" className="text-muted-foreground hover:text-foreground transition-colors">
              {translations.performances}
            </Link>
            <Link href="#photos" className="text-muted-foreground hover:text-foreground transition-colors">
              {translations.photos}
            </Link>
            <Link href="#music" className="text-muted-foreground hover:text-foreground transition-colors">
              {translations.videos}
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {translations.contact}
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button variant="outline" size="sm" onClick={scrollToContact}>
              {translations.bookNow}
            </Button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              aria-label={`${translations.menu}: ${translations.about}, ${translations.performances}, ${translations.photos}, ${translations.videos}, ${translations.contact}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{translations.menu}</span>
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background py-4">
            <div className="container flex flex-col space-y-3">
              <Link 
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translations.about}
              </Link>
              <Link 
                href="#performances" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translations.performances}
              </Link>
              <Link 
                href="#photos" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translations.photos}
              </Link>
              <Link 
                href="#music" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translations.videos}
              </Link>
              <Link 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {translations.contact}
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 w-full"
                onClick={scrollToContact}
              >
                {translations.bookNow}
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main content sections */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative" aria-label={translations.vocalist}>
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157219200_2277091405768905_8626492048496962213_n.jpg-pvCit7aYS8D2AGLPoqo99sCvcCx0nM.jpeg"
              alt="Jekaterina Margalnikova performing with her band"
              fill
              className="object-cover object-[75%_35%] brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-36 lg:py-48">
            <div className="max-w-2xl text-white">
              <SlideIn delay={300}>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Jekaterina Margalnikova
                </h1>
              </SlideIn>
              <SlideIn delay={500}>
                <p className="mt-6 text-lg leading-8 text-gray-300">{translations.vocalist}</p>
              </SlideIn>
              <FadeInOnScroll delay={700}>
                <div className="mt-10 flex gap-4">
                  <Button asChild>
                    <Link href="#music">
                      {translations.listenNow} <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-background/20 hover:bg-background/30 text-white border-white/20"
                  >
                    <Link href="#contact">{translations.contact}</Link>
                  </Button>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SlideIn>
                  <h2 className="text-3xl font-bold tracking-tight">{translations.aboutTitle}</h2>
                  <div className="mt-6 space-y-4 text-muted-foreground">
                    <p>{translations.aboutP1}</p>
                    <p>{translations.aboutP2}</p>
                    <p>{translations.aboutP3}</p>
                  </div>
                </SlideIn>
              </div>
              <ScaleIn delay={300}>
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/169976459_2308519982626047_4193358740188660593_n.jpg-AdIDFOfF7IQsn7KSlMavxNxIlLJ2Xp.jpeg"
                    alt="Jekaterina Margalnikova performing on stage in a black sequined dress against a blue backdrop"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>

        {/* Performances and Services section */}
        <section id="performances" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold tracking-tight mb-8">{translations.performances}</h2>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScaleIn delay={200}>
                <div>
                  <h3 className="text-xl font-semibold mb-4">{translations.performancesTitle}</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-1 h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20v-6M9 9h6M7 20h10M6 12a6 6 0 0 1 12 0v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3Z"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">{translations.weddingsTitle}</span> – {translations.weddingsDesc}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-1 h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16Z"></path>
                          <path d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
                          <path d="M15 8h.01"></path>
                          <path d="M9 8h.01"></path>
                          <path d="M16 14c.9-.8 1.5-2 1.5-3.5C17.5 7 15 4 12 4S6.5 7 6.5 10.5c0 1.5.6 2.7 1.5 3.5"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">{translations.birthdaysTitle}</span> – {translations.birthdaysDesc}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-1 h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M7 7h10M7 12h10M7 17h10"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">{translations.corporateTitle}</span> – {translations.corporateDesc}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-1 h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">{translations.privateTitle}</span> – {translations.privateDesc}
                      </div>
                    </li>
                  </ul>
                </div>
              </ScaleIn>

              <ScaleIn delay={400}>
                <div>
                  <h3 className="text-xl font-semibold mb-4">{translations.formatsTitle}</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-1 h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="10" r="3"></circle>
                          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">{translations.soloFormat}</span> – {translations.soloDesc}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-1 h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 22v-5"></path>
                          <path d="M17 14V9"></path>
                          <path d="M17 6V2"></path>
                          <path d="M7 22v-3"></path>
                          <path d="M7 16v-5"></path>
                          <path d="M7 8V2"></path>
                          <path d="M12 22v-8"></path>
                          <path d="M12 11V9"></path>
                          <path d="M12 6V2"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">{translations.bandFormat}</span> – {translations.bandDesc}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-1 h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                          <path d="M12 12 8.5 8.5"></path>
                          <path d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">{translations.customFormat}</span> – {translations.customDesc}
                      </div>
                    </li>
                  </ul>

                  <p className="mt-6 text-muted-foreground">{translations.adaptableProgram}</p>

                  <div className="mt-8">
                    <Button asChild>
                      <Link href="#contact">{translations.bookPerformance}</Link>
                    </Button>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>

        {/* Photos section */}
        <section id="photos" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold tracking-tight mb-12">{translations.photoGallery}</h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/156940614_2277091219102257_3708242234223300245_n.jpg-s7ONzxnEPJfM288cKsF5rEgs1rgTNY.jpeg",
                  alt: "Jekaterina performing in a black dress with dramatic lighting"
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157410921_2277091572435555_7054285326420332086_n.jpg-qKPy7RtWLAzVzeWIWbGj0MCTVGDvJ2.jpeg",
                  alt: "Jekaterina performing with her band on stage"
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157486479_2277091269102252_7407216814253512607_n.jpg-rvOjxmHmGmAjeOPucsLOey0EgVL39y.jpeg",
                  alt: "Group photo of Jekaterina with her band"
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157570972_2277091415768904_3324391582093779283_n.jpg-nW1wxbxpB3Gvk8h1FB4HrR2L4I3XdE.jpeg",
                  alt: "Jekaterina in an elegant black dress performing"
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157219200_2277091405768905_8626492048496962213_n.jpg-pvCit7aYS8D2AGLPoqo99sCvcCx0nM.jpeg",
                  alt: "Jekaterina performing with her band"
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/169976459_2308519982626047_4193358740188660593_n.jpg-AdIDFOfF7IQsn7KSlMavxNxIlLJ2Xp.jpeg",
                  alt: "Jekaterina performing in a sparkling dress"
                }
              ].map((photo, index) => (
                <FadeInOnScroll key={photo.src} delay={index * 100}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Videos section */}
        <section id="music" className="py-16 md:py-24">
          <div className="container">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold tracking-tight mb-12">{translations.videoGallery}</h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScaleIn delay={200}>
                <div>
                  <YouTubeEmbed videoId="u0vKr7Mx4-U" title={translations.videoZemfira} />
                </div>
              </ScaleIn>
              <ScaleIn delay={400}>
                <div>
                  <YouTubeEmbed videoId="eeRP93F1o8Q" title={translations.videoSneg} />
                </div>
              </ScaleIn>
              <ScaleIn delay={600}>
                <div>
                  <YouTubeEmbed videoId="OM3GA_ywvP8" title={translations.videoLove} />
                </div>
              </ScaleIn>
              <ScaleIn delay={800}>
                <div>
                  <YouTubeEmbed videoId="xLM8xNttrDU" title={translations.videoMillion} />
                </div>
              </ScaleIn>
              <ScaleIn delay={1000}>
                <div>
                  <YouTubeEmbed videoId="Xba4HkvkIT8" title={translations.videoSolo} />
                </div>
              </ScaleIn>
              <ScaleIn delay={1200}>
                <div>
                  <YouTubeEmbed videoId="qUDTiM0BIko" title={translations.videoBand} />
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <SlideIn from="left">
              <h2 className="text-3xl font-bold tracking-tight mb-6">{translations.getInTouch}</h2>
              <p className="text-lg mb-12 max-w-3xl">{translations.contactText}</p>
            </SlideIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <SlideIn from="left" delay={300}>
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{translations.bookings}</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary rounded-full p-1 h-8 w-8 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium">{translations.phone}:</span> +372 53339928
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary rounded-full p-1 h-8 w-8 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium">{translations.email}:</span> jmargalnikova@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>

                  <SocialLinks className="mt-8" iconSize={24} />
                </div>
              </SlideIn>

              <SlideIn from="right" delay={300}>
                <ContactForm />
              </SlideIn>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jekaterina Margalnikova. {translations.allRightsReserved}
            </div>
            <SocialLinks iconSize={20} />
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                {translations.privacy}
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                {translations.terms}
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                {translations.cookies}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


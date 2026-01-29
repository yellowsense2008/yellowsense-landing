"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollTarget = searchParams.get("scroll")
  
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget)
  
      if (element) {
        const yOffset = -160 // Adjust this value according to your navbar height
        const y =
          element.getBoundingClientRect().top +
          window.scrollY +
          yOffset
  
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }, [searchParams]
)
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
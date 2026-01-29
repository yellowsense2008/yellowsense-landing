import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollHandler } from "@/components/scroll-handler"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollHandler />

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
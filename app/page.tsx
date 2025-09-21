import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
    </main>
  )
}

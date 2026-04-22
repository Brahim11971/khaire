import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { DetailGallery } from "@/components/detail-gallery"
import { AboutSection } from "@/components/about-section"
import { CtaBanner } from "@/components/cta-banner"
import { Collections } from "@/components/collections"
import { WhyKhaire } from "@/components/why-khaire"
import { Press } from "@/components/press"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <DetailGallery />
        <AboutSection />
        <CtaBanner />
        <Collections />
        <WhyKhaire />
        <Press />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

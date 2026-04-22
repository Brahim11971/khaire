import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { DetailGallery } from "@/components/detail-gallery"
import { VideoSection } from "@/components/video-section"
import { AboutSection } from "@/components/about-section"
import { CtaBanner } from "@/components/cta-banner"
import { Collections } from "@/components/collections"
import { WhyKhaire } from "@/components/why-khaire"
import { Press } from "@/components/press"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"
import { StickyOrderBar } from "@/components/sticky-order-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Header />
      <StickyOrderBar />
      <main>
        <Hero />
        <TrustBadges />
        <DetailGallery />
        <VideoSection />
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

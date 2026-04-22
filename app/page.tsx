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
    <div className="min-h-screen bg-[#faf9f7]">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        
        {/* Detail Gallery + About/CTA side by side on desktop */}
        <div className="grid lg:grid-cols-2">
          <DetailGallery />
          <div className="flex flex-col">
            <AboutSection />
            <CtaBanner />
          </div>
        </div>
        
        {/* Collections + Why Khaire side by side on desktop */}
        <div className="grid lg:grid-cols-2">
          <Collections />
          <WhyKhaire />
        </div>
        
        {/* Press + FAQ side by side on desktop */}
        <div className="grid lg:grid-cols-2">
          <Press />
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  )
}

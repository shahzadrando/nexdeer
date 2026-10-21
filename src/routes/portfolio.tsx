import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Portfolio as PortfolioSection } from "@/components/site/sections";
import { canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | NEXDEER Growth Agency" },
      { name: "description", content: "Explore our latest premium projects and digital mockups." },
    ],
    // Same content as /our-work, so point search engines at that page
    links: [canonicalLink("/our-work")],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden grid-noise text-white pt-36 pb-24 md:pt-44 md:pb-32 mb-12">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img 
              src="/images/unsplash/photo-1497215728101-856f4ea42174_w1200_q70.jpg" 
              alt="" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/95 via-[var(--ink-deep)]/85 to-[var(--ink-deep)]" />
          </div>
          <div className="container-x text-center fade-up">
            <span className="eyebrow mx-auto justify-center fade-up" style={{ animationDelay: '100ms' }}>OUR WORK</span>
            <h1 className="headline-xl mt-5 text-white max-w-4xl mx-auto fade-up" style={{ animationDelay: '200ms' }}>
              Selected <span className="text-[var(--gold)]">Projects</span>
            </h1>
            <p className="mt-7 mx-auto max-w-2xl text-lg text-white/75 leading-relaxed fade-up" style={{ animationDelay: '300ms' }}>
              Explore how we've helped businesses across various industries scale their revenue with premium websites, performance marketing, and AI automation.
            </p>
          </div>
        </section>

        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}

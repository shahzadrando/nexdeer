import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  GrowthSystem,
  ServicePerformance,
  ServiceWebsite,
  ServiceSEO,
  ServiceAI,
  ServiceSocialMedia,
  ServiceContent,
  ServiceBranding,
  ServiceCRM,
  ServiceEmail,
  ServiceAnalytics,
  FinalCTA,
  ContactStrip,
} from "@/components/site/sections";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | NEXDEER Growth Agency" },
      { name: "description", content: "Explore our full-stack digital growth services, including performance marketing, web design, SEO, and AI automation." },
      ...pageMeta("/services"),
    ],
    links: [canonicalLink("/services")],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden grid-noise text-white pt-36 pb-24 md:pt-44 md:pb-32 mb-12">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img 
              src="/images/unsplash/photo-1460925895917-afdab827c52f_w1200_q70.jpg" 
              alt="" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover opacity-25" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/95 via-[var(--ink-deep)]/85 to-[var(--ink-deep)]" />
          </div>
          <div className="container-x text-center fade-up">
            <span className="eyebrow mx-auto justify-center fade-up" style={{ animationDelay: '100ms' }}>OUR EXPERTISE</span>
            <h1 className="headline-xl mt-5 text-white max-w-4xl mx-auto fade-up" style={{ animationDelay: '200ms' }}>
              End-to-End <span className="text-[var(--gold)]">Growth Engine</span>
            </h1>
            <p className="mt-7 mx-auto max-w-2xl text-lg text-white/75 leading-relaxed fade-up" style={{ animationDelay: '300ms' }}>
              We connect your marketing, websites, SEO, and operations into a single scalable system designed to capture demand and generate revenue.
            </p>
          </div>
        </section>

        <ServicePerformance />
        <ServiceWebsite />
        <ServiceSEO />
        <ServiceAI />
        <ServiceSocialMedia />
        <ServiceContent />
        <ServiceBranding />
        <ServiceCRM />
        <ServiceEmail />
        <ServiceAnalytics />
        <FinalCTA />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}

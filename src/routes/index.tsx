import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero,
  Trusted,
  Problem,
  PainPoints,
  SolutionIntro,
  GrowthSystem,
  ServicePerformance,
  ServiceWebsite,
  ServiceSEO,
  ServiceAI,
  Portfolio,
  CaseStudies,
  Industries,
  WhyNexdeer,
  Process,
  TechStack,
  CeoMessage,
  Testimonials,
  SocialProof,
  FAQ,
  Affiliations,
  FinalCTA,
  ContactStrip,
  ServicesCTAStrip,
} from "@/components/site/sections";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXDEER | Digital Growth Agency: Marketing, SEO & AI" },
      {
        name: "description",
        content:
          "Performance marketing, websites, SEO, GEO/AEO and AI automation built into one growth system. Serving Pakistan, UAE and Saudi Arabia. Get your growth plan.",
      },
      { property: "og:title", content: "NEXDEER | Full-Stack Digital Growth Agency" },
      { property: "og:description", content: "Performance marketing, websites, SEO, and AI automation — built into one scalable growth system." },
      { property: "og:type", content: "website" },
      ...pageMeta("/"),
    ],
    links: [canonicalLink("/")],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        <Hero />
        <Trusted />
        <Problem />
        <PainPoints />
        <SolutionIntro />
        <ServicePerformance />
        <ServiceWebsite />
        <ServiceSEO />
        <ServiceAI />
        <CaseStudies />
        <Industries />
        <WhyNexdeer />
        <Process />
        <ServicesCTAStrip />
        <TechStack />
        <CeoMessage />
        <Testimonials />
        <SocialProof />
        <FAQ />
        <Affiliations />
        <FinalCTA />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}

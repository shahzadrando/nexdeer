import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Portfolio as PortfolioSection, CASES, Testimonials } from "@/components/site/sections";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work & Case Studies | NEXDEER Growth Agency" },
      { name: "description", content: "Case studies and projects from NEXDEER: local SEO wins, websites, performance marketing and automation for businesses across many industries." },
      ...pageMeta("/our-work"),
    ],
    links: [canonicalLink("/our-work")],
  }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-[var(--ink-deep)]">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden grid-noise text-white pt-28 pb-24 md:pt-44 md:pb-48">
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
              Done for <span className="text-[var(--gold)]">Real Businesses</span>
            </h1>
            <p className="mt-7 mx-auto max-w-2xl text-lg text-white/75 leading-relaxed fade-up" style={{ animationDelay: '300ms' }}>
              Explore how we've helped businesses across various industries scale their revenue with premium websites, performance marketing, and AI automation.
            </p>
          </div>
        </section>

        {/* OVERLAPPING CASE STUDY CARDS (HALF IN HERO NAVY, HALF IN BODY WHITE) */}
        <div className="container-x relative z-20 -mt-16 md:-mt-36 mb-16 md:mb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {CASES.map((c, i) => {
              return (
                <Link 
                  to="/our-work/$projectId"
                  params={{ projectId: c.id }}
                  key={c.brand} 
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--ink-deep)] p-6 md:p-8 lg:p-10 transition-all duration-500 hover:border-[var(--gold)]/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] flex flex-col justify-between min-h-[300px] md:min-h-[380px] cursor-pointer text-white"
                >
                  {/* Decorative gold glow on hover */}
                  <div className="absolute -right-16 -top-16 -z-10 h-32 w-32 rounded-full bg-[var(--gold)]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top Section */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">{c.brand}</span>
                      <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white/60 flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:border-[var(--gold)] group-hover:text-[var(--ink-deep)] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(232,181,4,0.25)] shrink-0">
                        <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                    
                    {/* Metric & Label */}
                    <div className="mt-8">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight group-hover:text-[var(--gold)] transition-colors duration-300">
                        {c.metric}
                      </div>
                      <div className="mt-2.5 text-xs text-white/50 font-bold uppercase tracking-wider">
                        {c.label}
                      </div>
                    </div>
                  </div>

                  {/* Divider, Description & Action */}
                  <div className="mt-10 pt-6 border-t border-white/5 flex-1 flex flex-col justify-between">
                    <p className="text-[15px] leading-relaxed text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      {c.desc}
                    </p>
                    
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--gold)] transition-all duration-300 group-hover:translate-x-1">
                      <span>Read case study</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <PortfolioSection hideHeader />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

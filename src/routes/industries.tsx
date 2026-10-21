import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { INDUSTRIES } from "@/data/industries";
import { ArrowRight, BarChart3, Target, Zap, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "B2B Marketing & Enterprise Growth Strategies by Industry | NEXDEER" },
      { name: "description", content: "Industry-specific marketing, SEO and lead generation from NEXDEER, built for Real Estate, Healthcare, SaaS, E-Commerce and B2B companies." },
      { name: "keywords", content: "B2B marketing strategies, enterprise digital transformation, industry specific SEO, SaaS lead generation, healthcare marketing agency, real estate digital growth, account based marketing" },
      { property: "og:title", content: "Industry-Specific Enterprise Growth | NEXDEER" },
      { property: "og:description", content: "Customized digital transformation and revenue-focused acquisition models tailored to the exact nuances of your vertical." },
      ...pageMeta("/industries"),
    ],
    links: [canonicalLink("/industries")],
  }),
  component: IndustriesPage,
});

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        {/* PREMIUM B2B HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-[var(--ink-deep)] text-white pt-32 pb-20 md:pt-48 md:pb-32">
          {/* Subtle architectural / abstract background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img 
              src="/images/unsplash/photo-1486406146926-c627a92ad1ab_w1200_q70.jpg" 
              alt="" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-luminosity scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/90 via-[var(--ink-deep)]/95 to-[var(--ink-deep)]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--gold)]/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="container-x relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold tracking-widest text-[var(--gold)] uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                Industry-Specific Growth Models
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Engineered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">High-Growth</span> <br />
                <span className="text-[var(--gold)] italic pr-4">Verticals.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed font-light">
                Generic marketing strategies bleed capital. We deploy precision-engineered, data-backed acquisition systems tailored to the exact regulatory, competitive, and customer-journey nuances of your specific industry.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-gold group">
                  Discuss Your Market <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            {/* Stats/Credibility block */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">60<span className="text-[var(--gold)]">+</span></div>
                <div className="text-sm text-white/60 leading-relaxed">Verticals mapped with proprietary growth playbooks.</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">47<span className="text-[var(--gold)]">%</span></div>
                <div className="text-sm text-white/60 leading-relaxed">Average reduction in enterprise CAC within 90 days.</div>
              </div>
              <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-2xl p-6 backdrop-blur-sm col-span-2">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gold)] text-[var(--ink-deep)]">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Hyper-Targeted ABM</h3>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed">We leverage account-based marketing (ABM) and advanced intent data to capture high-value enterprise accounts before your competitors do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B2B METHODOLOGY OVERVIEW */}
        <section className="py-24 bg-[var(--surface)] border-b border-[var(--border)]">
          <div className="container-x">
            <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
              <span className="eyebrow mx-auto justify-center">Our Methodology</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--ink-deep)] mt-4 tracking-tight">
                The B2B Growth Framework
              </h2>
              <p className="mt-5 text-lg text-[color:var(--muted-foreground)] leading-relaxed">
                We engineer scalable acquisition models through a combination of market intelligence, automation, and targeted campaigns.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="bg-[var(--ink-deep)] rounded-3xl p-8 lg:p-10 text-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(232,181,4,0.15)] group relative overflow-hidden border border-[var(--ink-deep)] hover:border-[var(--gold)]/40 fade-up">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[var(--gold)]/20 group-hover:border-[var(--gold)]/50 transition-colors duration-500 group-hover:scale-110 shadow-lg">
                    <BarChart3 className="text-[var(--gold)]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Market Intelligence</h3>
                  <p className="text-white/70 leading-relaxed text-[15px]">We don't guess. We analyze vertical-specific search behavior, competitor positioning, and total addressable market (TAM) to uncover high-intent revenue opportunities.</p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="bg-[var(--ink-deep)] rounded-3xl p-8 lg:p-10 text-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(232,181,4,0.15)] group relative overflow-hidden border border-[var(--ink-deep)] hover:border-[var(--gold)]/40 fade-up" style={{ animationDelay: '100ms' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[var(--gold)]/20 group-hover:border-[var(--gold)]/50 transition-colors duration-500 group-hover:scale-110 shadow-lg">
                    <Zap className="text-[var(--gold)]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Full-Funnel Automation</h3>
                  <p className="text-white/70 leading-relaxed text-[15px]">Complex B2B sales cycles require nurturing. We build CRM workflows and AI-driven automation that educate prospects and accelerate pipeline velocity.</p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="bg-[var(--ink-deep)] rounded-3xl p-8 lg:p-10 text-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(232,181,4,0.15)] group relative overflow-hidden border border-[var(--ink-deep)] hover:border-[var(--gold)]/40 fade-up" style={{ animationDelay: '200ms' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[var(--gold)]/20 group-hover:border-[var(--gold)]/50 transition-colors duration-500 group-hover:scale-110 shadow-lg">
                    <Target className="text-[var(--gold)]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Scalable Acquisition</h3>
                  <p className="text-white/70 leading-relaxed text-[15px]">From Enterprise SEO to high-ROAS LinkedIn and Meta campaigns, we deploy omni-channel strategies designed purely for sustainable, scalable MRR and lead volume.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM GRID */}
        <section className="py-24 bg-white relative">
          <div className="container-x">
            <div className="max-w-3xl mb-16 fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--ink-deep)] tracking-tight mb-6">Select Your Industry</h2>
              <p className="text-lg text-[color:var(--muted-foreground)] leading-relaxed">
                Discover how our specialized teams engineer growth systems tailored to the specific demands, compliance requirements, and sales cycles of your market.
              </p>
            </div>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
              {INDUSTRIES.map((ind, i) => (
                <Link 
                  to="/industries/$industryId"
                  params={{ industryId: slugify(ind.label) }}
                  key={ind.label} 
                  className="group flex flex-col items-center justify-center rounded-[20px] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 fade-up text-center h-full min-h-[180px]" 
                  style={{ animationDelay: `${(i % 8) * 50}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--ink-deep)] flex items-center justify-center mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <ind.icon className="text-[var(--gold)]" strokeWidth={1.5} size={24} />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--ink-deep)] leading-tight">{ind.label}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ENTERPRISE SEO CONTENT BLOCK */}
        <section className="py-24 bg-[var(--surface)] border-t border-[var(--border)]">
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <span className="eyebrow">Enterprise SEO & B2B Strategy</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink-deep)] leading-tight mt-4">
                  The Strategic Advantage of Vertical-Specific Growth
                </h2>
                <div className="mt-8 h-px w-full bg-[var(--border)]" />
                <div className="mt-8 mb-10">
                  <p className="text-lg text-[var(--ink-deep)] font-medium italic border-l-4 border-[var(--gold)] pl-6">
                    "A broad marketing message appeals to everyone and converts no one. B2B growth is won through extreme relevance."
                  </p>
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] fade-up">
                  <img 
                    src="/enterprise_strategy.webp" 
                    alt="Team strategy planning" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/40 to-transparent pointer-events-none" />
                </div>
                
                {/* Animated Stats Block to balance height */}
                <div className="mt-8 flex items-center gap-6 bg-white rounded-3xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 fade-up" style={{ animationDelay: '300ms' }}>
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--gold)] opacity-20"></span>
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                      <TrendingUp size={28} />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Avg. Pipeline Velocity</div>
                    <div className="text-4xl font-extrabold text-[var(--ink-deep)]">+340%</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 space-y-8 text-[16px] leading-relaxed text-[color:var(--muted-foreground)]">
                <div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-3">Why General Marketing Fails in Complex Markets</h3>
                  <p>In highly competitive sectors like SaaS, Healthcare, Real Estate, and Financial Services, consumer-level marketing tactics fall flat. B2B decision-makers and enterprise procurement teams conduct extensive research before engaging. Your brand must demonstrate profound industry expertise, regulatory compliance understanding, and a clear ROI narrative. Generic campaigns dilute authority and inflate Customer Acquisition Costs (CAC).</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-3">Data-Driven Account-Based Marketing (ABM)</h3>
                  <p>We build our strategies around your ideal customer profile (ICP). By implementing sophisticated Account-Based Marketing (ABM) strategies, we target key decision-makers across platforms—from LinkedIn to targeted programmatic display. This ensures your marketing budget is spent engaging high-value accounts rather than unqualified traffic, resulting in higher contract values and faster sales cycles.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-3">Technical & Enterprise SEO Customization</h3>
                  <p>Search Engine Optimization is not monolithic. A local service business requires aggressive Local SEO, Google Business Profile (GBP) optimization, and review management. Conversely, an enterprise software provider needs technical SEO for massive site architectures, programmatic pages, and thought-leadership content that ranks for high-intent, long-tail technical queries. We architect SEO frameworks specific to the search intent of your buyers.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-3">The Full-Stack Automation Advantage</h3>
                  <p>Generating a lead is only the first step. By integrating AI-driven CRM automation, we ensure that leads generated from our industry-specific campaigns are nurtured intelligently. Automated email sequences, lead scoring, and pipeline management bridge the gap between marketing and sales, turning raw traffic into predictable, scalable revenue.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Team } from "@/components/site/sections";
import { ShieldCheck, Target, Zap, BarChart3, Globe2, Cpu } from "lucide-react";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NEXDEER | Full-Stack Digital Growth & AI Agency" },
      {
        name: "description",
        content:
          "Meet NEXDEER, a B2B digital growth agency for performance marketing, web development, SEO and AI automation, serving brands in the UAE, KSA and Pakistan.",
      },
      { name: "keywords", content: "digital growth agency, performance marketing, B2B lead generation, SEO experts, custom web development, AI automation agency, UAE marketing agency, KSA digital agency" },
      ...pageMeta("/about"),
    ],
    links: [canonicalLink("/about")],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        {/* PREMIUM HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-[var(--ink-deep)] text-white pt-40 pb-28 md:pt-52 md:pb-40">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[var(--gold)]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
          </div>
          
          <div className="container-x text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide uppercase mb-8 fade-up" style={{ animationDelay: '100ms' }}>
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
              Not Just Another Agency
            </div>
            
            <h1 className="headline-xl mt-5 text-white max-w-5xl mx-auto fade-up leading-tight" style={{ animationDelay: '200ms' }}>
              We Engineer Architectures For <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--gold)]/80">Predictable Market Dominance.</span>
            </h1>
            
            <p className="mt-8 mx-auto max-w-3xl text-xl text-white/70 leading-relaxed fade-up" style={{ animationDelay: '300ms' }}>
              NEXDEER is a full-stack digital growth partner. We replace fragmented freelance efforts with unified, data-driven acquisition engines integrating advanced SEO, high-performance web engineering, and AI automation.
            </p>
          </div>
        </section>

        {/* THE DISCONNECT (Problem Statement) */}
        <section className="section-y bg-white">
          <div className="container-x">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="fade-up" style={{ animationDelay: '100ms' }}>
                <span className="eyebrow">THE INDUSTRY PROBLEM</span>
                <h2 className="headline-lg mt-4 text-[var(--ink-deep)] leading-tight">
                  The Era of Fragmented Marketing is Dead.
                </h2>
                <div className="mt-8 space-y-6 text-[color:var(--muted-foreground)] text-lg leading-relaxed">
                  <p>
                    Most businesses are bleeding revenue because of fragmentation. Your web developer doesn't understand conversion rates. Your SEO writer ignores technical site speed. Your media buyer doesn't look at your backend CRM data.
                  </p>
                  <p>
                    This disconnect results in <strong className="text-[var(--ink-deep)]">high customer acquisition costs, junk leads, and stagnant growth.</strong>
                  </p>
                  <div className="p-6 mt-6 bg-[var(--surface)] border-l-4 border-[var(--gold)] rounded-r-2xl">
                    <p className="text-[var(--ink-deep)] font-medium italic">
                      "We founded NEXDEER to eliminate the gap between traffic, technology, and sales. We don't just run ads; we build the entire pipeline."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 fade-up" style={{ animationDelay: '300ms' }}>
                <div className="space-y-4">
                  <div className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] text-center transform transition-transform hover:-translate-y-2">
                    <div className="text-4xl font-black text-[var(--gold)] mb-2">170+</div>
                    <div className="text-sm font-semibold text-[var(--ink-deep)] uppercase tracking-wider">Brands Scaled</div>
                  </div>
                  <div className="bg-[var(--ink-deep)] p-8 rounded-3xl text-center transform transition-transform hover:-translate-y-2">
                    <div className="text-4xl font-black text-white mb-2">$40M+</div>
                    <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">Client Revenue</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] text-center transform transition-transform hover:-translate-y-2">
                    <div className="text-4xl font-black text-[var(--gold)] mb-2">99%</div>
                    <div className="text-sm font-semibold text-[var(--ink-deep)] uppercase tracking-wider">Retention Rate</div>
                  </div>
                  <div className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] text-center transform transition-transform hover:-translate-y-2">
                    <div className="text-4xl font-black text-[var(--gold)] mb-2">3</div>
                    <div className="text-sm font-semibold text-[var(--ink-deep)] uppercase tracking-wider">Global Offices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR METHODOLOGY */}
        <section className="section-y bg-[var(--surface)] border-y border-[var(--border)]">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
              <span className="eyebrow mx-auto justify-center">THE NEXDEER METHODOLOGY</span>
              <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">
                How We Engineer Predictable ROI
              </h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { 
                  icon: <Target className="w-8 h-8" />, 
                  title: "1. Precision Targeting", 
                  desc: "We utilize advanced data modeling to identify high-intent B2B and B2C cohorts, ensuring your budget is spent only on prospects mathematically likely to convert." 
                },
                { 
                  icon: <Cpu className="w-8 h-8" />, 
                  title: "2. Technical Infrastructure", 
                  desc: "We build blazing-fast Next.js architectures optimized for Core Web Vitals, ensuring seamless user experiences that drastically lower bounce rates." 
                },
                { 
                  icon: <BarChart3 className="w-8 h-8" />, 
                  title: "3. Closed-Loop Analytics", 
                  desc: "By integrating offline CRM data with online advertising platforms via server-side APIs, we train algorithms to hunt for revenue, not just cheap clicks." 
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-[var(--border)] relative group hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="w-16 h-16 rounded-2xl bg-[var(--surface)] text-[var(--gold)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-4">{step.title}</h3>
                  <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="section-y bg-white">
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-12 lg:items-center">
              <div className="lg:col-span-5 fade-up">
                <span className="eyebrow">OUR VALUES</span>
                <h2 className="headline-lg mt-4 text-[var(--ink-deep)] leading-tight">
                  Built on <span className="text-[var(--gold)]">Transparency</span> & Performance.
                </h2>
                <p className="mt-6 text-[color:var(--muted-foreground)] text-lg leading-relaxed">
                  We don't hide behind complex jargon or opaque reporting dashboards. Our relationships are built on radical transparency and mutual financial alignment.
                </p>
              </div>
              
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <ShieldCheck />, title: "Radical Transparency", desc: "Full access to ad accounts, analytics, and source code. No hidden fees or locked ecosystems." },
                  { icon: <Zap />, title: "Engineering-First", desc: "We solve marketing problems with code and automation, not just ad spend." },
                  { icon: <Globe2 />, title: "Global Standards", desc: "Delivering Silicon Valley-grade technical execution to the MENA and APAC regions." },
                  { icon: <Target />, title: "ROI Obsession", desc: "If a strategy doesn't mathematically project a positive return, we don't deploy it." },
                ].map((val, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--gold)]/50 transition-colors duration-300 fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="text-[var(--gold)] mb-5">{val.icon}</div>
                    <h4 className="text-lg font-bold text-[var(--ink-deep)] mb-3">{val.title}</h4>
                    <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INNOVATION HUB (Animated Section) */}
        <section className="section-y bg-[var(--ink-deep)] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>
          <div className="container-x relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-up">
                <span className="eyebrow justify-start text-[var(--gold)]">OUR HEADQUARTERS</span>
                <h2 className="headline-lg mt-4 text-white leading-tight">
                  The NEXDEER <span className="text-[var(--gold)]">Innovation Hub</span>
                </h2>
                <p className="mt-6 text-white/70 text-lg leading-relaxed">
                  We don't just work in an office; we operate from a high-tech innovation hub where data streams and creative ideas collide. Our workspaces are engineered to foster deep work, rapid iteration, and cross-functional collaboration between developers, strategists, and designers.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="flex flex-col border-l-2 border-[var(--gold)] pl-4">
                    <span className="text-3xl font-black text-white">24/7</span>
                    <span className="text-sm text-white/60 uppercase tracking-widest mt-1">Data Monitoring</span>
                  </div>
                  <div className="flex flex-col border-l-2 border-[var(--gold)] pl-4">
                    <span className="text-3xl font-black text-white">AI</span>
                    <span className="text-sm text-white/60 uppercase tracking-widest mt-1">Driven Workflows</span>
                  </div>
                </div>
              </div>
              
              <div className="relative fade-up" style={{ animationDelay: '300ms' }}>
                <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--gold)] to-transparent opacity-30 blur-2xl animate-pulse"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(255,215,0,0.15)] group">
                  <img 
                    src="/innovation_hub.webp" 
                    alt="NEXDEER Innovation Hub" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto aspect-square object-cover transform transition-transform duration-[3s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating animated UI elements over the image */}
                  <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 flex items-center gap-3 animate-bounce shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs font-bold text-white tracking-widest">SYSTEM ONLINE</span>
                  </div>
                  
                  <div className="absolute bottom-8 right-8 bg-[var(--gold)]/20 backdrop-blur-md border border-[var(--gold)]/50 rounded-xl p-3 flex items-center gap-3 animate-pulse shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                    <Zap className="text-[var(--gold)] w-4 h-4" />
                    <span className="text-xs font-bold text-[var(--gold)] tracking-widest">MAX EFFICIENCY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM COMPONENT */}
        <Team />
        
        {/* GLOBAL REACH SECTION */}
        <section className="section-y bg-white border-y border-[var(--border)] overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[var(--gold)]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
              <span className="eyebrow justify-center">Global Footprint</span>
              <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">Scaling Brands Worldwide</h2>
              <p className="mt-6 text-[color:var(--muted-foreground)] text-lg leading-relaxed">
                From our state-of-the-art headquarters in Multan to the bustling markets of UAE, KSA, and beyond, our infrastructure supports enterprise growth across borders.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 fade-up" style={{ animationDelay: '200ms' }}>
              {[
                { region: "Pakistan", desc: "Our Engineering & Innovation Headquarters. The central hub for Next.js development, AI automation, and technical execution.", stats: "100+ Brands Scaled" },
                { region: "UAE & GCC", desc: "Strategic operations focusing on high-ticket B2B lead generation, performance marketing, and enterprise corporate branding.", stats: "Top Tier Market Penetration" },
                { region: "Global Markets", desc: "Operating across North America and Europe, providing world-class SEO, CRO, and digital ecosystems to multinational corporations.", stats: "24/7 Campaign Management" }
              ].map((loc, idx) => (
                <div key={idx} className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] group hover:border-[var(--gold)]/50 transition-all duration-300">
                  <h3 className="text-2xl font-black text-[var(--ink-deep)] mb-3 group-hover:text-[var(--gold)] transition-colors">{loc.region}</h3>
                  <p className="text-[color:var(--muted-foreground)] leading-relaxed mb-6">{loc.desc}</p>
                  <div className="pt-6 border-t border-[var(--border)] font-semibold text-[var(--ink-deep)]">
                    {loc.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE NEXDEER PROMISE */}
        <section className="py-24 bg-[var(--ink-deep)] text-white text-center">
          <div className="container-x max-w-4xl mx-auto fade-up">
            <ShieldCheck className="w-16 h-16 text-[var(--gold)] mx-auto mb-8 animate-pulse" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              "We refuse to deliver average. Every strategy, every line of code, and every campaign is optimized for absolute market dominance."
            </h2>
            <p className="text-xl text-[var(--gold)] font-medium tracking-wide uppercase">The Nexdeer Promise</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { INDUSTRIES } from "@/data/industries";
import { ArrowLeft, CheckCircle2, Target, BarChart3, ArrowRight, Zap } from "lucide-react";
import { FinalCTA } from "@/components/site/sections";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/industries_/$industryId")({
  head: ({ params }) => {
     const industry = INDUSTRIES.find(ind => slugify(ind.label) === params.industryId);
     const name = industry ? industry.label : params.industryId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
     return {
       meta: [
         { title: `${name} Digital Marketing & Growth Agency | NEXDEER` },
         { name: "description", content: `Expert digital marketing, enterprise SEO, and scalable lead generation strategies built specifically for the ${name} industry.` },
         { name: "keywords", content: `${name} marketing, ${name} SEO, ${name} lead generation, B2B marketing for ${name}, digital agency for ${name}` },
         ...pageMeta(`/industries/${params.industryId}`),
       ],
       links: [canonicalLink(`/industries/${params.industryId}`)],
     };
  },
  component: IndustryDetail,
});

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function IndustryDetail() {
  const { industryId } = useParams({ from: "/industries_/$industryId" });
  const industry = INDUSTRIES.find(ind => slugify(ind.label) === industryId);

  if (!industry) {
    return (
      <div className="min-h-screen bg-white text-[var(--ink-deep)] flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center py-32 text-center">
          <h1 className="headline-lg">Industry Not Found</h1>
          <Link to="/industries" className="mt-8 btn-gold">Back to Industries</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-[var(--ink-deep)] text-white pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink-deep)] via-[var(--ink-deep)]/95 to-[var(--ink-deep)]" />
          <img src={industry.image} alt={industry.label} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.15] mix-blend-luminosity blur-sm scale-105" />
          
          <div className="container-x">
            <Link to="/industries" className="inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:text-white transition-colors mb-10 fade-up">
              <ArrowLeft size={16} /> Back to all industries
            </Link>
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 fade-up" style={{ animationDelay: '100ms' }}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold tracking-widest text-[var(--gold)] uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                  Industry-Specific Solutions
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Digital Growth Strategies for <br/> <span className="text-[var(--gold)]">{industry.label}</span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                  {industry.desc} We build tailored marketing, SEO, and automation funnels designed to lower your acquisition costs and scale revenue in the {industry.label} sector.
                </p>
                <div className="mt-10">
                  <Link to="/contact" className="btn-gold group">
                    Get Your Growth Strategy <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-4 fade-up hidden lg:block" style={{ animationDelay: '200ms' }}>
                 <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                   <img src={industry.logo} alt="" className="w-20 h-20 object-contain brightness-0 invert opacity-90 mb-8" 
                    onError={(e) => { 
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e8b504' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'%3E%3C/path%3E%3Cpolyline points='9 22 9 12 15 12 15 22'%3E%3C/polyline%3E%3C/svg%3E"; 
                    }} 
                   />
                   <h3 className="text-2xl font-bold text-white mb-4">Why {industry.label}?</h3>
                   <p className="text-sm text-white/70 leading-relaxed mb-6">General marketing doesn't work here. You need deep vertical expertise to capture intent, navigate compliance, and convert high-value leads.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT OVERVIEW */}
        <section className="py-24 bg-white">
          <div className="container-x">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="fade-up">
                 <span className="eyebrow">The NEXDEER Advantage</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink-deep)] mt-4 mb-6">
                   How We Scale <span className="text-[var(--gold)]">{industry.label}</span> Businesses
                 </h2>
                 <p className="text-lg text-[color:var(--muted-foreground)] leading-relaxed mb-6">
                   In the {industry.label} industry, the customer journey is highly specific. Whether it's a long B2B sales cycle or a high-volume B2C conversion engine, we engineer growth systems that align perfectly with how your buyers search, evaluate, and purchase.
                 </p>
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-[var(--gold)] shrink-0 mt-1" />
                     <p className="text-[var(--ink-deep)] font-medium">Hyper-targeted Account Based Marketing (ABM) & Lead Generation</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-[var(--gold)] shrink-0 mt-1" />
                     <p className="text-[var(--ink-deep)] font-medium">Enterprise & Local SEO strategies to capture high-intent search traffic</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-[var(--gold)] shrink-0 mt-1" />
                     <p className="text-[var(--ink-deep)] font-medium">CRM integration & AI-driven pipeline automation</p>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-[var(--gold)] shrink-0 mt-1" />
                     <p className="text-[var(--ink-deep)] font-medium">High-converting Web Design tailored to {industry.label} audiences</p>
                   </li>
                 </ul>
               </div>
               <div className="relative fade-up" style={{ animationDelay: '200ms' }}>
                 <div className="absolute inset-0 bg-[var(--gold)]/10 translate-x-4 translate-y-4 rounded-3xl -z-10" />
                 <img src={industry.image} alt={`${industry.label} marketing strategies`} className="w-full aspect-[4/3] object-cover rounded-3xl shadow-xl" />
               </div>
             </div>
          </div>
        </section>

        {/* METHODOLOGY SPECIFIC TO INDUSTRY */}
        <section className="py-24 bg-[var(--surface)] border-y border-[var(--border)]">
          <div className="container-x">
             <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
               <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink-deep)]">Our Process for {industry.label}</h2>
               <p className="mt-4 text-lg text-[color:var(--muted-foreground)]">We don't guess. We rely on data, intent analysis, and scalable systems.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--border)] hover:border-[var(--gold)]/50 transition-all hover:-translate-y-2 fade-up">
                  <div className="w-14 h-14 bg-[var(--ink-deep)] rounded-xl flex items-center justify-center mb-6 shadow-md text-[var(--gold)]">
                    <BarChart3 size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-3">1. Market Intelligence</h3>
                  <p className="text-[color:var(--muted-foreground)] leading-relaxed">We analyze competitor positioning, search intent, and customer pain points specific to {industry.label} to craft an irresistible offer.</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--border)] hover:border-[var(--gold)]/50 transition-all hover:-translate-y-2 fade-up" style={{ animationDelay: '100ms' }}>
                  <div className="w-14 h-14 bg-[var(--ink-deep)] rounded-xl flex items-center justify-center mb-6 shadow-md text-[var(--gold)]">
                    <Target size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-3">2. Traffic Acquisition</h3>
                  <p className="text-[color:var(--muted-foreground)] leading-relaxed">Through technical SEO, PPC, and targeted social media campaigns, we drive highly qualified traffic that is actively seeking your solutions.</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--border)] hover:border-[var(--gold)]/50 transition-all hover:-translate-y-2 fade-up" style={{ animationDelay: '200ms' }}>
                  <div className="w-14 h-14 bg-[var(--ink-deep)] rounded-xl flex items-center justify-center mb-6 shadow-md text-[var(--gold)]">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-3">3. Conversion & Automation</h3>
                  <p className="text-[color:var(--muted-foreground)] leading-relaxed">We build high-converting landing pages and CRM automations that instantly engage leads and accelerate your sales velocity.</p>
                </div>
             </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SERVICES_DATA } from "@/data/services";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { FinalCTA } from "@/components/site/sections";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services_/$serviceId")({
  head: ({ params }) => {
     const service = SERVICES_DATA.find(s => slugify(s.label) === params.serviceId);
     const name = service ? service.label : params.serviceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
     const keywords = service ? service.seo.keywords : `${name} services, digital marketing, B2B growth`;
     
     return {
       meta: [
         { title: `${name} | NEXDEER Growth Agency` },
         { name: "description", content: service ? service.description : `Expert ${name} services built to scale your enterprise revenue.` },
         { name: "keywords", content: keywords },
         ...pageMeta(`/services/${params.serviceId}`),
       ],
       links: [canonicalLink(`/services/${params.serviceId}`)],
     };
  },
  component: ServiceDetail,
});

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function ServiceDetail() {
  const { serviceId } = useParams({ from: "/services_/$serviceId" });
  const service = SERVICES_DATA.find(s => slugify(s.label) === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-[var(--ink-deep)] flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center py-32 text-center">
          <h1 className="headline-lg">Service Not Found</h1>
          <Link to="/services" className="mt-8 btn-gold">Back to Services</Link>
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
        <section className="relative isolate overflow-hidden bg-[var(--ink-deep)] text-white pt-32 pb-24 md:pt-48 md:pb-36">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink-deep)]/70 via-[var(--ink-deep)]/80 to-[var(--ink-deep)]" />
          <img src={service.heroImage} alt={`${service.title} Background`} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40 mix-blend-overlay scale-105" />
          
          <div className="container-x relative z-10 flex flex-col items-center text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[var(--gold)] hover:bg-white/10 transition-colors mb-8 text-xs font-semibold uppercase tracking-widest fade-up">
              <ArrowLeft size={16} /> All Services
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6 fade-up" style={{ animationDelay: '100ms' }}>
                <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[var(--gold)] shadow-2xl">
                  <service.icon size={40} strokeWidth={1.5} />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] fade-up" style={{ animationDelay: '200ms' }}>
                {service.title.split(' ').slice(0, -1).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-yellow-200">{service.title.split(' ').slice(-1)}</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl mx-auto fade-up" style={{ animationDelay: '300ms' }}>
                {service.description}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 fade-up" style={{ animationDelay: '400ms' }}>
                <Link to="/contact" className="btn-gold group text-base px-8 py-4">
                  Book a Strategy Call <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="section-y bg-white">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
              <span className="eyebrow justify-center">Core Capabilities</span>
              <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">How We Deliver Results</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {service.features.map((feature, i) => (
                <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 fade-up" style={{ animationDelay: `${(i % 3) * 100}ms` }}>
                  <div className="w-14 h-14 rounded-2xl bg-[var(--ink-deep)] flex items-center justify-center text-[var(--gold)] mb-6 shadow-md">
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-4">{feature.title}</h3>
                  <p className="text-[color:var(--muted-foreground)] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS & METRICS */}
        <section className="py-24 bg-[var(--ink-deep)] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--gold)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="container-x relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-up">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">The ROI of Excellence</h2>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  We don't sell deliverables; we engineer predictable revenue systems. By focusing purely on data, conversions, and scalable architectures, we guarantee tangible business impact.
                </p>
                <ul className="space-y-4">
                  {['Enterprise-Grade Architecture', 'Data-Backed Strategic Decisions', 'Transparent ROI Reporting'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                      <CheckCircle2 className="text-[var(--gold)] shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6 fade-up" style={{ animationDelay: '200ms' }}>
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-[2rem] p-8 text-center hover:bg-white/10 hover:border-[var(--gold)]/30 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-black text-[var(--gold)] mb-2 tracking-tighter">
                      {benefit.metric}
                    </div>
                    <div className="text-sm font-bold uppercase tracking-wider text-white/60">
                      {benefit.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DEEP DIVE CONTENT SECTIONS */}
        {service.deepDive && service.deepDive.length > 0 && (
          <section className="section-y bg-white overflow-hidden">
            <div className="container-x space-y-24 md:space-y-32">
              {service.deepDive.map((section, idx) => (
                <div key={idx} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className={`fade-up ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink-deep)] leading-tight mb-6">
                      {section.title}
                    </h2>
                    <div className="h-1 w-20 bg-[var(--gold)] mb-6 rounded-full" />
                    <p className="text-lg text-[color:var(--muted-foreground)] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                  <div className={`relative fade-up ${idx % 2 === 1 ? 'lg:order-1' : ''}`} style={{ animationDelay: '200ms' }}>
                    <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--gold)]/20 to-transparent blur-2xl opacity-50" />
                    <div className="relative rounded-[2rem] overflow-hidden border border-[var(--border)] shadow-xl aspect-[4/3] group">
                      <img src={section.image} alt={section.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-[var(--ink-deep)]/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* METHODOLOGY / PROCESS */}
        {service.process && service.process.length > 0 && (
          <section className="section-y bg-[var(--surface)] border-t border-[var(--border)]">
            <div className="container-x">
              <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
                <span className="eyebrow justify-center">Our Methodology</span>
                <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">The Execution Framework</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((p, idx) => (
                  <div key={idx} className="relative bg-white border border-[var(--border)] rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
                    <div className="text-6xl font-black text-[var(--gold)]/10 absolute top-4 right-6 pointer-events-none">
                      {p.step}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-4 mt-6">{p.title}</h3>
                      <p className="text-[color:var(--muted-foreground)] text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {/* TECH STACK / TOOLS */}
        <section className="py-20 bg-white border-t border-[var(--border)] overflow-hidden">
          <div className="container-x text-center fade-up">
            <span className="eyebrow justify-center">Enterprise Technology</span>
            <h2 className="headline-md mt-4 text-[var(--ink-deep)]">Powered by Industry-Leading Platforms</h2>
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['Google Analytics', 'HubSpot', 'Salesforce', 'Next.js', 'Meta Ads', 'LinkedIn Ads', 'Ahrefs', 'OpenAI'].map((tech) => (
                <div key={tech} className="text-xl md:text-2xl font-black tracking-tight hover:text-[var(--gold)] transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-y bg-[var(--surface)] border-t border-[var(--border)]">
          <div className="container-x max-w-4xl">
            <div className="text-center mb-16 fade-up">
              <span className="eyebrow justify-center">Got Questions?</span>
              <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4 fade-up" style={{ animationDelay: '100ms' }}>
              {[
                { q: `How long does it take to see results from your ${service.label} services?`, a: "While timelines vary based on the specific service and your current baseline, our enterprise strategies are designed to show early traction within the first 30-45 days, with compounding, massive ROI generally scaling at the 90-day mark." },
                { q: `Do you offer custom pricing for ${service.label}?`, a: "Yes. We don't believe in one-size-fits-all packages. Every enterprise is unique. We conduct a thorough discovery process to understand your specific bottlenecks and then architect a custom solution and pricing model that guarantees positive ROI." },
                { q: `Who will be managing our account?`, a: "You will be assigned a dedicated Growth Strategist and an execution team consisting of senior specialists. We do not outsource our core competencies; everything is handled by our highly vetted in-house experts." },
                { q: "How do we get started?", a: "The first step is to book a Strategy Call. We'll analyze your current digital footprint, discuss your revenue goals, and map out a high-level execution plan on the call itself." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-lg text-[var(--ink-deep)]">
                    {faq.q}
                    <span className="text-[var(--gold)] group-open:rotate-180 transition-transform duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-[color:var(--muted-foreground)] leading-relaxed border-t border-[var(--border)] mt-2">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <ServiceFinalCTA />
        <ServiceContactStrip />
      </main>
      <Footer />
    </div>
  );
}

function ServiceFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] text-white">
      <div className="absolute inset-0 -z-10 grid-noise opacity-90" />
      <div className="container-x section-y text-center">
        <span className="eyebrow justify-center">Let's build your growth system</span>
        <h2 className="headline-xl mt-5 text-white max-w-4xl mx-auto">
          Ready to <span className="text-[var(--gold)]">Scale Faster?</span>
        </h2>
        <p className="mt-7 mx-auto max-w-2xl text-white/75 text-lg leading-relaxed">
          Whether you need more leads, a better website, stronger visibility, or smarter automation,
          NEXDEER can help you build a growth system designed for long-term success.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn-gold group">
            <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">Get Your Custom Growth Plan <ArrowRight size={16} /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, MapPin } from "lucide-react";

function ServiceContactStrip() {
  return (
    <section className="bg-[#FAFAFA] text-[var(--ink-deep)] border-y border-[var(--border)]">
      <div className="container-x py-14 grid gap-8 md:grid-cols-3 md:items-center">
        {[
          { icon: Mail, label: "Email us", value: "hello@nexdeer.com" },
          { icon: Phone, label: "Call us", value: <><span className="block">+44 7537 171506</span><span className="block mt-0.5">+92 318 6662360</span><span className="block mt-0.5">+92 306 2999700 (HR)</span></> },
          { icon: MapPin, label: "Our Office", value: "Bosan road Multan" },
        ].map(({ icon: Icon, label, value }, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--gold)] text-[var(--ink-deep)]"><Icon size={18} /></span>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--ink-deep)]/60 font-bold">{label}</div>
              <div className="mt-1 text-base font-semibold">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FinalCTA, ContactStrip, RevealSection } from "@/components/site/sections";
import { ArrowRight, CheckCircle2, MapPin, Code2, Search, Megaphone, Palette, Video, Users, Target, PhoneCall } from "lucide-react";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | NEXDEER Growth Agency" },
      { name: "description", content: "Join NEXDEER. We are hiring top-tier growth strategists, developers, and designers. Remote and onsite positions available." },
      ...pageMeta("/careers"),
    ],
    links: [canonicalLink("/careers")],
  }),
  component: CareersPage,
});

const POSITIONS = [
  { title: "Web Development Intern", type: "Internship", location: "Multan, Pakistan (Onsite)", department: "Engineering", icon: Code2 },
  { title: "WordPress Development Intern", type: "Internship", location: "Multan, Pakistan (Onsite)", department: "Engineering", icon: Code2 },
  { title: "SEO Intern", type: "Internship", location: "Multan, Pakistan (Onsite)", department: "Marketing", icon: Search },
  { title: "Social Media Marketing Intern", type: "Internship", location: "Multan, Pakistan (Onsite)", department: "Marketing", icon: Megaphone },
  { title: "Graphic Designing Intern", type: "Internship", location: "Multan, Pakistan (Onsite)", department: "Design", icon: Palette },
  { title: "Video Editing Intern", type: "Internship", location: "Multan, Pakistan (Onsite)", department: "Media", icon: Video },
  { title: "HR Intern", type: "Internship", location: "Multan, Pakistan (Onsite)", department: "Human Resources", icon: Users },
  { title: "Sales Executive Intern", type: "Internship", location: "Multan, Pakistan (Onsite)", department: "Sales", icon: Target },
  { title: "Cold Calling Intern", type: "Internship", location: "Multan, Pakistan (Onsite)", department: "Sales", icon: PhoneCall },
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-[var(--ink-deep)] text-white pt-36 pb-24 md:pt-48 md:pb-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink-deep)]/80 via-[var(--ink-deep)]/90 to-[var(--ink-deep)]" />
          <img 
            src="/images/unsplash/photo-1522071820081-009f0129c71c_w1200_q70.jpg" 
            alt="NEXDEER Culture" 
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30 mix-blend-overlay scale-105" 
          />
          
          <div className="container-x relative z-10 text-center max-w-4xl mx-auto fade-up">
            <span className="eyebrow mx-auto justify-center fade-up" style={{ animationDelay: '100ms' }}>Join The Engine</span>
            <h1 className="headline-xl mt-5 text-white fade-up" style={{ animationDelay: '200ms' }}>
              Build The Future of <span className="text-[var(--gold)]">Digital Growth</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/80 leading-relaxed font-light fade-up" style={{ animationDelay: '300ms' }}>
              We are a team of relentless problem solvers, engineers, and creatives building scalable revenue systems for enterprise clients globally. If you demand excellence, you belong here.
            </p>
          </div>
        </section>

        {/* WHY JOIN US */}
        <RevealSection>
        <section className="section-y bg-white">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-16" data-reveal="up">
              <span className="eyebrow justify-center">Life at NEXDEER</span>
              <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">Why build with us?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "In-House Excellence", desc: "Work from our state-of-the-art office in Multan. We believe in the power of face-to-face collaboration and team synergy." },
                { title: "Elite Talent Density", desc: "You will be surrounded by the smartest marketers, designers, and engineers in the industry." },
                { title: "Accelerated Growth", desc: "We push our team hard. You will learn more here in 6 months than 2 years anywhere else." }
              ].map((feature, i) => (
                <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300" data-reveal="up" style={{ '--reveal-delay': `${(i % 3) * 100}` } as React.CSSProperties}>
                  <div className="w-14 h-14 rounded-2xl bg-[var(--ink-deep)] flex items-center justify-center text-[var(--gold)] mb-6 shadow-md">
                    <CheckCircle2 size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-4">{feature.title}</h3>
                  <p className="text-[color:var(--muted-foreground)] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </RevealSection>

        {/* OPEN POSITIONS */}
        <RevealSection>
        <section className="section-y bg-[var(--surface)] border-t border-[var(--border)]">
          <div className="container-x max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" data-reveal="up">
              <div>
                <span className="eyebrow">Open Roles</span>
                <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">Open Internships</h2>
              </div>
              <p className="text-[color:var(--muted-foreground)] max-w-md">
                Don't see a perfect fit? Send your resume to <a href="mailto:hr@nexdeer.com" className="text-[var(--gold)] font-semibold hover:underline">hr@nexdeer.com</a> or contact HR at <span className="font-semibold text-[var(--ink-deep)]">+92 306 2999700</span>.
              </p>
            </div>
            
            <div className="space-y-4">
              {POSITIONS.map((job, idx) => (
                <div key={idx} className="group bg-white border border-[var(--border)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[var(--gold)]/50 hover:shadow-md transition-all" data-reveal="up" style={{ '--reveal-delay': `${idx * 50}` } as React.CSSProperties}>
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex w-12 h-12 rounded-full bg-[var(--surface)] items-center justify-center text-[var(--ink-deep)] shrink-0">
                      <job.icon size={20} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)]">{job.department}</span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--ink-deep)]/5 text-[var(--ink-deep)]">{job.type}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--ink-deep)] group-hover:text-[var(--gold)] transition-colors">{job.title}</h3>
                      <div className="flex items-center gap-2 mt-3 text-sm text-[color:var(--muted-foreground)]">
                        <MapPin size={14} /> {job.location}
                      </div>
                    </div>
                  </div>
                  <a href={`https://wa.me/923062999700?text=Hi%20HR,%20I%20want%20to%20apply%20for%20the%20${encodeURIComponent(job.title)}%20position`} target="_blank" rel="noopener noreferrer" className="btn-ghost whitespace-nowrap self-start md:self-center">
                    Contact HR <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        </RevealSection>

        <FinalCTA />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}

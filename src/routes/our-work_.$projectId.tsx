import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/sections";
import { ALL_PORTFOLIO_PROJECTS } from "@/components/site/sections";
import { ArrowLeft, CheckCircle2, Calendar, Target, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/our-work_/$projectId")({
  head: ({ params }) => {
    const project = ALL_PORTFOLIO_PROJECTS.find(p => p.id === params.projectId);
    const path = `/our-work/${params.projectId}`;
    if (!project) {
      return { meta: [{ title: "Project Not Found | NEXDEER" }, { name: "robots", content: "noindex" }] };
    }
    const services = project.tag.replace(/\s*·\s*Case Study$/i, "").replace(/\s*·\s*/g, " & ");
    return {
      meta: [
        { title: `${project.title}: ${services} Project | NEXDEER` },
        {
          name: "description",
          content: `How NEXDEER delivered ${services} for ${project.title}: the challenge, our strategy, and the results. See the full project.`,
        },
        { property: "og:title", content: `${project.title} | NEXDEER Case Study` },
        ...pageMeta(path),
      ],
      links: [canonicalLink(path)],
    };
  },
  component: PortfolioDetail,
});

function PortfolioDetail() {
  const { projectId } = useParams({ from: "/our-work_/$projectId" });
  const project = ALL_PORTFOLIO_PROJECTS.find(p => p.id === projectId);

  if (projectId === "home-improvement") {
    return (
      <div className="min-h-screen bg-white text-[var(--ink-deep)]">
        <Header />
        <main>
          {/* HERO SECTION */}
          <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--ink-deep)] text-white">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink-deep)] via-[var(--ink-deep)]/95 to-[var(--ink-deep)]" />
            <img src="/projects/image-1.jpeg" alt="Home Improvement" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 blur-sm" />
            
            <div className="container-x">
              <Link to="/our-work" className="inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:text-white transition-colors mb-10 fade-up">
                <ArrowLeft size={16} /> Back to all projects
              </Link>
              
              <div className="max-w-4xl fade-up" style={{ animationDelay: '100ms' }}>
                <div className="inline-block rounded-full bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-6 border border-[var(--gold)]/20">
                  Local SEO Case Study
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                  Home Improvement
                </h1>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 mt-12 fade-up" style={{ animationDelay: '200ms' }}>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Site Age</p>
                  <p className="font-semibold text-lg">3 Months</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Domain</p>
                  <p className="font-semibold text-lg">Fresh .ca 🇨🇦</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Niche</p>
                  <p className="font-semibold text-lg">Home Improvement</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Location</p>
                  <p className="font-semibold text-lg">Canada, Alberta 🇨🇦</p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT SECTION */}
          <section className="section-y bg-[var(--surface)]">
            <div className="container-x">
              <div className="grid lg:grid-cols-12 gap-16">
                {/* LEFT COLUMN: Main content */}
                <div className="lg:col-span-8">
                  <div className="w-full aspect-video overflow-hidden rounded-3xl mb-16 shadow-2xl border border-[var(--border)] fade-up" style={{ animationDelay: '300ms' }}>
                    <img src="/projects/image-1.jpeg" alt="Home Improvement Overview" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="space-y-16">
                    {/* RESULTS SECTION */}
                    <div className="fade-up">
                      <h2 className="headline-md mb-6">Current Results</h2>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-[var(--gold)] shrink-0 mt-1" />
                          <p className="text-lg text-[color:var(--muted-foreground)]">
                            <strong className="text-[var(--ink-deep)]">First qualified lead within 10 days</strong> of launch.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-[var(--gold)] shrink-0 mt-1" />
                          <p className="text-lg text-[color:var(--muted-foreground)]">
                            <strong className="text-[var(--ink-deep)]">Ranking in Google AI Overviews</strong> for multiple local money keywords within the first few weeks.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-[var(--gold)] shrink-0 mt-1" />
                          <p className="text-lg text-[color:var(--muted-foreground)]">
                            <strong className="text-[var(--ink-deep)]">18.4K impressions & 95 organic clicks</strong> (Google Search Console chart).
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-[var(--gold)] shrink-0 mt-1" />
                          <p className="text-lg text-[color:var(--muted-foreground)]">
                            <strong className="text-[var(--ink-deep)]">Phone calls coming in</strong> via automated SignalWire tracking.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-[var(--gold)] shrink-0 mt-1" />
                          <p className="text-lg text-[color:var(--muted-foreground)]">
                            <strong className="text-[var(--ink-deep)]">Yelp lead generation active</strong>, despite Yelp being created solely for citations/entity building.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* AI HANDLING SECTION */}
                    <div className="fade-up">
                      <h2 className="headline-md mb-6">The Best Part? Everything Was Handled By AI.</h2>
                      <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)] mb-6">
                        We developed a fully automated and AI-integrated workflow to research, build, and run the entire site's local search presence.
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {[
                          "Website built with AI",
                          "Hosted on Cloudflare Workers",
                          "Content researched & written with Claude",
                          "Topics sourced from Reddit, competitors & AI",
                          <span>Structured for topical authority & <span className="whitespace-nowrap">E-E-A-T</span></span>,
                          "NLP and proper internal linking optimized"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-bold">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[var(--ink-deep)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* OFF PAGE SECTION */}
                    <div className="fade-up">
                      <h2 className="headline-md mb-6">Off-Page Optimization</h2>
                      <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)] mb-6">
                        To match the solid on-page strategy, we deployed a highly structured off-page framework focusing on domain trust and local entities.
                      </p>
                      <div className="grid sm:grid-cols-3 gap-6">
                        {[
                          { title: "Relevant Backlinks", desc: "Niche-specific link acquisition to build domain authority." },
                          { title: "Local Citations", desc: "Accurate local directory distribution to lock in geographical trust." },
                          { title: "Entity Building", desc: "Aligning brand details across search engine databases." }
                        ].map((col, idx) => (
                          <div key={idx} className="rounded-2xl border border-[var(--border)] bg-white p-5 hover:border-[var(--gold)]/50 transition-colors duration-300">
                            <h4 className="font-bold text-[var(--ink-deep)] text-base mb-2">{col.title}</h4>
                            <p className="text-sm text-[color:var(--muted-foreground)]">{col.desc}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)] mt-8 font-semibold italic">
                        No aged domain. No huge team. Just a solid strategy and consistent execution.
                      </p>
                    </div>

                    {/* SCREENSHOTS ATTACHED */}
                    <div className="fade-up">
                      <h2 className="headline-md mb-8">Performance Proof</h2>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <div className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg aspect-video bg-white">
                            <img src="/projects/image-3.jpeg" alt="Google Search Console Performance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                          <p className="text-sm font-semibold text-center text-[color:var(--muted-foreground)]">Google Search Console: 18.4K Impressions & 95 Clicks</p>
                        </div>
                        <div className="space-y-3">
                          <div className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg aspect-video bg-white">
                            <img src="/projects/image-2.jpeg" alt="SignalWire Phone Calls Log" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                          <p className="text-sm font-semibold text-center text-[color:var(--muted-foreground)]">SignalWire Call Logging & Inbound Lead Automation</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                
                {/* RIGHT COLUMN: Results sidebar */}
                <div className="lg:col-span-4 fade-up" style={{ animationDelay: '500ms' }}>
                  <div className="sticky top-32 rounded-3xl bg-[var(--ink-deep)] p-8 text-white shadow-xl">
                    <h3 className="text-2xl font-bold mb-8 text-[var(--gold)]">Key Highlights</h3>
                    
                    <div className="space-y-8">
                      <div className="border-b border-white/10 pb-6">
                        <div className="text-5xl font-bold text-white mb-2">10 Days</div>
                        <div className="text-sm uppercase tracking-widest text-white/70">To First Qualified Lead</div>
                      </div>
                      <div className="border-b border-white/10 pb-6">
                        <div className="text-5xl font-bold text-white mb-2">18.4K</div>
                        <div className="text-sm uppercase tracking-widest text-white/70">Search Impressions</div>
                      </div>
                      <div className="border-b border-white/10 pb-6">
                        <div className="text-5xl font-bold text-white mb-2">95</div>
                        <div className="text-sm uppercase tracking-widest text-white/70">Organic Clicks</div>
                      </div>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-white/10">
                      <p className="text-sm text-white/80 mb-6 font-medium">Want to achieve similar growth for your home improvement or local business using AI?</p>
                      <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold w-full flex justify-center py-3 bg-[var(--gold)] text-black hover:bg-white hover:text-black transition-colors">
                        <span className="flex items-center gap-2 font-semibold">Book a Strategy Call <ArrowRight size={16} /></span>
                      </a>
                    </div>
                  </div>
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

  if (projectId === "local-seo") {
    return (
      <div className="min-h-screen bg-white text-[var(--ink-deep)]">
        <Header />
        <main>
          {/* HERO SECTION */}
          <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--ink-deep)] text-white">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink-deep)] via-[var(--ink-deep)]/95 to-[var(--ink-deep)]" />
            <img src="/projects/image-5.jpeg" alt="Local SEO" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 blur-sm" />
            
            <div className="container-x">
              <Link to="/our-work" className="inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:text-white transition-colors mb-10 fade-up">
                <ArrowLeft size={16} /> Back to all projects
              </Link>
              
              <div className="max-w-4xl fade-up" style={{ animationDelay: '100ms' }}>
                <div className="inline-block rounded-full bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-6 border border-[var(--gold)]/20">
                  Local SEO Case Study
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                  Local SEO Case Study: From Ranking Struggles to Dominating the Map Pack
                </h1>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 mt-12 fade-up" style={{ animationDelay: '200ms' }}>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Timeline</p>
                  <p className="font-semibold text-lg">3 Weeks</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Location</p>
                  <p className="font-semibold text-lg">Stockholm Area 🇸🇪</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Campaign Focus</p>
                  <p className="font-semibold text-lg">Google Map Pack</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Target Market</p>
                  <p className="font-semibold text-lg">Local Consumers</p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT SECTION */}
          <section className="section-y bg-[var(--surface)]">
            <div className="container-x">
              <div className="grid lg:grid-cols-12 gap-16">
                {/* LEFT COLUMN: Main content */}
                <div className="lg:col-span-8">
                  <div className="w-full aspect-video overflow-hidden rounded-3xl mb-16 shadow-2xl border border-[var(--border)] fade-up" style={{ animationDelay: '300ms' }}>
                    <img src="/projects/image-5.jpeg" alt="Local SEO Dominance" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="space-y-16">
                    {/* CHALLENGE SECTION */}
                    <div className="fade-up">
                      <h2 className="headline-md mb-6">The Challenge</h2>
                      <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)] mb-6">
                        The client approached us with poor visibility on Google Maps. Their Google Business Profile (GMB) had limited optimization, weak service coverage, and lacked strong local SEO foundations. As a result, the business was barely showing in the top 10 search results outside its immediate area.
                      </p>
                      
                      <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                        <h4 className="font-bold text-[var(--ink-deep)] text-base mb-4">The "Before" Snapshot (August 09, 2025)</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                          {[
                            { val: "13.40", label: "Average Rank" },
                            { val: "1%", label: "High Rank (Top 3)" },
                            { val: "45%", label: "Mid Rank (4-10)" },
                            { val: "28%", label: "Low Rank (11-20)" },
                            { val: "26%", label: "Out of Map Pack" }
                          ].map((item, idx) => (
                            <div key={idx} className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                              <div className="text-2xl font-bold text-[var(--ink-deep)]">{item.val}</div>
                              <div className="text-[10px] uppercase font-semibold text-slate-400 mt-1">{item.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* STRATEGY SECTION */}
                    <div className="fade-up">
                      <h2 className="headline-md mb-6">The Strategy</h2>
                      <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)] mb-8">
                        To transform the client’s local search presence, we implemented a comprehensive local SEO strategy:
                      </p>
                      
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-[var(--gold)] rounded-full" /> Google Business Profile Optimization
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-3 pl-4">
                            {[
                              "Fully optimized GMB listing with targeted keywords",
                              "Added 30+ services with SEO-optimized descriptions",
                              "Chose 3 secondary categories to expand relevancy",
                              "Added detailed FAQs to improve engagement & CTR",
                              "Defined service areas within a 6-mile radius",
                              "Started regular GMB posts for activity signals"
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-[color:var(--muted-foreground)]">
                                <CheckCircle2 className="text-[var(--gold)] shrink-0 w-4 h-4 mt-0.5" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-[var(--gold)] rounded-full" /> Website SEO Enhancements
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-3 pl-4">
                            {[
                              "Built 30+ service pages aligned with local SEO structure",
                              "Created 7 location pages targeting nearby cities/areas",
                              "Implemented local business schema markup for rich search features"
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-[color:var(--muted-foreground)]">
                                <CheckCircle2 className="text-[var(--gold)] shrink-0 w-4 h-4 mt-0.5" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-[var(--ink-deep)] mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-[var(--gold)] rounded-full" /> Content & Engagement
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-3 pl-4">
                            {[
                              "Ensured keyword-rich, localized descriptions across site & GMB",
                              "Regular updates and content posting to keep GMB fresh"
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-[color:var(--muted-foreground)]">
                                <CheckCircle2 className="text-[var(--gold)] shrink-0 w-4 h-4 mt-0.5" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* RESULTS SECTION */}
                    <div className="fade-up">
                      <h2 className="headline-md mb-6">The Results</h2>
                      <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)] mb-6">
                        After just 3 weeks of implementation, the results were dramatic.
                      </p>
                      
                      <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm mb-8">
                        <h4 className="font-bold text-[var(--ink-deep)] text-base mb-4">The "After" Snapshot (August 31, 2025)</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {[
                            { val: "13.40 → 8.20", label: "Average Rank" },
                            { val: "1% → 31%", label: "High Rank (Top 3)" },
                            { val: "26% → 4%", label: "Out of Map Pack" },
                            { val: "Green Grid", label: "Map Expansion" }
                          ].map((item, idx) => (
                            <div key={idx} className="text-center p-3 rounded-xl bg-green-50/50 border border-green-100/50">
                              <div className="text-2xl font-bold text-green-700">{item.val}</div>
                              <div className="text-[10px] uppercase font-semibold text-green-600 mt-1">{item.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4 text-lg text-[color:var(--muted-foreground)] leading-relaxed">
                        <p>
                          <strong className="text-[var(--ink-deep)]">Stockholm Domination:</strong> The client went from being barely visible outside their area to dominating across large parts of Stockholm.
                        </p>
                        <p>
                          <strong className="text-[var(--ink-deep)]">High-Intent Rankings:</strong> The business is now appearing in top 3 local search results for high-intent keywords across multiple neighborhoods.
                        </p>
                        <p className="italic">
                          This case study highlights the power of a well-structured local SEO strategy combining GMB optimization, schema markup, content creation, and localized landing pages. Within just 3 weeks, the business achieved massive improvements in visibility and is now positioned strongly for lead generation and sustained local dominance.
                        </p>
                      </div>
                    </div>

                    {/* PERFORMANCE PROOF */}
                    <div className="fade-up">
                      <h2 className="headline-md mb-8">Performance Proof</h2>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <div className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg aspect-video bg-white">
                            <img src="/projects/image-4.jpeg" alt="August 09 Ranking Map Grid" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                          <p className="text-sm font-semibold text-center text-[color:var(--muted-foreground)]">Before Map Grid: Poor Rankings Outside Area (Aug 09)</p>
                        </div>
                        <div className="space-y-3">
                          <div className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg aspect-video bg-white">
                            <img src="/projects/image-5.jpeg" alt="August 31 Ranking Map Grid" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                          <p className="text-sm font-semibold text-center text-[color:var(--muted-foreground)]">After Map Grid: Massive Green Zone Dominance (Aug 31)</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                
                {/* RIGHT COLUMN: Results sidebar */}
                <div className="lg:col-span-4 fade-up" style={{ animationDelay: '500ms' }}>
                  <div className="sticky top-32 rounded-3xl bg-[var(--ink-deep)] p-8 text-white shadow-xl">
                    <h3 className="text-2xl font-bold mb-8 text-[var(--gold)]">Campaign Highlights</h3>
                    
                    <div className="space-y-8">
                      <div className="border-b border-white/10 pb-6">
                        <div className="text-5xl font-bold text-white mb-2">3 Weeks</div>
                        <div className="text-sm uppercase tracking-widest text-white/70">Optimization Duration</div>
                      </div>
                      <div className="border-b border-white/10 pb-6">
                        <div className="text-5xl font-bold text-white mb-2">31%</div>
                        <div className="text-sm uppercase tracking-widest text-white/70">Top 3 Map Pack Rank</div>
                      </div>
                      <div className="border-b border-white/10 pb-6">
                        <div className="text-5xl font-bold text-white mb-2">-22%</div>
                        <div className="text-sm uppercase tracking-widest text-white/70">Out of Maps Drop</div>
                      </div>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-white/10">
                      <p className="text-sm text-white/80 mb-6 font-medium">Want to scale your local Map Pack rankings and attract more inbound customers?</p>
                      <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold w-full flex justify-center py-3 bg-[var(--gold)] text-black hover:bg-white hover:text-black transition-colors">
                        <span className="flex items-center gap-2 font-semibold">Book a Strategy Call <ArrowRight size={16} /></span>
                      </a>
                    </div>
                  </div>
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

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-[var(--ink-deep)] flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center py-32 text-center">
          <h1 className="headline-lg">Project Not Found</h1>
          <p className="mt-4 text-[color:var(--muted-foreground)]">The project you are looking for does not exist.</p>
          <Link to="/our-work" className="mt-8 btn-gold">
            Back to Our Work
          </Link>
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
        <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--ink-deep)] text-white">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink-deep)] via-[var(--ink-deep)]/95 to-[var(--ink-deep)]" />
          <img src={project.img} alt={project.title} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 blur-sm" />
          
          <div className="container-x">
            <Link to="/our-work" className="inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:text-white transition-colors mb-10 fade-up">
              <ArrowLeft size={16} /> Back to all projects
            </Link>
            
            <div className="max-w-4xl fade-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-block rounded-full bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-6 border border-[var(--gold)]/20">
                {project.tag}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                {project.title}
              </h1>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 mt-12 fade-up" style={{ animationDelay: '200ms' }}>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Timeline</p>
                <p className="font-semibold text-lg">{project.timeline}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Core Services</p>
                <p className="font-semibold text-lg">{project.services[0]} & {project.services[1]}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Platform</p>
                <p className="font-semibold text-lg">Web, Mobile</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Industry</p>
                <p className="font-semibold text-lg">{project.tag.split("·")[0].trim()}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="section-y bg-[var(--surface)]">
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* LEFT COLUMN: Main content */}
              <div className="lg:col-span-8">
                <div className="w-full aspect-video overflow-hidden rounded-3xl mb-16 shadow-2xl border border-[var(--border)] fade-up" style={{ animationDelay: '300ms' }}>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="space-y-16">
                  <div className="fade-up">
                    <h2 className="headline-md mb-6">The Challenge</h2>
                    <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)]">
                      {project.challenge}
                      <br /><br />
                      The leadership team realized that continuing with the status quo would mean losing significant market share to more agile, digitally-native competitors. They needed a holistic transformation across their entire customer journey.
                    </p>
                  </div>
                  
                  <div className="fade-up">
                    <h2 className="headline-md mb-6">Our Solution</h2>
                    <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)]">
                      {project.solution}
                      <br /><br />
                      We deployed a multi-disciplinary team of strategists, designers, and growth engineers. By breaking down silos between marketing, sales, and technology, we created a seamless pipeline designed exclusively for high-intent conversions.
                    </p>
                    
                    <ul className="mt-8 space-y-4">
                      {project.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                          <CheckCircle2 className="text-[var(--gold)]" /> {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* RIGHT COLUMN: Results sidebar */}
              <div className="lg:col-span-4 fade-up" style={{ animationDelay: '500ms' }}>
                <div className="sticky top-32 rounded-3xl bg-[var(--ink-deep)] p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-8 text-[var(--gold)]">Key Results</h3>
                  
                  <div className="space-y-8">
                    {project.results.map((res, idx) => (
                      <div key={idx} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                        <div className="text-5xl font-bold text-white mb-2">{res.metric}</div>
                        <div className="text-sm uppercase tracking-widest text-white/70">{res.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {project.externalUrl && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold w-full flex justify-center py-3 bg-[var(--gold)] text-black hover:bg-white hover:text-black transition-colors"
                      >
                        <span className="flex items-center gap-2 font-semibold">Visit Live Website <ArrowUpRight size={16} /></span>
                      </a>
                    </div>
                  )}
                  
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <p className="text-sm text-white/80 mb-6">Want to achieve similar growth for your business?</p>
                    <Link to="/contact" className="btn-gold w-full flex justify-center">
                      <span className="flex items-center gap-2">Book a Strategy Call <ArrowRight size={16} /></span>
                    </Link>
                  </div>
                </div>
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

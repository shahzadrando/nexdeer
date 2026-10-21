import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { canonicalLink, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | NEXDEER Growth Agency" },
      { name: "description", content: "Contact NEXDEER by WhatsApp, phone or email to plan your marketing, website, SEO or AI automation project. Get a custom growth plan from our team." },
      ...pageMeta("/contact"),
    ],
    links: [canonicalLink("/contact")],
  }),
  component: Contact,
});

import { useState } from "react";
import { toast } from "sonner";
import { submitFluentForm } from "../lib/fluent-forms";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await submitFluentForm({ name, email, message });
      if (response.success) {
        toast.success(response.message || "Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(response.message || "Failed to send message.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden grid-noise text-white pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img src="/images/unsplash/photo-1516387938699-a93567ec168e_w2000_q80.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/95 via-[var(--ink-deep)]/85 to-[var(--ink-deep)]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
          </div>
          <div className="container-x text-center fade-up">
            <span className="eyebrow mx-auto justify-center fade-up" style={{ animationDelay: '100ms' }}>GET IN TOUCH</span>
            <h1 className="headline-xl mt-5 text-white max-w-4xl mx-auto fade-up" style={{ animationDelay: '200ms' }}>
              Ready to <span className="text-[var(--gold)]">Scale Faster?</span>
            </h1>
            <p className="mt-7 mx-auto max-w-2xl text-lg text-white/75 leading-relaxed fade-up" style={{ animationDelay: '300ms' }}>
              Book a strategy call or message us on WhatsApp. We'll audit your current growth system and identify the highest-leverage opportunities.
            </p>
          </div>
        </section>

        <section className="section-y bg-[var(--surface)]">
          <div className="container-x max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-white p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.03)] fade-up" style={{ animationDelay: '100ms' }}>
                <h3 className="headline-md text-[var(--ink-deep)] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group cursor-default transition-all duration-300 hover:-translate-y-1">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(232,181,4,0.4)] group-hover:scale-110">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--ink-deep)] transition-colors duration-300 group-hover:text-[var(--gold)]">WhatsApp / Call</h4>
                      <div className="mt-1 space-y-1.5">
                        <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="block text-sm text-[color:var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--gold)]">+44 7537 171506 (Global)</a>
                        <a href="https://wa.me/923186662360" target="_blank" rel="noopener noreferrer" className="block text-sm text-[color:var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--gold)]">+92 318 6662360 (Pakistan)</a>
                        <a href="https://wa.me/923062999700" target="_blank" rel="noopener noreferrer" className="block text-sm text-[color:var(--muted-foreground)] transition-colors duration-300 hover:text-[var(--gold)]">+92 306 2999700 (HR)</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-default transition-all duration-300 hover:-translate-y-1">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(232,181,4,0.4)] group-hover:scale-110">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--ink-deep)] transition-colors duration-300 group-hover:text-[var(--gold)]">Email</h4>
                      <a href="mailto:hello@nexdeer.com" className="mt-1 block text-sm text-[color:var(--muted-foreground)] transition-colors duration-300">hello@nexdeer.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-default transition-all duration-300 hover:-translate-y-1">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(232,181,4,0.4)] group-hover:scale-110">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--ink-deep)] transition-colors duration-300 group-hover:text-[var(--gold)]">Our Office</h4>
                      <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">Bosan Road, Multan, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.03)] fade-up relative overflow-hidden group" style={{ animationDelay: '300ms' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <h3 className="headline-md text-[var(--ink-deep)] mb-6 relative z-10">Send us a message</h3>
                <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-deep)] mb-1.5 ml-1">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[15px] outline-none transition-all duration-300 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] focus:bg-white hover:border-[var(--gold)]/40" placeholder="John Doe" required disabled={loading} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-deep)] mb-1.5 ml-1">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[15px] outline-none transition-all duration-300 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] focus:bg-white hover:border-[var(--gold)]/40" placeholder="john@company.com" required disabled={loading} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-deep)] mb-1.5 ml-1">Message</label>
                    <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[15px] outline-none transition-all duration-300 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] focus:bg-white hover:border-[var(--gold)]/40 resize-none" placeholder="How can we help you scale?" required disabled={loading}></textarea>
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center group overflow-hidden relative" disabled={loading}>
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

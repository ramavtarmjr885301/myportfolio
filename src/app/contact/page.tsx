import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Contact — Ram Avtar" };

export default function ContactPage() {
  const links = [
    { icon: "✉", label: profile.email, href: `mailto:${profile.email}` },
    { icon: "📞", label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: "⚙", label: "GitHub", href: profile.github },
    { icon: "in", label: "LinkedIn", href: profile.linkedin },
  ];
  return (
    <section className="page">
      <div className="page-inner contact-inner">
        <PageHeader label="Let's Connect">
          Get in <span className="accent">Touch</span>
        </PageHeader>
        <p className="contact-sub">
          Open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
        </p>
        <div className="contact-links">
          {links.map((l) => (
            <a className="contact-link" key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <span>{l.icon}</span> {l.label}
            </a>
          ))}
        </div>
        <p className="contact-loc">📍 {profile.location}</p>
      </div>
    </section>
  );
}

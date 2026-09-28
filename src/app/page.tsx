import Link from "next/link";
import Avatar from "@/components/Avatar";
import { profile, stats } from "@/lib/data";

export default function HomePage() {
  return (
    <section className="page">
      <div className="page-inner hero">
        <div className="fade-up">
          <div className="hero-tag">{profile.headline}</div>
          <h1>
            {profile.firstName}
            <br />
            <span className="hero-name-accent">{profile.lastName}</span>
          </h1>
          <p className="hero-desc">{profile.summary}</p>
          <div className="hero-cta">
            <Link href="/projects" className="btn-primary">View Projects</Link>
            <Link href="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
        <div className="hero-right fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="avatar-frame">
            <div className="avatar-ring"><div className="avatar-dot" /></div>
            <Avatar />
            <div className="stats-grid">
              {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <span className="stat-num">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

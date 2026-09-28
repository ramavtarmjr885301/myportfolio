import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { experience } from "@/lib/data";

export const metadata: Metadata = { title: "Experience — Ram Avtar" };

export default function ExperiencePage() {
  return (
    <section className="page">
      <div className="page-inner">
        <PageHeader label="Career History">
          Work <span className="accent">Experience</span>
        </PageHeader>
        <div className="timeline">
          {experience.map((e, i) => (
            <div className="timeline-item fade-up" key={e.role + e.date} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="timeline-dot" />
              <div className="timeline-date">{e.date}</div>
              <div className="timeline-role">{e.role}</div>
              <div className="timeline-company">{e.company}</div>
              <span className="badge">{e.badge}</span>
              <ul className="points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {e.highlights && (
                <div className="highlight-row">
                  {e.highlights.map((h) => (
                    <a className="highlight-link" key={h.name} href={h.href} target="_blank" rel="noopener noreferrer">
                      <strong>{h.name} ↗</strong>
                      <span>{h.note}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

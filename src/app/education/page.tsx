import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { certifications, education, languages } from "@/lib/data";

export const metadata: Metadata = { title: "Education — Ram Avtar" };

export default function EducationPage() {
  return (
    <section className="page">
      <div className="page-inner">
        <PageHeader label="Academic Background">
          Education &amp; <span className="accent">Certifications</span>
        </PageHeader>
        <div className="edu-grid">
          {education.map((e, i) => (
            <div className="card fade-up" key={e.level} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="edu-level">{e.level}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-inst">{e.institute}</div>
              <div className="edu-meta">
                <span className="edu-year">{e.year}</span>
                <span className="edu-score">{e.score}</span>
              </div>
            </div>
          ))}
          {certifications.map((c, i) => (
            <div className="card fade-up" key={c.name} style={{ animationDelay: `${(i + 3) * 0.08}s` }}>
              <div className="edu-level">Certification</div>
              <div className="edu-degree">{c.name}</div>
              <div className="edu-inst">{c.issuer}</div>
              <div className="edu-meta">
                <span className="edu-year">Certified</span>
                <span className="edu-score">✓</span>
              </div>
            </div>
          ))}
        </div>
        <div className="two-col">
          <div className="card">
            <div className="edu-level">Languages</div>
            <ul className="points">
              {languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

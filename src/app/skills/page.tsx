import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { skillGroups } from "@/lib/data";

export const metadata: Metadata = { title: "Skills — Ram Avtar" };

export default function SkillsPage() {
  return (
    <section className="page">
      <div className="page-inner">
        <PageHeader label="What I Work With">
          Technical <span className="accent">Skills</span>
        </PageHeader>
        <div className="skill-groups">
          {skillGroups.map((g, i) => (
            <div className="card fade-up" key={g.title} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="skill-head">
                <div className="skill-icon">{g.icon}</div>
                <div className="skill-title">{g.title}</div>
              </div>
              <div className="chips">
                {g.items.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

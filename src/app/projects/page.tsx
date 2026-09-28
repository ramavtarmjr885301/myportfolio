import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { categoryMeta, projects, type ProjectCategory } from "@/lib/data";

export const metadata: Metadata = { title: "Projects — Ram Avtar" };

const order: ProjectCategory[] = ["ai", "freelance", "company", "personal"];

export default function ProjectsPage() {
  return (
    <section className="page">
      <div className="page-inner">
        <PageHeader label="What I've Built">
          Projects &amp; <span className="accent">Live Products</span>
        </PageHeader>
        {order.map((cat) => (
          <div key={cat}>
            <div className="section-divider">
              {categoryMeta[cat].title} — {categoryMeta[cat].blurb}
            </div>
            <div className="projects-grid">
              {projects
                .filter((p) => p.category === cat)
                .map((p, i) => (
                  <ProjectCard key={p.id} project={p} delay={i * 0.08} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

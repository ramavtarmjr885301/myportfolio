import type { Project } from "@/lib/data";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const live = project.status.toLowerCase().startsWith("live");
  return (
    <article className="card project-card fade-up" style={{ animationDelay: `${delay}s` }}>
      <div className="project-emoji">{project.emoji}</div>
      <div className="project-title">{project.title}</div>
      <div className="status">
        {live && <span className="dot" />}
        {project.status}
      </div>
      <p className="project-desc">{project.description}</p>
      <ul className="points">
        {project.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="chips">
        {project.tags.map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>
      {project.link && (
        <a className="project-link" href={project.link.href} target="_blank" rel="noopener noreferrer">
          ↗ {project.link.label}
        </a>
      )}
    </article>
  );
}

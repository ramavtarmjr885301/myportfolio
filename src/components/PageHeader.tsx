import type { ReactNode } from "react";

export default function PageHeader({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="fade-up">
      <div className="section-label">{label}</div>
      <h1 className="title">{children}</h1>
    </div>
  );
}

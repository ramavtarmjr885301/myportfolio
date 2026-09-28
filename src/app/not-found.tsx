import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page">
      <div className="page-inner contact-inner">
        <div className="section-label" style={{ justifyContent: "center" }}>404</div>
        <h1 className="title">Page <span className="accent">not found</span></h1>
        <Link href="/" className="btn-primary">Back home</Link>
      </div>
    </section>
  );
}

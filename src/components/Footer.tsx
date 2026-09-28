import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <span className="accent">{profile.name}</span>
      </p>
      <p>{profile.role} · Greater Noida, UP</p>
    </footer>
  );
}

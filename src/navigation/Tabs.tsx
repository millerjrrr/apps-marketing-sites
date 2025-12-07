import { NavLink } from "react-router-dom";

export default function Tabs() {
  const base = "px-4 py-3 font-medium text-alt_CONTRAST";
  const active = "text-[var(--primary)]  border-b-2 border-[var(--primary)]";

  return (
    <nav className="flex gap-6 bg-[var(--tertiary)] p-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
      >
        About
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
      >
        Settings
      </NavLink>
    </nav>
  );
}

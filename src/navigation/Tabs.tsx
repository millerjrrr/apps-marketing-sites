import { NavLink } from "react-router-dom";

export default function Tabs() {
  const base = "px-4 py-3 font-medium text-alt_contrast";
  const active = "text-primary border-b-2 border-primary";

  return (
    <nav className="flex gap-6 p-4 bg-tertiary">
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

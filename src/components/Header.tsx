import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className="header">
        <div
          className={`inner-container flex-row justify-between ${
            show ? "py-1 opacity-60" : ""
          } md:opacity-100`}
        >
          <img
            src="app-specific/griddier/icon.png"
            className={`site-icon rounded-[] bg-[var(--primary)] md:bg-transparent ${
              show ? "opacity-100" : "md:opacity-0"
            }`}
          />
          <div className="flex translate-x-[8px] flex-row rounded-l-full border-2 border-r-0 border-[var(--tertiary)] bg-[var(--primary)] pl-2 md:border-0 md:bg-transparent">
            <a href="/" className="app-link p-2">
              HOME
            </a>
            <a href="mobile-app" className="app-link p-2">
              WEB APP
            </a>
            <a href="/contact" className="app-link p-2">
              CONTACT
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

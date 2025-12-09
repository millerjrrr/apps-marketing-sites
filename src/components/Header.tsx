import { useEffect, useState } from "react";
import { getSiteContent, getSiteKey } from "../getSiteContent";
import type { PageName } from "../assets/interface";

const HeaderLink: React.FC<{ pageName: PageName }> = ({ pageName }) => {
  const url =
    pageName === "home"
      ? "/"
      : pageName === "web-app"
        ? "/mobile-app"
        : `/${pageName}`;

  return (
    <a href={url} className="app-link p-2">
      {pageName.replace("-", " ").toUpperCase()}
    </a>
  );
};

export default function Header() {
  const [show, setShow] = useState(false);
  const siteKey = getSiteKey();
  let { pageNames } = getSiteContent();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (window.innerWidth < 500 && pageNames.length > 3)
    pageNames = pageNames.filter((name) => name !== "contact");

  return (
    <div>
      <header className="header">
        <div
          className={`inner-container flex-row justify-between ${
            show ? "py-1 opacity-60" : ""
          } md:opacity-100`}
        >
          <img
            src={`app-specific/${siteKey}/icon.png`}
            className={`site-icon rounded-[] bg-[var(--primary)] md:bg-transparent ${
              show ? "opacity-100" : "md:opacity-0"
            }`}
          />
          <div className="flex translate-x-[8px] flex-row rounded-l-full border-2 border-r-0 border-[var(--tertiary)] bg-[var(--primary)] pl-2 md:border-0 md:bg-transparent">
            {pageNames.map((pageName) => (
              <HeaderLink key={pageName} pageName={pageName} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

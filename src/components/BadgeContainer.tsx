import { getSiteContent } from "../getSiteContent";

const BadgeContainer: React.FC<{ left?: boolean }> = ({ left }) => {
  const site = getSiteContent();

  if (!site || !site.appMarketingSite) return null;

  const siteAny = site as any;
  const { appStore, playStore } = siteAny;

  return (
    <div className={`badge-container w-full ${left ? "lg:align-left" : ""}`}>
      <a
        href={appStore}
        className={"app-link"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/app-store.svg"
          className={`badge ${left ? "pl-0 lg:pl-0" : ""}`}
        />
      </a>
      <a
        href={playStore}
        className="app-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="images/play-store.svg" className="badge" />
      </a>
    </div>
  );
};

export default BadgeContainer;

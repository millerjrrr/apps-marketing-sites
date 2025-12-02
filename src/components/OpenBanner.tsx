import RPhone from "./RPhone";

const OpenBanner = () => {
  return (
    <div className="opening-banner">
      <div className="opening-banner-block">
        <h1 className="animate-pulseScale inline-block">GRIDDIER</h1>

        <p>Take your preflop game to the next level!</p>
        <div className="badge-container">
          <img src="images/app-store.svg" className="badge" />
          <img src="images/play-store.svg" className="badge" />
        </div>
      </div>
      <RPhone />
    </div>
  );
};

export default OpenBanner;

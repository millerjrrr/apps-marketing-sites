import { getSiteKey } from "../getSiteContent";

const Tools = () => {
  const site = getSiteKey();

  return (
    site === "griddier" && (
      <div className="flex w-full flex-1 items-center justify-center p-5 py-20">
        <div
          className="inner-container flex-col items-center rounded-[30px] bg-[color-mix(in_srgb,var(--secondary)_60%,transparent)]"
          style={{ boxShadow: "0 0 10px 0 var(--contrast-c)" }}
        >
          <h1 className="p-10">Tools</h1>

          <div className="personal-detail app-link">
            <a href="/tools/flop-straight-counter-game" target="_blank">
              Flop Straight Counter Training Game
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default Tools;

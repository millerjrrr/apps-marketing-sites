import { getSiteContent } from "../../../getSiteContent";

const TakeTheTestButton: React.FC<{ left?: boolean }> = ({ left }) => {
  const site = getSiteContent();

  if (!site || site.appMarketingSite) return null;

  return (
    <div className={`w-full ${left ? "lg:text-left" : "text-center"}`}>
      <p className="my-3 text-lg font-medium">
        Take this 2min test to find out!
      </p>
      <a
        href="test"
        className="my-6 inline-flex items-center justify-center rounded-xl bg-[var(--contrast-c)] px-8 py-4 text-lg font-semibold text-[var(--primary-c)] shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
      >
        Take the Test!
      </a>
    </div>
  );
};

export default TakeTheTestButton;

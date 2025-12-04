import InformationBanner from "../components/HomePageComponents/InformationBanner";
import OpenBanner from "../components/HomePageComponents/OpenBanner";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center">
      <OpenBanner />
      <InformationBanner />
    </div>
  );
}

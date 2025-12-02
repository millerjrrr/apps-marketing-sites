import siteContent from "../assets/siteContent";

export default function Footer() {
  const { aboutUs, address } = siteContent.footer;
  return (
    <footer className="w-full bg-PRIMARY flex flex:col justify-center">
      <div className="inner-container flex flex-col md:flex-row">
        <div className="block text-left px-5 pt-5">
          <h2 className="pb-5">About Us</h2>
          <p className="text-WHITE">{aboutUs}</p>
        </div>
        <div className="block text-left px-5 pt-5">
          <h2 className="pb-5">Useful Links</h2>
          <p className=" app-link">Terms & Conditions</p>
          <p className=" app-link">Privacy Policy</p>
        </div>
        <div className="block text-left px-5 pt-5 whitespace-pre-line">
          <h2 className="pb-5">Address</h2>
          <p className="text-WHITE">{address}</p>
        </div>
      </div>
    </footer>
  );
}

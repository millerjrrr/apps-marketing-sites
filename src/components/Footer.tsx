import siteContent from "../assets/siteContent";

export default function Footer() {
  const { aboutUs, address } = siteContent.footer;
  return (
    <footer className="flex:col flex w-full justify-center bg-PRIMARY">
      <div className="inner-container flex flex-col md:flex-row">
        <div className="footer-block px-4 pt-3 text-left">
          <h2 className="pb-3">About Us</h2>
          <p className="text-WHITE">{aboutUs}</p>
        </div>
        <div className="footer-block px-4 pt-3 text-left">
          <h2 className="pb-3">Useful Links</h2>
          <a href="/terms-and-conditions" className="app-link p-2">
            Terms & Conditions
          </a>
          <a href="/privacy-policy" className="app-link p-2">
            Privacy Policy
          </a>
        </div>
        <div className="footer-block whitespace-pre-line px-4 pt-3 text-left">
          <h2 className="pb-3">Address</h2>
          <p className="text-WHITE">{address}</p>
        </div>
      </div>
    </footer>
  );
}

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WebApp from "./pages/WebApp";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Terms&Conditions";

export default function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/web-app" element={<WebApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

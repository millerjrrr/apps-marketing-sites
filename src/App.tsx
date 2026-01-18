import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WebApp from "./pages/WebApp";
import PolicyPage from "./pages/PolicyPage";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";
import { useCanonical } from "./hooks/useCanonical";
import ParallaxOverlay from "./components/ParallaxOverlay";
import { getSiteKey } from "./getSiteContent";

export default function App() {
  useCanonical();
  const key = getSiteKey();

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {key !== "banana-cards" && <ParallaxOverlay />}
      <Header />
      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mobile-app" element={<WebApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/privacy-policy"
            element={<PolicyPage type="privacyPolicy" />}
          />
          <Route
            path="/terms-and-conditions"
            element={<PolicyPage type="termsAndConditions" />}
          />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

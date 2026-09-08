import Preloader from "./components/Preloader";
import Overlays from "./components/Overlays";
import MagicCursor from "./components/MagicCursor";
import BackToTop from "./components/BackToTop";
import OffcanvasMenu from "./components/OffcanvasMenu";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import useTemplateScripts from "./hooks/useTemplateScripts";

function App() {
  useTemplateScripts();

  return (
    <>
      <Preloader />
      <Overlays />
      <MagicCursor />
      <BackToTop />
      <OffcanvasMenu />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Banner />
          <About />
          <Marquee />
          <Services />
          <Portfolio />
          <Features />
          <Testimonials />
          <Brands />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
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
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import WhyWork from "./components/WhyWork";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
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
          <Experience />
          <Skills />
          <WhyWork />
          <CtaBanner />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
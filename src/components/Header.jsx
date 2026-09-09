import { useEffect } from "react";

function scrollToY(y) {
  const smoother = window.ScrollSmoother && window.ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(y, true);
  } else {
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function Header() {
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      if (id === "home") {
        scrollToY(0);
        return;
      }
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      scrollToY(y);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header
      className="header header-two header-three tw-transition-all tw-z-99 position-relative"
    >
      <div className="container tw-container-1800-px">
        <nav className="d-flex align-items-center justify-content-around position-relative">
          <div className="header-three-logo tw-rounded-md">
            <a href="/" className="link">
              <img
                src="/assets/images/logo/logo.png"
                alt="Logo"
                className="max-w-56-px"
              />
            </a>
          </div>

          <div className="header-menu d-none d-lg-block">
            <div className="main-menu">
              <nav className="tw-main-menu-content">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#experience">Experience</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="header-right d-flex align-items-center tw-gap-705">
            <div className="header-three-menu d-lg-none">
              <button
                className="tw-offcanvas-open-btn tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center tw-transition-3 tw-rounded-md"
              >
                <span>
                  <img
                    className="tw-transition-3"
                    src="/assets/images/icons/header-three-toggle.svg"
                    alt="toggle"
                  />
                </span>
              </button>
            </div>

            <div className="header-three-button d-none d-md-block">
              <a
                className="tw-hover-btn bg-black text-white fw-bold tw-py-3 tw-px-8 tw-text-sm d-inline-block hover-text-white text-uppercase tw-rounded-md"
                href="/assets/images/thumbs/Muhammad_Umar_Saif_MERN.pdf"
                download="Muhammad_Umar_Saif_CV.pdf"
              >
                download cv
                <span className="tw-hover-btn-circle-dot bg-main-two-600"></span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
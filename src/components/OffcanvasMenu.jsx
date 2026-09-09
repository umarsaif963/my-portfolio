import { useEffect } from "react";

function scrollToY(y) {
  const smoother = window.ScrollSmoother && window.ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(y, true);
  } else {
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function closeOffcanvas() {
  document.querySelector(".tw-offcanvas-2-area")?.classList.remove("opened");
  document.querySelector(".body-overlay")?.classList.remove("apply");
}

function OffcanvasMenu() {
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest(".tw-offcanvas-2-left a[href^='#']");
      if (!anchor) return;
      e.preventDefault();
      const id = anchor.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      closeOffcanvas();
      if (id === "home") {
        setTimeout(() => scrollToY(0), 300);
        return;
      }
      if (el) {
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          scrollToY(y);
        }, 300);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="tw-offcanvas-2-area p-relative">
      <div className="tw-offcanvas-2-bg is-left left-box"></div>
      <div className="tw-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
      <div className="tw-offcanvas-2-wrapper">
        <div className="tw-offcanvas-2-left left-box">
          <div className="tw-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
            <div className="twoffcanvas__logo">
              <a className="logo-1" href="/">
                <img src="/assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
            <div className="tw-offcanvas-2-close d-md-none text-end">
              <button className="tw-offcanvas-2-close-btn">
                <span className="text">
                  <span className="text-white">close</span>
                </span>
                <span className="d-inline-block">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32.621"
                        height="1.00918"
                        transform="matrix(0.704882 0.709325 -0.704882 0.709325 1.0061 0)"
                        fill="currentcolor"
                      />
                      <rect
                        width="32.621"
                        height="1.00918"
                        transform="matrix(0.704882 -0.709325 0.704882 0.709325 0 23.2842)"
                        fill="currentcolor"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="tw-main-menu-mobile menu-hover-active counter-row">
            <nav></nav>
          </div>
        </div>
        <div className="tw-offcanvas-2-right right-box d-none d-md-block p-relative">
          <div className="tw-offcanvas-2-close text-end">
            <button className="tw-offcanvas-2-close-btn">
              <span className="text">
                <span>close</span>
              </span>
              <span className="d-inline-block">
                <span>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.80859 9.80762L28.1934 28.1924"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.80859 28.1924L28.1934 9.80761"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
          <div className="tw-offcanvas-2-right-inner d-flex flex-column justify-content-between h-100">
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffcanvasMenu;
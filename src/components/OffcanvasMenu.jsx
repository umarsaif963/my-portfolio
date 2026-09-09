function OffcanvasMenu() {
  return (
    <div className="tw-offcanvas-2-area p-relative">
      <div className="tw-offcanvas-2-bg is-left left-box"></div>
      <div className="tw-offcanvas-2-wrapper">
        <div className="tw-offcanvas-2-left left-box">
          <div className="tw-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
            <div className="twoffcanvas__logo">
              <a className="logo-1" href="/">
                <img src="/assets/images/logo/logo.png" alt="logo" style={{ maxWidth: "60px" }} />
              </a>
            </div>
            <div className="tw-offcanvas-2-close text-end">
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
      </div>
    </div>
  );
}

export default OffcanvasMenu;
function Footer() {
  return (
    <section className="footer-three-area tw-pb-10 position-relative z-1">
      <div className="container tw-container-1800-px">
        <div className="footer-three-border tw-mb-10">
          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-three-middile d-flex align-items-center justify-content-between">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <h4 className="tw-text-2xl text-white tw-mb-2">Quick Links</h4>
                    <ul className="d-flex tw-gap-2 flex-wrap">
                      <li>
                        <a className="tw-text-lg text-white" href="/">
                          Home,
                        </a>
                      </li>
                      <li>
                        <a className="tw-text-lg text-white" href="/">
                          About Me,
                        </a>
                      </li>
                      <li>
                        <a className="tw-text-lg text-white" href="/">
                          Portfolio,
                        </a>
                      </li>
                      <li>
                        <a className="tw-text-lg text-white" href="/">
                          Service,
                        </a>
                      </li>
                      <li>
                        <a className="tw-text-lg text-white" href="/">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <a
                      className="footer-three-back-to-top tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 text-white tw-text-3xl rounded-circle"
                      href="#"
                    >
                      <i className="ph ph-arrow-up"></i>
                    </a>
                  </div>
                  <div
                    className="text-lg-end"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    <h4 className="tw-text-2xl text-white tw-mb-2">
                      Third Angle Digital
                    </h4>
                    <p className="tw-text-lg text-white">
                      © Muhammad Umar Saif. All right reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container tw-container-1800-px">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-three-bottom">
                <h6 className="footer-three-bottom-title text-white">
                  Muhammad Umar Saif
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="position-absolute top-0 start-0 z-n1"
          src="/assets/images/shapes/footer-three-bg-shape.png"
          alt="shape"
        />
      </div>
    </section>
  );
}

export default Footer;
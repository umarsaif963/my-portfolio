function Contact() {
  return (
    <section id="contact" className="footer-three-area pt-120 position-relative z-1">
      <div className="container tw-container-1800-px">
        <div className="row justify-content-between pb-120">
          <div className="col-xl-5 col-lg-6">
            <div
              className="footer-three-top-left tw-me-25"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="tw-mb-9">
                <h2 className="tw-text-15 text-white tw-char-animation">
                  Let&rsquo;s create something meaningful
                </h2>
              </div>
              <div className="tw-mb-10 d-flex flex-column tw-gap-5">
                <div>
                  <span className="footer-three-contact-label d-block text-white tw-text-sm fw-medium text-uppercase tw-mb-2">
                    Email
                  </span>
                  <a
                    className="tw-text-2xl fw-medium text-main-600 hover-underline hover-text-white"
                    href="mailto:umarsaif.dev@gmail.com"
                  >
                    umarsaif.dev@gmail.com
                  </a>
                </div>
                <div>
                  <span className="footer-three-contact-label d-block text-white tw-text-sm fw-medium text-uppercase tw-mb-2">
                    Phone
                  </span>
                  <a
                    className="tw-text-2xl fw-medium text-main-600 hover-underline hover-text-white"
                    href="tel:+923091416454"
                  >
                    +92 309 1416454
                  </a>
                </div>
              </div>
              <div className="footer-three-top-info tw-p-705 tw-rounded-lg d-flex tw-gap-6">
                <div className="footer-three-top-thumb tw-w-160-px">
                    <img
                      className="tw-rounded-lg w-100"
                      src="/assets/images/thumbs/about-three-thumb.png"
                      alt="thumb"
                    />
                  </div>
                  <div className="footer-three-top-content d-flex justify-content-between flex-column">
                    <div>
                      <h3 className="tw-text-xl text-white tw-mb-2">
                        Muhammad Umar Saif
                      </h3>
                      <p className="text-white">Full-Stack Developer</p>
                  </div>
                  <div className="footer-three-social">
                    <ul className="d-flex align-items-center tw-gap-1">
                      <li>
                        <a
                          className="tw-w-11 tw-h-101 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-heading hover-bg-main-600 hover-text-heading"
                          href="https://github.com/umarsaif963"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ph ph-github-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw-w-11 tw-h-101 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-heading hover-bg-main-600 hover-text-heading"
                          href="https://www.linkedin.com/in/muhammad-umar-saif-dev"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ph ph-linkedin-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw-w-11 tw-h-101 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-heading hover-bg-main-600 hover-text-heading"
                          href="mailto:umarsaif.dev@gmail.com"
                        >
                          <i className="ph ph-envelope-simple"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="footer-three-form"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <form action="#">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="position-relative tw-mb-7">
                      <input
                        type="text"
                        className="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="position-relative tw-mb-7">
                      <input
                        type="email"
                        className="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="position-relative tw-mb-7">
                      <textarea
                        className="form-control bg-transparent shadow-none tw-h-196-px tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contact-button">
                      <button
                        type="submit"
                        className="tw-hover-btn bg-main-600 text-heading tw-text-xl fw-bold tw-py-4 tw-px-10 d-inline-flex justify-content-center w-100 hover-text-heading hover-bg-white tw-transition-3 tw-rounded-lg"
                      >
                        Submit Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
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

export default Contact;
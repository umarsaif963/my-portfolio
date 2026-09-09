function CtaBanner() {
  return (
    <section
      id="cta"
      className="cta-three-area position-relative z-1 overflow-hidden"
    >
      <div className="container tw-container-1800-px">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="cta-three-content">
              <span
                className="cta-three-label text-uppercase fw-semibold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Let&rsquo;s Work Together
              </span>
              <h2
                className="cta-three-title font-heading fw-semibold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Have a project in mind?
              </h2>
              <p
                className="cta-three-paragraph"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                Let&rsquo;s turn your ideas into modern, scalable, and
                impactful web experiences.
              </p>
              <div
                className="cta-three-btn-group d-flex flex-wrap tw-gap-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <a
                  className="cta-three-btn cta-three-btn-solid"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=umarsaif.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start a Project
                </a>
                <a className="cta-three-btn cta-three-btn-outline" href="#contact">
                  Let&rsquo;s Talk
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div
              className="cta-three-visual"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <span className="cta-three-build">BUILD</span>
              <span className="cta-three-code cta-three-float-1">
                {["</>"]}
              </span>
              <span className="cta-three-brackets cta-three-float-2">
                {"{ }"}
              </span>
              <span className="cta-three-block cta-three-float-3">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
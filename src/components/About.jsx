function About() {
  return (
    <section id="about" className="about-three-area py-60 position-relative z-1">
      <div className="container">
        <div className="about-three-top position-relative z-1">
          <div className="row justify-content-center tw-mb-14">
            <div className="col-xl-9">
              <div className="text-center">
                <h2 className="about-three-title text-heading tw-text-10 tw-itm-title tw-itm-anim">
                  I build modern, scalable, and user-focused web applications using React, Node.js, and modern web technologies.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-three-thumb w-100 tw-clip-anim tw-rounded-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <img
                  className="tw-anim-img w-100 tw-rounded-lg"
                  data-animate="true"
                  src="/assets/images/thumbs/about-three-thumb.png"
                  alt="thumb"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-three-right"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div>
                  <p className="tw-text-base tw-mb-10">
                    I&#x2019;m a passionate MERN Stack Developer focused on building modern, user-centered web applications that combine clean design with powerful functionality. I use MongoDB, Express.js, React, and Node.js to create websites and full-stack applications that are fast, responsive, scalable, and easy to maintain.
                  </p>
                  <p className="tw-text-base tw-mb-10">
                    With a strong eye for UI/UX and a solid foundation in web development, I transform complex ideas into simple, intuitive digital solutions. I believe great development is more than just writing code&#x2014;it&#x2019;s about creating meaningful experiences where every component, interaction, and line of code serves a purpose.
                  </p>
                  <p className="tw-text-base tw-mb-10">
                    From concept to deployment, I enjoy turning ideas into real-world products. I focus on understanding business goals, solving problems efficiently, and building applications with clean architecture, reusable components, secure APIs, and reliable performance. My goal is to create digital products that not only look great but also deliver real value to users and businesses.
                  </p>
                </div>
                <div className="about-three-counter d-inline-block">
                  <div className="tw-hover-btn-wrapper d-inline-block">
                    <a
                      className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden border border-1 border-neutral-200"
                      href="/"
                    >
                      <span className="d-flex flex-column justify-content-center">
                        <span className="tw-btn-circle-icon text-heading tw-text-8 tw-transition-3 font-heading fw-medium">
                          2+
                        </span>
                        <span className="text-heading fw-bold text-center tw-transition-3 tw-text-lg fw-medium">
                          Years of Experience
                        </span>
                      </span>
                      <i className="tw-btn-circle-dot bg-main-two-600"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-three-wrap-shape d-flex justify-content-between">
            <div
              className="banner-three-counter-item tw-rounded-md position-relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h2 className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">
                <span
                  className="purecounter font-heading"
                  data-purecounter-duration="4"
                  data-purecounter-end="20"
                ></span>
                +
              </h2>
              <p className="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">
                APIs Integrated
              </p>
            </div>
            <div
              className="banner-three-counter-item tw-rounded-md position-relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <h2 className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">
                <span
                  className="purecounter font-heading"
                  data-purecounter-duration="2"
                  data-purecounter-end="100"
                ></span>
                %
              </h2>
              <p className="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">
                Responsive Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

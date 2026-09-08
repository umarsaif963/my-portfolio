const services = [
  {
    number: "01",
    title: "Illustration Design",
    thumb: "/assets/images/thumbs/service-three-thumb1.png",
    align: "",
    aos: "fade-right",
    delay: "200",
  },
  {
    number: "02",
    title: "Business Branding",
    thumb: "/assets/images/thumbs/service-three-thumb2.png",
    align: "ms-auto",
    aos: "fade-left",
    delay: "300",
  },
  {
    number: "03",
    title: "Web Development",
    thumb: "/assets/images/thumbs/service-three-thumb3.png",
    align: "",
    aos: "fade-right",
    delay: "400",
  },
  {
    number: "04",
    title: "Application Design",
    thumb: "/assets/images/thumbs/service-three-thumb4.png",
    align: "ms-auto",
    aos: "fade-left",
    delay: "500",
  },
];

const tags = ["Creative Direction", "Brand Identity", "Graphic Design"];

function Services() {
  return (
    <section id="services" className="service-three-area bg-black pt-120 tw-pb-15">
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-12">
            <div className="service-three-wrapper">
              {services.map((service) => (
                <div
                  key={service.number}
                  className={`service-three-single ${service.align}`}
                  data-aos={service.aos}
                  data-aos-duration="2000"
                  data-aos-delay={service.delay}
                >
                  <div className="service-three-item d-flex justify-content-between align-items-center">
                    <div className="service-three-content d-flex tw-gap-14">
                      <div>
                        <span className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">
                          {service.number}
                          <img
                            className="tw-transition-3"
                            src="/assets/images/icons/service-three-arrow.svg"
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div>
                        <div>
                          <h2 className="service-three-title tw-text-15 text-white tw-mb-4">
                            <a href="/">{service.title}</a>
                          </h2>
                        </div>
                        <div className="portfolio-list portfolio-two-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            {tags.map((tag) => (
                              <li key={tag}>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                >
                                  {tag}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-three-thumb">
                      <a href="/">
                        <img src={service.thumb} alt="thumb1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
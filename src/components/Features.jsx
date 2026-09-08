const features = [
  {
    number: "01",
    name: "Awwwards",
    tag: "Site Of The Day - Luxe Beauty",
    year: "2023",
    bg: "/assets/images/thumbs/feature-three-thumb1.jpg",
    current: true,
  },
  {
    number: "02",
    name: "FWA",
    tag: "Motion Design and Animation",
    year: "2022",
    bg: "/assets/images/thumbs/portfolio-two-thumb1.jpg",
    current: false,
  },
  {
    number: "03",
    name: "CSSDA",
    tag: "Motion Design and Animation",
    year: "2021",
    bg: "/assets/images/thumbs/portfolio-two-thumb2.jpg",
    current: false,
  },
  {
    number: "04",
    name: "CSSDA",
    tag: "Motion Design and Animation",
    year: "2020",
    bg: "/assets/images/thumbs/portfolio-two-thumb3.jpg",
    current: false,
  },
  {
    number: "05",
    name: "Awwwards",
    tag: "Motion Design and Animation",
    year: "2019",
    bg: "/assets/images/thumbs/portfolio-two-thumb4.jpg",
    current: false,
  },
  {
    number: "06",
    name: "Awwwards",
    tag: "Motion Design and Animation",
    year: "2018",
    bg: "/assets/images/thumbs/portfolio-thumb1.jpg",
    current: false,
  },
];

function Features() {
  return (
    <div className="feature-three-area py-120 position-relative z-1">
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-12">
            <div className="feature-three-wrapper hover__widget">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className={`feature-three-single hover__reveal-item${
                    feature.current ? " current" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="feature-three-item d-flex justify-content-between align-items-center">
                    <div className="feature-three-left d-flex align-items-center">
                      <div>
                        <span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20">
                          {feature.number}
                        </span>
                      </div>
                      <div>
                        <span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px">
                          {feature.name}
                        </span>
                      </div>
                      <div>
                        <span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">
                          {feature.tag}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">
                        {feature.year}
                      </span>
                    </div>
                  </div>
                  <div
                    className="hover__reveal-bg bg-img"
                    data-background-image={feature.bg}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
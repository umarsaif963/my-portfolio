const projects = [
  {
    title: "Pets Veta",
    thumb: "/assets/images/thumbs/pets-veta.jpeg",
    tags: ["Pet Care", "Web Application"],
    href: "https://github.com/Abdullah7305/Pets-Veta",
  },
  {
    title: "Public Hub",
    thumb: "/assets/images/thumbs/public-hub.jpeg",
    tags: ["Social Media", "Web Application"],
    href: "https://github.com/umarsaif963/publicHub",
  },
  {
    title: "Skill Swapper",
    thumb: "/assets/images/thumbs/skill-swap.jpeg",
    tags: ["Peer-to-Peer Learning Platform", "Web Application"],
    href: "https://github.com/umarsaif963/Skill-Swapper",
  },
  {
    title: "Creative Studio",
    thumb: "/assets/images/thumbs/portfolio-three-thumb4.jpg",
  },
];

const projectTags = ["BRANDING", "web DESIGN"];

function Portfolio() {
  return (
    <section id="projects" className="portfolio-three-area py-120 position-relative z-1">
      <div className="portfolio-three-shape position-absolute top-0 z-n1">
        <h3 className="portfolio-three-shape-title">works</h3>
      </div>
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio-three-wrapper d-flex justify-content-between flex-wrap align-items-start position-relative z-1">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper"
                >
                  <div className="portfolio-three-wrap d-flex justify-content-between flex-wrap row-gap-2">
                    <div className="tw-mb-6">
                      <div>
                        <h2 className="tw-text-605 fw-medium tw-mb-4">
                          <a
                            className="hover-text-main-two-600"
                            href={project.href || "/"}
                            target={project.href ? "_blank" : undefined}
                            rel={project.href ? "noopener noreferrer" : undefined}
                          >
                            {project.title}
                          </a>
                        </h2>
                      </div>
                      <div className="portfolio-three-list portfolio-list">
                        <ul className="d-flex tw-gap-205 flex-wrap">
                          {(project.tags || projectTags).map((tag) => (
                            <li key={tag}>
                              <a
                                className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                href="#"
                              >
                                {tag}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="portfolio-three-button">
                        <a
                          className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                          href="/"
                        >
                          <i className="ph ph-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                    data-cursor="View"
                  >
                    <a
                      className="d-block cursor-hide tw-rounded-lg"
                      href={project.href || "/"}
                      target={project.href ? "_blank" : undefined}
                      rel={project.href ? "noopener noreferrer" : undefined}
                    >
                      <img
                        className="w-100 tw-rounded-lg"
                        src={project.thumb}
                        alt="thumb"
                      />
                    </a>
                  </div>
                </div>
              ))}
              <div className="about-three-counter portfolio-three-counter d-inline-block position-absolute bottom-0 start-0">
                <div className="tw-hover-btn-wrapper d-inline-block">
                  <a
                    className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden"
                    href="/"
                  >
                    <span className="d-flex flex-column justify-content-center">
                      <span className="text-heading fw-bold tw-transition-3 tw-text-2xl fw-semibold">
                        Discover <br /> Our Projects{" "}
                        <i className="ph ph-arrow-up-right"></i>
                      </span>
                    </span>
                    <i className="tw-btn-circle-dot bg-main-two-600"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
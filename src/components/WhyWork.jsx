const reasons = [
  {
    number: "01",
    icon: "ph ph-stack",
    title: "Full-Stack Expertise",
    description:
      "From frontend interfaces to backend APIs and databases, I can build complete web applications from end to end.",
  },
  {
    number: "02",
    icon: "ph ph-seal-check",
    title: "Clean & Scalable Code",
    description:
      "I focus on writing clean, reusable, and maintainable code that can grow with the project.",
  },
  {
    number: "03",
    icon: "ph ph-puzzle-piece",
    title: "Problem-Solving Mindset",
    description:
      "I focus on understanding the problem first and then building the right technical solution.",
  },
  {
    number: "04",
    icon: "ph ph-smiley",
    title: "Reliable & User-Focused",
    description:
      "I care about both functionality and user experience, creating applications that are responsive, intuitive, and reliable.",
  },
];

function WhyWork() {
  return (
    <section
      id="why-work"
      className="why-work-three-area py-120 position-relative z-1"
    >
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-5 col-md-6">
            <div className="why-work-three-intro">
              <span className="why-work-three-label text-uppercase fw-semibold">
                Why Work With Me
              </span>
              <h2 className="why-work-three-title font-heading fw-semibold">
                Building with purpose.
              </h2>
              <p className="why-work-three-intro-paragraph">
                I don't just write code &mdash; I build solutions that solve
                real problems and create meaningful digital experiences.
              </p>
            </div>
          </div>
          <div className="col-xl-7 col-md-6">
            <div className="why-work-three-list">
              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="why-work-three-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <span className="why-work-three-number fw-semibold">
                    {reason.number}
                  </span>
                  <span className="why-work-three-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                    <i className={reason.icon}></i>
                  </span>
                  <div className="why-work-three-content">
                    <h3 className="why-work-three-item-title font-heading fw-semibold">
                      {reason.title}
                    </h3>
                    <p className="why-work-three-item-text">
                      {reason.description}
                    </p>
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

export default WhyWork;
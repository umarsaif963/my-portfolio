const timeline = [
  {
    number: "01",
    title: "MERN Stack Training",
    org: "Qalam Training Program",
    year: "2025",
    role: "MERN Stack Trainee",
    description:
      "Completed intensive training focused on full-stack web development using MongoDB, Express.js, React, and Node.js, while working on practical applications and real-world development workflows.",
    techs: null,
  },
  {
    number: "02",
    title: "Final Year Project",
    org: "Skill Swapper",
    year: "2025–2026",
    role: "Full-Stack Developer",
    description:
      "Developed a peer-to-peer learning platform that allows users to connect, exchange skills, and learn from each other.",
    techs: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    number: "03",
    title: "Full-Stack Projects",
    org: "Personal & Collaborative Projects",
    year: "2026",
    role: "Full-Stack Developer",
    description:
      "Built and contributed to multiple full-stack applications involving authentication, REST APIs, database management, real-time communication, file uploads, and third-party integrations.",
    techs: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "MongoDB"],
  },
  {
    number: "04",
    title: "Building & Growing",
    org: "Current",
    year: "Current",
    role: "Full-Stack MERN Developer",
    description:
      "Continuously improving my skills by building production-oriented applications, exploring modern technologies, and solving real-world development problems.",
    techs: null,
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-three-area py-120 position-relative z-1">
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-12">
            <div className="experience-three-heading text-center mx-auto tw-mb-20">
              <span className="experience-three-label text-uppercase fw-semibold">
                My Journey
              </span>
              <h2 className="experience-three-title font-heading fw-semibold">
                Experience &amp; Journey
              </h2>
              <p className="experience-three-paragraph">
                A journey of continuous learning, building, and growing as a
                Full-Stack Developer.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="experience-three-timeline">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={item.number}
                    className={`experience-three-item ${
                      isLeft ? "is-left" : "is-right"
                    }`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div className="experience-three-marker">
                      <span className="experience-three-dot"></span>
                    </div>
                    <div className="experience-three-card">
                      <div className="d-flex justify-content-between align-items-start flex-wrap tw-gap-3 tw-mb-4">
                        <div>
                          <span className="experience-three-year text-main-two-600 fw-semibold">
                            {item.year}
                          </span>
                          <h3 className="experience-three-item-title font-heading fw-semibold">
                            {item.title}
                          </h3>
                        </div>
                        <span className="experience-three-number">{item.number}</span>
                      </div>
                      <p className="experience-three-org text-white fw-medium">
                        {item.org} &mdash; {item.role}
                      </p>
                      <p className="experience-three-desc">{item.description}</p>
                      {item.techs && (
                        <ul className="experience-three-tech d-flex flex-wrap tw-gap-2 list-unstyled tw-mb-0">
                          {item.techs.map((tech) => (
                            <li key={tech} className="experience-three-tech-tag">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
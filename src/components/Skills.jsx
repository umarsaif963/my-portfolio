const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: "ph ph-layout",
    grid: "col-xl-6 col-lg-6 col-md-12",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Redux Toolkit", icon: "devicon-redux-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
    ],
  },
  {
    title: "Backend Technologies",
    icon: "ph ph-brackets-curly",
    grid: "col-xl-6 col-lg-6 col-md-12",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "REST APIs", icon: "ph ph-plugs-connected" },
      { name: "JWT", icon: "ph ph-shield-check" },
      { name: "Socket.io", icon: "devicon-socketio-original" },
    ],
  },
  {
    title: "Databases & ORM",
    icon: "ph ph-database",
    grid: "col-xl-4 col-lg-6 col-md-12",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "Prisma", icon: "devicon-prisma-original" },
      { name: "Mongoose", icon: "ph ph-database" },
    ],
  },
  {
    title: "Tools & Development",
    icon: "ph ph-wrench",
    grid: "col-xl-4 col-lg-6 col-md-12",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-original" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ],
  },
  {
    title: "Cloud & Services",
    icon: "ph ph-cloud-arrow-up",
    grid: "col-xl-4 col-lg-6 col-md-12",
    skills: [
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Cloudinary", icon: "ph ph-cloud" },
      { name: "Stripe", icon: "ph ph-credit-card" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-three-area py-120 position-relative z-1">
      <div className="container tw-container-1800-px">
        <div className="row mt-0">
          <div className="col-xl-12">
            <div className="skills-three-heading text-center mx-auto tw-mb-14">
              <h2 className="skills-three-title text-heading tw-text-10 font-heading fw-semibold tw-itm-title tw-itm-anim tw-mb-3">
                Technical Skills
              </h2>
              <p className="tw-text-lg fw-medium text-body-color tw-mb-0">
                Technologies and tools I use to build modern, scalable web
                applications.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${category.grid}`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(index % 3) * 100 + 200}
            >
              <div className="skills-category">
                <div className="d-flex align-items-center tw-gap-4 tw-mb-6">
                  <span className="skills-category-icon d-inline-flex align-items-center justify-content-center text-white">
                    <i className={category.icon}></i>
                  </span>
                  <h3 className="tw-text-2xl font-heading fw-bold text-heading tw-mb-0">
                    {category.title}
                  </h3>
                </div>
                <ul className="d-flex flex-wrap tw-gap-3 list-unstyled tw-mb-0">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <a
                        className="skill-chip d-inline-flex align-items-center text-heading tw-text-base text-decoration-none"
                        href="#"
                        aria-label={skill.name}
                      >
                        <span className="skill-chip-icon d-inline-flex align-items-center justify-content-center text-heading">
                          <i className={skill.icon}></i>
                        </span>
                        <span className="skill-chip-name fw-medium">
                          {skill.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
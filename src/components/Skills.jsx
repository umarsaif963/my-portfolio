const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: "ph ph-layout",
    grid: "col-12 col-md-6 col-xl-4",
    skills: [
      { name: "React.js", badge: "https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
      { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
      { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
      { name: "Redux Toolkit", badge: "https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" },
      { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" },
      { name: "Bootstrap", badge: "https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" },
      { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
      { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
    ],
  },
  {
    title: "Backend Technologies",
    icon: "ph ph-brackets-curly",
    grid: "col-12 col-md-6 col-xl-4",
    skills: [
      { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
      { name: "Express.js", badge: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
      { name: "REST API", badge: "https://img.shields.io/badge/REST_API-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
      { name: "JWT", badge: "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" },
      { name: "Socket.io", badge: "https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" },
    ],
  },
  {
    title: "Databases & ORM",
    icon: "ph ph-database",
    grid: "col-12 col-md-6 col-xl-4",
    skills: [
      { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
      { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
      { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
      { name: "Prisma", badge: "https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" },
      { name: "Mongoose", badge: "https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" },
    ],
  },
  {
    title: "Tools & Development",
    icon: "ph ph-wrench",
    grid: "col-12 col-md-6 col-xl-4",
    skills: [
      { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
      { name: "GitHub", badge: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
      { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
      { name: "VS Code", badge: "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" },
      { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    ],
  },
  {
    title: "Cloud & Services",
    icon: "ph ph-cloud-arrow-up",
    grid: "col-12 col-md-6 col-xl-4",
    skills: [
      { name: "Vercel", badge: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" },
      { name: "Cloudinary", badge: "https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" },
      { name: "Stripe", badge: "https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" },
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
        <div className="row g-4 justify-content-center">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${category.grid}`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(index % 3) * 100 + 200}
            >
              <div className="skills-category">
                  <div className="d-flex justify-content-between align-items-center tw-mb-6">
                    <h3 className="tw-text-2xl font-heading fw-semibold text-heading tw-mb-0">
                      {category.title}
                    </h3>
                    <span className="skills-category-icon d-inline-flex align-items-center justify-content-center text-white flex-shrink-0">
                      <i className={category.icon}></i>
                    </span>
                  </div>
                <ul className="d-flex flex-wrap tw-gap-3 list-unstyled tw-mb-0">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <img
                        className="skill-badge"
                        src={skill.badge}
                        alt={skill.name}
                        loading="lazy"
                      />
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
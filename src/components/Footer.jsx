function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/umarsaif963",
      icon: "ph ph-github-logo",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-umar-saif-dev",
      icon: "ph ph-linkedin-logo",
    },
    {
      label: "Email",
      href: "mailto:umarsaif.dev@gmail.com",
      icon: "ph ph-envelope-simple",
    },
  ];

  return (
    <footer className="footer-three-area pt-120 position-relative z-1">
      <div className="container tw-container-1800-px">
        <div className="footer-top">
          <div
            className="footer-top-cta d-flex align-items-center justify-content-between flex-wrap tw-gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div>
              <h2 className="footer-top-cta-title font-heading fw-semibold">
                Let&rsquo;s build something meaningful.
              </h2>
              <p className="footer-top-cta-text">
                Have an idea, project, or opportunity? Let&rsquo;s talk.
              </p>
            </div>
            <a className="footer-top-cta-btn" href="#contact">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="footer-main py-120">
          <div className="row">
            <div className="col-xl-5 col-md-6">
              <div
                className="footer-brand"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3 className="footer-brand-name font-heading fw-semibold">
                  Muhammad Umar Saif
                </h3>
                <p className="footer-brand-role fw-medium">
                  Full-Stack MERN Developer
                </p>
                <p className="footer-brand-desc">
                  Building modern, scalable, and user-focused web applications.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-3">
              <div
                className="footer-col"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h4 className="footer-col-title">Quick Links</h4>
                <ul className="footer-links list-unstyled tw-mb-0">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-3">
              <div
                className="footer-col"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h4 className="footer-col-title">Let&rsquo;s Connect</h4>
                <ul className="footer-social list-unstyled tw-mb-0">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target={
                          social.href.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        rel="noreferrer"
                      >
                        <span className="footer-social-icon d-inline-flex align-items-center justify-content-center">
                          <i className={social.icon}></i>
                        </span>
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-bottom-inner d-flex align-items-center justify-content-between flex-wrap tw-gap-4">
                <p className="footer-bottom-text tw-mb-0">
                  &copy; 2026 Muhammad Umar Saif. All rights reserved.
                </p>
                <p className="footer-bottom-text tw-mb-0">
                  <i className="ph ph-atom"></i> Built with React
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
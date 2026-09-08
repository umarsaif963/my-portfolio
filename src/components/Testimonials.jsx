const testimonials = [
  {
    image: "/assets/images/thumbs/testimonial-three-thumb1.jpg",
    name: "Sophia Reynolds",
    role: "Founder, Startup Studio",
    delay: "200",
  },
  {
    image: "/assets/images/thumbs/testimonial-three-thumb2.jpg",
    name: "Daniel Roberts",
    role: "CEO, Tech Company",
    delay: "300",
  },
];

const testimonialText =
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";

const stars = [1, 2, 3, 4, 5];

function Testimonials() {
  return (
    <section className="testimonial-three-area pt-120 tw-pb-22">
      <div className="container tw-container-1800-px">
        <div className="row justify-content-center tw-mb-21">
          <div className="col-xl-10">
            <div className="text-center">
              <h2 className="testimonial-three-title text-heading tw-text-13 tw-itm-title tw-itm-anim">
                Honest testimonials from clients highlighting my commitment to
                quality, performance, &amp; user-focused design that delivers
                real results
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial-three-slider position-relative z-1">
              <div className="testimonial-three-active swiper-container">
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.name}
                      className="testimonial-three-wrapper d-flex align-items-center tw-gap-9 tw-rounded-lg tw-mb-705 swiper-slide"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={testimonial.delay}
                    >
                      <div className="testimonial-three-thumb position-relative z-1">
                        <img
                          className="w-100 h-100 tw-rounded-lg"
                          src={testimonial.image}
                          alt="thumb"
                        />
                        <div className="testimonial-three-button position-absolute start-50 top-50 translate-middle">
                          <a
                            className="open-popup testimonial-three-btn tw-w-220 tw-h-220 lh-1 d-inline-flex align-items-center justify-content-center bg-white text-main-two-600 tw-text-2xl position-relative z-1 hover-text-main-two-600 rounded-circle"
                            href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                            data-fancybox="gallery"
                            data-caption=""
                          >
                            <i className="ph-bold ph-play"></i>
                            <span className="ripple"></span>
                          </a>
                        </div>
                      </div>
                      <div className="testimonial-three-content w-100">
                        <div className="d-flex align-items-center justify-content-between tw-mb-16">
                          <div>
                            <span>
                              <img
                                src="/assets/images/icons/testimonial-three-icon.svg"
                                alt="icon"
                              />
                            </span>
                          </div>
                          <div className="testimonial-three-review">
                            {stars.map((star) => (
                              <span key={star} className="text-heading tw-text-lg">
                                <i className="ph-bold ph-star"></i>
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="tw-mb-15">
                          <p className="testimonial-three-paragraph text-heading tw-text-xl fw-semibold">
                            {testimonialText}
                          </p>
                        </div>
                        <div>
                          <h2 className="tw-text-xl fw-medium">
                            {testimonial.name}
                          </h2>
                          <p className="tw-text-base">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
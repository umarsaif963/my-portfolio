function BrandItem({ img, hoverImg, delay }) {
  return (
    <div
      className="brand-item brand-three-item position-relative z-1 tw-mb-1"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={delay}
    >
      <span className="brand-active-media">
        <img src={img} alt="thumb" />
      </span>
      <span className="brand-hover-media">
        <img src={hoverImg} alt="thumb" />
      </span>
    </div>
  );
}

function Brands() {
  return (
    <section className="brand-three-area brand-two-area pb-120 @@brandipClass">
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-12">
            <div className="text-center tw-mb-15">
              <h2 className="brand-three-title tw-text-xl tw-char-animation">
                Loved by Teams Around the World
              </h2>
            </div>
          </div>
        </div>
        <div className="row gx-2">
          <div className="col-xl-2 col-lg-6 col-md-6">
            <BrandItem
              img="/assets/images/thumbs/marquee-two-thumb1.png"
              hoverImg="/assets/images/thumbs/marquee-two-thumb11.png"
              delay="200"
            />
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <BrandItem
              img="/assets/images/thumbs/marquee-two-thumb2.png"
              hoverImg="/assets/images/thumbs/marquee-two-thumb22.png"
              delay="300"
            />
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6"></div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <BrandItem
              img="/assets/images/thumbs/marquee-thumb55.png"
              hoverImg="/assets/images/thumbs/marquee-thumb5.png"
              delay="400"
            />
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6"></div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <BrandItem
              img="/assets/images/thumbs/marquee-two-thumb4.png"
              hoverImg="/assets/images/thumbs/marquee-two-thumb44.png"
              delay="500"
            />
          </div>
        </div>
        <div className="row gx-2">
          <div className="col-xl-2 col-lg-6 col-md-6"></div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <BrandItem
              img="/assets/images/thumbs/marquee-thumb33.png"
              hoverImg="/assets/images/thumbs/marquee-thumb3.png"
              delay="200"
            />
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <BrandItem
              img="/assets/images/thumbs/marquee-thumb11.png"
              hoverImg="/assets/images/thumbs/marquee-thumb1.png"
              delay="300"
            />
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6"></div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <BrandItem
              img="/assets/images/thumbs/marquee-thumb66.png"
              hoverImg="/assets/images/thumbs/marquee-thumb6.png"
              delay="400"
            />
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <BrandItem
              img="/assets/images/thumbs/marquee-thumb22.png"
              hoverImg="/assets/images/thumbs/marquee-thumb2.png"
              delay="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
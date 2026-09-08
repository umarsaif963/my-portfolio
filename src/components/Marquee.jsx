const items = [
  { text: "Services", className: "marquee-two-title marquee-three-title text-uppercase text-white" },
  { text: "Services", className: "marquee-two-title marquee-three-title text-uppercase text-stroke" },
  { text: "Services", className: "marquee-two-title marquee-three-title text-uppercase text-white" },
  { text: "Services", className: "marquee-two-title marquee-three-title text-uppercase text-stroke" },
  { text: "Services", className: "marquee-two-title marquee-three-title text-uppercase text-white" },
];

function Marquee() {
  return (
    <div className="marquee tw-pt-17 bg-black">
      <div className="marquee_left d-flex align-items-center justify-content-between tw-gap-16 overflow-hidden">
        {items.map((item, i) => (
          <div key={i}>
            <h2 className={item.className}>
              {item.text} <span className="text-white">-</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
import React from "react";

const CTA = () => {
  return (
    <section className="py-5 bg-red-100">
      <div className="container rounded-lg border border-red-200 shadow max-w-5xl py-20 relative overflow-hidden">
        <div className="absolute inset-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 800"
          >
            <defs>
              <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                <stop offset="15%" stopColor="#c95567" stopOpacity="0.5"></stop>
                <stop
                  offset="75%"
                  stopColor="hsl(352, 100%, 76%)"
                  stopOpacity="1"
                ></stop>
                <stop offset="100%" stopColor="#ffeaf8" stopOpacity="1"></stop>
              </radialGradient>
            </defs>
            <g fill="url(#cccircular-grad)">
              <circle r="672" cx="400" cy="400" opacity="0.05"></circle>
              <circle r="560" cx="400" cy="400" opacity="0.24"></circle>
              <circle r="448" cx="400" cy="400" opacity="0.43"></circle>
              <circle r="336" cx="400" cy="400" opacity="0.62"></circle>
              <circle r="224" cx="400" cy="400" opacity="0.81"></circle>
            </g>
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-[600] font-Grostek text-center lg:text-5xl">
            Let’s Build the Next Big Thing
          </h1>
          <p className="text-center mt-2">
            Tired of flaky freelancers and overpriced agencies? Dominate your
            market with Spok Digital.
          </p>
          <div className="flex justify-center items-center gap-5 mt-5">
            <a
              href={"https://calendly.com/spokdigital/30min"}
              className="bg-black px-4 py-[.4rem] rounded-lg text-slate-50"
            >
              {" "}
              Book a Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

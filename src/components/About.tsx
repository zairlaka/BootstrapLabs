import Image from "next/image";

const stats = [
  { number: "15", suffix: "+", label: "Years of experience" },
  { number: "120", suffix: "k", label: "Successful projects" },
  { number: "100", suffix: "%", label: "Client satisfaction rate" },
];

export default function About() {
  return (
    <section className="section-about">
      <div className="section-space">
        <div className="container">
          {/* Section Block */}
          <div className="section-block mb-10 md:mb-[60px] xl:mb-20">
            <div className="grid items-center gap-x-6 gap-y-10 text-center lg:grid-cols-[1fr_minmax(0,0.55fr)] lg:text-start xl:gap-x-[134px]">
              <h2 className="jos">
                We make{" "}
                <span>
                  your
                  <Image
                    src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="shape-light-lime-5-arms-star"
                    width={74}
                    height={70}
                    className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                  />
                </span>{" "}
                business stand out
              </h2>
              <p className="jos section-para">
                We work closely with our clients to know their objectives,
                target audience, unique needs, and practical design solutions.
              </p>
            </div>
          </div>

          {/* About Area */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-[0.8fr_0.4fr]">
            {/* About Left Block - Video */}
            <div className="jos relative flex items-center justify-center overflow-hidden rounded-[25px] border-[5px] border-black">
              <Image
                src="/assets/img/images/th-1/about-img.jpg"
                alt="about-img"
                width={846}
                height={476}
                className="h-full w-full object-cover"
              />

              <div className="absolute inline-block">
                <a
                  data-fslightbox="gallery"
                  href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                  className="btn-primary relative pr-16"
                  aria-label="video-play"
                >
                  Play
                  <span className="rounded-[50% absolute right-[0px] inline-flex items-center justify-center">
                    <Image
                      src="/assets/img/icons/icon-buttery-white-black-play.svg"
                      alt="icon-buttery-white-black-play"
                      width={50}
                      height={50}
                    />
                  </span>
                </a>
              </div>
            </div>

            {/* About Right Block - Counter Up */}
            <div className="jos rounded-[25px] bg-black p-[30px]">
              <ul className="divide-y divide-[#333333]">
                {stats.map((stat, index) => (
                  <li
                    key={index}
                    className="py-6 text-center first-of-type:pt-0 last-of-type:pb-0"
                  >
                    <div
                      className="font-syne text-4xl font-bold leading-[1.07] -tracking-[1%] text-colorLightLime md:text-5xl xl:text-[70px]"
                      data-module="countup"
                    >
                      <span
                        className="start-number"
                        data-countup-number={stat.number}
                      >
                        {stat.number}
                      </span>
                      {stat.suffix}
                    </div>
                    <span className="mt-2 inline-block text-colorButteryWhite">
                      {stat.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function TextSlider() {
  return (
    <div className="section-text-slider">
      <div className="bg-black py-5">
        <div className="horizontal-slide-from-right-to-left flex items-center gap-x-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-x-6">
              {/* Text Slider Item Text */}
              <div className="whitespace-nowrap font-syne text-[35px] font-bold leading-none tracking-[1px] text-colorLightLime">
                Let&apos;s create new experiences
              </div>
              {/* Text Slider Separator Icon */}
              <div className="h-10 min-w-[42px]">
                <Image
                  src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                  alt="shape-light-lime-5-arms-star"
                  width={74}
                  height={70}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

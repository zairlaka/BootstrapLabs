import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="bg-black">
        <div className="pb-20 pt-[150px] lg:pb-[100px] lg:pt-[196px] xl:pb-[130px]">
          <div className="container">
            <div className="relative z-10 grid grid-cols-1 items-center gap-x-[90px] gap-y-16 lg:grid-cols-[1fr_minmax(0,0.6fr)]">
              {/* Left */}
              <div className="text-center text-colorButteryWhite lg:text-start">
                <h1>
                  A{" "}
                  <span className="inline-flex items-center gap-5">
                    creative
                    <Image
                      src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                      alt="Star"
                      width={74}
                      height={70}
                      className="w-12 md:w-14 lg:w-auto h-auto"
                    />
                  </span>{" "}
                  design studio
                </h1>
                <p className="mb-10 mt-6 text-lg leading-[1.4] md:mb-14 lg:text-[21px]">
                  We&apos;re a creative design studio specializing in meeting
                  the needs of the new generation. We offer innovative and
                  cutting-edge design solutions to help our clients stand out in
                  today&apos;s fast-paced world.
                </p>
                <div className="mb-[50px] flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <div className="flex -space-x-3">
                    <Image
                      src="/assets/img/images/th-1/hero-user-1.png"
                      alt="User 1"
                      width={66}
                      height={66}
                      className="rounded-full border-[6px] border-black"
                    />
                    <Image
                      src="/assets/img/images/th-1/hero-user-2.png"
                      alt="User 2"
                      width={66}
                      height={66}
                      className="rounded-full border-[6px] border-black"
                    />
                    <Image
                      src="/assets/img/images/th-1/hero-user-3.png"
                      alt="User 3"
                      width={66}
                      height={66}
                      className="rounded-full border-[6px] border-black"
                    />
                  </div>
                  <span className="text-base font-semibold">
                    Believed by more than a thousand people
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary relative pr-20 md:pr-[118px]"
                >
                  Book a free consultation
                  <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black">
                    <Image
                      src="/assets/img/icons/icon-buttery-white-phone.svg"
                      alt="Phone"
                      width={30}
                      height={30}
                    />
                  </span>
                </Link>
              </div>

              {/* Right */}
              <div className="mx-auto inline-block max-w-[495px] overflow-hidden rounded-[25px] bg-colorButteryWhite p-[5px] lg:mx-0">
                <Image
                  src="/assets/img/images/th-1/hero-img.jpg"
                  alt="Hero Image"
                  width={485}
                  height={540}
                  className="rounded-[20px] object-cover"
                />
              </div>

              {/* Decorative element */}
              <Image
                src="/assets/img/elemnts/element-light-lime-curve-arrow.svg"
                alt="Curve Arrow"
                width={284}
                height={153}
                className="absolute bottom-0 left-1/2 -z-10 hidden max-w-52 -translate-x-1/2 lg:inline-block xl:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/sections/ServicesSection.tsx
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "/assets/img/icons/th-1-service-icon-1.svg",
    title: "UI/UX Design",
    description:
      "Focusing on user interface (UI) and user experience (UX) design to enhance the usability and accessibility of digital products & app.",
    delay: "0",
  },
  {
    icon: "/assets/img/icons/th-1-service-icon-2.svg",
    title: "Graphic Design",
    description:
      "Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
    delay: "0.3",
  },
  {
    icon: "/assets/img/icons/th-1-service-icon-3.svg",
    title: "Web Design",
    description:
      "Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
    delay: "0.6",
  },
  {
    icon: "/assets/img/icons/th-1-service-icon-4.svg",
    title: "Motion Graphics",
    description:
      "Creating animated graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
    delay: "0.9",
  },
];

export default function Services() {
  return (
    <section className="section-service">
      <div className="bg-colorIvory">
        <div className="section-space">
          <div className="container">
            {/* Section Block */}
            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
              <h2 className="jos">
                We provide effective design{" "}
                <span>
                  solutions
                  <Image
                    src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="shape-light-lime-5-arms-star"
                    width={74}
                    height={70}
                    className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                  />
                </span>
              </h2>
            </div>

            {/* Service List */}
            <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="jos group/team-item"
                  data-jos_delay={service.delay}
                >
                  <div className="shadow-bg group h-full">
                    <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                      <Image
                        src={service.icon}
                        alt={`service-icon-${index + 1}`}
                        width={77}
                        height={70}
                        className="h-[70px] w-auto"
                      />

                      <h4 className="mb-[15px] mt-[30px]">{service.title}</h4>
                      <p className="mb-7">{service.description}</p>

                      <Link
                        href="/service-details"
                        className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                      >
                        <Image
                          src="/assets/img/icons/icon-black-arrow-right.svg"
                          alt="icon-black-arrow-right"
                          width={34}
                          height={28}
                        />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

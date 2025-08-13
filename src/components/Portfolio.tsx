import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: "/assets/img/images/th-1/project-img-1.jpg",
    title: "Product Design",
    description:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    link: "/portfolio/product-design",
  },
  {
    id: 2,
    image: "/assets/img/images/th-1/project-img-2.jpg",
    title: "Logo and Branding",
    description:
      "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    link: "/portfolio/logo-branding",
  },
  {
    id: 3,
    image: "/assets/img/images/th-1/project-img-3.jpg",
    title: "App UI/UX Design",
    description:
      "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
    link: "/portfolio/app-design",
  },
  {
    id: 4,
    image: "/assets/img/images/th-1/project-img-4.jpg",
    title: "Packaging Design",
    description:
      "Creating packaging solutions for products that not only protect attract customers on store.",
    link: "/portfolio/packaging-design",
  },
];

export default function Portfolio() {
  return (
    <section className="section-portfolio">
      <div className="bg-black">
        <div className="section-space">
          <div className="container">
            {/* Section Block */}
            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
              <h2 className="jos text-colorButteryWhite">
                Have a wide range of creative
                <span>
                  projects
                  <Image
                    src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="shape-light-lime-5-arms-star"
                    width={74}
                    height={70}
                    className="inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                  />
                </span>
              </h2>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="group">
                  <div className="group relative overflow-hidden rounded-[20px] border-[5px] border-colorButteryWhite">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={516}
                      height={390}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                    />

                    <div className="w-[calc(100%-48px)] absolute bottom-0 flex flex-col items-start gap-x-10 gap-y-8 p-6 sm:flex-row sm:items-center">
                      <div className="max-w-[380px] flex-1 text-colorButteryWhite">
                        <Link
                          href={item.link}
                          className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] group-hover:text-colorLightLime md:text-3xl"
                        >
                          {item.title}
                        </Link>
                        <p className="line-clamp-2">{item.description}</p>
                      </div>
                      <Link
                        href={item.link}
                        className="relative inline-flex items-start justify-center overflow-hidden"
                      >
                        <Image
                          src="/assets/img/icons/icon-buttery-white-arrow-right.svg"
                          alt="icon-buttery-white-arrow-right"
                          width={34}
                          height={28}
                          className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0"
                        />
                        <Image
                          src="/assets/img/icons/icon-light-lime-arrow-right.svg"
                          alt="light-lime-arrow-right"
                          width={34}
                          height={28}
                          className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

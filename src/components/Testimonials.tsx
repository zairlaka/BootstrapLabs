import Image from "next/image";

interface Testimonial {
  id: number;
  rating: number;
  title: string;
  content: string;
  author: {
    name: string;
    position: string;
    image: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    title: "Super customer service!",
    content:
      "Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.",
    author: {
      name: "William Jack",
      position: "Founder@XYZ",
      image: "/assets/img/images/th-1/testimonial-user-img-1.png",
    },
  },
  {
    id: 2,
    rating: 5,
    title: "Exceptional creativity and vision",
    content:
      "Working with Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they designed perfectly captures our essence & has become instantly recognizable. We couldn't be happier with the results!",
    author: {
      name: "Smith Align",
      position: "Businessman",
      image: "/assets/img/images/th-1/testimonial-user-img-2.png",
    },
  },
  {
    id: 3,
    rating: 5,
    title: "Innovative and professional",
    content:
      "I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought them to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.",
    author: {
      name: "Milano Joe",
      position: "Creative Director",
      image: "/assets/img/images/th-1/testimonial-user-img-3.png",
    },
  },
  {
    id: 4,
    rating: 5,
    title: "Transformed our brand",
    content:
      "Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and meticulous design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.",
    author: {
      name: "Danial Mark",
      position: "Marketing Director",
      image: "/assets/img/images/th-1/testimonial-user-img-4.png",
    },
  },
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Image
        key={index}
        src="/assets/img/icons/icon-black-star.svg"
        alt="star"
        width={37}
        height={35}
        className={index < rating ? "opacity-100" : "opacity-30"}
      />
    ));
  };

  return (
    <section className="section-testimonial">
      <div className="section-space">
        <div className="container">
          {/* Section Block */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              Clients are always satisfied with
              <span>
                us
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

          {/* Testimonial List */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-[30px] md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <li
                key={testimonial.id}
                className="jos"
                data-jos_delay={index * 0.3}
              >
                <div className="flex h-full flex-col rounded-[20px] border-2 border-black px-[30px] py-6 transition-all duration-300 hover:shadow-[5px_5px_0_0] hover:shadow-black">
                  {/* Rating Stars */}
                  <div className="mb-8 flex gap-x-2">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Title */}
                  <h4 className="mb-5 font-syne text-xl font-bold md:text-2xl">
                    {testimonial.title}
                  </h4>

                  {/* Testimonial Content */}
                  <p className="mb-[30px] text-gray-700">
                    {testimonial.content}
                  </p>

                  {/* Author Info */}
                  <div className="mt-auto flex items-center gap-3">
                    <div className="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black">
                      <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="font-syne text-lg font-bold leading-none -tracking-[0.5px] lg:text-[21px]">
                        {testimonial.author.name}
                      </div>
                      <span className="font-normal text-gray-600 mt-1 block">
                        {testimonial.author.position}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

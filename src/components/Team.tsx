import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  profileLink: string;
  socialLinks: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Andrew Mark",
    position: "CEO & Founder",
    image: "/assets/img/images/th-1/team-img-1.jpg",
    profileLink: "/team/andrew-mark",
    socialLinks: {
      twitter: "http://www.twitter.com",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      linkedin: "http://www.linkedin.com",
    },
  },
  {
    id: 2,
    name: "Jack Taylor",
    position: "Senior Designer",
    image: "/assets/img/images/th-1/team-img-2.jpg",
    profileLink: "/team/jack-taylor",
    socialLinks: {
      twitter: "http://www.twitter.com",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      linkedin: "http://www.linkedin.com",
    },
  },
  {
    id: 3,
    name: "Martine Joy",
    position: "Project Manager",
    image: "/assets/img/images/th-1/team-img-4.jpg",
    profileLink: "/team/martine-joy",
    socialLinks: {
      twitter: "http://www.twitter.com",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      linkedin: "http://www.linkedin.com",
    },
  },
  {
    id: 4,
    name: "Adam Straw",
    position: "Web Developer",
    image: "/assets/img/images/th-1/team-img-3.jpg",
    profileLink: "/team/adam-straw",
    socialLinks: {
      twitter: "http://www.twitter.com",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      linkedin: "http://www.linkedin.com",
    },
  },
];

interface SocialIconProps {
  href: string;
  whiteIcon: string;
  blackIcon: string;
  alt: string;
  width: number;
  height: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  whiteIcon,
  blackIcon,
  alt,
  width,
  height,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite"
  >
    <Image
      src={whiteIcon}
      alt={`${alt}-white`}
      width={width}
      height={height}
      className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
    />
    <Image
      src={blackIcon}
      alt={`${alt}-black`}
      width={width}
      height={height}
      className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
    />
  </a>
);

export default function Team() {
  return (
    <section className="section-team">
      <div className="section-space">
        <div className="container">
          {/* Section Block */}
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              We have a team of creative
              <span>
                people
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

          {/* Team List */}
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <li
                key={member.id}
                className="jos group/team-item"
                data-jos_delay={index * 0.2}
              >
                <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={296}
                    height={300}
                    className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110"
                  />

                  {/* Social Links */}
                  <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                    <SocialIcon
                      href={member.socialLinks.twitter}
                      whiteIcon="/assets/img/icons/icon-logo-buttery-white-twitter.svg"
                      blackIcon="/assets/img/icons/icon-logo-black-twitter.svg"
                      alt="twitter"
                      width={19}
                      height={16}
                    />
                    <SocialIcon
                      href={member.socialLinks.facebook}
                      whiteIcon="/assets/img/icons/icon-logo-buttery-white-facebook.svg"
                      blackIcon="/assets/img/icons/icon-logo-black-facebook.svg"
                      alt="facebook"
                      width={10}
                      height={17}
                    />
                    <SocialIcon
                      href={member.socialLinks.instagram}
                      whiteIcon="/assets/img/icons/icon-logo-buttery-white-instagram.svg"
                      blackIcon="/assets/img/icons/icon-logo-black-instagram.svg"
                      alt="instagram"
                      width={17}
                      height={18}
                    />
                    <SocialIcon
                      href={member.socialLinks.linkedin}
                      whiteIcon="/assets/img/icons/icon-logo-buttery-white-linkedin.svg"
                      blackIcon="/assets/img/icons/icon-logo-black-linkedin.svg"
                      alt="linkedin"
                      width={17}
                      height={18}
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <Link
                    href={member.profileLink}
                    className="display-heading display-heading-4 mb-4 block font-syne text-2xl font-bold hover:text-colorLightLime transition-colors duration-300"
                  >
                    {member.name}
                  </Link>
                  <span className="text-lg md:text-[21px] text-gray-600">
                    {member.position}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

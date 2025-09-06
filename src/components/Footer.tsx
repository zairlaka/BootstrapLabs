"use client";

import Image from "next/image";
import Link from "next/link";
import CalEmbed from "@calcom/embed-react";

export default function Footer() {
  return (
    <footer className="section-footer" id="contact">
      <div className="bg-black">
        {/* Footer Top */}
        <div className="section-space">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-x-20 xl:gap-x-24 xxl:gap-x-[139px]">
              {/* Footer Left Block */}
              <div>
                <div className="section-block text-colorButteryWhite">
                  <h2 className="mb-6">
                    Let&apos;s start a{" "}
                    <span>
                      <Image
                        src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                        alt="shape-light-lime-5-arms-star"
                        width={74}
                        height={70}
                        className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                      />
                    </span>{" "}
                    project together
                  </h2>

                  <p className="section-para">
                    We work closely with our clients to understand their
                    objectives, target audience, and unique needs. We use our
                    creative skills to translate these requirements and
                    practical design solutions.
                  </p>
                </div>

                <div className="grid grid-cols-[1fr_auto] items-center">
                  <div>
                    {/* Footer Info */}
                    <ul className="mt-12 flex flex-col gap-y-3">
                      <li>
                        <span className="block font-syne text-[21px] font-bold leading-[1.42] text-colorLightLime">
                          Send us an email:
                        </span>
                        <a
                          href="mailto:hello@bootstrappedlabs.com"
                          className="text-[21px] leading-[1.42] text-colorButteryWhite"
                        >
                          hello@bootstrappedlabs.com
                        </a>
                      </li>
                    </ul>

                    {/* Social Link */}
                    <div className="mt-11 flex w-full gap-4">
                      {/* twitter */}
                      <a
                        href="http://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite"
                      >
                        <Image
                          src="/assets/img/icons/icon-logo-buttery-white-twitter.svg"
                          alt="twitter"
                          width={19}
                          height={16}
                          className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                        />
                        <Image
                          src="/assets/img/icons/icon-logo-black-twitter.svg"
                          alt="twitter-black"
                          width={19}
                          height={16}
                          className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                        />
                      </a>

                      {/* facebook */}
                      <a
                        href="http://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite"
                      >
                        <Image
                          src="/assets/img/icons/icon-logo-buttery-white-facebook.svg"
                          alt="facebook"
                          width={10}
                          height={17}
                          className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                        />
                        <Image
                          src="/assets/img/icons/icon-logo-black-facebook.svg"
                          alt="facebook-black"
                          width={10}
                          height={17}
                          className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                        />
                      </a>

                      {/* instagram */}
                      <a
                        href="http://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite"
                      >
                        <Image
                          src="/assets/img/icons/icon-logo-buttery-white-instagram.svg"
                          alt="instagram"
                          width={17}
                          height={18}
                          className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                        />
                        <Image
                          src="/assets/img/icons/icon-logo-black-instagram.svg"
                          alt="instagram-black"
                          width={17}
                          height={18}
                          className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                        />
                      </a>

                      {/* linkedin */}
                      <a
                        href="http://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite"
                      >
                        <Image
                          src="/assets/img/icons/icon-logo-buttery-white-linkedin.svg"
                          alt="linkedin"
                          width={17}
                          height={18}
                          className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                        />
                        <Image
                          src="/assets/img/icons/icon-logo-black-linkedin.svg"
                          alt="linkedin-black"
                          width={17}
                          height={18}
                          className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                        />
                      </a>
                    </div>
                    {/* Social Link */}
                  </div>
                </div>
              </div>
              {/* Footer Left Block */}

              {/* Footer Right Block */}
              <div>
                <span className="display-heading display-heading-5 mb-[30px] block text-colorButteryWhite">
                  Book a free consultation
                </span>
                <div className="hidden lg:inline-block mt-20">
                  <Image
                    src="/assets/img/elemnts/element-light-lime-curve-arrow.svg"
                    alt="element"
                    width={284}
                    height={153}
                    className="h-auto max-w-52 lg:inline-block xl:max-w-full -rotate-45"
                  />
                </div>
              </div>
              {/* Footer Right Block */}
            </div>
            {/* Footer Top Area */}
          </div>
          <div className="mt-10">
            <CalEmbed
              calLink="bootstrappedlabs"
              config={{
                theme: "dark", // or "light"
              }}
            />
          </div>
        </div>
        {/* Footer Top */}

        {/* Horizontal Line */}
        <div className="horizontal-line bg-[#333333]" />

        {/* Footer Bottom */}
        <div className="py-[35px]">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-4 lg:justify-between">
              {/* NOTE: Link should NOT wrap an <a> — remove inner <a> */}
              <Link href="/">
                <Image
                  src="/assets/img/logo-buttery-white.svg"
                  alt="logo-buttery-white"
                  width={121}
                  height={24}
                />
              </Link>

              {/* Copyright Text */}
              <div className="text-colorButteryWhite">
                &copy; Copyright {new Date().getFullYear()}, All Rights Reserved
                by Mthemeus
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
      </div>
    </footer>
  );
}

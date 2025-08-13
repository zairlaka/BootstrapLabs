"use client";

import Image from "next/image";
import { useState } from "react";

interface ProcessItem {
  id: number;
  number: string;
  title: string;
  description: string;
}

const processItems: ProcessItem[] = [
  {
    id: 1,
    number: "01",
    title: "Project idea",
    description:
      "The process starts with a detailed discussion with the client to understand their idea & goals.",
  },
  {
    id: 2,
    number: "02",
    title: "Brainstorming",
    description:
      "The process starts with a detailed discussion with the client to understand their idea & goals.",
  },
  {
    id: 3,
    number: "03",
    title: "Launch",
    description:
      "The process starts with a detailed discussion with the client to understand their idea & goals.",
  },
];

export default function Process() {
  const [activeItem, setActiveItem] = useState<number>(1);

  const toggleAccordion = (itemId: number) => {
    setActiveItem(activeItem === itemId ? 0 : itemId);
  };

  return (
    <section className="section-process">
      <div className="section-space">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-[1fr_minmax(0,0.67fr)] xxl:gap-x-[72px]">
            {/* Process Area Left Block - Section Block */}
            <div className="section-block text-center lg:text-start">
              <h2 className="jos">
                Our
                <span>
                  high-quality
                  <Image
                    src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="shape-light-lime-5-arms-star"
                    width={74}
                    height={70}
                    className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                  />
                </span>
                working processes
              </h2>
              <div className="jos mt-6">
                <p className="section-para">
                  We focus at every stage on effective communication and
                  collaboration between the client and ensuring that the final
                  design meets the client&apos;s objectives and expectations.
                </p>

                <p className="section-para">
                  It is important to note that these are simplified steps, and
                  the actual work process may vary depending on the complexity
                  of the project.
                </p>
              </div>
            </div>

            {/* Process Area Right Block - Accordion */}
            <div>
              <ul className="jos flex flex-col gap-y-6">
                {processItems.map((item) => (
                  <li
                    key={item.id}
                    className={`accordion-item-style-1 accordion-item ${
                      activeItem === item.id ? "active" : ""
                    }`}
                  >
                    {/* Accordion Header */}
                    <div className="accordion-header text-ColorBlack flex items-center justify-between gap-6 text-xl font-semibold">
                      <button
                        className="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-3xl"
                        onClick={() => toggleAccordion(item.id)}
                      >
                        {item.number}/ {item.title}
                      </button>
                      <div className="accordion-icon">
                        <Image
                          src="/assets/img/icons/icon-black-arrow-less-down.svg"
                          alt="icon-black-arrow-less-down"
                          width={20}
                          height={20}
                          className={`transition-transform duration-300 ${
                            activeItem === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Accordion Body */}
                    <div
                      className={`accordion-body max-w-[826px] opacity-80 transition-all duration-300 overflow-hidden ${
                        activeItem === item.id
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pt-5">{item.description}</p>
                    </div>
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

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "../public/hero.png";

const companyLogos = [
  { logo: "/th.jpeg" },
  { logo: "/Dribbble.png" },
  { logo: "/Hub.jpeg" },
  { logo: "/notion.jpeg" },
  { logo: "/netflix.png" },
  { logo: "/zoom.png" },
  // Duplicate for infinite scroll effect
  { logo: "/th.jpeg" },
  { logo: "/Dribbble.png" },
  { logo: "/Hub.jpeg" },
  { logo: "/notion.jpeg" },
  { logo: "/netflix.png" },
  { logo: "/zoom.png" },
];

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAnimation = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const animationId = setInterval(scrollAnimation, 30);
    return () => clearInterval(animationId);
  }, []);

  return (
    <>
      <section className="px-4 md:px-8 lg:px-16 pt-12 md:pt-16 pb-0">
        <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-2 gap-8">
          <div className="w-full">
            <h1 className="font-sans font-medium text-4xl md:text-5xl lg:text-[60px] leading-[100%] tracking-normal mb-8 text-center lg:text-left">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg max-w-xl mb-4 font-space font-medium text-center lg:text-left mx-auto lg:mx-0">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-darkNavy font-space text-white hover:bg-gray-800 rounded-lg px-8 py-6 w-full lg:w-auto">
                Book a consultation
              </Button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 w-full flex justify-center lg:block">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full max-w-[500px] lg:ml-12">
              <Image
                src={heroImage || "/placeholder.svg"}
                alt="Digital Marketing Illustration"
                width={500}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-white border-t border-gray-100">
        <div className="px-4 md:px-8 lg:px-16 pt-0">
          <div
            ref={scrollRef}
            className="flex flex-wrap justify-center lg:flex-nowrap gap-4 md:gap-8 items-center overflow-x-auto scrollbar-hide w-full py-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {companyLogos.slice(0, 6).map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all h-8 md:h-10 w-auto px-2 md:px-3 mb-4 lg:mb-0"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt="Company logo"
                  width={100}
                  height={40}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

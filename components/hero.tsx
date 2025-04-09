// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import heroImage from "../public/hero.png";
// const companyLogos = [
//   { name: "Amazon", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "Dribbble", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "HubSpot", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "Notion", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "Netflix", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "Zoom", logo: "/placeholder.svg?height=30&width=100" },
//   // Duplicate for infinite scroll effect
//   { name: "Amazon", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "Dribbble", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "HubSpot", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "Notion", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "Netflix", logo: "/placeholder.svg?height=30&width=100" },
//   { name: "Zoom", logo: "/placeholder.svg?height=30&width=100" },
// ];

// export default function Hero() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     const scrollAnimation = () => {
//       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//         scrollContainer.scrollLeft = 0;
//       } else {
//         scrollContainer.scrollLeft += 1;
//       }
//     };

//     const animationId = setInterval(scrollAnimation, 30);
//     return () => clearInterval(animationId);
//   }, []);

//   return (
//     <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         <div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             Navigating the digital landscape for success
//           </h1>
//           <p className="text-lg mb-8 max-w-xl">
//             Our digital marketing agency helps businesses grow and succeed
//             online through a range of services including SEO, PPC, social media
//             marketing, and content creation.
//           </p>
//           <Button className="bg-black text-white hover:bg-gray-800 rounded-lg px-8 py-6">
//             Book a consultation
//           </Button>

//           <div className="mt-16 overflow-hidden">
//             <p className="text-sm text-gray-500 mb-4">
//               Trusted by leading companies
//             </p>
//             <div
//               ref={scrollRef}
//               className="flex gap-8 items-center overflow-x-auto scrollbar-hide"
//               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//             >
//               {companyLogos.map((company, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 grayscale hover:grayscale-0 transition-all"
//                 >
//                   <Image
//                     src={company.logo || "/placeholder.svg"}
//                     alt={company.name}
//                     width={150}
//                     height={20}
//                   />
//                   <p className="text-xs text-center mt-1">{company.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="relative hidden lg:block">
//           <div className="relative h-[600px] w-full ml-12">
//             <Image
//               src={heroImage}
//               alt="Digital Marketing Illustration"
//               width={550}
//               height={300}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
        {" "}
        {/* Removed all bottom padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {" "}
          {/* Changed to items-start */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              {" "}
              {/* Reduced mb-16 to mb-8 */}
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg max-w-xl mb-4">
              {" "}
              {/* Reduced mb-6 to mb-4 */}
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-lg px-8 py-6 -ml-2">
              {" "}
              {/* Added negative margin */}
              Book a consultation
            </Button>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full ml-12">
              {" "}
              {/* Reduced height */}
              <Image
                src={heroImage}
                alt="Digital Marketing Illustration"
                width={500} /* Reduced width */
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo scroller flush against hero section */}
      <div className="w-full bg-white border-t border-gray-100">
        {" "}
        {/* Added subtle border */}
        <div className="px-4 md:px-8 lg:px-16 pt-0">
          {" "}
          {/* Removed top padding */}
          <div
            ref={scrollRef}
            className="flex gap-8 items-center overflow-x-auto scrollbar-hide w-full py-2" /* Reduced gap and added small py */
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all h-10 w-auto px-3" /* Reduced size */
              >
                <Image
                  src={company.logo}
                  alt="Company logo"
                  width={100} /* Reduced size */
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

// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import heroImage from "../public/hero.png";

// const companyLogos = [
//   { logo: "/th.jpeg" },
//   { logo: "/Dribbble.png" },
//   { logo: "/Hub.jpeg" },
//   { logo: "/notion.jpeg" },
//   { logo: "/netflix.png" },
//   { logo: "/zoom.png" },
//   // Duplicate for infinite scroll effect
//   { logo: "/th.jpeg" },
//   { logo: "/Dribbble.png" },
//   { logo: "/Hub.jpeg" },
//   { logo: "/notion.jpeg" },
//   { logo: "/netflix.png" },
//   { logo: "/zoom.png" },
// ];

// export default function Hero() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     const scrollAnimation = () => {
//       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//         scrollContainer.scrollLeft = 0;
//       } else {
//         scrollContainer.scrollLeft += 1;
//       }
//     };

//     const animationId = setInterval(scrollAnimation, 30);
//     return () => clearInterval(animationId);
//   }, []);

//   return (
//     <>
//       <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
//         <div className="flex flex-col">
//           {/* Header Content */}
//           <div className="order-1">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//               Navigating the digital landscape for success
//             </h1>
//             <p className="text-lg mb-8 max-w-xl">
//               Our digital marketing agency helps businesses grow and succeed
//               online through a range of services including SEO, PPC, social
//               media marketing, and content creation.
//             </p>
//             <Button className="bg-black text-white hover:bg-gray-800 rounded-lg px-8 py-6">
//               Book a consultation
//             </Button>
//           </div>

//           {/* Hero Image - Now visible on mobile below content */}
//           <div className="order-2 mt-8 lg:order-3 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
//             <div className="relative h-[300px] lg:h-[600px] w-full">
//               <Image
//                 src={heroImage}
//                 alt="Digital Marketing Illustration"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Full-width logo scroller section */}
//       <div className="w-full bg-gray-50 py-8">
//         <div className="px-4 md:px-8 lg:px-16">
//           <p className="text-sm text-gray-500 mb-4 text-center">
//             Trusted by leading companies
//           </p>
//           <div
//             ref={scrollRef}
//             className="flex gap-12 items-center overflow-x-auto scrollbar-hide w-full"
//             style={{
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//             }}
//           >
//             {companyLogos.map((company, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 grayscale hover:grayscale-0 transition-all h-12 w-auto px-4"
//               >
//                 <Image
//                   src={company.logo}
//                   alt="Company logo"
//                   width={120}
//                   height={48}
//                   className="h-full w-auto object-contain max-h-12"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

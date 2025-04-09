// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import card1 from "../public/card1.png";
// export default function Services() {
//   return (
//     <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
//       <div className="mb-12 flex flex-col md:flex-row md:items-center gap-4">
//         <span className="bg-limeCustom px-4 py-2 text-3xl font-semibold whitespace-nowrap rounded-lg">
//           Services
//         </span>
//         <p className="text md:max-w-2xl">
//           At our digital marketing agency, we offer a range of services to help
//           businesses grow and succeed online. These services include:
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <ServiceCard
//           title="Search engine optimization"
//           bgColor="bg-lightGray"
//           imageUrl="/placeholder.svg?height=200&width=200"
//         />
//         <ServiceCard
//           title="Pay-per-click advertising"
//           bgColor="bg-limeCustom"
//           imageUrl="/placeholder.svg?height=200&width=200"
//         />
//       </div>
//     </section>
//   );
// }

// function ServiceCard({
//   title,
//   bgColor,
//   imageUrl,
// }: {
//   title: string;
//   bgColor: string;
//   imageUrl: string;
// }) {
//   return (
//     <div className={`${bgColor} p-8 rounded-3xl relative overflow-hidden`}>
//       <div className="mb-4">
//         <span className="bg-white px-3 py-1 text-lg font-medium inline-block rounded-full">
//           {title}
//         </span>
//       </div>
//       <div className="mt-8 mb-16">
//         <Image
//           // src={imageUrl || "/placeholder.svg"}
//           src={card1}
//           alt={title}
//           width={200}
//           height={200}
//           className="object-contain"
//         />
//       </div>
//       <Link
//         href="#"
//         className="absolute bottom-8 left-8 flex items-center gap-2 group"
//       >
//         <div className="bg-black text-white p-2 rounded-full">
//           <ArrowRight size={16} />
//         </div>
//         <span className="font-medium group-hover:underline">Learn more</span>
//       </Link>
//     </div>
//   );
// }

// import { SquareArrowOutUpRight } from "lucide-react";
// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";
// import card1 from "../public/card1.png";
// import card2 from "../public/card2.png"; // Make sure this image exists

// export default function Services() {
//   return (
//     <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
//       <div className="mb-12 flex flex-col md:flex-row md:items-center gap-4">
//         <span className="bg-limeCustom px-4 py-2 text-3xl font-bold whitespace-nowrap rounded-lg">
//           Services
//         </span>
//         <p className="text md:max-w-2xl font-space">
//           At our digital marketing agency, we offer a range of services to help
//           businesses grow and succeed online. These services include:
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans font-bold">
//         <ServiceCard
//           title="Search engine optimization"
//           bgColor="bg-lightGray"
//           image={card1}
//         />
//         <ServiceCard
//           title="Pay-per-click advertising"
//           bgColor="bg-limeCustom"
//           image={card2}
//         />
//       </div>
//     </section>
//   );
// }

// function ServiceCard({
//   title,
//   bgColor,
//   image,
// }: {
//   title: string;
//   bgColor: string;
//   image: StaticImageData;
// }) {
//   return (
//     <div
//       className={`
//     ${bgColor}
//     p-5
//     rounded-3xl
//     relative
//     overflow-hidden
//     border-4
//     border-black
//     shadow-[0_4px_0_0_rgba(0,0,0,1)]
//   `}
//     >
//       <div className="flex items-center justify-between mb-3">
//         <span
//           className={`
//           text-3xl font-bold font-sans inline-block px-2 py-1 leading-tight mb-32
//           ${
//             bgColor === "bg-limeCustom"
//               ? "bg-white text-black"
//               : "bg-limeCustom text-black"
//           }
//         `}
//         >
//           {title}
//         </span>
//         <Image
//           src={image}
//           alt={title}
//           width={400}
//           height={120}
//           className="object-contain"
//         />
//       </div>

//       <Link
//         href="#"
//         className="absolute bottom-8 left-8 flex items-center gap-2 group"
//       >
//         <div className="bg-black text-white p-2 rounded-full">
//           <SquareArrowOutUpRight size={16} />
//         </div>
//         <span className="font-medium group-hover:underline">Learn more</span>
//       </Link>
//     </div>
//   );
// }

import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import card1 from "../public/card1.png";
import card2 from "../public/card2.png"; // Make sure this image exists

export default function Services() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="mb-12 flex flex-col items-center md:flex-row md:items-center gap-4 text-center md:text-left">
        <span className="bg-limeCustom px-4 py-2 text-3xl font-bold whitespace-nowrap rounded-lg">
          Services
        </span>
        <p className="text md:max-w-2xl font-space mt-2 md:mt-0">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans font-bold">
        <ServiceCard
          title="Search engine optimization"
          bgColor="bg-lightGray"
          image={card1}
        />
        <ServiceCard
          title="Pay-per-click advertising"
          bgColor="bg-limeCustom"
          image={card2}
        />
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  bgColor,
  image,
}: {
  title: string;
  bgColor: string;
  image: StaticImageData;
}) {
  return (
    <div
      className={`
    ${bgColor} 
    p-5 
    rounded-3xl 
    relative 
    overflow-hidden 
    border-4 
    border-black 
    shadow-[0_4px_0_0_rgba(0,0,0,1)]
  `}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
        <span
          className={`
          text-2xl md:text-3xl font-bold font-sans inline-block px-2 py-1 leading-tight mb-6 md:mb-32
          ${
            bgColor === "bg-limeCustom"
              ? "bg-white text-black"
              : "bg-limeCustom text-black"
          }   
        `}
        >
          {title}
        </span>
        <div className="mt-4 md:mt-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={120}
            className="object-contain"
          />
        </div>
      </div>

      <Link
        href="#"
        className="absolute bottom-8 left-8 flex items-center gap-2 group"
      >
        <div className="bg-black text-white p-2 rounded-full">
          <SquareArrowOutUpRight size={16} />
        </div>
        <span className="font-medium group-hover:underline">Learn more</span>
      </Link>
    </div>
  );
}

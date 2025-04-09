// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Facebook, Linkedin, Twitter } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white px-4 md:px-8 lg:px-16 py-12">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between mb-12">
//           <div className="mb-8 md:mb-0">
//             <Link href="/" className="flex items-center mb-6">
//               <div className="w-8 h-8 bg-white flex items-center justify-center rotate-45">
//                 <div className="w-4 h-4 bg-black"></div>
//               </div>
//               <span className="ml-2 text-2xl font-bold">Positivus</span>
//             </Link>

//             <div className="flex gap-4 mb-8">
//               <Link href="/about" className="hover:text-lime-400">
//                 About us
//               </Link>
//               <Link href="/services" className="hover:text-lime-400">
//                 Services
//               </Link>
//               <Link href="/use-cases" className="hover:text-lime-400">
//                 Use Cases
//               </Link>
//               <Link href="/pricing" className="hover:text-lime-400">
//                 Pricing
//               </Link>
//               <Link href="/blog" className="hover:text-lime-400">
//                 Blog
//               </Link>
//             </div>

//             <div className="flex gap-4">
//               <Link
//                 href="https://linkedin.com"
//                 className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900"
//               >
//                 <Linkedin size={16} />
//               </Link>
//               <Link
//                 href="https://facebook.com"
//                 className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900"
//               >
//                 <Facebook size={16} />
//               </Link>
//               <Link
//                 href="https://twitter.com"
//                 className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900"
//               >
//                 <Twitter size={16} />
//               </Link>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <div className="bg-lime-400 text-black px-3 py-1 text-sm font-medium inline-block rounded-full mb-4">
//                 Contact us:
//               </div>
//               <div className="space-y-2">
//                 <p>Email: info@positivus.com</p>
//                 <p>Phone: 555-567-8901</p>
//                 <p>Address: 1234 Main St</p>
//                 <p>Moonstone City, Stardust State 12345</p>
//               </div>
//             </div>

//             <div className="bg-gray-800 p-6 rounded-lg">
//               <div className="space-y-4">
//                 <Input
//                   type="email"
//                   placeholder="Email"
//                   className="bg-transparent border-gray-600 rounded-md focus:border-lime-400"
//                 />
//                 <Button className="w-full bg-lime-400 text-black hover:bg-lime-500">Subscribe to news</Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
//           <p>© 2023 Positivus. All Rights Reserved.</p>
//           <Link href="/privacy-policy" className="hover:text-lime-400 mt-2 md:mt-0">
//             Privacy Policy
//           </Link>
//         </div>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 md:px-8 lg:px-16 py-12 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Navbar with Logo and Menu */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          {/* Logo + Nav Menu */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {/* Image from public folder */}
              <img
                src="/logo.png"
                alt="Positivus Logo"
                className="h-8 w-8 object-contain" // Adjust size as needed
              />

              <span className="ml-2 text-2xl font-bold">Positivus</span>
            </Link>

            {/* Navigation - grows to take available space */}
            <nav className="flex flex-wrap gap-5 md:gap-8 flex-1 ml-28">
              <Link
                href="/about"
                className="hover:text-lime-400 whitespace-nowrap"
              >
                About us
              </Link>
              <Link
                href="/services"
                className="hover:text-lime-400 whitespace-nowrap"
              >
                Services
              </Link>
              <Link
                href="/use-cases"
                className="hover:text-lime-400 whitespace-nowrap"
              >
                Use Cases
              </Link>
              <Link
                href="/pricing"
                className="hover:text-lime-400 whitespace-nowrap"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="hover:text-lime-400 whitespace-nowrap"
              >
                Blog
              </Link>
            </nav>

            {/* Social Icons - pushed to the right */}
            <div className="flex gap-4 ml-96">
              <Link
                href="https://linkedin.com"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900"
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="https://facebook.com"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="https://twitter.com"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900"
              >
                <Twitter size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Section - Contact + Subscribe */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            {/* Contact Us Label */}
            <div className="bg-lime-400  text-black px-2 py-1 text-sm font-medium rounded-3xl whitespace-nowrap ">
              Contact us:
            </div>

            {/* Contact Info Container */}
            <div className="flex flex-col gap-1 text-sm">
              <span>Email: info@positivus.com</span>
              <span>Phone: 555-567-8901</span>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City,Stardust State 12345</p>
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="bg-gray-800 p-14 rounded-md">
            {" "}
            {/* Background container */}
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Email"
                className="bg-gray-800 border-white rounded-md focus:border-lime-400 md:min-w-[300px] text-white"
              />
              <Button className="bg-lime-400 text-black hover:bg-lime-500 whitespace-nowrap">
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section - Social + Address + Copyright */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Social Icons */}

          {/* Copyright + Legal */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2">
            <p className="text-sm">© 2023 Positivus. All Rights Reserved.</p>
            <Link
              href="/privacy-policy"
              className="hover:text-lime-400 text-sm  ml-10"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darkNavy text-white px-4 md:px-8 lg:px-16 py-12 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mb-8 gap-6">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-12">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Positivus Logo"
                className="h-8 w-8 object-contain"
              />

              <span className="ml-2 text-2xl font-bold">Positivus</span>
            </Link>

            <nav className="flex flex-col md:flex-row items-center md:flex-wrap gap-4 md:gap-5 lg:gap-8 font-space">
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
          </div>

          <div className="hidden md:flex gap-4">
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

        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8 mb-8 font-space">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="bg-limeCustom text-black px-2 py-1 text-sm font-medium rounded-3xl whitespace-nowrap">
              Contact us:
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <span>Email: info@positivus.com</span>
              <span>Phone: 555-567-8901</span>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>

          <div className="bg-[#292A32] p-6 md:p-14 rounded-md w-full md:w-auto">
            <div className="flex flex-col gap-4 w-full">
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#292A32] border-white rounded-md focus:border-lime-400 w-full text-white"
              />
              <Button className="bg-limeCustom text-black hover:bg-lime-500 whitespace-nowrap w-full">
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-6 md:hidden">
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

        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            © 2023 Positivus. All Rights Reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-lime-400 text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

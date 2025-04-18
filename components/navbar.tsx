"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-4 md:px-8 lg:px-16 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/ss1.png"
            alt="Positivus Icon"
            className="ml-2 h-8 w-8 md:h-10 md:w-10 object-contain" // Smaller on mobile
          />

          <span className="ml-2 text-xl md:text-2xl font-bold">Positivus</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 lg:space-x-16 font-sans">
        <Link
          href="/about"
          className="hover:underline underline-offset-4 decoration-lime-400 decoration-2"
        >
          About us
        </Link>
        <Link
          href="/services"
          className="hover:underline underline-offset-4 decoration-lime-400 decoration-2"
        >
          Services
        </Link>
        <Link
          href="/use-cases"
          className="hover:underline underline-offset-4 decoration-lime-400 decoration-2"
        >
          Use Cases
        </Link>
        <Link
          href="/pricing"
          className="hover:underline underline-offset-4 decoration-lime-400 decoration-2"
        >
          Pricing
        </Link>
        <Link
          href="/blog"
          className="hover:underline underline-offset-4 decoration-lime-400 decoration-2"
        >
          Blog
        </Link>
        <Button variant="outline" className="rounded-full border-2 px-6">
          Request a quote
        </Button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white z-50 p-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="hover:text-lime-400">
              About us
            </Link>
            <Link href="/services" className="hover:text-lime-400">
              Services
            </Link>
            <Link href="/use-cases" className="hover:text-lime-400">
              Use Cases
            </Link>
            <Link href="/pricing" className="hover:text-lime-400">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-lime-400">
              Blog
            </Link>
            <Button variant="outline" className="rounded-full border-2 w-full">
              Request a quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

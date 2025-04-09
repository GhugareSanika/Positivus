"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    text: "Positivus transformed our digital marketing strategy completely. Their SEO expertise helped us rank higher for our key terms, and their PPC campaigns delivered an impressive ROI. Their team is knowledgeable, dedicated, and a pleasure to work with.",
    author: "Sarah Johnson",
    position: "CEO at ABC Solutions",
  },
  {
    id: 3,
    text: "The social media strategy Positivus developed for us increased our engagement by over 200%. They understand our brand voice perfectly and create content that resonates with our audience. Their data-driven approach ensures we're always optimizing our campaigns.",
    author: "Michael Brown",
    position: "Brand Manager at 123 Industries",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="mb-12 flex flex-row items-center gap-4">
        <span className="bg-lime-400 px-4 py-2 text-3xl font-semibold inline-block rounded-lg">
          Testimonials
        </span>
        <p className="text md:max-w-2xl">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 max-w-full mx-auto overflow-hidden">
        <div
          ref={testimonialRef}
          className="min-h-[350px] flex items-center justify-center"
        >
          <div
            className="max-w-4xl mx-auto text-center transition-all duration-500"
            style={{ transform: `translateX(${-activeIndex * 100}%)` }}
          >
            <div
              className="flex transition-transform duration-500"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="border border-lime-400 rounded-3xl p-14 mb-8">
                    <p className="text-lg md:text-xl">"{testimonial.text}"</p>
                  </div>
                  <div className="border-t border-lime-400 pt-4 inline-block">
                    <p className="text-lime-400 font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-lime-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

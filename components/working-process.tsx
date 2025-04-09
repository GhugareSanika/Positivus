"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function WorkingProcess() {
  const [openStep, setOpenStep] = useState(1);

  const toggleStep = (stepNumber: number) => {
    if (openStep === stepNumber) {
      return;
    }
    setOpenStep(stepNumber);
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="mb-12 flex flex-col items-center md:flex-row md:items-center gap-4 text-center md:text-left">
        <span className="bg-limeCustom px-4 py-2 text-3xl font-bold whitespace-nowrap rounded-lg">
          Our Working Process
        </span>
        <p className="text md:max-w-2xl font-space mt-2 md:mt-0">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="max-w-full mx-auto">
        <WorkingProcessStep
          number="01"
          title="Consultation"
          isOpen={openStep === 1}
          onClick={() => toggleStep(1)}
          description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />

        <WorkingProcessStep
          number="02"
          title="Research and Strategy Development"
          isOpen={openStep === 2}
          onClick={() => toggleStep(2)}
          description="Our team conducts thorough research on your industry, competitors, and target audience to develop a comprehensive digital marketing strategy tailored to your specific needs and goals."
        />
      </div>
    </section>
  );
}

function WorkingProcessStep({
  number,
  title,
  isOpen,
  onClick,
  description,
}: {
  number: string;
  title: string;
  isOpen: boolean;
  onClick: () => void;
  description: string;
}) {
  return (
    <div
      className={`mb-6 rounded-3xl overflow-hidden font-space border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
        isOpen ? "bg-limeCustom" : "bg-lightGray"
      }`}
    >
      <div className="p-4 md:p-8">
        {!isOpen && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 md:gap-6">
              <span className="text-3xl md:text-5xl font-bold">{number}</span>
              <span className="text-lg md:text-2xl font-semibold">{title}</span>
            </div>
            <button
              onClick={onClick}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black flex items-center justify-center"
            >
              <Plus size={16} className="md:hidden" />
              <Plus size={20} className="hidden md:block" />
            </button>
          </div>
        )}

        {isOpen && (
          <>
            <div className="border-t-2 border-black mb-6 hidden md:block"></div>
            <p className="text-base md:text-lg mb-6 hidden md:block">
              {description}
            </p>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-3 md:gap-6">
                <span className="text-3xl md:text-5xl font-bold">{number}</span>
                <span className="text-lg md:text-2xl font-semibold">
                  {title}
                </span>
              </div>
              <div className="flex justify-end mb-2">
                <button
                  onClick={onClick}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black flex items-center justify-center"
                >
                  <Minus size={16} className="md:hidden" />
                  <Minus size={20} className="hidden md:block" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

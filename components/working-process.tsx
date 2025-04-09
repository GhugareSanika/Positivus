"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function WorkingProcess() {
  const [openStep, setOpenStep] = useState(1);

  const toggleStep = (stepNumber: number) => {
    if (openStep === stepNumber) {
      // Don't close if it's already open - keep at least one open
      return;
    }
    setOpenStep(stepNumber);
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="mb-12 flex flex-row items-center gap-4">
        <span className="bg-lime-400 px-4 py-2 text-3xl font-semibold whitespace-nowrap rounded-lg">
          Our Working Process
        </span>
        <p className="text md:max-w-2xl">
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
      className={`mb-6 rounded-3xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
        isOpen ? "bg-lime-400" : "bg-gray-100"
      }`}
    >
      <div className="p-8">
        {/* Header - shows only when closed */}
        {!isOpen && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="text-5xl font-bold">{number}</span>
              <span className="text-2xl font-semibold">{title}</span>
            </div>
            <button
              onClick={onClick}
              className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center"
            >
              <Plus size={20} />
            </button>
          </div>
        )}

        {/* Expanded content - shows when open */}
        {isOpen && (
          <>
            <div className="border-t-2 border-black mb-6"></div>
            <p className="text-lg mb-6">{description}</p>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-6">
                <span className="text-5xl font-bold">{number}</span>
                <span className="text-2xl font-semibold">{title}</span>
              </div>
              <div className="flex justify-end mb-2">
                <button
                  onClick={onClick}
                  className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center"
                >
                  <Minus size={20} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

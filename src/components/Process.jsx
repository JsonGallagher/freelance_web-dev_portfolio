/**
 * Process.jsx
 *
 * "How I Work" section showing the development process.
 * Features:
 * - Step-by-step timeline
 * - Icons for each phase
 * - Connecting lines between steps
 * - Clear descriptions
 */

import {
  HiOutlineLightBulb,
  HiOutlinePencil,
  HiOutlineCode,
  HiOutlineSparkles,
} from "react-icons/hi";
import { processSteps } from "../data/process";

// Map icon names to components
const iconMap = {
  HiOutlineLightBulb,
  HiOutlinePencil,
  HiOutlineCode,
  HiOutlineRocketLaunch: HiOutlineSparkles, // Fallback since hi doesn't have rocket
};

function ProcessStep({ step, index, isLast }) {
  const IconComponent = iconMap[step.icon] || HiOutlineLightBulb;

  return (
    <div className="relative">
      {/* Connecting line (not on last item) */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-16 left-1/2 w-px h-full
                     bg-gradient-to-b from-primary-200 to-transparent"
          aria-hidden="true"
        />
      )}

      <div
        className="relative flex flex-col md:flex-row md:items-start gap-6 
                   p-6 md:p-8 rounded-2xl
                   hover:bg-white hover:shadow-soft
                   transition-all duration-300 group"
      >
        {/* Step number and icon */}
        <div className="flex-shrink-0 flex flex-col items-center">
          {/* Number badge */}
          <span className="font-mono text-sm font-bold text-accent-600 mb-3">
            {step.number}
          </span>

          {/* Icon circle */}
          <div
            className="w-16 h-16 flex items-center justify-center
                       bg-white rounded-2xl shadow-soft
                       border-2 border-primary-100
                       group-hover:border-accent-200 group-hover:shadow-accent
                       transition-all duration-300"
          >
            <IconComponent
              className="w-7 h-7 text-primary-600 group-hover:text-accent-600
                         transition-colors duration-300"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:pt-6">
          <h3 className="font-display text-xl font-semibold text-primary-900 mb-3">
            {step.title}
          </h3>
          <p className="text-primary-600 leading-relaxed max-w-md">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 
                   bg-gradient-to-r from-accent-50/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <header className="max-w-2xl mx-auto text-center mb-16">
          <span
            className="inline-block text-sm font-mono font-medium 
                       text-accent-600 uppercase tracking-wider mb-4"
          >
            My Process
          </span>
          <h2
            id="process-heading"
            className="heading-display text-display-md mb-6"
          >
            How we'll work together
          </h2>
          <p className="text-lg text-primary-600 leading-relaxed">
            A clear, collaborative process that keeps you informed every step of
            the way. No surprises, just results.
          </p>
        </header>

        {/* Process steps */}
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4 md:gap-2">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-soft border border-neutral-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-primary-900 mb-2">
                Typical project timeline
              </h3>
              <p className="text-primary-600">
                Most projects are completed within 4-8 weeks, depending on
                complexity.
              </p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;

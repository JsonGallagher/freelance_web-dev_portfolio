/**
 * Hero.jsx
 *
 * The hero section - first thing visitors see.
 * Features:
 * - Strong value proposition headline
 * - Subheadline targeting the audience
 * - Primary and secondary CTAs
 * - Decorative geometric elements
 */

import { HiArrowRight, HiOutlinePlay } from "react-icons/hi";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Gradient orbs for visual interest */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 
                   bg-accent-200/30 rounded-full blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 
                   bg-primary-200/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          {/* Eyebrow / tagline */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8
                       bg-white/80 backdrop-blur-sm rounded-full
                       border border-neutral-200 shadow-soft
                       animate-fade-in"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700">
              Available for new projects
            </span>
          </div>
          {/* Main headline */}
          <h1
            id="hero-heading"
            className="heading-display text-display-lg md:text-display-xl mb-6
                       animate-fade-in-up stagger-1"
          >
            I build websites that{" "}
            <span className="relative">
              <span className="text-gradient">turn visitors</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-accent-300"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            into customers
          </h1>
          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-primary-600 max-w-2xl mb-10
                       leading-relaxed animate-fade-in-up stagger-2"
          >
            Custom web development for startups and small businesses. I create
            fast, beautiful, and user-friendly experiences that help your
            business grow.
          </p>
          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4
                       animate-fade-in-up stagger-3"
          >
            <a href="#contact" className="btn-primary text-lg px-8 py-4 group">
              Get a Free Quote
              <HiArrowRight
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2
                     hidden md:flex flex-col items-center gap-2
                     animate-fade-in stagger-5"
        >
          <span className="text-xs text-primary-500 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-300 p-1">
            <div
              className="w-1.5 h-1.5 bg-primary-400 rounded-full 
                         animate-bounce mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

/**
 * Navbar.jsx
 *
 * Sticky navigation component with:
 * - Logo/brand on the left
 * - Navigation links that smooth-scroll to sections
 * - Mobile hamburger menu
 * - Visual feedback when scrolled (background change)
 */

import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { navLinks } from "../data/navigation";

function Navbar() {
  // Track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track if user has scrolled past the hero section
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled past 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-[60]
          transition-all duration-300
          ${
            isScrolled
              ? "bg-neutral-50/95 backdrop-blur-sm shadow-sm py-4"
              : "bg-transparent py-6"
          }
          ${isMenuOpen ? "bg-neutral-50" : ""}
        `}
        role="banner"
      >
        <nav
          className="container-custom flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={handleLinkClick}
            className="font-display text-xl font-semibold text-primary-900
                       hover:text-accent-600 transition-colors duration-200"
          >
            <span className="text-accent-500">{"{"}</span>
            Jason Gallagher
            <span className="text-accent-500">{"}"}</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-primary-600
                            hover:text-accent-600 transition-colors duration-200
                            link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* CTA Button */}
            <li className="ml-4">
              <a href="#contact" className="btn-primary text-sm">
                Let's Talk
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary-900
                       hover:text-accent-600 transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay - MOVED OUTSIDE HEADER */}
      <div
        id="mobile-menu"
        className={`
          fixed inset-0 bg-neutral-50 z-[55]
          flex flex-col items-center justify-center
          pt-24
          transition-all duration-300 md:hidden
          ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
        aria-hidden={!isMenuOpen}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`
                transform transition-all duration-300
                ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-display font-medium text-primary-900
                          hover:text-accent-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Mobile CTA */}
          <li
            className={`
              mt-4 transform transition-all duration-300
              ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
            style={{
              transitionDelay: isMenuOpen ? `${navLinks.length * 50}ms` : "0ms",
            }}
          >
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-primary text-lg"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

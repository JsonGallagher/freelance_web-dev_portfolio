/**
 * Footer.jsx
 *
 * Site footer with:
 * - Copyright notice
 * - Social links
 * - Back to top link
 * - Quick navigation
 */

import { HiOutlineCode, HiOutlineMail, HiArrowUp } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { navLinks } from "../data/navigation";

// Social links with icons
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedinIn,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: FaTwitter,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary-900 text-white" role="contentinfo">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a
              href="#hero"
              className="inline-block font-display text-xl font-semibold mb-4
                         hover:text-accent-400 transition-colors duration-200"
            >
              <span className="text-accent-400">{"{"}</span>
              Jason Gallagher
              <span className="text-accent-400">{"}"}</span>
            </a>

            <p className="text-primary-300 max-w-sm mb-6">
              Building beautiful, fast, and user-friendly websites that help
              businesses grow.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center
                               bg-primary-800 rounded-lg
                               text-primary-300 hover:text-white
                               hover:bg-accent-600
                               transition-all duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}

              {/* Email link */}
              <a
                href="mailto:hello@yourdomain.com"
                className="w-10 h-10 flex items-center justify-center
                           bg-primary-800 rounded-lg
                           text-primary-300 hover:text-white
                           hover:bg-accent-600
                           transition-all duration-200"
                aria-label="Email"
              >
                <HiOutlineMail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-primary-300 hover:text-white
                                 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-primary-300">
              <li>
                <a
                  href="mailto:jason@jasongallagher.co"
                  className="hover:text-white transition-colors duration-200"
                >
                  jason@jasongallagher.co
                </a>
              </li>
              <li>Colorado Springs, Colorado</li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Available for projects
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-primary-400">
              © {currentYear} Jason Gallagher. All rights reserved.
            </p>

            {/* Additional links */}
            <div className="flex items-center gap-6 text-sm text-primary-400">
              <span className="flex items-center gap-1">
                Built with
                <span className="text-accent-400" aria-label="love">
                  ♥
                </span>
                and React
              </span>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-primary-300
                          hover:text-white transition-colors duration-200"
                aria-label="Back to top"
              >
                <HiArrowUp className="w-4 h-4" aria-hidden="true" />
                Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

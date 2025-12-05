/**
 * App.jsx
 *
 * Main application component that brings together all sections.
 * This is a single-page application (SPA) with multiple sections
 * that users can navigate to via smooth scrolling.
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* 
        Skip link for keyboard users - allows jumping directly to main content.
        This is an important accessibility feature.
      */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-500 focus:text-white 
                   focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Navbar is sticky and always visible */}
      <Navbar />

      {/* Main content wrapper */}
      <main id="main-content">
        {/* Each section has an ID for navigation anchors */}
        <Hero />
        <Services />
        {/* <Portfolio /> */}
        <About />
        <Process />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

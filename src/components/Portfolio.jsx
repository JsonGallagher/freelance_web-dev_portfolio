/**
 * Portfolio.jsx
 * 
 * Portfolio/Work section showcasing completed projects.
 * Features:
 * - Responsive grid layout
 * - Project cards with hover effects
 * - Tech stack tags
 * - Results/metrics for credibility
 */

import { HiOutlineExternalLink, HiArrowRight } from 'react-icons/hi'
import { projects } from '../data/projects'

function ProjectCard({ project, index, isFeatured }) {
  // Color variations for visual interest
  const colorVariants = [
    'from-accent-100 to-accent-50',
    'from-primary-100 to-primary-50',
    'from-amber-100 to-amber-50',
    'from-emerald-100 to-emerald-50',
    'from-violet-100 to-violet-50',
    'from-rose-100 to-rose-50'
  ]
  
  const bgGradient = colorVariants[index % colorVariants.length]

  return (
    <article 
      className={`
        group relative overflow-hidden rounded-2xl
        border border-neutral-200 bg-white
        hover:shadow-soft-lg hover:border-neutral-300
        transition-all duration-500
        ${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}
      `}
    >
      {/* Project preview area - gradient placeholder */}
      <div 
        className={`
          relative h-48 md:h-56 overflow-hidden
          bg-gradient-to-br ${bgGradient}
        `}
      >
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-30" 
          aria-hidden="true"
        />
        
        {/* Decorative shapes */}
        <div 
          className="absolute -bottom-10 -right-10 w-40 h-40 
                     bg-white/30 rounded-full blur-2xl
                     group-hover:scale-150 transition-transform duration-700"
          aria-hidden="true"
        />
        
        {/* Category badge */}
        <span 
          className="absolute top-4 left-4 px-3 py-1 
                     bg-white/90 backdrop-blur-sm rounded-full
                     text-xs font-medium text-primary-700"
        >
          {project.category}
        </span>

        {/* Hover overlay with link */}
        <div 
          className="absolute inset-0 bg-primary-900/0 
                     group-hover:bg-primary-900/80
                     flex items-center justify-center
                     transition-all duration-300"
        >
          <a
            href={project.link}
            className="opacity-0 group-hover:opacity-100
                       transform translate-y-4 group-hover:translate-y-0
                       transition-all duration-300 delay-100
                       btn bg-white text-primary-900
                       hover:bg-neutral-100"
            aria-label={`View case study for ${project.title}`}
          >
            View Case Study
            <HiOutlineExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Project info */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-primary-900 mb-2">
          {project.title}
        </h3>
        
        <p className="text-primary-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Results highlight */}
        <div 
          className="flex items-center gap-2 mb-4 py-2 px-3 
                     bg-green-50 rounded-lg text-sm"
        >
          <svg 
            className="w-4 h-4 text-green-600 flex-shrink-0" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
            />
          </svg>
          <span className="text-green-800 font-medium">
            {project.results}
          </span>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function Portfolio() {
  return (
    <section 
      id="portfolio"
      className="section-padding relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Background accent */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full 
                   bg-gradient-to-l from-accent-50/50 to-transparent"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <header className="max-w-2xl mb-16">
          <span 
            className="inline-block text-sm font-mono font-medium 
                       text-accent-600 uppercase tracking-wider mb-4"
          >
            Recent Work
          </span>
          <h2 
            id="portfolio-heading"
            className="heading-display text-display-md mb-6"
          >
            Projects that deliver real results
          </h2>
          <p className="text-lg text-primary-600 leading-relaxed">
            Each project is a collaboration focused on solving real business challenges. 
            Here are some of my favorite recent builds.
          </p>
        </header>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isFeatured={project.featured}
            />
          ))}
        </div>

        {/* View more CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 font-medium 
                       text-accent-600 hover:text-accent-700
                       transition-colors duration-200 group"
          >
            Have a project in mind? Let's discuss
            <HiArrowRight 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

/**
 * Testimonials.jsx
 * 
 * Client testimonials section for social proof.
 * Features:
 * - Quote cards with client info
 * - Visual variety with different styling
 * - Hover effects
 */

import { HiStar } from 'react-icons/hi'
import { testimonials } from '../data/testimonials'

function TestimonialCard({ testimonial, index }) {
  // Alternating accent colors for visual variety
  const accentVariants = [
    'border-l-accent-400',
    'border-l-primary-400',
    'border-l-amber-400'
  ]
  const accent = accentVariants[index % accentVariants.length]

  return (
    <article 
      className={`
        card border-l-4 ${accent}
        hover:scale-[1.02] transition-transform duration-300
      `}
    >
      {/* Star rating */}
      <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <HiStar 
            key={i} 
            className="w-5 h-5 text-amber-400" 
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote>
        <p className="text-primary-700 leading-relaxed mb-6">
          "{testimonial.quote}"
        </p>
      </blockquote>

      {/* Client info */}
      <footer className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div 
          className="w-12 h-12 rounded-full bg-gradient-to-br 
                     from-primary-200 to-primary-300
                     flex items-center justify-center
                     text-primary-600 font-display font-semibold"
          aria-hidden="true"
        >
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <div>
          <cite className="not-italic">
            <span className="block font-medium text-primary-900">
              {testimonial.name}
            </span>
            <span className="text-sm text-primary-500">
              {testimonial.role}, {testimonial.company}
            </span>
          </cite>
        </div>
      </footer>
    </article>
  )
}

function Testimonials() {
  return (
    <section 
      id="testimonials"
      className="section-padding bg-neutral-100 relative"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        {/* Section header */}
        <header className="max-w-2xl mb-16">
          <span 
            className="inline-block text-sm font-mono font-medium 
                       text-accent-600 uppercase tracking-wider mb-4"
          >
            Testimonials
          </span>
          <h2 
            id="testimonials-heading"
            className="heading-display text-display-md mb-6"
          >
            Kind words from clients
          </h2>
          <p className="text-lg text-primary-600 leading-relaxed">
            Don't just take my word for it—here's what people I've worked with 
            have to say about our collaboration.
          </p>
        </header>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>

        {/* Trust badges / additional social proof */}
        <div className="mt-16 pt-8 border-t border-neutral-300 text-center">
          <p className="text-sm text-primary-500 mb-4">
            Trusted by businesses across industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Industry badges */}
            {['E-commerce', 'SaaS', 'Professional Services', 'Healthcare', 'Education'].map((industry) => (
              <span 
                key={industry}
                className="px-4 py-2 bg-white rounded-lg text-sm
                          text-primary-600 border border-neutral-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

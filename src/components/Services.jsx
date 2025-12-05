/**
 * Services.jsx
 * 
 * Services section displaying offerings in a responsive grid.
 * Each service card includes:
 * - Icon
 * - Title
 * - Description
 * - List of benefits
 * 
 * The component maps over data from services.js for easy updates.
 */

import { 
  HiOutlineCode, 
  HiOutlineSparkles, 
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineTemplate,
  HiOutlineSupport
} from 'react-icons/hi'
import { services } from '../data/services'

// Map icon names to actual icon components
const iconMap = {
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineTemplate,
  HiOutlineSupport
}

function ServiceCard({ service, index }) {
  // Get the icon component from the map
  const IconComponent = iconMap[service.icon] || HiOutlineCode

  return (
    <article 
      className="card group relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover accent bar */}
      <div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r 
                   from-accent-400 to-accent-600 transform origin-left 
                   scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        aria-hidden="true"
      />

      {/* Icon container */}
      <div 
        className="w-14 h-14 flex items-center justify-center
                   bg-accent-50 text-accent-600 rounded-xl mb-6
                   group-hover:bg-accent-100 group-hover:scale-110
                   transition-all duration-300"
      >
        <IconComponent className="w-7 h-7" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-primary-900 mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-primary-600 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Benefits list */}
      <ul className="space-y-2" role="list">
        {service.benefits.map((benefit, i) => (
          <li 
            key={i}
            className="flex items-start gap-3 text-sm text-primary-700"
          >
            <svg 
              className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function Services() {
  return (
    <section 
      id="services"
      className="section-padding bg-white relative"
      aria-labelledby="services-heading"
    >
      {/* Background decoration */}
      <div 
        className="absolute inset-0 bg-dots-pattern opacity-30" 
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <header className="max-w-2xl mb-16">
          <span 
            className="inline-block text-sm font-mono font-medium 
                       text-accent-600 uppercase tracking-wider mb-4"
          >
            What I Do
          </span>
          <h2 
            id="services-heading"
            className="heading-display text-display-md mb-6"
          >
            Services tailored for growing businesses
          </h2>
          <p className="text-lg text-primary-600 leading-relaxed">
            Whether you need a complete website from scratch or want to improve 
            an existing one, I offer flexible services to match your needs and budget.
          </p>
        </header>

        {/* Services grid */}
        <div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-primary-600 mb-6">
            Not sure what you need? Let's figure it out together.
          </p>
          <a href="#contact" className="btn-primary">
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

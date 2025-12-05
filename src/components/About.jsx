/**
 * About.jsx
 *
 * About section with personal bio, skills, and experience.
 * Features:
 * - Personal story/bio
 * - Skills grid with icons
 * - Experience highlights
 * - Personal touch elements
 */

import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineColorSwatch,
  HiOutlineDatabase,
  HiOutlineCog,
  HiOutlineBeaker,
} from "react-icons/hi";

// Skills data with categories
const skills = [
  {
    category: "Frontend",
    icon: HiOutlineCode,
    items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: HiOutlineDatabase,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Design",
    icon: HiOutlineColorSwatch,
    items: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility"],
  },
  {
    category: "Tools",
    icon: HiOutlineCog,
    items: ["Git", "Vercel", "AWS", "Docker", "CI/CD"],
  },
];

// Experience highlights
const highlights = [
  { number: "15+", label: "Years of experience" },
  { number: "10+", label: "Projects completed" },
  { number: "99.9%", label: "Client satisfaction" },
];

function About() {
  return (
    <section
      id="about"
      className="section-padding bg-primary-900 text-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column - Bio */}
          <div>
            <span
              className="inline-block text-sm font-mono font-medium 
                         text-accent-400 uppercase tracking-wider mb-4"
            >
              About Me
            </span>
            <h2
              id="about-heading"
              className="font-display text-display-md mb-8 text-white"
            >
              Hi, I'm <span className="text-accent-400">Jason Gallagher</span>
            </h2>
            <div className="space-y-6 text-primary-200 leading-relaxed">
              <p className="text-lg">
                I'm a web developer based in Colorado Springs, CO who's
                passionate about building beautiful, fast, and user-friendly
                websites that help businesses succeed online.
              </p>

              <p>
                For the past five years, I've worked with startups and small
                businesses to turn their ideas into reality. I love the
                challenge of understanding what makes each business unique and
                translating that into a website that connects with their
                audience.
              </p>

              <p>
                When I'm not coding, you'll find me exploring hiking trails,
                experimenting with new recipes, or shooting photos/video. I
                believe in continuous learning and staying curious about new
                tech and design trends.
              </p>
            </div>
          </div>

          {/* Right column - Skills */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-8 text-white">
              Tools & Technologies
            </h3>

            <div className="space-y-8">
              {skills.map((skillGroup) => {
                const IconComponent = skillGroup.icon;
                return (
                  <div key={skillGroup.category}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 flex items-center justify-center
                                   bg-primary-800 rounded-lg"
                      >
                        <IconComponent
                          className="w-5 h-5 text-accent-400"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-medium text-white">
                        {skillGroup.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 pl-13">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm font-mono
                                     bg-primary-800/80 text-primary-200
                                     rounded-lg border border-primary-700
                                     hover:border-accent-500/50 hover:bg-primary-800
                                     transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fun fact / personal touch */}
            <div
              className="mt-12 p-6 bg-primary-800/50 rounded-2xl
                         border border-primary-700"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl" role="img" aria-label="Coffee">
                  ☕
                </span>
                <div>
                  <h4 className="font-medium text-white mb-2">Fun fact</h4>
                  <p className="text-primary-300 text-sm">
                    This website was built while consuming approximately 47 cups
                    of coffee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

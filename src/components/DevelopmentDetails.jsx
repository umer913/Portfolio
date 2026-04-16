import { motion } from "framer-motion";

const developmentTracks = [
  {
    title: "Frontend Engineering",
    summary:
      "Crafting responsive interfaces with clean component architecture, accessibility-first choices, and strong visual consistency.",
    points: [
      "Reusable React components with modular structure",
      "Performance-aware rendering and layout stability",
      "Responsive behavior for desktop, tablet, and mobile"
    ]
  },
  {
    title: "Backend and APIs",
    summary:
      "Building API layers that are maintainable, secure, and easy to scale as product requirements evolve.",
    points: [
      "REST endpoint design with clear resource modeling",
      "Authentication, validation, and error handling strategy",
      "Separation of concerns across routes, controllers, and services"
    ]
  },
  {
    title: "Data and Persistence",
    summary:
      "Designing practical data models and query patterns for reliable application behavior and long-term maintainability.",
    points: [
      "MongoDB and SQL schema planning",
      "Index and query optimization fundamentals",
      "Consistent data flow from API to UI"
    ]
  },
  {
    title: "Security-focused Development",
    summary:
      "Applying security thinking during implementation rather than after delivery to reduce risks from the start.",
    points: [
      "Input sanitization and secure defaults",
      "Role-based access and endpoint protection",
      "Awareness of OWASP-style web vulnerabilities"
    ]
  }
];

const processSteps = [
  "Requirements breakdown into clear feature scopes",
  "Wireframing and component planning",
  "Incremental implementation with version control discipline",
  "Testing, bug fixing, and quality improvements",
  "Deployment-ready optimization and documentation"
];

export default function DevelopmentDetails() {
  return (
    <section id="development" className="section development">
      <div className="section-heading">
        <p>Complete Development Scope</p>
        <h2>What I Handle During Development</h2>
      </div>

      <div className="development-grid">
        {developmentTracks.map((track, idx) => (
          <motion.article
            key={track.title}
            className="development-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
          >
            <h3>{track.title}</h3>
            <p>{track.summary}</p>
            <ul>
              {track.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <motion.article
        className="development-process"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <h3>Development Workflow</h3>
        <ol>
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </motion.article>
    </section>
  );
}
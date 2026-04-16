import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce App",
    description: "A commerce platform with product flows, cart management, and secure user interactions.",
    stack: ["React Native", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/umer913",
    highlight: "Mobile-first",
    role: "Full-Stack Developer",
    details: [
      "Designed user journey from product browsing to checkout-ready cart flow",
      "Built modular API endpoints for products, authentication, and order actions",
      "Implemented state-aware UI patterns for a smooth mobile experience"
    ]
  },
  {
    title: "Chatbox",
    description: "A real-time messaging app with live communication patterns and clean API structure.",
    stack: ["React", "Node.js", "Socket", "MongoDB"],
    link: "https://github.com/umer913",
    highlight: "Real-time",
    role: "MERN Developer",
    details: [
      "Implemented event-driven messaging architecture for instant communication",
      "Created backend logic for room management and user session handling",
      "Structured frontend components for readable and maintainable chat workflows"
    ]
  },
  {
    title: "Shopify Stores",
    description: "Built and customized Shopify stores for product-based businesses with conversion-focused storefronts.",
    stack: ["Shopify", "Liquid", "Theme Customization", "Store Setup"],
    link: "https://github.com/umer913",
    highlight: "E-commerce",
    role: "Shopify Store Developer",
    details: [
      "Configured complete store setup including products, collections, and navigation",
      "Customized Shopify themes using Liquid and responsive UI improvements",
      "Integrated payment, shipping, and essential apps for smooth operations"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <p>Portfolio Highlights</p>
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((proj, idx) => (
          <motion.article
            className="project-card"
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
          >
            <span className="project-badge">{proj.highlight}</span>
            <h3>{proj.title}</h3>
            <h4>{proj.role}</h4>
            <p>{proj.description}</p>

            <ul className="tag-row">
              {proj.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <ul className="project-details">
              {proj.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <a href={proj.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

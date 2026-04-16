import { motion } from "framer-motion";

const stats = [
  { label: "Core Focus", value: "MERN Stack + Shopify" },
  { label: "Build Style", value: "Scalable, clean architecture" },
  { label: "Location", value: "Pakistan" }
];

export default function Hero() {
  return (
    <section className="hero section">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Software Developer and Security Enthusiast
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.65 }}
      >
        Building digital products that look sharp and perform with confidence.
      </motion.h1>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.65 }}
      >
        I am Umer Farooq, a developer focused on modern React experiences, reliable backend systems, Shopify store
        development, and practical security-minded engineering.
      </motion.p>

      <motion.div
        className="hero-cta-row"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.65 }}
      >
        <a className="btn btn-primary" href="#projects">
          Explore Projects
        </a>
        <a
          className="btn btn-ghost"
          href="https://github.com/umer913"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Profile
        </a>
      </motion.div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        {stats.map((stat) => (
          <article className="hero-stat-card" key={stat.label}>
            <h3>{stat.label}</h3>
            <p>{stat.value}</p>
          </article>
        ))}
      </motion.div>
    </section>
  );
}

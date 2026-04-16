import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C", "JavaScript (ES6)"]
  },
  {
    title: "Frontend",
    items: ["React", "React Native", "Responsive UI"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "MSSQL"]
  },
  {
    title: "Security and Networking",
    items: ["Wireshark", "CCNA Concepts", "Threat Awareness"]
  },
  {
    title: "Tools",
    items: ["GitHub","Postman","Cursor.io","Antigravity","Copilot", "Debugging Workflows"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <p>What I Bring</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, idx) => (
          <motion.article
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
          >
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

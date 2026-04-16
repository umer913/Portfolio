import { motion } from "framer-motion";

const certifications = [
  {
    title: "ISC2 Certified in Cybersecurity (CC)",
    note: "Industry-recognized baseline for security operations and risk awareness."
  },
  {
    title: "Cisco CCNA",
    note: "Strong networking foundations with practical routing and switching concepts."
  },
  {
    title: "Recommendation Letter for Networking",
    note: "Acknowledged for commitment and performance in networking-focused work."
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section certs">
      <div className="section-heading">
        <p>Proof of Growth</p>
        <h2>Certifications and Achievements</h2>
      </div>

      <div className="cert-list">
        {certifications.map((cert, idx) => (
          <motion.article
            key={cert.title}
            className="cert-item"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
          >
            <div className="cert-marker" aria-hidden="true" />
            <div>
              <h3>{cert.title}</h3>
              <p>{cert.note}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

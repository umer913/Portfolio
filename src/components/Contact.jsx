import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p>Open for opportunities</p>
        <h2>Let us build something meaningful together.</h2>

        <div className="contact-links">
          <a href="mailto:uf9139866@gmail.com">Email: uf9139866@gmail.com</a>
          <a href="https://linkedin.com/in/umer-farooq-913b32306" target="_blank" rel="noreferrer">
            LinkedIn Profile
          </a>
          <a href="https://github.com/umer913" target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
          <a href="tel:+923278206979">Phone: +92 3278206979</a>
        </div>
      </motion.div>
    </section>
  );
}

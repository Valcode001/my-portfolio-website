import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-subtle mb-4">Contact</p>
          <h2 className="heading-section text-foreground mb-6">
            Let's create something remarkable
          </h2>
          <p className="text-body mb-12">
            Have a project in mind or just want to connect? I'm always open to
            discussing new opportunities and ideas.
          </p>

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=valcodecreatives@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="button-primary text-lg mb-12 inline-flex"
          >
            <Mail size={20} />
            valcodecreatives@gmail.com
            <ArrowUpRight size={18} />
          </motion.a>


          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Valcode001"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

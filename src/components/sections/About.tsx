import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <p className="text-subtle">About</p>
            <h2 className="heading-section text-foreground">
              Focused on craft, driven by impact
            </h2>
            <div className="divider-subtle"></div>
          </div>

          <div className="space-y-6">
            <p className="text-body">
              I design and build digital products that solve real problems. With expertise 
              spanning Flutter development, modern web technologies, and UI/UX design, 
              I bring a holistic approach to every project.
            </p>
            <p className="text-body">
              My work is guided by a simple philosophy: every pixel, every interaction, 
              every line of code should serve a purpose. I partner with startups and 
              businesses to transform ideas into polished, production-ready solutions.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div>
                <p className="text-3xl font-display text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="text-3xl font-display text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="text-3xl font-display text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

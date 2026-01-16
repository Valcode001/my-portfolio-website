import { motion } from "framer-motion";
import { Smartphone, Globe, Palette } from "lucide-react";

const skills = [
  {
    icon: Smartphone,
    title: "Flutter Development",
    description:
      "Cross-platform mobile applications with native performance. Clean architecture, state management, and seamless user experiences.",
    tools: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies. From landing pages to complex web platforms.",
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with functionality. Research-driven interfaces that convert and delight.",
    tools: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-subtle mb-4">Expertise</p>
          <h2 className="heading-section text-foreground">
            What I bring to the table
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-elevated group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-display text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-body text-sm mb-6">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

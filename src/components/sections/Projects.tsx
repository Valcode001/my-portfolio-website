import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Finance Dashboard",
    description: "A comprehensive financial management platform with real-time analytics and intuitive data visualization.",
    image: project1,
    tags: ["Flutter", "Firebase", "Charts"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout, inventory management, and customer analytics.",
    image: project2,
    tags: ["React", "TypeScript", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Health & Wellness App",
    description: "Mobile application for tracking wellness goals with personalized recommendations and progress insights.",
    image: project3,
    tags: ["Flutter", "UI/UX", "HealthKit"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Landing Page",
    description: "Conversion-focused landing page design with micro-interactions and optimized user journey.",
    image: project4,
    tags: ["Web Design", "Figma", "Framer"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <p className="text-subtle mb-4">Portfolio</p>
            <h2 className="heading-section text-foreground">Selected work</h2>
          </div>
          <p className="text-body max-w-md mt-4 md:mt-0">
            A curated collection of projects that showcase my approach to solving 
            complex problems with elegant solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-secondary aspect-[4/3] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-body text-sm">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

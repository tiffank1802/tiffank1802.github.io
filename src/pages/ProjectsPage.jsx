import { motion } from 'framer-motion';
import { projects } from '../data';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => (
  <section className="section">
    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      Projets
    </motion.h1>
    <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
      Projets académiques, personnels et de recherche en conception mécanique, simulation EF et machine learning.
    </motion.p>
    <div className="projects-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} delay={i * 0.05} />
        ))}
    </div>
  </section>
);

export default ProjectsPage;

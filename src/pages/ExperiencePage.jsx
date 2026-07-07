import { motion } from 'framer-motion';
import { experiences } from '../data';
import ExperienceCard from '../components/ExperienceCard';

const ExperiencePage = () => (
  <section className="section">
    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      Expériences
    </motion.h1>
    <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
      Stages, projets de recherche et expériences professionnelles en mécanique, simulation et industrie.
    </motion.p>
    <div className="experience-grid">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} delay={i * 0.06} />
        ))}
    </div>
  </section>
);

export default ExperiencePage;

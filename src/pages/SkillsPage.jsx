import { motion } from 'framer-motion';
import { skillCategories } from '../data';
import SkillCategory from '../components/SkillCategory';

const SkillsPage = () => (
  <section className="section">
    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      Compétences
    </motion.h1>
    <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
      Compétences techniques acquises au cours de ma formation et de mes projets en génie mécanique,
      simulation numérique et méthodes computationnelles.
    </motion.p>
    <div className="skills-grid">
      {skillCategories.map((cat, i) => (
        <SkillCategory key={i} {...cat} delay={i * 0.04} />
      ))}
    </div>
  </section>
);

export default SkillsPage;

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { projects } from '../data';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {t('proj_title', lang)}
      </motion.h1>
      <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        {t('proj_subtitle', lang)}
      </motion.p>
      <div className="projects-grid">
          {projects.map((proj, i) => (
            <ProjectCard key={i} project={proj} lang={lang} delay={i * 0.05} />
          ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

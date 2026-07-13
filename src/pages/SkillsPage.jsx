import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { skillCategories } from '../data';
import SkillCategory from '../components/SkillCategory';

const SkillsPage = () => {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {t('skills_title', lang)}
      </motion.h1>
      <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        {t('skills_subtitle', lang)}
      </motion.p>
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <SkillCategory key={i} {...cat} lang={lang} delay={i * 0.04} />
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;

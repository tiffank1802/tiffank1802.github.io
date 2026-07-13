import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { experiences } from '../data';
import ExperienceCard from '../components/ExperienceCard';

const ExperiencePage = () => {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {t('exp_title', lang)}
      </motion.h1>
      <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        {t('exp_subtitle', lang)}
      </motion.p>
      <div className="experience-grid">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} lang={lang} delay={i * 0.06} />
          ))}
      </div>
    </section>
  );
};

export default ExperiencePage;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { catalogProjects } from '../data';
import ProjectCard from '../components/ProjectCard';
import PdfModal from '../components/PdfModal';

const GROUPS = [
  { id: 'all', fr: 'Tous', en: 'All' },
  { id: 'mechanics', fr: 'Mécanique', en: 'Mechanics' },
  { id: 'master', fr: 'Master', en: 'Master' },
];

const ProjectsPage = () => {
  const { lang } = useLanguage();
  const [group, setGroup] = useState('all');
  const [viewPdf, setViewPdf] = useState(null);

  const filtered = group === 'all'
    ? catalogProjects
    : catalogProjects.filter(p => p.group === group);

  const mechanics = filtered.filter(p => p.group === 'mechanics');
  const master = filtered.filter(p => p.group === 'master');

  const renderGroup = (items, icon, titleKey, badge) =>
    items.length > 0 && (
      <div className="projects-section">
        <motion.h2 className="projects-section-title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {icon}
          {t(titleKey, lang)}
          <span className="projects-section-badge">{badge}</span>
        </motion.h2>
        <div className="projects-grid">
          {items.map((proj, i) => (
            <ProjectCard key={proj.title.fr} project={proj} lang={lang} delay={i * 0.05} onView={setViewPdf} />
          ))}
        </div>
      </div>
    );

  return (
    <section className="section">
      <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {t('proj_title', lang)}
      </motion.h1>
      <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        {t('proj_subtitle', lang)}
      </motion.p>

      <motion.div className="filter-bar" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        {GROUPS.map(g => (
          <button
            key={g.id}
            className={`filter-btn ${group === g.id ? 'active' : ''}`}
            onClick={() => setGroup(g.id)}
          >
            {lang === 'fr' ? g.fr : g.en}
          </button>
        ))}
      </motion.div>

      {renderGroup(
        mechanics,
        <span className="projects-section-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></span>,
        'proj_mechanics_title',
        lang === 'fr' ? 'Ingénierie & conception' : 'Engineering & design'
      )}

      {renderGroup(
        master,
        <span className="projects-section-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></span>,
        'proj_master_title',
        lang === 'fr' ? 'Recherche & numérique' : 'Research & numerical'
      )}

      <AnimatePresence>
        {viewPdf && <PdfModal work={viewPdf} onClose={() => setViewPdf(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPage;

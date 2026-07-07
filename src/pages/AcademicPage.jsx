import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { academicWorks } from '../data';
import AcademicCard from '../components/AcademicCard';
import PdfModal from '../components/PdfModal';

const semesters = [...new Set(academicWorks.map(w => w.semester))].sort();

const AcademicPage = () => {
  const [semester, setSemester] = useState('Tous');
  const [viewPdf, setViewPdf] = useState(null);

  const filtered = semester === 'Tous'
    ? academicWorks
    : academicWorks.filter(w => w.semester === semester);

  return (
    <section className="section">
      <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Travaux Académiques
      </motion.h1>
      <motion.p className="page-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        Rapports, notes de calcul et projets réalisés du S8 au S10 dans les
        spécialités Conception Dimensionnement, Tribologie, Méthodes Numériques et Finances.
      </motion.p>

      <motion.div className="filter-bar" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <button
          className={`filter-btn ${semester === 'Tous' ? 'active' : ''}`}
          onClick={() => setSemester('Tous')}
        >Tous</button>
        {semesters.map(s => (
          <button key={s} className={`filter-btn ${semester === s ? 'active' : ''}`} onClick={() => setSemester(s)}>
            {s}
          </button>
        ))}
      </motion.div>

      <motion.div className="academic-grid" layout>
        {filtered.map((work, i) => (
          <AcademicCard key={work.title} work={work} delay={i * 0.03} onView={setViewPdf} />
        ))}
      </motion.div>

      <AnimatePresence>
        {viewPdf && <PdfModal work={viewPdf} onClose={() => setViewPdf(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default AcademicPage;

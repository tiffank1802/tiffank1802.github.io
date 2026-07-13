import GlassCard from './GlassCard';

function getText(val, lang) {
  if (typeof val === 'object' && val !== null) return val[lang] || val.fr || val;
  return val;
}

const AcademicCard = ({ work, delay, onView, lang = 'fr' }) => {
  const hasFile = !!work.file;
  const hasLink = !!work.link;
  const isFr = lang === 'fr';
  return (
    <GlassCard delay={delay} className="academic-card">
      <div className="acad-header">
        <span className="acad-icon">{work.icon}</span>
        <span className="acad-semester">{work.semester}</span>
      </div>
      <h3 className="acad-title">{getText(work.title, lang)}</h3>
      <p className="acad-category">{getText(work.category, lang)}</p>
      <p className="acad-desc">{getText(work.description, lang)}</p>
      <div className="acad-tags">
        {work.tags.map((t, i) => <span key={i} className="project-tag">{getText(t, lang)}</span>)}
      </div>
      <div className="acad-actions">
        {hasFile ? (
          <>
            <button onClick={() => onView(work)} className="btn btn-download">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 1 10 10"/>
              </svg>
              {isFr ? 'Voir' : 'View'}
            </button>
            <a href={work.file} download className="btn btn-download">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {isFr ? `Télécharger (${work.size})` : `Download (${work.size})`}
            </a>
          </>
        ) : hasLink ? (
          <a href={work.link} target="_blank" rel="noopener noreferrer" className="btn btn-download">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {isFr ? 'Voir sur GitHub' : 'View on GitHub'}
          </a>
        ) : null}
        <span className="acad-date">{work.date}</span>
      </div>
    </GlassCard>
  );
};

export default AcademicCard;

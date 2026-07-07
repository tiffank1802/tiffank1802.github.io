import GlassCard from './GlassCard';

const AcademicCard = ({ work, delay, onView }) => {
  const hasFile = !!work.file;
  const hasLink = !!work.link;
  return (
    <GlassCard delay={delay} className="academic-card">
      <div className="acad-header">
        <span className="acad-icon">{work.icon}</span>
        <span className="acad-semester">{work.semester}</span>
      </div>
      <h3 className="acad-title">{work.title}</h3>
      <p className="acad-category">{work.category}</p>
      <p className="acad-desc">{work.description}</p>
      <div className="acad-tags">
        {work.tags.map((t, i) => <span key={i} className="project-tag">{t}</span>)}
      </div>
      <div className="acad-actions">
        {hasFile ? (
          <>
            <button onClick={() => onView(work)} className="btn btn-download">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 1 10 10"/>
              </svg>
              Voir
            </button>
            <a href={work.file} download className="btn btn-download">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger ({work.size})
            </a>
          </>
        ) : hasLink ? (
          <a href={work.link} target="_blank" rel="noopener noreferrer" className="btn btn-download">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Voir sur GitHub
          </a>
        ) : null}
        <span className="acad-date">{work.date}</span>
      </div>
    </GlassCard>
  );
};

export default AcademicCard;

import { LuDownload, LuEye, LuGithub } from 'react-icons/lu';
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
              <LuEye size={14} />
              {isFr ? 'Voir' : 'View'}
            </button>
            <a href={work.file} download className="btn btn-download">
              <LuDownload size={14} />
              {isFr ? `Télécharger (${work.size})` : `Download (${work.size})`}
            </a>
          </>
        ) : hasLink ? (
          <a href={work.link} target="_blank" rel="noopener noreferrer" className="btn btn-download">
            <LuGithub size={14} />
            {isFr ? 'Voir sur GitHub' : 'View on GitHub'}
          </a>
        ) : null}
        <span className="acad-date">{work.date}</span>
      </div>
    </GlassCard>
  );
};

export default AcademicCard;

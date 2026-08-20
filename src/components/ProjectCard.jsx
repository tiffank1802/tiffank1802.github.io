import { motion } from 'framer-motion';
import { LuEye, LuDownload, LuExternalLink, LuFileText } from 'react-icons/lu';
import GlassCard from './GlassCard';

function getText(val, lang) {
  if (typeof val === 'object' && val !== null) return val[lang] || val.fr || val;
  return val;
}

const ProjectCard = ({ project, delay, lang = 'fr', onView }) => {
  const isFr = lang === 'fr';
  const files = project.files || [];
  return (
    <GlassCard delay={delay} className="project-card">
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        {project.date && <span className="acad-semester">{project.date}</span>}
      </div>

      <h3 className="project-title">{getText(project.title, lang)}</h3>

      {project.context && (
        <p className="proj-context">
          {isFr ? 'Contexte — ' : 'Context — '}
          {getText(project.context, lang)}
        </p>
      )}

      <p className="project-desc">{getText(project.description, lang)}</p>

      {files.length > 0 && (
        <div className="proj-docs">
          {files.map((f, i) => (
            <div key={i} className="proj-doc-row">
              <span className="proj-doc-label">
                <LuFileText size={12} style={{ verticalAlign: '-2px', marginRight: 6 }} />
                {getText(f.label, lang)}
                <span className="proj-doc-size"> — {f.size}</span>
              </span>
              <span className="proj-doc-actions">
                <button
                  className="btn-download btn-doc"
                  onClick={() => onView({ title: getText(project.title, lang) + ' — ' + getText(f.label, lang), file: f.file })}
                  title={isFr ? 'Visualiser le document' : 'View document'}
                >
                  <LuEye size={13} />
                  {isFr ? 'Voir' : 'View'}
                </button>
                <a href={f.file} download className="btn-download btn-doc" title={isFr ? 'Télécharger' : 'Download'}>
                  <LuDownload size={13} />
                </a>
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="project-tags">
        {project.tags.map((tag, i) => <span key={i} className="project-tag">{getText(tag, lang)}</span>)}
      </div>

      {project.link && (
        <div className="proj-link">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-download">
            <LuExternalLink size={13} />
            {isFr ? 'Ouvrir l\'application' : 'Open the app'}
          </a>
        </div>
      )}
    </GlassCard>
  );
};

export default ProjectCard;

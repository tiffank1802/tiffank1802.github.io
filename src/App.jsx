import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const GlassCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`glass-card ${className}`}
    >
      <div className="glass-filter" />
      <div className="glass-overlay" />
      <div className="glass-specular" />
      <div className="glass-content-wrap">
        {children}
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, icon, skills, delay }) => (
  <GlassCard delay={delay} className="skill-category-card">
    <div className="skill-category-header">
      <span className="skill-category-icon">{icon}</span>
      <h3 className="skill-category-title">{category}</h3>
    </div>
    <div className="skill-tags">
      {skills.map((skill, i) => (
        <span key={skill} className="skill-tag">{skill}</span>
      ))}
    </div>
  </GlassCard>
);

const ExperienceCard = ({ exp, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetail = !!exp.projectDetail;
  return (
    <GlassCard delay={delay} className="experience-card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="exp-header">
        <div className="exp-icon">{exp.icon}</div>
        <div className="exp-meta">
          <span className="exp-date">{exp.date}</span>
          <span className="exp-location">{exp.location}</span>
        </div>
      </div>
      <h3 className="exp-title">{exp.title}</h3>
      <p className="exp-org">
        {exp.orgLogos?.map((logo, i) => (
          <img key={i} src={logo} alt="" className="exp-org-logo" />
        ))}
        {exp.org}
      </p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="exp-details-container"
          >
            {hasDetail ? (
              <div className="exp-detail-rich">
                <p className="exp-detail-desc">{exp.projectDetail.description}</p>

                {exp.projectDetail.images?.length > 0 && (
                  <div className="exp-detail-images">
                    {exp.projectDetail.images.map((img, i) => (
                      <div key={i} className="exp-detail-image-card" onClick={(e) => e.stopPropagation()}>
                        <img src={img.url} alt={img.caption} loading="lazy" />
                        <span className="exp-detail-img-caption">{img.caption}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="exp-detail-links">
                  {exp.projectDetail.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-detail-link" onClick={(e) => e.stopPropagation()}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="exp-details"
              >
                {exp.details.map((d, i) => <li key={i}>{d}</li>)}
              </motion.ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="exp-tags">
        {exp.tags.map((tag, i) => <span key={i} className="project-tag">{tag}</span>)}
      </div>
      <div className="exp-expand">
        {isExpanded ? '▲ Réduire' : hasDetail ? '▼ Voir le projet détaillé' : '▼ Voir les détails'}
      </div>
    </GlassCard>
  );
};

const ProjectCard = ({ project, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <GlassCard delay={delay} className="project-card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <div className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="project-details">
            <p>{project.details}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="project-tags">
        {project.tags.map((tag, i) => <span key={i} className="project-tag">{tag}</span>)}
      </div>
    </GlassCard>
  );
};

const Navigation = ({ activeSection }) => {
  const sections = [
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'academic', label: 'Rapports' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav className="glass-nav" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
      <div className="nav-brand">
        <span className="nav-logo">KT</span>
        <span className="nav-name">Kevin Tongue</span>
      </div>
      <div className="nav-links">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={`nav-link ${activeSection === s.id ? 'active' : ''}`}>
            {s.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

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

const PdfModal = ({ work, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  const options = useMemo(() => ({
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
  }), []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="pdf-overlay" onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        className="pdf-modal" onClick={(e) => e.stopPropagation()}
      >
        <div className="pdf-header">
          <span className="pdf-title">{work.title}</span>
          <div className="pdf-header-actions">
            <a href={work.file} download className="btn btn-download">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              PDF
            </a>
            <button className="btn-close" onClick={onClose}>✕</button>
          </div>
        </div>
        <div className="pdf-viewer">
          <Document
            file={work.file}
            onLoadSuccess={({ numPages: n }) => { setNumPages(n); setLoading(false); }}
            onLoadError={() => setLoading(false)}
            loading={<div className="pdf-status">Chargement du document…</div>}
            error={<div className="pdf-status">Erreur de chargement du PDF.</div>}
            options={options}
          >
            <Page pageNumber={pageNumber} renderTextLayer renderAnnotationLayer className="pdf-page" />
          </Document>
        </div>
        {numPages && (
          <div className="pdf-footer">
            <button className="btn btn-page" onClick={() => setPageNumber(Math.max(1, pageNumber - 1))} disabled={pageNumber <= 1}>◀ Prev</button>
            <span className="pdf-page-info">{pageNumber} / {numPages}</span>
            <button className="btn btn-page" onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))} disabled={pageNumber >= numPages}>Next ▶</button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [viewingPdf, setViewingPdf] = useState(null);

  const BUCKET = 'https://huggingface.co/buckets/ktongue/DEM_MCM/resolve/main';

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'academic', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      category: 'Conception & CAO',
      icon: '📐',
      skills: ['SolidWorks', 'CATIA V5', '3DExperience', 'Sheet Metal', 'Simulation', 'Sustainability/ACV', 'Cotation fonctionnelle', 'DXF'],
    },
    {
      category: 'Simulation & Éléments Finis',
      icon: '🔬',
      skills: ['Abaqus', 'SolidWorks Simulation', 'ANSYS Workbench', 'Cast3M', 'PyMAPDL', 'Solveur 3D Python/C++', 'Statique', 'Modale', 'Dynamique transitoire', 'Thermique', 'FE²', 'Homogénéisation', 'RVE', 'PBC'],
    },
    {
      category: 'Mécanique des Structures',
      icon: '🏗️',
      skills: ['Milieux Continus', 'Mécanique de la Rupture', 'Fatigue Multiaxiale', 'Dang Van', 'Goodman', 'Dynamique des Structures', 'Mécanique Non Linéaire', 'Contraintes Résiduelles', 'Thermo-élasticité'],
    },
    {
      category: 'Tribologie & Contacts',
      icon: '⚙️',
      skills: ['Contact Hertzien', 'JKR (Adhésif)', 'Tresca', 'Von Mises', 'Tabor', 'Boussinesq', 'Bourlet', 'Multi-régime', 'Raideur de contact', 'Coefficient de frottement', 'Élastomères'],
    },
    {
      category: 'Fabrication & Procédés',
      icon: '🔧',
      skills: ['Soudure', 'Pliage', 'Découpe laser', 'Tournage', 'Fraisage', 'Injection', 'Fonderie', 'Gammes de fabrication'],
    },
    {
      category: 'Instrumentation & Signal',
      icon: '📡',
      skills: ['Accéléromètres', 'Thermocouples', 'IMU', 'Codeurs', 'Analyse vibratoire', 'AMDEC', 'GR&R', 'Cp/Cpk', 'Spectroscopie laser'],
    },
    {
      category: 'Méthodes Stochastiques',
      icon: '🎲',
      skills: ['DEM / LIGGGHTS', 'Chaînes de Markov', 'Monte Carlo', "Plan d'Expériences", "Quantification d'incertitude", 'Surrogate modelling'],
    },
    {
      category: 'IA & Machine Learning',
      icon: '🧠',
      skills: ['PINNs (PyTorch)', 'Identification inverse', 'Deep learning scientifique', 'Data-driven', 'Hyperparameter tuning'],
    },
    {
      category: 'Finance & Gestion',
      icon: '📊',
      skills: ['DCF', 'LBO', 'Analyse financière', 'Modélisation Excel', 'Python financier'],
    },
    {
      category: 'Programmation',
      icon: '💻',
      skills: ['Python', 'NumPy', 'SciPy', 'PyTorch', 'Matplotlib', 'OpenCV', 'Pandas', 'C/C++', 'MATLAB', 'Simulink', 'SymPy', 'PyMAPDL', 'LaTeX', 'Git/GitHub', 'Gradio'],
    },
  ];

  const experiences = [
    {
      icon: '🎓',
      title: 'Stage de Master — Couplage Déterministe-Stochastique (DEM + Markov)',
      org: 'IMT Mines Albi & IMT Mines Saint-Étienne',
      orgLogos: ['/logos/albi.png', '/logos/emse.png'],
      date: 'Mar. 2026 – Sep. 2026',
      location: 'Albi / Saint-Étienne',
      details: [
        "Couplage simulations DEM avec chaînes de Markov inhomogènes pour caractériser la ségrégation granulaire.",
        "Extraction de probabilités de transition à l'échelle particulaire depuis les sorties DEM.",
        "Plan d'expériences (DoE) et analyse de sensibilité Monte Carlo pour la quantification d'incertitude.",
        'Pipelines numériques complets en Python (NumPy, SciPy, PyTorch, Matplotlib).',
      ],
      tags: ['DEM', 'Markov', 'Python', 'PyTorch', 'UQ', 'DoE'],
      projectDetail: {
        description: "Couplage simulations DEM (Discrete Element Method) avec chaînes de Markov inhomogènes pour caractériser et prédire la ségrégation granulaire dans un mélangeur à tambour rotatif. Neuf méthodes de partitionnement spatial (cartésien, cylindrique, Voronoï, octree, physique, adaptatif, etc.) sont comparées systématiquement. Les matrices de transition sont construites à partir des trajectoires DEM et propagées pour prédire l'évolution du mélange. Une application Streamlit interactive permet de visualiser les résultats en 3D.",
        repo: 'https://github.com/tiffank1802/MyStudio',
        bucket: 'https://huggingface.co/buckets/ktongue/DEM_MCM',
        images: [
          {
            url: `${BUCKET}/_Good/Experiment/postraitement/voronoi_simulations/voronoi_10cells_NLT3_step157_dt3_tau157_start250/images/etats/etats_espece_small_voronoi_10cells_NLT3_step157_dt3_tau157_start250.png`,
            caption: 'États des espèces — partitionnement Voronoi 10 cellules'
          },
        ],
        links: [
          { label: '🐙 Code source (GitHub)', url: 'https://github.com/tiffank1802/MyStudio' },
          { label: '☁️ Données brutes (bucket HF)', url: 'https://huggingface.co/buckets/ktongue/DEM_MCM' },
        ],
      },
    },
    {
      icon: '🔬',
      title: 'Projet de Recherche — Solveur EF 3D Non Linéaire (Critère de Dang Van)',
      org: 'Centrale Lyon – ENISE',
      orgLogos: ['/logos/centrale-lyon.png'],
      date: 'Oct. 2025 – Mar. 2026',
      location: 'Saint-Étienne',
      details: [
        "Implémentation d'un solveur éléments finis 3D non linéaire (Python/C++) : statique, modal, dynamique transitoire.",
        'Application et validation du critère de fatigue multiaxiale de Dang Van (méthodologie Agard et al.).',
        'Validation croisée avec solutions analytiques et Abaqus.',
        'Application web déployée sur Hugging Face Spaces.',
      ],
      tags: ['FEM', 'Python', 'C++', 'Dang Van', 'Fatigue', 'Hugging Face'],
    },
    {
      icon: '🧠',
      title: "Projet de Recherche — PINNs pour l'Identification de Matériaux",
      org: 'Centrale Lyon – ENISE (collab. LTDS)',
      orgLogos: ['/logos/centrale-lyon.png'],
      date: '2025',
      location: 'Saint-Étienne',
      details: [
        "Développement d'un PINN sous PyTorch couplant deep learning et contraintes physiques.",
        'Identification inverse des paramètres de loi de comportement depuis essais de compression (LTDS).',
        'Pipeline data-driven complet : prétraitement, entraînement, hyperparamètres, visualisation.',
        'Déployé sur Hugging Face Spaces.',
      ],
      tags: ['PINN', 'PyTorch', 'Inverse', 'Deep Learning', 'LTDS'],
    },
    {
      icon: '🔩',
      title: 'Projets Académiques — Tribologie et Contacts Mécaniques',
      org: 'Centrale Lyon – ENISE',
      orgLogos: ['/logos/centrale-lyon.png'],
      date: 'Jan. – Fév. 2026',
      location: 'Saint-Étienne',
      details: [
        'Étude paramétrique du contact hertzien sphère-plan (12 configurations).',
        'Évaluation comparative des critères de limite élastique (Tresca, Von Mises, Tabor) pour 6 matériaux.',
        'Modélisation du contact adhésif (théorie JKR) sur élastomères silicone.',
        'Modélisation multi-régime (élastique, élasto-plastique, plastique).',
      ],
      tags: ['Hertz', 'JKR', 'Tribologie', 'Python', 'FEM'],
    },
    {
      icon: '🚜',
      title: 'Projet Académique — Reconception Axe de Roue Motrice (Tracteur Enfant)',
      org: 'Centrale Lyon – ENISE',
      orgLogos: ['/logos/centrale-lyon.png'],
      date: '2025 – 2026',
      location: 'Saint-Étienne',
      details: [
        'Identification des mécanismes de rupture : concentration de contraintes + contraintes résiduelles de traction.',
        'Simulation EF sous SolidWorks Simulation (Von Mises, chargements 500 N + 200 N chaîne).',
        'Solution retenue : contrainte réduite de 450 MPa à 250 MPa, coefficient de sécurité porté de 0,67 à 2,4.',
      ],
      tags: ['SolidWorks', 'FEM', 'Fatigue', 'Conception'],
    },
    {
      icon: '🏭',
      title: 'Stage Ingénieur — Diagnostics Industriels & Maintenance Préventive',
      org: 'SOPECAM',
      orgLogos: [],
      date: 'Mai 2024 – Sep. 2024',
      location: 'Yaoundé, Cameroun',
      details: [
        'Analyse des défaillances de pompes sur machines KBA ; stratégies correctives et préventives.',
        "Conception d'un logiciel de gestion du plan de maintenance préventive.",
        'Instrumentation capteurs vibration/température, traitement du signal, AMDEC.',
      ],
      tags: ['AMDEC', 'Capteurs', 'Signal', 'Maintenance'],
    },
    {
      icon: '🤖',
      title: 'Stage Technicien — Conception & Fabrication CNC 3 Axes',
      org: 'FabLab – ENSPY',
      orgLogos: ['/logos/enspy.png'],
      date: 'Mai – Sep. 2023',
      location: 'Yaoundé, Cameroun',
      details: [
        'Conception CAO complète SolidWorks (assemblages, tôlerie, préparation usinage).',
        'Dimensionnement structurel, sélection de composants (guidages, moteurs pas à pas, courroies).',
        'Supervision du montage de la machine CNC 3 axes à usage pédagogique.',
      ],
      tags: ['SolidWorks', 'CNC', 'CAO', 'Fabrication'],
    },
  ];

  const projects = [
    {
      icon: '🔬',
      title: 'FEM Fatigue Solver',
      description: "Solveur EF 3D non linéaire avec critère de fatigue de Dang Van — interface web interactive.",
      details: 'Backend Python/C++, analyses statique/modale/transitoire, détermination du plan critique, validation Abaqus.',
      tags: ['Python', 'C++', 'FEM', 'Dang Van'],
      link: 'https://huggingface.co/spaces/ktongue/simulations_apps',
    },
    {
      icon: '🧠',
      title: 'PINN Material Identification',
      description: "Réseau de neurones physiquement informé pour l'identification inverse de lois de comportement.",
      details: 'Couplage PyTorch + contraintes physiques (élasticité, chaleur, plasticité). Données essais compression LTDS.',
      tags: ['PINN', 'PyTorch', 'Inverse', 'Data-driven'],
      link: 'https://huggingface.co/spaces/ktongue/material_identification',
    },
    {
      icon: '🏗️',
      title: 'Diable Élévateur Motorisé',
      description: 'Conception complète d\'un diable pour industrie agroalimentaire (sacs 25 kg, cycle ≤ 3 s).',
      details: 'Matrice de choix multicritères, notice de calcul, liasse de définition SolidWorks, ACV avec Sustainability.',
      tags: ['SolidWorks', 'ACV', 'Sheet Metal', 'Cahier des charges'],
    },
    {
      icon: '🔩',
      title: 'Modèle de Partitionnement Microstructural',
      description: 'Segmentation d\'images microstructurales et caractérisation statistique des phases.',
      details: 'Traitement d\'images Python (NumPy, OpenCV, SciPy), extraction de caractéristiques géométriques.',
      tags: ['Python', 'OpenCV', 'Segmentation', 'Matériaux'],
    },
    {
      icon: '⚙️',
      title: 'Architecture PLM — Micro-Moteur',
      description: "Gestion du cycle de vie d'un micro-moteur : structure documentaire PLM complète.",
      details: 'Recensement des documents par composant, processus de validation adapté à chaque mode de fabrication.',
      tags: ['PLM', '3DExperience', 'Cycle de vie'],
    },
    {
      icon: '📚',
      title: 'Application Web — Gestion de Bibliothèque',
      description: 'Application full-stack Symfony (PHP) avec architecture MVC et authentification.',
      details: 'Conception base de données, contrôleurs, vues Twig, gestion des utilisateurs et des emprunts.',
      tags: ['Symfony', 'PHP', 'MVC', 'MySQL'],
    },
  ];

  const academicWorks = [
    {
      icon: '📐', category: 'Dimensionnement',
      semester: 'S9',
      title: 'Conception d\'essieu de tracteur — Analyse EF',
      description: 'Analyse EF complète (SolidWorks Simulation) d\'un essieu de tracteur enfant soumis à rupture répétée : concentration de contraintes, contraintes résiduelles, coefficient de sécurité porté de 0,67 à 2,4. Inclut gamme de fabrication et PLM/SGDT.',
      file: '/rapports/dimensionnement_s9_calcul.pdf',
      size: '11 MB',
      date: 'S9 — 2025/26',
      tags: ['SolidWorks Simulation', 'Von Mises', 'PLM', 'SGDT', 'Gamme fabrication'],
    },
    {
      icon: '🏗️', category: 'Dimensionnement',
      semester: 'S9',
      title: 'Optimisation Topologique d\'un Piston',
      description: 'Étude et optimisation topologique d\'un piston sous 3DExperience. Conception allégée avec maintien des performances mécaniques.',
      file: null,
      link: 'https://github.com/tiffank1802/ENISE/tree/main/dimensionnement_des_structures-S9',
      size: null,
      date: 'S9 — 2025/26',
      tags: ['3DExperience', 'Optimisation Topologique', 'Conception'],
    },
    {
      icon: '🔥', category: 'Dimensionnement',
      semester: 'S9',
      title: 'Couplage Thermo-Mécanique (ANSYS)',
      description: 'Modélisation d\'un flux mobile sur plaque rectangulaire sous ANSYS Workbench. Couplage multiphysique thermique-mécanique par éléments finis.',
      file: null,
      link: 'https://github.com/tiffank1802/ENISE/tree/main/dimensionnement_des_structures-S9',
      size: null,
      date: 'S9 — 2025/26',
      tags: ['ANSYS Workbench', 'Couplage Thermo-Mécanique', 'PyMAPDL'],
    },
    {
      icon: '📐', category: 'Dimensionnement',
      semester: 'S8',
      title: 'Dynamique des Structures & EF 1D/2D',
      description: 'Application de la MEF : études 1D (propagation d\'onde) et 2D (plaque avec trou central, éléments P1). Analyse modale et dynamique transitoire avec MATLAB.',
      file: '/rapports/dimensionnement_s8_dynamique.pdf',
      size: '8.1 MB',
      date: 'S8 — 2025',
      tags: ['MATLAB', 'MEF 1D/2D', 'Éléments P1', 'Dynamique'],
    },
    {
      icon: '⚙️', category: 'Dimensionnement',
      semester: 'S9',
      title: 'Dynamique des Structures S9',
      description: 'Analyse dynamique des structures : modes propres, fréquences, réponse temporelle. Notebook SymPy et simulations avancées.',
      file: '/rapports/dimensionnement_s9_dynamique.pdf',
      size: '4.8 MB',
      date: 'S9 — 2025/26',
      tags: ['SymPy', 'Dynamique', 'MEF', 'Analyse modale'],
    },
    {
      icon: '🔬', category: 'Tribologie',
      semester: 'S8/S9',
      title: 'Contact Hertzien Sphère-Plan',
      description: 'Analyse complète du contact élastique sphère-plan : pression hertzienne, zone de contact, contraintes internes. Étude paramétrique sur 6 matériaux.',
      file: '/rapports/tribologie_principal.pdf',
      size: '718 KB',
      date: 'S8 — 2025',
      tags: ['Hertz', 'Contact', 'Pression', 'Python'],
    },
    {
      icon: '🔬', category: 'Tribologie',
      semester: 'S8',
      title: 'Contact Hertzien — 12 Configurations (DM1)',
      description: 'Étude paramétrique du contact sphère-plan pour 12 configurations : variation du matériau et du rayon. Comparaison Tresca/Von Mises, profils de pression et carte de Bourlet.',
      file: '/rapports/tribologie_dm1.pdf',
      size: '1 MB',
      date: 'S8 — 2025',
      tags: ['Hertz', 'Tresca', 'Von Mises', 'Bourlet', '12 cas'],
    },
    {
      icon: '🔬', category: 'Tribologie',
      semester: 'S9',
      title: 'Analyse Complète Contacts Non-Adhésifs (DM3)',
      description: 'Analyse des régimes élastique, élasto-plastique et plastique. Raideurs de contact, limites élastiques, comparaison multi-matériaux.',
      file: '/rapports/tribologie_dm3.pdf',
      size: '5.2 MB',
      date: 'S9 — 2025/26',
      tags: ['Multi-régime', 'Raideur', 'Limite élastique', 'Tabor'],
    },
    {
      icon: '🔬', category: 'Tribologie',
      semester: 'S9',
      title: 'Effets des Efforts sur les Limites Élastiques (DM31)',
      description: 'Analyse des effets des efforts et pressions sur les limites élastiques pour 6 matériaux. Visualisation des seuils de plasticité.',
      file: '/rapports/tribologie_dm31.pdf',
      size: '1.5 MB',
      date: 'S9 — 2025/26',
      tags: ['Limite élastique', 'Plasticité', 'Python', 'Analyse'],
    },
    {
      icon: '🔬', category: 'Tribologie',
      semester: 'S9',
      title: 'Contacts Adhésifs JKR sur Élastomères (DM4)',
      description: 'Modélisation du contact adhésif sphère-plan sur élastomères silicone (théorie JKR). Essais d\'indentation et de frottement, courbes expérimentales.',
      file: '/rapports/tribologie_dm4.pdf',
      size: '714 KB',
      date: 'S9 — 2025/26',
      tags: ['JKR', 'Adhésif', 'Élastomère', 'Frottement'],
    },
    {
      icon: '🧮', category: 'Méthodes Numériques',
      semester: 'S9',
      title: 'Homogénéisation FE² — Matériaux Composites',
      description: 'Homogénéisation par moyenne volumique d\'un composite tissé (TRC) sous Abaqus. Modélisation RVE avec conditions aux limites périodiques (PBCs), approche FE² multi-échelle.',
      file: null,
      link: 'https://github.com/tiffank1802/ENISE/tree/main/Methodes%20numeriques%20avancees',
      size: null,
      date: 'S9 — 2025/26',
      tags: ['FE²', 'Homogénéisation', 'Abaqus', 'RVE', 'PBC', 'Composite'],
    },
    {
      icon: '📊', category: 'Finances',
      semester: 'S8',
      title: 'Acquisition Bricorama — DCF & LBO',
      description: 'Analyse financière complète de l\'acquisition de Bricorama France : valorisation DCF, montage LBO, modélisation Python/Excel, rapports détaillés.',
      file: '/rapports/finances_rapport_final.pdf',
      size: '749 KB',
      date: 'S8 — 2025',
      tags: ['DCF', 'LBO', 'Finance', 'Python', 'Excel'],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.css');
        @import url('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.css');
        @import url('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.css');
        @import url('https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-400-normal.css');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --glass-bg: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.01) 100%);
          --glass-border: rgba(255, 255, 255, 0.10);
          --text-primary: #e8edf5;
          --text-secondary: #9aa8c4;
          --text-tertiary: #5a6880;
          --accent: #6b8fc5;
          --bg-1: #0a0f1a;
          --bg-2: #111827;
          --bg-3: #0d1420;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 50%, var(--bg-3) 100%);
          color: var(--text-primary);
          overflow-x: hidden;
          min-height: 100vh;
        }

        .bg-blobs { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; }
        .blob-1 { width: 600px; height: 600px; background: #3b6fa5; top: -15%; left: -8%; }
        .blob-2 { width: 450px; height: 450px; background: #5b4fa5; bottom: -10%; right: -5%; }
        .blob-3 { width: 350px; height: 350px; background: #2a5f8a; top: 40%; left: 60%; }
        .blob-1 { animation: floatBlob 25s ease-in-out infinite; }
        .blob-2 { animation: floatBlob 30s ease-in-out infinite reverse; }
        .blob-3 { animation: floatBlob 20s ease-in-out infinite; }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(60px, -40px) scale(1.1); }
          50% { transform: translate(-30px, 50px) scale(0.9); }
          75% { transform: translate(40px, -20px) scale(1.05); }
        }

        .glass-card {
          position: relative;
          padding: 28px;
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          transition: all 0.4s ease;
          cursor: default;
        }

        @supports (filter: url(#lg-dist)) {
          .glass-card {
            backdrop-filter: none;
            background: transparent;
            border-color: rgba(255, 255, 255, 0.08);
          }
          .glass-filter {
            position: absolute; inset: 0; z-index: 0;
            border-radius: inherit;
            backdrop-filter: blur(0px);
            filter: url(#lg-dist);
            isolation: isolate;
            pointer-events: none;
          }
          .glass-overlay {
            position: absolute; inset: 0; z-index: 1;
            border-radius: inherit;
            background: var(--glass-bg);
            pointer-events: none;
          }
          .glass-specular {
            position: absolute; inset: 0; z-index: 2;
            border-radius: inherit;
            overflow: hidden;
            box-shadow: inset 1px 1px 0 rgba(255,255,255,0.35), inset 0 0 8px rgba(255,255,255,0.1);
            pointer-events: none;
          }
          .glass-card > :not(.glass-filter):not(.glass-overlay):not(.glass-specular) {
            position: relative;
            z-index: 3;
          }
        }

        @supports not (filter: url(#lg-dist)) {
          .glass-card {
            background: rgba(255,255,255,0.06);
            backdrop-filter: blur(14px) saturate(130%);
            -webkit-backdrop-filter: blur(14px) saturate(130%);
          }
          .glass-filter, .glass-overlay, .glass-specular { display: none; }
        }

        .glass-card:hover {
          border-color: rgba(255, 255, 255, 0.18);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
        }

        .glass-nav {
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000;
          display: flex; align-items: center; gap: 32px; padding: 12px 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          border: 1px solid rgba(255, 255, 255, 0.10);
          border-radius: 100px;
        }

        @supports (filter: url(#lg-dist)) {
          .glass-nav {
            backdrop-filter: blur(0px);
            filter: url(#lg-dist-light);
          }
        }

        .nav-brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15px; color: var(--text-primary); }
        .nav-logo { font-size: 15px; font-weight: 800; color: var(--accent); background: rgba(107, 143, 197, 0.12); padding: 4px 10px; border-radius: 8px; }
        .nav-links { display: flex; gap: 4px; }
        .nav-link { padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 500; color: var(--text-secondary); text-decoration: none; transition: all 0.2s ease; }
        .nav-link:hover { color: var(--text-primary); background: rgba(255, 255, 255, 0.06); }
        .nav-link.active { color: var(--accent); background: rgba(255, 255, 255, 0.08); }

        .main-content { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding-top: 100px; }
        .hero-content { text-align: center; max-width: 800px; }

        .hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; background: rgba(107, 143, 197, 0.08); border: 1px solid rgba(107, 143, 197, 0.15); border-radius: 100px; font-size: 13px; font-weight: 500; color: var(--accent); margin-bottom: 28px; }
        .hero-badge .dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        .hero-title { font-size: clamp(38px, 6vw, 72px); font-weight: 700; line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.03em; color: var(--text-primary); }

        .hero-subtitle { font-size: clamp(15px, 2vw, 18px); color: var(--text-secondary); line-height: 1.6; margin-bottom: 36px; max-width: 560px; margin-left: auto; margin-right: auto; }

        .hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        .btn { display: inline-flex; align-items: center; gap: 10px; padding: 12px 26px; border-radius: 100px; font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; cursor: pointer; border: none; font-family: inherit; }
        .btn-primary { background: var(--accent); color: white; box-shadow: 0 2px 8px rgba(107, 143, 197, 0.3); }
        .btn-primary:hover { background: #5a7db5; transform: translateY(-1px); }
        .btn-card { background: rgba(255, 255, 255, 0.06); color: var(--text-primary); border: 1px solid rgba(255, 255, 255, 0.10); backdrop-filter: blur(8px); }
        .btn-card:hover { background: rgba(255, 255, 255, 0.10); }

        .section { padding: 80px 0; }
        .section-header { text-align: center; margin-bottom: 48px; }
        .section-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); margin-bottom: 10px; }
        .section-title { font-size: clamp(26px, 3.5vw, 40px); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 14px; color: var(--text-primary); }
        .section-desc { font-size: 15px; color: var(--text-secondary); max-width: 560px; margin: 0 auto; line-height: 1.6; }

        .about-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
        .about-text { font-size: 15px; line-height: 1.8; color: var(--text-secondary); }
        .about-text strong { color: var(--text-primary); }

        .info-card { padding: 28px 24px; }
        .info-item { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; font-size: 14px; }
        .info-item:last-child { margin-bottom: 0; }
        .info-icon { font-size: 18px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: rgba(107, 143, 197, 0.08); border-radius: 10px; }
        .info-label { color: var(--text-tertiary); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; }
        .info-value { color: var(--text-primary); font-weight: 500; }
        .info-logos { display: inline-flex; align-items: center; gap: 4px; margin-right: 6px; vertical-align: middle; }
        .info-logo { height: 1.1em; width: auto; }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
        .skill-category-card { padding: 22px; }
        .skill-category-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .skill-category-icon { font-size: 24px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: rgba(107, 143, 197, 0.08); border-radius: 12px; flex-shrink: 0; }
        .skill-category-title { font-size: 15px; font-weight: 700; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill-tag { padding: 5px 11px; font-size: 11px; font-weight: 500; background: rgba(107, 143, 197, 0.08); border: 1px solid rgba(107, 143, 197, 0.12); border-radius: 100px; color: var(--text-secondary); font-family: 'JetBrains Mono', monospace; transition: all 0.2s ease; }
        .skill-tag:hover { background: rgba(107, 143, 197, 0.14); color: var(--text-primary); }

        .experience-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 18px; }
        .experience-card { cursor: pointer; }
        .exp-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px; gap: 12px; }
        .exp-icon { font-size: 26px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: rgba(107, 143, 197, 0.08); border-radius: 12px; flex-shrink: 0; }
        .exp-meta { text-align: right; }
        .exp-date { display: block; font-size: 11px; color: var(--accent); font-weight: 600; font-family: 'JetBrains Mono', monospace; }
        .exp-location { display: block; font-size: 11px; color: var(--text-tertiary); margin-top: 2px; }
        .exp-title { font-size: 16px; font-weight: 700; margin-bottom: 6px; line-height: 1.3; }
        .exp-org { font-size: 13px; color: var(--text-secondary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .exp-org-logo { height: 1.3em; width: auto; }
        .exp-details { list-style: none; padding: 12px 14px; background: rgba(107, 143, 197, 0.06); border-radius: 10px; border-left: 2px solid var(--accent); margin-bottom: 12px; overflow: hidden; }
        .exp-details li { font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 5px; padding-left: 14px; position: relative; }
        .exp-details li::before { content: '▸'; position: absolute; left: 0; color: var(--accent); }
        .exp-details li:last-child { margin-bottom: 0; }
        .exp-tags, .project-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 8px; }
        .project-tag { padding: 3px 9px; font-size: 10px; font-weight: 600; background: rgba(107, 143, 197, 0.08); border: 1px solid rgba(107, 143, 197, 0.12); border-radius: 100px; color: var(--accent); font-family: 'JetBrains Mono', monospace; }
        .exp-expand { font-size: 11px; color: var(--text-tertiary); text-align: center; margin-top: 6px; }
        .exp-details-container { overflow: hidden; }
        .exp-detail-rich { padding: 12px 0; }
        .exp-detail-desc { font-size: 12px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 14px; }
        .exp-detail-images { display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; }
        .exp-detail-image-card { border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); }
        .exp-detail-image-card img { width: 100%; height: auto; display: block; }
        .exp-detail-img-caption { display: block; padding: 8px 12px; font-size: 10px; color: var(--text-tertiary); background: rgba(0,0,0,0.2); }
        .exp-detail-links { display: flex; flex-direction: column; gap: 6px; }
        .btn-detail-link { display: flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 10px; font-size: 12px; font-weight: 500; text-decoration: none; transition: all 0.2s; cursor: pointer; border: none; font-family: inherit; background: rgba(107, 143, 197, 0.08); color: var(--accent); }
        .btn-detail-link:hover { background: rgba(107, 143, 197, 0.15); }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 22px; }
        .project-card { cursor: pointer; }
        .project-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .project-icon { font-size: 28px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; background: rgba(107, 143, 197, 0.08); border-radius: 14px; }
        .project-links a { color: var(--text-tertiary); transition: color 0.2s; padding: 6px; border-radius: 8px; display: inline-flex; }
        .project-links a:hover { color: var(--accent); background: rgba(107, 143, 197, 0.08); }
        .project-title { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .project-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 12px; }
        .project-details { overflow: hidden; margin-bottom: 12px; }
        .project-details p { font-size: 12px; color: var(--text-secondary); line-height: 1.6; padding: 12px 14px; background: rgba(107, 143, 197, 0.06); border-radius: 10px; border-left: 2px solid var(--accent); }

        .academic-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 18px; }
        .academic-card { display: flex; flex-direction: column; }
        .acad-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; gap: 12px; }
        .acad-icon { font-size: 26px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: rgba(107, 143, 197, 0.08); border-radius: 12px; flex-shrink: 0; }
        .acad-semester { font-size: 10px; font-weight: 700; padding: 4px 12px; border-radius: 100px; background: rgba(107, 143, 197, 0.12); color: var(--accent); font-family: 'JetBrains Mono', monospace; }
        .acad-title { font-size: 15px; font-weight: 700; margin-bottom: 3px; line-height: 1.3; }
        .acad-category { font-size: 11px; color: var(--text-tertiary); font-weight: 500; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
        .acad-desc { font-size: 12px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 12px; flex: 1; }
        .acad-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 14px; }
        .acad-actions { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.05); }
        .acad-date { font-size: 10px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace; }
        .btn-download { display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 100px; font-size: 11px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; cursor: pointer; border: none; font-family: inherit; background: rgba(107, 143, 197, 0.12); color: var(--accent); }
        .btn-download:hover { background: rgba(107, 143, 197, 0.2); }

        .pdf-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
        }
        .pdf-modal {
          display: flex; flex-direction: column;
          background: linear-gradient(135deg, rgba(20,25,40,0.98) 0%, rgba(15,20,35,0.98) 100%);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          max-width: 95vw; max-height: 95vh;
          width: 100%; height: 100%;
          overflow: hidden;
        }
        .pdf-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px; gap: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .pdf-title { font-size: 14px; font-weight: 600; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pdf-header-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .pdf-viewer {
          flex: 1; overflow-y: auto; display: flex; justify-content: center;
          padding: 16px; background: rgba(0,0,0,0.3);
        }
        .pdf-viewer .react-pdf__Document { display: flex; justify-content: center; }
        .pdf-viewer .react-pdf__Page { box-shadow: 0 2px 20px rgba(0,0,0,0.5); }
        .pdf-viewer .react-pdf__Page canvas { max-width: 100%; height: auto !important; }
        .pdf-status { color: var(--text-secondary); font-size: 14px; padding: 40px; text-align: center; }
        .pdf-footer {
          display: flex; align-items: center; justify-content: center; gap: 16px;
          padding: 12px 20px; flex-shrink: 0;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .pdf-page-info { font-size: 12px; color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace; min-width: 60px; text-align: center; }
        .btn-page { padding: 6px 14px; border-radius: 100px; font-size: 11px; font-weight: 600; background: rgba(255,255,255,0.06); color: var(--text-secondary); border: 1px solid rgba(255,255,255,0.08); cursor: pointer; font-family: inherit; transition: all 0.2s; }
        .btn-page:hover:not(:disabled) { background: rgba(255,255,255,0.1); color: var(--text-primary); }
        .btn-page:disabled { opacity: 0.3; cursor: default; }
        .btn-close { width: 32px; height: 32px; border-radius: 50%; font-size: 16px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.06); color: var(--text-secondary); border: none; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .btn-close:hover { background: rgba(255, 75, 75, 0.2); color: #ff6b6b; }

        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
        .contact-info { padding: 32px; }
        .contact-item { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
        .contact-item:last-child { margin-bottom: 0; }
        .contact-icon { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: rgba(107, 143, 197, 0.08); border: 1px solid rgba(107, 143, 197, 0.10); border-radius: 10px; font-size: 18px; flex-shrink: 0; }
        .contact-label { font-size: 10px; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 3px; }
        .contact-value { font-size: 13px; font-weight: 500; }
        .contact-value a { color: var(--text-primary); text-decoration: none; transition: color 0.2s; }
        .contact-value a:hover { color: var(--accent); }

        .cv-card { padding: 32px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .cv-icon { font-size: 42px; margin-bottom: 14px; }
        .cv-title { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .cv-desc { font-size: 12px; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.5; }
        .cv-status { display: flex; align-items: center; gap: 8px; font-size: 11px; color: #4ade80; margin-bottom: 16px; }
        .cv-status .dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse 2s infinite; }

        .footer { text-align: center; padding: 36px 0; border-top: 1px solid rgba(255, 255, 255, 0.04); margin-top: 48px; }
        .footer-text { font-size: 12px; color: var(--text-tertiary); }

        @media (max-width: 768px) {
          .glass-nav { width: calc(100% - 32px); justify-content: space-between; padding: 10px 14px; gap: 6px; }
          .nav-name { display: none; }
          .nav-link { padding: 5px 8px; font-size: 10px; }
          .about-grid, .contact-grid { grid-template-columns: 1fr; }
          .projects-grid, .experience-grid, .skills-grid { grid-template-columns: 1fr; }
          .hero-actions { flex-direction: column; align-items: center; }
        }
      `}</style>

      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="lg-dist-light" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="1" seed="42" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="1.5" result="blurred" />
          <feDisplacementMap in="SourceGraphic" in2="blurred" scale="35" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <Navigation activeSection={activeSection} />

      <div className="main-content">
        <section id="about" className="hero-section">
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="hero-badge">
                <span className="dot" />
                Disponible Septembre/Octobre 2026 — Mobilité internationale
              </div>
            </motion.div>

            <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Kevin Tongue<br />
              Ingénieur Mécanique
            </motion.h1>

            <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Conception produit, mécanique des structures et simulation numérique avancée.
              Double diplôme Centrale Lyon–ENISE & ENSPY — spécialisé en mécanique computationnelle,
              éléments finis et méthodes stochastiques.
            </motion.p>

            <motion.div className="hero-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <a href="#projects" className="btn btn-primary">
                Voir mes projets
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="cv.pdf" download className="btn btn-card">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Télécharger CV
              </a>
            </motion.div>
          </div>
        </section>

        <section className="section">
          <div className="about-grid">
            <GlassCard className="about-main" delay={0}>
              <h2 className="section-title" style={{ marginBottom: 20 }}>À propos de moi</h2>
              <p className="about-text">
                Futur <strong>ingénieur en génie mécanique</strong> et titulaire d'un <strong>Master 2 en Mécanique des Solides Numériques</strong>,
                je me spécialise dans la <strong>conception mécanique</strong>, la <strong>simulation numérique avancée</strong> et la <strong>mécanique computationnelle</strong>.
                <br /><br />
                Mes travaux de recherche portent sur le <strong>couplage déterministe-stochastique (DEM + chaînes de Markov)</strong>,
                les <strong>Réseaux de Neurones Physiquement Informés (PINNs)</strong> pour l'identification de matériaux,
                et le développement de <strong>solveurs éléments finis 3D non linéaires</strong> pour la prédiction de défaillance en fatigue.
                <br /><br />
                Rigoureux, autonome et passionné par la résolution de problèmes complexes, je combine expertise technique et
                approche scientifique pour contribuer à des projets de R&D en mécanique, matériaux et simulation multi-physique.
              </p>
            </GlassCard>
            <GlassCard className="info-card" delay={0.1}>
              <div className="info-item"><span className="info-icon">🎓</span><div><div className="info-label">Formation</div><div className="info-value"><span className="info-logos"><img src="/logos/centrale-lyon.png" alt="" className="info-logo" /><img src="/logos/enspy.png" alt="" className="info-logo" /></span> Centrale Lyon–ENISE & ENSPY</div></div></div>
              <div className="info-item"><span className="info-icon">📍</span><div><div className="info-label">Localisation</div><div className="info-value">Saint-Étienne, France</div></div></div>
              <div className="info-item"><span className="info-icon">🌍</span><div><div className="info-label">Mobilité</div><div className="info-value">France & International</div></div></div>
              <div className="info-item"><span className="info-icon">🗣️</span><div><div className="info-label">Langues</div><div className="info-value">FR (natif) · EN (B2) · DE</div></div></div>
              <div className="info-item"><span className="info-icon">📅</span><div><div className="info-label">Disponibilité</div><div className="info-value">Sept./Oct. 2026</div></div></div>
            </GlassCard>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-header">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="section-label">Compétences</p>
              <h2 className="section-title">Expertise Technique</h2>
              <p className="section-desc">
                Un ensemble de compétences couvrant la conception, la simulation, la fabrication et l'analyse numérique.
              </p>
            </motion.div>
          </div>
          <div className="skills-grid">
            {skillCategories.map((cat, i) => (
              <SkillCategory key={cat.category} {...cat} delay={i * 0.04} />
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-header">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="section-label">Parcours</p>
              <h2 className="section-title">Expérience & Recherche</h2>
              <p className="section-desc">
                Stages, projets de recherche et réalisations académiques en mécanique et simulation numérique.
              </p>
            </motion.div>
          </div>
          <div className="experience-grid">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.title} exp={exp} delay={i * 0.06} />
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="section-label">Portfolio</p>
              <h2 className="section-title">Projets & Réalisations</h2>
              <p className="section-desc">
                Applications déployées, projets de conception et outils numériques.
              </p>
            </motion.div>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 0.08} />
            ))}
          </div>
        </section>

        <section id="academic" className="section">
          <div className="section-header">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="section-label">Travaux Académiques</p>
              <h2 className="section-title">Rapports ENISE — Semestres 8 & 9</h2>
              <p className="section-desc">
                Rapports de projets, analyses et simulations réalisés durant ma formation à Centrale Lyon – ENISE.
              </p>
            </motion.div>
          </div>
          <div className="academic-grid">
            {academicWorks.map((work, i) => (
              <AcademicCard key={work.title} work={work} delay={i * 0.04} onView={setViewingPdf} />
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-header">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="section-label">Contact</p>
              <h2 className="section-title">Travaillons ensemble</h2>
              <p className="section-desc">
                Ouvert aux opportunités de recherche, stages et collaborations en mécanique computationnelle.
              </p>
            </motion.div>
          </div>

          <div className="contact-grid">
            <GlassCard className="contact-info" delay={0}>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value"><a href="mailto:tonguekevin00@gmail.com">tonguekevin00@gmail.com</a></div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <div className="contact-label">Téléphone</div>
                  <div className="contact-value"><a href="tel:+33698063769">+33 6 98 06 37 69</a></div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <div className="contact-value"><a href="https://linkedin.com/in/tongue-kevin-52b100330" target="_blank" rel="noopener noreferrer">tongue-kevin-52b100330</a></div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div>
                  <div className="contact-label">GitHub</div>
                  <div className="contact-value"><a href="https://github.com/tiffank1802" target="_blank" rel="noopener noreferrer">tiffank1802</a></div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🤗</div>
                <div>
                  <div className="contact-label">Hugging Face</div>
                  <div className="contact-value"><a href="https://huggingface.co/ktongue" target="_blank" rel="noopener noreferrer">huggingface.co/ktongue</a></div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="cv-card" delay={0.1}>
              <div className="cv-icon">📄</div>
              <h3 className="cv-title">Mon CV</h3>
              <p className="cv-desc">
                Téléchargez mon CV mis à jour automatiquement. Généré depuis LaTeX via GitHub Actions.
              </p>
              <div className="cv-status">
                <span className="dot" />
                Auto-généré depuis le dépôt
              </div>
              <a href="cv.pdf" download className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Télécharger le CV (PDF)
              </a>
            </GlassCard>
          </div>
        </section>

        <footer className="footer">
          <p className="footer-text">
            © {new Date().getFullYear()} Kevin Tongue — Conçu et développé avec passion. Propulsé par React & GitHub Pages.
          </p>
        </footer>
      </div>

      <AnimatePresence>
        {viewingPdf && (
          <PdfModal work={viewingPdf} onClose={() => setViewingPdf(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const LiquidGlassSVG = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <defs>
      <filter id="liquid-glass">
        <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="2" />
        <feDisplacementMap in="SourceGraphic" scale="8" />
      </filter>
      <filter id="glass-blur">
        <feGaussianBlur stdDeviation="20" />
      </filter>
    </defs>
  </svg>
);

const GlassCard = ({ children, className = '', delay = 0, style = {} }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-card ${className}`}
      style={style}
    >
      <div
        className="glass-highlight"
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 60%)`
            : 'none',
        }}
      />
      <div className="glass-reflection" />
      <div className="glass-border" />
      {children}
    </motion.div>
  );
};

const BackgroundOrbs = () => (
  <div className="background-orbs">
    <motion.div className="orb orb-1" animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0], scale: [1, 1.2, 0.9, 1] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
    <motion.div className="orb orb-2" animate={{ x: [0, -120, 80, 0], y: [0, 60, -100, 0], scale: [1, 0.8, 1.3, 1] }} transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }} />
    <motion.div className="orb orb-3" animate={{ x: [0, 60, -100, 0], y: [0, -120, 40, 0], scale: [1, 1.1, 0.85, 1] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
    <motion.div className="orb orb-4" animate={{ x: [0, -80, 120, 0], y: [0, 100, -60, 0], scale: [1, 0.9, 1.2, 1] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
  </div>
);

const SkillCategory = ({ category, icon, skills, delay }) => (
  <GlassCard delay={delay} className="skill-category-card">
    <div className="skill-category-header">
      <span className="skill-category-icon">{icon}</span>
      <h3 className="skill-category-title">{category}</h3>
    </div>
    <div className="skill-tags">
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          className="skill-tag"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: delay + i * 0.04 }}
          viewport={{ once: true }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </GlassCard>
);

const ExperienceCard = ({ exp, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
      <p className="exp-org">{exp.org}</p>
      <AnimatePresence>
        {isExpanded && (
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
      </AnimatePresence>
      <div className="exp-tags">
        {exp.tags.map((tag, i) => <span key={i} className="project-tag">{tag}</span>)}
      </div>
      <div className="exp-expand">
        {isExpanded ? '▲ Réduire' : '▼ Voir les détails'}
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
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav className="glass-nav" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
      <div className="nav-brand">
        <span className="nav-logo">⚙</span>
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

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
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
      skills: ['Abaqus', 'SolidWorks Simulation', 'ANSYS Workbench', 'Cast3M', 'Solveur 3D Python/C++', 'Statique', 'Modale', 'Dynamique transitoire', 'Thermique'],
    },
    {
      category: 'Mécanique des Structures',
      icon: '🏗️',
      skills: ['Milieux Continus', 'Mécanique de la Rupture', 'Fatigue Multiaxiale', 'Dang Van', 'Goodman', 'Dynamique des Structures', 'Mécanique Non Linéaire', 'Contraintes Résiduelles', 'Thermo-élasticité'],
    },
    {
      category: 'Tribologie & Contacts',
      icon: '⚙️',
      skills: ['Contact Hertzien', 'JKR (Adhésif)', 'Tresca', 'Von Mises', 'Tabor', 'Boussinesq', 'Multi-régime', 'Coefficient de frottement'],
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
      category: 'Programmation',
      icon: '💻',
      skills: ['Python', 'NumPy', 'SciPy', 'PyTorch', 'Matplotlib', 'OpenCV', 'Pandas', 'C/C++', 'MATLAB', 'Simulink', 'LaTeX', 'Git/GitHub', 'Gradio'],
    },
  ];

  const experiences = [
    {
      icon: '🎓',
      title: 'Stage de Master — Couplage Déterministe-Stochastique (DEM + Markov)',
      org: 'IMT Mines Albi & IMT Mines Saint-Étienne',
      date: 'Mar. 2026 – Sep. 2026',
      location: 'Albi / Saint-Étienne',
      details: [
        "Couplage simulations DEM avec chaînes de Markov inhomogènes pour caractériser la ségrégation granulaire.",
        "Extraction de probabilités de transition à l'échelle particulaire depuis les sorties DEM.",
        "Plan d'expériences (DoE) et analyse de sensibilité Monte Carlo pour la quantification d'incertitude.",
        'Pipelines numériques complets en Python (NumPy, SciPy, PyTorch, Matplotlib).',
      ],
      tags: ['DEM', 'Markov', 'Python', 'PyTorch', 'UQ', 'DoE'],
    },
    {
      icon: '🔬',
      title: 'Projet de Recherche — Solveur EF 3D Non Linéaire (Critère de Dang Van)',
      org: 'Centrale Lyon – ENISE',
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

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.css');
        @import url('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.css');
        @import url('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.css');
        @import url('https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-400-normal.css');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --glass-bg: rgba(255, 255, 255, 0.06);
          --glass-border: rgba(255, 255, 255, 0.12);
          --text-primary: rgba(255, 255, 255, 0.95);
          --text-secondary: rgba(255, 255, 255, 0.65);
          --text-tertiary: rgba(255, 255, 255, 0.4);
          --accent: #7c6aef;
          --accent-2: #4ecdc4;
          --accent-3: #ff6b9d;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0a0a0f;
          color: var(--text-primary);
          overflow-x: hidden;
          min-height: 100vh;
        }

        .background-orbs {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          z-index: 0; pointer-events: none; overflow: hidden;
        }

        .orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5; }
        .orb-1 { width: 600px; height: 600px; background: radial-gradient(circle, #7c6aef 0%, transparent 70%); top: -10%; left: -10%; }
        .orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, #4ecdc4 0%, transparent 70%); top: 40%; right: -10%; }
        .orb-3 { width: 450px; height: 450px; background: radial-gradient(circle, #ff6b9d 0%, transparent 70%); bottom: -5%; left: 30%; }
        .orb-4 { width: 350px; height: 350px; background: radial-gradient(circle, #f7b731 0%, transparent 70%); top: 20%; left: 50%; }

        .glass-card {
          position: relative;
          background: var(--glass-bg);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 28px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: default;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(124, 106, 239, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .glass-highlight { position: absolute; inset: 0; border-radius: 24px; pointer-events: none; transition: background 0.15s ease; z-index: 1; }
        .glass-reflection { position: absolute; top: 0; left: 0; right: 0; height: 50%; background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, transparent 100%); border-radius: 24px 24px 0 0; pointer-events: none; z-index: 1; }
        .glass-border { position: absolute; inset: 0; border-radius: 24px; pointer-events: none; z-index: 1; background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px; }

        .glass-nav {
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000;
          display: flex; align-items: center; gap: 32px; padding: 14px 28px;
          background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 100px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .nav-brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15px; }
        .nav-logo { font-size: 20px; background: linear-gradient(135deg, var(--accent), var(--accent-2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .nav-links { display: flex; gap: 4px; }
        .nav-link { padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 500; color: var(--text-secondary); text-decoration: none; transition: all 0.3s ease; }
        .nav-link:hover { color: var(--text-primary); background: rgba(255, 255, 255, 0.08); }
        .nav-link.active { color: var(--text-primary); background: rgba(255, 255, 255, 0.1); box-shadow: 0 0 20px rgba(124, 106, 239, 0.15); }

        .main-content { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding-top: 100px; }
        .hero-content { text-align: center; max-width: 800px; }

        .hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; background: rgba(124, 106, 239, 0.12); border: 1px solid rgba(124, 106, 239, 0.25); border-radius: 100px; font-size: 13px; font-weight: 500; color: var(--accent); margin-bottom: 28px; backdrop-filter: blur(20px); }
        .hero-badge .dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        .hero-title { font-size: clamp(42px, 7vw, 80px); font-weight: 700; line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.03em; }
        .hero-title .gradient-text { background: linear-gradient(135deg, #7c6aef 0%, #4ecdc4 50%, #ff6b9d 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; background-size: 200% auto; animation: gradient-shift 4s ease infinite; }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% center; } 50% { background-position: 100% center; } }

        .hero-subtitle { font-size: clamp(16px, 2.2vw, 20px); color: var(--text-secondary); line-height: 1.6; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }

        .hero-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        .btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; border-radius: 100px; font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; cursor: pointer; border: none; font-family: inherit; }
        .btn-primary { background: linear-gradient(135deg, var(--accent), #5a4fd4); color: white; box-shadow: 0 4px 20px rgba(124, 106, 239, 0.35); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(124, 106, 239, 0.5); }
        .btn-glass { background: rgba(255, 255, 255, 0.06); backdrop-filter: blur(20px); color: var(--text-primary); border: 1px solid rgba(255, 255, 255, 0.12); }
        .btn-glass:hover { background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.2); transform: translateY(-2px); }

        .section { padding: 100px 0; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .section-label { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent); margin-bottom: 12px; }
        .section-title { font-size: clamp(28px, 4vw, 44px); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 16px; }
        .section-desc { font-size: 16px; color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.6; }

        .about-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
        .about-text { font-size: 16px; line-height: 1.8; color: var(--text-secondary); }
        .about-text strong { color: var(--text-primary); }

        .info-card { padding: 32px 24px; }
        .info-item { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-size: 14px; }
        .info-item:last-child { margin-bottom: 0; }
        .info-icon { font-size: 18px; }
        .info-label { color: var(--text-tertiary); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; }
        .info-value { color: var(--text-primary); font-weight: 500; }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
        .skill-category-card { padding: 24px; }
        .skill-category-header { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .skill-category-icon { font-size: 28px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.05); border-radius: 14px; flex-shrink: 0; }
        .skill-category-title { font-size: 16px; font-weight: 700; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-tag { padding: 6px 12px; font-size: 12px; font-weight: 500; background: rgba(124, 106, 239, 0.08); border: 1px solid rgba(124, 106, 239, 0.18); border-radius: 100px; color: var(--text-primary); font-family: 'JetBrains Mono', monospace; transition: all 0.3s ease; }
        .skill-tag:hover { background: rgba(124, 106, 239, 0.18); border-color: rgba(124, 106, 239, 0.35); transform: translateY(-1px); }

        .experience-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 20px; }
        .experience-card { cursor: pointer; }
        .exp-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; gap: 12px; }
        .exp-icon { font-size: 28px; width: 52px; height: 52px; display: flex; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.05); border-radius: 14px; flex-shrink: 0; }
        .exp-meta { text-align: right; }
        .exp-date { display: block; font-size: 12px; color: var(--accent); font-weight: 600; font-family: 'JetBrains Mono', monospace; }
        .exp-location { display: block; font-size: 11px; color: var(--text-tertiary); margin-top: 2px; }
        .exp-title { font-size: 17px; font-weight: 700; margin-bottom: 6px; line-height: 1.3; }
        .exp-org { font-size: 13px; color: var(--text-secondary); margin-bottom: 14px; font-style: italic; }
        .exp-details { list-style: none; padding: 14px; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 2px solid var(--accent); margin-bottom: 14px; overflow: hidden; }
        .exp-details li { font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 6px; padding-left: 16px; position: relative; }
        .exp-details li::before { content: '▸'; position: absolute; left: 0; color: var(--accent); }
        .exp-details li:last-child { margin-bottom: 0; }
        .exp-tags, .project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
        .project-tag { padding: 4px 10px; font-size: 11px; font-weight: 600; background: rgba(78, 205, 196, 0.1); border: 1px solid rgba(78, 205, 196, 0.25); border-radius: 100px; color: var(--accent-2); font-family: 'JetBrains Mono', monospace; }
        .exp-expand { font-size: 11px; color: var(--text-tertiary); text-align: center; margin-top: 8px; }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; }
        .project-card { cursor: pointer; }
        .project-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
        .project-icon { font-size: 32px; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.05); border-radius: 16px; }
        .project-links a { color: var(--text-tertiary); transition: color 0.3s; padding: 6px; border-radius: 8px; display: inline-flex; }
        .project-links a:hover { color: var(--accent-2); background: rgba(255, 255, 255, 0.08); }
        .project-title { font-size: 19px; font-weight: 700; margin-bottom: 10px; }
        .project-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 14px; }
        .project-details { overflow: hidden; margin-bottom: 14px; }
        .project-details p { font-size: 13px; color: var(--text-secondary); line-height: 1.7; padding: 14px; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 2px solid var(--accent-2); }

        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .contact-info { padding: 36px; }
        .contact-item { display: flex; align-items: center; gap: 16px; margin-bottom: 22px; }
        .contact-item:last-child { margin-bottom: 0; }
        .contact-icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: rgba(124, 106, 239, 0.1); border: 1px solid rgba(124, 106, 239, 0.2); border-radius: 12px; font-size: 20px; flex-shrink: 0; }
        .contact-label { font-size: 11px; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
        .contact-value { font-size: 14px; font-weight: 500; }
        .contact-value a { color: var(--text-primary); text-decoration: none; transition: color 0.3s; }
        .contact-value a:hover { color: var(--accent); }

        .cv-card { padding: 36px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .cv-icon { font-size: 48px; margin-bottom: 16px; }
        .cv-title { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
        .cv-desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.6; }
        .cv-status { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #4ade80; margin-bottom: 18px; }
        .cv-status .dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse 2s infinite; }

        .footer { text-align: center; padding: 40px 0; border-top: 1px solid rgba(255, 255, 255, 0.06); margin-top: 60px; }
        .footer-text { font-size: 13px; color: var(--text-tertiary); }

        @media (max-width: 768px) {
          .glass-nav { width: calc(100% - 32px); justify-content: space-between; padding: 12px 16px; gap: 8px; }
          .nav-name { display: none; }
          .nav-link { padding: 6px 10px; font-size: 11px; }
          .about-grid, .contact-grid { grid-template-columns: 1fr; }
          .projects-grid, .experience-grid, .skills-grid { grid-template-columns: 1fr; }
          .hero-actions { flex-direction: column; align-items: center; }
        }
      `}</style>

      <LiquidGlassSVG />
      <BackgroundOrbs />
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
              <span className="gradient-text">Ingénieur Mécanique</span>
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
              <a href="cv.pdf" download className="btn btn-glass">
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
              <div className="info-item"><span className="info-icon">🎓</span><div><div className="info-label">Formation</div><div className="info-value">Centrale Lyon–ENISE & ENSPY</div></div></div>
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
              <SkillCategory key={cat.category} {...cat} delay={i * 0.05} />
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
              <ExperienceCard key={exp.title} exp={exp} delay={i * 0.08} />
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
              <ProjectCard key={project.title} project={project} delay={i * 0.1} />
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
    </>
  );
}

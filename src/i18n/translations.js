// ──────────────────────────────────────────────
// i18n – traductions FR / EN
// ──────────────────────────────────────────────

const translations = {
  fr: {
    /* Navigation */
    nav_about:     'À propos',
    nav_engineer:  'Ingénieur',
    nav_master:    'Master',
    nav_cv:        'CV',
    nav_skills:    'Compétences',
    nav_experience:'Expérience',
    nav_projects:  'Projets',
    nav_academic:  'Rapports',
    nav_contact:   'Contact',
    nav_lang:      'EN',

    /* Hero */
    hero_badge:       'Ingénieur simulation chez EP MECA — depuis octobre 2026',
    hero_title_role:  'Ingénieur Mécanique',
    hero_subtitle:    'Conception produit, mécanique des structures et simulation numérique avancée. Double diplôme Centrale Lyon–ENISE & ENSPY — spécialisé en mécanique computationnelle, éléments finis et méthodes stochastiques.',
    hero_btn_projects:'Explorer mes parcours',
    hero_btn_cv:      'Télécharger CV',

    /* About */
    about_title:           'À propos de moi',
    about_p1:              'Ingénieur en génie mécanique et titulaire d\'un <strong>Master 2 en Mécanique des Solides Numériques</strong> (diplôme obtenu en septembre 2026), je me spécialise dans la <strong>conception mécanique</strong>, la <strong>simulation numérique avancée</strong> et la <strong>mécanique computationnelle</strong>. Je travaille comme ingénieur simulation chez EP MECA depuis octobre 2026.',
    about_p2:              'Mes travaux de recherche portent sur le <strong>couplage déterministe-stochastique (DEM + chaînes de Markov)</strong>, les <strong>Réseaux de Neurones Physiquement Informés (PINNs)</strong> pour l\'identification de matériaux, et le développement de <strong>solveurs éléments finis 3D non linéaires</strong> pour la prédiction de défaillance en fatigue.',
    about_p3:              'Rigoureux, autonome et passionné par la résolution de problèmes complexes, je combine expertise technique et approche scientifique pour contribuer à des projets de R&D en mécanique, matériaux et simulation multi-physique.',
    info_education:        'Formation',
    info_location:         'Localisation',
    info_mobility:         'Mobilité',
    info_languages:        'Langues',
    info_availability:     'Situation actuelle',
    current_role_value:    'Ingénieur simulation · EP MECA',

    /* Skills */
    skills_title:    'Compétences',
    skills_subtitle: 'Compétences techniques acquises au cours de ma formation et de mes projets en génie mécanique, simulation numérique et méthodes computationnelles.',

    /* Experience */
    exp_title:    'Expériences',
    exp_subtitle: 'Stages, projets de recherche et expériences professionnelles en mécanique, simulation et industrie.',

    /* Projects */
    proj_title:    'Projets',
    proj_subtitle: 'Projets de recherche, académiques et personnels en mécanique, simulation et développement.',
    proj_mechanics_title: 'Projets Mécaniques',
    proj_master_title:    'Projets de Master & Recherche',

    /* Academic */
    acad_title:    'Rapports Académiques',
    acad_subtitle: 'Rapports de projets, TP et travaux dirigés en dimensionnement des structures, tribologie et simulation numérique.',

    /* Contact */
    contact_title:    'Contact',
    contact_subtitle: 'Pour toute question sur mes projets, mon parcours ou mes travaux de simulation, contactez-moi par e-mail ou LinkedIn.',
    contact_me:       'Me contacter',

    /* Parcours & CV */
    path_eyebrow: 'Parcours et réalisations',
    path_engineer_title: 'Parcours ingénieur',
    path_engineer_intro: 'De la conception mécanique à la simulation numérique appliquée, un parcours orienté vers la résolution de problèmes industriels concrets.',
    path_engineer_focus: 'Conception produit, calcul mécanique, industrialisation, diagnostic et simulation thermique.',
    path_master_title: 'Parcours Master & recherche',
    path_master_intro: 'Formation avancée en mécanique numérique et projets à l’interface entre modélisation physique, calcul scientifique et apprentissage automatique.',
    path_master_focus: 'Éléments finis, réduction de modèles, méthodes stochastiques, PINNs et simulation multi-physique.',
    path_focus_label: 'Domaines clés',
    path_cv_link: 'Voir les CV',
    path_education_label: 'Formation',
    path_education_title: 'Formation académique',
    path_degree_title: 'Diplômes d’ingénieur et Master 2',
    path_degree_detail: 'Génie mécanique général, conception et simulation, et Mécanique des Solides Numériques. Diplôme obtenu en septembre 2026.',
    path_previous_degree_title: 'Cycle ingénieur (M1) et licence',
    path_previous_degree_detail: 'Cycle ingénieur en mécanique et licence en sciences physiques.',
    path_timeline_label: 'Expériences et projets',
    path_experience_title: 'Expériences structurantes',
    path_experience_desc: 'Stages et projets de recherche présentés avec leurs méthodes, outils et contributions.',
    path_work_label: 'Sélection de travaux',
    path_projects_title: 'Projets détaillés',
    path_projects_desc: 'Objectifs, démarches techniques, outils mobilisés et rapports associés.',
    path_courses_label: 'Formation appliquée',
    path_courses_title: 'Cours, travaux pratiques et rapports',
    path_courses_desc: 'Travaux de mécanique, méthodes numériques, thermique et simulation, avec accès aux documents disponibles.',
    path_more_title: 'Explorer l’ensemble du portfolio',
    path_more_desc: 'Retrouver les projets, rapports et compétences dans leurs pages dédiées.',
    path_all_projects: 'Tous les projets',
    cv_eyebrow: 'Documents de candidature',
    cv_title: 'Curriculum vitæ',
    cv_intro: 'Deux angles complémentaires sur mon parcours : ingénierie mécanique et simulation, ou mécanique numérique et recherche.',
    cv_engineer_title: 'CV — Ingénierie mécanique',
    cv_engineer_desc: 'Conception, industrialisation, maintenance, calcul et simulation appliquée.',
    cv_engineer_badge: 'Profil ingénieur',
    cv_research_title: 'CV — Master & recherche',
    cv_research_desc: 'Modélisation physique, calcul scientifique, méthodes de réduction et IA pour la mécanique.',
    cv_research_badge: 'Profil recherche',
    cv_language_note: 'PDF en anglais',
    cv_view: 'Voir en ligne',
    cv_open_pdf: 'Ouvrir le PDF',
    cv_download: 'Télécharger le PDF',
    cv_pdf_pending: 'PDF en cours de génération',
    cv_note: 'Les versions PDF sont générées automatiquement à partir des sources LaTeX du dépôt.',

    /* Footer */
    footer: 'Conçu et développé avec passion. Propulsé par React & GitHub Pages.',
  },

  // ── English ──

  en: {
    nav_about:     'About',
    nav_engineer:  'Engineer',
    nav_master:    'Master',
    nav_cv:        'CV',
    nav_skills:    'Skills',
    nav_experience:'Experience',
    nav_projects:  'Projects',
    nav_academic:  'Reports',
    nav_contact:   'Contact',
    nav_lang:      'FR',

    hero_badge:       'Simulation Engineer at EP MECA — since October 2026',
    hero_title_role:  'Simulation Engineer',
    hero_subtitle:    'Product design, structural mechanics and advanced numerical simulation. Dual degree Centrale Lyon–ENISE & ENSPY — specialized in computational mechanics, finite elements and stochastic methods.',
    hero_btn_projects:'Explore my pathways',
    hero_btn_cv:      'Download CV',

    about_title:           'About me',
    about_p1:              'Mechanical engineer with a <strong>Master\'s degree in Numerical Solid Mechanics</strong> (awarded in September 2026), specializing in <strong>mechanical design</strong>, <strong>advanced numerical simulation</strong> and <strong>computational mechanics</strong>. I have been working as a Simulation Engineer at EP MECA since October 2026.',
    about_p2:              'My research focuses on <strong>deterministic-stochastic coupling (DEM + Markov chains)</strong>, <strong>Physics-Informed Neural Networks (PINNs)</strong> for material identification, and the development of <strong>nonlinear 3D finite element solvers</strong> for fatigue failure prediction.',
    about_p3:              'Rigorous, autonomous and passionate about solving complex problems, I combine technical expertise and a scientific approach to contribute to R&D projects in mechanics, materials and multi-physics simulation.',
    info_education:        'Education',
    info_location:         'Location',
    info_mobility:         'Mobility',
    info_languages:        'Languages',
    info_availability:     'Current role',
    current_role_value:    'Simulation Engineer · EP MECA',

    skills_title:    'Skills',
    skills_subtitle: 'Technical skills acquired through my education and projects in mechanical engineering, numerical simulation and computational methods.',

    exp_title:    'Experience',
    exp_subtitle: 'Internships, research projects and professional experience in mechanics, simulation and industry.',

    proj_title:    'Projects',
    proj_subtitle: 'Research, academic and personal projects in mechanics, simulation and development.',
    proj_mechanics_title: 'Mechanical Projects',
    proj_master_title:    'Master & Research Projects',

    acad_title:    'Academic Reports',
    acad_subtitle: 'Project reports, practical work and tutorials in structural design, tribology and numerical simulation.',

    contact_title:    'Contact',
    contact_subtitle: 'For questions about my projects, background or simulation work, please contact me by email or LinkedIn.',
    contact_me:       'Contact me',

    path_eyebrow: 'Experience and selected work',
    path_engineer_title: 'Engineering pathway',
    path_engineer_intro: 'From mechanical design to applied numerical simulation, a pathway focused on solving concrete industrial problems.',
    path_engineer_focus: 'Product design, mechanical analysis, industrialisation, diagnostics and thermal simulation.',
    path_master_title: 'Master’s & research pathway',
    path_master_intro: 'Advanced training in numerical mechanics and projects at the intersection of physical modelling, scientific computing and machine learning.',
    path_master_focus: 'Finite elements, model reduction, stochastic methods, PINNs and multiphysics simulation.',
    path_focus_label: 'Areas of focus',
    path_cv_link: 'View CVs',
    path_education_label: 'Education',
    path_education_title: 'Academic background',
    path_degree_title: 'Engineering degrees and Master’s degree',
    path_degree_detail: 'General Mechanical Engineering, Design and Simulation, and Numerical Solid Mechanics. Degree awarded in September 2026.',
    path_previous_degree_title: 'Engineering cycle (M1) and bachelor’s degree',
    path_previous_degree_detail: 'Engineering studies in mechanics and a B.Sc. in Physical Sciences.',
    path_timeline_label: 'Experience and projects',
    path_experience_title: 'Key experience',
    path_experience_desc: 'Internships and research projects, including their methods, tools and contributions.',
    path_work_label: 'Selected work',
    path_projects_title: 'Detailed projects',
    path_projects_desc: 'Objectives, technical approach, tools used and related reports.',
    path_courses_label: 'Applied education',
    path_courses_title: 'Coursework, practicals and reports',
    path_courses_desc: 'Work in mechanics, numerical methods, heat transfer and simulation, with links to available documents.',
    path_more_title: 'Explore the full portfolio',
    path_more_desc: 'Browse all projects, reports and skills on their dedicated pages.',
    path_all_projects: 'All projects',
    cv_eyebrow: 'Application documents',
    cv_title: 'Curriculum vitae',
    cv_intro: 'Two complementary views of my background: mechanical engineering and simulation, or numerical mechanics and research.',
    cv_engineer_title: 'CV — Mechanical engineering',
    cv_engineer_desc: 'Design, industrialisation, maintenance, analysis and applied simulation.',
    cv_engineer_badge: 'Engineering profile',
    cv_research_title: 'CV — Master’s & research',
    cv_research_desc: 'Physical modelling, scientific computing, reduced-order methods and AI for mechanics.',
    cv_research_badge: 'Research profile',
    cv_language_note: 'PDF in English',
    cv_view: 'View online',
    cv_open_pdf: 'Open PDF',
    cv_download: 'Download PDF',
    cv_pdf_pending: 'PDF is being generated',
    cv_note: 'PDF versions are generated automatically from the repository’s LaTeX sources.',

    footer: 'Designed and developed with passion. Powered by React & GitHub Pages.',
  },
};

/**
 * Récupère une traduction par clé + langue.
 * Si la clé n'existe pas dans la langue demandée, on utilise le français.
 */
export function t(key, lang) {
  return translations[lang]?.[key] ?? translations.fr[key] ?? key;
}

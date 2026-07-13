// ──────────────────────────────────────────────
// i18n – traductions FR / EN
// ──────────────────────────────────────────────

const translations = {
  fr: {
    /* Navigation */
    nav_about:     'À propos',
    nav_skills:    'Compétences',
    nav_experience:'Expérience',
    nav_projects:  'Projets',
    nav_academic:  'Rapports',
    nav_contact:   'Contact',
    nav_lang:      'EN',

    /* Hero */
    hero_badge:       'Disponible Septembre/Octobre 2026 — Mobilité internationale',
    hero_title_role:  'Ingénieur Mécanique',
    hero_subtitle:    'Conception produit, mécanique des structures et simulation numérique avancée. Double diplôme Centrale Lyon–ENISE & ENSPY — spécialisé en mécanique computationnelle, éléments finis et méthodes stochastiques.',
    hero_btn_projects:'Voir mes projets',
    hero_btn_cv:      'Télécharger CV',

    /* About */
    about_title:           'À propos de moi',
    about_p1:              'Futur <strong>ingénieur en génie mécanique</strong> et titulaire d\'un <strong>Master 2 en Mécanique des Solides Numériques</strong>, je me spécialise dans la <strong>conception mécanique</strong>, la <strong>simulation numérique avancée</strong> et la <strong>mécanique computationnelle</strong>.',
    about_p2:              'Mes travaux de recherche portent sur le <strong>couplage déterministe-stochastique (DEM + chaînes de Markov)</strong>, les <strong>Réseaux de Neurones Physiquement Informés (PINNs)</strong> pour l\'identification de matériaux, et le développement de <strong>solveurs éléments finis 3D non linéaires</strong> pour la prédiction de défaillance en fatigue.',
    about_p3:              'Rigoureux, autonome et passionné par la résolution de problèmes complexes, je combine expertise technique et approche scientifique pour contribuer à des projets de R&D en mécanique, matériaux et simulation multi-physique.',
    info_education:        'Formation',
    info_location:         'Localisation',
    info_mobility:         'Mobilité',
    info_languages:        'Langues',
    info_availability:     'Disponibilité',

    /* Skills */
    skills_title:    'Compétences',
    skills_subtitle: 'Compétences techniques acquises au cours de ma formation et de mes projets en génie mécanique, simulation numérique et méthodes computationnelles.',

    /* Experience */
    exp_title:    'Expériences',
    exp_subtitle: 'Stages, projets de recherche et expériences professionnelles en mécanique, simulation et industrie.',

    /* Projects */
    proj_title:    'Projets',
    proj_subtitle: 'Projets de recherche, académiques et personnels en mécanique, simulation et développement.',

    /* Academic */
    acad_title:    'Rapports Académiques',
    acad_subtitle: 'Rapports de projets, TP et travaux dirigés en dimensionnement des structures, tribologie et simulation numérique.',

    /* Contact */
    contact_title:    'Contact',
    contact_subtitle: 'Disponible pour un stage de Master PFE, CDD ou CDI à partir de Septembre/Octobre 2026.',
    contact_me:       'Me contacter',

    /* Footer */
    footer: 'Conçu et développé avec passion. Propulsé par React & GitHub Pages.',
  },

  // ── English ──

  en: {
    nav_about:     'About',
    nav_skills:    'Skills',
    nav_experience:'Experience',
    nav_projects:  'Projects',
    nav_academic:  'Reports',
    nav_contact:   'Contact',
    nav_lang:      'FR',

    hero_badge:       'Available September/October 2026 — International mobility',
    hero_title_role:  'Mechanical Engineer',
    hero_subtitle:    'Product design, structural mechanics and advanced numerical simulation. Dual degree Centrale Lyon–ENISE & ENSPY — specialized in computational mechanics, finite elements and stochastic methods.',
    hero_btn_projects:'View my projects',
    hero_btn_cv:      'Download CV',

    about_title:           'About me',
    about_p1:              'Future <strong>Mechanical Engineer</strong> with a <strong>Master\'s degree in Numerical Solid Mechanics</strong>, specializing in <strong>mechanical design</strong>, <strong>advanced numerical simulation</strong> and <strong>computational mechanics</strong>.',
    about_p2:              'My research focuses on <strong>deterministic-stochastic coupling (DEM + Markov chains)</strong>, <strong>Physics-Informed Neural Networks (PINNs)</strong> for material identification, and the development of <strong>nonlinear 3D finite element solvers</strong> for fatigue failure prediction.',
    about_p3:              'Rigorous, autonomous and passionate about solving complex problems, I combine technical expertise and a scientific approach to contribute to R&D projects in mechanics, materials and multi-physics simulation.',
    info_education:        'Education',
    info_location:         'Location',
    info_mobility:         'Mobility',
    info_languages:        'Languages',
    info_availability:     'Availability',

    skills_title:    'Skills',
    skills_subtitle: 'Technical skills acquired through my education and projects in mechanical engineering, numerical simulation and computational methods.',

    exp_title:    'Experience',
    exp_subtitle: 'Internships, research projects and professional experience in mechanics, simulation and industry.',

    proj_title:    'Projects',
    proj_subtitle: 'Research, academic and personal projects in mechanics, simulation and development.',

    acad_title:    'Academic Reports',
    acad_subtitle: 'Project reports, practical work and tutorials in structural design, tribology and numerical simulation.',

    contact_title:    'Contact',
    contact_subtitle: 'Available for a Master internship, fixed-term or permanent contract from September/October 2026.',
    contact_me:       'Contact me',

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

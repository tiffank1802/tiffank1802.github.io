// Explicit pathway boundaries keep the portfolio's engineering and master's/research narratives distinct.
// Content remains authored once in data.jsx and is selected here for dedicated routes.
import { engineerCoursework, engineerExperiences, engineerProjects, masterCoursework, masterExperiences, masterProjects } from '../data';

export const pathways = {
  engineer: {
    id: 'engineer',
    experiences: engineerExperiences,
    projects: engineerProjects,
    coursework: engineerCoursework,
  },
  master: {
    id: 'master',
    experiences: masterExperiences,
    projects: masterProjects,
    coursework: masterCoursework,
  },
};

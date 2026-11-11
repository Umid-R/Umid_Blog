// ✏️ Things that are the same in every language live here.
// Translated text lives in src/i18n/ui.ts.

export const CONTACT = {
  email: 'umidraxmatullayev96@gmail.com',
  github: 'https://github.com/Umid-R',
  linkedin: 'https://www.linkedin.com/in/umid-rakhmatullaev-ba452a290',
  telegram: '', // e.g. 'https://t.me/your_username' — leave empty to hide
};

// Each skill: label + icon key (see src/components/Icon.astro)
export const SKILLS = {
  programming: [
    { label: 'Python', icon: 'python' },
    { label: 'C', icon: 'c' },
    { label: 'C++', icon: 'cplusplus' },
    { label: 'SQL', icon: 'database' },
    { label: 'NumPy', icon: 'numpy' },
    { label: 'Pandas', icon: 'pandas' },
  ],
  dataEng: [
    { label: 'Apache Airflow', icon: 'apacheairflow' },
    { label: 'PostgreSQL', icon: 'postgresql' },
    { label: 'SQLite', icon: 'sqlite' },
    { label: 'Supabase', icon: 'supabase' },
    { label: 'FastAPI', icon: 'fastapi' },
    { label: 'REST APIs', icon: 'api' },
    { label: 'Docker', icon: 'docker' },
  ],
  analysis: [
    { label: 'Tableau', icon: 'chart' },
    { label: 'Matplotlib', icon: 'linechart' },
    { label: 'Seaborn', icon: 'linechart' },
  ],
  tools: [
    { label: 'Git', icon: 'git' },
    { label: 'GitHub', icon: 'github' },
    { label: 'Linux (Ubuntu)', icon: 'ubuntu' },
    { label: 'React', icon: 'react' },
    { label: 'TypeScript', icon: 'typescript' },
  ],
} as const;

// Project links + tech stack. Descriptions are translated in ui.ts (same order / same key).
export const PROJECTS = [
  { key: 'air', name: 'Air Quality Monitoring Pipeline', link: 'https://github.com/Umid-R', stack: ['Python', 'SQL', 'PostgreSQL', 'Airflow', 'Supabase', 'Docker'] },
  { key: 'qaza', name: 'Qaza Tracker', link: 'https://github.com/Umid-R/qaza-tracker', stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript'] },
  { key: 'football', name: 'Football Data ELT Pipeline', link: 'https://github.com/Umid-R', stack: ['Python', 'SQL', 'PostgreSQL', 'Airflow'] },
  { key: 'sales', name: 'Sales Data Warehouse', link: 'https://github.com/Umid-R', stack: ['Python', 'SQL', 'PostgreSQL'] },
  { key: 'songdo', name: 'Songdo Edge Intelligence', link: 'https://github.com/Umid-R', stack: ['Git', 'GitHub', 'Team lead'] },
  { key: 'sign', name: 'Sign Language Detection', link: 'https://github.com/Umid-R', stack: ['Python', 'Computer Vision'] },
  { key: 'analytics', name: 'Data Analytics Dashboard', link: 'https://github.com/Umid-R', stack: ['SQL', 'PostgreSQL', 'Tableau'] },
] as const;

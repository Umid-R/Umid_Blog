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
  { key: 'air', slug: 'air-quality-pipeline', name: 'Air Quality Monitoring Pipeline', link: 'https://github.com/Umid-R/-Korea-Air-Quality-Alert-Pipeline', stack: ['Python', 'SQL', 'PostgreSQL', 'Airflow', 'Supabase', 'Docker'] },
  { key: 'qaza', slug: 'qaza-tracker', name: 'Qaza Tracker', link: 'https://github.com/Umid-R/qaza-tracker', stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript'] },
  { key: 'football', slug: 'football-elt-pipeline', name: 'Football Data ELT Pipeline', link: 'https://github.com/Umid-R/Airflow-Sports-Data-Pipeline', stack: ['Python', 'SQL', 'PostgreSQL', 'Airflow'] },
  { key: 'sales', slug: 'sales-data-warehouse', name: 'Sales Data Warehouse', link: 'https://github.com/Umid-R/sql-data-warehouse-project', stack: ['Python', 'SQL', 'PostgreSQL'] },
  { key: 'songdo', slug: 'songdo-edge-intelligence', name: 'Songdo Edge Intelligence', link: 'https://github.com/Umid-R/songdo-edge-intelligence', stack: ['Python', 'Linux', 'SQLite', 'Docker', 'Team lead'] },
  { key: 'sign', slug: 'sign-language-detection', name: 'Sign Language Detection', link: 'https://github.com/Umid-R/Sign_Language_Detection', stack: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe'] },
  { key: 'analytics', slug: 'data-analytics', name: 'Data Analytics Project', link: 'https://github.com/Umid-R/data-analytics-project', stack: ['SQL', 'PostgreSQL'] },
] as const;

// Icon for each tech tag on the Projects page (keys = labels used in PROJECTS.stack)
export const STACK_ICON: Record<string, string> = {
  Python: 'python', SQL: 'database', PostgreSQL: 'postgresql', Airflow: 'apacheairflow',
  Supabase: 'supabase', Docker: 'docker', FastAPI: 'fastapi', React: 'react',
  TypeScript: 'typescript', Tableau: 'chart', Git: 'git', GitHub: 'github',
  'Team lead': 'team', 'Computer Vision': 'eye', TensorFlow: 'tensorflow', OpenCV: 'opencv',
  MediaPipe: 'eye', Linux: 'linux', SQLite: 'sqlite', aiogram: 'telegram', Telegram: 'telegram',
  Vercel: 'vercel', Railway: 'railway', systemd: 'linux', 'Data Modeling': 'database', NumPy: 'numpy',
  pandas: 'pandas', 'scikit-learn': 'scikitlearn',
};

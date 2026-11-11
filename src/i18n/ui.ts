export const LANGS = ['en', 'ru', 'ko', 'uz'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';
export const LANG_LABEL: Record<Lang, string> = { en: 'EN', ru: 'RU', ko: '한', uz: 'UZ' };

/** '/projects' + 'ru' -> '/ru/projects' ; English has no prefix */
export const localize = (lang: Lang, route: string) =>
  lang === DEFAULT_LANG ? route : `/${lang}${route === '/' ? '' : route}`;

type Entry = { title: string; org: string; place?: string; period: string; note?: string };

type UI = {
  name: string;
  nav: { home: string; projects: string; blog: string };
  greeting: string;
  role: string;
  about: string[];
  sec: { education: string; experience: string; skills: string; languages: string; contact: string; posts: string; projects: string };
  skillGroups: { programming: string; dataEng: string; analysis: string; tools: string };
  education: Entry[];
  experience: Entry[];
  languages: { name: string; level: string }[];
  email: string;
  allProjects: string;
  more: string;
  allPosts: string;
  projectsSub: string;
  blogSub: string;
  noPosts: string;
  postsInEnglish: string;
  projects: Record<string, string>;
};

export const ui: Record<Lang, UI> = {
  en: {
    name: 'Umid Rakhmatullaev',
    nav: { home: 'Home', projects: 'Projects', blog: 'Blog' },
    greeting: 'Hello, World',
    role: 'Software Engineer',
    about: [
      "I'm Umid, “writing complex code for a simpler life.” I study Computer Science & Business Administration at Inha University in Incheon, South Korea.",
      "I enjoy building things from scratch: backend, databases, and everything in between. I care about clean code, solving real problems, and learning something new every day.",
      "From Uzbekistan 🇺🇿, living in Korea 🇰🇷.",
    ],
    sec: { education: 'Education', experience: 'Experience', skills: 'Skills', languages: 'Languages', contact: 'Contact', posts: 'Recent posts', projects: 'Projects' },
    skillGroups: { programming: 'Programming & Data', dataEng: 'Data Engineering', analysis: 'Analysis & Visualization', tools: 'Tools & Web' },
    education: [
      { title: 'Inha University', org: 'B.S. Computer Science & Business Administration (Double Major)', place: 'Incheon, South Korea', period: '2024 – 2028', note: 'GPA 4.44 / 4.5' },
      { title: 'Tashkent Finance University', org: 'Bachelor of E-Commerce', place: 'Tashkent, Uzbekistan', period: '2023 – 2024' },
    ],
    experience: [
      { title: 'Undergraduate Research Assistant', org: 'Inha University', period: 'Jun 2026 – Oct 2026', note: 'Studied nonlinear dynamics and chaos theory (Strogatz) under Prof. Jeong Eui Min. Classified fixed points using eigenvalues and the trace–determinant method, and gave weekly technical presentations.' },
      { title: 'English Teacher', org: 'Madrasah International School', period: '2022 – 2023', note: 'Taught English, ran classroom activities and kept students engaged.' },
    ],
    languages: [
      { name: 'English', level: 'Advanced' },
      { name: 'Korean', level: 'Intermediate' },
      { name: 'Russian', level: 'Basic' },
      { name: 'Uzbek', level: 'Native' },
    ],
    email: 'Email',
    allProjects: 'All projects →',
    more: 'More →',
    allPosts: 'All posts →',
    projectsSub: "Things I've built, solo and with teams.",
    blogSub: 'Notes on what I learn and build.',
    noPosts: 'No posts yet.',
    postsInEnglish: '',
    projects: {
      air: 'Automated ELT pipeline for real-time air quality data from the AirKorea API. Bronze/Silver/Gold layers in Supabase, hourly Airflow runs, and alerts posted to X when the air gets hazardous.',
      qaza: 'Web app and Telegram bot for tracking missed prayers, with real users. FastAPI backend, React + TypeScript frontend.',
      football: 'ELT pipeline that ingests football data, cleans and standardizes it, and builds analytical tables for performance insights.',
      sales: 'Data warehouse with Bronze, Silver and Gold layers built from raw CSVs, with a star schema for KPI and reporting queries.',
      songdo: "Operating Systems course project at Inha. Led a team of 8: managed the repo, merged commits and reviewed everyone's code.",
      sign: 'Real-time recognition of ASL letters and digits from a webcam.',
      analytics: 'SQL scripts that explore and analyze a sales database: rankings, trends over time, customer segments and ready-made reports.',
    },
  },

  ru: {
    name: 'Умид Рахматуллаев',
    nav: { home: 'Главная', projects: 'Проекты', blog: 'Блог' },
    greeting: 'Hello, World',
    role: 'Разработчик ПО',
    about: [
      "Я Умид, «пишу сложный код ради более простой жизни». Изучаю компьютерные науки и бизнес-администрирование в Университете Инха в Инчхоне (Южная Корея).",
      "Люблю создавать вещи с нуля: бэкенд, базы данных и всё, что между ними. Для меня важны чистый код, решение реальных задач и возможность каждый день узнавать что-то новое.",
      "Родом из Узбекистана 🇺🇿, живу в Корее 🇰🇷.",
    ],
    sec: { education: 'Образование', experience: 'Опыт', skills: 'Навыки', languages: 'Языки', contact: 'Контакты', posts: 'Последние посты', projects: 'Проекты' },
    skillGroups: { programming: 'Программирование и данные', dataEng: 'Data Engineering', analysis: 'Анализ и визуализация', tools: 'Инструменты и веб' },
    education: [
      { title: 'Университет Инха', org: 'Бакалавр: компьютерные науки и бизнес-администрирование (двойная специальность)', place: 'Инчхон, Южная Корея', period: '2024 – 2028', note: 'Средний балл 4.44 / 4.5' },
      { title: 'Ташкентский финансовый университет', org: 'Бакалавр: электронная коммерция', place: 'Ташкент, Узбекистан', period: '2023 – 2024' },
    ],
    experience: [
      { title: 'Ассистент-исследователь', org: 'Университет Инха', period: 'июнь 2026 – октябрь 2026', note: 'Изучал нелинейную динамику и теорию хаоса (Строгац) под руководством проф. Jeong Eui Min. Классифицировал неподвижные точки с помощью собственных значений и метода «след–определитель», еженедельно выступал с техническими презентациями.' },
      { title: 'Преподаватель английского языка', org: 'Madrasah International School', period: '2022 – 2023', note: 'Преподавал английский, вёл занятия и вовлекал учеников.' },
    ],
    languages: [
      { name: 'Английский', level: 'Продвинутый' },
      { name: 'Корейский', level: 'Средний' },
      { name: 'Русский', level: 'Базовый' },
      { name: 'Узбекский', level: 'Родной' },
    ],
    email: 'Почта',
    allProjects: 'Все проекты →',
    more: 'Подробнее →',
    allPosts: 'Все посты →',
    projectsSub: 'Что я сделал — сам и в команде.',
    blogSub: 'Заметки о том, что я изучаю и делаю.',
    noPosts: 'Пока нет постов.',
    postsInEnglish: 'Посты пока только на английском.',
    projects: {
      air: 'Автоматический ELT-пайплайн для данных о качестве воздуха в реальном времени из AirKorea API. Слои Bronze/Silver/Gold в Supabase, ежечасный запуск через Airflow и оповещения в X, когда воздух становится опасным.',
      qaza: 'Веб-приложение и Telegram-бот для учёта пропущенных намазов, с реальными пользователями. Бэкенд на FastAPI, фронтенд на React + TypeScript.',
      football: 'ELT-пайплайн: загружает футбольные данные, очищает и стандартизирует их и строит аналитические таблицы.',
      sales: 'Хранилище данных со слоями Bronze, Silver и Gold из сырых CSV и схемой «звезда» для KPI и отчётов.',
      songdo: 'Проект по курсу «Операционные системы» в Инха. Руководил командой из 8 человек: вёл репозиторий, мёржил коммиты и делал код-ревью.',
      sign: 'Распознавание букв и цифр ASL с веб-камеры в реальном времени.',
      analytics: 'SQL-скрипты для исследования и анализа базы продаж: рейтинги, динамика во времени, сегменты клиентов и готовые отчёты.',
    },
  },

  ko: {
    name: '우미드 라흐마툴라예프',
    nav: { home: '홈', projects: '프로젝트', blog: '블로그' },
    greeting: 'Hello, World',
    role: '소프트웨어 엔지니어',
    about: [
      "“더 단순한 삶을 위해 복잡한 코드를 쓰는” 우미드입니다. 인천 인하대학교에서 컴퓨터공학과 경영학을 복수전공하고 있습니다.",
      "백엔드, 데이터베이스, 그리고 그 사이의 모든 것을 처음부터 직접 만드는 걸 좋아합니다. 깔끔한 코드, 실제 문제 해결, 그리고 매일 새로운 것을 배우는 것을 중요하게 생각합니다.",
      "우즈베키스탄 출신이고 🇺🇿 지금은 한국에 살고 있습니다 🇰🇷.",
    ],
    sec: { education: '학력', experience: '경력', skills: '기술', languages: '언어', contact: '연락처', posts: '최근 글', projects: '프로젝트' },
    skillGroups: { programming: '프로그래밍 · 데이터', dataEng: '데이터 엔지니어링', analysis: '분석 · 시각화', tools: '도구 · 웹' },
    education: [
      { title: '인하대학교', org: '컴퓨터공학 · 경영학 복수전공 (학사)', place: '인천, 대한민국', period: '2024 – 2028', note: '학점 4.44 / 4.5' },
      { title: '타슈켄트 재정대학교', org: '전자상거래 학사', place: '타슈켄트, 우즈베키스탄', period: '2023 – 2024' },
    ],
    experience: [
      { title: '학부 연구생', org: '인하대학교', period: '2026.06 – 2026.10', note: 'Jeong Eui Min 교수님 지도 아래 비선형 동역학과 카오스 이론(Strogatz)을 공부했습니다. 고유값과 trace–determinant 방법으로 고정점을 분류하고, 매주 기술 발표를 했습니다.' },
      { title: '영어 교사', org: 'Madrasah International School', period: '2022 – 2023', note: '영어를 가르치고 수업 활동과 학생 참여를 관리했습니다.' },
    ],
    languages: [
      { name: '영어', level: '고급' },
      { name: '한국어', level: '중급' },
      { name: '러시아어', level: '기초' },
      { name: '우즈베크어', level: '모국어' },
    ],
    email: '이메일',
    allProjects: '전체 프로젝트 →',
    more: '자세히 →',
    allPosts: '전체 글 →',
    projectsSub: '혼자, 또는 팀으로 만든 것들.',
    blogSub: '배우고 만든 것들을 기록합니다.',
    noPosts: '아직 글이 없습니다.',
    postsInEnglish: '글은 현재 영어로만 작성되어 있습니다.',
    projects: {
      air: 'AirKorea API의 실시간 대기질 데이터를 처리하는 자동 ELT 파이프라인. Supabase에 Bronze/Silver/Gold 계층을 두고 Airflow로 매시간 실행하며, 대기질이 위험해지면 X에 경보를 올립니다.',
      qaza: '놓친 기도를 기록하는 웹 앱과 텔레그램 봇으로, 실제 사용자가 있습니다. 백엔드는 FastAPI, 프론트엔드는 React + TypeScript.',
      football: '축구 데이터를 수집·정제·표준화하고 성과 분석용 테이블을 만드는 ELT 파이프라인.',
      sales: '원시 CSV로 Bronze/Silver/Gold 계층을 구성하고 KPI·리포팅용 스타 스키마를 설계한 데이터 웨어하우스.',
      songdo: '인하대 운영체제 수업 팀 프로젝트. 8명 팀의 리더로서 저장소 관리, 커밋 병합, 코드 리뷰를 맡았습니다.',
      sign: '웹캠으로 ASL 알파벳과 숫자를 실시간으로 인식합니다.',
      analytics: '판매 데이터베이스를 탐색·분석하는 SQL 스크립트 모음: 순위, 시간에 따른 추세, 고객 세분화, 보고서.',
    },
  },

  uz: {
    name: 'Umid Raxmatullayev',
    nav: { home: 'Bosh sahifa', projects: 'Loyihalar', blog: 'Blog' },
    greeting: 'Hello, World',
    role: "Dasturiy ta'minot muhandisi",
    about: [
      "Men Umid, “hayotni soddaroq qilish uchun murakkab kod yozaman”. Incheondagi Inha universitetida Kompyuter fanlari va Biznes boshqaruvi yo'nalishlarida o'qiyman.",
      "Narsalarni noldan qurishni yaxshi ko'raman: backend, ma'lumotlar bazalari va ular orasidagi hamma narsa. Men uchun toza kod, real muammolarni hal qilish va har kuni yangi narsa o'rganish muhim.",
      "Asli O'zbekistondanman 🇺🇿, hozir Koreyada yashayman 🇰🇷.",
    ],
    sec: { education: "Ta'lim", experience: 'Tajriba', skills: "Ko'nikmalar", languages: 'Tillar', contact: 'Aloqa', posts: "So'nggi postlar", projects: 'Loyihalar' },
    skillGroups: { programming: "Dasturlash va ma'lumotlar", dataEng: 'Data Engineering', analysis: 'Tahlil va vizualizatsiya', tools: 'Vositalar va veb' },
    education: [
      { title: 'Inha universiteti', org: "Bakalavr: Kompyuter fanlari va Biznes boshqaruvi (ikki yo'nalish)", place: 'Incheon, Janubiy Koreya', period: '2024 – 2028', note: 'GPA 4.44 / 4.5' },
      { title: 'Toshkent moliya universiteti', org: 'Bakalavr: Elektron tijorat', place: "Toshkent, O'zbekiston", period: '2023 – 2024' },
    ],
    experience: [
      { title: 'Tadqiqotchi-assistent (bakalavriat)', org: 'Inha universiteti', period: '2026-yil iyun – oktabr', note: "Prof. Jeong Eui Min rahbarligida chiziqli bo'lmagan dinamika va xaos nazariyasini (Strogatz) o'rgandim. Xos qiymatlar va trace–determinant usuli bilan muvozanat nuqtalarini tasnifladim, har hafta texnik taqdimotlar qildim." },
      { title: "Ingliz tili o'qituvchisi", org: 'Madrasah International School', period: '2022 – 2023', note: "Ingliz tilidan dars berdim, mashg'ulotlarni olib bordim va o'quvchilarni faollashtirdim." },
    ],
    languages: [
      { name: 'Ingliz tili', level: 'Yuqori' },
      { name: 'Koreys tili', level: "O'rta" },
      { name: 'Rus tili', level: "Boshlang'ich" },
      { name: "O'zbek tili", level: 'Ona tili' },
    ],
    email: 'Email',
    allProjects: 'Barcha loyihalar →',
    more: 'Batafsil →',
    allPosts: 'Barcha postlar →',
    projectsSub: 'Yakka va jamoada qilgan ishlarim.',
    blogSub: "O'rganganlarim va qilganlarim haqida yozuvlar.",
    noPosts: "Hozircha postlar yo'q.",
    postsInEnglish: 'Postlar hozircha faqat ingliz tilida.',
    projects: {
      air: "AirKorea API'dan real vaqtdagi havo sifati ma'lumotlari uchun avtomatlashtirilgan ELT pipeline. Supabase'da Bronze/Silver/Gold qatlamlari, Airflow orqali har soatlik ishga tushirish va havo xavfli bo'lganda X'ga ogohlantirishlar.",
      qaza: "O'tkazib yuborilgan namozlarni hisoblash uchun veb-ilova va Telegram bot, real foydalanuvchilari bor. Backend — FastAPI, frontend — React + TypeScript.",
      football: "Futbol ma'lumotlarini yuklaydigan, tozalaydigan, standartlashtiradigan va tahlil uchun jadvallar quradigan ELT pipeline.",
      sales: "Xom CSV fayllardan Bronze, Silver va Gold qatlamli ma'lumotlar ombori, KPI va hisobotlar uchun star schema bilan.",
      songdo: "Inha'dagi Operatsion tizimlar kursi loyihasi. 8 kishilik jamoaga rahbarlik qildim: repozitoriyni boshqardim, commit'larni birlashtirdim va kodni ko'rib chiqdim.",
      sign: 'Veb-kamera orqali ASL harflari va raqamlarini real vaqtda aniqlash.',
      analytics: "Savdo ma'lumotlar bazasini o'rganish va tahlil qilish uchun SQL skriptlar: reytinglar, vaqt bo'yicha tendensiyalar, mijoz segmentlari va hisobotlar.",
    },
  },
};

/** getStaticPaths helper for [...lang] routes: English at '/', others at '/ru', '/ko', '/uz' */
export const langPaths = () =>
  LANGS.map((l) => ({ params: { lang: l === DEFAULT_LANG ? undefined : l }, props: { lang: l } }));

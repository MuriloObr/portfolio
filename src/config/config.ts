const NAV_LINKS = [
  { id: 'hero', label: 'Início' },
  { id: 'projects', label: 'Projetos' },
  { id: 'tech', label: 'Stack' },
  { id: 'footer', label: 'Contato' },
]

const PROJECTS = [
  {
    id: 1,
    title: 'ForUm',
    desc: 'Forúm online, sendo meu primeiro grande projeto fiz várias implemetações manualmente.',
    tags: ['Typescript', 'Python', 'FastAPI', 'PostgreSQL', 'JWT'],
    status: 'Em Atividade',
    year: '2023',
    github: 'ForUm_Front-End',
    link: 'https://for-um-front-end.vercel.app/',
  },
  {
    id: 2,
    title: 'Violet Track',
    desc: 'Sistema de controle de contas, de extrato do cartão e conta feito para CSVs do Nubank.',
    tags: ['Typescript', 'Golang', 'Fiber', 'Docker', 'Spec Driven'],
    status: 'Em desenvolvimento',
    year: '2026',
    github: 'violet-track',
    link: undefined,
  },
  {
    id: 3,
    title: '???',
    desc: 'Sistema de controle de documentos.',
    tags: ['??', '??', '??'],
    status: 'Em desenvolvimento',
    year: '2026',
    github: undefined,
    link: undefined,
  },
]

const TECH_CATEGORIES = [
  {
    label: 'Linguagens',
    items: ['Javascript', 'Typescript', 'Python', 'Go'],
  },
  {
    label: 'Frameworks e Libs',
    items: [
      'React',
      'NextJs',
      'TailwindCSS',
      'ViteJs',
      'NodeJs',
      'FastAPI',
      'Express',
    ],
  },
  {
    label: 'Banco de Dados',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Prisma'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Neovim', 'Docker', 'Linux', 'Nginx'],
  },
]

const STATUS_COLORS: Record<string, string> = {
  'Em produção': 'var(--color-status-live)',
  'Em Atividade': 'var(--color-status-live)',
  Concluído: 'var(--color-secondary)',
  'Em desenvolvimento': 'var(--color-status-wip)',
  'Open Source': 'var(--color-primary)',
}

export const config = {
  NAV_LINKS,
  PROJECTS,
  TECH_CATEGORIES,
  STATUS_COLORS,
}

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
  },
  {
    id: 2,
    title: '???',
    desc: 'Sistema ERP de WMS simples.',
    tags: ['??', '??', '??'],
    status: 'Em desenvolvimento',
    year: '2026',
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
  'Em produção': 'var(--color-primary)',
  Concluído: 'var(--color-secondary)',
  'Em desenvolvimento': 'var(--color-foreground)',
  'Open Source': 'var(--color-primary)',
}

export const config = {
  NAV_LINKS,
  PROJECTS,
  TECH_CATEGORIES,
  STATUS_COLORS,
}

import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiDocker,
  SiGit,
} from 'react-icons/si';

export const NAV_LINKS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.stack', href: '#stack' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
];

export const TECH_STACK = [
  {
    name: 'React',
    icon: FaReact,
    color: 'text-cyan-400',
  },
  {
    name: 'Vite',
    icon: SiVite,
    color: 'text-purple-400',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-400',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-teal-400',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'text-white',
  },
  {
    name: 'NestJS',

    icon: SiNestjs,
    color: 'text-red-500',
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    color: 'text-emerald-400',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    color: 'text-blue-500',
  },
  {
    name: 'Git',
    icon: SiGit,
    color: 'text-orange-500',
  },
  {
    name: 'Node.js',
    description: 'Runtime para JavaScript no servidor',
    icon: FaNodeJs,
    color: 'text-green-500',
  },
];

export const PROJECTS = [
  {
    title: 'projects.items.blog.title',
    description: 'projects.items.blog.description',
    tags: ['Next.js', 'TypeScript', 'Docker', 'Nest.JS', 'Prisma'],
    image: '/blog.png',
    github: [
      {
        label: 'Frontend',
        url: 'https://github.com/Frandiin/next-gen-admin-panel',
      },
      {
        label: 'Backend',
        url: 'https://github.com/Frandiin/nest-prisma-docker',
      },
    ],
    demo: 'https://next-gen-admin-panel.vercel.app/',
  },
  {
    title: 'projects.items.wanessa.title',
    description: 'projects.items.wanessa.description',
    tags: ['Next.js', 'Framer Motion', 'Tailwndcss'],
    image: 'wanessa.png',
    github: [
      {
        label: 'Code',
        url: 'https://github.com/Frandiin/WanessaTatto',
      },
    ],
    demo: 'https://wanessa-tatto.vercel.app/',
  },
  {
    title: 'projects.items.point.title',
    description: 'projects.items.point.description',
    tags: ['React', 'Vite', 'Tailwndcss'],
    image: 'point.png',
    github: [
      {
        label: 'Code',
        url: 'https://github.com/Frandiin/PointCleaning',
      },
    ],
    demo: 'https://www.pointcleaning.net/',
  },
];

export const EXPERIENCE = [
  {
    company: 'experience.items.alana.company',
    role: 'experience.items.alana.role',
    period: '2024 - Presente',
    description: 'experience.items.alana.description',
  },
  {
    company: 'experience.items.startup.company',
    role: 'experience.items.startup.role',
    period: '2023 - 2024',
    description: 'experience.items.startup.description',
  },
];

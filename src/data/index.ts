import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { XIcon } from '@/components/icons/x'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Roisul Adib',
  initials: 'RA'
}

export const ABOUT = {
  title: `Frontend Engineer, Developer Relations and Blockchain enthusiast.
  Always influenced by design. Based in Demak, Indonesia 🇮🇩`,
  description: `Passionate about creating innovative tech solutions for social impact.
  Focused on using advanced frontend technologies to improve
  accessibility and performance in web applications. My main goal is to
  enhance user experience, making the web a better place for everyone.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/roisuladib',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/roisuladib',
    icon: LinkedInIcon
  },
  {
    title: 'X (Twitter)',
    url: 'https://x.com/roisuladib',
    icon: XIcon
  },
  {
    title: 'Resume',
    url: '/assets/cv.pdf',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:adib17r@gmail.com',
    icon: MailIcon
  },
  {
    title: 'Other Links',
    url: 'https://roisuladib.vercel.app/',
    icon: LinkIcon
  }
]

export const CAREER = [
  {
    company: 'Nusatech Development',
    link: 'https://www.nusatech.id/',
    badges: ['On-site'],
    jobs: [
      {
        title: 'Frontend Engineer',
        start: 'Jan 2023',
        end: 'Present',
        description: [
          'Researched and implemented new frontend technologies and tools.',
          'Implement blockchain technology, including Ethereum and Solidity, to ensure security and transparency of transactions on the platform.',
          'Developing core features of the exchange platform, such as real-time price displays, candlestick charts, order books, and transaction history.',
          'Collaborated with team members to enhance project outcomes.'
        ]
      },
      {
        title: 'Backend Engineer',
        start: 'Dec 2023',
        end: 'Jan 2024',
        description: [
           'Design and manage relational PostgreSQL databases to store application data.',
           'Design and develop scalable and efficient RESTful APIs using NestJS, a framework built on top Fastify.',
           "Responsible for the development and maintenance of the application's backend using Nest.js and Typescript."
        ]
      },
      {
        title: 'Mobile Engineer',
        start: 'Aug 2023',
        end: 'Dec 2023',
        description: [
         'Designing and developing mobile applications using React Native with TypeScript for both iOS and Android platforms.',
         'Integrating the application with a RESTful API to retrieve and send data to the backend.',
         'Optimizing application performance to ensure fast loading times and efficient battery consumption.'
         //  'Contributing to the development of the CalegHub Application is an innovative solution designed to optimize legislative election campaigns through smart budget management and structured campaign planning.',
         //  'The advantage of CalegHub is that it empowers legislative candidates, campaign coordinators and volunteers with innovative and integrated tools, so they can work together to achieve victory in the election.'
        ]
      },
      {
         title: 'Backend Engineer',
         start: 'Jul 2023',
         end: 'Aug 2023',
         description: [
           "Responsible for the development and maintenance of the application's backend using Express.js and Typescript.",
           'Implement TypeScript across the entire backend technology stack to enhance type safety and reduce potential errors.',
           'Conduct comprehensive testing (unit testing, integration testing) to ensure API quality and functionality.',
           'Design and manage relational PostgreSQL databases to store application data.'
         ]
       }
    ]
  },
  {
   company: 'Digiasset Exchange',
   link: 'https://digiasset.vercel.app',
   badges: ['On-site'],
   jobs: [
     {
       title: 'Frontend Engineer',
       start: 'Aug 2022',
       end: 'Jan 2023',
       description: [
         'Collaborating with the backend team and UI/UX designers to ensure seamless API integration and optimal user experience.',
         'Building reusable and maintainable UI components, such as interactive charts, data tables, and input forms.',
         'Creating a responsive and user-friendly UI for a cryptocurrency exchange platform, using React and TypeScript.',
         'Developing core features of the exchange platform, such as real-time price displays, candlestick charts, order books, and transaction history.',
         'Optimizing website performance with techniques such as code splitting, lazy loading, and list virtualization to handle large amounts of data.',
         'Implementing security features such as two-factor authentication (2FA), protection against Cross-Site Scripting (XSS) attacks, and encryption of sensitive data.',
         'Conducting thorough testing (unit testing, integration testing) to ensure the quality, security, and reliability of the exchange platform.',
         'Staying up-to-date with the latest advancements in Web3, React, and TypeScript technologies to improve development efficiency and quality.'
       ]
     }
   ]
  },
  {
    company: 'Data Andalan Utama',
    link: 'https://www.datautama.com/',
    badges: ['On-site'],
    jobs: [
      {
        title: 'Full Stack Web Developer',
        start: 'Dec 2021',
        end: 'Jun 2022',
        description: [
          'Developed and designed responsive websites using Laravel and Vuejs.',
          'Collaborate with the team to design the API endpoints using CI-3.',
          'Implemented SEO strategies to improve website visibility.'
        ]
      }
    ]
  },
  {
    company: 'Semarang City Social Service',
    link: 'https://dinsos.ppid.semarangkota.go.id/kontak/',
    badges: ['On-site'],
    jobs: [
      {
        title: 'Section Assistant',
        start: 'Sep 2021',
        end: 'Nov 2021',
        description: [
          'Input data into excel and admin web.'
        ]
      }
    ]
  }
]

const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJSIcon
  },
  REACT: {
    name: 'React',
    icon: ReactIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon
  },
  HTML: {
    name: 'HTML',
    icon: HTMLIcon
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon
  },
  VITE: {
    name: 'Vite',
    icon: ViteIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon
  },
  SHADCN: {
    name: 'Shadcn/ui',
    icon: ShadcnIcon
  },
  SWC: {
    name: 'SWC',
    icon: SWCIcon
  },
  OPENAI: {
    name: 'OpenAI',
    icon: OpenAIIcon
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon
  },
  SVELTE: {
    name: 'Svelte',
    icon: SvelteIcon
  },
  NODE: {
    name: 'Node.js',
    icon: NodeJSIcon
  },
  VITEST: {
    name: 'Vitest',
    icon: VitestIcon
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: BootstrapIcon
  },
  SUPABASE: {
    name: 'Supabase',
    icon: SupabaseIcon
  },
  REDUX: {
    name: 'Redux',
    icon: ReduxIcon
  },
  PNPM: {
    name: 'PNPM',
    icon: PNPMIcon
  },
  VERCEL: {
    name: 'Vercel',
    icon: VercelIcon
  },
  BASEHUB: {
    name: 'BaseHub',
    icon: BasehubIcon
  },
  GRAPHQL: {
    name: 'GraphQL',
    icon: GraphQLIcon
  }
}

export const PROJECTS = [
  {
    title: 'Coinlush - Next.js',
    tags: [
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.VERCEL
    ],
    description:
      'View the list with all cryptocurrency prices of today. View live values of Bitcoin, Ethereum and thousands more.',
    link: {
      github: 'https://github.com/roisuladib/coinlush',
      preview: 'https://coinlush-roisuladib.vercel.app/coins'
    },
    image: '/images/coinlush.webp'
  },
  {
    title: 'Blockytics - Next.js',
    tags: [
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.VERCEL
    ],
    description:
      'Blockytics is the blockchain explorer available today. 100+ chains and counting rely on Blockscout data availability, APIs, and ecosystem tools to support their networks.',
    link: {
      github: 'https://github.com/roisuladib/blockytics',
      preview: 'https://blockytics.vercel.app/blocks'
    },
    image: '/images/blockytics.webp'
  },
  {
    title: 'Password generator - Next.js',
    tags: [
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.VERCEL
    ],
    description: 'Create strong, secure, and customizable passwords instantly with our password generator',
    link: {
      github: 'https://github.com/roisuladib/password-generator',
      preview: 'https://pwgen.vercel.app'
    },
    image: '/images/password-generator.webp'
  }
]

import { IconType } from 'react-icons'
import { GiKiwiBird } from 'react-icons/gi'
import { MdLineStyle } from 'react-icons/md'
import {
  SiAmazonaws,
  SiApachekafka,
  SiApollographql,
  SiBem,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGnubash,
  SiGo,
  SiGraphql,
  SiKeras,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPostgresql,
  SiPwa,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiScikitlearn,
  SiTailwindcss,
  SiTrpc,
  SiUnity,
  SiVim,
  SiVisualstudiocode,
} from 'react-icons/si'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'data'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJs',
      icon: SiNextdotjs,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'Apollo Graphql',
      icon: SiApollographql,
    },
    {
      name: 'React Query',
      icon: SiReactquery,
    },
    {
      name: 'Zustand',
      icon: MdLineStyle,
    },
  ],
  backend: [
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'Graphql',
      icon: SiGraphql,
    },
    // {
    //   name: 'Express',
    //   icon: SiExpress,
    // },
    // {
    //   name: 'Javascript (ES6+)',
    //   icon: SiJavascript,
    // },
    // {
    //   name: 'Typescript',
    //   icon: SiTypescript,
    // },
    {
      name: 'TRPC',
      icon: SiTrpc,
    },
    {
      name: 'Go',
      icon: SiGo,
    },
    // {
    //   name: 'D3.Js',
    //   icon: SiD3Dotjs,
    // },
  ],
  data: [
    {
      name: 'Pandas',
      icon: SiPandas,
    },
    {
      name: 'Keras',
      icon: SiKeras,
    },
    {
      name: 'Scikit-Learn',
      icon: SiScikitlearn,
    },
    {
      name: 'Weka',
      icon: GiKiwiBird,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'Firebase',
      icon: SiFirebase,
    },
    // {
    //   name: 'MongoDb',
    //   icon: SiMongodb,
    // },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    // {
    //   name: 'MySQL',
    //   icon: SiMysql,
    // },
    {
      name: 'Kafka',
      icon: SiApachekafka,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'AWS',
      icon: SiAmazonaws,
    },
    // {
    //   name: 'Azure',
    //   icon: SiMicrosoftazure,
    // },
    // {
    //   name: 'NGINX',
    //   icon: SiNginx,
    // },
  ],
  'ui frameworks': [
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      name: 'BEM',
      icon: SiBem,
    },
    // {
    //   name: 'Styled Components',
    //   icon: SiStyledcomponents,
    // },
    // {
    //   name: 'Bootstrap',
    //   icon: SiBootstrap,
    // },
    // {
    //   name: 'Framer Motion',
    //   icon: SiFramer,
    // },
    // {
    //   name: 'ChakraUI',
    //   icon: SiChakraui,
    // },
    // {
    //   name: 'NativeBase',
    //   icon: MdLineStyle,
    // },
    // {
    //   name: 'MaterialUI',
    //   icon: SiMaterialdesign,
    // },
  ],
  'productivity boost': [
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Vim',
      icon: SiVim,
    },
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Bash (I use Arch BTW)',
      icon: SiGnubash,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'PWA',
      icon: SiPwa,
    },
  ],
  games: [
    {
      name: 'Unity3D',
      icon: SiUnity,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}

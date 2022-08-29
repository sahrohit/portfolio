import { IconType } from 'react-icons'
import { GiKiwiBird } from 'react-icons/gi'
import { MdLineStyle } from 'react-icons/md'
import {
  SiAmazonaws,
  SiApollographql,
  SiBootstrap,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGnubash,
  SiGo,
  SiGraphql,
  SiJavascript,
  SiKeras,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPwa,
  SiReact,
  SiRedis,
  SiRedux,
  SiScikitlearn,
  SiStyledcomponents,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
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
      name: 'NextJS',
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
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Go',
      icon: SiGo,
    },
    {
      name: 'Express',
      icon: SiExpress,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
  ],
  data: [
    {
      name: 'Tensorflow',
      icon: SiTensorflow,
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
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'Datagrip',
      icon: MdLineStyle,
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
  ],
  'ui frameworks': [
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      name: 'Mantine',
      icon: MdLineStyle,
    },
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'Bootstrap',
      icon: SiBootstrap,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: SiChakraui,
    },
    {
      name: 'NativeBase',
      icon: MdLineStyle,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialui,
    },
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
      name: 'Bash',
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

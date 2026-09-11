import { IconType } from 'react-icons'
import { GiKiwiBird } from 'react-icons/gi'
import { MdLineStyle, MdSecurity } from 'react-icons/md'
import { FaJava, FaRobot, FaBrain } from 'react-icons/fa'
import { TbDatabase, TbArrowsSplit } from 'react-icons/tb'
import {
  SiAmazonwebservices,
  SiCloudflare,
  SiD3Dotjs,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiGo,
  SiGoogle,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSocketdotio,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVim,
  SiVisualstudiocode,
  SiVite,
} from 'react-icons/si'

export type SkillCategory =
  | 'languages'
  | 'web development'
  | 'database'
  | 'data science'
  | 'cloud & devops'
  | 'ai integration'
  | 'security & practices'
  | 'productivity boost'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  languages: [
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'SQL', icon: TbDatabase },
    { name: 'Java', icon: FaJava },
    { name: 'Go', icon: SiGo },
    { name: 'HTML / CSS', icon: SiHtml5 },
  ],
  'web development': [
    { name: 'React.js', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Zustand', icon: MdLineStyle },
    { name: 'TRPC', icon: SiTrpc },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'GraphQL', icon: SiGraphql },
  ],
  database: [
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Redis', icon: SiRedis },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Drizzle / Kysely', icon: TbDatabase },
    { name: 'Socket.IO', icon: SiSocketdotio },
  ],
  'data science': [
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'Scikit-Learn', icon: SiScikitlearn },
    { name: 'Pandas', icon: SiPandas },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Weka', icon: GiKiwiBird },
    { name: 'D3.js', icon: SiD3Dotjs },
    { name: 'Observable', icon: TbArrowsSplit },
  ],
  'cloud & devops': [
    { name: 'AWS (S3)', icon: SiAmazonwebservices },
    { name: 'Docker', icon: SiDocker },
    { name: 'Cloudflare Workers', icon: SiCloudflare },
    { name: 'DigitalOcean', icon: SiDigitalocean },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'CI / CD', icon: SiGit },
  ],
  'ai integration': [
    { name: 'Gemini API', icon: SiGoogle },
    { name: 'MCP Servers', icon: FaRobot },
    { name: 'Streaming LLM UIs', icon: FaBrain },
    { name: 'Natural-language-to-SQL', icon: TbDatabase },
  ],
  'security & practices': [
    { name: 'JWT / RBAC', icon: SiJsonwebtokens },
    { name: 'AES-256 Encryption', icon: MdSecurity },
    { name: 'Rate Limiting', icon: MdSecurity },
    { name: 'Pino / Axiom Observability', icon: MdLineStyle },
    { name: 'Agile Methodology', icon: SiGit },
  ],
  'productivity boost': [
    { name: 'Git', icon: SiGit },
    { name: 'VS Code', icon: SiVisualstudiocode },
    { name: 'Vim', icon: SiVim },
    { name: 'Bash', icon: SiGnubash },
    { name: 'Vite', icon: SiVite },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = Math.ceil(arrLength / 2)
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

import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  SiAstro,
  SiRedis,
  SiTailwindcss,
  SiPostgresql,
  SiChakraui,
  SiGraphql,
  SiApollographql,
  SiUnity,
  SiReact,
  SiNextdotjs,
  SiNextra,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { PiFlagPennantFill } from 'react-icons/pi'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'

const MotionGrid = motion.create(Grid)
const MotionGridItem = motion.create(GridItem)

const featuredWorks = [
  {
    idx: 1,
    tags: [
      { label: 'React', icon: SiReact },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'Postgres', icon: SiPostgresql },
    ],
    title: 'OSOM',
    src: '/works/osom-mockup.webp',
    description:
      'Multi-tenant Overseas Student Operations Management System serving more than 15 education consultancies across Nepal.',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: 'https://www.osom.global/',
    objectPosition: 'right 20%',
  },
  {
    idx: 2,
    tags: [
      { label: 'Astro', icon: SiAstro },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'CTFd', icon: PiFlagPennantFill },
    ],
    title: 'HEx Himalaya',
    src: '/works/hex-mock-with-background.webp',
    description:
      'Websites for HEx Events, HEx Hackathon and HEx CTF organized by Himalaya College of Engineering.',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: 'https://www.hexhimalaya.com/',
    sourceUrl: 'https://github.com/sahrohit/hex2023',
    objectPosition: 'right 20%',
  },
  {
    idx: 3,
    tags: [
      { label: 'Postgres', icon: SiPostgresql },
      { label: 'Next', icon: SiNextdotjs },
      { label: 'Nextra', icon: SiNextra },
    ],
    title: 'Pracharya',
    description:
      'Conquer Your Exam Goals: Share tips, ask questions, and get support from a vibrant community of fellow students preparing for the same exams.',
    src: '/works/pracharya-mockup.webp',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: 'https://pracharya.vercel.app',
    sourceUrl: 'https://github.com/sahrohit/pracharya',
  },
  {
    idx: 4,
    tags: [
      { label: 'NextJs', icon: TbBrandNextjs },
      { label: 'GraphQl', icon: SiGraphql },
      { label: 'Chakra UI', icon: SiChakraui },
      { label: 'Postgres', icon: SiPostgresql },
      { label: 'Redis', icon: SiRedis },
      { label: 'Apollo GraphQl', icon: SiApollographql },
    ],
    title: 'Hamro Pasal',
    description:
      'Ecommerce platform filled complete with every feature you can imagine.',
    src: '/works/hamropasal-mock.webp',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: 'https://hamropasal.vercel.app/',
    sourceUrl: 'https://github.com/sahrohit/fullstack-ecommerce',
  },
  {
    idx: 5,
    tags: [{ label: 'Unity', icon: SiUnity }],
    title: 'Crystal Chaos',
    description:
      'Game made with Unity where you Fight for your life to obtain the crystal that holds the forbidden power.',
    src: '/works/crystal-chaos-mock.webp',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    sourceUrl: 'https://github.com/Team-NPCs/Crystal-Chaos',
  },
]

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Explore a collection of my personal projects and case studies, created
        during my free time out of pure interest and passion.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        {featuredWorks.map((work, index) => (
          <MotionGridItem key={work.idx} colSpan={6} variants={fadeInUpSlower}>
            <FeaturedCard
              idx={index + 1}
              tags={work.tags}
              title={work.title}
              src={work.src}
              description={work.description}
              height={work.height}
              ctaUrl={work.ctaUrl}
              sourceUrl={work.sourceUrl}
              objectPosition={work.objectPosition}
              isMobile={isMobile}
            />
          </MotionGridItem>
        ))}
      </MotionGrid>
      <Text variant="description">
        Discover a treasure trove of my innovative projects on{' '}
        <Text
          as="span"
          variant="emphasis"
          _hover={{
            textDecoration: 'underline',
          }}
        >
          <Link href="https://github.com/sahrohit">(github/sahrohit)</Link>
        </Text>
        , where my passion for pushing boundaries and creating cutting-edge
        solutions comes to life.
      </Text>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)

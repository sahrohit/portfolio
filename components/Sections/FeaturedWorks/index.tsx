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
  SiReact,
  SiNextdotjs,
  SiNextra,
  SiTypescript,
  SiExpress,
  SiDocker,
  SiAmazonwebservices,
  SiFirebase,
  SiLeaflet,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { PiFlagPennantFill } from 'react-icons/pi'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'

const featuredWorks = [
  {
    idx: 1,
    tags: [
      { label: 'React', icon: SiReact },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'Express', icon: SiExpress },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'Postgres', icon: SiPostgresql },
    ],
    title: 'OSOM: Overseas Student Operation Management',
    src: '/works/osom-mockup.webp',
    description:
      'Comprehensive CRM for education consultancies featuring student management, task tracking, visa scheduling, and a feedback-driven dashboard for real-time progress monitoring, serving 100+ consultancies in Nepal and processing 900,000+ monthly requests.',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: 'https://osom.global',
    objectPosition: 'right 20%',
  },
  {
    idx: 2,
    tags: [
      { label: 'Astro', icon: SiAstro },
      { label: 'Docker', icon: SiDocker },
      { label: 'AWS', icon: SiAmazonwebservices },
      { label: 'CTFd', icon: PiFlagPennantFill },
    ],
    title: 'HEx 2023 Website (Event, Hackathon & CTF)',
    src: '/works/hex-mock-with-background.webp',
    description:
      'Websites for HEx Himalaya, including hackathon, events list, and CTF sites organized by Himalaya College of Engineering. Scored 100% in Lighthouse in all factors and handled over 25,000 requests in 36 hours.',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: 'https://www.hexhimalaya.com/',
    sourceUrl: 'https://github.com/sahrohit/hex2023',
    objectPosition: 'right 20%',
  },
  {
    idx: 3,
    tags: [
      { label: 'React', icon: SiReact },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'Firebase', icon: SiFirebase },
      { label: 'Leaflet', icon: SiLeaflet },
    ],
    title: 'DelliDrop: Grocery Delivery Admin Platform',
    src: '/works/dellidrop-mockup.webp',
    description:
      'Grocery delivery admin platform with a time-series forecasting model predicting grocery price trends to boost profit margins by 30%, paired with route optimization on the OSRM Trip API with Haversine fallback serving 300+ customers.',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    sourceUrl: 'https://github.com/sahrohit/drop-it',
    ctaUrl: 'https://drop-it-alpha.vercel.app',
  },
  {
    idx: 4,
    tags: [
      { label: 'React', icon: SiReact },
      { label: 'Next.js', icon: SiNextdotjs },
      { label: 'Nextra', icon: SiNextra },
      { label: 'Postgres', icon: SiPostgresql },
    ],
    title: 'Pracharya: Mock Test & Notes Platform',
    description:
      'Mock test & notes community platform where students share study materials, practice tests, and collaborate to achieve their exam goals.',
    src: '/works/pracharya-mockup.webp',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: 'https://pracharya.vercel.app',
    sourceUrl: 'https://github.com/sahrohit/pracharya',
  },
  {
    idx: 5,
    tags: [
      { label: 'NextJs', icon: TbBrandNextjs },
      { label: 'GraphQl', icon: SiGraphql },
      { label: 'Chakra UI', icon: SiChakraui },
      { label: 'Postgres', icon: SiPostgresql },
      { label: 'Redis', icon: SiRedis },
      { label: 'Apollo GraphQl', icon: SiApollographql },
    ],
    title: 'Multi-tenant Ecommerce Platform',
    description:
      'Highly scalable and secured GraphQL API backend with fault tolerance, load balancing, TypeORM, Postgres, and Redis caching for user sessions and rate limiting, coupled with a Next.js storefront.',
    src: '/works/hamropasal-mock.webp',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    ctaUrl: 'https://hamropasal.vercel.app/',
    sourceUrl: 'https://github.com/sahrohit/fullstack-ecommerce',
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

      <Grid
        as={motion.div}
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        {featuredWorks.map((work, index) => (
          <GridItem
            as={motion.div}
            key={work.idx}
            colSpan={6}
            variants={fadeInUpSlower}
          >
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
          </GridItem>
        ))}
      </Grid>
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

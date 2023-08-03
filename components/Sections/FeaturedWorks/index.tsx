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
  SiFlask,
  SiFirebase,
  SiPytorch,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { PiFlagPennantFill } from 'react-icons/pi'
import { motion } from 'framer-motion'
import { Link } from '@chakra-ui/next-js'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

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
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            tags={[
              {
                label: 'Astro',
                icon: SiAstro,
              },
              {
                label: 'Tailwind CSS',
                icon: SiTailwindcss,
              },
              {
                label: 'CTFd',
                icon: PiFlagPennantFill,
              },
            ]}
            title="HEx Himalaya"
            src="/works/hex-mock-with-background.png"
            description="Websites for HEx Events, HEx Hackathon and HEx CTF organized by Himalaya College of Engineering."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.hexhimalaya.com/"
            sourceUrl="https://github.com/sahrohit/hex2023"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            tags={[
              {
                label: 'NextJs',
                icon: TbBrandNextjs,
              },
              {
                label: 'GraphQl',
                icon: SiGraphql,
              },
              {
                label: 'Chakra UI',
                icon: SiChakraui,
              },
              {
                label: 'Postgres',
                icon: SiPostgresql,
              },
              {
                label: 'Redis',
                icon: SiRedis,
              },
              {
                label: 'Apollo GraphQl',
                icon: SiApollographql,
              },
            ]}
            title="Hamro Pasal"
            description="Ecommerce platform filled complete with every feature you can imagine."
            src="/works/hamropasal-mock.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://hamropasal.vercel.app/"
            sourceUrl="https://github.com/sahrohit/fullstack-ecommerce"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            tags={[
              {
                label: 'Unity',
                icon: SiUnity,
              },
            ]}
            title="Crystal Chaos"
            description="Game made with Unity where you Fight for your life to obtain the crystal that holds the forbidden power."
            src="/works/crystal-chaos-mock.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            sourceUrl="https://github.com/Team-NPCs/Crystal-Chaos"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            tags={[
              {
                label: 'PyTorch',
                icon: SiPytorch,
              },
              {
                label: 'Flask',
                icon: SiFlask,
              },
              {
                label: 'Firebase',
                icon: SiFirebase,
              },
            ]}
            title="Chatbot"
            description="A Chatbot made with PyTorch and Nextjs, which answers most of your questions but get a little finiky sometimes."
            src="/works/chatbot-mockup.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://ml-chatbot.vercel.app"
            sourceUrl="https://github.com/sahrohit/ml-chatbot"
            isMobile={isMobile}
          />
        </MotionGridItem>
        {/* <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Madre"
            src="/madre-mockup.webp"
            description="Platform for ordering food from a restraunt chain."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://madre.vercel.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="GoTrip"
            description="A highly interactive travel companion app made with Manitine💖."
            src="/gotrip-mockup.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://gotrip.vercel.app"
            isMobile={isMobile}
          />
        </MotionGridItem> */}
      </MotionGrid>
      <Text variant="description">
        Discover a treasure trove of my innovative projects on{' '}
        <Link href="https://github.com/sahrohit">(github/sahrohit)</Link>, where
        my passion for pushing boundaries and creating cutting-edge solutions
        comes to life.
      </Text>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)

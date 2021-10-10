import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  Tooltip,
  Box,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const [ref, inView] = useInView()

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
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        Well, I vaguely recall myself taking the{' '}
        <Tooltip
          label="Red Pill or Blue Pill?"
          aria-label="Matrix Reference"
          placement="top"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b> blue pill</b>
          </Text>
        </Tooltip>
        . So, whoever designed Earth C-137, really did a great job of designing
        it. Respecting that, I really enjoy travelling and discovering natural
        beauties.
        <br />
        <br />
        If you wanna have coffee with me sometime feel free to message me on any
        of my social media or shoot me an&nbsp;
        <Link
          href="mailto:sahrohit9586@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>{' '}
        or tag a pigeon with your message and send it my way.
      </Text>

      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://www.linkedin.com/in/marclawingco/"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            {/* <Icon as={FaLinkedin} h={6} w={6} /> <br /> */}
            Design by KL Lawingco.
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)

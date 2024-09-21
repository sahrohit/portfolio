import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  Container,
  Link,
  Box,
  Icon,
  Tooltip,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  // scaleUp,
  divider,
} from 'config/animations'
import { SocialMedias } from 'config/sidebar'
const Sidebar = () => {
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const MotionHeading = motion.create(Heading)
  const MotionText = motion.create(Text)
  const MotionStack = motion.create(Stack)
  const MotionButton = motion.create(Button)
  const MotionBox = motion.create(Box)
  const MotionFlex = motion.create(Flex)

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${
          colorMode === 'light' ? styles.dark : ''
        }`}
        variants={divider}
        style={{ display: display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      ></motion.div>
      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack variants={stagger} spacing={4} w="100">
          <MotionText
            variants={fadeInUp}
            delay={1}
            variant="accent"
            fontWeight="light"
          >
            I am
          </MotionText>
          <MotionHeading
            as="h1"
            size="2xl"
            paddingRight={{ lg: '20' }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            Sah
          </MotionHeading>
          <MotionHeading
            as="h2"
            size={surNameSize}
            variant="emphasis"
            className={styles.marginTopForce}
            textTransform="uppercase"
            variants={letterSpace}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Rohit.
          </MotionHeading>
          <MotionText
            colorScheme="gray"
            fontSize="smaller"
            className={styles.marginTopForce}
            variants={fadeInUp}
          >
            officially, Rohit Kumar Sah
          </MotionText>

          <MotionHeading
            as="h3"
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
          >
            Computer Science Graduate
          </MotionHeading>

          <MotionText
            variant="descrisption"
            fontSize="small"
            paddingRight={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            Thank you for taking the time to look at my
            <Text variant="emphasis" as="span">
              {' '}
              portfolio.
            </Text>
            <br />
            <br />I am a computer engineer skilled in
            <Tooltip
              label="can center div in 10 different ways"
              aria-label="CSS Brag"
              placement="right-start"
              hasArrow
            >
              <Text variant="emphasis" as="span">
                {' '}
                front end designs
              </Text>
            </Tooltip>
            <Text variant="emphasis" as="span">
              {' '}
              , backend architecture
            </Text>
            <Tooltip
              label="can deal with numbers"
              aria-label="Data Science Brag"
              placement="bottom"
              hasArrow
            >
              <Text variant="emphasis" as="span">
                {' '}
                , and data science especially data visualization.
              </Text>
            </Tooltip>
            &nbsp;Committed to delivering innovative and seamless solution
            <Tooltip
              label="well, thats the purpose"
              aria-label="Backend Brag"
              placement="right-start"
              hasArrow
            >
              <Text variant="emphasis" as="span">
                &nbsp;to make lives easier.
              </Text>
            </Tooltip>
          </MotionText>
          <MotionButton
            size="lg"
            variant="outline"
            borderWidth="1px"
            borderRadius="0"
            fontWeight="normal"
            fontSize="sm"
            width="120px"
            variants={simpleOpacity}
            as={'a'}
            href="mailto:sahrohit9586@gmail.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in touch!
          </MotionButton>

          <MotionFlex variants={simpleOpacity}>
            {SocialMedias.map((socMedia) => (
              <Link
                variant="description"
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                width={8}
                href={socMedia.href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
              >
                <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
              </Link>
            ))}
          </MotionFlex>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default Sidebar

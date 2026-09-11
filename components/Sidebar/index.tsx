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

  return (
    <Box
      as={motion.div}
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
        <Stack as={motion.div} variants={stagger} spacing={4} w="100">
          <Text
            as={motion.p}
            variants={fadeInUp}
            variant="accent"
            fontWeight="light"
          >
            I am
          </Text>
          <Heading
            as={motion.h1}
            size="2xl"
            paddingRight={{ lg: '20' }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            Sah
          </Heading>
          <Heading
            as={motion.h2}
            size={surNameSize}
            variant="emphasis"
            className={styles.marginTopForce}
            textTransform="uppercase"
            variants={letterSpace}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Rohit.
          </Heading>
          <Text
            as={motion.p}
            colorScheme="gray"
            fontSize="smaller"
            className={styles.marginTopForce}
            variants={fadeInUp}
          >
            officially, Rohit Kumar Sah
          </Text>
          <Heading
            as={motion.h3}
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
          >
            Software Engineer
          </Heading>
          <Text
            as={motion.p}
            variant="description"
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
            <br />
            Software Engineer based in Maryville, IL, pursuing an MS in Computer
            Science at SIUE. Skilled in
            <Tooltip
              label="can center div in 10 different ways"
              aria-label="CSS Brag"
              placement="right-start"
              hasArrow
            >
              <Text variant="emphasis" as="span">
                {' '}
                frontend systems
              </Text>
            </Tooltip>
            ,
            <Tooltip
              label="multi-tenant scalability & microservices"
              aria-label="Backend Brag"
              placement="top"
              hasArrow
            >
              <Text variant="emphasis" as="span">
                {' '}
                backend architecture
              </Text>
            </Tooltip>
            , and
            <Tooltip
              label="time-series forecasting & LLMs"
              aria-label="Data Science Brag"
              placement="bottom"
              hasArrow
            >
              <Text variant="emphasis" as="span">
                {' '}
                machine learning & data science
              </Text>
            </Tooltip>
            . Committed to engineering scalable, high-performance solutions
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
          </Text>
          <Button
            size="lg"
            variant="outline"
            borderWidth="1px"
            borderRadius="0"
            fontWeight="normal"
            fontSize="sm"
            width="120px"
            variants={simpleOpacity}
            as={motion.a}
            href="mailto:sahrohit9586@gmail.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in touch!
          </Button>

          <Flex as={motion.div} variants={simpleOpacity}>
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
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}

export default Sidebar

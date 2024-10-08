import { memo, useCallback } from 'react'
import {
  Container,
  Button,
  Flex,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { BsSun } from 'react-icons/bs'
import { BiSolidMoon } from 'react-icons/bi'
import { motion, useCycle } from 'framer-motion'
import * as gtag from '../../lib/gtag'
import styles from './styles.module.css'
import MobileMenu from './toggle'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { menuAnim } from 'config/animations'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

const Navigation = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const menuButtonSize = useBreakpointValue({
    base: 'xl',
    md: 'sm',
  })

  const bg = useColorModeValue(
    'rgba(237, 242, 247, 0.95)',
    'rgba(18, 18, 18, 0.9)'
  )

  const borderColor = useColorModeValue('teal.500', 'cyan.200')

  const IsDark = colorMode === ThemeMode.Dark
  const btnClassName = `${styles.blogBtn} ${!IsDark && styles.dark}`
  const Icon = IsDark ? BsSun : BiSolidMoon
  const onMenuItemClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      e.stopPropagation()
      if (isMobile) {
        toggleOpen()
      }
    },
    [isMobile, toggleOpen]
  )
  const scrollDirection = useScrollDirection()
  return (
    <>
      <Box
        display={{ base: 'flex', xl: 'none' }}
        alignItems="center"
        paddingTop={1}
        className={styles.menuBar}
        zIndex={100}
        top="3%"
      >
        <IconButton
          aria-label="Color Mode"
          variant="ghost"
          icon={<Icon />}
          boxShadow="none"
          onClick={toggleColorMode}
          padding={0}
        />
        <MobileMenu isDarkMode={IsDark} toggle={toggleOpen} isOpen={isOpen} />
      </Box>

      <Container
        width="100%"
        backgroundColor={bg}
        maxWidth={{ base: '100%', sm: '100%', lg: '50%', xl: '60%' }}
        className={styles.menu}
        right={{
          lg:
            !isMobile && scrollDirection === ScrollDirection.Down
              ? '2%'
              : '3.5%',
        }}
        initial="hide"
        animate={(!isMobile || isOpen) && 'show'}
        style={{
          width:
            !isMobile && scrollDirection === ScrollDirection.Down
              ? '12%'
              : '100%',
          top: !isOpen && isMobile ? '-100vh' : undefined,
          opacity: !isOpen && isMobile ? '0' : undefined,
          left: isOpen && isMobile ? 0 : undefined,
        }}
        borderColor={isOpen && isMobile ? borderColor : undefined}
        borderBottomWidth={isOpen && isMobile ? '1px' : undefined}
        paddingBottom={isOpen && isMobile ? '1px' : undefined}
        variants={menuAnim}
        marginTop={0}
        paddingTop={1}
        as={motion.nav}
      >
        <Flex
          justifyContent={{ base: 'center', lg: 'flex-end' }}
          direction={{
            base: 'column',
            lg: scrollDirection === ScrollDirection.Down ? 'column' : 'row',
          }}
          paddingX={{ base: '', sm: '10', lg: '0' }}
          paddingY={{
            base: '10',
            lg: scrollDirection === ScrollDirection.Down ? '10' : '3',
          }}
          height={{ base: '100vh', lg: 'auto' }}
          paddingRight="0"
          paddingBottom={isMobile ? 10 : '0'}
          onClick={() => isMobile && toggleOpen()}
        >
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href={isMobile ? '#aboutMe' : '#'}
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              About
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="#jobs"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              Experience
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="#works"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              Works
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="#contact"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              Contact
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="/Rohit's-Resume.pdf"
              rel="noreferrer"
              onClick={(e) => {
                onMenuItemClick(e)
                gtag.event({
                  action: 'downloaded_resume',
                  category: 'Resume',
                  label: 'Resume',
                  value: 1,
                })
              }}
            >
              Resume
            </Button>
          </Box>
          {!isMobile && (
            <Box>
              <IconButton
                marginX={1}
                aria-label="Color Mode"
                variant="ghost"
                icon={<Icon />}
                boxShadow="none"
                onClick={toggleColorMode}
              />
            </Box>
          )}
        </Flex>
      </Container>
    </>
  )
}

export default memo(Navigation)

import { memo, useState } from 'react'
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { simpleOpacity } from 'config/animations'

const Logo = () => {
  const { colorMode } = useColorMode()
  const [isLogoLoaded, setLogoLoaded] = useState(false)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <AnimatePresence>
      <Link href="/" passHref>
        {colorMode === ThemeMode.Dark ? (
          <Image
            as={motion.img}
            className={!isMobile ? styles.logo : ''}
            boxSize={isMobile ? '30px' : '50px'}
            objectFit="cover"
            src="./logo.webp"
            alt="Jellyfish Logo"
            fallbackSrc="./logo.webp"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        ) : (
          <Image
            as={motion.img}
            className={!isMobile ? styles.logo : ''}
            boxSize={isMobile ? '30px' : '50px'}
            objectFit="cover"
            // src="./logo_light.png"
            // fallbackSrc="./logo_light.png"
            src="./logo.webp"
            fallbackSrc="./logo.webp"
            alt="Jellyfish Logo"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        )}
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)

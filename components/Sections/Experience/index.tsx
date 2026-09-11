import {
  Heading,
  Stack,
  Text,
  Box,
  SimpleGrid,
  Badge,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { memo } from 'react'
import { FaGraduationCap, FaBookOpen } from 'react-icons/fa'
import ExperienceTab from './ExperienceTab'
import { EducationList, ResearchPublicationsList } from 'config/experience'

const DetailSection = () => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const cardBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 8, xl: 10 }}
    >
      <Box>
        <Heading
          size="2xl"
          style={{
            fontVariantCaps: 'small-caps',
          }}
        >
          Places i&apos;ve been.
        </Heading>
        <Text variant="description" mt={2}>
          Software engineering journey and academic teaching experience.
        </Text>
      </Box>

      <ExperienceTab />

      <Box pt={6}>
        <Flex alignItems="center" gap={3} mb={4}>
          <Icon as={FaGraduationCap} color={emphasis} fontSize="xl" />
          <Heading
            size="lg"
            style={{
              fontVariantCaps: 'small-caps',
            }}
          >
            Education
          </Heading>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
          {EducationList.map((edu) => (
            <Box
              key={edu.institution}
              p={4}
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="md"
            >
              <Flex
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
                flexDirection={{ base: 'column', sm: 'row' }}
                gap={1}
              >
                <Text fontWeight="bold" fontSize="md">
                  {edu.institution}
                </Text>
                <Badge colorScheme="teal" variant="subtle" fontSize="xs">
                  {edu.duration}
                </Badge>
              </Flex>
              <Text fontSize="sm" color={emphasis} fontWeight="medium">
                {edu.degree}
              </Text>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mt={2}
                fontSize="xs"
                color="gray.400"
              >
                <Text>{edu.location}</Text>
                <Text fontWeight="bold">{edu.grade}</Text>
              </Flex>
              {edu.details && (
                <Text fontSize="xs" color="gray.500" mt={1}>
                  {edu.details}
                </Text>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box pt={4}>
        <Flex alignItems="center" gap={3} mb={4}>
          <Icon as={FaBookOpen} color={emphasis} fontSize="xl" />
          <Heading
            size="lg"
            style={{
              fontVariantCaps: 'small-caps',
            }}
          >
            Research Publication
          </Heading>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
          {ResearchPublicationsList.map((pub) => (
            <Box
              key={pub.title}
              p={4}
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="md"
            >
              <Flex
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
                flexDirection={{ base: 'column', sm: 'row' }}
                gap={1}
              >
                <Text fontWeight="bold" fontSize="sm">
                  {pub.title}
                </Text>
                <Badge colorScheme="cyan" variant="solid" fontSize="xs">
                  {pub.year}
                </Badge>
              </Flex>
              <Text fontSize="xs" color={emphasis} mt={1}>
                {pub.authors}
              </Text>
              <Text fontSize="xs" color="gray.400" mt={1} fontStyle="italic">
                {pub.venue}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  )
}

export default memo(DetailSection)

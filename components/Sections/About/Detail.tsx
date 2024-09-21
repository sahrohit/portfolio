import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
  SiTrpc,
  SiApachekafka,
  SiGo,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'
import * as gtag from '../../../lib/gtag'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  // const currentYear = new Date().getFullYear()
  // const professionalYears = currentYear - 2016

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      id="aboutContainer"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        For several years, I have been immersed in learning web design and am
        currently focused on optimizing web technologies for performance and
        accessibility, aiming to make them accessible to all users.
        <br /> Because,
        <Tooltip
          label="faster for user as well"
          aria-label="Tech Debt?"
          placement="top-start"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b> optimization </b>
          </Text>
        </Tooltip>{' '}
        saves resources.
        <br /> <br /> Defending users against
        <Tooltip
          label="... and, that was my inspiration."
          aria-label="Tech Debt?"
          placement="top-start"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b> poor UI/UX design</b>
          </Text>
        </Tooltip>{' '}
        since 2020.
        <br /> <br />
        Powered by
        <Text as="span" variant="emphasis">
          <b> VS Code </b>
        </Text>
        and
        <Text as="span" variant="emphasis">
          <b> coffee </b>
        </Text>
        <Icon as={GiCoffeePot} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTrpc} color={emphasis} fontSize="2em" />
            TRPC
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiApachekafka} color={emphasis} fontSize="2em" />
            Kafka
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGraphql} color={emphasis} fontSize="2em" />
            Graphql
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiPostgresql} color={emphasis} fontSize="2em" />
            Postgresql
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiFirebase} color={emphasis} fontSize="2em" />
            Firebase
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGo} color={emphasis} fontSize="2em" />
            GO
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={() => {
              onOpen()
              gtag.event({
                action: 'opened_skill_modal',
                category: 'engagement',
                label: 'Skills',
                value: 1,
              })
            }}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)

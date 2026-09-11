/* eslint-disable react/no-multi-comp */
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Text,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { Skill, Skills, splitSkills } from 'config/skills'

type ISkillSetModal = {
  isOpen: boolean
  onClose(): void
}

const SkillList = ({
  title,
  columns,
}: {
  title: string
  columns: Skill[][]
}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const [colOne, colTwo = []] = columns
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  )
}
const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const languagesCols = splitSkills(Skills.languages)
  const webDevCols = splitSkills(Skills['web development'])
  const databaseCols = splitSkills(Skills.database)
  const dataCols = splitSkills(Skills['data science'])
  const cloudCols = splitSkills(Skills['cloud & devops'])
  const aiCols = splitSkills(Skills['ai integration'])
  const securityCols = splitSkills(Skills['security & practices'])
  const productivityCols = splitSkills(Skills['productivity boost'])
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Full Skill Set List</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList title="Languages" columns={languagesCols} />
          <SkillList title="Web Development" columns={webDevCols} />
          <SkillList title="Cloud & DevOps" columns={cloudCols} />
          <SkillList title="AI Integration" columns={aiCols} />
          <SkillList title="Database & Streams" columns={databaseCols} />
          <SkillList title="Data Science" columns={dataCols} />
          <SkillList title="Security & Practices" columns={securityCols} />
          <SkillList title="Productivity Boost" columns={productivityCols} />
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small">*Some micro frameworks not included </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SkillSetModal

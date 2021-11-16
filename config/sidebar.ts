import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/sah_rohite',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sah_rohite/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sahrohit/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/13238555/rohit',
    icon: FaStackOverflow,
  },
  {
    label: 'Youtube',
    href: 'https://youtu.be/dQw4w9WgXcQ',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/sahrohit',
    icon: FaGithub,
  },
]

// import { Link } from '@chakra-ui/react'

// export type Company = 'SCG' | 'Blotocol'

// export type CompanyDetail = {
//   name: string
//   longName: string
//   subDetail?: string
//   url: string
//   position: string
//   duration: string
//   logo: {
//     light: string
//     dark?: string
//   }
//   roles?: JSX.Element[]
// }

// export const Experiences: {
//   [key in Company]: CompanyDetail
// } = {
//   SCG: {
//     name: 'Scentregroup',
//     longName: 'Scentregroup Limited AU',
//     subDetail: 'via Prosource BPO',
//     url: 'https://www.scentregroup.com/',
//     position: 'Software Engineer',
//     duration: 'Feb 2020 - Present',
//     logo: {
//       light: '/worked_at_logos/scg/SCG_400x400.jpg',
//       dark: '/worked_at_logos/scg/SCG.png',
//     },
//     roles: [
//       <>
//         Revamping the legacy Partner Portal into a new{' '}
//         <Link
//           aria-label="Westfield Marketing Hub"
//           href="https://partner.scentregroup.com/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           Westfield Marketing Hub
//         </Link>{' '}
//         using NextJS and Typescript. Restructuring the old express app into a
//         newer architectural design approach.
//       </>,
//       <>
//         Created multiple Contentful and Bynder extensions to improve BX process
//         better.
//       </>,
//       <>
//         Worked on maintaining{' '}
//         <Link
//           variant="primaryLink"
//           href="https://www.westfield.com.au/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           Westfield
//         </Link>{' '}
//         main site and Graphql apis written in NodeJS.
//       </>,
//       <>
//         Migrating of existing marketing email related tools and batch jobs from
//         Responsys into new platform called Braze.
//       </>,
//       <>
//         Hired at early 2020, first major task was helping with selecting a new
//         marketing vendor that can scale and also enable us to have
//         personalisation as well, selecting{' '}
//         <Link
//           aria-label="Braze"
//           href="https://www.braze.com/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           Braze
//         </Link>{' '}
//         as a result.
//       </>,
//     ],
//   },
//   Blotocol: {
//     name: 'Blotocol',
//     longName: 'Blotocol Philippines',
//     subDetail: 'formerly IVP Global Inc.',
//     url: 'https://blotocol.com/',
//     position: 'Senior Software Engineer',
//     duration: 'Nov 2016 - Feb 2020',
//     logo: {
//       light: '/worked_at_logos/ivp/blotocol_logo-dark.png',
//       dark: '/worked_at_logos/ivp/blotocol-logo-white.png',
//     },
//     roles: [
//       <>
//         Developed a Twitter Raffle Campaign / Contest Bot called Camps with
//         statistics similar to Facebook Ads.
//       </>,
//       <>
//         In 2019 got promoted as Senior Software Engineer and worked with Cryto
//         Exchange, Smart Contracts and other APIs using several techs such as
//         NodeJS, .NET Core and React.
//       </>,
//       <>
//         Create highly scalable Japanese e-commerce sites. Most notable clients
//         were TV Tokyo, Layla EC using .NET.
//       </>,
//       <>
//         Hired at 2016, Undergone Japanese language training first. Shortly
//         after, worked with in-house .NET MVC Framework called ERS.
//       </>,
//     ],
//   },
// }

// export const ExperiencesList = [Experiences.SCG, Experiences.Blotocol]

export type Company = 'SIS' | 'Aifiverse' | 'TC'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  TC: {
    name: 'Tech Central',
    longName: 'Tech Central',
    subDetail: '',
    url: 'https://techcentral.net/',
    position: 'Frontend Engineering',
    duration: 'Oct 2023 - Present',
    logo: {
      light: '/worked_at_logos/techcentral.webp',
      dark: '/worked_at_logos/techcentral.webp',
    },
    roles: [
      <>
        Streamlined workflow using Gulp, enhancing task automation, and boosting
        overall project efficiency.
      </>,
      <>
        Ensured top-notch web performance by incorporating Lighthouse metrics
        into development practices, consistently achieving high scores for
        projects.
      </>,
      <>
        Leveraged CSS preprocessors (e.g., SASS ) to efficiently style the web
        application using mobile first style, resulting in a consistent and
        visually appealing user interface.
      </>,
    ],
  },
  Aifiverse: {
    name: 'Aifiverse Tech Services',
    longName: 'Aifiverse Tech Services',
    subDetail: '',
    url: 'https://aifiverse.com',
    position: 'Frontend Engineer',
    duration: 'Oct 2022 - Jan 2023',
    logo: {
      light: '/worked_at_logos/aifiverse.webp',
      dark: '/worked_at_logos/aifiverse.webp',
    },
    roles: [
      <>
        Troubleshot and debugged complex issues within React applications,
        maintaining a high level of application stability and reliability.
      </>,
      <>
        Worked closely with UI/UX designers to translate mockups and wireframes
        into functional React components, ensuring pixel-perfect implementation.
      </>,
      <>
        Conducted regular meetings with team members to track progress, address
        challenges, and ensure project alignment with organizational goals.
      </>,
    ],
  },
  SIS: {
    name: 'Supreme IT Solutions',
    longName: 'Supreme IT Solutions',
    subDetail: '',
    url: 'https://www.supremeitsolutions.com/',
    position: 'Frontend Engineering Intern',
    duration: 'Aug 2021 - Oct 2021',
    logo: {
      light: '/worked_at_logos/supremeit.webp',
      dark: '/worked_at_logos/supremeit.webp',
    },
    roles: [
      <>
        Developed a dynamic E-Commerce website using Next.js, incorporating
        modern React components for enhanced user experience and performance.
      </>,
      <>
        Successfully integrated API endpoints into the web application, enabling
        seamless data retrieval and updates for real-time product information.
      </>,
      <>
        Leveraged CSS preprocessors (e.g., SASS, LESS) to efficiently style the
        web application, resulting in a consistent and visually appealing user
        interface.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.TC,
  Experiences.Aifiverse,
  Experiences.SIS,
]

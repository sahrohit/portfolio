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

export type Company = 'TECHCENTRAL' | 'TECHNIMUS' | 'SIUE' | 'AMRITA' | 'UNIMI'

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
  SIUE: {
    name: 'SIUE',
    longName: 'Southern Illinois University Edwardsville',
    subDetail: '',
    url: 'https://www.siue.edu/',
    position: 'Graduate Studnet',
    duration: 'Fall 2024 - Present',
    logo: {
      light: '/worked_at_logos/siue.webp',
      dark: '/worked_at_logos/siue.webp',
    },
    roles: [
      <>
        Engaged in advanced coursework, gaining in-depth knowledge in areas such
        as machine learning, artificial intelligence, and data mining.
      </>,
      <>
        Conducted independent research projects, contributing to the academic
        community with findings in machine learning and data analysis.
      </>,
      <>
        Developed and maintained software applications to support research
        activities, including a web-based data visualization tool for analyzing
        large datasets.
      </>,
    ],
  },
  TECHNIMUS: {
    name: 'Technimus',
    longName: 'Technimus',
    subDetail: '',
    url: 'https://technimus.com/',
    position: 'Software Engineer',
    duration: 'Apr 2024 - Present',
    logo: {
      light: '/worked_at_logos/technimus.webp',
      dark: '/worked_at_logos/technimus.webp',
    },
    roles: [
      <>
        Troubleshot and debugged complex issues within multi-tenant React and
        Node applications, achieving high performance and accessible web
        application following both REST and W3C standards.
      </>,
      <>
        Worked closely with Database Administrators to efficiently store and
        query data from multi-schema PostgreSQL database ensuring high level of
        scalability, availability and performance.
      </>,

      <>
        Conducted regular meetings with team members to track progress, address
        challenges, and ensure project alignment with organizational goals.{' '}
      </>,
    ],
  },

  TECHCENTRAL: {
    name: 'Tech Central',
    longName: 'Tech Central',
    subDetail: '',
    url: 'https://techcentral.net/',
    position: 'Frontend Engineering',
    duration: 'Oct 2023 - Apr 2024',
    logo: {
      light: '/worked_at_logos/tech-central.webp',
      dark: '/worked_at_logos/tech-central.webp',
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
  UNIMI: {
    name: 'UNIMI',
    longName: 'University of Milan',
    subDetail: '',
    url: 'https://www.unimi.it/',
    position: 'Research Intern',
    duration: 'May 2018 - Aug 2019',
    logo: {
      light: '/worked_at_logos/unimi.webp',
      dark: '/worked_at_logos/unimi.webp',
    },
    roles: [
      <>
        Conducted research on deep learning techniques for image recognition and
        classification, focusing on medical imaging applications.
      </>,
      <>
        Developed a convolutional neural network (CNN) model using TensorFlow
        and Keras to classify medical images with high accuracy.
      </>,
      <>
        Collaborated with medical professionals to collect and annotate medical
        image datasets for training and testing the CNN model.
      </>,
    ],
  },
  AMRITA: {
    name: 'Amrita',
    longName: 'Amrita Vishwa Vidyapeetham',
    subDetail: '',
    url: 'https://www.amrita.edu/',
    position: 'Research Assistant',
    duration: 'Aug 2019 - May 2021',
    logo: {
      light: '/worked_at_logos/amrita.webp',
      dark: '/worked_at_logos/amrita.webp',
    },
    roles: [
      <>
        Conducted research on machine learning and natural language processing
        techniques to develop a chatbot for answering student queries.
      </>,
      <>
        Developed a web-based chatbot using Python, Flask, and React to provide
        students with instant answers to their questions.
      </>,
      <>
        Collaborated with faculty members to design and implement machine
        learning algorithms for analyzing student data and predicting academic
        performance.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.SIUE,
  Experiences.TECHNIMUS,
  Experiences.TECHCENTRAL,
  // Experiences.UNIMI,
  // Experiences.AMRITA,
]

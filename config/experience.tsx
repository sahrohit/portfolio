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

export type Company = 'TECHNIMUS' | 'SIUE' | 'TECHCENTRAL'

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
  TECHNIMUS: {
    name: 'Technimus',
    longName: 'Technimus Pvt Ltd.',
    subDetail: 'Lewes, Delaware',
    url: 'https://technimus.com/',
    position: 'Software Engineer',
    duration: 'Apr 2024 - Present',
    logo: {
      light: '/worked_at_logos/technimus.webp',
      dark: '/worked_at_logos/technimus.webp',
    },
    roles: [
      <>
        Developed and maintained <b>multi-tenant</b> application for 200+
        tenants, <b>scaling the platform</b> to serve over 5M+ monthly requests
        while ensuring accessibility and compliance with REST and W3C standards.
      </>,
      <>
        <b>Optimized database schema and queries</b> in{' '}
        <b>multi-schema PostgreSQL databases</b>, enhancing scalability and
        reducing query times by 20%, ensuring high availability and data
        isolation.
      </>,
      <>
        Replaced per-request inserts on the activity log with an in-memory
        write-behind queue (5,000-entry buffer, 50-row flushes every 5s),
        cutting database round-trips <b>~50x</b>.
      </>,
      <>
        <b>Attended regular meetings</b> with team members and clients to track
        progress, resolve issues, and ensure feature delivery in alignment with
        client goals, contributing to a 10% improvement in delivery timelines.
      </>,
    ],
  },
  SIUE: {
    name: 'SIUE',
    longName: 'Southern Illinois University Edwardsville',
    subDetail: 'Edwardsville, Illinois',
    url: 'https://www.siue.edu/',
    position: 'Teaching Assistant',
    duration: 'May 2025 - May 2026',
    logo: {
      light: '/worked_at_logos/siue.webp',
      dark: '/worked_at_logos/siue.webp',
    },
    roles: [
      <>
        Debugged and reviewed <b>300+ Python and Java assignments</b> per
        semester, identifying logic errors and giving targeted feedback that
        improved resubmission pass rates by 20%.
      </>,
      <>
        Reviewed and graded student-designed ER diagrams,{' '}
        <b>coaching 120+ students</b> on applying database normalization (up to
        3NF) to fix schema design flaws before implementation.
      </>,
      <>
        Held office hours supporting students in{' '}
        <b>Excel-based data analysis and visualization</b>, translating raw
        datasets into statistical summaries for course capstone projects.
      </>,
    ],
  },
  TECHCENTRAL: {
    name: 'Tech Central',
    longName: 'Tech Central Pvt. Ltd.',
    subDetail: 'Kathmandu, Nepal',
    url: 'https://techcentral.net/',
    position: 'Frontend Engineer',
    duration: 'Oct 2023 - Apr 2024',
    logo: {
      light: '/worked_at_logos/tech-central.webp',
      dark: '/worked_at_logos/tech-central.webp',
    },
    roles: [
      <>
        Ensured <b>web performance</b> and <b>accessibility</b> by incorporating
        Lighthouse metrics into development practices, consistently achieving
        high scores across all projects.
      </>,
      <>
        Utilized <b>CSS preprocessors (SASS)</b> with <b>BEM patterns</b> to
        efficiently style the web application using mobile first style,
        resulting in a consistent and visually appealing user interface.
      </>,
      <>
        Streamlined front-end workflows using Gulp to{' '}
        <b>automate repetitive tasks</b> such as minification and compilation;
        saved an average of 5 hours weekly on manual processes, allowing focus
        on feature development.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.TECHNIMUS,
  Experiences.SIUE,
  Experiences.TECHCENTRAL,
]

export type EducationItem = {
  institution: string
  degree: string
  duration: string
  grade: string
  location: string
  details?: string
}

export const EducationList: EducationItem[] = [
  {
    institution: 'Southern Illinois University Edwardsville',
    degree: 'Master of Science in Computer Science (Teaching Assistant)',
    duration: 'Aug 2024 - May 2026',
    grade: 'CGPA: 3.893/4.0',
    location: 'Edwardsville, IL',
  },
  {
    institution: 'Università degli Studi di Milano Statale',
    degree: 'Foreign Student Exchange Program',
    duration: 'Feb 2023 - Jul 2023',
    grade: 'Marks: 27/30',
    location: 'Milan, Italy',
  },
  {
    institution: 'Amrita School of Engineering',
    degree: 'Bachelor of Technology Computer Science and Engineering',
    duration: 'Aug 2019 - Jul 2023',
    grade: 'CGPA: 8.66/10',
    location: 'Chennai, India',
    details: 'Compex Full Scholarship recipient',
  },
]

export type ResearchPublication = {
  title: string
  authors: string
  venue: string
  year: string
  status?: string
}

export const ResearchPublicationsList: ResearchPublication[] = [
  {
    title: 'Assessing Data-Driven Performance Decline on LLM Fine-tuning',
    authors: 'Sah Rohit., I Crk.',
    venue: 'PrePrint',
    year: '2026',
    status: 'PrePrint',
  },
  {
    title:
      'Performance Evaluation of Movie-Based Recommendation Systems using Hybrid Machine Learning Models',
    authors: 'Sah R., Amrutha G., Manasa, Chapagain B., & Padmavathi A.',
    venue:
      'International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS)',
    year: '2023',
  },
]

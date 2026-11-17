export const site = {
  url: 'https://www.sahrohit.com.np',
  title: 'Rohit Sah — Full Stack Software Engineer',
  description:
    'Rohit Sah is a full stack software engineer who builds Java, Spring Boot, Go and React systems on AWS and Kubernetes for commerce, banking and brokerage platforms.',
  ogImage: '/og.png',
  ogImageAlt:
    'SAH ROHIT. — Full Stack Software Engineer, currently at Shopify.',
}

export const profile = {
  name: 'Rohit Kumar Sah',
  shortName: 'Rohit Sah',
  role: 'Full Stack Software Engineer',
  email: 'sahrohit2048@gmail.com',
  phone: '618-217-9577',
  phoneHref: 'tel:+16182179577',
  linkedin: 'https://linkedin.com/in/sahrohit2048',
  linkedinLabel: 'in/sahrohit2048',
  github: 'https://github.com/sahrohit',
  resume: "/Rohit's-Resume.pdf",
  blog: 'https://blog.sahrohit.com.np',
  current: { company: 'Shopify', url: 'https://www.shopify.com' },
  careerStart: [2018, 9] as [number, number],
}

/**
 * Logo grid in the left panel, shown when the screen is tall enough. The
 * first nine always show; the rest only on very tall screens.
 */
export const coreStack = [
  'Java',
  'Spring Boot',
  'React',
  'Angular',
  'Go',
  'Kafka',
  'AWS',
  'Kubernetes',
  'Terraform',
  'Docker',
  'PostgreSQL',
  'GraphQL',
]

export const education = [
  {
    where: 'Edwardsville, IL',
    school: 'Southern Illinois University Edwardsville',
    url: 'https://www.siue.edu',
    degree: 'M.S. Computer Science',
    grade: 'CGPA 3.893 / 4.0',
  },
]

export const certifications = [
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'CNCF & The Linux Foundation',
  },
  {
    title: 'Databricks Certified Data Engineer Associate',
    issuer: 'Databricks',
  },
]

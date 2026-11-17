// Brand logos: devicon (MIT) and simple-icons (CC0), stored in
// src/assets/logos/tech. Concepts without a brand get a line glyph instead.

const techFiles = import.meta.glob<string>(
  '../assets/logos/tech/*.{svg,webp}',
  { eager: true, query: '?url', import: 'default' }
)

const companyFiles = import.meta.glob<string>('../assets/logos/company/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const byName = (files: Record<string, string>) =>
  Object.fromEntries(
    Object.entries(files).map(([path, url]) => [
      path.replace(/^.*\/([^/.]+)\.\w+$/, '$1'),
      url,
    ])
  )

const tech = byName(techFiles)
const company = byName(companyFiles)

export type Glyph = 'db' | 'api' | 'nodes' | 'lock' | 'pipeline' | 'test'

export type TechLogo = { src: string } | { glyph: Glyph }

// First match wins, so specific names come before broad ones
// (DynamoDB before AWS, Spring Data JPA before SQL, and so on).
const rules: [RegExp, string][] = [
  [/^java\b/i, 'java'],
  [/spring/i, 'spring'],
  [/hibernate/i, 'hibernate'],
  [/^go$/i, 'go'],
  [/python/i, 'python'],
  [/typescript/i, 'typescript'],
  [/node/i, 'nodejs'],
  [/angular/i, 'angular'],
  [/^react/i, 'react'],
  [/rxjs/i, 'rxjs'],
  [/ngrx/i, 'ngrx'],
  [/html/i, 'html5'],
  [/css/i, 'css3'],
  [/next\.js/i, 'nextjs'],
  [/express/i, 'express'],
  [/dynamodb/i, 'dynamodb'],
  [/aws|amazon|cloudformation|cloudwatch|kinesis|api gateway|lambda/i, 'aws'],
  [/terraform/i, 'terraform'],
  [/docker/i, 'docker'],
  [/kubernetes/i, 'kubernetes'],
  [/jenkins/i, 'jenkins'],
  [/github actions/i, 'githubactions'],
  [/gitlab/i, 'gitlab'],
  [/azure/i, 'azure'],
  [/^gcp$|google cloud/i, 'gcp'],
  [/ansible/i, 'ansible'],
  [/argo/i, 'argocd'],
  [/helm/i, 'helm'],
  [/linux/i, 'linux'],
  [/bash/i, 'bash'],
  [/kafka/i, 'kafka'],
  [/postgres/i, 'postgresql'],
  [/oracle/i, 'oracle'],
  [/mysql/i, 'mysql'],
  [/redis/i, 'redis'],
  [/mongo/i, 'mongodb'],
  [/cassandra/i, 'cassandra'],
  [/rabbitmq/i, 'rabbitmq'],
  [/spark/i, 'spark'],
  [/elasticsearch/i, 'elasticsearch'],
  [/snowflake/i, 'snowflake'],
  [/graphql/i, 'graphql'],
  [/grpc/i, 'grpc'],
  [/oauth/i, 'oauth'],
  [/jwt/i, 'jwt'],
  [/postman/i, 'postman'],
  [/prometheus/i, 'prometheus'],
  [/grafana/i, 'grafana'],
  [/splunk/i, 'splunk'],
  [/junit/i, 'junit'],
  [/selenium/i, 'selenium'],
]

const glyphRules: [RegExp, Glyph][] = [
  [/^sql$|etl|warehous|batch/i, 'db'],
  [/ci\/cd/i, 'pipeline'],
  [/rest|soap|webhook/i, 'api'],
  [/microservice/i, 'nodes'],
  [/saml|sso/i, 'lock'],
  [/mockito/i, 'test'],
]

/** Logo (or fallback glyph) for a technology, by its display name. */
export const techLogo = (name: string): TechLogo => {
  const key = rules.find(([re]) => re.test(name))?.[1]
  const src = key ? tech[key] : undefined
  if (src) {
    return { src }
  }
  return { glyph: glyphRules.find(([re]) => re.test(name))?.[1] ?? 'api' }
}

export const companyLogo = (id: string): string => {
  const src = company[id]
  if (!src) {
    throw new Error(`Missing company logo: src/assets/logos/company/${id}.svg`)
  }
  return src
}

export type StackNode = {
  id: string
  label: string
  /** Position on the board, in percent of its width / height. */
  x: number
  y: number
  use: string
}

export const nodes: StackNode[] = [
  {
    id: 'java',
    label: 'Java',
    x: 11,
    y: 20,
    use: 'Java 8/11 trade-processing and portfolio services at Fidelity, through to Java 17 commerce services at Shopify.',
  },
  {
    id: 'spring',
    label: 'Spring Boot',
    x: 30,
    y: 42,
    use: 'The backbone at all three companies: REST, SOAP and GraphQL APIs, secured with Spring Security, OAuth2, JWT and RBAC.',
  },
  {
    id: 'react',
    label: 'React',
    x: 9,
    y: 62,
    use: 'Checkout, storefront and merchant-facing modules at Shopify, wired to Spring Boot REST and GraphQL APIs.',
  },
  {
    id: 'angular',
    label: 'Angular',
    x: 20,
    y: 86,
    use: 'SoFi’s digital banking and lending front ends — loan origination, account servicing and personal finance.',
  },
  {
    id: 'postgres',
    label: 'PostgreSQL',
    x: 44,
    y: 72,
    use: 'Oracle and PostgreSQL behind transactional APIs; query plans, composite indexes, stored procedures and window functions.',
  },
  {
    id: 'go',
    label: 'Go',
    x: 49,
    y: 15,
    use: 'Low-latency trade validation and order routing at Fidelity: Go, gRPC, Protocol Buffers and bi-directional streaming.',
  },
  {
    id: 'kafka',
    label: 'Kafka',
    x: 63,
    y: 46,
    use: 'Order processing and inventory sync at Shopify, payment reconciliation at SoFi: Kafka Streams, schema registry, Avro and exactly-once delivery.',
  },
  {
    id: 'aws',
    label: 'AWS',
    x: 83,
    y: 18,
    use: 'EKS for Shopify microservices; Lambda, API Gateway and Step Functions for Fidelity trade confirmations; Glue ETL into Redshift and Snowflake.',
  },
  {
    id: 'k8s',
    label: 'Kubernetes',
    x: 86,
    y: 56,
    use: 'EKS at Shopify, Helm, HPA and Ingress at SoFi. Certified Kubernetes Administrator (CKA).',
  },
  {
    id: 'docker',
    label: 'Docker',
    x: 64,
    y: 86,
    use: 'Multi-stage builds feeding Jenkins and GitHub Actions pipelines with blue-green and canary releases.',
  },
  {
    id: 'terraform',
    label: 'Terraform',
    x: 89,
    y: 86,
    use: 'Terraform modules and remote state for AWS infrastructure, alongside CloudFormation and GitOps pipelines.',
  },
]

export const edges: [string, string][] = [
  ['java', 'spring'],
  ['react', 'spring'],
  ['angular', 'spring'],
  ['spring', 'postgres'],
  ['spring', 'kafka'],
  ['go', 'kafka'],
  ['go', 'k8s'],
  ['go', 'postgres'],
  ['kafka', 'aws'],
  ['aws', 'k8s'],
  ['k8s', 'docker'],
  ['terraform', 'aws'],
  ['terraform', 'k8s'],
  ['docker', 'kafka'],
]

export const initialNode = 'kafka'

export const neighbours = (id: string) =>
  edges.flatMap(([a, b]) => (a === id ? [b] : b === id ? [a] : []))

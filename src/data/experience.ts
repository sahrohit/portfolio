import type { GifKey } from './gifs'

type YearMonth = [number, number]

export type TraceRow = {
  svc: string
  /** Hover GIF shown on the bold phrase. */
  gif?: GifKey
  pre: string
  bold: string
  post: string
}

export type Company = {
  /** Also the logo file name in src/assets/logos/company. */
  id: string
  name: string
  tag: string
  hash: string
  role: string
  loc: string
  dates: string
  start: YearMonth
  end: YearMonth | null
  stack: string
  rows: TraceRow[]
}

export const companies: Company[] = [
  {
    id: 'shopify',
    name: 'Shopify',
    tag: '#Shopify',
    hash: '3e8b0d4',
    role: 'Full Stack Software Engineer',
    loc: 'US · Remote',
    dates: 'Mar 2024 – Present',
    start: [2024, 3],
    end: null,
    stack:
      'Java 17 · Spring Boot · Angular · React · GraphQL · AWS (EKS, Lambda) · Docker · Kubernetes · Terraform · Kafka · Jenkins · GitHub Actions · JUnit · Mockito',
    rows: [
      {
        svc: 'checkout.storefront',
        gif: 'checkout',
        pre: 'Designed and developed full-stack e-commerce applications using Java 17, Spring Boot and React, supporting ',
        bold: 'checkout, storefront and merchant-facing workflows',
        post: ' at scale.',
      },
      {
        svc: 'microservices.eks',
        gif: 'micro',
        pre: 'Built ',
        bold: 'backend microservices',
        post: ' deployed on AWS EKS with Docker and Kubernetes, provisioned with Terraform for high-throughput, high-availability commerce infrastructure.',
      },
      {
        svc: 'merchant.ui',
        gif: 'realtime',
        pre: 'Developed React and Angular frontend modules on secure Spring Boot REST and GraphQL APIs for ',
        bold: 'real-time inventory, pricing and order-status updates',
        post: '.',
      },
      {
        svc: 'auth.merchant',
        gif: 'auth',
        pre: 'Implemented ',
        bold: 'authentication and authorization',
        post: ' with Spring Security, OAuth2, JWT and role-based access control across merchant and storefront applications.',
      },
      {
        svc: 'orders.kafka-streams',
        gif: 'pipeline',
        pre: 'Integrated Apache Kafka and Kafka Streams with schema registry and consumer group partitioning for ',
        bold: 'exactly-once, real-time order processing',
        post: ' and inventory sync.',
      },
      {
        svc: 'sql.tuning',
        gif: 'sql',
        pre: 'Optimized ',
        bold: 'SQL queries, execution plans and composite indexes',
        post: ', and tuned Hibernate/JPA caching, HikariCP connection pooling and batch inserts across high-volume commerce services.',
      },
      {
        svc: 'ci.release',
        gif: 'cicd',
        pre: 'Automated CI/CD with Jenkins, Docker multi-stage builds, Terraform and GitHub Actions, including ',
        bold: 'blue-green/canary deployments',
        post: ', SonarQube analysis and Snyk vulnerability scanning.',
      },
      {
        svc: 'qa.tests',
        gif: 'testing',
        pre: 'Wrote ',
        bold: 'unit, integration and contract tests',
        post: ' with JUnit 5, Mockito, REST Assured and Testcontainers, with JaCoCo coverage and SonarQube quality gates.',
      },
    ],
  },
  {
    id: 'sofi',
    name: 'SoFi Technologies',
    tag: '#SoFi',
    hash: 'b52f6a0',
    role: 'Full Stack Software Engineer',
    loc: 'San Francisco, CA',
    dates: 'Jun 2021 – Feb 2024',
    start: [2021, 6],
    end: [2024, 2],
    stack:
      'Java · Spring Boot · Angular · AWS · Docker · Kubernetes · Terraform · Kafka · Redis · JUnit · Mockito',
    rows: [
      {
        svc: 'banking.lending',
        gif: 'fullstack',
        pre: 'Built ',
        bold: 'full-stack applications',
        post: ' on SoFi’s digital banking and lending platform using Java, Spring Boot and Angular, supporting loan origination, account servicing and personal-finance workflows.',
      },
      {
        svc: 'underwriting.reports',
        gif: 'lending',
        pre: 'Built custom ',
        bold: 'underwriting and reporting modules',
        post: ' with REST/SOAP APIs and Spring Boot, improving loan-decisioning accuracy across lending and banking workflows.',
      },
      {
        svc: 'bureau.integrations',
        gif: 'integration',
        pre: 'Developed backend integrations with XML/JSON transformation and OAuth2/Mutual TLS authentication, connecting internal platforms to ',
        bold: 'third-party credit-bureau and payment-processing systems',
        post: '.',
      },
      {
        svc: 'platform.k8s',
        gif: 'micro',
        pre: 'Built backend microservices on AWS with Docker and Kubernetes (Helm, ConfigMaps, HPA, Ingress), with ',
        bold: 'service mesh patterns',
        post: ' and Terraform-provisioned infrastructure.',
      },
      {
        svc: 'security.controls',
        gif: 'auth',
        pre: 'Implemented security controls with OAuth2, JWT, SAML-based SSO, RBAC/ABAC policies and ',
        bold: 'field-level encryption with audit logging',
        post: ' across multi-tenant environments.',
      },
      {
        svc: 'payments.kafka',
        gif: 'pipeline',
        pre: 'Used Apache Kafka topics, partitions and schema registry with Avro and exactly-once delivery across ',
        bold: 'loan-processing and payment-reconciliation pipelines',
        post: '.',
      },
      {
        svc: 'perf.redis',
        gif: 'cache',
        pre: 'Improved backend performance with SQL tuning, connection pool sizing and Redis ',
        bold: 'cache-aside caching with TTL eviction',
        post: ', plus Spring Boot async processing and thread pool tuning.',
      },
      {
        svc: 'infra.gitops',
        gif: 'iac',
        pre: 'Automated ',
        bold: 'infrastructure provisioning',
        post: ' with Terraform modules, remote state and AWS CloudFormation, with GitOps deployment pipelines across dev, staging and production.',
      },
      {
        svc: 'qa.contracts',
        gif: 'testing',
        pre: 'Wrote unit, integration and regression tests with JUnit 5, Mockito and REST Assured, plus Postman/Newman, ',
        bold: 'Pact contract testing',
        post: ' and coverage reporting in CI/CD.',
      },
    ],
  },
  {
    id: 'fidelity',
    name: 'Fidelity Investments',
    tag: '#Fidelity',
    hash: '7a3c9e1',
    role: 'Java Developer',
    loc: 'Boston, MA',
    dates: 'Sep 2018 – May 2021',
    start: [2018, 9],
    end: [2021, 5],
    stack:
      'Java 8/11 · Go · gRPC · Spring Boot · Spring MVC · Spring Data JPA · Spring Security · Oracle · PostgreSQL · Kafka · AWS Lambda · AWS Glue · Apache Spark · Docker · Jenkins · JUnit · Mockito',
    rows: [
      {
        svc: 'trade-processing.svc',
        gif: 'trade',
        pre: 'Built backend applications in Java 8/11 and Spring Boot for ',
        bold: 'brokerage trade-processing and portfolio-management workflows',
        post: ', implementing business logic, validation and service orchestration.',
      },
      {
        svc: 'rest-api.jpa',
        gif: 'fullstack',
        pre: 'Built ',
        bold: 'RESTful APIs',
        post: ' with Spring MVC and Spring Data JPA on Oracle and PostgreSQL, with DTO/entity mapping, request validation and exception handling.',
      },
      {
        svc: 'order-routing.grpc',
        gif: 'latency',
        pre: 'Developed ',
        bold: 'low-latency trade validation and order-routing',
        post: ' services in Go and gRPC with Protocol Buffers and bi-directional streaming RPCs.',
      },
      {
        svc: 'confirmations.lambda',
        gif: 'serverless',
        pre: 'Built ',
        bold: 'serverless workflows',
        post: ' with AWS Lambda, API Gateway and Step Functions, triggered from S3, SQS and EventBridge, to automate trade confirmations and statements.',
      },
      {
        svc: 'portfolio.etl',
        gif: 'etl',
        pre: 'Designed ',
        bold: 'ETL pipelines',
        post: ' with Python, Apache Spark and AWS Glue to load portfolio and transaction data into Redshift and Snowflake.',
      },
      {
        svc: 'events.stream',
        gif: 'pipeline',
        pre: 'Built ',
        bold: 'real-time data streaming pipelines',
        post: ' with Kafka, Kafka Connect and Kinesis Data Streams, using partitioned consumer groups and dead-letter queues.',
      },
      {
        svc: 'reporting.sql',
        gif: 'sql',
        pre: 'Wrote complex SQL, ',
        bold: 'stored procedures and window functions',
        post: ', with Hibernate/JPA entity mappings for reporting and data integrity across core systems.',
      },
      {
        svc: 'auth.gateway',
        gif: 'auth',
        pre: 'Secured internal and client-facing APIs with ',
        bold: 'JWT validation, OAuth2 resource servers and RBAC',
        post: ' using Spring Security.',
      },
      {
        svc: 'ci.pipeline',
        gif: 'cicd',
        pre: 'Built ',
        bold: 'CI/CD pipelines',
        post: ' with Jenkins multibranch, GitFlow, automated tests, quality gates and Maven/Gradle packaging.',
      },
      {
        svc: 'qa.tdd',
        gif: 'testing',
        pre: 'Drove ',
        bold: 'test-driven development',
        post: ' with JUnit, Mockito, Spring Boot Test and MockMvc on in-memory H2 databases, plus static analysis checks.',
      },
    ],
  },
]

/** Trace-bar [offset %, width %] per row, cycled. */
export const bars: [number, number][] = [
  [0, 42],
  [12, 30],
  [20, 26],
  [34, 38],
  [46, 40],
  [30, 52],
  [58, 26],
  [64, 22],
  [6, 80],
  [70, 28],
]

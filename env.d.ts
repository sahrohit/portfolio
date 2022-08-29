declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GA_TRACKING_ID: string
    }
  }
}

export {}

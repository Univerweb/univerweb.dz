export interface Work {
  slug: string
  title: string
  desc: string
  tags: string[]
  industry: string
  lead: string
  link: string
}

export interface Nav {
  slug?: string
  title?: string
}

export interface Error {
  url: string
  statusCode: string
  statusMessage: string
  message: string
  stack: string
}

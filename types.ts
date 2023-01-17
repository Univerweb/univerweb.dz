export interface Work {
  title: string
  desc: string
  slug: string
  tags: string[]
  industry?: string
  lead: string
  link?: string
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

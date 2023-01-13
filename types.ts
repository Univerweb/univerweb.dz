export interface Work {
  _path: string
  title: string
  desc: string
  tags: string[]
  lead: string
}

export interface Nav {
  slug: string
  title: string
}

export interface Error {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  stack: string
}

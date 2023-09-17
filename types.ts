import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Post extends MarkdownParsedContent {
  createdAt: Date
  updatedAt: Date
  tags: string[]
  industry: string
  link: string
}

export interface Nav {
  _path?: string
  title?: string
}

export interface Error {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  stack: string
}

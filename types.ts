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

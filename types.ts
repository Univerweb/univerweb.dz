import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Post extends MarkdownParsedContent {
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Work extends Post {
  category: string
  link: string
}

import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

interface Timestamps {
  createdAt: Date
  updatedAt: Date
}

export interface Post extends MarkdownParsedContent, Timestamps {
  tags: string[]
  industry: string
  link: string
}

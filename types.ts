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

export interface Blog extends Post {
  author: {
    name: string
    url: string
  }
}

export type Nav = null | Pick<Post, '_path' | 'title'>

export interface Link {
  path: string
  label: string
}

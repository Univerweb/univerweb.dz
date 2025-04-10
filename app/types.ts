interface MarkdownNode {
  value: string
  children: MarkdownNode[]
}

interface ParsedContent {
  _path: string
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  tags: string[]
}

export interface Work extends ParsedContent {
  category: string
  lead: string
  link?: string
}

export interface Post extends ParsedContent {
  author: {
    name: string
    url: string
  }
  body?: {
    children: MarkdownNode[]
  }
}

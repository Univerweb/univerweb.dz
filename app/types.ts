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
  body?: {
    children: MarkdownNode[]
  }
}

export interface Work extends ParsedContent {
  category: string
  link?: string
}

export interface Post extends ParsedContent {
  author: {
    name: string
    url: string
  }
}

export interface Presta {
  _path: string
  title: string
  description: string
  tags: string[]
  process?: {
    title: string
    text: string
  }[]
  faq?: {
    question: string
    answer: string
  }[]
  body?: {
    children: MarkdownNode[]
  }
}

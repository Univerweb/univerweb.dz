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

export interface Presta extends Pick<ParsedContent, '_path' | 'title' | 'description'> {
  label: string
  lead: string
  intro: string
  features: {
    title: string
    list: {
      title: string
      description: string
    }[]
  }
  tags: {
    title: string
    list: string[]
  }
  process: {
    title: string
    steps: {
      title: string
      description: string
    }[]
  }
  faq: {
    title: string
    questions: {
      question: string
      answer: string
    }[]
  }
}

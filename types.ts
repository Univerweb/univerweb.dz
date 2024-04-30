interface MarkdownNode {
  value: string
  children: MarkdownNode[]
}

interface Post {
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

export interface Work extends Post {
  category: string
  link?: string
}

export interface Blog extends Post {
  author: {
    name: string
    url: string
  }
}

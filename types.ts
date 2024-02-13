export interface Post {
  _path: string
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  tags: string[]
  body: string
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

export type Nav = null | Pick<Post, '_path' | 'title'>

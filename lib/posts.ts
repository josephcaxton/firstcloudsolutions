import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')
type PostMeta = {
  title: string
  date: string
  excerpt: string
  slug: string
  tags: string[] 
}

export function getAllPosts() {
  const files = fs.readdirSync(postsDir)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(filename => {
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
      const { data } = matter(raw)
      return {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        slug: data.slug || filename.replace('.mdx', ''),
        tags: data.tags ?? [],
      } as PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string) {
  const filepath = path.join(postsDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: data, content }
}
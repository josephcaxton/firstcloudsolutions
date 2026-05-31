import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { meta, content } = getPostBySlug(params.slug)
  return (
    <article>
      <h1>{meta.title}</h1>
      <p>{meta.date}</p>
      <MDXRemote source={content} />
    </article>
  )
}
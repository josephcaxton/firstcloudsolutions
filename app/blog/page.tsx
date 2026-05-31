import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import styles from '../page.module.css';

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main>
      <h1>Blog</h1>
      {posts.map(post => (
        <article key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <h2 className={styles.eyebrow}>{post.title}</h2>
          </Link>
          <p className="section-tag">{post.date}</p>
          <p className={styles.heroSub}>{post.excerpt}</p>
        </article>
      ))}
    </main>
  )
}
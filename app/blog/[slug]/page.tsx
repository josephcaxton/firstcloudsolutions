import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { meta, content } = getPostBySlug(params.slug)

  return (
    <>
      <Nav />

      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)',
        background: 'var(--paper)',
      }}>
        <div className="container">

          {/* Back link */}
          <Link href="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.8rem',
            color: 'var(--ink-3)',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            marginBottom: '2.5rem',
          }}>
            ← Back to blog
          </Link>

          {/* Post header */}
          <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
            <p className="section-tag">
              {meta.tags?.[0]} · {new Date(meta.date).toLocaleDateString('en-GB', {
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <h1 style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginTop: '0.75rem',
              marginBottom: '1.25rem',
            }}>
              {meta.title}
            </h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.8rem',
              color: 'var(--ink-3)',
            }}>
              <span style={{ fontWeight: 500, color: 'var(--ink-2)' }}>Joseph Caxton-Idowu</span>
              <span>·</span>
              <span>First Cloud Solutions</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            borderTop: '1px solid var(--paper-2)',
            marginBottom: '3rem',
            maxWidth: '680px',
          }} />

          {/* Post body */}
          <div style={{ maxWidth: '680px' }} className="post-body">
            <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          {/* Tags footer */}
          {meta.tags && (
            <div style={{
              maxWidth: '680px',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--paper-2)',
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}>
              {meta.tags.map((tag: string) => (
                <span key={tag} style={{
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'var(--paper-2)',
                  color: 'var(--ink-3)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Back link bottom */}
          <div style={{ maxWidth: '680px', marginTop: '3rem' }}>
            <Link href="/blog" className="btn-secondary">
              ← All posts
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

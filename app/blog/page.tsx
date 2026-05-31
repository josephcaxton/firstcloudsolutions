import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <>
      <Nav />

      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 6vw, 5rem)',
        background: 'var(--paper)',
      }}>
        <div className="container">

          {/* Header */}
          <div style={{ marginBottom: '3.5rem' }}>
            <p className="section-tag">Insights</p>
            <h1 className="section-title">
              Cloud &amp; AI <em>thinking</em>
            </h1>
            <p style={{
              marginTop: '1rem',
              color: 'var(--ink-2)',
              fontSize: '1rem',
              lineHeight: '1.7',
              maxWidth: '520px',
            }}>
              Practical writing on forward deployed AI engineering, AWS architecture,
              and building cloud-native products that actually ship.
            </p>
          </div>

          {/* Post list */}
          <div>
            {posts.map((post, index) => (
              <article
                key={post.slug}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '1rem',
                  alignItems: 'start',
                  padding: '2.5rem 0',
                  borderTop: '1px solid var(--paper-2)',
                  borderBottom: index === posts.length - 1 ? '1px solid var(--paper-2)' : 'none',
                }}
              >
                <div>
                  {/* Meta row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.75rem',
                  }}>
                    {post.tags?.[0] && (
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        background: 'var(--paper-2)',
                        color: 'var(--ink-3)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                      }}>
                        {post.tags[0]}
                      </span>
                    )}
                    <span style={{ fontSize: '0.8rem', color: 'var(--ink-3)' }}>
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <h2 style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: 'var(--ink)',
                      marginBottom: '0.6rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
                    >
                      {post.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--ink-2)',
                    lineHeight: 1.7,
                    maxWidth: '520px',
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Read link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginTop: '1rem',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Read post →
                  </Link>
                </div>

                {/* Post number */}
                <div style={{
                  fontFamily: 'var(--ff-display)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 300,
                  color: 'var(--paper-2)',
                  lineHeight: 1,
                  userSelect: 'none',
                  paddingTop: '0.25rem',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogBySlug, getRelatedBlogs, type Blog } from '../data/blogData'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params  // ✅ await করতে হবে
  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const relatedBlogs = getRelatedBlogs(blog, 3)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', paddingTop: '80px' }}>
      
      {/* Single Blog View */}
      <section style={{ padding: '60px 5%', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Back Button */}
        <Link href="/blog">
          <button
            style={{
              marginBottom: '30px',
              padding: '10px 20px',
              background: 'transparent',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '30px',
              color: '#FFD700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            ← Back to Blog
          </button>
        </Link>

        {/* Category Badge */}
        <div style={{ marginBottom: '20px' }}>
          <span style={{
            padding: '6px 16px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '20px',
            color: '#FFD700',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '900',
          color: 'white',
          lineHeight: '1.2',
          marginBottom: '20px'
        }}>
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          paddingBottom: '30px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              color: '#0A0A0A'
            }}>
              {blog.author.charAt(0)}
            </div>
            <div>
              <div style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>
                {blog.author}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
                {blog.date} • {blog.readTime}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div style={{
          width: '100%',
          height: '400px',
          borderRadius: '20px',
          background: blog.gradient,
          marginBottom: '50px'
        }}></div>

        {/* Blog Content */}
        <article 
          className="blog-content"
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '18px',
            lineHeight: '1.8'
          }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        {blog.tags && (
          <div style={{
            marginTop: '50px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ marginBottom: '15px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
              Tags:
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {blog.tags.map((tag: string) => (
                <span key={tag} style={{
                  padding: '6px 14px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '13px'
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share Section */}
        <div style={{
          marginTop: '40px',
          padding: '30px',
          backgroundColor: 'rgba(255,215,0,0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(255,215,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>
            Share this article
          </div>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '10px 20px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '30px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              Facebook
            </button>
            <button style={{
              padding: '10px 20px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '30px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              Twitter
            </button>
            <button style={{
              padding: '10px 20px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '30px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              LinkedIn
            </button>
          </div>
        </div>

      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section style={{ padding: '60px 5%', backgroundColor: '#0F0F0F' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '900',
              color: 'white',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              Related Articles
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '25px'
            }}>
              {relatedBlogs.map((relatedBlog: Blog) => (
                <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`}>
                  <article style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    textDecoration: 'none'
                  }}>
                    <div style={{ height: '150px', background: relatedBlog.gradient }}></div>
                    <div style={{ padding: '20px' }}>
                      <h3 style={{
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: '700',
                        marginBottom: '10px'
                      }}>
                        {relatedBlog.title}
                      </h3>
                      <p style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '14px'
                      }}>
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CSS for blog content */}
      <style>{`
        .blog-content h2 {
          color: white;
          font-size: 28px;
          font-weight: 700;
          margin: 40px 0 20px;
        }
        .blog-content h3 {
          color: #FFD700;
          font-size: 22px;
          font-weight: 600;
          margin: 30px 0 15px;
        }
        .blog-content p {
          margin-bottom: 20px;
        }
        .blog-content ul, .blog-content ol {
          margin: 20px 0;
          padding-left: 30px;
        }
        .blog-content li {
          margin-bottom: 10px;
        }
        .blog-content a {
          color: #FFD700;
          text-decoration: underline;
        }
        .blog-content blockquote {
          border-left: 4px solid #FFD700;
          padding-left: 20px;
          margin: 30px 0;
          font-style: italic;
          color: rgba(255,255,255,0.7);
        }
        .blog-content code {
          background: rgba(255,255,255,0.1);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: monospace;
        }
      `}</style>
    </div>
  )
}
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogBySlug, getRelatedBlogs, type Blog } from '../data/blogData'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    return {
      title: 'Blog Not Found | Insaf Building Design',
      description: 'The requested blog post was not found.',
    }
  }

  return {
    title: `${blog.title} | Insaf Building Design`,
    description: blog.excerpt,
    keywords: blog.tags?.join(', '),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
      tags: blog.tags,
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const relatedBlogs = getRelatedBlogs(blog, 3)

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    author: {
      '@type': 'Organization',
      name: blog.author,
    },
    datePublished: blog.date,
    publisher: {
      '@type': 'Organization',
      name: 'Insaf Building Design',
    },
    keywords: blog.tags?.join(', '),
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', paddingTop: '80px' }}>

      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav style={{ padding: '20px 5%', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.4)',
          flexWrap: 'wrap'
        }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            হোম
          </Link>
          <span>›</span>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            ব্লগ
          </Link>
          <span>›</span>
          <span style={{ color: '#FFD700' }}>{blog.category}</span>
        </div>
      </nav>

      {/* Single Blog View */}
      <section style={{ padding: '20px 5% 60px', maxWidth: '900px', margin: '0 auto' }}>

        {/* Back Button */}
        <Link href="/blog" style={{ textDecoration: 'none' }}>
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
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            ← সব ব্লগে ফিরে যান
          </button>
        </Link>

        {/* Category & Read Time */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '20px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <span style={{
            padding: '6px 16px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '20px',
            color: '#FFD700',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {blog.category}
          </span>
          <span style={{
            padding: '6px 16px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '12px',
            fontWeight: '500'
          }}>
            📖 {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: '900',
          color: 'white',
          lineHeight: '1.2',
          marginBottom: '20px',
          letterSpacing: '-0.5px'
        }}>
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: '1.6',
          marginBottom: '25px',
          fontStyle: 'italic'
        }}>
          {blog.excerpt}
        </p>

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              color: '#0A0A0A',
              fontSize: '16px'
            }}>
              IB
            </div>
            <div>
              <div style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>
                {blog.author}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
                📅 {blog.date} • ⏱️ {blog.readTime}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image / Gradient Banner */}
        <div style={{
          width: '100%',
          height: 'clamp(200px, 30vw, 400px)',
          borderRadius: '20px',
          background: blog.gradient,
          marginBottom: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              fontWeight: '900',
              color: 'rgba(255,255,255,0.15)',
              letterSpacing: '-2px'
            }}>
              #{blog.id}
            </span>
          </div>
        </div>

        {/* Table of Contents hint */}
        <div style={{
          padding: '20px 25px',
          backgroundColor: 'rgba(255,215,0,0.03)',
          border: '1px solid rgba(255,215,0,0.1)',
          borderRadius: '16px',
          marginBottom: '40px'
        }}>
          <div style={{
            color: '#FFD700',
            fontSize: '14px',
            fontWeight: '700',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            📋 এই ব্লগে যা আছে
          </div>
          <div style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '13px',
            lineHeight: '1.6'
          }}>
            নিচে স্ক্রল করে বিস্তারিত পড়ুন। প্রতিটি সেকশনে গুরুত্বপূর্ণ তথ্য, টেবিল এবং FAQ রয়েছে।
          </div>
        </div>

        {/* Blog Content */}
        <article
          className="blog-content"
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '17px',
            lineHeight: '1.9'
          }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div style={{
            marginTop: '50px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{
              marginBottom: '15px',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              🏷️ ট্যাগসমূহ:
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {blog.tags.map((tag: string) => (
                <span key={tag} style={{
                  padding: '6px 14px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '13px',
                  transition: 'all 0.3s ease'
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div style={{
          marginTop: '50px',
          padding: '40px 30px',
          background: 'linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.05))',
          borderRadius: '20px',
          border: '1px solid rgba(255,215,0,0.15)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: '800',
            color: 'white',
            marginBottom: '10px'
          }}>
            আপনার প্রজেক্ট নিয়ে আলোচনা করতে চান?
          </div>
          <div style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '15px',
            marginBottom: '25px',
            maxWidth: '500px',
            margin: '0 auto 25px'
          }}>
            ইনসাফ বিল্ডিং ডিজাইনের অভিজ্ঞ টিম আপনার স্বপ্নের প্রজেক্ট বাস্তবায়নে সাহায্য করতে প্রস্তুত।
          </div>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '30px',
                color: '#0A0A0A',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: '700',
                transition: 'all 0.3s ease'
              }}>
                📞 যোগাযোগ করুন
              </button>
            </Link>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 32px',
                background: 'transparent',
                border: '1px solid rgba(255,215,0,0.3)',
                borderRadius: '30px',
                color: '#FFD700',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: '700',
                transition: 'all 0.3s ease'
              }}>
                🏗️ আমাদের সেবাসমূহ
              </button>
            </Link>
          </div>
        </div>

        {/* Share Section */}
        <div style={{
          marginTop: '30px',
          padding: '25px 30px',
          backgroundColor: 'rgba(255,255,255,0.02)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center'
        }}>
          <div style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '15px'
          }}>
            📤 এই ব্লগটি শেয়ার করুন
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { name: 'Facebook', icon: '📘', color: 'rgba(59,89,152,0.2)', border: 'rgba(59,89,152,0.3)' },
              { name: 'WhatsApp', icon: '💬', color: 'rgba(37,211,102,0.2)', border: 'rgba(37,211,102,0.3)' },
              { name: 'Twitter', icon: '🐦', color: 'rgba(29,161,242,0.2)', border: 'rgba(29,161,242,0.3)' },
              { name: 'LinkedIn', icon: '💼', color: 'rgba(0,119,181,0.2)', border: 'rgba(0,119,181,0.3)' },
              { name: 'Copy Link', icon: '🔗', color: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.15)' }
            ].map((platform) => (
              <button key={platform.name} style={{
                padding: '10px 18px',
                backgroundColor: platform.color,
                border: `1px solid ${platform.border}`,
                borderRadius: '30px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s ease'
              }}>
                {platform.icon} {platform.name}
              </button>
            ))}
          </div>
        </div>

      
          
           

        {/* Navigation (Prev/Next) */}
        <div style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          {blog.id > 1 && (
            <Link href="/blog" style={{
              textDecoration: 'none',
              flex: 1,
              minWidth: '150px'
            }}>
              <div style={{
                padding: '15px 20px',
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginBottom: '5px' }}>
                  ← আগের ব্লগ
                </div>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>
                  সব ব্লগ দেখুন
                </div>
              </div>
            </Link>
          )}
          <Link href="/blog" style={{
            textDecoration: 'none',
            flex: 1,
            minWidth: '150px',
            textAlign: 'right'
          }}>
            <div style={{
              padding: '15px 20px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginBottom: '5px' }}>
                পরের ব্লগ →
              </div>
              <div style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>
                আরও ব্লগ পড়ুন
              </div>
            </div>
          </Link>
        </div>

      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section style={{ padding: '60px 5%', backgroundColor: '#0F0F0F' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{
                padding: '6px 16px',
                backgroundColor: 'rgba(255,215,0,0.1)',
                border: '1px solid rgba(255,215,0,0.2)',
                borderRadius: '20px',
                color: '#FFD700',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                সম্পর্কিত ব্লগ
              </span>
              <h2 style={{
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontWeight: '900',
                color: 'white',
                marginTop: '15px'
              }}>
                আরও পড়ুন
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '25px'
            }}>
              {relatedBlogs.map((relatedBlog: Blog) => (
                <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`} style={{ textDecoration: 'none' }}>
                  <article style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}>
                    <div style={{
                      height: '160px',
                      background: relatedBlog.gradient,
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '15px'
                    }}>
                      <span style={{
                        padding: '4px 12px',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        color: 'white',
                        fontSize: '11px',
                        fontWeight: '600'
                      }}>
                        {relatedBlog.category}
                      </span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h3 style={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '700',
                        marginBottom: '10px',
                        lineHeight: '1.4',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {relatedBlog.title}
                      </h3>
                      <p style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '13px',
                        lineHeight: '1.5',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        marginBottom: '15px'
                      }}>
                        {relatedBlog.excerpt}
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.4)'
                      }}>
                        <span>{relatedBlog.date}</span>
                        <span style={{ color: '#FFD700', fontWeight: '600' }}>
                          পড়ুন →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* View All Blogs Button */}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/blog" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '14px 40px',
                  background: 'transparent',
                  border: '2px solid rgba(255,215,0,0.3)',
                  borderRadius: '30px',
                  color: '#FFD700',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: '700',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px'
                }}>
                  সব ব্লগ দেখুন →
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CSS for blog content */}
      <style>{`
        .blog-content h2 {
          color: white;
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 800;
          margin: 45px 0 20px;
          padding-top: 15px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .blog-content h2:first-of-type {
          border-top: none;
          padding-top: 0;
        }
        .blog-content h3 {
          color: #FFD700;
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 700;
          margin: 30px 0 15px;
        }
        .blog-content h4 {
          color: rgba(255,255,255,0.9);
          font-size: 17px;
          font-weight: 600;
          margin: 20px 0 12px;
        }
        .blog-content p {
          margin-bottom: 18px;
          color: rgba(255,255,255,0.75);
        }
        .blog-content strong {
          color: white;
          font-weight: 700;
        }
        .blog-content ul, .blog-content ol {
          margin: 18px 0;
          padding-left: 25px;
        }
        .blog-content li {
          margin-bottom: 8px;
          color: rgba(255,255,255,0.75);
        }
        .blog-content li strong {
          color: #FFD700;
        }
        .blog-content a {
          color: #FFD700;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .blog-content a:hover {
          color: #FFA500;
        }
        .blog-content blockquote {
          border-left: 4px solid #FFD700;
          padding: 20px 25px;
          margin: 30px 0;
          background: rgba(255,215,0,0.03);
          border-radius: 0 12px 12px 0;
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          line-height: 1.7;
        }
        .blog-content blockquote strong {
          color: #FFD700;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-size: 14px;
          overflow-x: auto;
          display: block;
        }
        @media (min-width: 768px) {
          .blog-content table {
            display: table;
          }
        }
        .blog-content table th {
          padding: 12px 15px;
          text-align: left;
          font-weight: 700;
          font-size: 13px;
        }
        .blog-content table td {
          padding: 10px 15px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.7);
          font-size: 13px;
        }
        .blog-content table tr:hover td {
          background: rgba(255,255,255,0.02);
        }
        .blog-content code {
          background: rgba(255,215,0,0.1);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: monospace;
          color: #FFD700;
          font-size: 14px;
        }
        .blog-content img {
          max-width: 100%;
          border-radius: 12px;
          margin: 20px 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .blog-content {
            font-size: 15px !important;
          }
          .blog-content table {
            font-size: 12px;
          }
          .blog-content table th,
          .blog-content table td {
            padding: 8px 10px;
          }
          .blog-content blockquote {
            padding: 15px 18px;
            margin: 20px 0;
          }
          .blog-content ul, .blog-content ol {
            padding-left: 20px;
          }
        }

        /* Print styles */
        @media print {
          .blog-content {
            color: #000 !important;
          }
          .blog-content h2, .blog-content h3 {
            color: #000 !important;
          }
        }

        /* Selection color */
        .blog-content ::selection {
          background: rgba(255,215,0,0.3);
          color: white;
        }

        /* Smooth scroll for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}
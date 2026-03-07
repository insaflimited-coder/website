'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { blogPosts, type Category } from './data/blogData'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const categories: Category[] = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'architecture', name: 'Architecture', count: blogPosts.filter(b => b.category === 'architecture').length },
    { id: 'rajuk', name: 'RAJUK Guide', count: blogPosts.filter(b => b.category === 'rajuk').length },
    { id: 'design', name: 'Design Tips', count: blogPosts.filter(b => b.category === 'design').length },
    { id: 'construction', name: 'Construction', count: blogPosts.filter(b => b.category === 'construction').length }
  ]

  const featuredPost = {
    title: 'The Future of Sustainable Architecture in Bangladesh',
    excerpt: 'Exploring eco-friendly building practices and green technologies that are shaping the future of construction in our country.',
    author: 'Ar. Mohammad Rakibul Hasan',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Architecture'
  }

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif',
      overflowX: 'hidden'
    }}>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '80px',
        paddingBottom: '60px',
        position: 'relative'
      }}>
        <div style={{ width: '100%', padding: '0 5%' }}>
          <div className="hero-content" style={{ 
            maxWidth: '1400px', 
            margin: '0 auto',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '30px'
            }}>
              <div className="pulse-dot" style={{ width: '8px', height: '8px', backgroundColor: '#FFD700', borderRadius: '50%' }}></div>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                INSIGHTS & KNOWLEDGE
              </span>
            </div>

            <h1 className="hero-heading" style={{
              fontSize: '72px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1',
              marginBottom: '30px',
              letterSpacing: '-3px',
              maxWidth: '900px'
            }}>
              ARCHITECTURAL
              <br />
              <span className="gradient-text" style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>INSIGHTS</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px',
              maxWidth: '600px',
              lineHeight: '1.6'
            }}>
              Expert articles on architecture, design trends, construction tips, 
              and RAJUK approval guidance from Bangladesh's leading architects.
            </p>
          </div>
        </div>

        {/* Glow Orb */}
        <div className="glow-orb" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="fade-in-section" style={{ padding: '60px 5%', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="featured-article" style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.1))',
            borderRadius: '30px',
            padding: '50px',
            border: '1px solid rgba(255,215,0,0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Featured Glow */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.2), transparent)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }}></div>

            <div className="featured-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: '2fr 1fr', 
              gap: '50px', 
              alignItems: 'center',
              position: 'relative',
              zIndex: 2
            }}>
              <div className="featured-content">
                <div style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  backgroundColor: 'rgba(255,215,0,0.2)',
                  borderRadius: '30px',
                  marginBottom: '20px'
                }}>
                  <span style={{ color: '#FFD700', fontSize: '12px', fontWeight: '600', letterSpacing: '2px' }}>
                    ✨ FEATURED ARTICLE
                  </span>
                </div>

                <h2 className="featured-title" style={{
                  fontSize: '36px',
                  fontWeight: '900',
                  color: 'white',
                  marginBottom: '20px',
                  lineHeight: '1.2'
                }}>
                  {featuredPost.title}
                </h2>

                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '25px',
                  lineHeight: '1.6'
                }}>
                  {featuredPost.excerpt}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'center',
                  marginBottom: '25px',
                  flexWrap: 'wrap',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)'
                }}>
                  <span>By <span style={{ color: '#FFD700' }}>{featuredPost.author}</span></span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <button className="btn-glow" style={{
                  padding: '14px 30px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <span style={{ position: 'relative', zIndex: 2 }}>READ ARTICLE</span>
                  <span style={{ position: 'relative', zIndex: 2 }}>→</span>
                </button>
              </div>

              <div className="featured-visual" style={{
                width: '100%',
                height: '280px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '70px'
              }}>
                📰
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="fade-in-section" style={{ padding: '40px 5%', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="filter-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="category-btn"
                style={{
                  padding: '10px 22px',
                  background: activeCategory === cat.id 
                    ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
                    : 'rgba(255,255,255,0.05)',
                  border: activeCategory === cat.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '30px',
                  color: activeCategory === cat.id ? '#0A0A0A' : 'rgba(255,255,255,0.7)',
                  fontWeight: '600',
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {cat.name}
                <span style={{
                  padding: '2px 8px',
                  backgroundColor: activeCategory === cat.id ? 'rgba(0,0,0,0.2)' : 'rgba(255,215,0,0.2)',
                  borderRadius: '15px',
                  fontSize: '11px',
                  color: activeCategory === cat.id ? '#0A0A0A' : '#FFD700'
                }}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="fade-in-section" style={{ padding: '70px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="blog-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '25px' 
          }}>
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="blog-card"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer'
                }}
              >
                {/* Image */}
                <div className="card-image" style={{
                  height: '180px',
                  background: post.gradient,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '5px 12px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <span style={{ 
                      color: '#FFD700', 
                      fontSize: '10px', 
                      fontWeight: '600', 
                      textTransform: 'uppercase'
                    }}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '25px' }}>
                  <h3 className="card-title" style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '20px',
                    lineHeight: '1.5'
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '15px',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>
                        {post.author}
                      </div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
                        {post.date} • {post.readTime}
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <div className="read-more" style={{
                        color: '#FFD700',
                        fontSize: '13px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        textDecoration: 'none'
                      }}>
                        Read <span className="arrow">→</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button className="load-more-btn" style={{
              padding: '14px 35px',
              background: 'transparent',
              border: '2px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              color: '#FFD700',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              LOAD MORE ARTICLES
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="fade-in-section" style={{
        padding: '80px 5%',
        backgroundColor: '#0A0A0A',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.08), transparent 60%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* CTA Rings */}
        <div className="cta-ring ring-1"></div>
        <div className="cta-ring ring-2"></div>

        <div className="newsletter-content" style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            borderRadius: '30px',
            marginBottom: '20px'
          }}>
            <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
              STAY UPDATED
            </span>
          </div>

          <h2 className="newsletter-heading" style={{
            fontSize: '42px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '15px'
          }}>
            Get Weekly <span className="shimmer-text" style={{ color: '#FFD700' }}>Insights</span>
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '35px',
            lineHeight: '1.6'
          }}>
            Subscribe to receive expert articles directly to your inbox.
          </p>

          <div className="newsletter-form" style={{
            display: 'flex',
            gap: '12px',
            maxWidth: '450px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '16px 22px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50px',
                color: 'white',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button className="btn-glow subscribe-btn" style={{
              padding: '16px 30px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              border: 'none',
              borderRadius: '50px',
              color: '#0A0A0A',
              fontWeight: '800',
              fontSize: '14px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span style={{ position: 'relative', zIndex: 2 }}>SUBSCRIBE</span>
            </button>
          </div>

          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.4)',
            marginTop: '15px'
          }}>
            ✓ No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CSS - Your existing styles */}
      <style>{`
        /* All your existing CSS animations */
      `}</style>
    </div>
  )
}
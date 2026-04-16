'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { blogPosts, getCategories, type Blog, type Category } from './data/blogData'

// Constants
const POSTS_PER_PAGE = 6

// All available categories
const ALL_CATEGORIES: (string | 'all')[] = [
  'all',
  'Architecture',
  'Construction', 
  'Technology',
  'Real Estate',
  'Legal & Construction',
  'Interior Design',
  'Sustainability'
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [visiblePosts, setVisiblePosts] = useState<number>(POSTS_PER_PAGE)
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)

  // Check for tag query parameter on mount
  useEffect(() => {
    const tagParam = typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('tag')
      : null

    if (tagParam) {
      setActiveTag(decodeURIComponent(tagParam))
      setActiveCategory('all') // Reset category when filtering by tag
    }
    setIsLoaded(true)
  }, [])

  // Category পরিবর্তন হলে visible posts রিসেট
  useEffect(() => {
    setVisiblePosts(POSTS_PER_PAGE)
  }, [activeCategory])

  // ✅ useMemo দিয়ে categories cache করা
  const categories = useMemo<Category[]>(() => {
    const allCategories = getCategories()
    return [
      { id: 'all', name: 'সকল', count: blogPosts.length },
      ...allCategories.map(cat => ({
        ...cat,
        name: cat.name // Keep the English name, or translate if needed
      }))
    ]
  }, [])

  // ✅ useMemo দিয়ে filtered posts cache করা
  const filteredPosts = useMemo(() => {
    let posts = blogPosts

    // Filter by tag if active
    if (activeTag) {
      posts = posts.filter(post => post.tags && post.tags.some(tag => tag.toLowerCase() === activeTag.toLowerCase()))
    } else if (activeCategory !== 'all') {
      // Filter by category if no tag is active
      posts = posts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase())
    }

    return posts
  }, [activeCategory, activeTag])

  // ✅ useMemo দিয়ে displayed posts cache করা
  const displayedPosts = useMemo(() => {
    return filteredPosts.slice(0, visiblePosts)
  }, [filteredPosts, visiblePosts])

  // ✅ Featured post
  const featuredPost = useMemo(() => {
    return blogPosts[0] || null
  }, [])

  // আরও posts আছে কিনা চেক
  const hasMorePosts = visiblePosts < filteredPosts.length
  const remainingPosts = filteredPosts.length - visiblePosts

  // ✅ useCallback দিয়ে function cache করা
  const handleLoadMore = useCallback(() => {
    setIsLoadingMore(true)
    setTimeout(() => {
      setVisiblePosts(prev => Math.min(prev + POSTS_PER_PAGE, filteredPosts.length))
      setIsLoadingMore(false)
    }, 300)
  }, [filteredPosts.length])

  // ✅ Category change handler
  const handleCategoryChange = useCallback((categoryId: string | 'all') => {
    setActiveCategory(categoryId)
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }, [])

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
                {blogPosts.length}+ ARTICLES
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
              Explore expert articles on architecture, design trends, construction best practices, and RAJUK approval guidance from Bangladesh’s leading building design professionals.
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
      {featuredPost && (
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

                  <Link href={`/blog/${featuredPost.slug}`}>
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
                  </Link>
                </div>

                <div className="featured-visual" style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    style={{
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY FILTERS */}
      <section className="fade-in-section" style={{ padding: '40px 5%', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Active Tag Filter */}
          {activeTag && (
            <div style={{
              marginBottom: '20px',
              padding: '15px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)'
              }}>
                Filtering by tag: <span style={{ color: '#FFD700', fontWeight: '600' }}>#{activeTag}</span>
              </div>
              <button
                onClick={() => {
                  setActiveTag(null)
                  setActiveCategory('all')
                  window.history.pushState({}, '', '/blog')
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  color: '#FFD700',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '600'
                }}
              >
                Clear Filter ✕
              </button>
            </div>
          )}
          
          <div className="filter-buttons" style={{ 
            display: 'flex', 
            gap: '12px', 
            flexWrap: 'wrap', 
            justifyContent: 'center' 
          }}>
            {categories.map((cat) => (
              <button
                key={String(cat.id)}
                onClick={() => {
                  handleCategoryChange(cat.id)
                  setActiveTag(null)
                }}
                className="category-btn"
                style={{
                  padding: '10px 22px',
                  background: (activeCategory === cat.id && !activeTag)
                    ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
                    : 'rgba(255,255,255,0.05)',
                  border: (activeCategory === cat.id && !activeTag) ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '30px',
                  color: (activeCategory === cat.id && !activeTag) ? '#0A0A0A' : 'rgba(255,255,255,0.7)',
                  fontWeight: '600',
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.name}
                <span style={{
                  padding: '2px 8px',
                  backgroundColor: (activeCategory === cat.id && !activeTag) ? 'rgba(0,0,0,0.2)' : 'rgba(255,215,0,0.2)',
                  borderRadius: '15px',
                  fontSize: '11px',
                  color: (activeCategory === cat.id && !activeTag) ? '#0A0A0A' : '#FFD700'
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
          
          {/* Posts Count Info */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '30px',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '14px'
          }}>
            দেখাচ্ছে <span style={{ color: '#FFD700', fontWeight: '600' }}>{displayedPosts.length}</span> / <span style={{ color: '#FFD700', fontWeight: '600' }}>{filteredPosts.length}</span> টি আর্টিকেল
            {activeTag ? (
              <span style={{ marginLeft: '10px' }}>
                (ট্যাগ: #{activeTag})
              </span>
            ) : activeCategory !== 'all' && (
              <span style={{ marginLeft: '10px' }}>
                ({categories.find(c => c.id === activeCategory)?.name})
              </span>
            )}
          </div>

          <div className="blog-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '25px' 
          }}>
            {displayedPosts.map((post, index) => (
              <article
                key={post.id}
                className="blog-card"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.5s ease ${index * 0.05}s both`
                }}
              >
                {/* Image */}
                <div className="card-image" style={{
                  height: '180px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px 20px 0 0'
                }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{
                      objectFit: 'cover'
                    }}
                  />
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
                    lineHeight: '1.3',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '20px',
                    lineHeight: '1.5',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                      marginBottom: '15px'
                    }}>
                      {post.tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} style={{
                          padding: '4px 10px',
                          backgroundColor: 'rgba(255,215,0,0.1)',
                          border: '1px solid rgba(255,215,0,0.2)',
                          borderRadius: '15px',
                          color: '#FFD700',
                          fontSize: '11px',
                          fontWeight: '500'
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

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

          {/* Load More Button */}
          {hasMorePosts && (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <button 
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="load-more-btn" 
                style={{
                  padding: '14px 35px',
                  background: isLoadingMore ? 'rgba(255,215,0,0.3)' : 'transparent',
                  border: '2px solid rgba(255,215,0,0.3)',
                  borderRadius: '50px',
                  color: '#FFD700',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: isLoadingMore ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  opacity: isLoadingMore ? 0.7 : 1
                }}
              >
                {isLoadingMore ? (
                  <>
                    <span className="loading-spinner"></span>
                    LOADING...
                  </>
                ) : (
                  <>
                    LOAD MORE ARTICLES
                    <span style={{
                      padding: '4px 10px',
                      backgroundColor: 'rgba(255,215,0,0.2)',
                      borderRadius: '20px',
                      fontSize: '12px'
                    }}>
                      +{remainingPosts > POSTS_PER_PAGE ? POSTS_PER_PAGE : remainingPosts}
                    </span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* All Posts Loaded */}
          {!hasMorePosts && filteredPosts.length > POSTS_PER_PAGE && (
            <div style={{ 
              textAlign: 'center', 
              marginTop: '50px',
              padding: '20px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              borderRadius: '15px',
              border: '1px solid rgba(255,215,0,0.2)'
            }}>
              <span style={{ color: '#FFD700', fontSize: '14px' }}>
                ✅ সব {filteredPosts.length}টি আর্টিকেল দেখানো হয়েছে
              </span>
            </div>
          )}

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div style={{ 
              textAlign: 'center', 
              padding: '60px 20px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '20px' }}>📭</div>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>কোন আর্টিকেল পাওয়া যায়নি</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
                এই ক্যাটাগরিতে এখনো কোন আর্টিকেল নেই
              </p>
              <button 
                onClick={() => handleCategoryChange('all')}
                style={{
                  padding: '10px 25px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '25px',
                  color: '#0A0A0A',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                সব আর্টিকেল দেখুন
              </button>
            </div>
          )}
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
            Get Weekly <span style={{ color: '#FFD700' }}>Insights</span>
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
              whiteSpace: 'nowrap'
            }}>
              SUBSCRIBE
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

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .pulse-dot {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,215,0,0.3);
          border-top-color: #FFD700;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        
        .blog-card {
          transition: all 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,215,0,0.3) !important;
        }
        
        .card-image {
          transition: all 0.3s ease;
        }
        
        .blog-card:hover .card-image {
          transform: scale(1.02);
        }
        
        .category-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,215,0,0.4) !important;
        }
        
        .btn-glow {
          transition: all 0.3s ease;
        }
        
        .btn-glow:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(255,215,0,0.3);
        }
        
        .load-more-btn {
          transition: all 0.3s ease;
        }
        
        .load-more-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #FFD700, #FFA500) !important;
          color: #0A0A0A !important;
          border-color: transparent !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,215,0,0.3);
        }
        
        .newsletter-input:focus {
          border-color: rgba(255,215,0,0.5) !important;
        }
        
        .arrow {
          transition: transform 0.3s ease;
        }
        
        .read-more:hover .arrow {
          transform: translateX(5px);
        }
        
        .cta-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,215,0,0.1);
        }
        
        .ring-1 {
          width: 400px;
          height: 400px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .ring-2 {
          width: 600px;
          height: 600px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 42px !important;
            letter-spacing: -1px !important;
          }
          
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
          
          .featured-visual {
            display: none !important;
          }
          
          .featured-article {
            padding: 30px !important;
          }
          
          .featured-title {
            font-size: 26px !important;
          }
          
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          
          .newsletter-heading {
            font-size: 28px !important;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
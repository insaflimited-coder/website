'use client'
import Link from 'next/link'

export default function FloorPlanPage() {
  const packages = [
    {
      id: 1,
      title: '1-3 Storied House',
      subtitle: 'Basic Residential',
      icon: '🏠',
      delivery: '3 Days',
      priceRange: '5,000 - 10,000',
      features: [
        'Land Sketch',
        'PDF & Printed Copy',
        'Floor Plan Design',
        '3 Times Correction'
      ],
      color: '#667eea',
      gradient: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(118,75,162,0.08))'
    },
    {
      id: 2,
      title: '4-6 Storied House',
      subtitle: 'Mid Residential',
      icon: '🏘️',
      delivery: '3 Days',
      priceRange: '8,000 - 12,000',
      features: [
        'Land Sketch',
        'PDF & Printed Copy',
        'Floor Plan Design',
        '3 Times Correction'
      ],
      popular: true,
      color: '#FFD700',
      gradient: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.08))'
    },
    {
      id: 3,
      title: '7-8 Storied House',
      subtitle: 'High Residential',
      icon: '🏢',
      delivery: '4 Days',
      priceRange: '10,000 - 15,000',
      features: [
        'Land Sketch',
        'PDF & Printed Copy',
        'Floor Plan Design',
        '3 Times Correction'
      ],
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, rgba(79,172,254,0.15), rgba(0,242,254,0.08))'
    },
    {
      id: 4,
      title: '9-10 Storied House',
      subtitle: 'Premium Tower',
      icon: '🏙️',
      delivery: '5 Days',
      priceRange: '15,000 - 20,000',
      features: [
        'Land Sketch',
        'PDF & Printed Copy',
        'Floor Plan Design',
        '3 Times Correction'
      ],
      color: '#fa709a',
      gradient: 'linear-gradient(135deg, rgba(250,112,154,0.15), rgba(254,225,64,0.08))'
    }
  ]

  const whyChoose = [
    { icon: '⚡', title: 'Fast Delivery', desc: '3-5 days turnaround' },
    { icon: '💎', title: 'Professional Quality', desc: 'CAD standard drawings' },
    { icon: '🔄', title: 'Free Revisions', desc: '3 times correction included' },
    { icon: '📱', title: '24/7 Support', desc: 'Always here to help' }
  ]

  const ringSizes = [500, 400, 300]

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0A0A0A',
      fontFamily: 'system-ui, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>

      {/* Floating Orbs */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        animation: 'floatOrb 15s ease-in-out infinite',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'fixed',
        bottom: '10%',
        left: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(102,126,234,0.12), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        animation: 'floatOrb 18s ease-in-out infinite reverse',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* ===================== HERO ===================== */}
      <section className="hero-section" style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="hero-container" style={{
          width: '100%',
          maxWidth: '1400px'
        }}>
          <div style={{ textAlign: 'center' }}>

            {/* Badge */}
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              animation: 'badgeGlow 3s ease-in-out infinite'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#FFD700',
                borderRadius: '50%',
                animation: 'pulseDot 2s ease-in-out infinite'
              }} />
              <span style={{
                color: '#FFD700',
                fontSize: '13px',
                letterSpacing: '2px',
                fontWeight: '600'
              }}>
                FLOOR PLAN PACKAGES
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-title" style={{
              fontWeight: '900',
              color: 'white',
              lineHeight: '1.1',
              letterSpacing: '-2px'
            }}>
              PROFESSIONAL<br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B6B, #FFD700)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>
                FLOOR PLANS
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle" style={{
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.8',
              maxWidth: '700px'
            }}>
              High-quality 2D floor plans with accurate measurements.<br />
              Perfect for planning, visualization &amp; documentation.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons" style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="tel:+8801958140774" style={{ textDecoration: 'none' }}>
                <button
                  className="btn-primary"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    border: 'none',
                    borderRadius: '60px',
                    color: '#0A0A0A',
                    fontWeight: '800',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    boxShadow: '0 20px 40px rgba(255,215,0,0.3)',
                    transition: 'all 0.3s',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,215,0,0.3)'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    animation: 'btnShine 3s ease-in-out infinite'
                  }} />
                  <span style={{ position: 'relative', zIndex: 1 }}>
                    CALL: 01958-140774
                  </span>
                </button>
              </a>

              <Link href="/services" style={{ textDecoration: 'none' }}>
                <button
                  className="btn-secondary"
                  style={{
                    background: 'transparent',
                    border: '2px solid rgba(255,255,255,0.2)',
                    borderRadius: '60px',
                    color: 'white',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.6)'
                    e.currentTarget.style.background = 'rgba(255,215,0,0.1)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  VIEW ALL PACKAGES
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="stats-row" style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {[
                { number: '530+', label: 'PROJECTS' },
                { number: '3-5', label: 'DAYS DELIVERY' },
                { number: '100%', label: 'SATISFACTION' }
              ].map((stat, statIdx) => (
                <div key={statIdx} className="stat-item">
                  <div style={{
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }} className="stat-number">
                    {stat.number}
                  </div>
                  <div style={{
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '1px'
                  }} className="stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PACKAGES ===================== */}
      <section className="packages-section" style={{
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="packages-container" style={{
          maxWidth: '1200px'
        }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center' }} className="section-header">
            <div style={{
              color: '#FFD700',
              fontSize: '14px',
              letterSpacing: '3px',
              animation: 'textGlow 3s ease-in-out infinite'
            }} className="section-label">
              PRICING PACKAGES
            </div>
            <h2 className="section-title" style={{
              fontWeight: '900',
              color: 'white',
              letterSpacing: '-1px'
            }}>
              CHOOSE YOUR{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>
                PACKAGE
              </span>
            </h2>
          </div>

          {/* Package Cards */}
          <div className="packages-grid">
            {packages.map((pkg, pkgIdx) => (
              <div
                key={pkg.id}
                className="package-card"
                style={{
                  background: pkg.gradient,
                  border: pkg.popular
                    ? `2px solid ${pkg.color}`
                    : `1px solid ${pkg.color}40`,
                  borderRadius: '25px',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  overflow: 'hidden',
                  animation: `cardReveal 0.8s ease-out ${pkgIdx * 0.1}s both`,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)'
                  e.currentTarget.style.boxShadow = `0 30px 80px ${pkg.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)`,
                    borderRadius: '30px',
                    fontSize: '11px',
                    fontWeight: '800',
                    color: '#0A0A0A',
                    letterSpacing: '1px',
                    boxShadow: `0 10px 30px ${pkg.color}60`,
                    animation: 'pulseGlow 2s ease-in-out infinite',
                    zIndex: 2
                  }}>
                    POPULAR
                  </div>
                )}

                {/* Card Content */}
                <div className="card-inner">

                  {/* Left Side */}
                  <div className="card-left">
                    {/* Icon */}
                    <div style={{
                      animation: 'iconFloat 3s ease-in-out infinite',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                      display: 'block',
                      textAlign: 'center'
                    }} className="card-icon">
                      {pkg.icon}
                    </div>

                    {/* Price Box */}
                    <div className="price-box" style={{
                      background: 'rgba(0,0,0,0.35)',
                      borderRadius: '16px',
                      border: `1px solid ${pkg.color}30`,
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.45)',
                        letterSpacing: '1.5px',
                        fontWeight: '700',
                        marginTop: '0',
                        marginBottom: '8px',
                        marginLeft: '0',
                        marginRight: '0'
                      }}>
                        PRICE RANGE
                      </div>
                      <div className="price-text" style={{
                        fontWeight: '900',
                        color: pkg.color,
                        lineHeight: '1.3'
                      }}>
                        BDT {pkg.priceRange}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.45)',
                        fontWeight: '500',
                        marginTop: '6px',
                        marginBottom: '0',
                        marginLeft: '0',
                        marginRight: '0'
                      }}>
                        One-time payment
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                    {/* Title */}
                    <h3 className="card-title" style={{
                      fontWeight: '900',
                      color: 'white',
                      marginTop: '0',
                      marginLeft: '0',
                      marginRight: '0'
                    }}>
                      {pkg.title}
                    </h3>

                    {/* Subtitle */}
                    <p style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.5)',
                      marginTop: '0',
                      marginLeft: '0',
                      marginRight: '0',
                      fontWeight: '500'
                    }} className="card-subtitle">
                      {pkg.subtitle} &nbsp;•&nbsp; {pkg.delivery} Delivery
                    </p>

                    {/* Features */}
                    <div className="features-wrap">
                      <div style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        color: 'rgba(255,255,255,0.4)',
                        marginTop: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        letterSpacing: '2px'
                      }} className="features-label">
                        WHAT&apos;S INCLUDED
                      </div>
                      {pkg.features.map((feature, featureIdx) => (
                        <div
                          key={featureIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginTop: '0',
                            marginLeft: '0',
                            marginRight: '0',
                            lineHeight: '1.5'
                          }}
                          className="feature-item"
                        >
                          <span style={{
                            color: pkg.color,
                            fontSize: '16px',
                            fontWeight: '700',
                            flexShrink: 0
                          }}>
                            ✓
                          </span>
                          <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="tel:+8801958140774"
                      style={{ textDecoration: 'none', display: 'block' }}
                    >
                      <button
                        className="card-btn"
                        style={{
                          width: '100%',
                          background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)`,
                          border: 'none',
                          borderRadius: '12px',
                          color: pkg.popular ? '#0A0A0A' : '#ffffff',
                          fontWeight: '800',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: `0 10px 30px ${pkg.color}40`,
                          letterSpacing: '0.5px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)'
                          e.currentTarget.style.boxShadow = `0 15px 40px ${pkg.color}60`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = `0 10px 30px ${pkg.color}40`
                        }}
                      >
                        ORDER NOW
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE ===================== */}
      <section className="why-section" style={{
        backgroundColor: '#0A0A0A',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="why-container" style={{
          maxWidth: '1200px'
        }}>

          <div style={{ textAlign: 'center' }} className="section-header">
            <div style={{
              color: '#FFD700',
              fontSize: '14px',
              letterSpacing: '3px',
              animation: 'textGlow 3s ease-in-out infinite'
            }} className="section-label">
              WHY CHOOSE US
            </div>
            <h2 className="section-title" style={{
              fontWeight: '900',
              color: 'white'
            }}>
              OUR{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>
                ADVANTAGES
              </span>
            </h2>
          </div>

          <div className="why-grid">
            {whyChoose.map((item, whyIdx) => (
              <div
                key={whyIdx}
                className="why-card"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '25px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  animation: `cardReveal 0.8s ease-out ${whyIdx * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px)'
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.25)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  animation: `iconFloat 3s ease-in-out ${whyIdx * 0.2}s infinite`,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                  display: 'block'
                }} className="why-icon">
                  {item.icon}
                </div>
                <h4 style={{
                  fontWeight: '800',
                  color: 'white',
                  marginTop: '0',
                  marginLeft: '0',
                  marginRight: '0'
                }} className="why-title">
                  {item.title}
                </h4>
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: '0',
                  marginBottom: '0',
                  marginLeft: '0',
                  marginRight: '0'
                }} className="why-desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT CTA ===================== */}
      <section className="cta-section" style={{
        background: 'linear-gradient(135deg, #0F0F0F, #1a1a1a)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}>
        {/* Animated Rings */}
        {ringSizes.map((size, ringIdx) => (
          <div
            key={ringIdx}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              border: '2px solid rgba(255,215,0,0.1)',
              marginTop: `-${size / 2}px`,
              marginLeft: `-${size / 2}px`,
              animation: `ringsPulse 4s ease-out ${ringIdx * 0.5}s infinite`,
              zIndex: 0,
              pointerEvents: 'none'
            }}
          />
        ))}

        <div className="cta-container" style={{
          maxWidth: '900px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 className="cta-title" style={{
            fontWeight: '900',
            color: 'white'
          }}>
            Need Help Choosing?
          </h2>

          <p className="cta-desc" style={{
            color: 'rgba(255,255,255,0.6)',
            lineHeight: '1.7'
          }}>
            Our team is ready to help you select the perfect package<br />
            for your building design needs.
          </p>

          <div className="cta-buttons" style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="tel:+8801958140774" style={{ textDecoration: 'none' }}>
              <button
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '60px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  cursor: 'pointer',
                  boxShadow: '0 20px 50px rgba(255,215,0,0.4)',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,215,0,0.4)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'btnShine 3s ease-in-out infinite'
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>CALL NOW</span>
              </button>
            </a>

            <a
              href="https://wa.me/8801958140774"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                className="btn-whatsapp"
                style={{
                  background: '#25D366',
                  border: 'none',
                  borderRadius: '60px',
                  color: 'white',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 20px 50px rgba(37,211,102,0.3)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(37,211,102,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(37,211,102,0.3)'
                }}
              >
                WHATSAPP
              </button>
            </a>
          </div>

          <p className="cta-info" style={{
            color: 'rgba(255,255,255,0.4)'
          }}>
            Available: 01958-140774 (Phone/WhatsApp)
          </p>
        </div>
      </section>

      {/* ===================== ALL STYLES ===================== */}
      <style jsx>{`
        /* ========== HERO ========== */
        .hero-section {
          min-height: 75vh;
          padding-top: 100px;
          padding-bottom: 60px;
          padding-left: 5%;
          padding-right: 5%;
        }
        .hero-container {
          margin-top: 0;
          margin-bottom: 0;
          margin-left: auto;
          margin-right: auto;
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
        }
        .hero-badge {
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 25px;
          padding-right: 25px;
          margin-top: 0;
          margin-bottom: 35px;
          margin-left: 0;
          margin-right: 0;
        }
        .hero-title {
          font-size: 72px;
          margin-top: 0;
          margin-bottom: 25px;
          margin-left: 0;
          margin-right: 0;
        }
        .hero-subtitle {
          font-size: 20px;
          margin-top: 0;
          margin-bottom: 50px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-buttons {
          gap: 20px;
        }
        .btn-primary {
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 45px;
          padding-right: 45px;
          font-size: 15px;
        }
        .btn-secondary {
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 45px;
          padding-right: 45px;
          font-size: 15px;
        }
        .stats-row {
          gap: 50px;
          margin-top: 60px;
          margin-bottom: 0;
          margin-left: 0;
          margin-right: 0;
        }
        .stat-item {
          text-align: center;
        }
        .stat-number {
          font-size: 40px;
        }
        .stat-label {
          font-size: 13px;
          margin-top: 5px;
          margin-bottom: 0;
          margin-left: 0;
          margin-right: 0;
        }

        /* ========== PACKAGES ========== */
        .packages-section {
          padding-top: 100px;
          padding-bottom: 100px;
          padding-left: 5%;
          padding-right: 5%;
        }
        .packages-container {
          margin-top: 0;
          margin-bottom: 0;
          margin-left: auto;
          margin-right: auto;
        }
        .section-header {
          margin-bottom: 70px;
        }
        .section-label {
          margin-top: 0;
          margin-bottom: 20px;
          margin-left: 0;
          margin-right: 0;
        }
        .section-title {
          font-size: 48px;
          margin-top: 0;
          margin-bottom: 0;
          margin-left: 0;
          margin-right: 0;
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        .card-inner {
          padding-top: 40px;
          padding-bottom: 40px;
          padding-left: 40px;
          padding-right: 40px;
          display: flex;
          gap: 30px;
          align-items: flex-start;
        }
        .card-left {
          flex: 0 0 auto;
        }
        .card-icon {
          font-size: 60px;
          margin-top: 0;
          margin-bottom: 16px;
          margin-left: 0;
          margin-right: 0;
        }
        .price-box {
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 20px;
          padding-right: 20px;
          min-width: 160px;
          margin-top: 0;
          margin-bottom: 0;
          margin-left: 0;
          margin-right: 0;
        }
        .price-text {
          font-size: 20px;
        }
        .card-title {
          font-size: 22px;
          margin-bottom: 6px;
        }
        .card-subtitle {
          margin-bottom: 20px;
        }
        .features-wrap {
          margin-top: 0;
          margin-bottom: 20px;
          margin-left: 0;
          margin-right: 0;
        }
        .features-label {
          margin-bottom: 12px;
        }
        .feature-item {
          margin-bottom: 10px;
          font-size: 14px;
        }
        .card-btn {
          padding-top: 14px;
          padding-bottom: 14px;
          padding-left: 14px;
          padding-right: 14px;
          font-size: 14px;
        }

        /* ========== WHY CHOOSE ========== */
        .why-section {
          padding-top: 100px;
          padding-bottom: 100px;
          padding-left: 5%;
          padding-right: 5%;
        }
        .why-container {
          margin-top: 0;
          margin-bottom: 0;
          margin-left: auto;
          margin-right: auto;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .why-card {
          padding-top: 40px;
          padding-bottom: 40px;
          padding-left: 30px;
          padding-right: 30px;
        }
        .why-icon {
          font-size: 50px;
          margin-top: 0;
          margin-bottom: 20px;
          margin-left: 0;
          margin-right: 0;
        }
        .why-title {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .why-desc {
          font-size: 14px;
        }

        /* ========== CTA ========== */
        .cta-section {
          padding-top: 100px;
          padding-bottom: 100px;
          padding-left: 5%;
          padding-right: 5%;
        }
        .cta-container {
          margin-top: 0;
          margin-bottom: 0;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-title {
          font-size: 48px;
          margin-top: 0;
          margin-bottom: 25px;
          margin-left: 0;
          margin-right: 0;
        }
        .cta-desc {
          font-size: 18px;
          margin-top: 0;
          margin-bottom: 40px;
          margin-left: 0;
          margin-right: 0;
        }
        .cta-buttons {
          gap: 20px;
        }
        .btn-whatsapp {
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 40px;
          padding-right: 40px;
          font-size: 16px;
        }
        .cta-info {
          font-size: 14px;
          margin-top: 40px;
          margin-bottom: 0;
          margin-left: 0;
          margin-right: 0;
        }

        /* ===================================
           TABLET — max-width: 900px
           =================================== */
        @media (max-width: 900px) {
          .packages-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .hero-title {
            font-size: 56px;
          }
          .section-title {
            font-size: 38px;
          }
          .cta-title {
            font-size: 38px;
          }
          .stats-row {
            gap: 35px;
          }
          .stat-number {
            font-size: 34px;
          }
        }

        /* ===================================
           MOBILE — max-width: 640px
           =================================== */
        @media (max-width: 640px) {
          .hero-section {
            min-height: auto;
            padding-top: 80px;
            padding-bottom: 40px;
            padding-left: 4%;
            padding-right: 4%;
          }
          .hero-badge {
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 16px;
            padding-right: 16px;
            margin-bottom: 24px;
          }
          .hero-badge span {
            font-size: 10px !important;
            letter-spacing: 1px !important;
          }
          .hero-title {
            font-size: 36px;
            margin-bottom: 16px;
            letter-spacing: -1px;
          }
          .hero-subtitle {
            font-size: 15px;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          .hero-buttons {
            gap: 12px;
            flex-direction: column;
            align-items: center;
          }
          .btn-primary {
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 32px;
            padding-right: 32px;
            font-size: 14px;
            width: 100%;
            max-width: 300px;
          }
          .btn-secondary {
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 32px;
            padding-right: 32px;
            font-size: 14px;
            width: 100%;
            max-width: 300px;
          }
          .stats-row {
            gap: 24px;
            margin-top: 40px;
          }
          .stat-number {
            font-size: 28px;
          }
          .stat-label {
            font-size: 11px;
          }

          /* --- Packages --- */
          .packages-section {
            padding-top: 60px;
            padding-bottom: 60px;
            padding-left: 4%;
            padding-right: 4%;
          }
          .section-header {
            margin-bottom: 40px;
          }
          .section-label {
            font-size: 12px !important;
            margin-bottom: 12px;
          }
          .section-title {
            font-size: 28px;
          }
          .packages-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .card-inner {
            padding-top: 24px;
            padding-bottom: 24px;
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: column;
            gap: 20px;
            align-items: stretch;
          }
          .card-left {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
          }
          .card-icon {
            font-size: 44px;
            margin-bottom: 0;
          }
          .price-box {
            padding-top: 14px;
            padding-bottom: 14px;
            padding-left: 16px;
            padding-right: 16px;
            min-width: 0;
            flex: 1;
          }
          .price-text {
            font-size: 18px;
          }
          .card-title {
            font-size: 20px;
            margin-bottom: 4px;
          }
          .card-subtitle {
            margin-bottom: 16px;
            font-size: 12px !important;
          }
          .features-wrap {
            margin-bottom: 16px;
          }
          .features-label {
            margin-bottom: 10px;
            font-size: 10px !important;
          }
          .feature-item {
            margin-bottom: 8px;
            font-size: 13px;
            gap: 8px !important;
          }
          .card-btn {
            padding-top: 13px;
            padding-bottom: 13px;
            padding-left: 13px;
            padding-right: 13px;
            font-size: 13px;
          }

          /* --- Why Choose --- */
          .why-section {
            padding-top: 60px;
            padding-bottom: 60px;
            padding-left: 4%;
            padding-right: 4%;
          }
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .why-card {
            padding-top: 24px;
            padding-bottom: 24px;
            padding-left: 16px;
            padding-right: 16px;
            border-radius: 18px;
          }
          .why-icon {
            font-size: 36px;
            margin-bottom: 12px;
          }
          .why-title {
            font-size: 16px;
            margin-bottom: 6px;
          }
          .why-desc {
            font-size: 12px;
          }

          /* --- CTA --- */
          .cta-section {
            padding-top: 60px;
            padding-bottom: 60px;
            padding-left: 4%;
            padding-right: 4%;
          }
          .cta-title {
            font-size: 28px;
            margin-bottom: 16px;
          }
          .cta-desc {
            font-size: 15px;
            margin-bottom: 30px;
          }
          .cta-desc br {
            display: none;
          }
          .cta-buttons {
            gap: 12px;
            flex-direction: column;
            align-items: center;
          }
          .cta-buttons .btn-primary {
            max-width: 280px;
          }
          .btn-whatsapp {
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 32px;
            padding-right: 32px;
            font-size: 14px;
            width: 100%;
            max-width: 280px;
          }
          .cta-info {
            font-size: 12px;
            margin-top: 30px;
          }
        }

        /* ===================================
           SMALL MOBILE — max-width: 400px
           =================================== */
        @media (max-width: 400px) {
          .hero-title {
            font-size: 30px;
          }
          .hero-subtitle {
            font-size: 14px;
          }
          .section-title {
            font-size: 24px;
          }
          .cta-title {
            font-size: 24px;
          }
          .stat-number {
            font-size: 24px;
          }
          .stats-row {
            gap: 20px;
          }
          .card-left {
            flex-direction: column;
            align-items: stretch;
          }
          .card-icon {
            text-align: center;
            margin-bottom: 12px;
          }
          .why-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        /* ========== ANIMATIONS ========== */
        @keyframes floatOrb {
          0%,  100% { transform: translate(0, 0) scale(1); }
          33%        { transform: translate(60px, -60px) scale(1.1); }
          66%        { transform: translate(-60px, 60px) scale(0.9); }
        }
        @keyframes pulseDot {
          0%,  100% { transform: scale(1);   box-shadow: 0 0 0 0    rgba(255,215,0,0.7); }
          50%        { transform: scale(1.3); box-shadow: 0 0 0 15px rgba(255,215,0,0);   }
        }
        @keyframes badgeGlow {
          0%,  100% { box-shadow: 0 0 20px rgba(255,215,0,0.2); }
          50%        { box-shadow: 0 0 40px rgba(255,215,0,0.5), 0 0 60px rgba(255,215,0,0.3); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0%   center; }
          50%  { background-position: 100% center; }
          100% { background-position: 0%   center; }
        }
        @keyframes btnShine {
          0%        { left: -100%; }
          20%, 100% { left:  100%; }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes iconFloat {
          0%,  100% { transform: translateY(0);     }
          50%        { transform: translateY(-10px); }
        }
        @keyframes textGlow {
          0%,  100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50%        { text-shadow: 0 0 25px rgba(255,255,255,0.5); }
        }
        @keyframes pulseGlow {
          0%,  100% { box-shadow: 0 0 15px rgba(255,215,0,0.3); }
          50%        { box-shadow: 0 0 30px rgba(255,215,0,0.6); }
        }
        @keyframes ringsPulse {
          0%   { transform: scale(0.8); opacity: 0;  }
          50%  {                        opacity: 0.4; }
          100% { transform: scale(1.4); opacity: 0;  }
        }
      `}</style>
    </div>
  )
}
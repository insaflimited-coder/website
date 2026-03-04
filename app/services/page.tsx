'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      icon: '🏛️',
      title: 'Architectural Design',
      tagline: 'Vision to Reality',
      description: 'From conceptual sketches to detailed construction drawings, we craft spaces that inspire. Our designs blend aesthetic excellence with functional brilliance.',
      features: ['Conceptual Design', '3D Visualization', 'Working Drawings', 'Material Selection', 'Design Consultation'],
      price: 'Custom Quote',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea'
    },
    {
      id: 2,
      icon: '🏗️',
      title: 'Structural Engineering',
      tagline: 'Built to Last',
      description: 'In-house structural engineers ensuring your building stands the test of time. BNBC compliant calculations and earthquake-resistant design.',
      features: ['Load Calculations', 'Foundation Design', 'Structural Analysis', 'BNBC Compliance', 'Site Supervision'],
      price: 'Custom Quote',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb'
    },
    {
      id: 3,
      icon: '📋',
      title: 'RAJUK Approval',
      tagline: '100% Success Rate',
      description: '530+ successful approvals. We handle the entire process from documentation to final approval. Average approval time: 4-6 months.',
      features: ['Document Preparation', 'DAP Analysis', 'Application Submission', 'Follow-up', 'Approval Collection'],
      price: 'Custom Quote',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe'
    },
    {
      id: 4,
      icon: '🎨',
      title: 'Interior Design',
      tagline: 'Luxury Within',
      description: 'Transform your interiors into masterpieces. Our designers create spaces that reflect your personality while maximizing functionality.',
      features: ['Space Planning', '3D Renders', 'Furniture Design', 'Material Selection', 'Execution Support'],
      price: 'Custom Quote',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b'
    },
    {
      id: 5,
      icon: '🥽',
      title: '3D Visualization & VR',
      tagline: 'See Before You Build',
      description: 'Photorealistic 3D renders and immersive VR walkthroughs. Experience your space before construction begins.',
      features: ['Exterior Renders', 'Interior Renders', 'VR Walkthrough', '360° Views', 'Animation Videos'],
      price: 'Custom Quote',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: '#fa709a'
    },
    {
      id: 6,
      icon: '👷',
      title: 'Construction Management',
      tagline: 'Quality Assured',
      description: 'End-to-end project supervision ensuring your vision is executed perfectly. Regular site visits and progress reporting.',
      features: ['Site Supervision', 'Quality Control', 'Contractor Coordination', 'Progress Tracking', 'Problem Resolution'],
      price: 'Custom Quote',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      color: '#ffecd2'
    }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif', 
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* ✅ FLOATING GLOW ORBS */}
      <div className="orb orb-1" style={{
        position: 'fixed',
        top: '15%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.12), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'floatOrb 12s ease-in-out infinite',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      
      <div className="orb orb-2" style={{
        position: 'fixed',
        bottom: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(102,126,234,0.1), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'floatOrb 15s ease-in-out infinite reverse',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '80px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ width: '100%', padding: '0 5%' }}>
          <div className="hero-content" style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* ✅ BADGE WITH PULSE DOT */}
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '30px',
              animation: 'fadeInDown 0.8s ease-out'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#FFD700', 
                borderRadius: '50%',
                animation: 'pulseDot 2s ease-in-out infinite'
              }}></div>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                PREMIUM SERVICES
              </span>
            </div>

            {/* ✅ GRADIENT TEXT SHIMMER */}
            <h1 className="hero-heading" style={{
              fontSize: '80px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1',
              marginBottom: '30px',
              letterSpacing: '-3px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              SERVICES THAT
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B6B, #FFD700)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>TRANSFORM</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '50px',
              maxWidth: '700px',
              margin: '0 auto 50px',
              lineHeight: '1.6',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              From architectural brilliance to structural precision, we deliver 
              comprehensive solutions that exceed expectations.
            </p>

            {/* ✅ STATS WITH COUNTER ANIMATION */}
            <div className="stats-row" style={{
              display: 'flex',
              gap: '60px',
              justifyContent: 'center',
              padding: '40px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              maxWidth: '900px',
              margin: '0 auto',
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
            }}>
              {[
                { number: '6', label: 'CORE SERVICES' },
                { number: '100%', label: 'SUCCESS RATE' },
                { number: '24/7', label: 'SUPPORT' }
              ].map((stat, idx) => (
                <div key={idx} className="stat-item" style={{
                  animation: `statPop 0.6s ease-out ${0.8 + idx * 0.15}s backwards`
                }}>
                  <div style={{ 
                    fontSize: '36px', 
                    fontWeight: '900', 
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SERVICES GRID - ENHANCED ANIMATIONS */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '20px',
              animation: 'fadeIn 0.8s ease-out'
            }}>
              OUR EXPERTISE
            </div>
            <h2 className="section-heading" style={{ 
              fontSize: '56px', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              COMPLETE <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>SOLUTIONS</span>
            </h2>
          </div>

          <div className="services-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {services.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => setActiveService(idx)}
                className="service-card"
                style={{
                  background: activeService === idx 
                    ? 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.1))' 
                    : 'rgba(255,255,255,0.03)',
                  borderRadius: '25px',
                  padding: '40px',
                  border: activeService === idx 
                    ? '2px solid rgba(255,215,0,0.3)' 
                    : '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `cardReveal 0.8s ease-out ${idx * 0.15}s backwards`,
                  transform: activeService === idx ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: activeService === idx 
                    ? `0 20px 60px ${service.color}30` 
                    : '0 10px 30px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                  if (activeService !== idx) {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeService !== idx) {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                {/* ✅ GLOW EFFECT */}
                {activeService === idx && (
                  <>
                    <div style={{
                      position: 'absolute',
                      top: '-50px',
                      right: '-50px',
                      width: '150px',
                      height: '150px',
                      background: `radial-gradient(circle, ${service.color}30, transparent)`,
                      borderRadius: '50%',
                      filter: 'blur(40px)',
                      animation: 'glowPulse 2s ease-in-out infinite'
                    }}></div>

                    {/* ✅ SPARKLES */}
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="sparkle" style={{
                        position: 'absolute',
                        width: '3px',
                        height: '3px',
                        backgroundColor: service.color,
                        borderRadius: '50%',
                        top: `${20 + Math.random() * 60}%`,
                        left: `${10 + Math.random() * 80}%`,
                        animation: `sparkle 1.5s ease-in-out ${i * 0.3}s infinite`,
                        boxShadow: `0 0 8px ${service.color}`
                      }}></div>
                    ))}
                  </>
                )}

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* ✅ ICON WITH BOUNCE */}
                  <div style={{ 
                    fontSize: '50px', 
                    marginBottom: '20px',
                    animation: activeService === idx ? 'iconBounce 0.6s ease-out' : 'none',
                    display: 'inline-block'
                  }}>
                    {service.icon}
                  </div>
                  
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    backgroundColor: `${service.color}20`,
                    borderRadius: '20px',
                    marginBottom: '15px',
                    border: `1px solid ${service.color}40`
                  }}>
                    <span style={{ 
                      color: service.color, 
                      fontSize: '11px', 
                      fontWeight: '600', 
                      letterSpacing: '1px' 
                    }}>
                      {service.tagline}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    color: 'white',
                    marginBottom: '15px'
                  }}>{service.title}</h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>{service.description}</p>

                  {/* ✅ PRICE BOX WITH GLOW */}
                  <div style={{
                    padding: '15px 20px',
                    backgroundColor: activeService === idx 
                      ? `${service.color}15` 
                      : 'rgba(255,255,255,0.05)',
                    borderRadius: '15px',
                    marginBottom: '20px',
                    border: activeService === idx ? `1px solid ${service.color}30` : 'none',
                    transition: 'all 0.3s'
                  }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
                      STARTING FROM
                    </div>
                    <div style={{ 
                      fontSize: '20px', 
                      fontWeight: '800', 
                      color: activeService === idx ? service.color : '#FFD700',
                      textShadow: activeService === idx ? `0 0 20px ${service.color}` : 'none'
                    }}>
                      {service.price}
                    </div>
                  </div>

                  {/* ✅ VIEW DETAILS BUTTON */}
                  <div style={{
                    fontSize: '14px',
                    color: activeService === idx ? service.color : 'rgba(255,255,255,0.7)',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.3s'
                  }}>
                    VIEW DETAILS
                    <span style={{ 
                      fontSize: '18px',
                      transform: activeService === idx ? 'translateX(5px)' : 'translateX(0)',
                      transition: 'transform 0.3s'
                    }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ SERVICE DETAIL SECTION - ANIMATED */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0A0A0A', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="service-detail-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '80px', 
            alignItems: 'center' 
          }}>
            <div className="service-detail-content" style={{
              animation: 'fadeInLeft 0.8s ease-out'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                backgroundColor: 'rgba(255,215,0,0.1)',
                borderRadius: '30px',
                marginBottom: '25px'
              }}>
                <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                  FEATURED SERVICE
                </span>
              </div>

              <h2 className="section-heading" style={{
                fontSize: '48px',
                fontWeight: '900',
                color: 'white',
                marginBottom: '25px',
                lineHeight: '1.1'
              }}>{services[activeService].title}</h2>

              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.8',
                marginBottom: '35px'
              }}>{services[activeService].description}</p>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: 'white',
                marginBottom: '20px'
              }}>What's Included:</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                {services[activeService].features.map((feature, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    animation: `slideInLeft 0.5s ease-out ${idx * 0.1}s backwards`
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: services[activeService].gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      color: 'white',
                      fontWeight: 'bold',
                      flexShrink: 0,
                      boxShadow: `0 0 15px ${services[activeService].color}50`
                    }}>✓</div>
                    <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button className="cta-btn" style={{
                  padding: '18px 40px',
                  background: services[activeService].gradient,
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: '15px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  boxShadow: `0 20px 40px ${services[activeService].color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = `0 25px 50px ${services[activeService].color}60`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = `0 20px 40px ${services[activeService].color}40`
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'btnShine 3s ease-in-out infinite'
                  }}></div>
                  <span style={{ position: 'relative', zIndex: 1 }}>GET QUOTE</span>
                  <span style={{ fontSize: '20px', position: 'relative', zIndex: 1 }}>→</span>
                </button>
              </Link>
            </div>

            {/* ✅ VISUAL SIDE WITH ANIMATIONS */}
            <div className="service-detail-visual" style={{
              background: services[activeService].gradient,
              borderRadius: '30px',
              padding: '60px',
              border: `2px solid ${services[activeService].color}40`,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              animation: 'fadeInRight 0.8s ease-out',
              boxShadow: `0 30px 80px ${services[activeService].color}30`
            }}>
              {/* Background Glow */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                animation: 'glowPulse 3s ease-in-out infinite'
              }}></div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ 
                  fontSize: '120px', 
                  marginBottom: '30px',
                  animation: 'iconFloat 3s ease-in-out infinite',
                  display: 'inline-block'
                }}>
                  {services[activeService].icon}
                </div>
                <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '20px', fontWeight: '600' }}>
                  STARTING FROM
                </div>
                <div style={{ 
                  fontSize: '48px', 
                  fontWeight: '900', 
                  color: 'white', 
                  marginBottom: '20px',
                  textShadow: '0 0 30px rgba(255,255,255,0.5)',
                  animation: 'priceGlow 2s ease-in-out infinite'
                }}>
                  {services[activeService].price}
                </div>
                <div style={{
                  padding: '12px 25px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '30px',
                  display: 'inline-block',
                  backdropFilter: 'blur(10px)'
                }}>
                  <span style={{ color: 'white', fontSize: '13px', fontWeight: '600', letterSpacing: '1px' }}>
                    CUSTOM PACKAGES AVAILABLE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ PROCESS SECTION */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '20px',
              animation: 'fadeIn 0.8s ease-out'
            }}>
              HOW WE WORK
            </div>
            <h2 className="section-heading" style={{ 
              fontSize: '56px', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              OUR <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>PROCESS</span>
            </h2>
          </div>

          <div className="process-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '30px' 
          }}>
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision', time: 'Day 1', color: '#667eea' },
              { step: '02', title: 'Planning', desc: 'Detailed strategy & timeline', time: 'Week 1', color: '#f093fb' },
              { step: '03', title: 'Execution', desc: 'Bringing design to life', time: 'Month 1-3', color: '#4facfe' },
              { step: '04', title: 'Delivery', desc: 'Perfect handover', time: 'Final', color: '#43e97b' }
            ].map((process, idx) => (
              <div key={idx} className="process-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                padding: '35px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                position: 'relative',
                animation: `cardReveal 0.8s ease-out ${idx * 0.2}s backwards`,
                transition: 'all 0.4s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${process.color}10`
                e.currentTarget.style.borderColor = `${process.color}40`
                e.currentTarget.style.transform = 'translateY(-10px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${process.color}, ${process.color}cc)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '24px',
                  fontWeight: '900',
                  color: 'white',
                  boxShadow: `0 10px 30px ${process.color}50`,
                  animation: 'iconBounce 0.6s ease-out'
                }}>{process.step}</div>

                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>
                  {process.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '15px' }}>
                  {process.desc}
                </p>
                <div style={{
                  padding: '6px 15px',
                  backgroundColor: `${process.color}20`,
                  borderRadius: '15px',
                  display: 'inline-block',
                  border: `1px solid ${process.color}30`
                }}>
                  <span style={{ fontSize: '11px', color: process.color, fontWeight: '600' }}>
                    {process.time}
                  </span>
                </div>

                {idx < 3 && (
                  <div className="process-arrow" style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-15px',
                    transform: 'translateY(-50%)',
                    fontSize: '24px',
                    color: '#FFD700',
                    zIndex: 10,
                    animation: 'arrowPulse 1.5s ease-in-out infinite'
                  }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA SECTION WITH RINGS */}
      <section style={{
        padding: '120px 5%',
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}>
        {/* Pulsing Rings */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '2px solid rgba(255,215,0,0.1)',
          animation: 'ringsPulse 3s ease-out infinite',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '2px solid rgba(255,215,0,0.1)',
          animation: 'ringsPulse 3s ease-out 0.5s infinite',
          zIndex: 0
        }}></div>

        <div className="cta-content" style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'inline-block',
            padding: '10px 25px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '30px',
            marginBottom: '30px',
            animation: 'fadeInDown 0.8s ease-out'
          }}>
            <span style={{ color: '#FFD700', fontSize: '13px', letterSpacing: '2px', fontWeight: '600' }}>
              LIMITED SLOTS AVAILABLE
            </span>
          </div>

          <h2 className="cta-heading" style={{
            fontSize: '64px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '25px',
            lineHeight: '1.1',
            animation: 'fadeInUp 1s ease-out 0.2s backwards'
          }}>
            Ready to Start Your
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 3s ease-in-out infinite'
            }}>Dream Project?</span>
          </h2>

          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px',
            animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
          }}>
            Free consultation for the first 10 inquiries this month.
          </p>

          <div className="cta-buttons-final" style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
          }}>
            <Link href="/contact">
              <button style={{
                padding: '20px 50px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '60px',
                color: '#0A0A0A',
                fontWeight: '800',
                fontSize: '16px',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 30px 60px rgba(255,215,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(255,215,0,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.4)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'btnShine 3s ease-in-out infinite'
                }}></div>
                <span style={{ position: 'relative', zIndex: 1 }}>GET FREE QUOTE</span>
                <span style={{ fontSize: '24px', position: 'relative', zIndex: 1 }}>→</span>
              </button>
            </Link>
            
            <a href="https://wa.me/8801958140774" style={{
              padding: '20px 40px',
              background: '#25D366',
              border: 'none',
              borderRadius: '60px',
              color: 'white',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 20px 50px rgba(37,211,102,0.3)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 30px 70px rgba(37,211,102,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(37,211,102,0.3)'
            }}>
              <span style={{ fontSize: '20px' }}>💬</span>
              WHATSAPP NOW
            </a>
          </div>
        </div>
      </section>

      {/* ✅ ALL ANIMATIONS */}
      <style>{`
        body { overflow-x: hidden !important; }

        /* FLOATING ORB */
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }

        /* PULSE DOT */
        @keyframes pulseDot {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 0 0 0 rgba(255,215,0,0.7);
          }
          50% { 
            transform: scale(1.3); 
            box-shadow: 0 0 0 15px rgba(255,215,0,0);
          }
        }

        /* GRADIENT SHIFT */
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        /* FADE IN UP */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* FADE IN DOWN */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* FADE IN */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* FADE IN LEFT */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* FADE IN RIGHT */
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* SLIDE IN LEFT */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* STAT POP */
        @keyframes statPop {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* CARD REVEAL */
        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        /* ICON BOUNCE */
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* ICON FLOAT */
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* GLOW PULSE */
        @keyframes glowPulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.6; 
            transform: scale(1.1); 
          }
        }

        /* SPARKLE */
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg);
          }
        }

        /* PRICE GLOW */
        @keyframes priceGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 40px rgba(255,255,255,0.6); }
        }

        /* ARROW PULSE */
        @keyframes arrowPulse {
          0%, 100% { 
            transform: translateY(-50%) translateX(0); 
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-50%) translateX(5px); 
            opacity: 1;
          }
        }

        /* BUTTON SHINE */
        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }

        /* RINGS PULSE */
        @keyframes ringsPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
          50% { opacity: 0.3; }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .process-arrow {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .hero-heading {
            font-size: 42px !important;
            letter-spacing: -1px !important;
          }
          
          .hero-subtitle {
            font-size: 16px !important;
            padding: 0 10px !important;
          }
          
          .stats-row {
            gap: 30px !important;
            padding: 30px 20px !important;
          }
          
          .section-heading {
            font-size: 32px !important;
            text-align: center !important;
          }
          
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .service-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .service-detail-content {
            text-align: center !important;
          }
          
          .service-detail-visual {
            padding: 40px 30px !important;
          }
          
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .process-arrow {
            display: none !important;
          }
          
          .cta-heading {
            font-size: 36px !important;
            line-height: 1.2 !important;
          }
          
          .cta-buttons-final {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .cta-buttons-final button,
          .cta-buttons-final a {
            width: 100% !important;
            max-width: 300px !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 32px !important;
          }
          
          .section-heading {
            font-size: 28px !important;
          }
          
          .cta-heading {
            font-size: 28px !important;
          }
        }
      `}</style>
    </div>
  )
}
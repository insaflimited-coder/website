'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ServicePricesPage() {
  const [activePackage, setActivePackage] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const packages = [
    {
      id: 1,
      title: 'Floor Plan Only',
      subtitle: 'Basic Layout Design',
      icon: '📐',
      description: 'Professional 2D floor plan design for your building',
      price: 'Starting from ৳15,000',
      priceNote: 'One-time payment',
      features: [
        '2D Floor Plan with accurate measurements',
        'Room layout and furniture placement',
        'Dimensions and annotations',
        'Print-ready PDF format',
        'Up to 3 revisions included',
        '3-5 days delivery'
      ],
      popular: false,
      gradient: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(118,75,162,0.08))',
      color: '#667eea'
    },
    {
      id: 2,
      title: 'Duplex/Triplex Design',
      subtitle: 'Small Residential Buildings',
      icon: '🏠',
      description: 'Complete architectural solution for 2-3 storied homes',
      price: '৳80-120 per sqft',
      priceNote: 'Based on built-up area',
      features: [
        'Complete architectural design package',
        'Structural engineering & calculations',
        'Electrical & lighting layout',
        'Plumbing & sanitary design',
        'High-quality 3D exterior renders',
        'RAJUK submission drawings',
        'Unlimited design revisions',
        'Construction-ready documents'
      ],
      popular: true,
      gradient: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.08))',
      color: '#FFD700'
    },
    {
      id: 3,
      title: '1-2 Storied Building',
      subtitle: 'Medium Residential Projects',
      icon: '🏘️',
      description: 'Professional design for small to medium buildings',
      price: '৳70-100 per sqft',
      priceNote: 'Competitive rates',
      features: [
        'Full architectural planning',
        'Structural design & load calculations',
        'MEP (Mechanical, Electrical, Plumbing)',
        'Realistic 3D visualization',
        'RAJUK/Municipality approval drawings',
        'Construction phase guidance',
        'Detailed material specifications',
        'Cost estimation support'
      ],
      popular: false,
      gradient: 'linear-gradient(135deg, rgba(79,172,254,0.15), rgba(0,242,254,0.08))',
      color: '#4facfe'
    },
    {
      id: 4,
      title: '3-4 Storied Building',
      subtitle: 'Mid-rise Apartments',
      icon: '🏢',
      description: 'Advanced design for multi-family buildings',
      price: '৳65-90 per sqft',
      priceNote: 'Volume discount available',
      features: [
        'Complete design package',
        'Advanced structural engineering',
        'Fire safety & evacuation plan',
        'Elevator & staircase design',
        '3D interior & exterior renders',
        'RAJUK approval documentation',
        'Optional construction supervision',
        'Value engineering services'
      ],
      popular: false,
      gradient: 'linear-gradient(135deg, rgba(240,147,251,0.15), rgba(245,87,108,0.08))',
      color: '#f093fb'
    },
    {
      id: 5,
      title: '5-6 Storied Building',
      subtitle: 'Multi-storied Complexes',
      icon: '🏗️',
      description: 'Premium design for commercial & residential towers',
      price: '৳60-85 per sqft',
      priceNote: 'Project-based pricing',
      features: [
        'Premium architectural design',
        'Foundation & pile design',
        'Complete MEP engineering services',
        'Fire safety & NOC documentation',
        'Parking layout & management plan',
        'Generator & substation design',
        'Full RAJUK compliance package',
        'BIM (Building Information Modeling)'
      ],
      popular: false,
      gradient: 'linear-gradient(135deg, rgba(67,233,123,0.15), rgba(56,249,215,0.08))',
      color: '#43e97b'
    },
    {
      id: 6,
      title: '7-8 Storied Building',
      subtitle: 'High-rise Development',
      icon: '🌆',
      description: 'Enterprise-level design for tall buildings',
      price: '৳55-80 per sqft',
      priceNote: 'Custom solutions',
      features: [
        'Enterprise design solution',
        'Earthquake-resistant design (BNBC)',
        'High-rise MEP systems',
        'Advanced fire safety systems',
        'Lift, generator & substation',
        'Complete approval package',
        'Project management support',
        'Sustainability features (LEED ready)'
      ],
      popular: false,
      gradient: 'linear-gradient(135deg, rgba(250,112,154,0.15), rgba(254,225,64,0.08))',
      color: '#fa709a'
    },
    {
      id: 7,
      title: '9-10 Storied Building',
      subtitle: 'Premium Tower Projects',
      icon: '🏙️',
      description: 'Turnkey solution for landmark buildings',
      price: 'Custom Quote Required',
      priceNote: 'Contact for consultation',
      features: [
        'Full turnkey design solution',
        'Advanced structural engineering',
        'Complete building systems integration',
        'Fire & life safety compliance',
        'MEP & HVAC design',
        'All regulatory approvals (RAJUK/Fire)',
        'End-to-end project support',
        'Dedicated on-site engineering team',
        'Post-construction support'
      ],
      popular: false,
      gradient: 'linear-gradient(135deg, rgba(255,107,107,0.15), rgba(255,142,83,0.08))',
      color: '#ff6b6b'
    }
  ]

  const additionalServices = [
    {
      icon: '📋',
      title: 'RAJUK Plan Approval',
      price: 'Custom Quote',
      description: 'Complete documentation & submission',
      color: '#FFD700'
    },
    {
      icon: '🏛️',
      title: 'Municipality Approval',
      price: 'Custom Quote',
      description: 'Local authority compliance',
      color: '#667eea'
    },
    {
      icon: '📏',
      title: 'Digital Land Survey',
      price: 'Custom Quote',
      description: 'Accurate site measurement',
      color: '#4facfe'
    },
    {
      icon: '🧪',
      title: 'Soil Testing',
      price: 'Custom Quote',
      description: 'Foundation analysis',
      color: '#43e97b'
    },
    {
      icon: '🏗️',
      title: 'Piling Work',
      price: 'Per Pile Basis',
      description: 'Deep foundation solution',
      color: '#f093fb'
    },
    {
      icon: '👷',
      title: 'Site Supervision',
      price: 'Monthly/Project Basis',
      description: 'Quality assurance',
      color: '#fa709a'
    }
  ]

  const faqs = [
    {
      question: 'Do you work outside Dhaka?',
      answer: 'Yes, we provide services across all districts of Bangladesh. Our experienced team is ready to serve your project anywhere in the country with the same quality standards.'
    },
    {
      question: 'Are the package prices fixed?',
      answer: 'Package prices may vary based on project size, complexity, location, and specific requirements. Contact us for an accurate quote tailored to your needs.'
    },
    {
      question: 'What is the payment structure?',
      answer: 'We typically work on a 3-installment basis: 1st payment at project initiation, 2nd upon drawing completion, and 3rd at RAJUK submission. Flexible terms available for large projects.'
    },
    {
      question: 'How long does the design process take?',
      answer: 'Timeline varies by project size. A typical duplex takes 2-3 weeks, while larger buildings (5-10 stories) may take 4-8 weeks. Rush services available on request.'
    }
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', fontFamily: 'system-ui, sans-serif' }}>
      
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
      }}></div>
      
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
      }}></div>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ width: '100%', padding: '0 5%', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', animation: 'fadeInUp 1s ease-out' }}>
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 25px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '35px',
              animation: 'badgeGlow 3s ease-in-out infinite'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#FFD700', 
                borderRadius: '50%', 
                animation: 'pulseDot 2s ease-in-out infinite' 
              }}></div>
              <span style={{ color: '#FFD700', fontSize: '13px', letterSpacing: '2px', fontWeight: '600' }}>
                TRANSPARENT PRICING
              </span>
            </div>

            <h1 style={{ 
              fontSize: 'clamp(48px, 8vw, 80px)', 
              fontWeight: '900', 
              color: 'white', 
              lineHeight: '1.1',
              marginBottom: '25px',
              letterSpacing: '-2px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              DESIGN YOUR<br/>
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B6B, #FFD700)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>DREAM BUILDING</span>
            </h1>

            <p style={{ 
              fontSize: 'clamp(16px, 3vw, 20px)', 
              color: 'rgba(255,255,255,0.6)', 
              lineHeight: '1.8',
              marginBottom: '50px',
              maxWidth: '700px',
              margin: '0 auto 50px',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              Professional architectural services with complete RAJUK approval support.<br/>
              Choose the perfect package for your construction needs.
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
            }}>
              <a href="tel:+8801958140774" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '20px 45px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '60px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  fontSize: '15px',
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
                  <span style={{ position: 'relative', zIndex: 1 }}>📞 CALL: 01958-140774</span>
                </button>
              </a>

              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '20px 45px',
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderRadius: '60px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '15px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s',
                  animation: 'borderPulse 3s ease-in-out infinite'
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
                }}>
                  FREE CONSULTATION
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div style={{ 
              display: 'flex', 
              gap: '50px', 
              marginTop: '60px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.6s ease-out 0.8s backwards'
            }}>
              {[
                { number: '530+', label: 'PROJECTS' },
                { number: '100%', label: 'SUCCESS RATE' },
                { number: '4-6', label: 'MONTHS AVG' }
              ].map((stat, idx) => (
                <div key={idx} style={{ animation: `statPop 0.6s ease-out ${1 + idx * 0.15}s backwards` }}>
                  <div style={{ 
                    fontSize: '40px', 
                    fontWeight: '900', 
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'numberGlow 2s ease-in-out infinite'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', marginTop: '5px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Packages Section */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px', animation: 'fadeInUp 0.8s ease-out' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '20px',
              animation: 'textGlow 3s ease-in-out infinite'
            }}>
              OUR PACKAGES
            </div>
            <h2 style={{ 
              fontSize: 'clamp(36px, 5vw, 52px)', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              BUILDING DESIGN <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>SERVICES</span>
            </h2>
          </div>

          {/* Package Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', 
            gap: '25px' 
          }}>
            {packages.map((pkg, idx) => (
              <div 
                key={pkg.id}
                onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
                style={{
                  background: pkg.gradient,
                  border: pkg.popular ? `2px solid ${pkg.color}` : `1px solid ${pkg.color}40`,
                  borderRadius: '25px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: activePackage === pkg.id 
                    ? `0 30px 80px ${pkg.color}40` 
                    : '0 4px 20px rgba(0,0,0,0.3)',
                  transform: activePackage === pkg.id ? 'translateY(-15px)' : 'translateY(0)',
                  overflow: 'hidden',
                  animation: `cardReveal 0.8s ease-out ${idx * 0.1}s backwards`
                }}
                onMouseEnter={(e) => {
                  if (activePackage !== pkg.id) {
                    e.currentTarget.style.transform = 'translateY(-10px)'
                    e.currentTarget.style.boxShadow = `0 25px 60px ${pkg.color}30`
                  }
                }}
                onMouseLeave={(e) => {
                  if (activePackage !== pkg.id) {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
                  }
                }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '8px 20px',
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
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Content */}
                <div style={{ padding: '40px 35px' }}>
                  <div style={{ 
                    fontSize: '60px', 
                    marginBottom: '20px',
                    animation: 'iconFloat 3s ease-in-out infinite',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}>
                    {pkg.icon}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '26px', 
                    fontWeight: '900', 
                    color: 'white', 
                    marginBottom: '8px'
                  }}>
                    {pkg.title}
                  </h3>
                  
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'rgba(255,255,255,0.6)', 
                    marginBottom: '25px',
                    fontWeight: '500'
                  }}>
                    {pkg.subtitle}
                  </p>

                  <p style={{ 
                    fontSize: '15px', 
                    color: 'rgba(255,255,255,0.7)', 
                    marginBottom: '25px',
                    lineHeight: '1.6'
                  }}>
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div style={{ 
                    marginBottom: '30px',
                    padding: '25px',
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: '16px',
                    border: `1px solid ${pkg.color}30`
                  }}>
                    <div style={{ 
                      fontSize: '32px', 
                      fontWeight: '900', 
                      color: pkg.color,
                      marginBottom: '5px',
                      textShadow: `0 0 30px ${pkg.color}`,
                      animation: 'numberGlow 2s ease-in-out infinite'
                    }}>
                      {pkg.price}
                    </div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: '500' }}>
                      {pkg.priceNote}
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ 
                    maxHeight: activePackage === pkg.id ? '700px' : '0',
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: activePackage === pkg.id ? 1 : 0
                  }}>
                    <div style={{ 
                      paddingTop: '25px', 
                      paddingBottom: '20px',
                      borderTop: `2px solid ${pkg.color}30`
                    }}>
                      <div style={{ 
                        fontSize: '12px', 
                        fontWeight: '800', 
                        color: 'rgba(255,255,255,0.5)', 
                        marginBottom: '20px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase'
                      }}>
                        What's Included
                      </div>
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '14px',
                          marginBottom: '16px',
                          fontSize: '15px',
                          lineHeight: '1.5'
                        }}>
                          <span style={{ 
                            color: pkg.color, 
                            fontSize: '18px',
                            fontWeight: '700',
                            flexShrink: 0
                          }}>✓</span>
                          <span style={{ color: 'rgba(255,255,255,0.8)' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button style={{
                    width: '100%',
                    padding: '18px',
                    background: activePackage === pkg.id 
                      ? `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)` 
                      : 'rgba(255,255,255,0.05)',
                    border: activePackage === pkg.id ? 'none' : `1px solid ${pkg.color}40`,
                    borderRadius: '14px',
                    color: activePackage === pkg.id ? '#0A0A0A' : 'white',
                    fontWeight: '700',
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    <span>{activePackage === pkg.id ? 'Hide Details' : 'View Details'}</span>
                    <span style={{ 
                      transition: 'transform 0.3s ease',
                      transform: activePackage === pkg.id ? 'rotate(180deg)' : 'rotate(0)',
                      fontSize: '18px'
                    }}>
                      ↓
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0A0A0A', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px', animation: 'fadeInUp 0.8s ease-out' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '20px',
              animation: 'textGlow 3s ease-in-out infinite'
            }}>
              ADDITIONAL SERVICES
            </div>
            <h2 style={{ 
              fontSize: 'clamp(36px, 5vw, 48px)', 
              fontWeight: '900', 
              color: 'white',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              COMPLEMENTARY <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>SERVICES</span>
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
            gap: '25px' 
          }}>
            {additionalServices.map((service, idx) => (
              <div key={idx} style={{
                background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                borderRadius: '25px',
                padding: '40px 35px',
                textAlign: 'center',
                border: `1px solid ${service.color}30`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                animation: `cardReveal 0.8s ease-out ${idx * 0.1}s backwards`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)'
                e.currentTarget.style.borderColor = `${service.color}60`
                e.currentTarget.style.boxShadow = `0 30px 60px ${service.color}30`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = `${service.color}30`
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ 
                  fontSize: '56px', 
                  marginBottom: '25px',
                  animation: `iconFloat 3s ease-in-out infinite ${idx * 0.2}s`,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}>
                  {service.icon}
                </div>
                <h4 style={{ 
                  fontSize: '22px', 
                  fontWeight: '800', 
                  color: 'white', 
                  marginBottom: '10px',
                  animation: 'textGlow 3s ease-in-out infinite'
                }}>
                  {service.title}
                </h4>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'rgba(255,255,255,0.5)', 
                  marginBottom: '20px' 
                }}>
                  {service.description}
                </p>
                <p style={{ 
                  fontSize: '24px', 
                  fontWeight: '900', 
                  color: service.color,
                  textShadow: `0 0 20px ${service.color}`,
                  animation: 'numberGlow 2s ease-in-out infinite'
                }}>
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div style={{ 
            marginTop: '70px', 
            textAlign: 'center',
            padding: '50px 40px',
            background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.05))',
            borderRadius: '25px',
            border: '1px solid rgba(255,215,0,0.3)',
            animation: 'fadeInUp 0.8s ease-out 0.8s backwards'
          }}>
            <p style={{ 
              fontSize: '22px', 
              color: 'white', 
              marginBottom: '30px',
              fontWeight: '700'
            }}>
              Need a custom package? Let's discuss your requirements
            </p>
            <a href="tel:+8801958140774" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '18px 45px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                color: '#0A0A0A',
                fontWeight: '800',
                fontSize: '16px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 15px 40px rgba(255,215,0,0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,215,0,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,215,0,0.4)'
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
                <span style={{ position: 'relative', zIndex: 1 }}>📞 CONTACT OUR TEAM</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px', animation: 'fadeInUp 0.8s ease-out' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '20px',
              animation: 'textGlow 3s ease-in-out infinite'
            }}>
              FAQ
            </div>
            <h2 style={{ 
              fontSize: 'clamp(36px, 5vw, 48px)', 
              fontWeight: '900',
              color: 'white',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              FREQUENTLY ASKED <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>QUESTIONS</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{ 
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  border: openFaq === idx ? '2px solid #FFD700' : '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  animation: `cardReveal 0.8s ease-out ${idx * 0.15}s backwards`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
                  e.currentTarget.style.transform = 'translateX(10px)'
                }}
                onMouseLeave={(e) => {
                  if (openFaq !== idx) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div style={{
                  padding: '30px 35px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <h3 style={{ 
                    fontSize: '19px', 
                    fontWeight: '700', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    margin: 0
                  }}>
                    <span style={{ 
                      color: '#FFD700',
                      fontWeight: '900',
                      fontSize: '22px',
                      textShadow: '0 0 20px #FFD700',
                      animation: 'numberGlow 2s ease-in-out infinite'
                    }}>
                      0{idx + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: openFaq === idx 
                      ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
                      : 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    <span style={{
                      color: openFaq === idx ? '#0A0A0A' : 'white',
                      fontSize: '20px',
                      fontWeight: '700',
                      transition: 'transform 0.3s ease',
                      transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0)'
                    }}>
                      +
                    </span>
                  </div>
                </div>
                <div style={{
                  maxHeight: openFaq === idx ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <p style={{ 
                    fontSize: '16px', 
                    color: 'rgba(255,255,255,0.6)', 
                    lineHeight: '1.9',
                    padding: '0 35px 30px 75px',
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #0A0A0A, #1a1a1a)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 5%',
        zIndex: 1
      }}>
        {/* Animated Rings */}
        {[700, 600, 500].map((size, idx) => (
          <div key={idx} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            border: '2px solid rgba(255,215,0,0.1)',
            animation: `ringsPulse 4s ease-out ${idx * 0.5}s infinite`
          }}></div>
        ))}

        <div style={{ 
          width: '100%', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 2,
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{ 
            marginBottom: '30px',
            animation: 'fadeInDown 0.8s ease-out'
          }}>
            <span style={{
              padding: '10px 25px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '30px',
              color: '#FFD700',
              fontSize: '13px',
              letterSpacing: '2px',
              fontWeight: '600',
              animation: 'badgeGlow 3s ease-in-out infinite'
            }}>
              🎯 LIMITED SLOTS AVAILABLE
            </span>
          </div>

          <h2 style={{ 
            fontSize: 'clamp(40px, 7vw, 68px)', 
            fontWeight: '900', 
            color: 'white',
            marginBottom: '25px',
            lineHeight: '1.1',
            animation: 'fadeInUp 1s ease-out 0.2s backwards'
          }}>
            Ready to Build Your<br/>
            <span style={{ 
              background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 3s ease-in-out infinite'
            }}>Architectural Legacy?</span>
          </h2>

          <p style={{ 
            fontSize: '20px', 
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px',
            lineHeight: '1.7',
            animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
          }}>
            Join 530+ satisfied clients who trusted us with their vision.<br/>
            Free consultation for the first 10 inquiries this month.
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
          }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
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
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
                animation: 'buttonGlow 3s ease-in-out infinite'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 35px 70px rgba(255,215,0,0.6)'
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
                <span style={{ position: 'relative', zIndex: 1 }}>START YOUR PROJECT →</span>
              </button>
            </Link>

            <a href="https://wa.me/8801958140774" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '20px 40px',
                background: '#25D366',
                border: 'none',
                borderRadius: '60px',
                color: 'white',
                fontWeight: '700',
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 20px 50px rgba(37,211,102,0.3)',
                transition: 'all 0.3s',
                animation: 'pulse 2s ease-in-out infinite'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(37,211,102,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(37,211,102,0.3)'
              }}>
                💬 WHATSAPP NOW
              </button>
            </a>
          </div>

          <div style={{ 
            marginTop: '50px', 
            color: 'rgba(255,255,255,0.4)', 
            fontSize: '14px',
            animation: 'fadeIn 1.6s ease-out 0.8s backwards'
          }}>
            <span style={{ color: '#FFD700', animation: 'starTwinkle 1.5s ease-in-out infinite' }}>✓</span> No obligation consultation 
            <span style={{ margin: '0 20px' }}>•</span>
            <span style={{ color: '#FFD700', animation: 'starTwinkle 1.5s ease-in-out infinite 0.3s' }}>✓</span> 100% RAJUK success rate
            <span style={{ margin: '0 20px' }}>•</span>
            <span style={{ color: '#FFD700', animation: 'starTwinkle 1.5s ease-in-out infinite 0.6s' }}>✓</span> In-house engineers
          </div>
        </div>
      </section>

      {/* All Animations - Copied from Homepage */}
      <style jsx>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -60px) scale(1.1); }
          66% { transform: translate(-60px, 60px) scale(0.9); }
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,215,0,0.7); }
          50% { transform: scale(1.3); box-shadow: 0 0 0 15px rgba(255,215,0,0); }
        }

        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.2); }
          50% { box-shadow: 0 0 40px rgba(255,215,0,0.5), 0 0 60px rgba(255,215,0,0.3); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes statPop {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }

        @keyframes borderPulse {
          0%, 100% { border-color: rgba(255,255,255,0.2); }
          50% { border-color: rgba(255,215,0,0.4); }
        }

        @keyframes numberGlow {
          0%, 100% { text-shadow: 0 0 20px currentColor; transform: scale(1); }
          50% { text-shadow: 0 0 40px currentColor, 0 0 60px currentColor; transform: scale(1.05); }
        }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 25px rgba(255,255,255,0.5); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(255,215,0,0.3); }
          50% { box-shadow: 0 0 30px rgba(255,215,0,0.6); }
        }

        @keyframes ringsPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes buttonGlow {
          0%, 100% { box-shadow: 0 30px 60px rgba(255,215,0,0.4); }
          50% { box-shadow: 0 35px 70px rgba(255,215,0,0.6); }
        }

        @keyframes starTwinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          h1 { font-size: 48px !important; }
          h2 { font-size: 32px !important; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 36px !important; }
          h2 { font-size: 28px !important; }
        }
      `}</style>
    </div>
  )
}
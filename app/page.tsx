'use client'
import Link from 'next/link'

export default function Home() {
  const sparklePositions = [
    { top: '25%', left: '15%' },
    { top: '65%', left: '85%' },
    { top: '45%', left: '75%' },
    { top: '80%', left: '35%' },
    { top: '35%', left: '55%' },
    { top: '70%', left: '25%' },
    { top: '50%', left: '65%' },
    { top: '60%', left: '45%' }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif', 
      overflowX: 'hidden',
      position: 'relative',
      maxWidth: '100vw'
    }}>
      
      {/* FLOATING GLOW ORBS */}
      <div className="glow-orb" style={{
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
      
      <div className="glow-orb" style={{
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

      {/* ========== HERO SECTION ========== */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="hero-grid" style={{ 
          width: '100%', 
          padding: '0 5%', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          
          <div className="hero-content" style={{ 
            paddingLeft: '5%',
            animation: 'fadeInLeft 1s ease-out'
          }}>
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '30px',
              animation: 'fadeInDown 0.8s ease-out, badgeGlow 3s ease-in-out infinite'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#FFD700', 
                borderRadius: '50%', 
                animation: 'pulseDot 2s ease-in-out infinite',
                flexShrink: 0
              }}></div>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                Trusted by Professionals & Approved by RAJUK
              </span>
            </div>

            <h1 className="hero-title" style={{ 
              fontSize: '72px', 
              fontWeight: '900', 
              color: 'white', 
              lineHeight: '1',
              marginBottom: '20px',
              letterSpacing: '-2px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              Where Smart<br/>
              <span style={{ 
                color: 'transparent', 
                WebkitTextStroke: '2px #FFD700',
                animation: 'strokeGlow 3s ease-in-out infinite'
              }}>Design Meets</span><br/>
              <span style={{ 
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B6B, #FFD700)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>Structural Strength</span>
            </h1>

            <p className="hero-desc" style={{ 
              fontSize: '18px', 
              color: 'rgba(255,255,255,0.6)', 
              lineHeight: '1.8',
              marginBottom: '40px',
              maxWidth: '450px',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              Professional architectural design, structural engineering, and RAJUK plan approval support for residential and commercial buildings across Bangladesh.
            </p>

            <div className="hero-stats" style={{ 
              display: 'flex', 
              gap: '40px', 
              marginBottom: '40px', 
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
            }}>
              {[
                { number: '530+', label: 'Projects Completed' },
                { number: '8+', label: 'Years of Experience' },
                { number: '100%', label: 'RAJUK Approval Success' }
              ].map((stat, idx) => (
                <div key={idx} className="stat-item" style={{
                  animation: `statPop 0.6s ease-out ${0.8 + idx * 0.15}s backwards`
                }}>
                  <div className="stat-number" style={{ 
                    fontSize: '36px', 
                    fontWeight: '900', 
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(255,215,0,0.3)',
                    animation: 'numberGlow 2s ease-in-out infinite'
                  }}>
                    {stat.number}
                  </div>
                  <div className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '20px', 
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.6s ease-out 0.8s backwards'
            }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button className="cta-btn-primary" style={{
                  padding: '18px 35px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '60px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 20px 40px rgba(255,215,0,0.3)',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
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
                  <span style={{ position: 'relative', zIndex: 1 }}>BOOK CONSULTATION</span>
                  <span style={{ fontSize: '20px', position: 'relative', zIndex: 1 }}>→</span>
                </button>
              </Link>
              
              <Link href="/portfolio" style={{ textDecoration: 'none' }}>
                <button className="btn-secondary" style={{
                  padding: '18px 35px',
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderRadius: '60px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s',
                  animation: 'borderPulse 3s ease-in-out infinite'
                }}>
                  VIEW PORTFOLIO
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Visual - Desktop Only */}
          <div className="hero-visual" style={{ position: 'relative', height: '600px' }}>
            <div style={{
              position: 'absolute',
              top: '50px',
              right: '100px',
              width: '300px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.1))',
              borderRadius: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,215,0,0.3)',
              padding: '30px',
              transform: 'rotate(-5deg)',
              animation: 'cardFloat1 6s ease-in-out infinite',
              boxShadow: '0 30px 80px rgba(255,215,0,0.3)'
            }}>
              <div style={{ 
                color: '#FFD700', 
                fontSize: '24px', 
                fontWeight: '900', 
                marginBottom: '20px',
                animation: 'numberGlow 2s ease-in-out infinite'
              }}>01</div>
              <div style={{ color: 'white', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
                Architectural Design
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6' }}>
                Modern aesthetics with timeless appeal. Every line drawn with purpose.
              </div>
            </div>

            <div style={{
              position: 'absolute',
              top: '150px',
              right: '0px',
              width: '300px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              borderRadius: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '30px',
              transform: 'rotate(5deg)',
              animation: 'cardFloat2 6s ease-in-out infinite 1s',
              boxShadow: '0 30px 80px rgba(102,126,234,0.3)'
            }}>
              <div style={{ 
                color: '#667eea', 
                fontSize: '24px', 
                fontWeight: '900', 
                marginBottom: '20px',
                animation: 'numberGlow 2s ease-in-out infinite 0.5s'
              }}>02</div>
              <div style={{ color: 'white', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
                Structural Safety
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6' }}>
                In-house engineers ensuring your investment stands the test of time.
              </div>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '50px',
              right: '150px',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.4), transparent)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              animation: 'orbPulse 4s ease-in-out infinite'
            }}></div>

            {sparklePositions.map((pos, i) => (
              <div 
                key={i}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#FFD700',
                  borderRadius: '50%',
                  top: pos.top,
                  left: pos.left,
                  animation: `sparkle 2s ease-in-out ${i * 0.3}s infinite`,
                  boxShadow: '0 0 10px #FFD700'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPERTISE SECTION ========== */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '60px',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '20px',
              animation: 'fadeIn 1s ease-out, textGlow 3s ease-in-out infinite'
            }}>
              OUR EXPERTISE
            </div>
            <h2 style={{ 
              fontSize: '48px', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              CRAFTING <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>EXCELLENCE</span>
            </h2>
          </div>

          {/* Row 1 */}
          <div className="expertise-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px', 
            marginBottom: '20px' 
          }}>
            <div className="expertise-card" style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(255,215,0,0.3)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              animation: 'cardReveal 0.8s ease-out, borderGlow 4s ease-in-out infinite',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '45px', marginBottom: '15px', animation: 'iconBounce 2s ease-in-out infinite' }}>🏛️</div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '12px', animation: 'textReveal 0.8s ease-out 0.3s backwards' }}>
                RAJUK Approval
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '20px', animation: 'fadeIn 0.8s ease-out 0.5s backwards' }}>
                100+ successful approvals with 100% success rate. Fast-track processing.
              </p>
              <span style={{ 
                padding: '8px 18px', 
                backgroundColor: 'rgba(255,215,0,0.2)', 
                borderRadius: '20px',
                color: '#FFD700',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid rgba(255,215,0,0.3)',
                animation: 'pulseGlow 2s ease-in-out infinite'
              }}>
                4-Month Average
              </span>
            </div>

            <div className="expertise-card" style={{
              background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(102,126,234,0.2)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              animation: 'cardReveal 0.8s ease-out 0.15s backwards',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '45px', marginBottom: '15px', animation: 'iconBounce 2s ease-in-out infinite 0.3s' }}>🏠</div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
                Architectural Design
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
                Modern aesthetics with functional excellence. Unique designs for every project.
              </p>
            </div>

            <div className="expertise-card" style={{
              background: 'linear-gradient(135deg, rgba(255,107,107,0.1), rgba(255,142,83,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(255,107,107,0.2)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              animation: 'cardReveal 0.8s ease-out 0.3s backwards',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '45px', marginBottom: '15px', animation: 'iconBounce 2s ease-in-out infinite 0.6s' }}>🏗️</div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
                Structural Design
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
                BNBC compliant engineering with in-house structural engineers.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="service-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px', 
            marginBottom: '20px' 
          }}>
            {[
              { icon: '📐', title: 'DAP Analysis', desc: 'Feasibility & zoning check' },
              { icon: '🧪', title: 'Soil Test', desc: 'Foundation safety analysis' },
              { icon: '📡', title: 'Digital Survey', desc: 'GPS land measurement' },
              { icon: '📊', title: 'Estimate & BOQ', desc: 'Detailed cost planning' }
            ].map((service, idx) => (
              <div key={idx} className="service-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '25px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animation: `cardReveal 0.8s ease-out ${0.4 + idx * 0.1}s backwards`,
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px', animation: `iconFloat 3s ease-in-out infinite ${idx * 0.2}s` }}>{service.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>{service.title}</h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="service-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px', 
            marginBottom: '20px' 
          }}>
            {[
              { icon: '⚡', title: 'Electrical Design', desc: 'Wiring & load calculation' },
              { icon: '🚿', title: 'Plumbing Design', desc: 'Water & drainage system' },
              { icon: '🔥', title: 'Fire Safety', desc: 'Safety system design' },
              { icon: '🛋️', title: 'Interior Design', desc: 'Luxury space planning' }
            ].map((service, idx) => (
              <div key={idx} className="service-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '25px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animation: `cardReveal 0.8s ease-out ${0.8 + idx * 0.1}s backwards`,
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px', animation: `iconFloat 3s ease-in-out infinite ${0.4 + idx * 0.2}s` }}>{service.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>{service.title}</h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 4 - Wide Cards - FIXED minmax 400px → 280px */}
          <div className="wide-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px', 
            marginBottom: '20px' 
          }}>
            {[
              { icon: '🥽', title: '3D Visualization & VR Walkthrough', desc: 'Experience your space before it\'s built' },
              { icon: '👷', title: 'Construction Supervision', desc: 'On-site quality control & management' }
            ].map((service, idx) => (
              <div key={idx} className="wide-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '25px',
                padding: '35px',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animation: `slideInLeft 0.8s ease-out ${1.2 + idx * 0.15}s backwards`,
                cursor: 'pointer'
              }}>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'white', marginBottom: '8px', animation: 'textGlow 3s ease-in-out infinite' }}>
                    {service.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{service.desc}</p>
                </div>
                <div style={{ fontSize: '50px', animation: 'iconFloat 4s ease-in-out infinite', flexShrink: 0, marginLeft: '20px' }}>{service.icon}</div>
              </div>
            ))}
          </div>

          {/* Row 5 */}
          <div className="bottom-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px' 
          }}>
            {[
              { icon: '🌳', title: 'Landscape Design', desc: 'Beautiful outdoor spaces' },
              { icon: '🏢', title: 'Project Development', desc: 'End-to-end solutions' },
              { icon: '📋', title: 'Legal Documentation', desc: 'Complete paperwork support' }
            ].map((service, idx) => (
              <div key={idx} className="bottom-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '25px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animation: `fadeInUp 0.8s ease-out ${1.5 + idx * 0.15}s backwards`,
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '40px', animation: `wiggle 2s ease-in-out infinite ${idx * 0.3}s`, flexShrink: 0 }}>{service.icon}</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '5px' }}>{service.title}</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO SECTION ========== */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0A0A0A',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '50px', animation: 'fadeInUp 0.8s ease-out' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '900', color: 'white', marginBottom: '10px', animation: 'fadeInUp 0.8s ease-out' }}>
              Featured <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>Projects</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', animation: 'fadeIn 1s ease-out 0.3s backwards' }}>
              Defining Bangladesh&apos;s architectural landscape
            </p>
          </div>

          <div className="portfolio-grid" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            {[
              { name: 'Muktar Plaza', type: 'Luxury Residence', location: 'Rayerbag, Jatrabari', size: '8,500 sqft', year: '2023', color: '#667eea', image: '/images/Featured/project1.jpg' },
              { name: 'Badsha Villa', type: 'Residential Building', location: 'Kazlar par Jatrabari', size: '3,000 sqft', year: '2025', color: '#f093fb', image: '/images/Featured/project2.jpg' },
              { name: 'City Square', type: 'Residential & Commercial', location: 'Saddam Market, Matuail', size: '6,500 sqft', year: '2025', color: '#4facfe', image: '/images/Featured/project3.jpg' },
              { name: 'Khan Monzil', type: 'Minimalist Home', location: 'Fatullah, Narayangonj', size: '4,500 sqft', year: '2023', color: '#43e97b', image: '/images/Featured/project4.jpg' }
            ].map((project, idx) => (
              <div 
                key={idx}
                className="portfolio-card"
                style={{
                  minHeight: '450px',
                  borderRadius: '20px',
                  backgroundImage: `linear-gradient(to bottom, ${project.color}20, rgba(0,0,0,0.85)), url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  border: `1px solid ${project.color}30`,
                  animation: `cardReveal 0.8s ease-out ${idx * 0.15}s backwards, cardGlow 4s ease-in-out infinite ${idx * 0.5}s`
                }}>
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: `linear-gradient(45deg, transparent, ${project.color}15, transparent)`,
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  padding: '30px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                  zIndex: 2
                }}>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '6px 12px', 
                    backgroundColor: `${project.color}40`,
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    marginBottom: '15px',
                    border: `1px solid ${project.color}60`,
                    animation: 'pulseGlow 2s ease-in-out infinite'
                  }}>
                    <span style={{ color: project.color, fontSize: '12px', fontWeight: '600' }}>{project.year}</span>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '10px', animation: 'textGlow 3s ease-in-out infinite' }}>
                    {project.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '5px' }}>
                    {project.type} • {project.size}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>📍 {project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'fadeInUp 0.8s ease-out' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px', animation: 'fadeIn 1s ease-out, textGlow 3s ease-in-out infinite' }}>
              TESTIMONIALS
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: '900', color: 'white', animation: 'fadeInUp 1s ease-out 0.2s backwards' }}>
              Client <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>Stories</span>
            </h2>
          </div>

          <div className="testimonial-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {[
              { name: 'Md. Abdul Kadir Bhuiyan.', role: 'Journalist', text: 'INSAF transformed our vision into an architectural masterpiece. Their attention to detail and RAJUK expertise saved us months.', rating: 5 },
              { name: 'Md. Sajeeb Bhuiyan', role: 'Homeowner', text: 'From concept to completion, the team exceeded every expectation. Our dream home is now a reality thanks to their dedication.', rating: 5 },
              { name: 'Md. Rafiqul Islam', role: 'Businessman', text: '530+ projects speak volumes. They delivered our complex on time with zero RAJUK issues. Highly recommended!', rating: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="testimonial-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                padding: '35px',
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animation: `cardReveal 0.8s ease-out ${idx * 0.2}s backwards`,
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '40px', color: '#FFD700', opacity: 0.3, position: 'absolute', top: '20px', right: '30px', animation: 'pulse 2s ease-in-out infinite' }}>&ldquo;</div>
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#FFD700', fontSize: '18px', animation: `starTwinkle 1.5s ease-in-out infinite ${i * 0.15}s` }}>★</span>
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.8', marginBottom: '25px', fontStyle: 'italic' }}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', animation: 'textGlow 3s ease-in-out infinite' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '3px' }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0A0A0A',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeInUp 0.8s ease-out' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px', animation: 'fadeIn 1s ease-out, textGlow 3s ease-in-out infinite' }}>
              THE PROCESS
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: '900', color: 'white', animation: 'fadeInUp 1s ease-out 0.2s backwards' }}>
              From Vision to <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>Reality</span>
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div className="timeline-line" style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '3px',
              background: 'linear-gradient(to bottom, #FFD700, #FFA500)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 20px rgba(255,215,0,0.5)',
              animation: 'timelineGlow 3s ease-in-out infinite'
            }}></div>

            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and project requirements to plan the best approach.', time: 'Week 1', color: '#667eea' },
              { step: '02', title: 'Feasibility Study', desc: 'Site analysis, DAP check, and budget planning to ensure a practical and compliant design.', time: 'Week 2-3', color: '#f093fb' },
              { step: '03', title: 'Design Development', desc: '3D visualization, architectural planning, and structural concept development for your project.', time: 'Week 4-8', color: '#4facfe' },
              { step: '04', title: 'RAJUK Submission', desc: 'Complete documentation, coordination, and approval process with RAJUK for hassle-free compliance.', time: 'Month 3-6', color: '#43e97b' },
              { step: '05', title: 'Construction Support', desc: 'Professional site supervision, quality assurance, and technical support throughout construction.', time: 'Ongoing', color: '#fa709a' }
            ].map((process, idx) => (
              <div key={idx} className="process-step" style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '60px',
                justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start',
                paddingLeft: idx % 2 === 0 ? '0' : '52%',
                paddingRight: idx % 2 === 0 ? '52%' : '0',
                animation: `${idx % 2 === 0 ? 'slideInRight' : 'slideInLeft'} 0.8s ease-out ${idx * 0.2}s backwards`
              }}>
                <div className="process-card" style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  padding: '30px',
                  border: `2px solid ${process.color}40`,
                  position: 'relative',
                  textAlign: idx % 2 === 0 ? 'right' : 'left',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  <div style={{ color: process.color, fontSize: '24px', fontWeight: '900', marginBottom: '10px', textShadow: `0 0 20px ${process.color}`, animation: 'numberGlow 2s ease-in-out infinite' }}>{process.step}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '10px', animation: 'textGlow 3s ease-in-out infinite' }}>{process.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>{process.desc}</p>
                  <span style={{ 
                    fontSize: '12px', 
                    color: process.color,
                    padding: '4px 12px',
                    backgroundColor: `${process.color}20`,
                    borderRadius: '15px',
                    display: 'inline-block',
                    border: `1px solid ${process.color}40`,
                    animation: 'pulseGlow 2s ease-in-out infinite'
                  }}>{process.time}</span>
                  
                  {/* Connector Dot */}
                  <div className="timeline-dot" style={{
                    position: 'absolute',
                    [idx % 2 === 0 ? 'right' : 'left']: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '24px',
                    height: '24px',
                    background: `linear-gradient(135deg, ${process.color}, ${process.color}cc)`,
                    borderRadius: '50%',
                    boxShadow: `0 0 30px ${process.color}`,
                    animation: 'dotPulse 2s ease-in-out infinite'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA SECTION ========== */}
      <section style={{ 
        minHeight: '80vh', 
        background: 'linear-gradient(135deg, #0A0A0A, #1a1a1a)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 5%',
        zIndex: 1
      }}>
        {/* Animated Rings */}
        {[700, 600, 500].map((size, idx) => (
          <div key={idx} className="cta-ring" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            border: '2px solid rgba(255,215,0,0.1)',
            animation: `ringsPulse 4s ease-out ${idx * 0.5}s infinite`,
            zIndex: 0
          }}></div>
        ))}

        <div style={{ width: '100%', textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 5%' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '30px', animation: 'fadeInDown 0.8s ease-out' }}>
              <span style={{
                padding: '10px 25px',
                backgroundColor: 'rgba(255,215,0,0.1)',
                border: '1px solid rgba(255,215,0,0.3)',
                borderRadius: '30px',
                color: '#FFD700',
                fontSize: '13px',
                letterSpacing: '2px',
                fontWeight: '600',
                animation: 'pulseGlow 2s ease-in-out infinite, badgeGlow 3s ease-in-out infinite'
              }}>
                BUILD WITH CONFIDENCE 
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
              Ready to Start Your<br/>
              <span style={{ 
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 3s ease-in-out infinite'
              }}>Architectural Legacy?</span>
            </h2>

            <p className="cta-subtitle" style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '50px',
              maxWidth: '600px',
              margin: '0 auto 50px',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              Join 1000+ satisfied clients who have trusted Insaf Building Design & Consultant Ltd. to turn their architectural dreams into reality.
              We combine modern architectural aesthetics with strong structural engineering to create spaces that inspire and stand the test of time.
            </p>

            <div className="cta-buttons" style={{ 
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
            }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button className="cta-main-btn" style={{
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
                  overflow: 'hidden',
                  animation: 'buttonGlow 3s ease-in-out infinite'
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    animation: 'btnShine 3s ease-in-out infinite'
                  }}></div>
                  <span style={{ position: 'relative', zIndex: 1 }}>START YOUR PROJECT</span>
                  <span style={{ fontSize: '24px', position: 'relative', zIndex: 1 }}>→</span>
                </button>
              </Link>

              <a href="https://wa.me/8801958140774" className="whatsapp-btn" style={{
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
                transition: 'all 0.3s',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <span style={{ fontSize: '20px' }}>💬</span>
                WHATSAPP NOW
              </a>
            </div>

            <div style={{ marginTop: '50px', color: 'rgba(255,255,255,0.4)', fontSize: '14px', animation: 'fadeIn 1.6s ease-out 0.8s backwards' }}>
              <span style={{ color: '#FFD700', animation: 'starTwinkle 1.5s ease-in-out infinite' }}>✓</span> No obligation consultation 
              <span style={{ margin: '0 20px' }}>•</span>
              <span style={{ color: '#FFD700', animation: 'starTwinkle 1.5s ease-in-out infinite 0.3s' }}>✓</span> 100% RAJUK success rate
              <span style={{ margin: '0 20px' }}>•</span>
              <span style={{ color: '#FFD700', animation: 'starTwinkle 1.5s ease-in-out infinite 0.6s' }}>✓</span> Expert Engineering Team
            </div>
          </div>
        </div>
      </section>

      {/* ========== ALL ANIMATIONS CSS ========== */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          overflow-x: hidden !important;
          max-width: 100vw !important;
        }

        /* ===== HOVER EFFECTS ===== */
        .cta-btn-primary:hover, .cta-main-btn:hover {
          transform: translateY(-5px) scale(1.08) !important;
          box-shadow: 0 35px 70px rgba(255,215,0,0.6) !important;
        }
        .btn-secondary:hover {
          transform: translateY(-3px);
          border-color: rgba(255,215,0,0.6) !important;
          background: rgba(255,215,0,0.15) !important;
          box-shadow: 0 20px 40px rgba(255,215,0,0.3);
        }
        .whatsapp-btn:hover {
          transform: translateY(-5px) scale(1.05) !important;
          box-shadow: 0 30px 60px rgba(37,211,102,0.5) !important;
        }
        .expertise-card:hover, .service-card:hover, .testimonial-card:hover {
          transform: translateY(-15px) scale(1.03) !important;
          box-shadow: 0 40px 80px rgba(255,215,0,0.3) !important;
          border-color: rgba(255,215,0,0.5) !important;
        }
        .wide-card:hover {
          transform: translateX(10px) !important;
          box-shadow: 0 30px 60px rgba(255,215,0,0.25) !important;
          border-color: rgba(255,215,0,0.4) !important;
        }
        .bottom-card:hover {
          transform: translateX(15px) scale(1.02) !important;
          background: rgba(255,215,0,0.05) !important;
          border-color: rgba(255,215,0,0.4) !important;
        }
        .portfolio-card:hover {
          transform: translateY(-20px) scale(1.05) !important;
          box-shadow: 0 50px 100px rgba(255,215,0,0.4) !important;
        }
        .process-card:hover {
          transform: scale(1.08) !important;
          background: rgba(255,215,0,0.05) !important;
        }

        /* ===== KEYFRAMES ===== */
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
        @keyframes strokeGlow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,215,0,0.5)); }
          50% { filter: drop-shadow(0 0 30px rgba(255,215,0,0.8)); }
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
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes statPop {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes cardFloat1 {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        @keyframes cardFloat2 {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes orbPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        @keyframes numberGlow {
          0%, 100% { text-shadow: 0 0 20px currentColor; transform: scale(1); }
          50% { text-shadow: 0 0 40px currentColor, 0 0 60px currentColor; transform: scale(1.05); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }
        @keyframes ringsPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes iconBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-15px); }
          60% { transform: translateY(-8px); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 25px rgba(255,255,255,0.5); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(255,215,0,0.3); box-shadow: 0 0 20px rgba(255,215,0,0.1); }
          50% { border-color: rgba(255,215,0,0.6); box-shadow: 0 0 40px rgba(255,215,0,0.3); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(255,215,0,0.3); }
          50% { box-shadow: 0 0 30px rgba(255,215,0,0.6); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes cardGlow {
          0%, 100% { box-shadow: 0 20px 50px rgba(255,215,0,0.1); }
          50% { box-shadow: 0 25px 60px rgba(255,215,0,0.25); }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes dotPulse {
          0%, 100% { transform: translateY(-50%) scale(1); box-shadow: 0 0 20px currentColor; }
          50% { transform: translateY(-50%) scale(1.3); box-shadow: 0 0 40px currentColor; }
        }
        @keyframes timelineGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.5); }
          50% { box-shadow: 0 0 40px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes buttonGlow {
          0%, 100% { box-shadow: 0 30px 60px rgba(255,215,0,0.4); }
          50% { box-shadow: 0 35px 70px rgba(255,215,0,0.6); }
        }
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(255,255,255,0.2); }
          50% { border-color: rgba(255,215,0,0.4); }
        }
        @keyframes textReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ============================================ */
        /* ========== MOBILE RESPONSIVE =============== */
        /* ============================================ */

        @media (max-width: 768px) {

          /* Hide desktop decorative orbs & rings */
          .glow-orb {
            display: none !important;
          }
          .cta-ring {
            display: none !important;
          }

          /* HERO */
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 0 20px !important;
          }
          .hero-visual {
            display: none !important;
          }
          .hero-content {
            padding-left: 0 !important;
            text-align: center !important;
          }
          .hero-badge {
            margin: 0 auto 20px !important;
            font-size: 10px !important;
            padding: 6px 14px !important;
            white-space: normal !important;
            text-align: center !important;
          }
          .hero-title {
            font-size: 36px !important;
            line-height: 1.15 !important;
            letter-spacing: -1px !important;
          }
          .hero-desc {
            font-size: 15px !important;
            max-width: 100% !important;
            margin: 0 auto 30px !important;
          }
          .hero-stats {
            justify-content: center !important;
            gap: 25px !important;
          }
          .stat-item {
            text-align: center !important;
          }
          .stat-number {
            font-size: 28px !important;
          }
          .stat-label {
            font-size: 11px !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
          }
          .hero-buttons a {
            width: 100% !important;
            max-width: 320px !important;
          }
          .cta-btn-primary, .btn-secondary {
            width: 100% !important;
            justify-content: center !important;
          }

          /* SECTIONS PADDING */
          section {
            padding: 60px 20px !important;
          }

          /* SECTION HEADINGS */
          h2 {
            font-size: 32px !important;
          }

          /* EXPERTISE GRIDS → 1 column */
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
          .service-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .wide-grid {
            grid-template-columns: 1fr !important;
          }
          .bottom-grid {
            grid-template-columns: 1fr !important;
          }

          /* WIDE CARD stacking */
          .wide-card {
            flex-direction: column !important;
            text-align: center !important;
            gap: 15px !important;
          }

          /* BOTTOM CARD stacking */
          .bottom-card {
            flex-direction: row !important;
          }

          /* PORTFOLIO */
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
          .portfolio-card {
            min-height: 320px !important;
          }

          /* TESTIMONIALS */
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }

          /* PROCESS TIMELINE */
          .timeline-line {
            display: none !important;
          }
          .timeline-dot {
            display: none !important;
          }
          .process-step {
            justify-content: center !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-bottom: 20px !important;
          }
          .process-card {
            text-align: center !important;
            width: 100% !important;
          }

          /* CTA */
          .cta-heading {
            font-size: 36px !important;
            line-height: 1.2 !important;
          }
          .cta-subtitle {
            font-size: 16px !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
            gap: 15px !important;
          }
          .cta-main-btn, .whatsapp-btn {
            width: 100% !important;
            max-width: 320px !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px !important;
          }
          h2 {
            font-size: 26px !important;
          }
          .hero-badge {
            font-size: 9px !important;
            letter-spacing: 1px !important;
          }
          .service-grid {
            grid-template-columns: 1fr !important;
          }
          .expertise-card, .service-card, .wide-card, .bottom-card, .testimonial-card {
            padding: 20px !important;
          }
          .cta-heading {
            font-size: 28px !important;
          }
          .cta-subtitle {
            font-size: 14px !important;
          }
          .stat-number {
            font-size: 24px !important;
          }
          .cta-btn-primary, .btn-secondary, .cta-main-btn, .whatsapp-btn {
            min-height: 50px !important;
            font-size: 13px !important;
          }

          /* Disable hover on touch devices */
          @media (hover: none) and (pointer: coarse) {
            .expertise-card:hover,
            .service-card:hover,
            .wide-card:hover,
            .bottom-card:hover,
            .portfolio-card:hover,
            .process-card:hover,
            .testimonial-card:hover {
              transform: none !important;
              box-shadow: none !important;
            }
          }
        }

        /* Global overflow fix */
        h1, h2, h3, h4, p, span {
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
      `}</style>
    </div>
  )
}
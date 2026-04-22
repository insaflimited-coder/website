'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ExpertsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const engineeringTeam = [
     { 
      name: 'Engr. Muhammad Sheikh Rakibul Hasan', 
      role: 'Design Engineer', 
      degree: 'B.Sc. Engr.(Civil)', 
      icon: '👷', 
      color: '#4facfe' 
    },
    { 
      name: 'Engr. Md. Shariful Islam', 
      role: 'Sr. Structural Engineer', 
      degree: 'B.Sc. Engr.(Civil), M.Sc (Environment)', 
      extra: 'Safety Management Certificate (BUET) | FIEB-15559 (Life Time)',
      icon: '👷', 
      color: '#667eea' 
    },
    { 
      name: 'Engr. Md. Kamruzzaman Kiron', 
      role: 'Structural Engineer', 
      degree: 'B.Sc. Engr.(Civil)', 
      extra: 'MIEB-28843',
      icon: '👷', 
      color: '#f093fb' 
    },
   
    { 
      name: 'Engr. Azharul Haq', 
      role: 'Design Engineer', 
      degree: 'B.Sc. Engr.(Civil)', 
      icon: '👷', 
      color: '#a8edea' 
    },
    { 
      name: 'Md. Rakib Hossain', 
      role: 'Engineer', 
      degree: 'Diploma Engg.(Civil), B.Sc. Engg.(Cont.)', 
      extra: 'Reg.No: 1500959231',
      icon: '👷', 
      color: '#43e97b' 
    },
  ]

  const architectTeam = [
    { 
      name: 'Architect Md. Sahabuddin Mahmud', 
      role: 'Architect', 
      degree: 'B.Arch, M.Arch (BUET)', 
      extra: 'IAB REG NO: AM-207',
      icon: '🏛️', 
      color: '#667eea' 
    },
    { 
      name: 'Architect Md. Robiul Hassan', 
      role: 'Architect', 
      degree: 'B.Arch', 
      icon: '🏛️', 
      color: '#f093fb' 
    },
  ]

  const electricalTeam = [
    { 
      name: 'Engr. Mohammad Rasel Mia', 
      role: 'Electrical Engineer', 
      degree: 'B.Sc. Engr.(EEE)', 
      extra: 'MIEB-31236',
      icon: '⚡', 
      color: '#FFD700' 
    },
    { 
      name: 'Engr. Md. Moniruzzaman Khan', 
      role: 'Electrical Engineer', 
      degree: 'B.Sc. Engr.(EEE)', 
      icon: '⚡', 
      color: '#FFA500' 
    },
    { 
      name: 'Md. Rasel', 
      role: 'Electrical Engineer', 
      degree: 'Diploma Engg.(EEE)', 
      icon: '⚡', 
      color: '#FF8C00' 
    },
  ]

  const plumbingTeam = [
    { 
      name: 'Md. Johirul Islam Raju', 
      role: 'Plumbing Engineer', 
      degree: 'B.Sc. Engr.(Civil)', 
      icon: '💧', 
      color: '#4facfe' 
    },
    { 
      name: 'Md. Rakib Hossain', 
      role: 'Plumbing Engineer', 
      degree: 'Diploma Engg.(Civil), B.Sc. Engg.(Cont.)', 
      extra: 'Reg.No: 1500959231',
      icon: '💧', 
      color: '#00f2fe' 
    },
  ]

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '18px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s ease'
  }

  const renderTeamCards = (team: any[], startIndex: number) => (
    team.map((member, idx) => (
      <div 
        key={idx} 
        className="expert-card" 
        onMouseEnter={() => setHoveredCard(startIndex + idx)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          background: hoveredCard === startIndex + idx 
            ? `${member.color}15` 
            : 'rgba(255,255,255,0.03)',
          borderRadius: '25px',
          padding: '35px',
          border: hoveredCard === startIndex + idx 
            ? `2px solid ${member.color}40` 
            : '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          animation: `cardReveal 0.8s ease-out ${idx * 0.1}s backwards`,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: hoveredCard === startIndex + idx ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)',
          boxShadow: hoveredCard === startIndex + idx 
            ? `0 30px 60px ${member.color}30` 
            : '0 10px 30px rgba(0,0,0,0.2)'
        }}>
        
        {hoveredCard === startIndex + idx && (
          <>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: `radial-gradient(circle, ${member.color}30, transparent)`,
              borderRadius: '50%',
              filter: 'blur(40px)',
              animation: 'glowPulse 2s ease-in-out infinite'
            }}></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                backgroundColor: member.color,
                borderRadius: '50%',
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animation: `sparkle 1.5s ease-in-out ${i * 0.3}s infinite`,
                boxShadow: `0 0 8px ${member.color}`
              }}></div>
            ))}
          </>
        )}

        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: `2px solid transparent`,
            borderTopColor: member.color,
            borderRightColor: member.color,
            animation: hoveredCard === startIndex + idx ? 'spinRing 2s linear infinite' : 'none',
            opacity: hoveredCard === startIndex + idx ? 1 : 0,
            transition: 'opacity 0.3s'
          }}></div>

          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid ${member.color}60`,
            fontSize: '32px',
            position: 'relative',
            zIndex: 2,
            animation: hoveredCard === startIndex + idx ? 'avatarFloat 3s ease-in-out infinite' : 'none',
            boxShadow: hoveredCard === startIndex + idx ? `0 10px 30px ${member.color}50` : 'none',
            transition: 'all 0.4s'
          }}>
            {member.icon}
          </div>
        </div>

        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: '700', 
          color: hoveredCard === startIndex + idx ? member.color : '#FFD700', 
          marginBottom: '8px', 
          lineHeight: '1.3',
          position: 'relative',
          zIndex: 2,
          transition: 'color 0.3s'
        }}>
          {member.name}
        </h3>
        <div style={{ 
          fontSize: '13px', 
          color: 'white', 
          marginBottom: '8px', 
          fontWeight: '600',
          position: 'relative',
          zIndex: 2
        }}>
          {member.role}
        </div>
        <div style={{ 
          fontSize: '12px', 
          color: 'rgba(255,255,255,0.5)', 
          lineHeight: '1.5',
          position: 'relative',
          zIndex: 2
        }}>
          {member.degree}
        </div>
        {member.extra && (
          <div style={{
            marginTop: '12px',
            fontSize: '11px',
            color: member.color,
            padding: '8px 12px',
            backgroundColor: `${member.color}20`,
            borderRadius: '20px',
            display: 'inline-block',
            border: `1px solid ${member.color}40`,
            position: 'relative',
            zIndex: 2,
            lineHeight: '1.5'
          }}>
            ✦ {member.extra}
          </div>
        )}
      </div>
    ))
  )

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif', 
      overflowX: 'hidden',
      position: 'relative'
    }}>

      {/* FLOATING GLOW ORBS */}
      <div style={{
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
      
      <div style={{
        position: 'fixed',
        bottom: '15%',
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
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ width: '100%', padding: '0 5%', position: 'relative', zIndex: 2 }}>
          <div style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            textAlign: 'center',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            
            <div style={{
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
                THE MASTERMINDS
              </span>
            </div>

            <h1 className="hero-heading" style={{
              fontSize: '72px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1.1',
              marginBottom: '30px',
              letterSpacing: '-2px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              Expert Engineering &
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B6B, #FFD700)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>Architectural Team</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.8',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              Meet the visionaries behind Insaf Building Design & Consultant Ltd. — a dedicated team of certified engineers and creative architects committed to delivering safe, modern, and luxurious buildings.
            </p>

            <div className="stats-row" style={{ 
              display: 'flex', 
              gap: '40px', 
              justifyContent: 'center', 
              marginTop: '50px', 
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
            }}>
              {[
                { num: '15+', label: 'EXPERTS' },
                { num: '5+', label: 'ENGINEERS' },
                { num: '2', label: 'ARCHITECTS' },
                { num: '530+', label: 'PROJECTS' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  animation: `statPop 0.6s ease-out ${0.8 + idx * 0.15}s backwards`
                }}>
                  <div style={{ 
                    fontSize: '42px', 
                    fontWeight: '900', 
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.num}
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

      {/* STRUCTURAL ENGINEERING TEAM */}
      <section className="fade-in-section" style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '15px'
            }}>
              OUR TEAM
            </div>
            <h2 className="section-heading" style={{ 
              fontSize: '48px', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px',
              borderLeft: '6px solid #FFD700',
              paddingLeft: '25px'
            }}>
              Structural & <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Design Engineers</span>
            </h2>
          </div>

          <div className="team-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {renderTeamCards(engineeringTeam, 0)}
          </div>
        </div>
      </section>

      {/* ARCHITECT TEAM */}
      <section className="fade-in-section" style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0A0A0A',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '15px'
            }}>
              CREATIVE MINDS
            </div>
            <h2 className="section-heading" style={{ 
              fontSize: '48px', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px',
              borderLeft: '6px solid white',
              paddingLeft: '25px'
            }}>
              Architectural <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Design Team</span>
            </h2>
          </div>

          <div className="team-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '30px',
            maxWidth: '800px'
          }}>
            {renderTeamCards(architectTeam, 100)}
          </div>
        </div>
      </section>

      {/* ELECTRICAL TEAM */}
      <section className="fade-in-section" style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '15px'
            }}>
              ELECTRICAL SPECIALISTS
            </div>
            <h2 className="section-heading" style={{ 
              fontSize: '48px', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px',
              borderLeft: '6px solid #FFD700',
              paddingLeft: '25px'
            }}>
              EEE <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Engineers</span>
            </h2>
          </div>

          <div className="team-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {renderTeamCards(electricalTeam, 200)}
          </div>
        </div>
      </section>

      {/* PLUMBING TEAM */}
      <section className="fade-in-section" style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0A0A0A',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '15px'
            }}>
              PLUMBING SPECIALISTS
            </div>
            <h2 className="section-heading" style={{ 
              fontSize: '48px', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px',
              borderLeft: '6px solid #4facfe',
              paddingLeft: '25px'
            }}>
              Plumbing <span style={{
                background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Engineers</span>
            </h2>
          </div>

          <div className="team-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '30px',
            maxWidth: '800px'
          }}>
            {renderTeamCards(plumbingTeam, 300)}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="fade-in-section" style={{ 
        padding: '120px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="contact-grid" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '80px',
          alignItems: 'center' 
        }}>
          <div style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '15px' }}>
              GET IN TOUCH
            </div>
            <h2 className="section-heading" style={{ 
              fontSize: '48px', 
              fontWeight: '900', 
              color: 'white', 
              marginBottom: '30px',
              lineHeight: '1.1'
            }}>
              Want to speak with
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Our Experts?</span>
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: 'rgba(255,255,255,0.6)', 
              lineHeight: '1.8', 
              marginBottom: '40px' 
            }}>
              Reach out to our team of experienced engineers and architects for professional advice on site analysis, structural planning, and architectural design. We're here to turn your vision into a well-executed reality.
            </p>
            
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                { icon: '📞', label: 'PHONE', value: '01958-140774 | 01939-294938', color: '#4facfe' },
                { icon: '✉️', label: 'EMAIL', value: 'contact@insaflimited.com', color: '#f093fb' }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  padding: '25px', 
                  backgroundColor: 'rgba(255,255,255,0.03)', 
                  borderRadius: '20px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  transition: 'all 0.3s',
                  animation: `slideInLeft 0.8s ease-out ${idx * 0.15}s backwards`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)'
                  e.currentTarget.style.borderColor = `${item.color}40`
                  e.currentTarget.style.background = `${item.color}10`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '15px',
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    boxShadow: `0 10px 30px ${item.color}40`
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', letterSpacing: '1px', marginBottom: '5px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '18px', color: 'white', fontWeight: '600' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.03)', 
            padding: '50px', 
            borderRadius: '30px', 
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
            animation: 'fadeInRight 0.8s ease-out'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.2), transparent)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              animation: 'glowPulse 4s ease-in-out infinite'
            }}></div>

            <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '30px', position: 'relative', zIndex: 2 }}>
              Send a Message
            </h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 2 }}>
              <input type="text" placeholder="Enter Name *" className="form-input" style={inputStyle} required />
              <input type="tel" placeholder="Mobile Number *" className="form-input" style={inputStyle} required />
              <input type="email" placeholder="Enter Email *" className="form-input" style={inputStyle} required />
              <textarea placeholder="Your Message *" rows={4} className="form-input" style={{...inputStyle, resize: 'none'}} required></textarea>
              <button type="submit" style={{
                padding: '18px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '15px',
                color: '#000',
                fontWeight: '800',
                fontSize: '16px',
                letterSpacing: '1px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s',
                boxShadow: '0 20px 40px rgba(255,215,0,0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(255,215,0,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,215,0,0.3)'
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
                <span style={{ position: 'relative', zIndex: 2 }}>SUBMIT REQUEST →</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="fade-in-section" style={{
        padding: '120px 5%',
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '2px solid rgba(255,215,0,0.1)',
          animation: 'ringsPulse 4s ease-out infinite',
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
          animation: 'ringsPulse 4s ease-out 0.5s infinite',
          zIndex: 0
        }}></div>

        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 2 
        }}>
          <h2 className="cta-heading" style={{
            fontSize: '56px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '30px',
            lineHeight: '1.1',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            Ready to Build Your
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
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px',
            animation: 'fadeInUp 1s ease-out 0.2s backwards'
          }}>
            Join 530+ satisfied clients who trusted us with their vision.
          </p>
          <div className="cta-buttons-final" style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
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
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s',
                boxShadow: '0 20px 40px rgba(255,215,0,0.3)'
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
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  animation: 'btnShine 3s ease-in-out infinite'
                }}></div>
                <span style={{ position: 'relative', zIndex: 2 }}>START YOUR PROJECT →</span>
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
              transition: 'all 0.4s',
              boxShadow: '0 20px 40px rgba(37,211,102,0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(37,211,102,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(37,211,102,0.3)'
            }}>
              <span style={{ fontSize: '20px' }}>💬</span>
              WHATSAPP NOW
            </a>
          </div>
        </div>
      </section>

      {/* ALL ANIMATIONS */}
      <style>{`
        body { overflow-x: hidden !important; }

        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }

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

        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes statPop {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(60px) rotateX(10deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0); }
        }

        @keyframes avatarFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spinRing {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }

        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }

        @keyframes ringsPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
        }

        .form-input:focus {
          border-color: #FFD700 !important;
          box-shadow: 0 0 20px rgba(255,215,0,0.2) !important;
          background: rgba(255,215,0,0.05) !important;
        }

        @media (max-width: 768px) {
          .hero-heading { font-size: 42px !important; }
          .section-heading { font-size: 32px !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cta-heading { font-size: 36px !important; }
          .cta-buttons-final { flex-direction: column !important; align-items: center !important; }
          .cta-buttons-final button, .cta-buttons-final a { 
            width: 100% !important; max-width: 300px !important; justify-content: center !important; 
          }
          .stats-row { gap: 30px !important; }
        }

        @media (max-width: 480px) {
          .hero-heading { font-size: 32px !important; }
          .section-heading { font-size: 28px !important; }
          .cta-heading { font-size: 28px !important; }
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif', 
      overflow: 'hidden',
      overflowX: 'hidden' 
    }}>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '120px',
        paddingBottom: '60px',
        position: 'relative'
      }}>

        <div style={{ width: '100%', padding: '0 5%', position: 'relative', zIndex: 2 }}>
          <div className="hero-grid" style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '80px', 
            alignItems: 'center' 
          }}>
            
            {/* Left Content */}
            <div className="hero-content" style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 1s ease-out'
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
                animation: 'fadeInDown 0.8s ease-out'
              }}>
                <div className="pulse-dot" style={{ width: '8px', height: '8px', backgroundColor: '#FFD700', borderRadius: '50%' }}></div>
                <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>EST. 2018</span>
              </div>

              <h1 className="hero-heading" style={{
                fontSize: '72px',
                fontWeight: '900',
                color: 'white',
                lineHeight: '1',
                marginBottom: '30px',
                letterSpacing: '-2px'
              }}>
                <span className="text-reveal">DESIGNING</span>
                <br />
                <span className="gradient-text" style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>BUILDINGS</span>
                <br />
                <span className="text-reveal" style={{ animationDelay: '0.4s' }}>WITH PRECISION</span>
              </h1>

              <p className="hero-subtitle" style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.8',
                marginBottom: '40px',
                maxWidth: '500px',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s ease-out 0.5s'
              }}>
                What started as a vision to improve architectural standards has grown into a trusted building design and structural consultancy serving clients across Bangladesh.
              </p>

              <div className="stats-row" style={{ display: 'flex', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
                {[
                  { num: '530+', label: 'PROJECTS', delay: '0.6s' },
                  { num: '8+', label: 'YEARS', delay: '0.8s' },
                  { num: '25+', label: 'TEAM', delay: '1s' }
                ].map((stat, idx) => (
                  <div key={idx} className="stat-item" style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.8s ease-out ${stat.delay}`
                  }}>
                    <div className="stat-number" style={{ fontSize: '42px', fontWeight: '900', color: '#FFD700' }}>{stat.num}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Hidden on Mobile */}
            <div className="hero-visual" style={{ 
              position: 'relative', 
              height: '600px',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 1s ease-out 0.3s'
            }}>
              <div className="floating-card" style={{
                position: 'absolute',
                top: '50px',
                right: '100px',
                width: '350px',
                height: '450px',
                background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.1))',
                borderRadius: '30px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,215,0,0.2)',
                padding: '40px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
              }}>
                <div className="number-animate" style={{ color: '#FFD700', fontSize: '80px', fontWeight: '900', marginBottom: '20px' }}>8</div>
                <div style={{ color: 'white', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Years of Excellence</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: '1.6' }}>
                  Leading Bangladesh's architectural revolution with innovative design and unwavering commitment to quality.
                </div>
              </div>

              <div className="glow-orb" style={{
                position: 'absolute',
                bottom: '50px',
                right: '150px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,215,0,0.3), transparent)',
                borderRadius: '50%',
                filter: 'blur(40px)'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="fade-in-section" style={{ padding: '120px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div className="section-label" style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>OUR STORY</div>
            <h2 className="section-heading" style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              THE <span style={{ color: '#FFD700' }}>JOURNEY</span>
            </h2>
          </div>

          <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div className="slide-in-left">
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: 'white', marginBottom: '30px' }}>
                From Vision to Reality
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '25px' }}>
                Founded by Engr. Muhammad Sheik Rakibul Hasan in 2018, Insaf Building Design & Consultant Ltd. was established with a clear vision — to improve the standard of building design and structural planning in Bangladesh by combining modern architectural concepts with strong engineering principles.

What began as a small two-person initiative has steadily grown into a professional consultancy supported by a team of architects, structural engineers, and technical specialists.

Today, the firm has successfully delivered hundreds of residential and commercial building design projects, helping clients transform their ideas into safe, functional, and modern structures.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '25px' }}>
                What started as a two-person operation has grown into a full-service architectural firm 
                with 25+ professionals, including licensed architects, structural engineers, and interior designers.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                Today, we've successfully completed 530+ projects, maintaining a 100% RAJUK approval success 
                rate and establishing ourselves as Bangladesh's premier architectural consultancy.
              </p>
            </div>

            <div className="slide-in-right achievement-card" style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.05), rgba(255,165,0,0.02))',
              borderRadius: '30px',
              padding: '50px',
              border: '1px solid rgba(255,215,0,0.1)'
            }}>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '30px' }}>
                Our Achievements
              </h3>
              {[
                { year: '2018', title: 'Company Founded', desc: 'Started with a vision to deliver reliable building design and consultancy services.' },
                { year: '2019', title: 'Professional Recognition', desc: 'Expanded services and strengthened industry connections.' },
                { year: '2020', title: '100+ Projects Completed', desc: 'Reached our first major milestone.' },
                { year: '2022', title: 'Team Expansion', desc: 'The team grew with experienced engineers and designers.' },
                { year: '2025', title: '500+ Projects Milestone', desc: 'Continued growth with successful residential and commercial projects.' }
              ].map((achievement, idx) => (
                <div key={idx} className="timeline-item" style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '25px',
                  paddingBottom: '25px',
                  borderBottom: idx < 4 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  animationDelay: `${idx * 0.1}s`
                }}>
                  <div className="year-badge" style={{
                    width: '60px',
                    flexShrink: 0,
                    color: '#FFD700',
                    fontSize: '16px',
                    fontWeight: '700'
                  }}>{achievement.year}</div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '5px' }}>
                      {achievement.title}
                    </div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                      {achievement.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="fade-in-section" style={{ padding: '120px 5%', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div className="section-label" style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>THE TEAM</div>
            <h2 className="section-heading" style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              MEET THE <span style={{ color: '#FFD700' }}>EXPERTS</span>
            </h2>
          </div>

          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {[
              { name: 'Ar. Mohammad Insaf', role: 'Principal Architect', exp: '10+ years', specialty: 'Luxury Residential' },
              { name: 'Eng. Rahman Khan', role: 'Structural Engineer', exp: '12+ years', specialty: 'BNBC Compliance' },
              { name: 'Ar. Sarah Ahmed', role: 'Senior Architect', exp: '8+ years', specialty: 'Commercial Design' },
              { name: 'Ar. Nabila Islam', role: 'Interior Designer', exp: '6+ years', specialty: 'Spatial Planning' }
            ].map((member, idx) => (
              <div key={idx} className="team-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                padding: '35px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                cursor: 'pointer',
                animationDelay: `${idx * 0.15}s`
              }}>
                <div className="avatar-glow" style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,165,0,0.1))',
                  margin: '0 auto 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(255,215,0,0.3)',
                  fontSize: '48px',
                  position: 'relative'
                }}>
                  👤
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '14px', color: '#FFD700', marginBottom: '5px' }}>{member.role}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>{member.exp}</div>
                <div className="specialty-tag" style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(255,215,0,0.1)',
                  borderRadius: '15px',
                  display: 'inline-block'
                }}>
                  {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION - BENTO GRID */}
      <section className="fade-in-section" style={{ padding: '120px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div className="section-label" style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>OUR VALUES</div>
            <h2 className="section-heading" style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              WHAT WE <span style={{ color: '#FFD700' }}>STAND FOR</span>
            </h2>
          </div>

          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {[
              { icon: '⭐', title: 'Excellence', desc: 'Uncompromising quality in every detail', color: 'rgba(255,215,0,0.1)' },
              { icon: '💡', title: 'Innovation', desc: 'Pushing boundaries of design', color: 'rgba(255,165,0,0.1)' },
              { icon: '🤝', title: 'Integrity', desc: 'Transparent and honest approach', color: 'rgba(255,215,0,0.05)' },
              { icon: '🎯', title: 'Precision', desc: 'Meticulous attention to detail', color: 'rgba(255,165,0,0.05)' },
              { icon: '🏆', title: 'Leadership', desc: 'Setting industry standards', color: 'rgba(255,215,0,0.08)' },
              { icon: '🌱', title: 'Sustainability', desc: 'Eco-conscious design solutions', color: 'rgba(255,165,0,0.08)' }
            ].map((value, idx) => (
              <div key={idx} className="value-card" style={{
                background: value.color,
                borderRadius: '25px',
                padding: '50px',
                border: '1px solid rgba(255,215,0,0.2)',
                cursor: 'pointer',
                animationDelay: `${idx * 0.1}s`
              }}>
                <div className="icon-bounce" style={{ fontSize: '60px', marginBottom: '25px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '15px' }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="fade-in-section" style={{
        padding: '120px 5%',
        backgroundColor: '#0A0A0A',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1), transparent 70%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated rings */}
        <div className="cta-ring ring-1"></div>
        <div className="cta-ring ring-2"></div>
        <div className="cta-ring ring-3"></div>

        <div className="cta-content" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 className="cta-heading" style={{
            fontSize: '56px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '30px',
            lineHeight: '1.1'
          }}>
            Ready to Build Your
            <br />
            <span className="shimmer-text" style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Dream Project?</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Join 1000+ satisfied clients who trusted us with their vision.
          </p>
          <div className="cta-buttons-final" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <button className="btn-glow" style={{
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
                overflow: 'hidden'
              }}>
                <span style={{ position: 'relative', zIndex: 2 }}>START YOUR PROJECT →</span>
              </button>
            </Link>
            <a href="https://wa.me/8801958140774" className="btn-whatsapp" style={{
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
              gap: '10px'
            }}>
              <span style={{ fontSize: '20px' }}>💬</span>
              WHATSAPP NOW
            </a>
          </div>
        </div>
      </section>

      {/* CSS Animations + Mobile Responsive Styles */}
      <style>{`
        /* ========== KEYFRAME ANIMATIONS ========== */
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.3); }
          50% { box-shadow: 0 0 40px rgba(255,215,0,0.6), 0 0 60px rgba(255,215,0,0.3); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(0, -40px) scale(1); }
          75% { transform: translate(-20px, -20px) scale(0.9); }
        }

        @keyframes ringPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.2; }
          100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(255,215,0,0.2); }
          50% { border-color: rgba(255,215,0,0.5); }
        }

        /* ========== ELEMENT ANIMATIONS ========== */
        
        /* Pulse Dot */
        .pulse-dot {
          animation: pulse 2s infinite;
        }

        /* Floating Card */
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }

        /* Glow Orb */
        .glow-orb {
          animation: orbFloat 8s ease-in-out infinite;
        }

        /* Text Reveal */
        .text-reveal {
          display: inline-block;
          animation: textReveal 1s ease-out forwards;
          opacity: 0;
        }

        /* Gradient Text Shimmer */
        .gradient-text {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        /* Stat Number Animation */
        .stat-number {
          transition: all 0.3s ease;
        }
        .stat-item:hover .stat-number {
          transform: scale(1.1);
          text-shadow: 0 0 30px rgba(255,215,0,0.5);
        }

        /* Section Animations */
        .fade-in-section {
          animation: fadeInUp 1s ease-out;
        }

        .slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        .slide-in-right {
          animation: slideInRight 1s ease-out;
        }

        .section-label {
          animation: fadeInDown 0.8s ease-out;
        }

        .section-heading {
          animation: fadeInUp 1s ease-out;
        }

        /* Timeline Item */
        .timeline-item {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .year-badge {
          transition: all 0.3s ease;
        }
        .timeline-item:hover .year-badge {
          transform: scale(1.1);
          text-shadow: 0 0 20px rgba(255,215,0,0.5);
        }

        /* Team Card */
        .team-card {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .team-card:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: rgba(255,215,0,0.4);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3), 0 0 30px rgba(255,215,0,0.1);
        }

        /* Avatar Glow */
        .avatar-glow {
          transition: all 0.4s ease;
        }
        .team-card:hover .avatar-glow {
          animation: glow 2s infinite;
          transform: scale(1.1);
        }

        /* Specialty Tag */
        .specialty-tag {
          transition: all 0.3s ease;
        }
        .team-card:hover .specialty-tag {
          background-color: rgba(255,215,0,0.2);
          color: #FFD700;
        }

        /* Value Card */
        .value-card {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .value-card:hover {
          transform: translateY(-10px) scale(1.03);
          border-color: rgba(255,215,0,0.5);
          box-shadow: 0 30px 60px rgba(0,0,0,0.3), 0 0 40px rgba(255,215,0,0.15);
        }

        /* Icon Bounce */
        .icon-bounce {
          transition: all 0.3s ease;
        }
        .value-card:hover .icon-bounce {
          animation: iconBounce 0.5s ease;
          transform: scale(1.2);
        }

        /* Achievement Card */
        .achievement-card {
          animation: borderGlow 3s infinite;
        }

        /* CTA Rings */
        .cta-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(255,215,0,0.1);
          border-radius: 50%;
          animation: ringPulse 4s ease-in-out infinite;
        }
        .ring-1 {
          width: 300px;
          height: 300px;
        }
        .ring-2 {
          width: 500px;
          height: 500px;
          animation-delay: 0.5s;
        }
        .ring-3 {
          width: 700px;
          height: 700px;
          animation-delay: 1s;
        }

        /* Button Glow */
        .btn-glow {
          transition: all 0.4s ease;
          box-shadow: 0 20px 40px rgba(255,215,0,0.3);
        }
        .btn-glow:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 30px 60px rgba(255,215,0,0.5);
        }
        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: 0.5s;
        }
        .btn-glow:hover::before {
          left: 100%;
        }

        /* WhatsApp Button */
        .btn-whatsapp {
          transition: all 0.4s ease;
          box-shadow: 0 15px 30px rgba(37,211,102,0.3);
        }
        .btn-whatsapp:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 25px 50px rgba(37,211,102,0.4);
        }

        /* Shimmer Text */
        .shimmer-text {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        /* ========== RESPONSIVE ========== */
        body {
          overflow-x: hidden !important;
        }

        .mobile-menu-btn {
          display: none !important;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
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
          }
          
          .hero-heading {
            font-size: 42px !important;
            text-align: center !important;
            line-height: 1.1 !important;
          }
          
          .hero-subtitle {
            font-size: 16px !important;
            margin: 0 auto 30px !important;
            text-align: center !important;
          }
          
          .stats-row {
            justify-content: center !important;
            gap: 30px !important;
          }
          
          .stat-item {
            text-align: center !important;
          }
          
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .section-heading {
            font-size: 32px !important;
            text-align: center !important;
          }
          
          .team-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
          
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .cta-content {
            padding: 40px 20px !important;
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
          
          .cta-ring {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 32px !important;
          }
          
          .stat-item div:first-child {
            font-size: 32px !important;
          }
          
          .section-heading {
            font-size: 28px !important;
          }
          
          .cta-heading {
            font-size: 28px !important;
          }
          
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-heading {
            font-size: 56px !important;
          }
          
          .team-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .values-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px !important;
          }
        }
      `}</style>
    </div>
  )
}
'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  // ✅ NEW: Added submitStatus for Formspree
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // ✅ UPDATED: handleSubmit with Formspree integration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/xreanlnr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          _subject: `New Project Inquiry from ${formData.name}`,
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          message: ''
        })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '18px 25px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '15px',
    color: 'white',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s'
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif',
      overflowX: 'hidden',
      position: 'relative'
    }}>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '80px',
        paddingBottom: '60px',
        position: 'relative'
      }}>
        {/* Glow Orb */}
        <div className="glow-orb" style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ width: '100%', padding: '0 5%', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="hero-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '80px', 
              alignItems: 'center',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}>
              {/* Left Content */}
              <div className="hero-content">
                <div className="hero-badge pulse-badge" style={{
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
                    FREE CONSULTATION
                  </span>
                </div>

                <h1 className="hero-heading" style={{
                  fontSize: '72px',
                  fontWeight: '900',
                  color: 'white',
                  lineHeight: '1',
                  marginBottom: '30px',
                  letterSpacing: '-3px'
                }}>
                  LET'S BUILD
                  <br />
                  <span className="gradient-text" style={{
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>TOGETHER</span>
                </h1>

                <p className="hero-subtitle" style={{
                  fontSize: '20px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '40px',
                  lineHeight: '1.6',
                  maxWidth: '500px'
                }}>
                  Ready to start your project? Get in touch with our team for a 
                  free consultation and let us bring your vision to life.
                </p>

                {/* Quick Contact Options */}
                <div className="quick-contacts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <a
                    href="https://wa.me/8801958140774"
                    target="_blank"
                    className="btn-whatsapp"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px 30px',
                      backgroundColor: '#25D366',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '16px',
                      width: 'fit-content',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <span style={{ fontSize: '24px', position: 'relative', zIndex: 2 }}>💬</span>
                    <span style={{ position: 'relative', zIndex: 2 }}>WHATSAPP NOW</span>
                    <span style={{ marginLeft: 'auto', fontSize: '18px', position: 'relative', zIndex: 2 }}>→</span>
                  </a>

                  <a
                    href="tel:+8801958140774"
                    className="btn-call"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px 30px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '16px',
                      width: 'fit-content'
                    }}
                  >
                    <span style={{ fontSize: '24px' }}>📞</span>
                    +880 1958-140774
                  </a>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="why-choose floating-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '30px',
                padding: '50px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: '800', 
                  color: 'white', 
                  marginBottom: '40px',
                  textAlign: 'center'
                }}>
                  Why Choose <span style={{ color: '#FFD700' }}>Us?</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  {[
                    { icon: '⚡', title: '24-Hour Response', desc: 'We respond within 24 hours' },
                    { icon: '🏆', title: '100% Success Rate', desc: '530+ approved projects' },
                    { icon: '🔒', title: 'No Obligation', desc: 'Free consultation, no pressure' },
                    { icon: '👨‍💼', title: 'Expert Team', desc: 'Licensed architects & engineers' }
                  ].map((item, idx) => (
                    <div key={idx} className="feature-card" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '20px',
                      backgroundColor: 'rgba(255,215,0,0.05)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255,215,0,0.1)'
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        flexShrink: 0,
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,165,0,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px'
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '3px' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="fade-in-section" style={{ padding: '100px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            {/* Left - Form */}
            <div className="form-section">
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                backgroundColor: 'rgba(255,215,0,0.1)',
                borderRadius: '30px',
                marginBottom: '25px'
              }}>
                <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                  PROJECT INQUIRY
                </span>
              </div>

              <h2 className="form-heading" style={{
                fontSize: '48px',
                fontWeight: '900',
                color: 'white',
                marginBottom: '20px',
                letterSpacing: '-1px'
              }}>
                Tell Us About
                <br />
                <span style={{ color: '#FFD700' }}>Your Project</span>
              </h2>

              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '40px',
                lineHeight: '1.6'
              }}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="form-input"
                    style={{
                      ...inputStyle,
                      color: formData.projectType ? 'white' : 'rgba(255,255,255,0.5)',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#0F0F0F' }}>Project Type</option>
                    <option value="residential" style={{ backgroundColor: '#0F0F0F' }}>Residential</option>
                    <option value="commercial" style={{ backgroundColor: '#0F0F0F' }}>Commercial</option>
                    <option value="interior" style={{ backgroundColor: '#0F0F0F' }}>Interior Design</option>
                    <option value="renovation" style={{ backgroundColor: '#0F0F0F' }}>Renovation</option>
                    <option value="consultation" style={{ backgroundColor: '#0F0F0F' }}>Consultation Only</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-input"
                    style={{
                      ...inputStyle,
                      color: formData.budget ? 'white' : 'rgba(255,255,255,0.5)',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#0F0F0F' }}>Estimated Budget</option>
                    <option value="below-50" style={{ backgroundColor: '#0F0F0F' }}>Below ৳50 Lac</option>
                    <option value="50-1cr" style={{ backgroundColor: '#0F0F0F' }}>৳50 Lac - 1 Cr</option>
                    <option value="1cr-5cr" style={{ backgroundColor: '#0F0F0F' }}>৳1 Cr - 5 Cr</option>
                    <option value="above-5cr" style={{ backgroundColor: '#0F0F0F' }}>Above ৳5 Cr</option>
                  </select>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project... (location, size, requirements)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-input"
                    style={{
                      ...inputStyle,
                      resize: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit"
                  style={{
                    width: '100%',
                    padding: '20px',
                    background: isSubmitting 
                      ? 'rgba(255,215,0,0.5)' 
                      : 'linear-gradient(135deg, #FFD700, #FFA500)',
                    border: 'none',
                    borderRadius: '15px',
                    color: '#0A0A0A',
                    fontWeight: '800',
                    fontSize: '16px',
                    letterSpacing: '1px',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  {!isSubmitting && <span style={{ fontSize: '20px', position: 'relative', zIndex: 2 }}>→</span>}
                </button>

                {/* ✅ NEW: Success Message */}
                {submitStatus === 'success' && (
                  <div style={{
                    marginTop: '20px',
                    padding: '20px',
                    backgroundColor: 'rgba(0,255,0,0.1)',
                    border: '2px solid rgba(0,255,0,0.3)',
                    borderRadius: '15px',
                    textAlign: 'center',
                    animation: 'fadeInUp 0.5s ease-out'
                  }}>
                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>✅</div>
                    <div style={{ color: '#00ff00', fontWeight: '700', fontSize: '18px', marginBottom: '5px' }}>
                      Message Sent Successfully!
                    </div>
                    <div style={{ color: 'rgba(0,255,0,0.7)', fontSize: '14px' }}>
                      We'll get back to you within 24 hours.
                    </div>
                  </div>
                )}

                {/* ✅ NEW: Error Message */}
                {submitStatus === 'error' && (
                  <div style={{
                    marginTop: '20px',
                    padding: '20px',
                    backgroundColor: 'rgba(255,0,0,0.1)',
                    border: '2px solid rgba(255,0,0,0.3)',
                    borderRadius: '15px',
                    textAlign: 'center',
                    animation: 'fadeInUp 0.5s ease-out'
                  }}>
                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>❌</div>
                    <div style={{ color: '#ff0000', fontWeight: '700', fontSize: '18px', marginBottom: '5px' }}>
                      Failed to Send Message
                    </div>
                    <div style={{ color: 'rgba(255,0,0,0.7)', fontSize: '14px' }}>
                      Please try again or contact us directly via WhatsApp.
                    </div>
                  </div>
                )}

                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.4)',
                  textAlign: 'center',
                  marginTop: '20px'
                }}>
                  ✓ Free consultation • ✓ No obligation • ✓ Response within 24 hours
                </p>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="info-section">
              <div className="info-card" style={{
                background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.05))',
                borderRadius: '30px',
                padding: '50px',
                border: '1px solid rgba(255,215,0,0.2)',
                marginBottom: '30px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Info Glow */}
                <div className="info-glow"></div>

                <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '30px', position: 'relative', zIndex: 2 }}>
                  Contact <span style={{ color: '#FFD700' }}>Information</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative', zIndex: 2 }}>
                  {[
                    { icon: '📍', title: 'Office Address', content: 'Kazlar par, Jatrabari\nDhaka 1204\nBangladesh' },
                    { icon: '📞', title: 'Phone', content: '+880 1958-140774' },
                    { icon: '✉️', title: 'Email', content: 'contact@insaflimited.com' },
                    { icon: '🕐', title: 'Office Hours', content: 'Saturday - Thursday: 9:00 AM - 6:00 PM\nFriday: Closed' }
                  ].map((item, idx) => (
                    <div key={idx} className="contact-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '15px',
                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        flexShrink: 0
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
                  Follow Us
                </h4>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="social-btn"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255,215,0,0.1)',
                        border: '1px solid rgba(255,215,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFD700',
                        fontSize: '14px',
                        fontWeight: '700',
                        textDecoration: 'none'
                      }}
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / CTA SECTION */}
      <section className="fade-in-section" style={{
        padding: '100px 5%',
        backgroundColor: '#0A0A0A',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.08), transparent 60%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* CTA Rings */}
        <div className="cta-ring ring-1"></div>
        <div className="cta-ring ring-2"></div>

        <div className="final-cta" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 className="cta-heading" style={{
            fontSize: '48px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '25px',
            letterSpacing: '-1px'
          }}>
            Ready to Start?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '40px'
          }}>
            Join 530+ satisfied clients who trusted us with their vision.
          </p>

          <div className="cta-buttons-final" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/8801958140774"
              target="_blank"
              className="btn-whatsapp"
              style={{
                padding: '20px 40px',
                backgroundColor: '#25D366',
                borderRadius: '50px',
                color: 'white',
                fontWeight: '800',
                fontSize: '16px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              💬 WHATSAPP NOW
            </a>
            <a
              href="tel:+8801958140774"
              className="btn-glow"
              style={{
                padding: '20px 40px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                borderRadius: '50px',
                color: '#0A0A0A',
                fontWeight: '800',
                fontSize: '16px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>📞 CALL NOW</span>
            </a>
          </div>

          <div style={{ marginTop: '40px', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
            <span style={{ color: '#FFD700' }}>✓</span> No obligation 
            <span style={{ margin: '0 15px' }}>•</span>
            <span style={{ color: '#FFD700' }}>✓</span> 100% RAJUK success rate
            <span style={{ margin: '0 15px' }}>•</span>
            <span style={{ color: '#FFD700' }}>✓</span> In-house engineers
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        /* ========== KEYFRAME ANIMATIONS ========== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(0, -40px) scale(1); }
          75% { transform: translate(-20px, -20px) scale(0.9); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes ringPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.1; }
          100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        /* ========== ELEMENT ANIMATIONS ========== */
        
        .glow-orb {
          animation: orbFloat 8s ease-in-out infinite;
        }

        .pulse-dot {
          animation: pulse 2s infinite;
        }

        .pulse-badge {
          animation: fadeInUp 0.6s ease-out;
        }

        .gradient-text {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .floating-card {
          animation: float 5s ease-in-out infinite;
        }

        .fade-in-section {
          animation: fadeInUp 1s ease-out;
        }

        .info-glow {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,215,0,0.2), transparent);
          borderRadius: 50%;
          filter: blur(40px);
          animation: glow 6s ease-in-out infinite;
        }

        .cta-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(255,215,0,0.1);
          border-radius: 50%;
          animation: ringPulse 4s ease-in-out infinite;
          pointer-events: none;
        }

        .ring-1 {
          width: 400px;
          height: 400px;
        }

        .ring-2 {
          width: 600px;
          height: 600px;
          animation-delay: 0.5s;
        }

        /* ========== HOVER EFFECTS ========== */
        
        .btn-whatsapp {
          transition: all 0.4s ease;
          box-shadow: 0 15px 30px rgba(37,211,102,0.3);
        }

        .btn-whatsapp:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 25px 50px rgba(37,211,102,0.4);
        }

        .btn-call {
          transition: all 0.3s ease;
        }

        .btn-call:hover {
          background-color: rgba(255,255,255,0.1);
          transform: translateY(-3px);
        }

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

        .btn-submit {
          transition: all 0.4s ease;
          box-shadow: 0 20px 40px rgba(255,215,0,0.3);
        }

        .btn-submit:not(:disabled):hover {
          transform: translateY(-3px);
          box-shadow: 0 25px 50px rgba(255,215,0,0.4);
        }

        .feature-card {
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateX(5px);
          background-color: rgba(255,215,0,0.1);
        }

        .contact-item {
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
        }

        .social-btn {
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background-color: rgba(255,215,0,0.2);
          transform: translateY(-3px);
        }

        .form-input {
          transition: all 0.3s ease;
        }

        .form-input:focus {
          box-shadow: 0 0 20px rgba(255,215,0,0.2);
        }

        /* ========== RESPONSIVE ========== */
        body {
          overflow-x: hidden !important;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .hero-content {
            text-align: center !important;
          }
          
          .hero-badge {
            margin: 0 auto 20px !important;
          }
          
          .hero-heading {
            font-size: 42px !important;
            letter-spacing: -1px !important;
          }
          
          .hero-subtitle {
            margin: 0 auto 30px !important;
            font-size: 16px !important;
          }
          
          .quick-contacts {
            align-items: center !important;
          }
          
          .quick-contacts a {
            width: 100% !important;
            max-width: 350px !important;
          }
          
          .why-choose {
            padding: 30px 20px !important;
          }
          
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .form-heading {
            font-size: 32px !important;
            text-align: center !important;
          }
          
          .form-section > div:first-child {
            margin: 0 auto 20px !important;
          }
          
          .form-row {
            grid-template-columns: 1fr !important;
          }
          
          .info-section > div:first-child {
            padding: 30px 20px !important;
          }
          
          .final-cta {
            padding: 0 10px !important;
          }
          
          .cta-heading {
            font-size: 32px !important;
          }
          
          .cta-buttons-final {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .cta-buttons-final a {
            width: 100% !important;
            max-width: 300px !important;
            justify-content: center !important;
          }

          .glow-orb {
            display: none;
          }

          .cta-ring {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 32px !important;
          }
          
          .form-heading {
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
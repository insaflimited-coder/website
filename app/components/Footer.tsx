'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Subscribed:', email)
    setEmail('')
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Experts', href: '/experts' },
    { name: 'Blog', href: '/blog' },
  ]

  const services = [
    'Architectural Design',
    'Structural Engineering',
    'RAJUK Approval',
    'Interior Design',
    '3D Visualization',
    'Construction Management'
  ]

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: 'https://www.facebook.com/ibdcbd', color: '#1877F2' },    
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/company/insaflimited', color: '#0A66C2' },
    { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/8801958140774', color: '#25D366' },
  ]

  return (
    <footer style={{ 
      padding: '100px 5% 40px', 
      backgroundColor: '#000',
      borderTop: '2px solid rgba(255,215,0,0.3)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* ✅ Animated Background Orbs */}
      <div className="footer-orb-1" style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.08), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'floatOrb 15s ease-in-out infinite',
        pointerEvents: 'none'
      }} />
      
      <div className="footer-orb-2" style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(255,165,0,0.06), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'floatOrb 18s ease-in-out infinite reverse',
        pointerEvents: 'none'
      }} />

      {/* ✅ Decorative Top Border with Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '150px',
        height: '4px',
        background: 'linear-gradient(90deg, transparent, #FFD700, #FFA500, #FFD700, transparent)',
        borderRadius: '0 0 10px 10px',
        boxShadow: '0 0 20px rgba(255,215,0,0.6), 0 0 40px rgba(255,215,0,0.3)',
        animation: 'shimmerBorder 3s ease-in-out infinite'
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* ✅ Main Footer Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '60px',
          marginBottom: '80px'
        }}>
          
          {/* ✅ Company Info with Logo Animation */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <div style={{ marginBottom: '25px', position: 'relative' }}>
              {/* Logo Glow */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent 70%)',
                borderRadius: '20px',
                opacity: 0,
                transition: 'opacity 0.4s ease'
              }} className="logo-glow-footer" />
              
              <h3 style={{ 
                fontSize: '32px', 
                fontWeight: '900', 
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '5px',
                letterSpacing: '3px',
                animation: 'gradientShift 4s ease-in-out infinite',
                position: 'relative'
              }}>
                INSAF
              </h3>
              <p style={{ 
                color: '#FFD700', 
                fontSize: '11px', 
                letterSpacing: '4px',
                marginTop: '-2px',
                fontWeight: '600'
              }}>
                BUILDING DESIGN & CONSULTANT
              </p>
            </div>
            
            <p style={{ 
              color: 'rgba(255,255,255,0.6)', 
              fontSize: '14px',
              lineHeight: '1.9',
              marginBottom: '25px',
              maxWidth: '300px'
            }}>
              Creating Architectural Excellence Since 2018 We turn visions into reality through innovative designs, structural expertise, and sustainable solutions. 
<span style={{ color: '#FFD700' }}> 530+ projects</span> delivered successfully.
            </p>
            
            {/* ✅ Social Links with Enhanced Hover */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '25px' }}>
              {socialLinks.map((social, idx) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    textDecoration: 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: `fadeInUp 0.6s ease-out ${0.3 + idx * 0.1}s backwards`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)'
                    e.currentTarget.style.boxShadow = `0 15px 30px ${social.color}50`
                    e.currentTarget.style.border = `1px solid ${social.color}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* ✅ Quick Links with Animated Arrow */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}>
            <h4 style={{ 
              color: '#FFD700', 
              marginBottom: '30px', 
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '2px',
              position: 'relative',
              display: 'inline-block'
            }}>
              QUICK LINKS
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, #FFD700, transparent)',
                borderRadius: '3px'
              }} />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {quickLinks.map((link, idx) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: 'fit-content',
                    position: 'relative',
                    animation: `slideInLeft 0.5s ease-out ${0.4 + idx * 0.08}s backwards`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFD700'
                    e.currentTarget.style.paddingLeft = '15px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                    e.currentTarget.style.paddingLeft = '0'
                  }}
                >
                  <span style={{ 
                    fontSize: '10px', 
                    opacity: 0.5,
                    transition: 'all 0.3s ease'
                  }}>→</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ✅ Services Links */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.3s backwards' }}>
            <h4 style={{ 
              color: '#FFD700', 
              marginBottom: '30px', 
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '2px',
              position: 'relative',
              display: 'inline-block'
            }}>
              SERVICES
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, #FFD700, transparent)',
                borderRadius: '3px'
              }} />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {services.map((service, idx) => (
                <Link 
                  key={service}
                  href="/services"
                  className="footer-link"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: 'fit-content',
                    animation: `slideInLeft 0.5s ease-out ${0.5 + idx * 0.08}s backwards`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFD700'
                    e.currentTarget.style.paddingLeft = '15px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                    e.currentTarget.style.paddingLeft = '0'
                  }}
                >
                  <span style={{ fontSize: '10px', opacity: 0.5 }}>→</span>
                  {service}
                </Link>
              ))}
            </div>
          </div>
          
          {/* ✅ Contact Info with Icons */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.4s backwards' }}>
            <h4 style={{ 
              color: '#FFD700', 
              marginBottom: '30px', 
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '2px',
              position: 'relative',
              display: 'inline-block'
            }}>
              CONTACT US
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, #FFD700, transparent)',
                borderRadius: '3px'
              }} />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Phone */}
              <a 
                href="tel:+8801958140774"
                className="contact-link"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease',
                  padding: '12px 15px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700'
                  e.currentTarget.style.background = 'rgba(255,215,0,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)'
                  e.currentTarget.style.transform = 'translateX(5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span style={{ 
                  fontSize: '18px',
                  width: '35px',
                  height: '35px',
                  background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(79,172,254,0.3)'
                }}>📞</span>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '3px' }}>CALL US</div>
                  <div style={{ fontWeight: '600' }}>+880 1958-140774</div>
                </div>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:contact@insaflimited.com"
                className="contact-link"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease',
                  padding: '12px 15px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700'
                  e.currentTarget.style.background = 'rgba(255,215,0,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)'
                  e.currentTarget.style.transform = 'translateX(5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span style={{ 
                  fontSize: '18px',
                  width: '35px',
                  height: '35px',
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(240,147,251,0.3)'
                }}>✉️</span>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '3px' }}>EMAIL</div>
                  <div style={{ fontWeight: '600' }}>contact@insaflimited.com</div>
                </div>
              </a>
              
              {/* Location */}
              <div style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '12px 15px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <span style={{ 
                  fontSize: '18px',
                  width: '35px',
                  height: '35px',
                  background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 20px rgba(67,233,123,0.3)'
                }}>📍</span>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '3px' }}>ADDRESS</div>
                  <div style={{ lineHeight: '1.6', fontWeight: '500' }}>
                    Kazlar par, Jatrabari<br/>
                    Dhaka 1204, Bangladesh
                  </div>
                </div>
              </div>

              {/* ✅ GET DIRECTIONS BUTTON */}
              <button 
                onClick={() => window.open('https://maps.app.goo.gl/6KuYrT1nowS4nao46', '_blank')}
                className="directions-btn"
                style={{
                  padding: '14px 25px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '30px',
                  color: '#000',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  marginTop: '10px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 10px 30px rgba(255,215,0,0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,215,0,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,215,0,0.3)'
                }}
              >
                {/* Shine Effect */}
                <div className="btn-shine" style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  transition: 'left 0.6s ease'
                }} />
                
                <span style={{ fontSize: '16px', position: 'relative', zIndex: 1 }}>🗺️</span>
                <span style={{ position: 'relative', zIndex: 1 }}>GET DIRECTIONS</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* ✅ Bottom Bar with Enhanced Design */}
        <div style={{ 
          paddingTop: '40px', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '25px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Mini Logo */}
            <div style={{
              width: '35px',
              height: '35px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              color: '#000',
              fontSize: '18px',
              boxShadow: '0 5px 15px rgba(255,215,0,0.3)'
            }}>
              I
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '13px'
            }}>
              © 2024 <span style={{ color: 'rgba(255,255,255,0.6)' }}>INSAF LIMITED</span>. All rights reserved.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link 
              href="/privacy" 
              style={{ 
                color: 'rgba(255,255,255,0.4)', 
                fontSize: '13px', 
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              style={{ 
                color: 'rgba(255,255,255,0.4)', 
                fontSize: '13px', 
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              Terms of Service
            </Link>
            <Link 
              href="/sitemap" 
              style={{ 
                color: 'rgba(255,255,255,0.4)', 
                fontSize: '13px', 
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              Sitemap
            </Link>
          </div>
        </div>

        {/* ✅ Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            border: 'none',
            color: '#000',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(255,215,0,0.4)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 100
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)'
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,215,0,0.6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,215,0,0.4)'
          }}
        >
          ↑
        </button>
      </div>

      {/* ✅ CSS Animations */}
      <style jsx global>{`
        /* Floating Orbs */
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        /* Shimmer Border */
        @keyframes shimmerBorder {
          0%, 100% { 
            opacity: 0.6;
            box-shadow: 0 0 20px rgba(255,215,0,0.4);
          }
          50% { 
            opacity: 1;
            box-shadow: 0 0 40px rgba(255,215,0,0.8);
          }
        }

        /* Gradient Shift */
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        /* Fade In Up */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slide In Left */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Button Shine */
        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }

        /* Directions Button Hover */
        .directions-btn:hover .btn-shine {
          left: 100% !important;
        }

        /* Logo Hover */
        .logo-glow-footer:hover {
          opacity: 1 !important;
        }

        /* Newsletter Input Focus */
        .newsletter-input:focus + .input-glow {
          opacity: 1 !important;
        }

        /* Responsive */
        @media (max-width: 768px) {
          footer > div > div:first-child {
            gap: 40px !important;
            grid-template-columns: 1fr !important;
            padding: 30px 5% 40px !important;
          }
          
          .back-to-top {
            bottom: 20px !important;
            right: 20px !important;
            width: 45px !important;
            height: 45px !important;
          }

          .footer-main {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          .company-info,
          .quick-links,
          .services,
          .contact-info {
            text-align: left !important;
          }

          .contact-link,
          .location-info {
            justify-content: flex-start !important;
            text-align: left !important;
          }

          .social-links {
            justify-content: flex-start !important;
          }

          .footer-bottom {
            flex-direction: column !important;
            gap: 20px !important;
            text-align: center !important;
          }

          .footer-bottom-left,
          .footer-bottom-right {
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          footer > div > div:first-child {
            padding: 20px 5% 30px !important;
          }

          .company-logo h3 {
            font-size: 28px !important;
          }

          .company-subtitle {
            font-size: 10px !important;
          }

          .footer-links h4 {
            font-size: 13px !important;
          }

          .footer-link {
            font-size: 13px !important;
          }

          .contact-link {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }

          .contact-link .icon {
            width: 30px !important;
            height: 30px !important;
            font-size: 16px !important;
          }

          .contact-link .title {
            font-size: 10px !important;
          }

          .contact-link .content {
            font-size: 13px !important;
          }

          .location-info {
            padding: 10px 12px !important;
          }

          .location-info .icon {
            width: 30px !important;
            height: 30px !important;
            font-size: 16px !important;
          }

          .social-link {
            width: 40px !important;
            height: 40px !important;
            font-size: 18px !important;
          }

          .directions-btn {
            padding: 12px 20px !important;
            font-size: 12px !important;
          }

          .footer-bottom p {
            font-size: 12px !important;
          }

          .footer-bottom .links {
            gap: 20px !important;
          }

          .footer-bottom .links a {
            font-size: 12px !important;
          }

          .back-to-top {
            width: 40px !important;
            height: 40px !important;
            font-size: 18px !important;
          }

          /* Touch-friendly targets */
          .social-link,
          .directions-btn,
          .back-to-top {
            min-width: 44px !important;
            min-height: 44px !important;
          }
        }
      `}</style>
    </footer>
  )
}
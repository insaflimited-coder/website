'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsMenuOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'EXPERTS', href: '/experts' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'BLOG', href: '/blog' },
    { name: 'PRICES', href: '/prices' },
  ]

  const orbPositions = [
    { top: '20%', left: '10%', size: '300px', delay: '0s' },
    { top: '60%', right: '10%', size: '250px', delay: '0.5s' }
  ]

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: scrolled ? '10px' : '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: scrolled ? '1px solid rgba(255,215,0,0.3)' : '1px solid rgba(255,255,255,0.1)',
        padding: '15px 30px',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: scrolled 
          ? '0 10px 40px rgba(0,0,0,0.5), 0 0 80px rgba(255,215,0,0.15)' 
          : '0 5px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* LOGO */}
          <Link href="/" style={{ textDecoration: 'none', position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="logo-glow" style={{
              position: 'absolute',
              inset: '-8px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.2), transparent 70%)',
              borderRadius: '20px',
              opacity: 0,
              transition: 'opacity 0.4s ease',
              pointerEvents: 'none'
            }}></div>

            {!logoError ? (
              <div style={{ position: 'relative' }}>
                <Image 
                  src="/logo.png" 
                  alt="INSAF Logo" 
                  width={45} 
                  height={45}
                  style={{
                    borderRadius: '12px',
                    objectFit: 'contain',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.3))'
                  }}
                  className="logo-image"
                  onError={() => setLogoError(true)}
                  priority
                />
                <div className="logo-ring" style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '15px',
                  border: '2px solid transparent',
                  borderTopColor: '#FFD700',
                  borderRightColor: '#FFD700',
                  opacity: 0,
                  transition: 'opacity 0.4s ease'
                }}></div>
              </div>
            ) : (
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0A0A0A',
                boxShadow: '0 8px 20px rgba(255,215,0,0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              className="logo-fallback">
                I
              </div>
            )}

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ 
                fontSize: '19px', 
                fontWeight: '900', 
                background: 'linear-gradient(135deg, #fff, #e0e0e0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '2px',
                transition: 'all 0.4s ease'
              }}
              className="logo-text">
                INSAF BUILDING
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: '#FFD700', 
                letterSpacing: '3px', 
                marginTop: '-2px',
                transition: 'all 0.4s ease'
              }}>
                Design & Consultant Ltd
              </div>
              <div className="logo-underline" style={{
                height: '2px',
                background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                borderRadius: '2px',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}></div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="desktop-menu" style={{ display: 'flex', gap: '25px', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ color: pathname === link.href ? '#FFD700' : 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'all 0.3s ease', position: 'relative', padding: '8px 0' }} className="nav-link">
                {link.name}
                {pathname === link.href && <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '3px', backgroundColor: '#FFD700', borderRadius: '10px', boxShadow: '0 0 10px rgba(255,215,0,0.6)' }}/>}
                <span className="nav-underline" style={{ position: 'absolute', bottom: '0', left: '0', width: '0', height: '2px', backgroundColor: 'rgba(255,215,0,0.5)', borderRadius: '2px', transition: 'width 0.3s ease' }}/>
                <span className="nav-glow" style={{ position: 'absolute', inset: '-8px', background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent 70%)', borderRadius: '8px', opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}/>
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <Link href="/contact" className="desktop-button" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '12px 25px', background: 'linear-gradient(135deg, #FFD700, #FFA500)', border: 'none', borderRadius: '30px', color: '#0A0A0A', fontWeight: '700', fontSize: '13px', letterSpacing: '1px', cursor: 'pointer', boxShadow: '0 8px 25px rgba(255,215,0,0.4)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden' }} className="cta-button">
              <div style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)', transition: 'left 0.6s ease' }} className="button-shine"></div>
              <span style={{ position: 'relative', zIndex: 1 }}>START PROJECT →</span>
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '10px', zIndex: 1001, position: 'relative' }} aria-label="Toggle Menu" aria-expanded={isMenuOpen}>
            <span style={{ width: '25px', height: '3px', backgroundColor: '#FFD700', borderRadius: '10px', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none', boxShadow: '0 0 8px rgba(255,215,0,0.5)' }}/>
            <span style={{ width: '25px', height: '3px', backgroundColor: '#FFD700', borderRadius: '10px', transition: 'all 0.3s ease', opacity: isMenuOpen ? 0 : 1, boxShadow: '0 0 8px rgba(255,215,0,0.5)' }}/>
            <span style={{ width: '25px', height: '3px', backgroundColor: '#FFD700', borderRadius: '10px', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none', boxShadow: '0 0 8px rgba(255,215,0,0.5)' }}/>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: 'radial-gradient(circle at center, rgba(10,10,10,0.98), rgba(0,0,0,1))', backdropFilter: 'blur(20px)', zIndex: 999, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px', opacity: isMenuOpen ? 1 : 0, visibility: isMenuOpen ? 'visible' : 'hidden', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: isMenuOpen ? 'auto' : 'none'}} onClick={() => setIsMenuOpen(false)}>
        {isMenuOpen && orbPositions.map((orb, idx) => (
          <div key={idx} style={{ position: 'absolute', top: orb.top, left: orb.left, right: orb.right, width: orb.size, height: orb.size, background: 'radial-gradient(circle, rgba(255,215,0,0.1), transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', animation: `floatOrb 8s ease-in-out ${orb.delay} infinite`}}/>
        ))}

        <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', zIndex: 2 }}>
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} style={{ display: 'block', textAlign: 'center', color: pathname === link.href ? '#FFD700' : 'white', textDecoration: 'none', fontSize: '28px', fontWeight: '700', letterSpacing: '3px', margin: '15px 0', padding: '10px 30px', borderRadius: '12px', background: pathname === link.href ? 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.1))' : 'transparent', border: pathname === link.href ? '1px solid rgba(255,215,0,0.3)' : '1px solid transparent', transform: isMenuOpen ? 'translateY(0)' : 'translateY(30px)', opacity: isMenuOpen ? 1 : 0, transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`, position: 'relative', overflow: 'hidden'}} className="mobile-nav-link">
              {pathname === link.href && <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '4px', height: '60%', background: 'linear-gradient(180deg, #FFD700, #FFA500)', borderRadius: '4px', boxShadow: '0 0 15px rgba(255,215,0,0.6)'}}/>}
              {link.name}
            </Link>
          ))}

          <Link href="/contact" onClick={() => setIsMenuOpen(false)} style={{ display: 'block', textAlign: 'center' }}>
            <button style={{ marginTop: '30px', padding: '18px 45px', background: 'linear-gradient(135deg, #FFD700, #FFA500)', border: 'none', borderRadius: '35px', color: '#0A0A0A', fontWeight: '700', fontSize: '16px', letterSpacing: '2px', cursor: 'pointer', boxShadow: '0 15px 40px rgba(255,215,0,0.4)', transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)', opacity: isMenuOpen ? 1 : 0, transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.7s', position: 'relative', overflow: 'hidden'}} className="mobile-cta">
              <div style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)', animation: isMenuOpen ? 'shine 2s ease-in-out infinite' : 'none'}}></div>
              <span style={{ position: 'relative', zIndex: 1 }}>START PROJECT →</span>
            </button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        a:hover .logo-glow { opacity: 1 !important; }
        a:hover .logo-image { transform: scale(1.1) rotate(5deg) !important; }
        a:hover .logo-fallback { transform: scale(1.1) rotate(5deg) !important; }
        a:hover .logo-ring { opacity: 1 !important; animation: spin 2s linear infinite; }
        a:hover .logo-underline { transform: scaleX(1) !important; }
        .nav-link:hover { color: #FFD700 !important; }
        .nav-link:hover .nav-underline { width: 100% !important; }
        .nav-link:hover .nav-glow { opacity: 1 !important; }
        .cta-button:hover { transform: translateY(-3px) scale(1.05) !important; box-shadow: 0 15px 40px rgba(255,215,0,0.6) !important; }
        .cta-button:hover .button-shine { left: 100% !important; }
        .mobile-menu-btn:active .button-ripple { transform: scale(1) !important; }
        .mobile-nav-link:hover { background: linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,165,0,0.15)) !important; border-color: rgba(255,215,0,0.5) !important; transform: translateX(10px) !important; }
        .mobile-cta:hover { transform: translateY(-3px) scale(1.05) !important; box-shadow: 0 20px 50px rgba(255,215,0,0.5) !important; }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes floatOrb { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, -20px); } }
        @keyframes shine { 0% { left: -100%; } 20%, 100% { left: 100%; } }

        @media (max-width: 968px) {
          .desktop-menu { display: none !important; }
          .desktop-button { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 969px) {
          .mobile-menu-btn { display: none !important; }
        }
        html { scroll-behavior: smooth; }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </>
  )
}
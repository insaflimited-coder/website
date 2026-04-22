'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: '🏠 Floor Plan Only', href: '/floor-plan' },
        { name: '💰 Service Prices', href: '/service-prices' },
      ]
    },
    { name: 'Experts', href: '/experts' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-white/80 backdrop-blur-md shadow-lg'
      }`}
      style={{
        borderBottom: scrolled ? '1px solid rgba(255,215,0,0.2)' : '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {!logoError ? (
                <div className="relative">
                  <Image 
                    src="/logo.png" 
                    alt="INSAF Logo" 
                    width={48}
                    height={48}
                    className="rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10"
                    style={{ 
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.3))'
                    }}
                    onError={() => setLogoError(true)}
                    priority
                  />
                  <div className="absolute inset-0 rounded-lg border-2 border-yellow-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ animation: 'spin 3s linear infinite' }}></div>
                </div>
              ) : (
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ boxShadow: '0 10px 30px rgba(255,215,0,0.4)' }}>
                    I
                  </div>
                  <div className="absolute inset-0 bg-yellow-400/30 rounded-lg animate-pulse"></div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-500">
                    INSAF
                  </span>
                  <span className="text-2xl font-light text-gray-400 ml-1 group-hover:text-gray-600 transition-colors duration-300">
                    LIMITED
                  </span>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div key={link.href} className="relative group">
                  
                  {/* Normal link OR dropdown trigger */}
                  {link.dropdown ? (
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="relative flex items-center gap-1"
                      style={{
                        animation: `fadeInDown 0.6s ease-out ${index * 0.1}s backwards`
                      }}
                    >
                      <span className={`text-sm font-medium transition-all duration-300 ${
                        pathname === link.href || pathname.startsWith('/floor-plan') || pathname.startsWith('/service-prices')
                          ? 'text-black' 
                          : 'text-gray-600 group-hover:text-black'
                      }`}>
                        {link.name}
                      </span>
                      
                      {/* Arrow Icon */}
                      <svg 
                        className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>

                      {/* Active Indicator */}
                      {(pathname === link.href || pathname.startsWith('/floor-plan') || pathname.startsWith('/service-prices')) && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                          style={{ animation: 'slideIn 0.4s ease-out' }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="relative group"
                      style={{
                        animation: `fadeInDown 0.6s ease-out ${index * 0.1}s backwards`
                      }}
                    >
                      <span className={`text-sm font-medium transition-all duration-300 ${
                        pathname === link.href 
                          ? 'text-black' 
                          : 'text-gray-600 group-hover:text-black'
                      }`}>
                        {link.name}
                      </span>
                      
                      {pathname === link.href && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                          style={{ animation: 'slideIn 0.4s ease-out' }}
                        />
                      )}
                      
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
                        pathname !== link.href ? 'group-hover:w-full' : ''
                      }`} />
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && servicesOpen && (
                    <div 
                      className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      style={{
                        animation: 'dropdownOpen 0.3s ease-out',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,215,0,0.1)'
                      }}
                    >
                      {/* Dropdown Header */}
                      <div className="px-4 py-3 bg-gradient-to-r from-yellow-50 to-yellow-100/50 border-b border-yellow-100">
                        <p className="text-xs font-700 text-yellow-600 tracking-wider uppercase">Our Services</p>
                      </div>

                      {/* Main Services Link */}
                      <Link
                        href="/services"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-all duration-200 group border-b border-gray-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="text-lg">📋</span>
                        <div>
                          <p className={`text-sm font-600 transition-colors duration-200 ${
                            pathname === '/services' ? 'text-yellow-600' : 'text-gray-700 group-hover:text-black'
                          }`}>
                            All Services
                          </p>
                          <p className="text-xs text-gray-400">View all packages</p>
                        </div>
                        {pathname === '/services' && (
                          <span className="ml-auto text-yellow-500 text-xs">●</span>
                        )}
                      </Link>

                      {/* Dropdown Items */}
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-all duration-200 group border-b border-gray-50 last:border-0"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="text-lg">{item.name.split(' ')[0]}</span>
                          <div>
                            <p className={`text-sm font-600 transition-colors duration-200 ${
                              pathname === item.href ? 'text-yellow-600' : 'text-gray-700 group-hover:text-black'
                            }`}>
                              {item.name.substring(item.name.indexOf(' ') + 1)}
                            </p>
                          </div>
                          {pathname === item.href && (
                            <span className="ml-auto text-yellow-500 text-xs">●</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <Link 
                href="/contact" 
                className="relative bg-gradient-to-r from-black to-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden group"
                style={{
                  animation: 'fadeInDown 0.8s ease-out 0.6s backwards',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-all duration-300 relative group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="absolute inset-0 bg-yellow-400/20 rounded-lg scale-0 group-active:scale-100 transition-transform duration-300"></div>
              
              <svg 
                className="w-6 h-6 transition-transform duration-300 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Click Outside to Close Dropdown */}
        {servicesOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setServicesOpen(false)}
          />
        )}
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: menuOpen ? 'blur(8px)' : 'none'
        }}
        onClick={() => setMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transition-all duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ borderLeft: '2px solid rgba(255,215,0,0.2)' }}
        >
          <div className="flex flex-col h-full pt-24 px-6 pb-6 overflow-y-auto">
            
            <div className="flex flex-col space-y-1 flex-1">
              {navLinks.map((link, index) => (
                <div key={link.href}>
                  {/* Main Link */}
                  <Link 
                    href={link.href} 
                    className={`relative py-4 px-4 text-lg font-medium rounded-xl transition-all duration-300 group flex items-center justify-between ${
                      pathname === link.href
                        ? 'bg-gradient-to-r from-yellow-50 to-yellow-100/50 text-black'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => !link.dropdown && setMenuOpen(false)}
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                      transition: `all 0.5s ease-out ${menuOpen ? index * 0.1 : 0}s`
                    }}
                  >
                    {pathname === link.href && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-r-full"
                        style={{ animation: 'slideInLeft 0.4s ease-out' }}
                      ></div>
                    )}
                    
                    <span className="relative z-10">{link.name}</span>
                    
                    {link.dropdown && (
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>

                  {/* Mobile Dropdown Items */}
                  {link.dropdown && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className={`py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300 flex items-center gap-2 ${
                            pathname === item.href
                              ? 'bg-yellow-50 text-yellow-600'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                          }`}
                          onClick={() => setMenuOpen(false)}
                          style={{
                            opacity: menuOpen ? 1 : 0,
                            transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                            transition: `all 0.5s ease-out ${menuOpen ? (index + idx + 1) * 0.08 : 0}s`
                          }}
                        >
                          <span>{item.name.split(' ')[0]}</span>
                          <span>{item.name.substring(item.name.indexOf(' ') + 1)}</span>
                          {pathname === item.href && (
                            <span className="ml-auto text-yellow-500">●</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <Link 
              href="/contact" 
              className="relative bg-gradient-to-r from-black via-gray-800 to-black text-white px-6 py-4 rounded-full text-center font-medium shadow-lg overflow-hidden group"
              onClick={() => setMenuOpen(false)}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out 0.6s'
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

            {/* Mobile Footer */}
            <div className="mt-6 pt-6 border-t border-gray-200"
              style={{
                opacity: menuOpen ? 1 : 0,
                transition: 'opacity 0.8s ease-out 0.8s'
              }}>
              <p className="text-sm text-gray-500 text-center">© 2024 INSAF LIMITED</p>
              <div className="flex justify-center gap-4 mt-3">
                {['F', 'I', 'L', 'Y'].map((social, idx) => (
                  <div key={idx} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300 cursor-pointer"
                    style={{
                      animation: menuOpen ? `fadeIn 0.5s ease-out ${1 + idx * 0.1}s backwards` : 'none'
                    }}>
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }
        @keyframes slideInLeft {
          from { height: 0; opacity: 0; }
          to { height: 2rem; opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dropdownOpen {
          from { opacity: 0; transform: translateY(-10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        html { scroll-behavior: smooth; }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </>
  )
}
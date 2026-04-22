'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Services() {
  const [activePackage, setActivePackage] = useState(0)
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('packages')

  const buildingPackages = [
    {
      id: 1,
      icon: '🏠',
      title: '1st to 3rd Floor / Duplex / Triplex',
      tagline: 'Residential Excellence',
      description: 'Complete building design solution for 1st to 3rd storied buildings including Duplex and Triplex. From architectural drawings to construction-ready printed documents.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea',
      categories: [
        {
          name: '🏛️ Architectural Design',
          items: [
            'Architectural Drawings (Floor Plan - layout of rooms, walls, doors & windows)',
            'Land Sketch',
            'Ground Floor Furniture Plan',
            'Ground Floor Door & Window Layout Mark',
            'Typical Floor Working Area Plan',
            'Typical Floor Furniture Plan',
            'Typical Floor Door & Window Layout',
            'Over Head Water Tank & Reserve Tank',
            'Building Section',
            'Stair Details',
            'Door, Window & Elevation Section Details',
            'Balcony & Window Details',
            'Door & Gate Details'
          ]
        },
        {
          name: '🏗️ Structural Design',
          items: [
            'Column Layout & Column Schedule',
            'Footing Layout & Footing Section Details',
            'Footing Schedule',
            'Underground Water Reserve Tank Layout & Section Details',
            'Grade Beam Layout & Section Details',
            'Stair Case Details',
            'Floor Beam Layout & Section Details',
            'Slab Reinforcement Details',
            'Over Head Water Tank Details'
          ]
        },
        {
          name: '⚡ Electric Design',
          items: [
            'Light Point & Fan Point',
            'Multi Socket & Wi-Fi Point',
            'Switch Board',
            'Sub Distribution Board',
            'Master Distribution Board',
            'C.C Camera Line'
          ]
        },
        {
          name: '🚿 Plumbing Design',
          items: [
            'Septic Tank & Water Treatment Plant',
            'Water Line Management',
            'Soil & Waste Water Line Management',
            'Roof Top Water Tank',
            'Underground Water Tank',
            'Side Duct Hole',
            'Rain Water Management'
          ]
        },
        {
          name: '💰 Costing & Estimating',
          items: [
            'Part by Part Estimation (Footing, Short Column, Grade Beam, Main Column, Slab etc.)',
            'R.C.C and Civil Work Building Estimate'
          ]
        },
        {
          name: '🥽 3D View',
          items: [
            'Front View',
            'Corner View',
            'Top View'
          ]
        },
        {
          name: '📋 Documents',
          items: [
            'Construction Ready Printed Documents'
          ]
        }
      ]
    },
    {
      id: 2,
      icon: '🏢',
      title: '4th to 5th Storied Building',
      tagline: 'Mid-Rise Mastery',
      description: 'Professional complete design package for 4th to 5th storied buildings. Includes Pile Foundation, Lift Section, Circuit Diagram, Arthin Design and Construction Consultancy.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb',
      categories: [
        {
          name: '🏛️ Architectural Design',
          items: [
            'Architectural Drawings (Floor Plan - layout of rooms, walls, doors & windows)',
            'Land Sketch',
            'Ground Floor Furniture Plan',
            'Ground Floor Door & Window Layout Mark',
            'Typical Floor Working Area Plan',
            'Typical Floor Furniture Plan',
            'Typical Floor Door & Window Layout',
            'Over Head Water Tank & Reserve Tank',
            'Building Section',
            'Lift Section',
            'Stair Details',
            'Door, Window & Elevation Section Details',
            'Balcony & Window Details',
            'Door & Gate Details'
          ]
        },
        {
          name: '🏗️ Structural Design',
          items: [
            'Column Layout & Column Schedule',
            'Footing/Pile Point Layout & Section Details',
            'Footing/Pile Cap Layout & Schedule',
            'Underground Water Reserve Tank Layout & Section Details',
            'Grade Beam Layout & Section Details',
            'Stair Case Details',
            'Floor Beam Layout & Section Details',
            'Slab Reinforcement Details',
            'Over Head Water Tank Details'
          ]
        },
        {
          name: '⚡ Electric Design',
          items: [
            'Light Point & Fan Point',
            'Multi Socket & Wi-Fi Point',
            'Switch Board',
            'Sub Distribution Board',
            'Master Distribution Board',
            'C.C Camera Line',
            'Circuit Diagram',
            'Arthin Design'
          ]
        },
        {
          name: '🚿 Plumbing Design',
          items: [
            'Septic Tank & Water Treatment Plant',
            'Water Line Management',
            'Soil & Waste Water Line Management',
            'Roof Top Water Tank',
            'Underground Water Tank',
            'Side Duct Hole',
            'Rain Water Management'
          ]
        },
        {
          name: '💰 Costing & Estimating',
          items: [
            'Part by Part Estimation (Pile, Pile Cap, Short Column, Grade Beam, Main Column, Slab etc.)',
            'R.C.C and Civil Work Building Estimate'
          ]
        },
        {
          name: '🥽 3D View',
          items: ['Front View', 'Corner View', 'Top View']
        },
        {
          name: '👷 Construction Consultancy',
          items: ['Professional Construction Consultancy Support']
        },
        {
          name: '📋 Documents',
          items: ['Construction Ready Printed Documents']
        }
      ]
    },
    {
      id: 3,
      icon: '🏙️',
      title: '6th to 7th Storied Building',
      tagline: 'Urban High-Rise',
      description: 'Advanced design solution for 6th to 7th storied buildings with complete Pile Foundation system, Lift Design, advanced Electrical & Plumbing systems and Construction Consultancy.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe',
      categories: [
        {
          name: '🏛️ Architectural Design',
          items: [
            'Architectural Drawings (Floor Plan - layout of rooms, walls, doors & windows)',
            'Land Sketch',
            'Ground Floor Furniture Plan',
            'Ground Floor Door & Window Layout Mark',
            'Typical Floor Working Area Plan',
            'Typical Floor Furniture Plan',
            'Typical Floor Door & Window Layout',
            'Over Head Water Tank & Reserve Tank',
            'Building Section',
            'Lift Section',
            'Stair Details',
            'Door, Window & Elevation Section Details',
            'Balcony & Window Details',
            'Door & Gate Details'
          ]
        },
        {
          name: '🏗️ Structural Design',
          items: [
            'Column Layout & Column Schedule',
            'Footing/Pile Point Layout & Section Details',
            'Footing/Pile Cap Layout & Schedule',
            'Underground Water Reserve Tank Layout & Section Details',
            'Grade Beam Layout & Section Details',
            'Stair Case Details',
            'Floor Beam Layout & Section Details',
            'Slab Reinforcement Details',
            'Over Head Water Tank Details'
          ]
        },
        {
          name: '⚡ Electric Design',
          items: [
            'Light Point & Fan Point',
            'Multi Socket & Wi-Fi Point',
            'Switch Board',
            'Sub Distribution Board',
            'Master Distribution Board',
            'C.C Camera Line',
            'Circuit Diagram',
            'Arthin Design'
          ]
        },
        {
          name: '🚿 Plumbing Design',
          items: [
            'Septic Tank & Water Treatment Plant',
            'Water Line Management',
            'Soil & Waste Water Line Management',
            'Roof Top Water Tank',
            'Underground Water Tank',
            'Side Duct Hole',
            'Rain Water Management'
          ]
        },
        {
          name: '💰 Costing & Estimating',
          items: [
            'Part by Part Estimation (Pile, Pile Cap, Short Column, Grade Beam, Main Column, Slab etc.)',
            'R.C.C and Civil Work Building Estimate'
          ]
        },
        {
          name: '🥽 3D View',
          items: ['Front View', 'Corner View', 'Top View']
        },
        {
          name: '👷 Construction Consultancy',
          items: ['Professional Construction Consultancy Support']
        },
        {
          name: '📋 Documents',
          items: ['Construction Ready Printed Documents']
        }
      ]
    },
    {
      id: 4,
      icon: '🔥',
      title: '8th to 9th Storied Building',
      tagline: 'Fire Safety Included',
      description: 'Comprehensive design package for 8th to 9th storied buildings. Includes all standard designs PLUS Fire Safety Design with Standpipe, Detection & Alarm System.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b',
      categories: [
        {
          name: '🏛️ Architectural Design',
          items: [
            'Architectural Drawings (Floor Plan - layout of rooms, walls, doors & windows)',
            'Land Sketch',
            'Ground Floor Furniture Plan',
            'Ground Floor Door & Window Layout Mark',
            'Typical Floor Working Area Plan',
            'Typical Floor Furniture Plan',
            'Typical Floor Door & Window Layout',
            'Over Head Water Tank & Reserve Tank',
            'Building Section',
            'Lift Section',
            'Stair Details',
            'Door, Window & Elevation Section Details',
            'Balcony & Window Details',
            'Door & Gate Details'
          ]
        },
        {
          name: '🏗️ Structural Design',
          items: [
            'Column Layout & Column Schedule',
            'Footing/Pile Point Layout & Section Details',
            'Footing/Pile Cap Layout & Schedule',
            'Underground Water Reserve Tank Layout & Section Details',
            'Grade Beam Layout & Section Details',
            'Stair Case Details',
            'Floor Beam Layout & Section Details',
            'Slab Reinforcement Details',
            'Over Head Water Tank Details'
          ]
        },
        {
          name: '⚡ Electric Design',
          items: [
            'Light Point & Fan Point',
            'Multi Socket & Wi-Fi Point',
            'Switch Board',
            'Sub Distribution Board',
            'Master Distribution Board',
            'C.C Camera Line',
            'Circuit Diagram',
            'Arthin Design'
          ]
        },
        {
          name: '🚿 Plumbing Design',
          items: [
            'Septic Tank & Water Treatment Plant',
            'Water Line Management',
            'Soil & Waste Water Line Management',
            'Roof Top Water Tank',
            'Underground Water Tank',
            'Side Duct Hole',
            'Rain Water Management'
          ]
        },
        {
          name: '🔥 Fire Safety Design',
          items: [
            'Fire Standpipe & Detection & Alarm System',
            'Fire Management Layout',
            'Fire Design Top Sheet',
            'Contents About Fire Management & Legend',
            'Fire Equipment Installation Guideline',
            'Design Guideline & Information',
            'Fire Management Guideline for Layout',
            'Fire Fighter Riser Diagram',
            'Fire Detection Riser Diagram'
          ]
        },
        {
          name: '💰 Costing & Estimating',
          items: [
            'Part by Part Estimation (Pile, Pile Cap, Short Column, Grade Beam, Main Column, Slab etc.)',
            'R.C.C and Civil Work Building Estimate'
          ]
        },
        {
          name: '🥽 3D View',
          items: ['Front View', 'Corner View', 'Top View']
        },
        {
          name: '👷 Construction Consultancy',
          items: ['Professional Construction Consultancy Support']
        },
        {
          name: '📋 Documents',
          items: ['Construction Ready Printed Documents']
        }
      ]
    },
    {
      id: 5,
      icon: '🏰',
      title: '10th Storied Building',
      tagline: 'Premium Full Package',
      description: 'The ultimate complete design package for 10th storied buildings. Includes everything PLUS BOQ (Bill of Quantities) for precise cost management and zero overestimation.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: '#fa709a',
      categories: [
        {
          name: '🏛️ Architectural Design',
          items: [
            'Architectural Drawings (Floor Plan - layout of rooms, walls, doors & windows)',
            'Land Sketch',
            'Ground Floor Furniture Plan',
            'Ground Floor Door & Window Layout Mark',
            'Typical Floor Working Area Plan',
            'Typical Floor Furniture Plan',
            'Typical Floor Door & Window Layout',
            'Over Head Water Tank & Reserve Tank',
            'Building Section',
            'Lift Section',
            'Stair Details',
            'Door, Window & Elevation Section Details',
            'Balcony & Window Details',
            'Door & Gate Details'
          ]
        },
        {
          name: '🏗️ Structural Design',
          items: [
            'Column Layout & Column Schedule',
            'Footing/Pile Point Layout & Section Details',
            'Footing/Pile Cap Layout & Schedule',
            'Underground Water Reserve Tank Layout & Section Details',
            'Grade Beam Layout & Section Details',
            'Stair Case Details',
            'Floor Beam Layout & Section Details',
            'Slab Reinforcement Details',
            'Over Head Water Tank Details'
          ]
        },
        {
          name: '⚡ Electric Design',
          items: [
            'Light Point & Fan Point',
            'Multi Socket & Wi-Fi Point',
            'Switch Board',
            'Sub Distribution Board',
            'Master Distribution Board',
            'C.C Camera Line',
            'Circuit Diagram',
            'Arthin Design'
          ]
        },
        {
          name: '🚿 Plumbing Design',
          items: [
            'Septic Tank & Water Treatment Plant',
            'Water Line Management',
            'Soil & Waste Water Line Management',
            'Roof Top Water Tank',
            'Underground Water Tank',
            'Side Duct Hole',
            'Rain Water Management'
          ]
        },
        {
          name: '🔥 Fire Safety Design',
          items: [
            'Fire Standpipe & Detection & Alarm System',
            'Fire Management Layout',
            'Fire Design Top Sheet',
            'Contents About Fire Management & Legend',
            'Fire Equipment Installation Guideline',
            'Design Guideline & Information',
            'Fire Management Guideline for Layout',
            'Fire Fighter Riser Diagram',
            'Fire Detection Riser Diagram'
          ]
        },
        {
          name: '📊 BOQ (Bill of Quantities)',
          items: [
            'Complete Bill of Quantities Document',
            'Materials, Labor & Quantities Listing',
            'Standardized Pricing for All Contractors',
            'Minimizes Overestimation & Underestimation',
            'Prepared by Quantity Surveyor / Cost Consultant'
          ]
        },
        {
          name: '🥽 3D View',
          items: ['Front View', 'Corner View', 'Top View']
        },
        {
          name: '👷 Construction Consultancy',
          items: ['Professional Construction Consultancy Support']
        },
        {
          name: '📋 Documents',
          items: ['Construction Ready Printed Documents']
        }
      ]
    }
  ]

  const individualServices = [
    {
      id: 1,
      icon: '📋',
      title: 'RAJUK Approval',
      tagline: '100% Success Rate',
      description: '530+ successful approvals. We handle the entire process from documentation to final approval. Average approval time: 4-6 months.',
      features: ['Document Preparation', 'DAP Analysis', 'Application Submission', 'Follow-up & Tracking', 'Approval Collection'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Interior Design',
      tagline: 'Luxury Within',
      description: 'Transform your interiors into masterpieces. Our designers create spaces that reflect your personality while maximizing functionality.',
      features: ['Space Planning', '3D Renders', 'Furniture Design', 'Material Selection', 'Execution Support'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b'
    },
    {
      id: 3,
      icon: '🥽',
      title: '3D Visualization & VR',
      tagline: 'See Before You Build',
      description: 'Photorealistic 3D renders and immersive VR walkthroughs. Experience your space before construction begins.',
      features: ['Exterior Renders', 'Interior Renders', 'VR Walkthrough', '360° Views', 'Animation Videos'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: '#fa709a'
    },
    {
      id: 4,
      icon: '👷',
      title: 'Construction Management',
      tagline: 'Quality Assured',
      description: 'End-to-end project supervision ensuring your vision is executed perfectly. Regular site visits and progress reporting.',
      features: ['Site Supervision', 'Quality Control', 'Contractor Coordination', 'Progress Tracking', 'Problem Resolution'],
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      color: '#fcb69f'
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

      {/* FLOATING GLOW ORBS */}
      <div style={{
        position: 'fixed', top: '15%', right: '10%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.12), transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', animation: 'floatOrb 12s ease-in-out infinite',
        zIndex: 0, pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'fixed', bottom: '10%', left: '5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(102,126,234,0.1), transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', animation: 'floatOrb 15s ease-in-out infinite reverse',
        zIndex: 0, pointerEvents: 'none'
      }}></div>

      {/* ========== HERO SECTION ========== */}
      <section style={{
        minHeight: '90vh', display: 'flex', alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '80px', paddingBottom: '60px', position: 'relative', zIndex: 1
      }}>
        <div style={{ width: '100%', padding: '0 5%' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px',
              backgroundColor: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px', marginBottom: '30px', animation: 'fadeInDown 0.8s ease-out'
            }}>
              <div style={{
                width: '8px', height: '8px', backgroundColor: '#FFD700', borderRadius: '50%',
                animation: 'pulseDot 2s ease-in-out infinite'
              }}></div>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                PREMIUM SERVICES
              </span>
            </div>

            <h1 className="hero-heading" style={{
              fontSize: '80px', fontWeight: '900', color: 'white', lineHeight: '1',
              marginBottom: '30px', letterSpacing: '-3px', animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              COMPLETE BUILDING
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B6B, #FFD700)',
                backgroundSize: '300% 100%', WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', animation: 'gradientShift 4s ease-in-out infinite'
              }}>DESIGN SOLUTIONS</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '20px', color: 'rgba(255,255,255,0.6)', maxWidth: '700px',
              margin: '0 auto 50px', lineHeight: '1.6', animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              From architectural design to structural engineering, RAJUK approval to interior design — we provide reliable consultancy for safe and modern buildings.
            </p>

            <div className="stats-row" style={{
              display: 'flex', gap: '60px', justifyContent: 'center', padding: '40px',
              backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)', maxWidth: '900px', margin: '0 auto',
              flexWrap: 'wrap', animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
            }}>
              {[
                { number: '5', label: 'BUILDING PACKAGES' },
                { number: '4', label: 'EXTRA SERVICES' },
                { number: '530+', label: 'RAJUK APPROVALS' },
                { number: '24/7', label: 'SUPPORT' }
              ].map((stat, idx) => (
                <div key={idx} style={{ animation: `statPop 0.6s ease-out ${0.8 + idx * 0.15}s backwards` }}>
                  <div style={{
                    fontSize: '36px', fontWeight: '900',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                  }}>{stat.number}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TAB SWITCHER ========== */}
      <section style={{ padding: '80px 5% 0', backgroundColor: '#0F0F0F', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>
            OUR EXPERTISE
          </div>
          <h2 className="section-heading" style={{
            fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px', marginBottom: '50px'
          }}>
            COMPLETE <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>SOLUTIONS</span>
          </h2>

          {/* Main Tab Buttons */}
          <div className="main-tabs" style={{
            display: 'inline-flex', gap: '5px', padding: '6px',
            backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.1)', marginBottom: '60px'
          }}>
            <button onClick={() => setActiveTab('packages')} style={{
              padding: '14px 35px', borderRadius: '50px', border: 'none', cursor: 'pointer',
              fontWeight: '700', fontSize: '14px', letterSpacing: '1px', transition: 'all 0.3s',
              background: activeTab === 'packages' ? 'linear-gradient(135deg, #FFD700, #FFA500)' : 'transparent',
              color: activeTab === 'packages' ? '#0A0A0A' : 'rgba(255,255,255,0.6)',
              boxShadow: activeTab === 'packages' ? '0 10px 30px rgba(255,215,0,0.3)' : 'none'
            }}>
              🏗️ Building Packages
            </button>
            <button onClick={() => setActiveTab('services')} style={{
              padding: '14px 35px', borderRadius: '50px', border: 'none', cursor: 'pointer',
              fontWeight: '700', fontSize: '14px', letterSpacing: '1px', transition: 'all 0.3s',
              background: activeTab === 'services' ? 'linear-gradient(135deg, #FFD700, #FFA500)' : 'transparent',
              color: activeTab === 'services' ? '#0A0A0A' : 'rgba(255,255,255,0.6)',
              boxShadow: activeTab === 'services' ? '0 10px 30px rgba(255,215,0,0.3)' : 'none'
            }}>
              ⭐ Individual Services
            </button>
          </div>
        </div>
      </section>

      {/* ========== BUILDING PACKAGES TAB ========== */}
      {activeTab === 'packages' && (
        <section style={{ padding: '0 5% 100px', backgroundColor: '#0F0F0F', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

            {/* Package Selector Tabs */}
            <div className="package-tabs" style={{
              display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px'
            }}>
              {buildingPackages.map((pkg, idx) => (
                <button key={pkg.id} onClick={() => { setActivePackage(idx); setExpandedFeature(null) }}
                  style={{
                    padding: '14px 22px', borderRadius: '50px', cursor: 'pointer',
                    fontWeight: '700', fontSize: '13px', transition: 'all 0.3s', letterSpacing: '0.5px',
                    border: activePackage === idx ? `2px solid ${pkg.color}` : '2px solid rgba(255,255,255,0.1)',
                    background: activePackage === idx ? pkg.gradient : 'rgba(255,255,255,0.03)',
                    color: 'white',
                    boxShadow: activePackage === idx ? `0 10px 30px ${pkg.color}40` : 'none',
                    transform: activePackage === idx ? 'translateY(-3px)' : 'translateY(0)'
                  }}
                  onMouseEnter={(e) => { if (activePackage !== idx) { e.currentTarget.style.borderColor = pkg.color; e.currentTarget.style.transform = 'translateY(-2px)' } }}
                  onMouseLeave={(e) => { if (activePackage !== idx) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)' } }}
                >
                  <span style={{ marginRight: '8px' }}>{pkg.icon}</span>
                  {pkg.title}
                </button>
              ))}
            </div>

            {/* Active Package Detail Card */}
            <div key={activePackage} style={{
              background: 'rgba(255,255,255,0.03)', borderRadius: '30px',
              border: `2px solid ${buildingPackages[activePackage].color}40`,
              overflow: 'hidden', boxShadow: `0 30px 80px ${buildingPackages[activePackage].color}20`,
              animation: 'cardReveal 0.6s ease-out'
            }}>
              {/* Header */}
              <div style={{
                background: buildingPackages[activePackage].gradient,
                padding: '50px 60px', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent)',
                  borderRadius: '50%', filter: 'blur(40px)', animation: 'glowPulse 3s ease-in-out infinite'
                }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div className="pkg-header" style={{ display: 'flex', alignItems: 'center', gap: '25px', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '70px', animation: 'iconFloat 3s ease-in-out infinite' }}>
                      {buildingPackages[activePackage].icon}
                    </div>
                    <div>
                      <div style={{
                        display: 'inline-block', padding: '5px 15px',
                        backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '20px',
                        marginBottom: '12px', backdropFilter: 'blur(10px)'
                      }}>
                        <span style={{ color: 'white', fontSize: '11px', fontWeight: '600', letterSpacing: '1px' }}>
                          {buildingPackages[activePackage].tagline}
                        </span>
                      </div>
                      <h2 className="pkg-title" style={{
                        fontSize: '36px', fontWeight: '900', color: 'white', marginBottom: '10px',
                        textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                      }}>{buildingPackages[activePackage].title}</h2>
                      <p style={{
                        fontSize: '16px', color: 'rgba(255,255,255,0.85)',
                        maxWidth: '700px', lineHeight: '1.6'
                      }}>{buildingPackages[activePackage].description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories Accordion */}
              <div className="pkg-body" style={{ padding: '50px 60px' }}>
                <h3 style={{
                  fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '30px',
                  display: 'flex', alignItems: 'center', gap: '10px'
                }}>
                  <span style={{
                    width: '4px', height: '24px',
                    background: buildingPackages[activePackage].gradient,
                    borderRadius: '2px', display: 'inline-block'
                  }}></span>
                  What's Included in This Package:
                </h3>

                <div className="categories-grid" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'
                }}>
                  {buildingPackages[activePackage].categories.map((category, catIdx) => (
                    <div key={catIdx} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: '18px', overflow: 'hidden',
                      border: expandedFeature === `${activePackage}-${catIdx}`
                        ? `1px solid ${buildingPackages[activePackage].color}60`
                        : '1px solid rgba(255,255,255,0.08)',
                      transition: 'all 0.3s',
                      animation: `slideInLeft 0.5s ease-out ${catIdx * 0.08}s backwards`
                    }}>
                      <button onClick={() => setExpandedFeature(
                        expandedFeature === `${activePackage}-${catIdx}` ? null : `${activePackage}-${catIdx}`
                      )} style={{
                        width: '100%', padding: '18px 24px', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                        background: expandedFeature === `${activePackage}-${catIdx}`
                          ? `${buildingPackages[activePackage].color}15` : 'transparent',
                        transition: 'all 0.3s'
                      }}>
                        <span style={{
                          fontSize: '15px', fontWeight: '700', textAlign: 'left',
                          color: expandedFeature === `${activePackage}-${catIdx}`
                            ? buildingPackages[activePackage].color : 'white'
                        }}>{category.name}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                          <span style={{
                            fontSize: '11px', color: buildingPackages[activePackage].color,
                            backgroundColor: `${buildingPackages[activePackage].color}20`,
                            padding: '3px 10px', borderRadius: '10px', fontWeight: '600'
                          }}>{category.items.length} items</span>
                          <span style={{
                            color: buildingPackages[activePackage].color, fontSize: '16px',
                            transform: expandedFeature === `${activePackage}-${catIdx}` ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s', display: 'inline-block'
                          }}>▼</span>
                        </div>
                      </button>

                      {expandedFeature === `${activePackage}-${catIdx}` && (
                        <div style={{ padding: '0 24px 20px', animation: 'fadeInDown 0.3s ease-out' }}>
                          <div style={{
                            height: '1px', background: `${buildingPackages[activePackage].color}30`,
                            marginBottom: '15px'
                          }}></div>
                          {category.items.map((item, itemIdx) => (
                            <div key={itemIdx} style={{
                              display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px',
                              animation: `slideInLeft 0.3s ease-out ${itemIdx * 0.05}s backwards`
                            }}>
                              <div style={{
                                width: '20px', height: '20px', borderRadius: '50%',
                                background: buildingPackages[activePackage].gradient,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '10px', color: 'white', fontWeight: 'bold',
                                flexShrink: 0, marginTop: '2px',
                                boxShadow: `0 0 10px ${buildingPackages[activePackage].color}40`
                              }}>✓</div>
                              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5' }}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{
                  marginTop: '40px', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
                  padding: '30px', backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px', border: `1px solid ${buildingPackages[activePackage].color}30`
                }}>
                  <div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
                      PACKAGE PRICING
                    </div>
                    <div style={{
                      fontSize: '28px', fontWeight: '900', color: buildingPackages[activePackage].color,
                      textShadow: `0 0 20px ${buildingPackages[activePackage].color}50`
                    }}>Custom Quote</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '5px' }}>
                      Price varies based on land size & requirements
                    </div>
                  </div>
                  <Link href="/contact">
                    <button className="cta-btn" style={{
                      padding: '18px 40px', background: buildingPackages[activePackage].gradient,
                      border: 'none', borderRadius: '50px', color: 'white',
                      fontWeight: '800', fontSize: '15px', letterSpacing: '1px', cursor: 'pointer',
                      boxShadow: `0 20px 40px ${buildingPackages[activePackage].color}40`,
                      display: 'flex', alignItems: 'center', gap: '10px',
                      transition: 'all 0.3s', position: 'relative', overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 25px 50px ${buildingPackages[activePackage].color}60` }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 20px 40px ${buildingPackages[activePackage].color}40` }}>
                      <div style={{
                        position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        animation: 'btnShine 3s ease-in-out infinite'
                      }}></div>
                      <span style={{ position: 'relative', zIndex: 1 }}>GET FREE QUOTE</span>
                      <span style={{ fontSize: '20px', position: 'relative', zIndex: 1 }}>→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== INDIVIDUAL SERVICES TAB ========== */}
      {activeTab === 'services' && (
        <section style={{ padding: '0 5% 100px', backgroundColor: '#0F0F0F', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

            <div className="services-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px'
            }}>
              {individualServices.map((service, idx) => (
                <div key={service.id} className="service-card" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: '25px', padding: '45px',
                  border: '1px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `cardReveal 0.8s ease-out ${idx * 0.15}s backwards`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = `${service.color}50`
                  e.currentTarget.style.boxShadow = `0 20px 60px ${service.color}25`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{ fontSize: '50px', marginBottom: '20px' }}>{service.icon}</div>

                  <div style={{
                    display: 'inline-block', padding: '6px 14px',
                    backgroundColor: `${service.color}20`, borderRadius: '20px',
                    marginBottom: '15px', border: `1px solid ${service.color}40`
                  }}>
                    <span style={{ color: service.color, fontSize: '11px', fontWeight: '600', letterSpacing: '1px' }}>
                      {service.tagline}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '15px' }}>
                    {service.title}
                  </h3>

                  <p style={{
                    fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '25px'
                  }}>{service.description}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '22px', height: '22px', borderRadius: '50%',
                          background: service.gradient, display: 'flex', alignItems: 'center',
                          justifyContent: 'center', fontSize: '11px', color: 'white',
                          fontWeight: 'bold', flexShrink: 0,
                          boxShadow: `0 0 12px ${service.color}40`
                        }}>✓</div>
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    padding: '15px 20px', backgroundColor: `${service.color}10`,
                    borderRadius: '15px', marginBottom: '25px', border: `1px solid ${service.color}25`
                  }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>
                      PRICING
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: service.color }}>
                      Custom Quote
                    </div>
                  </div>

                  <Link href="/contact">
                    <button style={{
                      width: '100%', padding: '15px', background: service.gradient,
                      border: 'none', borderRadius: '50px', color: 'white',
                      fontWeight: '700', fontSize: '14px', letterSpacing: '1px',
                      cursor: 'pointer', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', gap: '10px', transition: 'all 0.3s',
                      boxShadow: `0 10px 30px ${service.color}30`,
                      position: 'relative', overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 15px 40px ${service.color}50` }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 10px 30px ${service.color}30` }}>
                      <div style={{
                        position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        animation: 'btnShine 3s ease-in-out infinite'
                      }}></div>
                      <span style={{ position: 'relative', zIndex: 1 }}>GET QUOTE</span>
                      <span style={{ fontSize: '18px', position: 'relative', zIndex: 1 }}>→</span>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== PROCESS SECTION ========== */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0A0A0A', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>
              HOW WE WORK
            </div>
            <h2 className="section-heading" style={{
              fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px'
            }}>
              OUR <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>PROCESS</span>
            </h2>
          </div>

          <div className="process-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px'
          }}>
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision', time: 'Day 1', color: '#667eea' },
              { step: '02', title: 'Planning', desc: 'Detailed strategy & timeline', time: 'Week 1', color: '#f093fb' },
              { step: '03', title: 'Execution', desc: 'Bringing design to life', time: 'Month 1-3', color: '#4facfe' },
              { step: '04', title: 'Delivery', desc: 'Perfect handover', time: 'Final', color: '#43e97b' }
            ].map((process, idx) => (
              <div key={idx} className="process-card" style={{
                background: 'rgba(255,255,255,0.03)', borderRadius: '20px', padding: '35px',
                border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', position: 'relative',
                animation: `cardReveal 0.8s ease-out ${idx * 0.2}s backwards`, transition: 'all 0.4s'
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
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${process.color}, ${process.color}cc)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', fontSize: '24px', fontWeight: '900', color: 'white',
                  boxShadow: `0 10px 30px ${process.color}50`
                }}>{process.step}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>
                  {process.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '15px' }}>
                  {process.desc}
                </p>
                <div style={{
                  padding: '6px 15px', backgroundColor: `${process.color}20`,
                  borderRadius: '15px', display: 'inline-block', border: `1px solid ${process.color}30`
                }}>
                  <span style={{ fontSize: '11px', color: process.color, fontWeight: '600' }}>
                    {process.time}
                  </span>
                </div>
                {idx < 3 && (
                  <div className="process-arrow" style={{
                    position: 'absolute', top: '50%', right: '-15px', transform: 'translateY(-50%)',
                    fontSize: '24px', color: '#FFD700', zIndex: 10,
                    animation: 'arrowPulse 1.5s ease-in-out infinite'
                  }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section style={{
        padding: '120px 5%', backgroundColor: '#0F0F0F', position: 'relative', overflow: 'hidden', zIndex: 1
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          border: '2px solid rgba(255,215,0,0.1)', animation: 'ringsPulse 3s ease-out infinite', zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          border: '2px solid rgba(255,215,0,0.1)', animation: 'ringsPulse 3s ease-out 0.5s infinite', zIndex: 0
        }}></div>

        <div style={{
          maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1
        }}>
          <div style={{
            display: 'inline-block', padding: '10px 25px', backgroundColor: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)', borderRadius: '30px', marginBottom: '30px'
          }}>
            <span style={{ color: '#FFD700', fontSize: '13px', letterSpacing: '2px', fontWeight: '600' }}>
              START YOUR PROJECT WITH US
            </span>
          </div>

          <h2 className="cta-heading" style={{
            fontSize: '64px', fontWeight: '900', color: 'white', marginBottom: '25px', lineHeight: '1.1'
          }}>
            Ready to Begin Your
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
              backgroundSize: '200% 100%', WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', animation: 'gradientShift 3s ease-in-out infinite'
            }}>Dream Project?</span>
          </h2>

          <p style={{
            fontSize: '20px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            We offer free initial consultation for new clients to discuss your vision, requirements, and the best building solutions.
          </p>

          <div className="cta-buttons-final" style={{
            display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'
          }}>
            <Link href="/contact">
              <button style={{
                padding: '20px 50px', background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none', borderRadius: '60px', color: '#0A0A0A', fontWeight: '800',
                fontSize: '16px', letterSpacing: '1px', cursor: 'pointer',
                boxShadow: '0 30px 60px rgba(255,215,0,0.4)', display: 'flex',
                alignItems: 'center', gap: '10px', transition: 'all 0.3s',
                position: 'relative', overflow: 'hidden'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 40px 80px rgba(255,215,0,0.5)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.4)' }}>
                <div style={{
                  position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'btnShine 3s ease-in-out infinite'
                }}></div>
                <span style={{ position: 'relative', zIndex: 1 }}>GET FREE QUOTE</span>
                <span style={{ fontSize: '24px', position: 'relative', zIndex: 1 }}>→</span>
              </button>
            </Link>

            <a href="https://wa.me/8801958140774" style={{
              padding: '20px 40px', background: '#25D366', border: 'none', borderRadius: '60px',
              color: 'white', fontWeight: '700', fontSize: '16px', cursor: 'pointer',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px',
              boxShadow: '0 20px 50px rgba(37,211,102,0.3)', transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 30px 70px rgba(37,211,102,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(37,211,102,0.3)' }}>
              <span style={{ fontSize: '20px' }}>💬</span>
              WHATSAPP NOW
            </a>
          </div>
        </div>
      </section>

      {/* ========== ALL ANIMATIONS ========== */}
      <style>{`
        body { overflow-x: hidden !important; }

        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,215,0,0.7); }
          50% { transform: scale(1.3); box-shadow: 0 0 0 15px rgba(255,215,0,0); }
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
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes arrowPulse {
          0%, 100% { transform: translateY(-50%) translateX(0); opacity: 0.5; }
          50% { transform: translateY(-50%) translateX(5px); opacity: 1; }
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

        @media (max-width: 1024px) {
          .categories-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-arrow { display: none !important; }
        }

        @media (max-width: 768px) {
          .hero-heading { font-size: 38px !important; letter-spacing: -1px !important; }
          .hero-subtitle { font-size: 16px !important; }
          .stats-row { gap: 20px !important; padding: 25px 15px !important; }
          .section-heading { font-size: 32px !important; }
          .main-tabs { flex-direction: column !important; width: 100% !important; border-radius: 20px !important; }
          .main-tabs button { width: 100% !important; border-radius: 15px !important; }
          .package-tabs { gap: 8px !important; }
          .package-tabs button { font-size: 11px !important; padding: 10px 14px !important; }
          .pkg-header { flex-direction: column !important; text-align: center !important; }
          .pkg-title { font-size: 24px !important; }
          .pkg-body { padding: 30px 20px !important; }
          .categories-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .process-arrow { display: none !important; }
          .cta-heading { font-size: 36px !important; }
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
          .hero-heading { font-size: 28px !important; }
          .section-heading { font-size: 26px !important; }
          .cta-heading { font-size: 26px !important; }
          .pkg-title { font-size: 20px !important; }
        }
      `}</style>
    </div>
  )
}
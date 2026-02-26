'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// ✅ TYPE DEFINITIONS
interface Project {
  id: number
  name: string
  category: string
  type: string
  location: string
  year: string
  size: string
  budget: string
  gradient: string
  image: string
  tags: string[]
  description: string
  features: string[]
}

interface Filter {
  key: string
  label: string
  icon: string
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const filters: Filter[] = [
    { key: 'all', label: 'All Projects', icon: '🏛️' },
    { key: 'residential', label: 'Residential', icon: '🏠' },
    { key: 'commercial', label: 'Commercial', icon: '🏢' },
    { key: 'interior', label: 'Interior', icon: '🛋️' },
    { key: 'luxury', label: 'Luxury', icon: '👑' }
  ]

const projects: Project[] = [
  {
    id: 1,
    name: 'Villa Serenity',
    category: 'residential',
    type: 'Luxury Residence',
    location: 'Bashundhara R/A',
    year: '2024',
    size: '8,500 sqft',
    budget: '৳2.5 Cr',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project1.jpg',  // ✅ .jpg
    tags: ['RAJUK Approved', '3D Designed', 'Luxury'],
    description: 'A stunning contemporary villa with panoramic views.',
    features: ['Swimming Pool', 'Home Theater', 'Smart Home', 'Rooftop Garden']
  },
  {
    id: 2,
    name: 'Apex Tower',
    category: 'commercial',
    type: 'Commercial Complex',
    location: 'Gulshan Avenue',
    year: '2023',
    size: '45,000 sqft',
    budget: '৳15 Cr',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project2.jpg',  // ✅ .jpg
    tags: ['G+12', 'LEED Certified', 'Commercial'],
    description: 'A landmark commercial tower with sustainable design.',
    features: ['Green Building', 'High-Speed Elevators', 'Parking', 'Conference Center']
  },
  {
    id: 3,
    name: 'Modern Oasis',
    category: 'residential',
    type: 'Minimalist Home',
    location: 'Dhanmondi',
    year: '2024',
    size: '4,200 sqft',
    budget: '৳1.8 Cr',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project3.jpg',  // ✅ .jpg
    tags: ['Modern', 'Eco-Friendly', 'Award Winner'],
    description: 'Award-winning minimalist design.',
    features: ['Solar Panels', 'Rainwater Harvesting', 'Open Floor Plan', 'Natural Lighting']
  },
  {
    id: 4,
    name: 'Luxury Penthouse',
    category: 'interior',
    type: 'Interior Design',
    location: 'Banani',
    year: '2023',
    size: '6,000 sqft',
    budget: '৳3.2 Cr',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project4.jpg',  // ✅ .jpg
    tags: ['Luxury', 'Smart Home', 'Interior'],
    description: 'Exquisite penthouse with premium finishes.',
    features: ['Italian Marble', 'Custom Furniture', 'Wine Cellar', 'Sky Lounge']
  },
  {
    id: 5,
    name: 'Green Valley Resort',
    category: 'commercial',
    type: 'Hospitality',
    location: 'Gazipur',
    year: '2024',
    size: '25,000 sqft',
    budget: '৳8 Cr',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/images/Featured/project5.png',  // ✅ .png
    tags: ['Resort', 'Landscape', 'Luxury'],
    description: 'A serene resort blending luxury with nature.',
    features: ['Infinity Pool', 'Spa Center', 'Restaurant', 'Event Venue']
  },
  {
    id: 6,
    name: 'Executive Mansion',
    category: 'luxury',
    type: 'Ultra Luxury Villa',
    location: 'Gulshan',
    year: '2023',
    size: '12,000 sqft',
    budget: '৳5 Cr',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project6.png',  // ✅ .png
    tags: ['Ultra Luxury', 'Pool', 'Smart Villa'],
    description: 'The epitome of luxury living.',
    features: ['Private Cinema', 'Indoor Pool', 'Elevator', 'Staff Quarters']
  },
  {
    id: 7,
    name: 'Riverside Heights',
    category: 'residential',
    type: 'Apartment Complex',
    location: 'Uttara',
    year: '2024',
    size: '65,000 sqft',
    budget: '৳22 Cr',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project7.png',  // ✅ .png
    tags: ['G+15', 'River View', 'Premium'],
    description: 'Premium apartments with river views.',
    features: ['Gym', 'Clubhouse', 'Playground', 'Security System']
  },
  {
    id: 8,
    name: 'Corporate Hub',
    category: 'commercial',
    type: 'Office Building',
    location: 'Motijheel',
    year: '2023',
    size: '35,000 sqft',
    budget: '৳12 Cr',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project8.png',  // ✅ .png
    tags: ['Grade A', 'Central Location', 'Modern'],
    description: 'Grade A office in business district.',
    features: ['24/7 Power', 'Fire Safety', 'Cafeteria', 'Helipad']
  },
  {
    id: 9,
    name: 'Skyline Residency',
    category: 'residential',
    type: 'Luxury Apartment',
    location: 'Bashundhara',
    year: '2024',
    size: '5,200 sqft',
    budget: '৳2.8 Cr',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project9.png',  // ✅ .png
    tags: ['Modern', 'Premium', 'Smart'],
    description: 'Contemporary apartment with skyline views.',
    features: ['Rooftop Pool', 'Gym', 'Party Hall', 'Concierge']
  },
  {
    id: 10,
    name: 'Tech Park Plaza',
    category: 'commercial',
    type: 'IT Office Complex',
    location: 'Kawran Bazar',
    year: '2023',
    size: '55,000 sqft',
    budget: '৳18 Cr',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project10.png',  // ✅ .png
    tags: ['Tech', 'Modern', 'Grade A+'],
    description: 'State-of-the-art IT office complex.',
    features: ['High-Speed Internet', 'Server Room', 'Meeting Rooms', 'Cafeteria']
  },
  {
    id: 11,
    name: 'Garden Villa',
    category: 'residential',
    type: 'Eco Villa',
    location: 'Purbachal',
    year: '2024',
    size: '7,800 sqft',
    budget: '৳3.5 Cr',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project11.png',
    tags: ['Eco-Friendly', 'Garden', 'Sustainable'],
    description: 'Eco-friendly villa with extensive gardens.',
    features: ['Organic Garden', 'Solar Power', 'Rainwater System', 'Natural Ventilation']
  },
  {
    id: 12,
    name: 'Premium Interiors',
    category: 'interior',
    type: 'Office Interior',
    location: 'Gulshan',
    year: '2023',
    size: '3,500 sqft',
    budget: '৳1.2 Cr',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project12.png',
    tags: ['Corporate', 'Modern', 'Luxury'],
    description: 'Premium office interior with modern design.',
    features: ['Modular Workstations', 'Conference Rooms', 'Lounge Area', 'Pantry']
  },
  {
    id: 13,
    name: 'Lakeside Resort',
    category: 'commercial',
    type: 'Resort & Spa',
    location: 'Savar',
    year: '2024',
    size: '40,000 sqft',
    budget: '৳12 Cr',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/images/Featured/project13.png',
    tags: ['Resort', 'Luxury', 'Wellness'],
    description: 'Lakeside resort with spa facilities.',
    features: ['Lake View Rooms', 'Spa & Wellness', 'Restaurant', 'Boat House']
  },
  {
    id: 14,
    name: 'Royal Palace',
    category: 'luxury',
    type: 'Ultra Luxury Estate',
    location: 'Baridhara',
    year: '2023',
    size: '18,000 sqft',
    budget: '৳8 Cr',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project14.png',
    tags: ['Palace', 'Ultra Luxury', 'Estate'],
    description: 'Royal palace-style estate.',
    features: ['Grand Entrance', 'Ballroom', 'Wine Cellar', 'Private Theater']
  },
  {
    id: 15,
    name: 'Urban Heights',
    category: 'residential',
    type: 'High-Rise Apartment',
    location: 'Mohammadpur',
    year: '2024',
    size: '48,000 sqft',
    budget: '৳16 Cr',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project15.png',
    tags: ['G+18', 'Urban', 'Premium'],
    description: 'Modern high-rise apartment.',
    features: ['Rooftop Garden', 'Gym', 'Swimming Pool', 'Kids Zone']
  },
  {
    id: 16,
    name: 'Business Center',
    category: 'commercial',
    type: 'Commercial Hub',
    location: 'Banani',
    year: '2023',
    size: '38,000 sqft',
    budget: '৳14 Cr',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project16.png',
    tags: ['Business', 'Central', 'Modern'],
    description: 'Prime business center.',
    features: ['Conference Halls', 'Business Lounge', 'Food Court', 'Parking']
  },
  {
    id: 17,
    name: 'Designer Studio',
    category: 'interior',
    type: 'Studio Apartment',
    location: 'Dhanmondi',
    year: '2024',
    size: '1,800 sqft',
    budget: '৳75 Lac',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project17.png',
    tags: ['Studio', 'Modern', 'Compact'],
    description: 'Beautifully designed studio apartment.',
    features: ['Smart Storage', 'Modern Kitchen', 'Balcony', 'Premium Finishes']
  },
  {
    id: 18,
    name: 'Coastal Retreat',
    category: 'commercial',
    type: 'Beach Resort',
    location: "Cox's Bazar",
    year: '2023',
    size: '32,000 sqft',
    budget: '৳10 Cr',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project18.png',
    tags: ['Beach', 'Resort', 'Tourism'],
    description: 'Beachfront resort with ocean views.',
    features: ['Beach Access', 'Sea View Rooms', 'Water Sports', 'Fine Dining']
  },
  {
    id: 19,
    name: 'Family Haven',
    category: 'residential',
    type: 'Family Villa',
    location: 'Uttara',
    year: '2024',
    size: '6,500 sqft',
    budget: '৳3 Cr',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project19.png',
    tags: ['Family', 'Spacious', 'Garden'],
    description: 'Spacious family villa.',
    features: ['Large Garden', '5 Bedrooms', 'Play Area', 'Home Office']
  },
  {
    id: 20,
    name: 'Boutique Hotel',
    category: 'commercial',
    type: 'Boutique Hotel',
    location: 'Old Dhaka',
    year: '2023',
    size: '28,000 sqft',
    budget: '৳9 Cr',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project20.png',
    tags: ['Hotel', 'Boutique', 'Heritage'],
    description: 'Boutique hotel with heritage charm.',
    features: ['Heritage Design', 'Rooftop Restaurant', 'Spa', 'Event Space']
  },
  {
    id: 21,
    name: 'Smart Office',
    category: 'commercial',
    type: 'Tech Office',
    location: 'Bashundhara',
    year: '2024',
    size: '42,000 sqft',
    budget: '৳15 Cr',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/images/Featured/project21.png',
    tags: ['Smart', 'Tech', 'Modern'],
    description: 'Smart office with IoT integration.',
    features: ['IoT Systems', 'Smart Lighting', 'Automated HVAC', 'Digital Security']
  },
  {
    id: 22,
    name: 'Luxury Duplex',
    category: 'luxury',
    type: 'Duplex Penthouse',
    location: 'Gulshan',
    year: '2023',
    size: '9,500 sqft',
    budget: '৳5.5 Cr',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project22.png',
    tags: ['Duplex', 'Penthouse', 'Luxury'],
    description: 'Magnificent duplex penthouse.',
    features: ['Private Elevator', 'Terrace Garden', 'Jacuzzi', 'Wine Room']
  },
  {
    id: 23,
    name: 'Community Center',
    category: 'commercial',
    type: 'Community Hub',
    location: 'Mirpur',
    year: '2024',
    size: '35,000 sqft',
    budget: '৳11 Cr',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project23.png',
    tags: ['Community', 'Public', 'Modern'],
    description: 'Modern community center.',
    features: ['Auditorium', 'Library', 'Sports Complex', 'Community Hall']
  },
  {
    id: 24,
    name: 'Cozy Cottage',
    category: 'residential',
    type: 'Cottage',
    location: 'Gazipur',
    year: '2023',
    size: '3,200 sqft',
    budget: '৳1.5 Cr',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project24.png',
    tags: ['Cottage', 'Countryside', 'Peaceful'],
    description: 'Charming cottage in countryside.',
    features: ['Garden', 'Fireplace', 'Wooden Deck', 'Nature Views']
  },
  {
    id: 25,
    name: 'Showroom Design',
    category: 'interior',
    type: 'Retail Showroom',
    location: 'Banani',
    year: '2024',
    size: '4,500 sqft',
    budget: '৳1.8 Cr',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project25.png',
    tags: ['Retail', 'Showroom', 'Luxury'],
    description: 'Elegant retail showroom.',
    features: ['Display Systems', 'LED Lighting', 'Customer Lounge', 'Storage']
  },
  {
    id: 26,
    name: 'Medical Center',
    category: 'commercial',
    type: 'Healthcare',
    location: 'Dhanmondi',
    year: '2023',
    size: '30,000 sqft',
    budget: '৳10 Cr',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project26.png',
    tags: ['Medical', 'Healthcare', 'Modern'],
    description: 'Modern medical center.',
    features: ['OT Rooms', 'ICU', 'Diagnostic Center', 'Pharmacy']
  },
  {
    id: 27,
    name: 'Twin Villas',
    category: 'residential',
    type: 'Semi-Detached Villa',
    location: 'Purbachal',
    year: '2024',
    size: '11,000 sqft',
    budget: '৳4.5 Cr',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project27.png',
    tags: ['Twin Villa', 'Modern', 'Premium'],
    description: 'Elegant twin villas.',
    features: ['Private Gardens', 'Shared Pool', 'Individual Parking', 'Modern Design']
  },
  {
    id: 28,
    name: 'Cafe Interior',
    category: 'interior',
    type: 'Cafe Design',
    location: 'Gulshan',
    year: '2023',
    size: '2,800 sqft',
    budget: '৳95 Lac',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project28.png',
    tags: ['Cafe', 'Modern', 'Cozy'],
    description: 'Trendy cafe interior.',
    features: ['Aesthetic Seating', 'Lighting Design', 'Coffee Bar', 'Outdoor Area']
  },
  {
    id: 29,
    name: 'Shopping Mall',
    category: 'commercial',
    type: 'Retail Complex',
    location: 'Uttara',
    year: '2024',
    size: '85,000 sqft',
    budget: '৳35 Cr',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/images/Featured/project29.png',
    tags: ['Mall', 'Retail', 'Large Scale'],
    description: 'Modern shopping mall.',
    features: ['Food Court', 'Cinema', 'Brand Outlets', 'Multi-Level Parking']
  },
  {
    id: 30,
    name: 'Heritage Home',
    category: 'luxury',
    type: 'Heritage Villa',
    location: 'Old Dhaka',
    year: '2023',
    size: '10,000 sqft',
    budget: '৳6 Cr',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project30.png',
    tags: ['Heritage', 'Restored', 'Luxury'],
    description: 'Restored heritage home.',
    features: ['Original Architecture', 'Modern Upgrades', 'Courtyard', 'Period Features']
  },
  {
    id: 31,
    name: 'Student Housing',
    category: 'residential',
    type: 'Dormitory',
    location: 'Mohakhali',
    year: '2024',
    size: '52,000 sqft',
    budget: '৳18 Cr',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project31.png',
    tags: ['Student', 'Hostel', 'Modern'],
    description: 'Modern student housing.',
    features: ['Study Rooms', 'Common Kitchen', 'Recreation Area', 'Security']
  },
  {
    id: 32,
    name: 'Gym Design',
    category: 'interior',
    type: 'Fitness Center',
    location: 'Banani',
    year: '2023',
    size: '5,500 sqft',
    budget: '৳2.2 Cr',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project32.png',
    tags: ['Fitness', 'Modern', 'Premium'],
    description: 'Premium fitness center.',
    features: ['Cardio Zone', 'Weight Training', 'Yoga Studio', 'Locker Rooms']
  },
  {
    id: 33,
    name: 'Restaurant',
    category: 'commercial',
    type: 'Fine Dining',
    location: 'Gulshan',
    year: '2024',
    size: '6,800 sqft',
    budget: '৳3.5 Cr',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project33.png',
    tags: ['Restaurant', 'Fine Dining', 'Luxury'],
    description: 'Upscale restaurant.',
    features: ['Open Kitchen', 'Rooftop Dining', 'Wine Bar', 'Private Rooms']
  },
  {
    id: 34,
    name: 'Townhouse',
    category: 'residential',
    type: 'Modern Townhouse',
    location: 'Bashundhara',
    year: '2023',
    size: '4,800 sqft',
    budget: '৳2.3 Cr',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project34.png',
    tags: ['Townhouse', 'Urban', 'Modern'],
    description: 'Contemporary townhouse.',
    features: ['Terrace', 'Garage', 'Open Plan Living', 'Modern Kitchen']
  },
  {
    id: 35,
    name: 'Spa Center',
    category: 'commercial',
    type: 'Wellness Spa',
    location: 'Dhanmondi',
    year: '2024',
    size: '7,200 sqft',
    budget: '৳3.8 Cr',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project35.png',
    tags: ['Spa', 'Wellness', 'Luxury'],
    description: 'Luxurious spa center.',
    features: ['Treatment Rooms', 'Sauna', 'Jacuzzi', 'Relaxation Lounge']
  },
  {
    id: 36,
    name: 'Library Design',
    category: 'interior',
    type: 'Modern Library',
    location: 'Uttara',
    year: '2023',
    size: '8,500 sqft',
    budget: '৳2.5 Cr',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project36.png',
    tags: ['Library', 'Educational', 'Modern'],
    description: 'Contemporary library.',
    features: ['Reading Areas', 'Digital Section', 'Study Rooms', 'Cafe Corner']
  },
  {
    id: 37,
    name: 'Convention Center',
    category: 'commercial',
    type: 'Event Venue',
    location: 'Banani',
    year: '2024',
    size: '95,000 sqft',
    budget: '৳40 Cr',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/images/Featured/project37.png',
    tags: ['Convention', 'Events', 'Large Scale'],
    description: 'World-class convention center.',
    features: ['Grand Hall', 'Meeting Rooms', 'Exhibition Area', 'Catering Kitchen']
  },
  {
    id: 38,
    name: 'Lakefront Villa',
    category: 'luxury',
    type: 'Waterfront Estate',
    location: 'Purbachal',
    year: '2023',
    size: '15,000 sqft',
    budget: '৳7.5 Cr',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project38.png',
    tags: ['Lakefront', 'Luxury', 'Estate'],
    description: 'Magnificent lakefront villa.',
    features: ['Lake Access', 'Private Dock', 'Infinity Pool', 'Boat House']
  },
  {
    id: 39,
    name: 'Apartment Complex',
    category: 'residential',
    type: 'Multi-Unit',
    location: 'Mirpur',
    year: '2024',
    size: '72,000 sqft',
    budget: '৳28 Cr',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project39.png',
    tags: ['Complex', 'G+20', 'Urban'],
    description: 'Large apartment complex.',
    features: ['Rooftop Amenities', 'Retail Shops', 'Parking', 'Community Center']
  },
  {
    id: 40,
    name: 'Bank Interior',
    category: 'interior',
    type: 'Banking Hall',
    location: 'Motijheel',
    year: '2023',
    size: '4,200 sqft',
    budget: '৳1.6 Cr',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project40.png',
    tags: ['Banking', 'Corporate', 'Professional'],
    description: 'Professional banking hall.',
    features: ['Customer Counters', 'Meeting Rooms', 'Vault Area', 'Waiting Lounge']
  },
  {
    id: 41,
    name: 'School Building',
    category: 'commercial',
    type: 'Educational',
    location: 'Dhanmondi',
    year: '2024',
    size: '65,000 sqft',
    budget: '৳25 Cr',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project41.png',
    tags: ['School', 'Educational', 'Modern'],
    description: 'Modern school building.',
    features: ['Smart Classrooms', 'Playground', 'Lab Facilities', 'Auditorium']
  },
  {
    id: 42,
    name: 'Farmhouse',
    category: 'residential',
    type: 'Country Estate',
    location: 'Savar',
    year: '2023',
    size: '12,500 sqft',
    budget: '৳5 Cr',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project42.png',
    tags: ['Farmhouse', 'Rural', 'Spacious'],
    description: 'Expansive farmhouse.',
    features: ['Farm Land', 'Barn', 'Greenhouse', 'Country Kitchen']
  },
  {
    id: 43,
    name: 'Hotel Lobby',
    category: 'interior',
    type: 'Hotel Interior',
    location: 'Gulshan',
    year: '2024',
    size: '6,500 sqft',
    budget: '৳2.8 Cr',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project43.png',
    tags: ['Hotel', 'Luxury', 'Grand'],
    description: 'Grand hotel lobby.',
    features: ['Reception Desk', 'Lounge Area', 'Chandelier', 'Concierge']
  },
  {
    id: 44,
    name: 'Factory Complex',
    category: 'commercial',
    type: 'Industrial',
    location: 'Gazipur',
    year: '2023',
    size: '120,000 sqft',
    budget: '৳45 Cr',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project44.png',
    tags: ['Factory', 'Industrial', 'Large'],
    description: 'Modern factory complex.',
    features: ['Production Floor', 'Warehouse', 'Office Block', 'Loading Docks']
  },
  {
    id: 45,
    name: 'Penthouse Suite',
    category: 'luxury',
    type: 'Sky Residence',
    location: 'Banani',
    year: '2024',
    size: '8,200 sqft',
    budget: '৳4.8 Cr',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/images/Featured/project45.png',
    tags: ['Penthouse', 'Sky', 'Luxury'],
    description: 'Exclusive penthouse suite.',
    features: ['360° Views', 'Sky Lounge', 'Private Pool', 'Home Automation']
  },
  {
    id: 46,
    name: 'Row Houses',
    category: 'residential',
    type: 'Connected Homes',
    location: 'Uttara',
    year: '2023',
    size: '18,000 sqft',
    budget: '৳7 Cr',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project46.png',
    tags: ['Row House', 'Community', 'Modern'],
    description: 'Connected row houses.',
    features: ['Private Entrance', 'Small Garden', 'Shared Amenities', 'Parking']
  },
  {
    id: 47,
    name: 'Salon Interior',
    category: 'interior',
    type: 'Beauty Salon',
    location: 'Dhanmondi',
    year: '2024',
    size: '3,200 sqft',
    budget: '৳1.1 Cr',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project47.png',
    tags: ['Salon', 'Beauty', 'Modern'],
    description: 'Chic beauty salon.',
    features: ['Styling Stations', 'Spa Area', 'Waiting Lounge', 'Product Display']
  },
  {
    id: 48,
    name: 'Cinema Hall',
    category: 'commercial',
    type: 'Entertainment',
    location: 'Bashundhara',
    year: '2023',
    size: '45,000 sqft',
    budget: '৳20 Cr',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project48.png',
    tags: ['Cinema', 'Entertainment', 'Modern'],
    description: 'Multiplex cinema.',
    features: ['5 Screens', 'IMAX', 'VIP Lounge', 'Concession Stand']
  },
  {
    id: 49,
    name: 'Mountain Retreat',
    category: 'luxury',
    type: 'Hill Resort',
    location: 'Bandarban',
    year: '2024',
    size: '22,000 sqft',
    budget: '৳9 Cr',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project49.png',
    tags: ['Mountain', 'Resort', 'Luxury'],
    description: 'Luxury mountain retreat.',
    features: ['Valley View', 'Nature Trails', 'Infinity Pool', 'Spa']
  }
]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '30px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          border: '4px solid rgba(255,215,0,0.2)',
          borderTopColor: '#FFD700',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <div style={{
          color: '#FFD700',
          fontSize: '18px',
          fontWeight: '600',
          letterSpacing: '3px'
        }}>
          LOADING PORTFOLIO
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* CURSOR GLOW */}
      <div style={{
        position: 'fixed',
        top: mousePosition.y - 200,
        left: mousePosition.x - 200,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.08), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'top 0.3s ease-out, left 0.3s ease-out'
      }}></div>

      {/* FLOATING PARTICLES */}
      <div style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: 'rgba(255,215,0,0.3)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* GRID BACKGROUND */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative'
      }}>
        <div style={{ width: '100%', padding: '0 5%', position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 25px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '30px',
              animation: 'fadeInUp 0.8s ease-out',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                width: '10px', 
                height: '10px', 
                backgroundColor: '#FFD700', 
                borderRadius: '50%',
                animation: 'pulseDot 2s ease-in-out infinite',
                boxShadow: '0 0 20px rgba(255,215,0,0.5)'
              }}></div>
              <span style={{ color: '#FFD700', fontSize: '13px', letterSpacing: '3px', fontWeight: '700' }}>
                530+ PROJECTS COMPLETED
              </span>
            </div>

            <h1 className="hero-title" style={{
              fontSize: '90px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1',
              marginBottom: '30px',
              letterSpacing: '-4px',
              maxWidth: '1000px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              PORTFOLIO OF
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B35, #FFD700)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 4s ease-in-out infinite'
              }}>EXCELLENCE</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '22px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px',
              maxWidth: '700px',
              lineHeight: '1.8',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              Explore our collection of architectural masterpieces that define 
              Bangladesh&apos;s luxury landscape.
            </p>

            <div className="hero-stats" style={{
              display: 'flex',
              gap: '40px',
              animation: 'fadeInUp 1.4s ease-out 0.6s backwards',
              flexWrap: 'wrap'
            }}>
              {[
                { value: '530+', label: 'Projects' },
                { value: '8+', label: 'Years' },
                { value: '100%', label: 'Success Rate' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '900',
                    color: '#FFD700'
                  }}>{stat.value}</div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: '500',
                    letterSpacing: '1px'
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section style={{ 
        padding: '50px 5%', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: 'white',
                marginBottom: '5px'
              }}>Filter Projects</h2>
              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '14px'
              }}>Showing {filteredProjects.length} projects</p>
            </div>
          </div>

          <div className="filter-buttons" style={{ 
            display: 'flex', 
            gap: '15px', 
            flexWrap: 'wrap'
          }}>
            {filters.map((filter, idx) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                style={{
                  padding: '14px 28px',
                  background: activeFilter === filter.key 
                    ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
                    : 'rgba(255,255,255,0.05)',
                  border: activeFilter === filter.key ? 'none' : '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '50px',
                  color: activeFilter === filter.key ? '#0A0A0A' : 'rgba(255,255,255,0.8)',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`,
                  boxShadow: activeFilter === filter.key ? '0 15px 40px rgba(255,215,0,0.4)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (activeFilter !== filter.key) {
                    e.currentTarget.style.background = 'rgba(255,215,0,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (activeFilter !== filter.key) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }
                }}
              >
                <span style={{ fontSize: '16px' }}>{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section style={{ padding: '80px 5%', backgroundColor: '#0A0A0A', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="projects-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', 
            gap: '35px' 
          }}>
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                style={{
                  borderRadius: '30px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  height: '580px',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s backwards`,
                  boxShadow: '0 15px 50px rgba(0,0,0,0.4)'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(255,215,0,0.25)'
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.4)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: project.gradient,
                  zIndex: 0
                }}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div style={{
                  position: 'absolute',
                  top: '25px',
                  left: '25px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '900',
                  color: '#FFD700',
                  border: '2px solid rgba(255,215,0,0.3)',
                  zIndex: 2
                }}>
                  {String(project.id).padStart(2, '0')}
                </div>

                <div className="quick-view-badge" style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  padding: '10px 20px',
                  backgroundColor: 'rgba(255,215,0,0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: 0,
                  transform: 'translateY(-10px)',
                  transition: 'all 0.3s ease',
                  zIndex: 2
                }}>
                  <span style={{ fontSize: '12px', color: '#FFD700', fontWeight: '600' }}>QUICK VIEW</span>
                  <span>👁️</span>
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
                  padding: '35px',
                  zIndex: 1
                }}>
                  <h3 style={{
                    fontSize: '32px',
                    fontWeight: '900',
                    color: 'white',
                    marginBottom: '12px',
                    letterSpacing: '-1px',
                    textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                  }}>
                    {project.name}
                  </h3>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '15px',
                    marginBottom: '20px'
                  }}>
                    <span style={{ fontSize: '16px' }}>📍</span>
                    {project.location}
                  </div>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 24px',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    borderRadius: '50px',
                    color: '#0A0A0A',
                    fontWeight: '800',
                    fontSize: '13px',
                    letterSpacing: '1px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                      animation: 'btnShine 3s ease-in-out infinite'
                    }}></div>
                    VIEW PROJECT
                    <span style={{ fontSize: '16px' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ STATS SECTION - FIXED */}
      <section style={{ 
        padding: '120px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(255,215,0,0.1), transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              padding: '10px 25px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              borderRadius: '50px',
              marginBottom: '20px',
              border: '1px solid rgba(255,215,0,0.2)'
            }}>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '3px', fontWeight: '700' }}>
                OUR ACHIEVEMENTS
              </span>
            </div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '900',
              color: 'white',
              letterSpacing: '-2px'
            }}>
              Numbers That <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Speak</span>
            </h2>
          </div>

          <div className="stats-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '30px', 
            textAlign: 'center' 
          }}>
            {/* Stat 1 */}
            <div style={{
              padding: '50px 30px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '25px',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🏗️</div>
              <div style={{
                fontSize: '56px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '15px',
                letterSpacing: '-3px',
                lineHeight: '1'
              }}>
                530+
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '2px',
                fontWeight: '600'
              }}>
                PROJECTS DELIVERED
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)'
              }}></div>
            </div>

            {/* Stat 2 */}
            <div style={{
              padding: '50px 30px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '25px',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>✅</div>
              <div style={{
                fontSize: '56px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '15px',
                letterSpacing: '-3px',
                lineHeight: '1'
              }}>
                100%
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '2px',
                fontWeight: '600'
              }}>
                RAJUK SUCCESS
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)'
              }}></div>
            </div>

            {/* Stat 3 */}
            <div style={{
              padding: '50px 30px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '25px',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>📅</div>
              <div style={{
                fontSize: '56px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '15px',
                letterSpacing: '-3px',
                lineHeight: '1'
              }}>
                8+
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '2px',
                fontWeight: '600'
              }}>
                YEARS EXPERIENCE
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)'
              }}></div>
            </div>

            {/* Stat 4 */}
            <div style={{
              padding: '50px 30px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '25px',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>👥</div>
              <div style={{
                fontSize: '56px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '15px',
                letterSpacing: '-3px',
                lineHeight: '1'
              }}>
                25+
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '2px',
                fontWeight: '600'
              }}>
                TEAM MEMBERS
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '140px 5%',
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}>
        {[0, 0.5, 1].map((delay, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${500 + i * 100}px`,
            height: `${500 + i * 100}px`,
            borderRadius: '50%',
            border: '2px solid rgba(255,215,0,0.1)',
            animation: `ringsPulse 4s ease-out ${delay}s infinite`,
            zIndex: 0
          }}></div>
        ))}

        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}></div>

        <div className="cta-content" style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            borderRadius: '50px',
            marginBottom: '30px',
            border: '1px solid rgba(255,215,0,0.3)'
          }}>
            <span style={{ color: '#FFD700', fontSize: '13px', letterSpacing: '3px', fontWeight: '700' }}>
              🚀 START YOUR JOURNEY
            </span>
          </div>

          <h2 className="cta-heading" style={{
            fontSize: '72px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '25px',
            lineHeight: '1.1',
            letterSpacing: '-3px'
          }}>
            Let&apos;s Create Your
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B35, #FFD700)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 4s ease-in-out infinite'
            }}>Masterpiece</span>
          </h2>

          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px',
            lineHeight: '1.7'
          }}>
            Join 530+ satisfied clients who trusted us with their dream projects.
          </p>

          <div className="cta-buttons" style={{ 
            display: 'flex', 
            gap: '25px', 
            justifyContent: 'center', 
            flexWrap: 'wrap'
          }}>
            <Link href="/contact">
              <button style={{
                padding: '22px 55px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '60px',
                color: '#0A0A0A',
                fontWeight: '800',
                fontSize: '16px',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 30px 60px rgba(255,215,0,0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                START YOUR PROJECT →
              </button>
            </Link>
            
            <a href="https://wa.me/8801958140774" style={{
              padding: '22px 45px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              border: 'none',
              borderRadius: '60px',
              color: 'white',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 20px 40px rgba(37,211,102,0.3)'
            }}>
              <span style={{ fontSize: '22px' }}>💬</span>
              WHATSAPP NOW
            </a>
          </div>

          <div style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            {['⚡ Fast Response', '🔒 100% Secure', '✅ RAJUK Approved', '🏆 Award Winning'].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.97)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out',
            overflowY: 'auto'
          }}
        >
          <div 
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            className="modal-container"
            style={{
              display: 'flex',
              gap: '0',
              maxWidth: '1400px',
              width: '100%',
              maxHeight: '95vh',
              borderRadius: '30px',
              overflow: 'hidden',
              animation: 'modalSlideIn 0.4s ease-out',
              boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
              backgroundColor: '#111'
            }}
          >
            <div style={{
              flex: '1.2',
              position: 'relative',
              backgroundColor: '#0A0A0A',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              overflowY: 'auto',
              maxHeight: '95vh'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                minHeight: '100%'
              }}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  width={1600}
                  height={2200}
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                  priority
                />
              </div>
              
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'fixed',
                  top: '30px',
                  left: '30px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  border: 'none',
                  color: '#0A0A0A',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
                  zIndex: 100
                }}
              >
                ✕
              </button>
            </div>

            <div style={{
              flex: '0.8',
              backgroundColor: '#111',
              padding: '40px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '95vh'
            }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '900',
                color: 'white',
                marginBottom: '25px',
                letterSpacing: '-1px',
                lineHeight: '1.2'
              }}>
                {selectedProject.name}
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px',
                marginBottom: '30px'
              }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏗️</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginBottom: '5px' }}>TYPE</div>
                  <div style={{ color: 'white', fontWeight: '700', fontSize: '14px' }}>{selectedProject.type}</div>
                </div>

                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>📍</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginBottom: '5px' }}>LOCATION</div>
                  <div style={{ color: 'white', fontWeight: '700', fontSize: '14px' }}>{selectedProject.location}</div>
                </div>

                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>📐</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginBottom: '5px' }}>SIZE</div>
                  <div style={{ color: 'white', fontWeight: '700', fontSize: '14px' }}>{selectedProject.size}</div>
                </div>

                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,215,0,0.1)',
                  borderRadius: '15px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,215,0,0.2)'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>💰</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginBottom: '5px' }}>BUDGET</div>
                  <div style={{ color: '#FFD700', fontWeight: '700', fontSize: '14px' }}>{selectedProject.budget}</div>
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#FFD700', fontSize: '16px', marginBottom: '12px', fontWeight: '800' }}>
                  ABOUT THIS PROJECT
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '15px' }}>
                  {selectedProject.description}
                </p>
              </div>

              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)',
                marginBottom: '30px'
              }}></div>

              <div style={{ marginTop: 'auto' }}>
                <Link href="/contact" style={{ display: 'block', marginBottom: '15px' }}>
                  <button style={{
                    width: '100%',
                    padding: '18px',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    border: 'none',
                    borderRadius: '15px',
                    color: '#0A0A0A',
                    fontWeight: '800',
                    fontSize: '15px',
                    cursor: 'pointer'
                  }}>
                    START SIMILAR PROJECT →
                  </button>
                </Link>
                
                <a href="https://wa.me/8801958140774" style={{ display: 'block', textDecoration: 'none' }}>
                  <button style={{
                    width: '100%',
                    padding: '18px',
                    background: '#25D366',
                    border: 'none',
                    borderRadius: '15px',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    💬 DISCUSS ON WHATSAPP
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS ANIMATIONS */}
      <style>{`
        body { overflow-x: hidden !important; }

        @keyframes floatParticle {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,215,0,0.7); }
          50% { transform: scale(1.3); box-shadow: 0 0 0 15px rgba(255,215,0,0); }
        }

        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }

        @keyframes ringsPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
        }

        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .project-card:hover .quick-view-badge {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .project-card:hover img { transform: scale(1.1) !important; }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: rgba(255,215,0,0.3); border-radius: 4px; }

        @media (max-width: 1024px) {
          .modal-container { flex-direction: column !important; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 48px !important; }
          .hero-subtitle { font-size: 16px !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .filter-buttons { justify-content: center !important; }
          .cta-heading { font-size: 40px !important; }
          .cta-buttons { flex-direction: column !important; align-items: center !important; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 36px !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .cta-heading { font-size: 32px !important; }
        }
      `}</style>
    </div>
  )
}
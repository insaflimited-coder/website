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
    name: 'Muktar Plaza',
    category: 'commercial',
    type: 'Commercial-Cum-Residential,B+G+12 Floors', 
    location: 'Rayerbag Bus Stand, Jatrabari, Dhaka',
    year: '2024',
    size: '8,500 sqft',
    budget: '30 Cr',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project1.jpg',
    tags: ['Commercial', 'Residential', 'RAJUK Approved'],
    description: 'Client: Md. Abu Hanif & Others. Working Area: 7,000 sqft. Basement: Adequate parking facility. Ground to 4th Floor: Market. 4th Floor: Designated for Hospital. Remaining 5 Floors: Residential design. Units per floor: 6 units. Total flats: 30 units.',
    features: ['30 Flats', '6 Units/Floor', 'Hospital', 'Basement Parking', 'Market Space']
  },
  {
    id: 2,
    name: 'Badsha Villa',
    category: 'residential',
    type: 'Residential Villa, G+7 Floors',
    location: 'Kajlarpara, Jatrabari, Dhaka',
    year: '2024',
    size: '1,741 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project2.jpg',
    tags: ['Villa', 'Duplex', 'Modern'],
    description: 'Client: Md. Abdul Kadir Bhuiyan. Working Area: 1,485 sqft. 1st to 4th Floor: 3 units per floor. 5th & 6th Floor: 1 unit per floor, 1,885 sqft each. Ground Floor: Common living area & entrance.',
    features: ['3 Units/Floor', '1,885 sqft Units', 'Common Living Area', 'Premium Design']
  },
  {
    id: 3,
    name: 'City Square',
    category: 'commercial',
    type: 'Commercial-Cum-Residential, Semi-Basement+G+9 Floors',
    location: 'Tushardhara, Matuail, Kadamtali, Jatrabari',
    year: '2024',
    size: '5,500 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project3.jpg',
    tags: ['Shopping Mall', 'Restaurant', 'Residential'],
    description: 'Client: Engineer Md. Shahabuddin Amin & Others. Semi-Basement: Adequate car parking. Ground to 3rd Floor: Shopping mall, Restaurant & Commercial space. 4th to 9th Floor: Residential plan. Rooftop: Community center & Lounge area.',
    features: ['Shopping Mall', 'Restaurant', 'Car Parking', 'Community Center', 'Lounge Area']
  },
  {
    id: 4,
    name: 'Khan Tower',
    category: 'residential',
    type: 'Residential Tower, G+9 Floors',
    location: 'Bhuighor, Fatulla, Narayanganj',
    year: '2023',
    size: '4,125 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project4.jpg',
    tags: ['Tower', '5 Units/Floor', '2 Lifts'],
    description: 'Client: Harun Rashid Khan & Others. Working Area: 3,377 sqft. Lifts: 2. Units per floor: 5 units. One unit: 3 Bedrooms, Dining, Drawing Room, Kitchen, 2 Balconies & 3 Bathrooms. Remaining 4 units: 2 Bedrooms, Dining, Drawing Room, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['2 Lifts', '5 Units/Floor', '3 Bedrooms Unit', '2 Bedrooms Units', '3 Bathrooms']
  },
  {
    id: 5,
    name: 'Modina Tower',
    category: 'residential',
    type: 'Residential Tower,B+G+9 Floors',
    location: 'Jatrabari, Dhaka',
    year: '2024',
    size: '7,110 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project5.png',
    tags: ['Tower', '6 Units/Floor', 'Premium'],
    description: 'Client: Delowar Hossain & Others. Working Area: 6,140 sqft. Units per floor: 6 units. Each unit includes: 3 Bedrooms, Dining, Drawing Room, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['6 Units/Floor', '3 Bedrooms', 'Dining & Drawing', '2 Balconies', '2 Bathrooms']
  },
  {
    id: 6,
    name: 'Alhamdulillah Tower',
    category: 'residential',
    type: 'Residential Tower, G+9 Floors',
    location: 'Jatrabari, Dhaka',
    year: '2024',
    size: '4,575 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project6.png',
    tags: ['Tower', '4 Units/Floor', '2 Lifts'],
    description: 'Client: Md. Abul Hossain & Others. Working Area: 4,070 sqft. Lifts: 2. Modern residential building. Units per floor: 4 units. Each unit includes: 3 Bedrooms, Dining, Drawing, Kitchen, 2 Balconies & 3 Bathrooms.',
    features: ['2 Lifts', '4 Units/Floor', '3 Bedrooms', 'Dining & Drawing', '3 Bathrooms']
  },
  {
    id: 7,
    name: 'Sky Haven',
    category: 'residential',
    type: 'Residential Building, G+9 Floors',
    location: 'Shonir Akhra, Jatrabari, Dhaka',
    year: '2024',
    size: '2,900 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project7.png',
    tags: ['Modern', '2 Units/Floor', '1 Lift'],
    description: 'Client: Md. Abdullah. Working Area: 2,500 sqft. Lift: 1. Modern residential building. Units per floor: 2 units. Each unit includes: 3 Bedrooms, Dining, Drawing, Kitchen, 2 Balconies & 3 Bathrooms.',
    features: ['1 Lift', '2 Units/Floor', '3 Bedrooms', 'Dining & Drawing', '3 Bathrooms']
  },
  {
    id: 8,
    name: 'City Square-2',
    category: 'commercial',
    type: 'Commercial-Cum-Residential, Semi-Basement+G+9 Floors',
    location: 'Tushardhara, Matuail, Kadamtali, Jatrabari',
    year: '2024',
    size: '5,500 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project8.png',
    tags: ['Shopping Mall', 'Restaurant', 'Residential'],
    description: 'Client: Engineer Md. Shahabuddin Amin & Others. Semi-Basement: Adequate car parking. Ground to 3rd Floor: Shopping mall, Restaurant & Commercial space. 4th to 9th Floor: Residential plan. Rooftop: Community center & Lounge area.',
    features: ['Shopping Mall', 'Restaurant', 'Car Parking', 'Community Center', 'Lounge Area']
  },
  {
    id: 9,
    name: 'Badsha Villa-1',
    category: 'residential',
    type: 'Residential Villa',
    location: 'Kajlarpara, Jatrabari, Dhaka',
    year: '2024',
    size: '1,741 sqft',
    budget: 'G+7 Floors',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project9.png',
    tags: ['Villa', 'Duplex', 'Modern'],
    description: 'Client: Md. Abdul Kadir Bhuiyan. Working Area: 1,485 sqft. 1st to 4th Floor: 3 units per floor. 5th & 6th Floor: Duplex design. Ground Floor: Common living area & entrance.',
    features: ['Duplex Design', '3 Units/Floor', 'Common Living Area', 'Modern Entrance']
  },
  {
    id: 10,
    name: 'Insaf Tower',
    category: 'residential',
    type: 'Residential Tower, G+8 Floors',
    location: 'Kajlarpara, Jatrabari, Dhaka',
    year: '2024',
    size: '3,170 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project10.png',
    tags: ['Tower', '3 Units/Floor', '1 Lift'],
    description: 'Client: Md. Rakibul Hasan & Others. Working Area: 2,674 sqft. Lift: 1. Units per floor: 3 units. Each unit includes: 3 Bedrooms, Dining, Kitchen, 2 Balconies & 3 Bathrooms.',
    features: ['1 Lift', '3 Units/Floor', '3 Bedrooms', '2 Balconies', '3 Bathrooms']
  },
  {
    id: 11,
    name: 'Sorker Tower',
    category: 'residential',
    type: 'Residential Tower, G+7 Floors',
    location: 'Matlab, Chandpur',
    year: '2023',
    size: '3,300 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project11.png',
    tags: ['Tower', '2 Units/Floor', '1 Lift'],
    description: 'Client: Md. Sanaullah Sarker. Working Area: 2,100 sqft. Lift: 1. Modern building with ground floor plus 7 floors. 2nd Floor: 1 unit. From 3rd floor, each typical floor has 2 units. Each unit includes: 3 Bedrooms, Dining, Drawing, Kitchen, 3 Balconies & 2 Bathrooms.',
    features: ['1 Lift', '2 Units/Floor', '3 Bedrooms', '3 Balconies', '2 Bathrooms']
  },
  {
    id: 12,
    name: 'Marin Tower',
    category: 'residential',
    type: 'Residential Tower, G+10 Floors',
    location: 'Fatulla, Narayanganj, Dhaka',
    year: '2024',
    size: '4,450 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project12.png',
    tags: ['Tower', '3 Units/Floor', 'Narayanganj'],
    description: 'Client: Md. Khairul Anam Bhuiyan & Others. Working Area: 3,395.97 sqft. Ground floor plus 10 storey building. Units per floor: 3 units.',
    features: ['10 Floors', '3 Units/Floor', 'Fatulla Location', 'Modern Design']
  },
  {
    id: 13,
    name: 'Mustafizur Rahman Villa',
    category: 'residential',
    type: 'Residential Building, G+10 Floors',
    location: 'Azimpur, Lalbagh, Dhaka',
    year: '2024',
    size: '4,893 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project13.png',
    tags: ['High-Rise', 'Premium', '5 Units/Floor'],
    description: 'Client: Md. Mustafizur Rahman. Working Area: 4,315 sqft. Ground floor plus 10 storey building. Units per floor: 5 units.',
    features: ['10 Floors', '5 Units/Floor', 'Premium Location', 'Modern Design']
  },
  {
    id: 14,
    name: 'Darus Salam Tower',
    category: 'commercial',
    type: 'Commercial-Cum-Residential, G+10 Floors',
    location: 'Nandipara, Khilgaon, Dhaka',
    year: '2023',
    size: '5,623 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project14.png',
    tags: ['Tower', '5 Units/Floor', 'Modern'],
    description: 'Client: Md. Alauddin & Others. Working Area: 5,125 sqft. Ground floor plus 10 storey building. Units per floor: 5 units.',
    features: ['10 Floors', '5 Units/Floor', 'Modern Design', 'Prime Location']
  },
  {
    id: 15,
    name: 'Muktar Plaza',
    category: 'commercial',
    type: 'Commercial-Cum-Residential, B+G+12 Floors', 
    location: 'Rayerbag Bus Stand, Jatrabari, Dhaka',
    year: '2024',
    size: '8,500 sqft',
    budget: '30 Cr',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project15.png',
    tags: ['Commercial', 'Residential', 'RAJUK Approved'],
    description: 'Client: Md. Abu Hanif & Others. Working Area: 7,000 sqft. Basement: Adequate parking facility. Ground to 4th Floor: Market. 4th Floor: Designated for Hospital. Remaining 5 Floors: Residential design. Units per floor: 6 units. Total flats: 30 units.',
    features: ['30 Flats', '6 Units/Floor', 'Hospital', 'Basement Parking', 'Market Space']
  },
  {
    id: 16,
    name: 'Insaf Friends Tower',
    category: 'residential',
    type: 'Residential Tower, G+8 Floors',
    location: 'Kajlarpara, Jatrabari, Dhaka',
    year: '2024',
    size: '2,430 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project16.png',
    tags: ['Tower', '2 Units/Floor', '1 Lift'],
    description: 'Client: Md. Rakibul Hasan & Others. Working Area: 2,030 sqft. Lift: 1. Units per floor: 2 units. Each unit includes: 3 Bedrooms, Dining, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['1 Lift', '2 Units/Floor', '3 Bedrooms', '2 Balconies', '2 Bathrooms']
  },
  {
    id: 17,
    name: 'Insaf Bhai Bhai Tower',
    category: 'residential',
    type: 'Residential Tower, G+7 Floors',
    location: 'Kajla School Goli, Jatrabari, Dhaka',
    year: '2024',
    size: '1,965 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project17.png',
    tags: ['Tower', '2 Units/Floor', 'Premium'],
    description: 'Client: Md. Mujibur Rahman & Others. Units per floor: 2 units. Each unit includes: 3 Bedrooms, Dining, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['2 Units/Floor', '3 Bedrooms', 'Dining', '2 Balconies', '2 Bathrooms']
  },
  {
    id: 18,
    name: 'Coastal Retreat',
    category: 'commercial',
    type: 'Commercial-Cum-Residential, G+10 Floors',
    location: 'Nandipara, Khilgaon, Dhaka',
    year: '2023',
    size: '5,623 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project18.png',
    tags: ['Tower', '5 Units/Floor', 'Modern'],
    description: 'Client: Md. Alauddin & Others. Working Area: 5,125 sqft. Ground floor plus 10 storey building. Units per floor: 5 units.',
    features: ['10 Floors', '5 Units/Floor', 'Modern Design', 'Prime Location']
  },
  {
    id: 19,
     name: 'Friends View Cottage',
    category: 'residential',
    type: 'Residential Cottage, G+9 Floors',
    location: 'Sabujbag, Dhaka',
    year: '2023',
    size: '2,475 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project19.png',
    tags: ['Cottage', '2 Units/Floor', '1 Lift'],
    description: 'Client: Md. Billal Hossain & Others. Working Area: 2,230 sqft. Lift: 1. Units per floor: 2 units. Each unit includes: 3 Bedrooms, Dining, Drawing, Kitchen, 2 Balconies & 3 Bathrooms.',
    features: ['1 Lift', '2 Units/Floor', '3 Bedrooms', 'Drawing Room', '3 Bathrooms']
  },
  {
    id: 20,
    name: 'Cozy Cottage',
    category: 'Residential',
    type: 'Residential Tower, G+8 Floors',
    location: 'Kajlarpara, Jatrabari, Dhaka',
    year: '2024',
    size: '2,430 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project20.png',
    tags: ['Tower', '2 Units/Floor', '1 Lift'],
    description: 'Client: Md. Rakibul Hasan & Others. Working Area: 2,030 sqft. Lift: 1. Units per floor: 2 units. Each unit includes: 3 Bedrooms, Dining, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['1 Lift', '2 Units/Floor', '3 Bedrooms', '2 Balconies', '2 Bathrooms']
  },
  {
    id: 21,
    name: 'Alhamdulillah Mollah Bhaban',
    category: 'residential',
    type: 'Residential Building, G+6 Floors',
    location: 'Matuail, Jatrabari, Dhaka',
    year: '2023',
    size: '1,415 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project21.png',
    tags: ['Residential', 'Multi-Unit', 'Modern'],
    description: 'Client: Md. Jahangir Mollah. Working Area: 1,175 sqft. Residential building with ground floor plus 6 floors. Ground Floor: Parking, Shop & 1 unit. 2nd, 4th, 5th & 6th Floor: 2 units each. 3rd Floor: 1 unit for owner with 4 Bedrooms, Drawing & Dining, Kitchen, 3 Balconies & 3 Bathrooms.',
    features: ['Parking', 'Shop', '4 Bedrooms', '3 Balconies', '3 Bathrooms']
  },
  {
    id: 22,
    name: 'Simhak International Company Limited',
    category: 'commercial',
    type: 'Commercial-Cum-Residential',
    location: 'Jatrabari, Dhaka',
    year: '2024',
    size: '1,700 sqft',
    budget: 'Semi-Basement + G+8 Floors',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project22.png',
    tags: ['Chinese Restaurant', 'Office', 'Residential'],
    description: 'Client: Md. Saiful Islam. Working Area: 1,466 sqft. Modern residential cum commercial building. This project features a complete multi-purpose building combining Chinese restaurant, office and residential flats.',
    features: ['Chinese Restaurant', 'Office Space', 'Residential Flats', 'Multi-Purpose Building']
  },
  {
    id: 23,
    name: 'Sabina Yasmin Villa',
    category: 'residential',
    type: 'Residential Villa',
    location: 'Jatrabari, Dhaka',
    year: '2024',
    size: '1,600 sqft',
    budget: 'G+5 Floors',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project23.png',
    tags: ['Villa', '2 Units/Floor', 'Modern'],
    description: 'Client: Md. Din Islam. Working Area: 1,230 sqft. Residential building. Units per floor: 2 units. Each unit includes: 2 Bedrooms, Dining, Living Room, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['5 Floors', '2 Units/Floor', '2 Bedrooms', 'Living Room', '2 Bathrooms']
  },
  {
    id: 24,
    name: 'Khan Manzil-3',
    category: 'residential',
    type: 'Residential Building, G+6 Floors',
    location: 'Demra, Dhaka',
    year: '2023',
    size: '1,634 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project24.png',
    tags: ['Residential', '2 Units/Floor', '1 Lift'],
    description: 'Client: Md. Sohraf Hossain. Working Area: 1,227 sqft. Lift: 1. Residential building. Units per floor: 2 units. Each unit includes: 2 Bedrooms, Dining, Kitchen, 2 Balconies & 3 Bathrooms.',
    features: ['1 Lift', '2 Units/Floor', '2 Bedrooms', '2 Balconies', '3 Bathrooms']
  },
  {
    id: 25,
    name: 'Penthouse Suite',
    category: 'residential',
    type: 'Residential Tower, G+8 Floors',
    location: 'Kajlarpara, Jatrabari, Dhaka',
    year: '2024',
    size: '2,430 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project25.png',
    tags: ['Tower', '2 Units/Floor', '1 Lift'],
    description: 'Client: Md. Rakibul Hasan & Others. Working Area: 2,030 sqft. Lift: 1. Units per floor: 2 units. Each unit includes: 3 Bedrooms, Dining, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['1 Lift', '2 Units/Floor', '3 Bedrooms', '2 Balconies', '2 Bathrooms']
  },
  {
    id: 26,
    name: 'Ponchoghur Tower',
    category: 'commercial',
    type: 'Healthcare',
    location: 'Ponchoghur',
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
    name: 'Bashar Nahar Palace',
    category: 'residential',
    type: 'Residential Palace, G+7 Floors',
    location: 'Demra, Dhaka',
    year: '2024',
    size: '2,445 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project27.png',
    tags: ['Palace', '2 Units/Floor', '1 Lift'],
    description: 'Client: Md. Moniruzzaman & Others. Working Area: 1,915 sqft. Lift: 1. Residential building. Units per floor: 2 units. Each unit includes: 3 Bedrooms, Dining, Drawing Room, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['1 Lift', '2 Units/Floor', '3 Bedrooms', 'Drawing Room', '2 Bathrooms']
  },
  {
    id: 28,
    name: 'Nazrul Villa',
    category: 'residential',
    type: 'Residential Villa, G+5 Floors',
    location: 'Jatrabari, Dhaka',
    year: '2023',
    size: '1,245 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project28.png',
    tags: ['Villa', 'Multi-Type Units', 'Modern'],
    description: 'Client: Md. Nazrul Islam & Others. Working Area: 1,095 sqft. Residential building. Floor layout: 1st Floor: 4 Bedrooms, Dining, Drawing Room, Kitchen, 3 Balconies & 3 Bathrooms. 2nd to 5th Floor: 2 units per floor. Unit 1: 3 Bedrooms, Dining, Kitchen, 1 Balcony & 2 Bathrooms. Unit 2: 2 Bedrooms, Open Space, Kitchen, 1 Balcony & 1 Bathroom.',
    features: ['5 Floors', '4 Bedrooms', '3 & 2 Bedroom Units', '3 Bathrooms', 'Open Space']
  },
  {
    id: 29,
    name: 'Mariyam Tower',
    category: 'residential',
    type: 'Residential Tower, G+8 Floors',
    location: 'Kajla, Jatrabari, Dhaka',
    year: '2024',
    size: '3,245 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/images/Featured/project29.png',
    tags: ['Tower', '4 Units/Floor', '1 Lift'],
    description: 'Client: Md. Rafiqul Islam. Working Area: 2,560 sqft. Lift: 1. Modern residential building. Units per floor: 4 units. One unit: 3 Bedrooms, Dining, Drawing Room, Kitchen, 2 Balconies & 2 Bathrooms. Remaining 3 units: 2 Bedrooms, Dining, Drawing Room, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['1 Lift', '4 Units/Floor', '3 Bedrooms Unit', '2 Bedrooms Units', '2 Bathrooms']
  },
  {
    id: 30,
    name: 'Musafir Villa',
    category: 'residential',
    type: 'Residential Villa, G+5 Floors',
    location: 'Jatrabari, Dhaka',
    year: '2024',
    size: '1,600 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project30.png',
    tags: ['Villa', '2 Units/Floor', 'Modern'],
    description: 'Client: Md. Abul Bashar Haidar. Working Area: 1,300 sqft. Residential building. Units per floor: 2 units. Each unit includes: 2 Bedrooms, Dining, Living Room, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['5 Floors', '2 Units/Floor', '2 Bedrooms', 'Living Room', '2 Bathrooms']
  },
  {
    id: 31,
    name: 'Jamia Islamia Nurul Uloom Uttarkhan',
    category: 'residential',
    type: 'Madrasa, G+5 Floors',
    location: 'Uttarkhan, Dhaka',
    year: '2024',
    size: '1,550 sqft',
    budget: '',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project31.png',
    tags: ['Madrasa', 'Educational', 'Islamic'],
    description: 'G+5 floor modern madrasa building. Land Area: 1,550 sqft. Modern Islamic educational institution.',
    features: ['5 Floors', 'Madrasa', 'Educational Institute', 'Islamic Architecture']
  },
  {
    id: 32,
    name: 'Shawpnonir (Ashulia)',
    category: 'residential',
    type: 'Residential Building, G+4 Floors',
    location: 'Ashulia, Savar, Dhaka',
    year: '2023',
    size: '2,890 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project32.png',
    tags: ['Hostel Style', '8 Bedrooms/Floor', 'Modern'],
    description: 'Client: Md. Naim Hasan. Working Area: 2,140 sqft. Residential building. Floor layout: 8 bedrooms per floor. Each bedroom has its own kitchen, balcony & bathroom.',
    features: ['4 Floors', '8 Bedrooms/Floor', 'Individual Kitchen', 'Individual Balcony', 'Individual Bathroom']
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
     name: 'Shawpnonir',
    category: 'residential',
    type: 'Residential Building, G+5 Floors',
    location: 'Fatulla, Narayanganj, Dhaka',
    year: '2024',
    size: '1,255 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project35.png',
    tags: ['Residential', '2 Units/Floor', 'Modern'],
    description: 'Client: Md. Sojib Ahmed. Working Area: 1,095 sqft. Residential building. Floor layout: 1st Floor: 3 Bedrooms, Dining, Drawing, Living Room, Kitchen, 3 Balconies & 3 Bathrooms. 2nd to 5th Floor: 2 units per floor. Unit 1: 2 Bedrooms, Dining, Kitchen, 1 Balcony & 2 Bathrooms. Unit 2: 2 Bedrooms, Dining, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['5 Floors', '2 Units/Floor', '3 & 2 Bedrooms', 'Living Room', '3 Bathrooms']
  },
  {
    id: 36,
    name: 'Horizon View',
    category: 'residential',
    type: 'Residential Building, G+4 Floors',
    location: 'Ashulia, Savar, Dhaka',
    year: '2023',
    size: '2,890 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/images/Featured/project36.png',
    tags: ['Hostel Style', '8 Bedrooms/Floor', 'Modern'],
    description: 'Client: Md. Naim Hasan. Working Area: 2,140 sqft. Residential building. Floor layout: 8 bedrooms per floor. Each bedroom has its own kitchen, balcony & bathroom.',
    features: ['4 Floors', '8 Bedrooms/Floor', 'Individual Kitchen', 'Individual Balcony', 'Individual Bathroom']
  },
  {
    id: 37,
    name: 'Al-Madina Jame Mosque',
    category: 'interior',
    type: 'Mosque, 3 Floors',
    location: 'Sonargaon, Narayanganj',
    year: '2023',
    size: 'N/A',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project37.png',
    tags: ['Mosque', 'Islamic', 'Sonargaon'],
    description: '3 storey mosque building. Location: Sonargaon, Narayanganj. Beautiful Islamic architectural design.',
    features: ['3 Floors', 'Mosque', 'Sonargaon', 'Islamic Design']
  },
  {
    id: 38,
    name: 'Maa Villa',
    category: 'residential',
    type: 'Residential Villa, G+3 Floors',
    location: 'Sutrapur, Gendaria, Dhaka',
    year: '2024',
    size: '980 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project38.png',
    tags: ['Villa', 'Compact', 'Modern'],
    description: 'Client: Md. Saidur Rahman Rokib. Working Area: 904 sqft. Residential building. Floor layout: From 1st to 3rd floor, each floor has 3 Bedrooms, Dining, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['3 Floors', '3 Bedrooms', 'Dining', '2 Balconies', '2 Bathrooms']
  },
  {
    id: 39,
    name: 'Madina Jame Masjid',
    category: 'interior',
    type: 'Mosque, G+5 Floors',
    location: 'Madinabag, Rupganj, Narayanganj, Dhaka',
    year: '2024',
    size: 'N/A',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project39.png',
    tags: ['Mosque', 'Islamic', 'Rupganj'],
    description: 'Mutawalli: Haji Md. Muhammad Ali. G+3 floor mosque building. Beautiful Islamic mosque design.',
    features: ['3 Floors', 'Mosque', 'Rupganj', 'Islamic Architecture']
  },
  {
    id: 40,
    name: 'Mosque',
    category: 'interior',
    type: 'Mosque',
    location: 'Dhaka',
    year: '2024',
    size: 'N/A',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project40.png',
    tags: ['Mosque', 'Islamic', 'Rupganj'],
    description: 'Mutawalli: Haji Md. Muhammad Ali. G+3 floor mosque building. Beautiful Islamic mosque design.',
    features: ['3 Floors', 'Mosque', 'Rupganj', 'Islamic Architecture']
  },
  {
    id: 41,
    name: 'Opal Residences',
    category: 'residential',
    type: 'Residential Building, G+5 Floors',
    location: 'Fatulla, Narayanganj, Dhaka',
    year: '2024',
    size: '1,255 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    image: '/images/Featured/project41.png',
    tags: ['Residential', '2 Units/Floor', 'Modern'],
    description: 'Client: Md. Sojib Ahmed. Working Area: 1,095 sqft. Residential building. Floor layout: 1st Floor: 3 Bedrooms, Dining, Drawing, Living Room, Kitchen, 3 Balconies & 3 Bathrooms. 2nd to 5th Floor: 2 units per floor. Unit 1: 2 Bedrooms, Dining, Kitchen, 1 Balcony & 2 Bathrooms. Unit 2: 2 Bedrooms, Dining, Kitchen, 2 Balconies & 2 Bathrooms.',
    features: ['5 Floors', '2 Units/Floor', '3 & 2 Bedrooms', 'Living Room', '3 Bathrooms']
  },
  {
    id: 42,
    name: 'Ma-Baba Swapno Nir',
    category: 'residential',
    type: 'Modern Villa, G+2 Floors',
    location: 'Kaliakair, Savar, Dhaka',
    year: '2024',
    size: '4,500 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/Featured/project42.png',
    tags: ['Villa', 'Office', 'Prayer Room'],
    description: 'Client: Md. Shahin Alam. Modern residential building. Working Area: Ground Floor: 1,916 sqft, 1st Floor: 1,944 sqft, 2nd Floor: 1,705 sqft. Ground Floor: Lobby, 1 Bedroom, Office Room, Dining, Drawing, Kitchen, Store Room, Prayer & Talim Room, 1 Balcony. 1st Floor: 4 Bedrooms, Living, Kitchen, 4 Balconies, 3 Bathrooms, Porch. 2nd Floor: 4 Bedrooms, Living, Kitchen, 4 Balconies & 3 Bathrooms.',
    features: ['Office Room', 'Prayer Room', 'Talim Room', '4 Bedrooms', '4 Balconies', '3 Bathrooms']
  },
  {
    id: 43,
     name: 'The Orchid Garden',
    category: 'residential',
    type: 'Residential Villa, G+2 Floors',
    location: 'Sujatpur, Chandpur, Comilla',
    year: '2024',
    size: '1,405 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project43.png',
    tags: ['Garden Villa', 'Compact', 'Modern'],
    description: 'Client: Md. Nasir Uddin. Working Area: 1,000 sqft. Residential building. Ground Floor: 3 Bedrooms, Dining, Kitchen, 1 Balcony & 2 Bathrooms. Typical Floor: 3 Bedrooms, Porch (front canopy section), Living, 2 Balconies & 2 Bathrooms.',
    features: ['2 Floors', '3 Bedrooms', 'Porch', 'Living', '2 Bathrooms']
  },
  {
    id: 44,
    name: 'Mosque',
    category: 'interior',
    type: 'Mosque',
    location: 'Dhaka',
    year: '2024',
    size: 'N/A',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/images/Featured/project44.png',
    tags: ['Mosque', 'Islamic', 'Rupganj'],
    description: 'Mutawalli: Haji Md. Muhammad Ali. G+3 floor mosque building. Beautiful Islamic mosque design.',
    features: ['3 Floors', 'Mosque', 'Rupganj', 'Islamic Architecture']
  },
  {
    id: 45,
    name: 'Vastra Villa',
    category: 'residential',
    type: 'Residential Villa, G+5 Floors',
    location: 'Jatrabari, Dhaka',
    year: '2023',
    size: '1,245 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project45.png',
    tags: ['Villa', 'Multi-Type Units', 'Modern'],
    description: 'Client: Md. Nazrul Islam & Others. Working Area: 1,095 sqft. Residential building. Floor layout: 1st Floor: 4 Bedrooms, Dining, Drawing Room, Kitchen, 3 Balconies & 3 Bathrooms. 2nd to 5th Floor: 2 units per floor. Unit 1: 3 Bedrooms, Dining, Kitchen, 1 Balcony & 2 Bathrooms. Unit 2: 2 Bedrooms, Open Space, Kitchen, 1 Balcony & 1 Bathroom.',
    features: ['5 Floors', '4 Bedrooms', '3 & 2 Bedroom Units', '3 Bathrooms', 'Open Space']
  },
  {
    id: 46,
    name: 'Row Houses',
    category: 'residential',
    type: 'Residential Villa, G+5 Floors',
    location: 'Jatrabari, Dhaka',
    year: '2023',
    size: '1,245 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project46.png',
    tags: ['Villa', 'Multi-Type Units', 'Modern'],
    description: 'Client: Md. Nazrul Islam & Others. Working Area: 1,095 sqft. Residential building. Floor layout: 1st Floor: 4 Bedrooms, Dining, Drawing Room, Kitchen, 3 Balconies & 3 Bathrooms. 2nd to 5th Floor: 2 units per floor. Unit 1: 3 Bedrooms, Dining, Kitchen, 1 Balcony & 2 Bathrooms. Unit 2: 2 Bedrooms, Open Space, Kitchen, 1 Balcony & 1 Bathroom.',
    features: ['5 Floors', '4 Bedrooms', '3 & 2 Bedroom Units', '3 Bathrooms', 'Open Space']
  },
  {
    id: 47,
    name: 'Sundor Ali Villa',
    category: 'residential, Duplex',
    type: 'Duplex Villa',
    location: 'Kotwali, Comilla',
    year: '2023',
    size: '2,320 sqft (Working)',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/images/Featured/project47.png',
    tags: ['Duplex', '2 Units/Floor', 'Premium'],
    description: 'Client: Md. Abdul Hannan. Duplex residential building. Typical floor plan: 2 units per floor. Each unit includes: 3 Bedrooms, Dining, Drawing, Kitchen, 3 Balconies & 2 Bathrooms.',
    features: ['Duplex', '2 Units/Floor', '3 Bedrooms', '3 Balconies', '2 Bathrooms']
  },
  {
    id: 48,
    name: 'Nexa Residency',
    category: 'commercial',
    type: 'Residential Building, G+6 Floors',
    location: 'Demra, Dhaka',
    year: '2023',
    size: '1,634 sqft',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    image: '/images/Featured/project48.png',
    tags: ['Residential', '2 Units/Floor', '1 Lift'],
    description: 'Client: Md. Sohraf Hossain. Working Area: 1,227 sqft. Lift: 1. Residential building. Units per floor: 2 units. Each unit includes: 2 Bedrooms, Dining, Kitchen, 2 Balconies & 3 Bathrooms.',
    features: ['1 Lift', '2 Units/Floor', '2 Bedrooms', '2 Balconies', '3 Bathrooms']
  },
  {
    id: 49,
    name: 'Matricchaya Villa',
    category: 'residential',
    type: 'Triplex Villa, Triplex',
    location: 'Dhaka',
    year: '2024',
    size: '1,150 sqft (Working)',
    budget: 'N/A',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/images/Featured/project49.png',
    tags: ['Triplex', '4 Bedrooms/Floor', 'Modern'],
    description: 'Triplex residential building. Ground Floor: Lobby, 4 Bedrooms, Dining, Drawing, Kitchen, 2 Balconies & 3 Bathrooms. Typical Floor: 4 Bedrooms, Dining, Drawing, Kitchen, 2 Balconies & 3 Bathrooms.',
    features: ['Triplex', '4 Bedrooms', 'Lobby', 'Drawing', '3 Bathrooms']
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
              Explore our collection of residential and commercial projects that showcase modern design, structural precision, and luxury living across Bangladesh.
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
            Join 1000+ satisfied clients who trusted us with their dream projects.
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
export const navLinks = [
  { href: '/', label: 'হোম' },
  { href: '#about', label: 'আমাদের সম্পর্কে' },
  { href: '#services', label: 'সেবাসমূহ' },
  { href: '#portfolio', label: 'প্রকল্পসমূহ' },
  { href: '#testimonials', label: 'রিভিউ' },
  { href: '#contact', label: 'যোগাযোগ' },
]

export const services = [
  {
    id: 1,
    icon: '📐',
    title: 'Land Feasibility & DAP Check',
    titleBn: 'জমি যাচাই ও DAP বিশ্লেষণ',
    description: 'জমি কি buildable? setback ঠিক আছে? এখনই জানুন।',
    details: 'DAP compliance, road width, setback requirements সহ সম্পূর্ণ analysis',
    price: '৳১৫,০০০ থেকে',
  },
  {
    id: 2,
    icon: '🏛️',
    title: 'Architectural Design & 3D',
    titleBn: 'আর্কিটেকচারাল ডিজাইন ও 3D',
    description: 'আপনার taste + zoning law একসাথে।',
    details: '3D visualization সহ RAJUK guidelines মেনে complete design',
    price: '৳৮০-১২০/sqft',
  },
  {
    id: 3,
    icon: '🏗️',
    title: 'Structural Engineering',
    titleBn: 'স্ট্রাকচারাল ইঞ্জিনিয়ারিং',
    description: 'In-house structural engineers দ্বারা।',
    details: 'BNBC code অনুযায়ী foundation, column, beam, slab calculation',
    price: 'Design package included',
  },
  {
    id: 4,
    icon: '📋',
    title: 'RAJUK Approval Process',
    titleBn: 'RAJUK অনুমোদন প্রক্রিয়া',
    description: 'File জমা থেকে approval পর্যন্ত।',
    details: 'Complete documentation, submission, follow-up — আপনাকে কোথাও যেতে হবে না',
    price: '৳৮০,০০০ থেকে',
  },
  {
    id: 5,
    icon: '👷',
    title: 'Construction Supervision',
    titleBn: 'নির্মাণ তত্ত্বাবধান',
    description: 'Drawing থেকে execution পর্যন্ত।',
    details: 'Site visit, quality control, contractor coordination',
    price: 'Monthly/Milestone based',
  },
  {
    id: 6,
    icon: '🏢',
    title: 'Commercial Consultancy',
    titleBn: 'বাণিজ্যিক পরামর্শ',
    description: 'Maximum ROI optimization।',
    details: 'Floor planning, tenant mix, revenue maximization strategy',
    price: 'Custom quote',
  },
]

export const portfolio = {
  residential: [
    {
      id: 1,
      name: 'Villa Serenity',
      type: '5-bed luxury duplex',
      location: 'Bashundhara R/A',
      area: '3,800 sqft',
      year: '2024',
      status: 'Completed',
      image: '/portfolio/villa1.jpg'
    },
    {
      id: 2,
      name: 'The White Residence',
      type: 'Modern minimalist home',
      location: 'Dhanmondi',
      area: '2,500 sqft',
      year: '2023',
      status: 'Completed',
      image: '/portfolio/villa2.jpg'
    },
    {
      id: 3,
      name: 'Garden View Home',
      type: 'Eco-friendly design',
      location: 'Uttara',
      area: '4,200 sqft',
      year: '2024',
      status: 'Under Construction',
      image: '/portfolio/villa3.jpg'
    },
  ],
  commercial: [
    {
      id: 1,
      name: 'Trade Tower',
      type: 'Mixed-use complex',
      floors: 'G+8',
      location: 'Motijheel',
      area: '45,000 sqft',
      year: '2023',
      status: 'Completed',
      image: '/portfolio/comm1.jpg'
    },
    {
      id: 2,
      name: 'Apex Plaza',
      type: 'Retail & office',
      floors: 'G+6',
      location: 'Gulshan',
      area: '32,000 sqft',
      year: '2024',
      status: 'Approved',
      image: '/portfolio/comm2.jpg'
    },
  ]
}

export const testimonials = [
  {
    id: 1,
    name: 'জনাব আহমেদ হোসেন',
    role: 'Homeowner, Gulshan',
    text: 'আমার স্বপ্নের বাড়ি তৈরিতে INSAF Limited এর অবদান অসাধারণ। RAJUK approval প্রক্রিয়া এত সহজ করে দিয়েছে যে বিশ্বাসই করতে পারছিলাম না।',
    rating: 5,
    project: 'Villa Serenity'
  },
  {
    id: 2,
    name: 'Mrs. Tahmina Rahman',
    role: 'Developer',
    text: 'Professional, transparent, and delivered on time. Their structural team saved us from potential disasters. Worth every taka!',
    rating: 5,
    project: 'Apex Plaza'
  },
  {
    id: 3,
    name: 'ইঞ্জিনিয়ার মাহমুদুল হক',
    role: 'Plot Owner',
    text: '530+ প্রজেক্ট এর track record দেখে কাজ দিয়েছিলাম। এখন বুঝতে পারছি কেন তারা সেরা। Design, execution, approval সব কিছুতে excellence!',
    rating: 5,
    project: 'Garden View Home'
  },
]

export const faqs = [
  {
    q: 'RAJUK approval এ কতদিন সময় লাগে?',
    a: 'সাধারণত ৩-৬ মাস। তবে আমরা proper documentation এর মাধ্যমে এই সময় কমিয়ে আনার চেষ্টা করি। আমাদের track record অনুযায়ী গড়ে ৪ মাস।'
  },
  {
    q: 'Architectural ফি কত?',
    a: 'Residential এর জন্য সাধারণত built-up area এর ৳৮০-১২০/sqft। Commercial এর জন্য custom quote। Free consultation এ বিস্তারিত জানানো হয়।'
  },
  {
    q: 'Structural design আলাদা খরচ?',
    a: 'না। আমাদের architectural package এ structural engineering included থাকে। কারণ আমরা বিশ্বাস করি এটা optional না, mandatory।'
  },
  {
    q: 'Construction supervision করেন?',
    a: 'হ্যাঁ, optional হিসেবে। Monthly বা milestone-based visit packages আছে। এতে design consistency নিশ্চিত হয়।'
  },
]

export const stats = {
  projects: '530+',
  years: '12+',
  success: '100%',
  team: '15+',
}
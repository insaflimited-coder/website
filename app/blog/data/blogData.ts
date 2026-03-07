// Type Definitions
export interface Blog {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  gradient: string
  tags?: string[]
}

export interface Category {
  id: string
  name: string
  count: number
}

// Blog Data
export const blogPosts: Blog[] = [
  {
  id: 1,
  slug: 'pile-foundation-construction-guide-bangladesh',
  title: 'পাইল কি? কনস্ট্রাকশন প্রজেক্টে পাইলিং করার সঠিক নিয়ম ও পদ্ধতি',
  excerpt: 'বাড়ি বা বহুতল ভবন নির্মাণের সবচেয়ে গুরুত্বপূর্ণ অংশ হলো এর ভিত্তি। জানুন পাইল কি, কেন করা হয়, এবং সঠিক পাইলিং পদ্ধতি সম্পর্কে বিস্তারিত।',
  content: `
    <p>বাড়ি বা যেকোনো বহুতল ভবন নির্মাণের স্বপ্ন দেখার পর সবচেয়ে চিন্তার বিষয় হয়ে দাঁড়ায় এর ভিত্তি বা ফাউন্ডেশন। ঢাকা শহর এবং এর আশেপাশের এলাকার, বিশেষ করে যাত্রাবাড়ী, রায়েরবাগ বা নতুন ভরাট করা অঞ্চলগুলোর মাটির ধারণক্ষমতা সব জায়গায় সমান নয়। এখানেই চলে আসে "পাইল" বা "পাইলিং" এর ধারণা।</p>

    <p>সঠিক পাইলিং ছাড়া একটি বহুতল ভবন তাসের ঘরের মতোই ঝুঁকিপূর্ণ। কিন্তু পাইল কি? কেন এটি করা হয়, পাইলিংয়ের প্রকারভেদ এবং কাজ শুরুর আগে একজন ক্লায়েন্ট হিসেবে আপনার কী কী নিয়ম জানা উচিত—তার আদ্যোপান্ত নিয়ে ইনসাফ বিল্ডিং ডিজাইনের আজকের এই বিস্তারিত গাইড।</p>

    <h2>পাইল কি? (What is a Pile in Construction?)</h2>
    
    <p>ইঞ্জিনিয়ারিং ভাষায়, পাইল (Pile) হলো কংক্রিট, স্টিল বা কাঠের তৈরি একটি দীর্ঘ সিলিন্ডার বা কলাম আকৃতির স্ট্রাকচার, যা মাটির গভীরে প্রবেশ করানো হয়। যখন ভূমির উপরের স্তরের মাটি ভবনের বিশাল ভার বা লোড নিতে অক্ষম হয়, তখন পাইলের মাধ্যমে সেই লোড মাটির অনেক গভীরে থাকা শক্ত স্তরে (Hard Strata) স্থানান্তর করা হয়।</p>

    <blockquote>সহজ কথায়, পাইল হলো আপনার ভবনের অদৃশ্য পা। মাটির নিচে থেকে এই পা-গুলোই পুরো বিল্ডিংয়ের ওজন বহন করে ভবনটিকে সোজা ও নিরাপদ রাখে।</blockquote>

    <h3>লোড ট্রান্সফারের ওপর ভিত্তি করে পাইল মূলত দুই প্রকার:</h3>
    
    <ul>
      <li><strong>এন্ড বিয়ারিং পাইল (End Bearing Pile):</strong> এই পাইলগুলো ভবনের পুরো ওজন সরাসরি মাটির নিচে থাকা শক্ত পাথুরে বা অত্যন্ত দৃঢ় স্তরে স্থানান্তর করে।</li>
      <li><strong>ফ্রিকশন পাইল (Friction Pile):</strong> যখন মাটির গভীরে কোনো শক্ত স্তর পাওয়া যায় না, তখন এই পাইল ব্যবহার করা হয়। এটি পাইলের গা এবং চারপাশের মাটির মধ্যকার ঘর্ষণ বল (Frictional resistance) ব্যবহার করে ভবনের ওজন ধরে রাখে।</li>
    </ul>

    <h2>কখন আপনার প্রজেক্টে পাইলিং করা বাধ্যতামূলক?</h2>

    <p>সয়েল টেস্ট বা মাটি পরীক্ষার রিপোর্ট ছাড়া পাইলিংয়ের সিদ্ধান্ত নেওয়া যায় না। বাংলাদেশ ন্যাশনাল বিল্ডিং কোড (BNBC) এবং স্ট্রাকচারাল ইঞ্জিনিয়ারিংয়ের নিয়ম অনুযায়ী নিচের পরিস্থিতিগুলোতে পাইলিং করা বাধ্যতামূলক:</p>

    <ul>
      <li><strong>মাটির ভারবহন ক্ষমতা (SBC) কম হলে:</strong> মাটির Safe Bearing Capacity যদি ভবনের প্রতি স্কয়ার ফিটের লোডের চেয়ে কম হয়।</li>
      <li><strong>বহুতল ভবন (High-rise Building):</strong> সাধারণত ৭ বা ১০ তলার অধিক উচ্চতার ভবনে উইন্ড লোড (বাতাসের চাপ) এবং ডেড লোড সামলাতে পাইলিং মাস্ট।</li>
      <li><strong>পানিবহুল বা ভরাট মাটি:</strong> নদীর তীরবর্তী এলাকা, ডোবা বা সদ্য ভরাট করা জমিতে সাধারণ ফাউন্ডেশন (Shallow Foundation) টিকবে না।</li>
      <li><strong>বেজমেন্ট নির্মাণ:</strong> কমার্শিয়াল বা রেসিডেনশিয়াল প্রজেক্টে আন্ডারগ্রাউন্ড পার্কিং বা বেজমেন্ট থাকলে।</li>
    </ul>

    <h2>পাইলিং করার সঠিক নিয়ম ও পদ্ধতি (Step-by-Step Process)</h2>

    <p>বাংলাদেশে সাধারণত কাস্ট-ইন-সিটু (Cast-in-Situ) বা বোরড পাইল সবচেয়ে বেশি ব্যবহৃত হয়। একটি নিখুঁত পাইলিং কাজের ওপর পুরো বিল্ডিংয়ের নিরাপত্তা নির্ভর করে। ইনসাফ বিল্ডিং ডিজাইনের এক্সপার্টরা কনস্ট্রাকশন সাইটে নিচের ধাপগুলো কঠোরভাবে মনিটর করেন:</p>

    <h3>ধাপ ১: নির্ভুল লে-আউট এবং সেন্টারিং</h3>
    <p>কাজ শুরুর প্রথম শর্ত হলো আর্কিটেকচারাল এবং স্ট্রাকচারাল ড্রয়িং অনুযায়ী সাইটে লে-আউট দেওয়া। থিওডোলাইট বা টোটাল স্টেশন (Total Station) ব্যবহার করে প্রতিটি পাইলের সেন্টার পয়েন্ট মাটির ওপর মার্ক করা হয়। এক ইঞ্চি ভুল হলে পুরো কলামের এলাইনমেন্ট নষ্ট হয়ে যাবে।</p>

    <h3>ধাপ ২: বোরিং বা মাটি খনন</h3>
    <p>পাইল রিগ মেশিনের (Tripod বা Rotary Rig) সাহায্যে নির্ধারিত পয়েন্টে মাটি খনন শুরু হয়।</p>
    <p><strong>বেন্টোনাইট স্লারি (Bentonite Slurry) ব্যবহার:</strong> গর্ত করার সময় চারপাশের মাটি যেন ধসে না পড়ে, সেজন্য বেন্টোনাইট পাউডার ও পানির মিশ্রণ গর্তে ঢালা হয়। এটি গর্তের দেয়ালে একটি প্রলেপ তৈরি করে মাটিকে ধরে রাখে।</p>

    <h3>ধাপ ৩: রিবার কেজ (লোহার খাঁচা) তৈরি ও স্থাপন</h3>
    <p>সঠিক গ্রেডের রড (যেমন: 500W বা 60 Grade) দিয়ে স্ট্রাকচারাল ড্রয়িং অনুযায়ী পাইলের খাঁচা তৈরি করা হয়।</p>
    <ul>
      <li>খাঁচাটি গর্তে নামানোর আগে এর চারপাশে কংক্রিটের তৈরি "ক্লিয়ার কভার ব্লক (Cover Blocks)" লাগানো বাধ্যতামূলক। এটি রডকে মাটির সংস্পর্শ থেকে দূরে রাখে এবং মরিচা ধরা রোধ করে।</li>
      <li>খাঁচাটি যেন সোজাভাবে গর্তে নামে, তা ক্রেন বা মেশিনের সাহায্যে নিশ্চিত করা হয়।</li>
    </ul>

    <h3>ধাপ ৪: ট্রিমি পাইপ (Tremie Pipe) সেটিং</h3>
    <p>কংক্রিট ঢালাই কখনোই সরাসরি গর্তের ওপর থেকে ফেলা উচিত নয়। এতে কংক্রিটের পাথর ও বালি আলাদা হয়ে যায় (Segregation)। এই সমস্যা এড়াতে গর্তের ভেতর ট্রিমি পাইপ নামানো হয় এবং ফানেলের মাধ্যমে নিচ থেকে ওপরের দিকে ঢালাই করা হয়।</p>

    <h3>ধাপ ৫: কংক্রিট ঢালাই (Concreting)</h3>
    <p>পাইলিংয়ের সবচেয়ে ক্রিটিক্যাল পার্ট হলো ঢালাই।</p>
    <ul>
      <li>মিক্স ডিজাইন অনুযায়ী সঠিক অনুপাতে পাথর, বালি, সিমেন্ট এবং পানি মিশিয়ে কংক্রিট তৈরি করতে হয়।</li>
      <li>ঢালাইয়ের কাজ একটানা শেষ করতে হবে। মাঝখানে দীর্ঘ বিরতি দিলে "কোল্ড জয়েন্ট" তৈরি হতে পারে, যা পাইলের শক্তি অর্ধেক কমিয়ে দেয়।</li>
      <li>কংক্রিটের ওয়ার্কিবিলিটি চেক করার জন্য ঢালাইয়ের আগে অবশ্যই 'স্লাপ টেস্ট (Slump Test)' করে নিতে হবে।</li>
    </ul>

    <h2>ক্লায়েন্টদের জন্য সতর্কতা: পাইলিংয়ে সাধারণত কী কী ভুল হয়?</h2>

    <p>একজন সচেতন মালিক হিসেবে আপনার কিছু বিষয় খেয়াল রাখা উচিত:</p>

    <ul>
      <li><strong>মাড ওয়াশ (Mud Wash) না করা:</strong> ঢালাইয়ের আগে গর্তের ভেতরের কাদা ও ময়লা পানি পরিষ্কার না করলে পাইলের নিচে নরম কাদা থেকে যায়, ফলে পাইল লোড নিতে পারে না।</li>
      <li><strong>নেকিং (Necking):</strong> ঢালাইয়ের সময় মাটি ধসে কংক্রিটের সাথে মিশে গেলে পাইলের মাঝখানে সরু হয়ে যায়। এটি একটি মারাত্মক স্ট্রাকচারাল ফল্ট।</li>
      <li><strong>সস্তা ম্যাটেরিয়াল ব্যবহার:</strong> রড বা সিমেন্টের গ্রেড নিয়ে আপস করলে পুরো ভবনের আয়ু কমে যায়।</li>
    </ul>

    <h2>ইনসাফ বিল্ডিং ডিজাইনের সাথে কেন কাজ করবেন?</h2>

    <p>একটি ত্রুটিমুক্ত ফাউন্ডেশন আপনার আজীবনের শান্তির নিশ্চয়তা। পাইলিংয়ের মতো অত্যন্ত টেকনিক্যাল কাজে কোনো অদক্ষ কন্ট্রাক্টরের ওপর ভরসা করা বোকামি। ইনসাফ বিল্ডিং ডিজাইন লিমিটেড অভিজ্ঞ স্ট্রাকচারাল ইঞ্জিনিয়ারদের সরাসরি তত্ত্বাবধানে সয়েল টেস্ট থেকে শুরু করে পাইলিং এবং সুপারস্ট্রাকচারের কাজ সম্পন্ন করে। আমরা কোয়ালিটি নিয়ে কোনো আপস করি না।</p>

    <p>আপনার প্রজেক্টের সয়েল টেস্ট এবং পাইলিং সংক্রান্ত যেকোনো পরামর্শের জন্য আজই আমাদের সাথে যোগাযোগ করুন অথবা ভিজিট করুন আমাদের অফিস।</p>

    <h2>FAQs (সাধারণ জিজ্ঞাসা)</h2>

    <h3>১. একটি পাইলের গভীরতা কতটুকু হওয়া উচিত?</h3>
    <p><strong>উত্তর:</strong> এটি সম্পূর্ণ নির্ভর করে সয়েল টেস্ট (Soil Test) রিপোর্টের ওপর। মাটির শক্ত স্তর যত গভীরে পাওয়া যাবে, পাইলের গভীরতা তত বেশি হবে। এটি সাধারণত ৪০ ফিট থেকে ১২০ ফিট বা তার বেশিও হতে পারে।</p>

    <h3>২. রিং মেশিন (Rotary Rig) এবং ট্রাইপড মেশিনের মধ্যে পার্থক্য কী?</h3>
    <p><strong>উত্তর:</strong> রোটারি রিগ আধুনিক, দ্রুত এবং বেশি গভীরতায় কাজ করতে পারে, কম্পন কম হয়। এটি বড় প্রজেক্টের জন্য ভালো। অন্যদিকে, ট্রাইপড মেশিন ছোট জায়গা এবং মাঝারি প্রজেক্টের জন্য বেশি উপযোগী।</p>

    <h3>৩. পাইলিংয়ের খরচ কীভাবে কমানো যায়?</h3>
    <p><strong>উত্তর:</strong> মানসম্মত ইঞ্জিনিয়ারিং ডিজাইনের মাধ্যমে ওভার-ডিজাইন রোধ করে খরচ কমানো সম্ভব। সঠিক সয়েল টেস্ট রিপোর্ট থাকলে ইঞ্জিনিয়ার ঠিক যতটুকু পাইল দরকার ততটুকুই ডিজাইন করবেন, ফলে ম্যাটেরিয়াল সেভ হবে।</p>
  `,
  category: 'Construction',
  author: 'Insaf Building Design Team',
  date: 'May 15, 2025',
  readTime: '8 min read',
  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  tags: ['পাইলিং', 'ফাউন্ডেশন', 'কনস্ট্রাকশন', 'সিভিল ইঞ্জিনিয়ারিং', 'বিল্ডিং ডিজাইন']
  },
  {
    id: 2,
    slug: 'modern-minimalist-design-2024',
    title: 'Modern Minimalist Home Design Trends 2024',
    excerpt: 'Discover the latest trends in minimalist architecture combining functionality with aesthetics.',
    content: `
      <h2>What is Minimalist Design?</h2>
      <p>Minimalist design focuses on simplicity, clean lines, and functional spaces...</p>
      
      <h3>Key Trends for 2024:</h3>
      <ul>
        <li>Neutral color palettes</li>
        <li>Multi-functional furniture</li>
        <li>Natural lighting emphasis</li>
        <li>Sustainable materials</li>
      </ul>
      
      <blockquote>"Less is more" - Ludwig Mies van der Rohe</blockquote>
      
      <h3>Implementation Tips:</h3>
      <p>Start with decluttering and focus on quality over quantity...</p>
    `,
    author: 'Ar. Sarah Ahmed',
    date: 'Dec 8, 2024',
    readTime: '6 min',
    category: 'design',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['Minimalism', 'Design', 'Trends']
  },
  {
    id: 3,
    slug: 'commercial-floor-planning-roi',
    title: 'Commercial ভবনে ROI বাড়াতে Floor Planning',
    excerpt: 'কীভাবে স্মার্ট ফ্লোর প্ল্যানিং আপনার commercial property এর মূল্য বাড়াতে পারে।',
    content: `
      <h2>Commercial Floor Planning এর গুরুত্ব</h2>
      <p>একটি সঠিক floor plan আপনার সম্পত্তির মূল্য ৩০% পর্যন্ত বাড়াতে পারে...</p>
      
      <h3>ROI বাড়ানোর কৌশল:</h3>
      <ol>
        <li>Flexible space design</li>
        <li>Natural light maximization</li>
        <li>Efficient circulation</li>
        <li>Future expansion planning</li>
      </ol>
    `,
    author: 'Ar. Mohammad Insaf',
    date: 'Dec 5, 2024',
    readTime: '7 min',
    category: 'architecture',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['Commercial', 'ROI', 'Floor Planning']
  },
  {
    id: 4,
    slug: 'bnbc-building-code-essentials',
    title: 'Understanding BNBC: Building Code Essentials',
    excerpt: 'A comprehensive guide to Bangladesh National Building Code requirements and compliance.',
    content: `
      <h2>BNBC Overview</h2>
      <p>Bangladesh National Building Code (BNBC) হল দেশের সকল নির্মাণ কাজের জন্য প্রমিত নিয়মকানুন...</p>
      
      <h3>Key Requirements:</h3>
      <ul>
        <li>Structural safety standards</li>
        <li>Fire safety measures</li>
        <li>Accessibility guidelines</li>
        <li>Environmental considerations</li>
      </ul>
    `,
    author: 'Eng. Rahman Khan',
    date: 'Dec 3, 2024',
    readTime: '10 min',
    category: 'construction',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    tags: ['BNBC', 'Building Code', 'Compliance']
  },
  {
    id: 5,
    slug: 'interior-design-small-spaces',
    title: 'Interior Design Tips for Small Spaces',
    excerpt: 'Maximize your small space with clever interior design strategies and space-saving solutions.',
    content: `
      <h2>ছোট জায়গা বড় করে দেখানোর টিপস</h2>
      <p>Limited space কোনো সমস্যা নয় যদি আপনি সঠিক ডিজাইন strategy অনুসরণ করেন...</p>
      
      <h3>প্রমাণিত কৌশল:</h3>
      <ul>
        <li>হালকা রঙের ব্যবহার</li>
        <li>Multi-functional furniture</li>
        <li>Mirror এর কৌশলগত ব্যবহার</li>
        <li>Vertical storage solution</li>
      </ul>
    `,
    author: 'Ar. Nabila Islam',
    date: 'Nov 28, 2024',
    readTime: '4 min',
    category: 'design',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tags: ['Interior', 'Small Space', 'Design Tips']
  },
  {
    id: 6,
    slug: 'rajuk-approval-timeline',
    title: 'RAJUK Approval Timeline: What to Expect',
    excerpt: 'Complete breakdown of the RAJUK approval process and realistic timeline expectations.',
    content: `
      <h2>RAJUK Approval Process</h2>
      <p>সম্পূর্ণ RAJUK approval পেতে সাধারণত ৩-৬ মাস সময় লাগে...</p>
      
      <h3>Step-by-Step Timeline:</h3>
      <ol>
        <li><strong>Document Preparation:</strong> 2-3 weeks</li>
        <li><strong>Initial Submission:</strong> 1 week</li>
        <li><strong>Review Process:</strong> 4-8 weeks</li>
        <li><strong>Corrections (if needed):</strong> 2-4 weeks</li>
        <li><strong>Final Approval:</strong> 2-3 weeks</li>
      </ol>
    `,
    author: 'Eng. Rahman Khan',
    date: 'Nov 25, 2024',
    readTime: '8 min',
    category: 'rajuk',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    tags: ['RAJUK', 'Timeline', 'Process']
  }
]

// Helper Functions
export const getBlogBySlug = (slug: string): Blog | undefined => {
  return blogPosts.find(blog => blog.slug === slug)
}

export const getBlogsByCategory = (category: string): Blog[] => {
  if (category === 'all') return blogPosts
  return blogPosts.filter(blog => blog.category === category)
}

export const getRelatedBlogs = (currentBlog: Blog, limit: number = 3): Blog[] => {
  return blogPosts
    .filter(blog => blog.category === currentBlog.category && blog.id !== currentBlog.id)
    .slice(0, limit)
}
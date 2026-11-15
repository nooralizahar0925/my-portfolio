export const links = {
  linkedin: 'https://www.linkedin.com/in/noor-alizah-afifah-r-826630148/',
  github: 'https://github.com/nooralizahar0925',
  whatsapp: 'https://wa.me/6285884571705',
  email: 'mailto:nooralizahar@gmail.com',
  companyEmail: 'mailto:afifah.ridwan@solusiproteksimandiri.com',
};

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  role: string;
  context: string;
  year: string;
  stack: Record<string, string[]>;
  tags: string[];
  contributions: string[];
  detail: string;
  url?: string;
  image?: string;
  note?: string;
}

export const projects: Project[] = [
  {
    "id": "sapa",
    "number": "01",
    "name": "SAPA Gampong / Gampong Blang Digital",
    "category": "Mobile & platforms",
    "description": "A resident mobile app, village administration dashboard, and API for letter requests, public information, and community services.",
    "role": "Full-Stack Developer",
    "context": "Gampong Blang Digital",
    "year": "2026",
    "stack": {
      "Mobile": [
        "Flutter",
        "Dart",
        "Riverpod",
        "GoRouter",
        "Dio",
        "Hive"
      ],
      "Frontend": [
        "React",
        "TypeScript",
        "Vite",
        "TanStack Query"
      ],
      "Backend": [
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "REST APIs",
        "JWT",
        "Zod"
      ],
      "Integrations": [
        "Firebase Cloud Messaging",
        "QR verification",
        "PDF generation",
        "Nodemailer"
      ],
      "Delivery": [
        "Nginx",
        "Docker",
        "Vitest",
        "Supertest"
      ]
    },
    "tags": [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "Dio",
      "Hive",
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "REST APIs",
      "JWT",
      "Zod",
      "Firebase Cloud Messaging",
      "QR verification",
      "PDF generation",
      "Nodemailer",
      "Nginx",
      "Docker",
      "Vitest",
      "Supertest"
    ],
    "contributions": [
      "Village-service platform spanning a Flutter resident app, React admin dashboard, and Express API",
      "Letter request and approval workflow, generated PDFs, and QR verification",
      "Content management, demographics, village information, prayer schedules, and notifications"
    ],
    "detail": "A resident mobile app, village administration dashboard, and API for letter requests, public information, and community services.",
    "image": "/projects/sapa.webp"
  },
  {
    "id": "hellomatcha",
    "number": "02",
    "name": "Hello Matcha",
    "category": "Brand & commerce",
    "description": "Custom WordPress website for a Singapore matcha brand, with product discovery, education, and a responsive editorial layout.",
    "role": "Main Developer",
    "context": "Hello Matcha",
    "year": "",
    "stack": {
      "CMS": [
        "WordPress",
        "Custom theme development",
        "PHP"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Parallax animation"
      ],
      "Integrations": [
        "Contact Form 7",
        "reCAPTCHA",
        "Yoast SEO",
        "Google Tag Manager"
      ]
    },
    "tags": [
      "WordPress",
      "Custom theme development",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Parallax animation",
      "Contact Form 7",
      "reCAPTCHA",
      "Yoast SEO",
      "Google Tag Manager"
    ],
    "contributions": [
      "Main website development",
      "Custom theme and responsive frontend implementation",
      "Product, educational, and brand content presentation"
    ],
    "detail": "Custom WordPress website for a Singapore matcha brand, with product discovery, education, and a responsive editorial layout.",
    "url": "https://www.hellomatcha.sg/",
    "image": "/projects/hellomatcha.webp"
  },
  {
    "id": "ntu",
    "number": "03",
    "name": "NTU College of Engineering",
    "category": "Education & research",
    "description": "A Sitefinity website presenting NTU’s engineering programmes, research, news, and institutional content.",
    "role": "Main Developer",
    "context": "NTU Singapore",
    "year": "",
    "stack": {
      "CMS": [
        "Sitefinity",
        "ASP.NET CMS"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "Integrations": [
        "Google Tag Manager",
        "ShareThis"
      ]
    },
    "tags": [
      "Sitefinity",
      "ASP.NET CMS",
      "HTML",
      "CSS",
      "JavaScript",
      "Google Tag Manager",
      "ShareThis"
    ],
    "contributions": [
      "Main website development on Sitefinity",
      "Frontend implementation for the College of Engineering website",
      "Programme, research, and editorial content interfaces"
    ],
    "detail": "A Sitefinity website presenting NTU’s engineering programmes, research, news, and institutional content.",
    "url": "https://www.ntu.edu.sg/engineering/",
    "image": "/projects/ntu.webp"
  },
  {
    "id": "nanofab",
    "number": "04",
    "name": "NTU Nanofab",
    "category": "Education & research",
    "description": "A custom WordPress website for nanofabrication facilities, equipment, research capabilities, and facility access.",
    "role": "Main Developer",
    "context": "NTU Nanofab",
    "year": "",
    "stack": {
      "CMS": [
        "WordPress",
        "PHP",
        "Custom theme",
        "Gutenberg",
        "Custom blocks"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Interactive maps"
      ],
      "Integrations": [
        "Contact Form 7",
        "reCAPTCHA",
        "Yoast SEO",
        "Google Tag Manager"
      ]
    },
    "tags": [
      "WordPress",
      "PHP",
      "Custom theme",
      "Gutenberg",
      "Custom blocks",
      "HTML",
      "CSS",
      "JavaScript",
      "Interactive maps",
      "Contact Form 7",
      "reCAPTCHA",
      "Yoast SEO",
      "Google Tag Manager"
    ],
    "contributions": [
      "Main website development",
      "Custom WordPress theme and NTU block-based content",
      "Research capability, equipment, and facility information interfaces"
    ],
    "detail": "A custom WordPress website for nanofabrication facilities, equipment, research capabilities, and facility access.",
    "url": "https://www.ntunanofab.com/",
    "image": "/projects/nanofab.webp"
  },
  {
    "id": "kandooma",
    "number": "05",
    "name": "Holiday Inn Resort Kandooma",
    "category": "Hospitality",
    "description": "A resort website with custom WordPress development, scroll animation, booking widgets, and marketing integrations.",
    "role": "Main Developer",
    "context": "Kandooma Maldives",
    "year": "",
    "stack": {
      "CMS": [
        "WordPress",
        "PHP",
        "Custom theme"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "ScrollTrigger"
      ],
      "Integrations": [
        "D-EDGE booking",
        "Revinate",
        "The Hotels Network",
        "Contact Form 7",
        "reCAPTCHA",
        "Yoast SEO",
        "Google Tag Manager"
      ]
    },
    "tags": [
      "WordPress",
      "PHP",
      "Custom theme",
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "ScrollTrigger",
      "D-EDGE booking",
      "Revinate",
      "The Hotels Network",
      "Contact Form 7",
      "reCAPTCHA",
      "Yoast SEO",
      "Google Tag Manager"
    ],
    "contributions": [
      "Main website development",
      "Custom responsive resort frontend",
      "Website includes booking and guest marketing integrations"
    ],
    "detail": "A resort website with custom WordPress development, scroll animation, booking widgets, and marketing integrations.",
    "url": "https://kandooma-maldives.com/",
    "image": "/projects/kandooma.webp"
  },
  {
    "id": "gili",
    "number": "06",
    "name": "Gili Lankanfushi",
    "category": "Hospitality",
    "description": "WordPress development for the Maldives resort, including custom content blocks, SEO, analytics, and booking integrations.",
    "role": "Developer",
    "context": "Bonsey Jaden",
    "year": "2023",
    "stack": {
      "CMS": [
        "WordPress",
        "PHP",
        "Gutenberg",
        "Custom blocks"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "AOS",
        "Slick",
        "Fancybox"
      ],
      "Integrations": [
        "Yoast SEO",
        "Google Analytics",
        "Google Tag Manager",
        "Emarsys",
        "Fastbooking",
        "D-EDGE",
        "Revinate",
        "Contact Form 7"
      ],
      "Delivery": [
        "LEMP"
      ]
    },
    "tags": [
      "WordPress",
      "PHP",
      "Gutenberg",
      "Custom blocks",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "AOS",
      "Slick",
      "Fancybox",
      "Yoast SEO",
      "Google Analytics",
      "Google Tag Manager",
      "Emarsys",
      "Fastbooking",
      "D-EDGE",
      "Revinate",
      "Contact Form 7",
      "LEMP"
    ],
    "contributions": [
      "WordPress CMS and Gutenberg development",
      "Yoast SEO, Google Analytics, Emarsys, and Fastbooking integrations",
      "LEMP server configuration"
    ],
    "detail": "WordPress development for the Maldives resort, including custom content blocks, SEO, analytics, and booking integrations.",
    "url": "https://gili-lankanfushi.com/",
    "image": "/projects/gili.webp"
  },
  {
    "id": "dso",
    "image": "/projects/dso.webp",
    "number": "07",
    "name": "DSO National Laboratories — DSO50",
    "category": "Education & research",
    "description": "Frontend support for the commemorative website telling the story of DSO’s 50 years of defence research.",
    "role": "Frontend Developer",
    "context": "Bonsey Jaden",
    "year": "2022",
    "stack": {
      "Frontend": [
        "AngularJS",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      "Integrations": [
        "Google Analytics"
      ]
    },
    "tags": [
      "AngularJS",
      "JavaScript",
      "HTML",
      "CSS",
      "Google Analytics"
    ],
    "contributions": [
      "Frontend development support for the DSO50 website"
    ],
    "detail": "Frontend support for the commemorative website telling the story of DSO’s 50 years of defence research.",
    "url": "https://www.dso50.com.sg/",
    "note": "AngularJS is the technology recorded for my engagement. The current live site may have evolved since 2022."
  },
  {
    "id": "join-dso",
    "image": "/projects/join-dso.webp",
    "number": "08",
    "name": "DSO Career Hub — Join DSO",
    "category": "Education & research",
    "description": "Recruitment website for DSO National Laboratories, with careers, scholarships, internships, and stories.",
    "role": "Developer",
    "context": "Bonsey Jaden",
    "year": "",
    "stack": {
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "Swiper",
        "GSAP",
        "ScrollTrigger",
        "Alpine.js"
      ],
      "Build": [
        "Vite"
      ],
      "Integrations": [
        "Google Analytics"
      ]
    },
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "Swiper",
      "GSAP",
      "ScrollTrigger",
      "Alpine.js",
      "Vite",
      "Google Analytics"
    ],
    "contributions": [
      "Website development for the DSO Career Hub during my work with Bonsey Jaden"
    ],
    "detail": "Development work on DSO National Laboratories’ recruitment website at Bonsey Jaden, presenting careers, scholarships, internships, and stories.",
    "url": "https://join.dso.org.sg/"
  },
  {
    "id": "firstskool",
    "number": "09",
    "name": "My First Skool",
    "category": "Education & research",
    "description": "Preschool website development with CMS customisation, animation, SEO, and marketing integration.",
    "role": "Developer",
    "context": "Bonsey Jaden",
    "year": "2022",
    "stack": {
      "CMS": [
        "WordPress",
        "PHP",
        "SiteOrigin",
        "Gutenberg",
        "Custom blocks",
        "Stackable"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "jQuery",
        "Swiper"
      ],
      "Integrations": [
        "Yoast SEO",
        "HubSpot",
        "Google Tag Manager"
      ]
    },
    "tags": [
      "WordPress",
      "PHP",
      "SiteOrigin",
      "Gutenberg",
      "Custom blocks",
      "Stackable",
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "jQuery",
      "Swiper",
      "Yoast SEO",
      "HubSpot",
      "Google Tag Manager"
    ],
    "contributions": [
      "WordPress CMS and SiteOrigin customisation",
      "GSAP animation",
      "Yoast SEO and HubSpot integration"
    ],
    "detail": "Preschool website development with CMS customisation, animation, SEO, and marketing integration.",
    "url": "https://www.myfirstskool.com/",
    "image": "/projects/firstskool.webp"
  },
  {
    "id": "pmis",
    "image": "/projects/pmis.webp",
    "number": "10",
    "name": "PMIS — SISDA",
    "category": "Government & systems",
    "description": "Project management information system for monitoring loan-funded water-resource projects, progress, and reporting.",
    "role": "PMIS Assistant / Developer",
    "context": "PT. Duta Cipta Mandiri Engineering Consultant",
    "year": "2023–2024",
    "stack": {
      "Backend": [
        "Laravel",
        "PHP"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "Chart.js",
        "Owl Carousel",
        "WOW.js"
      ]
    },
    "tags": [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "Chart.js",
      "Owl Carousel",
      "WOW.js"
    ],
    "contributions": [
      "Project Management Information System support for PMC SIMURP",
      "Project monitoring and reporting platform work"
    ],
    "detail": "Project management information system for monitoring loan-funded water-resource projects, progress, and reporting.",
    "url": "https://pmis.sisda.net/",
    "note": "Public frontend libraries are verified from the current site; Laravel is documented in my PUPR PMIS development experience."
  },
  {
    "id": "momentree",
    "number": "11",
    "name": "Momentree",
    "category": "Brand & commerce",
    "description": "A Laravel-based digital invitation platform with custom invitation experiences, RSVP workflows, and payment integration.",
    "role": "Web Developer",
    "context": "Momentree",
    "year": "2023–Present",
    "stack": {
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "GSAP",
        "ScrollTrigger",
        "AOS",
        "Sass",
        "Axios",
        "Laravel Mix",
        "DataTables"
      ],
      "Integrations": [
        "Google Tag Manager",
        "Midtrans",
        "QR code generation",
        "Excel import / export"
      ],
      "Backend": [
        "Laravel",
        "PHP",
        "Laravel Sanctum"
      ]
    },
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "GSAP",
      "ScrollTrigger",
      "AOS",
      "Sass",
      "Axios",
      "Laravel Mix",
      "DataTables",
      "Google Tag Manager",
      "Midtrans",
      "QR code generation",
      "Excel import / export",
      "Laravel",
      "PHP",
      "Laravel Sanctum"
    ],
    "contributions": [
      "Custom project-based website and platform development",
      "Digital invitation experiences and supporting platform functionality"
    ],
    "detail": "Custom web development for Momentree, covering digital invitations and platform features. The Laravel codebase includes payment processing, QR codes, tabular data tools, and spreadsheet import/export; the public frontend uses Bootstrap, GSAP, and AOS.",
    "url": "https://momentree.co.id/",
    "image": "/projects/momentree.webp"
  },
  {
    "id": "cetaphil",
    "number": "12",
    "name": "Cetaphil Friends Singapore",
    "category": "Brand & commerce",
    "description": "Maintenance of a customer rewards platform with skincare samples, receipt uploads, points, and campaigns.",
    "role": "Maintainer",
    "context": "Bonsey Jaden / CUE Group",
    "year": "",
    "stack": {
      "CMS": [
        "WordPress",
        "PHP",
        "WooCommerce",
        "Custom theme"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "GSAP",
        "Swiper",
        "Dropzone"
      ],
      "Integrations": [
        "myCred",
        "Contact Form 7",
        "Brevo",
        "OneTrust",
        "reCAPTCHA"
      ]
    },
    "tags": [
      "WordPress",
      "PHP",
      "WooCommerce",
      "Custom theme",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "GSAP",
      "Swiper",
      "Dropzone",
      "myCred",
      "Contact Form 7",
      "Brevo",
      "OneTrust",
      "reCAPTCHA"
    ],
    "contributions": [
      "WordPress and WooCommerce website maintenance"
    ],
    "detail": "Maintenance of a customer rewards platform with skincare samples, receipt uploads, points, and campaigns.",
    "url": "https://www.cetaphilfriends.com.sg/",
    "image": "/projects/cetaphil.webp",
    "note": "Includes technologies visible on the current website; my documented role was maintenance."
  },
  {
    "id": "jlm",
    "number": "13",
    "name": "Intranet JLM",
    "category": "Government & systems",
    "description": "An internal single sign-on platform connecting HR, service registration, helpdesk, reservations, support, and mobile APIs.",
    "role": "Software Engineer",
    "context": "PT. Jala Lintas Media",
    "year": "2021–2025",
    "stack": {
      "Backend": [
        "Laravel",
        "PHP",
        "REST APIs",
        "Single sign-on"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
      ],
      "Integrations": [
        "Odoo",
        "Zimbra Mail",
        "Zoom",
        "Catapa Payroll",
        "Xendit",
        "Doku"
      ],
      "Delivery": [
        "LEMP",
        "Linux",
        "Nginx",
        "MySQL"
      ]
    },
    "tags": [
      "Laravel",
      "PHP",
      "REST APIs",
      "Single sign-on",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Odoo",
      "Zimbra Mail",
      "Zoom",
      "Catapa Payroll",
      "Xendit",
      "Doku",
      "LEMP",
      "Linux",
      "Nginx",
      "MySQL"
    ],
    "contributions": [
      "Internal HR, service registration, helpdesk, reservation, and support systems",
      "REST APIs for internal mobile applications",
      "Odoo, Zimbra, Zoom, Catapa, Xendit, and Doku integrations"
    ],
    "detail": "An internal single sign-on platform connecting HR, service registration, helpdesk, reservations, support, and mobile APIs.",
    "image": "/projects/jlm.webp",
    "url": "https://intranet.jlm.net.id/"
  },
  {
    "id": "loan",
    "number": "14",
    "name": "Loan Management System",
    "category": "Government & systems",
    "description": "Loan management, monitoring, and evaluation system for a PUPR Ministry outsourcing engagement.",
    "role": "Web Programmer",
    "context": "PT. Natieva Global Internasional",
    "year": "2020–2021",
    "stack": {
      "Backend": [
        "Laravel",
        "PHP"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Vue.js",
        "Vue Router",
        "Vuetify",
        "ApexCharts"
      ],
      "Delivery": [
        "LEMP",
        "Linux",
        "Nginx",
        "MySQL"
      ]
    },
    "tags": [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Vue.js",
      "Vue Router",
      "Vuetify",
      "ApexCharts",
      "LEMP",
      "Linux",
      "Nginx",
      "MySQL"
    ],
    "contributions": [
      "Web-based loan management system development"
    ],
    "detail": "Loan management, monitoring, and evaluation system for a PUPR Ministry outsourcing engagement.",
    "url": "https://emonitoring.sisda.net/login",
    "image": "/projects/loan.webp"
  },
  {
    "id": "siva",
    "number": "15",
    "name": "SIVA Kemenperin",
    "category": "Government & systems",
    "description": "Web platform project for Indonesia’s Ministry of Industry.",
    "role": "Developer",
    "context": "SIVA Kemenperin",
    "year": "2020–2021",
    "stack": {
      "Skills": [
        "Web application development"
      ]
    },
    "tags": [
      "Web application development"
    ],
    "contributions": [
      "Website development for the SIVA Kemenperin project"
    ],
    "detail": "Web platform project for Indonesia’s Ministry of Industry."
  },
  {
    "id": "pratista",
    "number": "16",
    "name": "Pratista Skincare Consultation",
    "category": "Brand & commerce",
    "description": "Company profile and online consultation website for Pratista Skincare.",
    "role": "Developer",
    "context": "Pratista Skincare",
    "year": "2020",
    "stack": {
      "Skills": [
        "Web development",
        "Company profile website",
        "Consultation website"
      ]
    },
    "tags": [
      "Web development",
      "Company profile website",
      "Consultation website"
    ],
    "contributions": [
      "Company profile and consultation website development"
    ],
    "detail": "Company profile and online consultation website for Pratista Skincare."
  },
  {
    "id": "koin-mobile",
    "number": "17",
    "name": "KOIN Application",
    "category": "Mobile & platforms",
    "description": "Mobile application enabling store owners to browse and order products.",
    "role": "Mobile Frontend Developer",
    "context": "KO-IN (Toko Indonesia)",
    "year": "2019–2020",
    "stack": {
      "Mobile": [
        "Flutter",
        "Dart"
      ],
      "Skills": [
        "Mobile UI development"
      ]
    },
    "tags": [
      "Flutter",
      "Dart",
      "Mobile UI development"
    ],
    "contributions": [
      "Frontend development for the KOIN mobile application"
    ],
    "detail": "Mobile application enabling store owners to browse and order products."
  },
  {
    "id": "pos",
    "number": "18",
    "name": "KOIN Point of Sale",
    "category": "Government & systems",
    "description": "A web-based point-of-sale system for products, inventory, and sales, connected with internal ERP systems.",
    "role": "IT Programmer",
    "context": "KO-IN (Toko Indonesia)",
    "year": "2019–2020",
    "stack": {
      "Backend": [
        "CodeIgniter",
        "PHP",
        "Django",
        "Python"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
      ],
      "Integrations": [
        "Odoo ERP"
      ],
      "Delivery": [
        "LAMP",
        "Linux",
        "Apache",
        "MySQL"
      ]
    },
    "tags": [
      "CodeIgniter",
      "PHP",
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Odoo ERP",
      "LAMP",
      "Linux",
      "Apache",
      "MySQL"
    ],
    "contributions": [
      "Point-of-sale system development",
      "Odoo ERP integration with internal systems"
    ],
    "detail": "A web-based point-of-sale system for products, inventory, and sales, connected with internal ERP systems."
  },
  {
    "id": "crm",
    "number": "19",
    "name": "Bank Jatim Training CRM",
    "category": "Government & systems",
    "description": "CRM training system built for Bank Jatim through an outsourcing engagement.",
    "role": "Web Programmer",
    "context": "PT. Natieva Global Internasional",
    "year": "2020",
    "stack": {
      "Backend": [
        "Laravel",
        "PHP"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
      ],
      "Delivery": [
        "LEMP",
        "Linux",
        "Nginx",
        "MySQL"
      ]
    },
    "tags": [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "LEMP",
      "Linux",
      "Nginx",
      "MySQL"
    ],
    "contributions": [
      "CRM training system development"
    ],
    "detail": "CRM training system built for Bank Jatim through an outsourcing engagement."
  },
  {
    "id": "americanstandard",
    "image": "/projects/americanstandard.webp",
    "number": "20",
    "name": "American Standard APAC",
    "category": "Maintenance",
    "description": "Maintenance of the regional American Standard website on Craft CMS.",
    "role": "Maintainer",
    "context": "Bonsey Jaden / CUE Group",
    "year": "",
    "stack": {
      "CMS": [
        "Craft CMS"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    "tags": [
      "Craft CMS",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "contributions": [
      "Craft CMS website maintenance"
    ],
    "detail": "Maintenance of the regional American Standard website on Craft CMS.",
    "url": "https://www.americanstandard-apac.com/",
    "note": "My engagement used Craft CMS. The current public website uses WordPress and Elementor after a later platform change."
  },
  {
    "id": "airselangor",
    "image": "/projects/airselangor.webp",
    "number": "21",
    "name": "Air Selangor",
    "category": "Maintenance",
    "description": "Maintenance of Air Selangor’s WordPress website during my agency engagement.",
    "role": "Maintainer",
    "context": "Bonsey Jaden / CUE Group",
    "year": "",
    "stack": {
      "CMS": [
        "WordPress",
        "PHP"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    "tags": [
      "WordPress",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "contributions": [
      "WordPress CMS website maintenance"
    ],
    "detail": "Maintenance of Air Selangor’s WordPress website during my agency engagement.",
    "url": "https://www.airselangor.com/",
    "note": "My engagement used WordPress. The current public website has since moved to Next.js."
  },
  {
    "id": "everise",
    "image": "/projects/everise.webp",
    "number": "22",
    "name": "Everise",
    "category": "Maintenance",
    "description": "Maintenance work on the Everise corporate WordPress website.",
    "role": "Maintainer",
    "context": "Bonsey Jaden / CUE Group",
    "year": "",
    "stack": {
      "CMS": [
        "WordPress",
        "PHP"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    "tags": [
      "WordPress",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "contributions": [
      "WordPress corporate website maintenance"
    ],
    "detail": "Maintenance work on the Everise corporate WordPress website.",
    "url": "https://weareeverise.com/"
  },
  {
    "id": "misc",
    "image": "/projects/misc.webp",
    "number": "23",
    "name": "MISC Group",
    "category": "Maintenance",
    "description": "Maintenance of an enterprise corporate website on Umbraco CMS.",
    "role": "Maintainer",
    "context": "Bonsey Jaden / CUE Group",
    "year": "",
    "stack": {
      "CMS": [
        "Umbraco",
        "ASP.NET CMS"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    "tags": [
      "Umbraco",
      "ASP.NET CMS",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "contributions": [
      "Umbraco CMS website maintenance"
    ],
    "detail": "Maintenance of an enterprise corporate website on Umbraco CMS.",
    "url": "https://www.miscgroup.com/"
  },
  {
    "id": "wer4pets",
    "number": "24",
    "name": "WeR4Pets",
    "category": "Mobile & platforms",
    "description": "Maintenance work across a pet-focused mobile application and its backend.",
    "role": "Maintainer",
    "context": "Bonsey Jaden / CUE Group",
    "year": "",
    "stack": {
      "Mobile": [
        "React Native",
        "JavaScript"
      ],
      "Backend": [
        "Node.js",
        "Express"
      ]
    },
    "tags": [
      "React Native",
      "JavaScript",
      "Node.js",
      "Express"
    ],
    "contributions": [
      "React Native mobile application maintenance",
      "Express backend maintenance"
    ],
    "detail": "Maintenance work across a pet-focused mobile application and its backend."
  },
  {
    "id": "e-archive",
    "number": "25",
    "name": "PUPR E-Archive",
    "category": "Government & systems",
    "description": "Electronic archive system developed for a PUPR Ministry outsourcing engagement.",
    "role": "Web Programmer",
    "context": "PT. Natieva Global Internasional",
    "year": "2020–2021",
    "stack": {
      "Backend": [
        "Laravel",
        "PHP"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
      ],
      "Delivery": [
        "LEMP",
        "Linux",
        "Nginx",
        "MySQL"
      ]
    },
    "tags": [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "LEMP",
      "Linux",
      "Nginx",
      "MySQL"
    ],
    "contributions": [
      "Web-based electronic archive system development"
    ],
    "detail": "Electronic archive system developed for a PUPR Ministry outsourcing engagement."
  },
  {
    "id": "natieva",
    "number": "26",
    "name": "Natieva In-house Website",
    "category": "Brand & commerce",
    "description": "In-house website development for PT. Natieva Global Internasional.",
    "role": "Web Programmer",
    "context": "PT. Natieva Global Internasional",
    "year": "2020–2021",
    "stack": {
      "Backend": [
        "Laravel",
        "PHP"
      ],
      "Frontend": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
      ],
      "Delivery": [
        "LEMP",
        "Linux",
        "Nginx",
        "MySQL"
      ]
    },
    "tags": [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "LEMP",
      "Linux",
      "Nginx",
      "MySQL"
    ],
    "contributions": [
      "In-house website development"
    ],
    "detail": "In-house website development for PT. Natieva Global Internasional."
  }
];

export const experience = [
  { company: 'Mediatropy', role: 'Senior Full Stack Developer', date: 'Jan 2026 — Present', text: 'Websites, CMS platforms, and integrations for regional and international clients.' },
  { company: 'CUE Group', role: 'Senior Full Stack Engineer', date: 'Jan — Dec 2024', text: 'Client development and maintenance across web, mobile, CMS, and APIs.' },
  { company: 'Bonsey Jaden', role: 'Senior Full Stack Engineer', date: 'Jul 2022 — Dec 2023', text: 'Digital experiences for hospitality, education, and enterprise brands.' },
  { company: 'PT. Jala Lintas Media', role: 'Software Engineer', date: 'Oct 2021 — Oct 2025', text: 'Internal business systems, third-party services, and payment integrations.' },
];

export const skills = [
  { number: '01', title: 'Frontend development', description: 'Interfaces that feel as good as they work.', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'] },
  { number: '02', title: 'Backend & integrations', description: 'The dependable systems behind the experience.', items: ['Node.js', 'PHP', 'Laravel', 'REST APIs', 'PostgreSQL', 'Payment gateways'] },
  { number: '03', title: 'CMS & digital platforms', description: 'Flexible foundations that teams can grow with.', items: ['WordPress', 'WooCommerce', 'Sitefinity', 'Craft CMS', 'Umbraco'] },
];

export const companyProducts = [
  {
    id: 'assets', skills: ['React', 'Tailwind CSS', 'React Router'], name: 'Assets Management System', category: 'ASSET INTELLIGENCE',
    description: 'Track inventory, locations, ownership, maintenance, and asset reports in one workspace.',
    features: ['Asset inventory & tracking', 'Assignments & locations', 'Reports & analytics', 'Role-based access'],
    image: '/products/assets-dashboard.webp',
    url: 'https://solusiproteksimandiri.com/product/assets-management-system',
    demo: 'https://assets-demo.solusiproteksimandiri.com',
  },
  {
    id: 'broker', skills: ['Next.js', 'React', 'CSS'], name: 'Broker Management System', category: 'INSURANCE OPERATIONS',
    description: 'Connect client records, quotations, policies, claims, and insurance broker reporting.',
    features: ['Clients & quotations', 'Policies & claims', 'Operational reports', 'Team permissions'],
    image: '/products/broker-dashboard.webp',
    url: 'https://solusiproteksimandiri.com/product/broker-management-system',
    demo: 'https://broker-demo.solusiproteksimandiri.com',
  },
  {
    id: 'factory', skills: ['Next.js', 'React', 'CSS'], name: 'Factory Tracking System', category: 'FACTORY OPERATIONS',
    description: 'Follow orders through production, quality checks, packaging, and delivery.',
    features: ['Order tracking', 'Production workflow', 'Operational reports', 'Customer tracking page'],
    image: '/products/factory-dashboard.webp',
    url: 'https://solusiproteksimandiri.com/product/factory-tracking-system',
    demo: 'https://factorytracking-demo.solusiproteksimandiri.com',
  },
  {
    id: 'gym', skills: ['Next.js', 'React', 'CSS'], name: 'Gym Management System', category: 'FITNESS OPERATIONS',
    description: 'Manage memberships, classes, trainers, payments, and branches, with a mobile-friendly member portal.',
    features: ['Memberships & check-in', 'Classes & trainers', 'Payments & reports', 'Member portal'],
    image: '/products/gym-member.webp',
    url: 'https://solusiproteksimandiri.com/product/gym-management-system',
    demo: 'https://gymmanagement-demo.solusiproteksimandiri.com',
  },
  {
    id: 'venue', skills: ['Next.js', 'React', 'Tailwind CSS', 'CMS development'], name: 'Venue Experience Website & CMS', category: 'VENUE & HOSPITALITY',
    description: 'A venue website with editable content, media, events, offers, analytics, and private event enquiries.',
    features: ['Responsive website', 'Editable CMS & media', 'SEO & analytics', 'Private enquiries'],
    image: '/products/venue-design.webp',
    url: 'https://solusiproteksimandiri.com/product/venue-experience-website-cms',
    demo: 'https://venues-demo.solusiproteksimandiri.com',
  },
];

export const companyBrands: Record<string, { logo: string; url: string; className?: string }> = {
  'Mediatropy': { logo: '/companies/mediatropy.svg', url: 'https://www.mediatropy.com/', className: 'brand-mediatropy' },
  'CUE Group': { logo: '/companies/cue.webp', url: 'https://www.cue.group/' },
  'Bonsey Jaden': { logo: '/companies/bonseyjaden.webp', url: 'https://www.linkedin.com/company/bonsey-jaden/' },
  'PT. Jala Lintas Media': { logo: '/companies/jlm.webp', url: 'https://jlm.net.id/', className: 'brand-jlm' },
};

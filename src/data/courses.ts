export interface CourseItem {
  id: string;
  title: string;
  slug: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  mode: "Hybrid (Online Google Meet + Offline Kadapa Classroom)";
  tagline: string;
  badge?: string;
  overview: string;
  certificateIncluded: boolean;
  internshipAvailable: boolean;
  notesHtml?: string;
  notesMd?: string;
  highlights: string[];
  curriculum: {
    module: string;
    topics: string[];
  }[];
  prerequisites: string;
  targetAudience: string[];
}

export const coursesData: CourseItem[] = [
  {
    id: "automation-testing",
    title: "Mastering Automation Testing with Java & Selenium",
    slug: "automation-testing-selenium-java",
    level: "All Levels",
    duration: "10 - 12 Weeks",
    mode: "Hybrid (Online Google Meet + Offline Kadapa Classroom)",
    tagline: "From Core Java fundamentals to building enterprise-grade Page Object Model automation frameworks.",
    badge: "Flagship QA / Highest Placements",
    certificateIncluded: true,
    internshipAvailable: true,
    notesHtml: "/notes/automation-testing-notes.html",
    notesMd: "/notes/automation-testing-notes.md",
    overview:
      "Kadapa's #1 premier test automation program designed by senior SDET architects. Master Core Java, Selenium WebDriver 4, TestNG, Cucumber BDD, REST Assured API validation, and Jenkins CI/CD. 100% practical, framework-building code delivered inside our Kadapa lab and interactive online batches.",
    highlights: [
      "🎓 Verified Course Completion Certificate with Credential ID",
      "💼 Hands-on Internship on Live Client Projects (Vijaya's Yummy Food & Mana Tours)",
      "Core Java Fundamentals & OOPs Architecture (Collections, Streams, Exceptions)",
      "Selenium 4 WebDriver, Dynamic Locators, Waits & Cross-Browser Grids",
      "TestNG & Cucumber BDD Hybrid Framework with ExtentReports",
      "Git, Maven & GitHub Actions CI/CD Automated Test Pipeline",
      "1-on-1 ATS Resume Optimization & MNC Technical Mock Interviews",
    ],
    curriculum: [
      {
        module: "Module 1: Software QA Fundamentals & Manual Testing",
        topics: [
          "SDLC vs STLC, Agile Scrum Framework (Sprints, Epics, User Stories)",
          "Black-Box Testing Techniques (BVA, Equivalence Partitioning)",
          "Writing Professional Test Plans, Scenarios & Traceability Matrices",
          "Defect Life Cycle & Jira Bug Tracking with reproduction logs",
        ],
      },
      {
        module: "Module 2: Core Java for Automation Engineers",
        topics: [
          "Java Syntax, Flow Control & Data Types",
          "OOPs: Inheritance, Polymorphism, Encapsulation & Abstraction",
          "Java Collections Framework (List, Set, Map, Iterators)",
          "Exception Handling & Apache POI (Excel Data-Driven Testing)",
          "Java 8+ Streams, Lambda Expressions & String Manipulations",
        ],
      },
      {
        module: "Module 3: Selenium WebDriver 4 & Locator Engineering",
        topics: [
          "WebDriver Architecture & Browser Drivers (Chrome, Firefox, Edge)",
          "Advanced Dynamic XPath Axes & Complex CSS Selectors",
          "Handling Dropdowns, Checkboxes, iFrames, Alerts & Windows",
          "Implicit, Explicit (WebDriverWait), and Fluent Synchronization",
          "Actions Class: Mouse Hover, Drag-and-Drop, JavaScriptExecutor",
        ],
      },
      {
        module: "Module 4: TestNG, BDD Cucumber & CI/CD Frameworks",
        topics: [
          "Page Object Model (POM) Design Pattern with PageFactory",
          "TestNG Annotations, Priority, Groups, Parallel Runs & DataProviders",
          "Cucumber BDD: Feature Files, Step Definitions & Test Runners",
          "ExtentReports & Allure Interactive HTML Reporting",
          "Maven Build Lifecycle, Git Version Control & GitHub Actions CI/CD",
        ],
      },
    ],
    prerequisites: "Basic computer familiarity. No prior coding experience required; Java taught from Day 1.",
    targetAudience: [
      "B.Tech / MCA / Degree graduates seeking IT careers in Kadapa & Pan-India",
      "Manual testers wanting to upgrade to high-paying Automation & SDET roles",
      "Career switchers aiming for MNC IT placements",
    ],
  },
  {
    id: "digital-marketing",
    title: "Advanced Digital Marketing & AI Growth Masterclass",
    slug: "advanced-digital-marketing-growth-masterclass",
    level: "All Levels",
    duration: "8 - 10 Weeks",
    mode: "Hybrid (Online Google Meet + Offline Kadapa Classroom)",
    tagline: "Master Meta Ads, Google Ads ROI, Local SEO, WhatsApp Automation & AI Copywriting for Businesses, Freelancers & Growth Hackers.",
    badge: "High ROI / Business & Freelancing",
    certificateIncluded: true,
    internshipAvailable: true,
    notesHtml: "/notes/digital-marketing-ai-notes.html",
    notesMd: "/notes/digital-marketing-ai-notes.md",
    overview:
      "A comprehensive, ROI-first digital marketing program tailored for business owners, entrepreneurs, freelancers, and aspiring performance marketers across Kadapa and India. Learn how to launch high-converting Meta and Google Ads, dominate Local Google Search & Maps rankings, automate customer WhatsApp funnels, and scale revenue with AI-powered marketing tools.",
    highlights: [
      "🎓 Verified Course Completion Certificate with Credential ID",
      "💼 Guaranteed Marketing Internship on Live Client Campaigns (E-Commerce & Travel)",
      "Meta Ads Mastery: Facebook & Instagram Lead Gen, Advantage+ & Retargeting",
      "Google Search, Performance Max & YouTube Ads with high-intent keyword targeting",
      "Local SEO Dominance: Google Business Profile #1 Map Pack ranking for local businesses",
      "WhatsApp Business API Automation & High-Converting Broadcast Funnels",
      "AI Marketing Stack: ChatGPT, Claude, Midjourney & Canva for viral ad creatives",
      "Client Acquisition Secrets: How to land ₹25,000–₹50,000/month freelance retainers",
    ],
    curriculum: [
      {
        module: "Module 1: Performance Meta Ads (Instagram & Facebook)",
        topics: [
          "Meta Business Suite & Ads Manager Setup from scratch",
          "Laser-targeted Audience Research, Custom Audiences & Lookalikes",
          "Creating High-Converting Ad Creatives & Video Hook Frameworks",
          "Meta Pixel, Conversion API (CAPI) & Retargeting Funnels",
          "Budget Optimization: Scaling from ₹500/day to high-volume revenue",
        ],
      },
      {
        module: "Module 2: Google Ads & High-Intent Search Marketing",
        topics: [
          "Google Ads Account Architecture & Keyword Match Types",
          "Search Ads, Performance Max & YouTube Video Ads Campaigns",
          "Negative Keyword Strategy & Quality Score Optimization",
          "Conversion Tracking with Google Tag Manager & Google Analytics 4",
        ],
      },
      {
        module: "Module 3: Local SEO & Google Business Profile Ranking",
        topics: [
          "Ranking Local Businesses on Google Maps (Kadapa & Tier-2/3 Cities)",
          "Google Business Profile (GBP) Verification, Citations & Review Velocity",
          "On-Page SEO: Keywords, Meta Tags, Schema Markup & Content Architecture",
          "Local Link Building & Commercial Directory Submission",
        ],
      },
      {
        module: "Module 4: WhatsApp Automation, AI Content & Client Pitching",
        topics: [
          "WhatsApp Business API Setup, Chatbots & Click-to-WhatsApp Funnels",
          "Prompt Engineering for Marketing: Ad Copies, Scripts & Email Sequences",
          "Canva Pro Design Mastery for Social Media & Display Ad Graphics",
          "Freelancing Masterclass: Pricing packages, client contracts & proposals",
        ],
      },
    ],
    prerequisites: "Basic internet browsing knowledge. Ideal for business owners, freelancers, and students.",
    targetAudience: [
      "Local business owners wanting to double their daily customer inquiries",
      "Freelancers aiming to offer digital marketing services globally",
      "Students & freshers seeking high-demand digital marketing agency roles",
      "Coaching institutes, real estate agents, doctors & retail store owners",
    ],
  },
  {
    id: "mobile-app-development",
    title: "Cross-Platform Mobile App Development (Flutter, React Native, Android & iOS)",
    slug: "cross-platform-mobile-app-development-flutter-react-native",
    level: "All Levels",
    duration: "12 - 14 Weeks",
    mode: "Hybrid (Online Google Meet + Offline Kadapa Classroom)",
    tagline: "Build & launch native-performance Android and iOS apps from a single codebase with Flutter, React Native, Firebase & Supabase.",
    badge: "High Salary / Android & iOS",
    certificateIncluded: true,
    internshipAvailable: true,
    notesHtml: "/notes/mobile-app-flutter-notes.html",
    notesMd: "/notes/mobile-app-flutter-notes.md",
    overview:
      "Learn to design, develop, and publish cross-platform mobile apps for both Android and iOS devices. This program combines Flutter (Dart) and React Native fundamentals with real-world cloud backends (Supabase & Firebase), offline storage, payment gateways, and direct deployment to the Google Play Store and Apple App Store.",
    highlights: [
      "🎓 Verified Course Completion Certificate with Credential ID",
      "💼 Live Mobile App Development Internship on Real Commercial Apps",
      "Single Codebase for Both Google Play Store & Apple App Store",
      "Flutter & Dart Deep-Dive: Widgets, State Management & Responsive UIs",
      "Supabase Realtime Database, Firebase Authentication & Push Notifications",
      "Hardware Integration: Geolocation, Camera, SQLite Storage & Biometrics",
      "Payment Gateway Integration: Razorpay, Stripe, and Direct UPI",
      "Google Play Console & Apple App Store Publishing Guidelines",
    ],
    curriculum: [
      {
        module: "Module 1: Mobile App Fundamentals & Flutter / Dart",
        topics: [
          "Mobile App Ecosystem: Android vs iOS Architecture",
          "Dart Programming Language: Syntax, OOPs, Async/Await & Streams",
          "Flutter Core: Stateless & Stateful Widgets, Layouts, Forms & Themes",
          "Navigation & Declarative Routing (GoRouter)",
          "Responsive Design for Phones, Tablets, and Foldable Displays",
        ],
      },
      {
        module: "Module 2: State Management & Architecture Patterns",
        topics: [
          "State Management Strategies: Provider, Riverpod & Bloc",
          "Clean Architecture: Presentation, Domain & Data Layers",
          "Local Persistence with Hive & SQLite / Shared Preferences",
          "Error Handling, Caching & Offline-First Mobile Architectures",
        ],
      },
      {
        module: "Module 3: Backend Integration, Realtime & APIs",
        topics: [
          "Connecting RESTful APIs & WebSocket Realtime Streams",
          "Supabase Database & Realtime Subscriptions Integration",
          "Firebase Authentication (Phone OTP, Google Sign-in) & Cloud Firestore",
          "Push Notifications with Firebase Cloud Messaging (FCM)",
          "Device Hardware: GPS Maps, Camera Capture, Sensors & Biometrics",
        ],
      },
      {
        module: "Module 4: Commercial Capstone & App Store Publishing",
        topics: [
          "Building a Live Delivery & Food Ordering App (Vijaya's Food model)",
          "Payment Gateway Integration: UPI, Razorpay & Stripe In-App Billing",
          "App Performance Profiling, Memory Optimization & Battery Efficiency",
          "App Store & Google Play Store Assets, App Signing, and Release Deployments",
        ],
      },
    ],
    prerequisites: "Basic programming logic. Familiarity with any language is helpful, but Dart is taught from ground up.",
    targetAudience: [
      "B.Tech / MCA freshers aspiring to become Mobile App Developers",
      "Web developers wanting to transition to high-paying mobile app engineering",
      "Entrepreneurs building their own mobile product MVP",
    ],
  },
  {
    id: "fullstack-java",
    title: "Full-Stack Software Development (Java + Spring Boot + React 19)",
    slug: "fullstack-java-developer",
    level: "All Levels",
    duration: "14 - 16 Weeks",
    mode: "Hybrid (Online Google Meet + Offline Kadapa Classroom)",
    tagline: "Become a complete enterprise full-stack engineer: build secure backends with Spring Boot and modern frontends with React 19.",
    badge: "Enterprise Career Track",
    certificateIncluded: true,
    internshipAvailable: true,
    notesHtml: "/notes/fullstack-java-notes.html",
    notesMd: "/notes/fullstack-java-notes.md",
    overview:
      "Designed for students and developers who want to build end-to-end commercial web applications. You will learn modern frontend development (React 19, JavaScript ES6+, Tailwind), enterprise Java backend engineering (Spring Boot 3, Hibernate, JPA), database management with PostgreSQL/Supabase, and cloud deployment.",
    highlights: [
      "🎓 Verified Course Completion Certificate with Credential ID",
      "💼 Commercial Project Internship with MOMO IT Technologies Engineering Team",
      "Modern Web Fundamentals: HTML5, CSS3, JavaScript ES6+ & Tailwind CSS",
      "React 19 Component Architecture, Hooks, State & Modern Next.js App Router",
      "Spring Boot 3, Spring Data JPA & Hibernate ORM Microservices",
      "RESTful APIs, JWT Authentication & Spring Security 6",
      "PostgreSQL Database Design, Complex Joins & Query Optimization",
      "Deploying to Cloud Platforms (Vercel, Render, VPS, Docker Basics)",
    ],
    curriculum: [
      {
        module: "Module 1: Modern Frontend with React 19 & Next.js",
        topics: [
          "Modern JavaScript (ES6+, Async/Await, Destructuring, Closures)",
          "React Core: Components, Props, State, Custom Hooks & Context API",
          "Tailwind CSS for responsive enterprise UI layouts",
          "Axios & Fetch API integration with backend services",
        ],
      },
      {
        module: "Module 2: Enterprise Backend with Spring Boot 3",
        topics: [
          "Spring Framework Architecture, Inversion of Control & Dependency Injection",
          "Spring Boot 3 Web Starter & RESTful Controllers",
          "Spring Data JPA with PostgreSQL / MySQL",
          "Spring Security 6, Password Encryption & JWT Token Authentication",
          "Global Exception Handling, Logging & Validation",
        ],
      },
      {
        module: "Module 3: Full-Stack Integration, Databases & Deployment",
        topics: [
          "Connecting React Frontend to Spring Boot Microservices",
          "Database Migrations, Relational Modeling & Schema Design",
          "Building a Real-World Capstone Web Application",
          "Deployment to Cloud Platforms, Environment Management & CI/CD",
        ],
      },
    ],
    prerequisites: "Dedication and computer basics. Programming taught from foundational scratch.",
    targetAudience: [
      "College graduates aiming for Product & Service company roles in Bangalore, Hyderabad, Chennai & Kadapa",
      "Aspiring Full-Stack Software Engineers",
      "Developers looking to upgrade to modern React 19 + Spring Boot 3",
    ],
  },
];

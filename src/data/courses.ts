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
    badge: "Most Popular / Kadapa Flagship",
    overview:
      "Our premier flagship program in Kadapa that has trained dozens of successful software test automation engineers. This course delivers deep practical mastery in Core Java, Selenium WebDriver, TestNG, Cucumber BDD, and building robust, maintainable test frameworks from scratch.",
    highlights: [
      "100% Practical, Project-Based Live Framework Building",
      "Core Java Fundamentals & Object-Oriented Architecture",
      "Selenium 4 WebDriver, Locators & Synchronization",
      "TestNG & Cucumber BDD Framework Design",
      "Git, Maven, Jenkins & GitHub Actions CI/CD Integration",
      "Mock Interviews & Resume Preparation for MNCs",
    ],
    curriculum: [
      {
        module: "Module 1: Core Java for Automation Engineers",
        topics: [
          "Java Syntax, Data Types & Flow Control",
          "OOPs: Inheritance, Polymorphism, Encapsulation & Abstraction",
          "Collections Framework (List, Set, Map, Iterators)",
          "Exception Handling & Custom Exceptions",
          "File I/O and Properties Configuration",
        ],
      },
      {
        module: "Module 2: Selenium 4 WebDriver In-Depth",
        topics: [
          "WebDriver Architecture & Browser Drivers",
          "Advanced XPath & CSS Selector Strategies",
          "Handling Dynamic Dropdowns, Alerts, Windows & Frames",
          "Explicit & Fluent Synchronization Strategies",
          "Mouse & Keyboard Actions, JavaScriptExecutor",
        ],
      },
      {
        module: "Module 3: Test Automation Framework Architecture",
        topics: [
          "Page Object Model (POM) with PageFactory Design",
          "TestNG Annotations, Assertions, Parallel Execution & DataProviders",
          "Data-Driven Testing using Apache POI (Excel Integration)",
          "Cucumber BDD: Feature Files, Step Definitions & Runners",
          "ExtentReports & Allure Interactive Reporting",
        ],
      },
      {
        module: "Module 4: Build Tools, Version Control & CI/CD",
        topics: [
          "Maven Dependency Management & Surefire Plugins",
          "Git Version Control, Branching & Pull Requests",
          "Jenkins & GitHub Actions Automated Nightly Runs",
          "Live Real-World Capstone Automation Project",
        ],
      },
    ],
    prerequisites: "Basic logical thinking. No prior programming experience required; we teach Java from Day 1.",
    targetAudience: [
      "B.Tech / MCA / Degree graduates seeking IT careers",
      "Manual QA testers wanting to transition to Automation",
      "Career switchers aiming for high-paying SDET roles",
    ],
  },
  {
    id: "api-testing",
    title: "API & Microservices Testing (Postman & RestAssured)",
    slug: "api-testing-restassured-postman",
    level: "Intermediate",
    duration: "6 Weeks",
    mode: "Hybrid (Online Google Meet + Offline Kadapa Classroom)",
    tagline: "Validate mission-critical RESTful APIs with manual Postman suites and automated Java RestAssured frameworks.",
    badge: "High Industry Demand",
    overview:
      "Modern web and mobile applications run on RESTful APIs. This course teaches you how to test, inspect, automate, and mock backend APIs using Postman, Newman, and Java RestAssured, including authentication, JSON schemas, and continuous pipeline execution.",
    highlights: [
      "Deep understanding of HTTP Methods, Headers, Status Codes & Payloads",
      "Postman Collections, Variables, Scripts & Automated Test Runs",
      "Command-line Execution with Newman & CI Integration",
      "Automated Java Framework with RestAssured library",
      "Validating Complex JSON/XML Payloads & JSONSchema Assertions",
      "OAuth2, Bearer Tokens & API Key Authentication Testing",
    ],
    curriculum: [
      {
        module: "Module 1: REST API Fundamentals & Postman",
        topics: [
          "Client-Server Architecture & REST Principles",
          "GET, POST, PUT, PATCH, DELETE operations",
          "Postman Environment & Collection Variables",
          "JavaScript-based Assertions in Postman Tests",
          "Newman CLI for Automated Test Running",
        ],
      },
      {
        module: "Module 2: Automation with RestAssured & Java",
        topics: [
          "RestAssured setup with Maven & TestNG",
          "Given-When-Then BDD style API Automation",
          "Serializing and Deserializing POJO with Jackson",
          "JSON Schema Validation & Query Parameters",
          "End-to-End Microservice Automation Framework",
        ],
      },
    ],
    prerequisites: "Basic knowledge of Core Java or testing concepts.",
    targetAudience: [
      "Automation engineers expanding into backend verification",
      "Manual testers wanting to test APIs",
      "Developers wanting to test backend services",
    ],
  },
  {
    id: "fullstack-java",
    title: "Full-Stack Software Development (Java + Spring Boot + React)",
    slug: "fullstack-java-developer",
    level: "All Levels",
    duration: "14 - 16 Weeks",
    mode: "Hybrid (Online Google Meet + Offline Kadapa Classroom)",
    tagline: "Become a complete full-stack engineer: build real-world backends with Spring Boot and modern frontends with React.",
    badge: "Career Booster",
    overview:
      "Designed for students and developers who want to build end-to-end web applications like Vijaya's Yummy Food and Mana Tours. You will learn modern frontend development (React, JavaScript, Tailwind), enterprise Java backend engineering (Spring Boot, Hibernate, JPA), and database management with PostgreSQL.",
    highlights: [
      "Modern Web Fundamentals: HTML5, CSS3, JavaScript ES6+",
      "React.js Component Architecture, Hooks & State Management",
      "Spring Boot 3, Spring Data JPA & Hibernate ORM",
      "RESTful Microservices & JWT Authentication",
      "PostgreSQL Database Design & SQL Optimization",
      "Deploying to Cloud Platforms (Vercel, Render, VPS)",
    ],
    curriculum: [
      {
        module: "Module 1: Modern Frontend with React",
        topics: [
          "Modern JavaScript (ES6+, Async/Await, Destructuring)",
          "React Core: Components, Props, State, and Hooks",
          "Tailwind CSS for responsive UI design",
          "Axios & Fetch API integration with backend services",
        ],
      },
      {
        module: "Module 2: Enterprise Backend with Spring Boot",
        topics: [
          "Spring Framework Architecture & Dependency Injection",
          "Spring Boot 3 Web Starter & REST Controllers",
          "Spring Data JPA with PostgreSQL / MySQL",
          "Spring Security 6 & JWT Token Authentication",
          "Exception Handling & Logging Best Practices",
        ],
      },
      {
        module: "Module 3: Full-Stack Integration & Production Deployment",
        topics: [
          "Connecting React Frontend to Spring Boot Backend",
          "Database Migrations & Relational Modeling",
          "Building a Real-World Capstone Web Application",
          "Deployment to Cloud & Production Server Setup",
        ],
      },
    ],
    prerequisites: "Dedication and computer basics. Programming taught from foundational scratch.",
    targetAudience: [
      "College graduates aiming for Product & Service company roles",
      "Aspiring Full-Stack Software Engineers",
      "Developers looking to upgrade to modern React + Spring Boot",
    ],
  },
];

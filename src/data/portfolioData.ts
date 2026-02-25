export const portfolioData = {
  main: {
    name: "Abdi Dawud",
    occupation: "Full Stack Developer",
    description: "Architecting high-performance digital solutions for the modern web.",
    image: "https://picsum.photos/seed/mubarak/400/400", // Placeholder for profile pic
    bio: "Abdi Dawud is a results-driven Full Stack Developer with over 5 years of experience in architecting high-performance web and mobile applications. A self-taught engineer with a relentless drive for technical excellence, Abdi specializes in building scalable solutions for startups and international clients. With a focus on performance, user experience, and clean code, he transforms complex business requirements into elegant, production-ready digital products.",
    contactmessage: "Let's collaborate on your next big project.",
    email: "abdidawud995@gmail.com",
    phone: "",
    address: {
      street: "College ",
      city: "Adama",
      state: "Oromia"
    },
    website: "https://github.com/abdidawud",
    resumedownload: "/Abdi-Dawud-Tusi-FlowCV-Resume-20260224.pdf",
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/abdi-dawud-a56667348",
        icon: "Linkedin"
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/abdi0_917/",
        icon: "Instagram"
      },
      {
        name: "github",
        url: "https://github.com/abdidawud",
        icon: "Github"
      }
    ]
  },
  resume: {
    skillmessage: "Technical Proficiency & Toolset",
    education: [
      {
        school: "Adama Science and Technology University",
        degree: "Bachelor's Degree, Software Engineering",
        graduated: "Expected June 2026"
      }
    ],
    work: [
      {
        company: "Golden Age",
        title: "Full Stack Web Developer",
        years: "Apr 2024 -March 2025 ",
        description: "Leading the development of high-performance web applications, focusing on scalable architecture and premium user interfaces for enterprise clients."
      },
      {
        company: "Eskalate",
        title: "Web Developer",
        years: "Jun 2024 - Mar 2025",
        description: "Engineered robust web solutions with a focus on performance optimization and responsive design, delivering high-quality products for diverse business needs."
      },
      {
        company: "TechSphere Technology",
        title: "Web Development Intern",
        years: "Jan 2025 - Mar 2025",
        description: "Contributed to front-end development cycles, gaining hands-on experience in modern JavaScript frameworks and agile development methodologies."
      }
    ],
    skills: [
      {
        category: "Frontend",
        items: [
          { name: "React.js", level: 95 },
          { name: "Next.js", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "Tailwind CSS", level: 98 }
        ]
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", level: 88 },
          { name: "Express", level: 90 },
          { name: "PostgreSQL", level: 80 },
          { name: "MongoDB", level: 85 }
        ]
      },
      {
        category: "Tools & Others",
        items: [
          { name: "Git", level: 92 },
          { name: "Docker", level: 75 },
          { name: "AWS", level: 70 },
          { name: "Figma", level: 85 }
        ]
      }
    ]
  },
  portfolio: {
    projects: [
      {
        title: "Bank Dash",
        description: "A comprehensive banking dashboard application for managing financial data. The dashboard includes real-time transaction tracking, account summaries, and performance metrics.",
        category: "Web Application",
        image: "/bankdash.png",
        url: "https://astu-web-g2.netlify.app/",
        githubLink: "https://github.com/Abdidawud/a2sv-g5-project-phase-starter-project",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      },
      {
        title: "Fermata",
        description: "A modern public transportation platform that allows users to book tickets, track vehicles, and manage their journeys with ease. The future of public transportation is here.",
        category: "Web Application",
        image: "/fermata.jpeg",
        url: "#",
        githubLink: "https://github.com/Abdidawud/Fermata",
        technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"],
      },
      {
        title: "Zumbara Shop",
        description: "An e-commerce platform that offers a seamless shopping experience with features like product browsing, secure checkout, and order tracking.",
        category: "Web Application",
        image: "/zumbarashop.png",
        url: "https://www.zumbarashop.com/",
        githubLink: "https://github.com/Abdidawud/ZumbaraShop",
        technologies: ["Next.js", "Nestjs", "PostgreSQL", "Tailwind CSS"],
      },
      {
        title: "Dental Pro",
        description: "A comprehensive dental clinic management system that streamlines patient records, appointment scheduling, and billing processes.",
        category: "Web Application",
        image: "/dentalpro.png",
        url: "https://v0-custom-ui-design-53n96o3lr-mubarakads-projects.vercel.app/",
        githubLink: "https://github.com/Abdidawud/DentalSite",
        technologies: ["Next.js", "supabase", "Tailwind CSS", "React"],
      }
    ]
  },
  testimonials: [
    {
      text: "I had the privilege of working with Abdi, an exceptional Web Developer. His technical expertise, strong communication skills, and commitment to quality made the collaboration seamless and highly successful. I highly recommend him for any high-stakes project.",
      user: "Harun Jeylan",
      role: "CTO of Golden Age Technology"
    },
    {
      text: "Abdi is one of the most dedicated and talented developers I've worked with. His ability to grasp complex requirements and turn them into functional, beautiful code is unmatched.",
      user: "Abdurahman Abdella",
      role: "Senior Full Stack Developer"
    }
  ],
  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "10+" }
  ]
};

export const portfolioData = {
  personalInfo: {
    name: "Sabarinathan",
    title: "Computer Science Engineering Student",
    email: "k.sabari.developer@gmail.com",
    phone: "+91 91594 29105",
    location: "Ariyalur, Tamilnadu",
    github: "https://github.com/sabarinathan1310",
    linkedin: "https://www.linkedin.com/in/sabariengineer",
    summary: "I am a passionate Computer Science Engineering student with a deep interest in building intelligent software solutions. My journey started with mastering core coding concepts in Java and Python, which expanded into developing AI chatbot models and full-stack web architectures. I thrive on translating complex logic into clean, robust code and love building systems that deliver impactful experiences.",
    careerObjective: "Seeking a challenging software engineering role or internship where I can apply my skills in front-end development, Python engineering, and AI chatbot creation to build modern, reliable, and scalable products.",
    mindset: "Dedicated to continuous learning, practicing programming regularly, and exploring emerging technological trends.",
    hobbies: ["Practicing programming", "Browsing tech contents"],
    languages: ["Tamil (Native)", "English (Professional)"]
  },
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: "Intermediate" },
        { name: "Python", level: "Advanced" },
        { name: "C", level: "Basic" }
      ]
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", level: "Intermediate" }
      ]
    },
    {
      category: "Tools & CRM",
      items: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Salesforce CRM", level: "Intermediate" },
        { name: "Salesforce Apex", level: "Intermediate" },
        { name: "MS Excel", level: "Advanced" }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Problem Solving", level: "Expert" },
        { name: "Strategic Planning", level: "Advanced" },
        { name: "Crisis Management", level: "Advanced" },
        { name: "Creative Thinking", level: "Expert" },
        { name: "Adaptability to Change", level: "Expert" }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Finding Missing Person Using AI",
      category: "AI & ML",
      tech: ["Python", "OpenCV", "Face Recognition", "Deep Learning"],
      description: "Developed an advanced AI facial recognition system to search and identify missing persons from images.",
      details: [
        "Developed AI system to identify missing persons from images using facial recognition algorithms.",
        "Built deep learning face detection pipeline with preprocessing for varied lighting conditions to ensure high accuracy."
      ],
      github: "https://github.com/sabarinathan1310/Finding-Missing-Person-Using-AI"
    },
    {
      id: 2,
      title: "Garage Management System",
      category: "Software Development",
      tech: ["Salesforce CRM", "Apex", "Lightning Web Components", "Salesforce Flows"],
      description: "Built an automated service coordination and customer billing system on the Salesforce CRM platform.",
      details: [
        "Built garage management system with custom Apex triggers and Lightning UI for order tracking.",
        "Automated customer service reminders and billing using Salesforce flows, reducing manual entries."
      ],
      github: "https://github.com/sabarinathan1310/garage-management-system"
    },
    {
      id: 3,
      title: "Pong Game",
      category: "Games",
      tech: ["Python", "Turtle Graphics", "Time Module"],
      description: "A simple two-player Pong Game built using Python's Turtle graphics module, recreating the classic arcade experience.",
      details: [
        "Built two-player local gameplay with responsive keyboard controls for paddle movement.",
        "Implemented real-time score tracking and dynamic ball speed scaling after paddle collisions.",
        "Configured game logic with a winning condition threshold declaring a winner at 10 points."
      ],
      github: "https://github.com/sabarinathan1310/pong-game"
    },
    {
      id: 4,
      title: "Breakout Game",
      category: "Games",
      tech: ["Python", "Pygame"],
      description: "A classic arcade Breakout Game developed using Python and Pygame featuring full physics and collision detection.",
      details: [
        "Developed brick wall grid generator rendering 60 destroyable bricks across 10 columns and 6 rows.",
        "Engineered real-time collision detection logic handling ball bounces off the paddle, wall, and brick boundaries.",
        "Built automated game status flow orchestrating Game Over and Win screen states running at 60 FPS."
      ],
      github: "https://github.com/sabarinathan1310/break-out-game"
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Oxford Engineering College | Anna University",
      period: "2022 - 2026",
      status: "Graduated: 2026"
    },
    {
      degree: "Higher Secondary School",
      institution: "Kalaimagal Hr. Secondary School | Thular",
      period: "2021 - 2022",
      status: "Completed"
    }
  ],
  certifications: [
    {
      title: "Web Development",
      issuer: "DonBosco Tech, Accenture",
      duration: "40 days Course",
      description: "Intense course covering foundational web development architectures, front-end coding, and responsive design systems.",
      pdfPath: "/certificates/don_bosco_web_development.pdf"
    },
    {
      title: "AI and Green Skills",
      issuer: "Edunet Foundation",
      duration: "Professional Certificate",
      description: "Explored artificial intelligence applications, green technology concepts, and sustainable engineering processes.",
      pdfPath: "/certificates/NM_Certificate.pdf"
    },
    {
      title: "RPA Foundation Course (Diploma)",
      issuer: "UiPath",
      duration: "Diploma Certification",
      description: "Mastered basic robotic process automation principles, building workflow bots, and orchestrating automation tasks.",
      pdfPath: "/certificates/NM_Certificate (1).pdf"
    },
    {
      title: "Experience Based Project Learning",
      issuer: "IBM",
      duration: "Project Badge",
      description: "Acquired cloud development, team collaboration, and Agile software development skills through industry projects.",
      pdfPath: "/certificates/NM_Certificate (2).pdf"
    }
  ]
};

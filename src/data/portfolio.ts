// portfolio data

export const personalInfo = {
  name: "Saravanan Jaisankar",
  tagline: "Data Analyst | Turning Complex Data into Actionable Insights",
  summary: "Driven Data Analyst with hands-on experience in statistical analysis, predictive modeling, and data visualization. Highly skilled in leveraging Python, Pandas, and SQL to clean, transform, and analyze complex datasets. Dedicated to discovering hidden patterns, creating interactive dashboards in Power BI, and communicating data-driven stories that solve real-world business challenges and optimize decision-making.",
  email: "saravanan12220@gmail.com",
  phone: "+91-6379526929",
  linkedin: "https://www.linkedin.com/in/saravanan-jaisankar/",
  github: "https://github.com/Saro-07",
  resume: "/Saravanan_Jaisankar_Resume.pdf"
};

export const skills = {
  languages: ["Python", "SQL"],
  web: ["HTML", "CSS"],
  database: ["MySQL"],
  tools: ["Power BI", "Excel", "GitHub", "VS Code", "Jupyter"],
  libraries: ["Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"],
  concepts: ["Data Cleaning", "Data Structures & Algorithms", "Machine Learning", "NLP"]
};

export const education = [
  {
    institution: "Dhanalakshmi Srinivasan College of Engineering and Technology | Mamallapuram",
    degree: "B.E. Computer Science and Engineering",
    year: "2023 - 2027",
    score: "CGPA: 8.17"
  },
  {
    institution: "Govt. Model Higher Secondary School | Ariyalur",
    degree: "Higher Secondary Certificate (HSC)",
    stream: "Biology and Mathematics Stream",
    year: "2022 - 2023",
    score: "83%"
  }
];

export const experience = [
  {
    role: "Data Science Intern",
    company: "BIG-SI-BUCKS Innovation Private Limited",
    duration: "Jul 2025 – Aug 2025",
    bullets: [
      "Cleaned and formatted raw datasets using Python and Pandas to prepare them for analysis.",
      "Conducted exploratory data analysis (EDA) to identify basic trends, missing values, and data patterns.",
      "Created visual graphs and reports using Matplotlib and Seaborn to present findings to the team."
    ]
  },
  {
    role: "Full-Stack Development Virtual Intern",
    company: "AdroIT Technologies (via Naan Mudhalvan & IBM SkillsBuild)",
    duration: "Dec 2025 – Feb 2026",
    bullets: [
      "Built and optimized core server-side logic using Python to support enterprise applications.",
      "Managed database connections and secure file handling to ensure efficient data storage and retrieval.",
      "Collaborated with a development team to debug backend issues, test API endpoints, and improve overall system performance."
    ]
  }
];

export const projects = [
  {
    id: "restaurant-rating",
    title: "Global Restaurant Rating Predictor",
    badge: "Accepted Research Paper",
    category: "Data Science",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Ensemble ML"],
    description: "Engineered a restaurant analytics solution on 7,403 global restaurants. Built a stacked ensemble meta-learner achieving R² of 57.03% and RMSE of 0.3645. Deployed as an interactive dashboard.",
    links: {
      demo: "#", // Placeholder
      paper: "/restaurant-paper.pdf"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450"
  },
  {
    id: "help-desk",
    title: "Enterprise Help Desk Ticketing Application",
    date: "Feb 2026",
    category: "Full-Stack",
    tech: ["Python", "React", "SQL", "SLA Management"],
    description: "Full-stack ticketing system automating manual ticket routing with secure authentication, structured database for support requests, and SLA tracking to ensure timely resolution.",
    links: {
      demo: "https://helpdesk-deployed.vercel.app/"
    },
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800&h=450"
  }
];

export const certifications = [
  {
    category: "Data Analytics & Visualization",
    items: [
      { name: "Power BI for Business Professionals", issuer: "Infosys Springboard", date: "Jun 2026", type: "pdf", url: "/certificates/Infosys-Power BI for Business Professionals.pdf" },
      { name: "Hands-On Data Visualization with Microsoft Power BI", issuer: "Infosys Springboard", date: "Jun 2026", type: "pdf", url: "/certificates/Infosys-Hands-On Data Visualization with Microsoft Power BI.pdf" },
      { name: "Introduction to Business Intelligence", issuer: "Infosys Springboard", date: "Jun 2026", type: "pdf", url: "/certificates/infosys-BI.pdf" },
      { name: "Dive Deeper into GA4 Data and Reports", issuer: "Google", date: "Nov 2025", type: "pdf", url: "/certificates/GA4 data and report certificate.pdf" },
      { name: "GenAI Powered Data Analytics Job Simulation", issuer: "Forage & TATA", date: "Jun 2025", type: "pdf", url: "/certificates/tata forage completion_certificate.pdf" }
    ]
  },
  {
    category: "Data Science, AI & Big Data",
    items: [
      { name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", date: "Oct 2025", type: "pdf", url: "/certificates/Generative-AI-Oracle_Certificate.pdf" },
      { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "2025", type: "pdf", url: "/certificates/AI-Foundation_Oracle-Certificate.pdf" },
      { name: "Data Science & Analytics", issuer: "HP Life – HP Foundation", date: "Nov 2025", type: "pdf", url: "/certificates/HP-Data Science and Analytics.pdf" },
      { name: "Big Data 101", issuer: "Infosys Springboard", date: "Aug 2025", type: "pdf", url: "/certificates/Infosys_springboard.pdf" }
    ]
  },
  {
    category: "Software Engineering & Management",
    items: [
      { name: "Agile Scrum in Practice", issuer: "Infosys Springboard", date: "Jun 2026", type: "pdf", url: "/certificates/Infosys-Agile Scrum in Practice.pdf" },
      { name: "Introduction to Entity Relationship ER Modeling", issuer: "Infosys Springboard", date: "Jun 2026", type: "pdf", url: "/certificates/Infosys-ER Modeling.pdf" },
      { name: "Career Edge – Young Professional Course", issuer: "TCS iON", date: "Jul 2025", type: "pdf", url: "/certificates/TCS_ION.pdf" }
    ]
  }
];


export const achievements = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    description: "Built a working prototype for secure data wiping, focusing on safe IT asset recycling."
  },
  {
    title: "Kurukshetra’26 Pitch Arena",
    location: "Anna University",
    description: "Won 3rd place and a ₹3,000 cash prize for pitching a new tech product idea to a panel of judges."
  },
  {
    title: "FiNova’26 FinTech Pitch",
    location: "Madras Christian College",
    description: "Presented a financial technology concept at the college’s finance conclave, explaining how the software could be used in the real-world environment."
  },
  {
    title: "E-Horyzon 2K26 Pitch For Tomorrow",
    location: "Kongu Engineering College",
    description: "Pitched an innovative tech solution to a judging panel during their campus entrepreneurial competition."
  }
];

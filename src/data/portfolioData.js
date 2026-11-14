export const portfolioData = {
  personal: {
    name: "Sankajith D. Jinasena",
    title: "Data Science Undergraduate",
    availability: {
      status: true,
      text: "Open for AI / ML & Data Engineering Internships",
    },
    shortBio:
      "Data Science undergraduate at Sabaragamuwa University of Sri Lanka with a strong track record of engineering end-to-end machine learning pipelines from raw data ingestion to production deployment. Combines solid statistical foundations with practical full-stack execution in Python, fine-tuned transformer architectures, and interactive dashboards.",
    bioParagraphs: [
      "I am a Data Science undergraduate at Sabaragamuwa University of Sri Lanka (maintaining a 3.76 CGPA) with a strong track record of engineering end-to-end machine learning pipelines from raw data ingestion to production deployment.",
      "I combine solid statistical foundations with practical full-stack execution in Python, fine-tuned transformer architectures, and interactive dashboards. I deliver immediate engineering velocity to data teams by unblocking technical bottlenecks, accelerating model prototyping, and translating complex algorithmic outputs into reliable business insights."
    ],
    stats: [
      { value: "3.76", label: "Academic CGPA", subtext: "BSc (Hons) Data Science @ SUSL" },
      { value: "15+", label: "Projects Delivered", subtext: "AI/ML, Cloud & Analytics" },
      { value: "8+", label: "Hackathon Honors", subtext: "National Top 10/15 Finalist" },
      { value: "8+", label: "Certifications", subtext: "Google, IBM, Moratuwa" },
    ],
    // Clean, professional core specializations without agentic AI jargon
    focusAreas: [
      {
        title: "Machine Learning & Deep Learning",
        description: "Supervised and unsupervised learning, predictive modeling, fine-tuning transformer architectures, and neural networks with Scikit-learn and PyTorch.",
        tags: ["Scikit-learn", "PyTorch", "TensorFlow", "DistilBERT", "NLP", "Predictive Modeling"]
      },
      {
        title: "Data Analytics & Business Intelligence",
        description: "Interactive Power BI dashboards, enterprise star schemas, complex DAX calculations, exploratory data analysis, and executive decision-making metrics.",
        tags: ["Power BI", "DAX", "Star Schema", "Pandas", "NumPy", "Matplotlib"]
      },
      {
        title: "Full-Stack & Cloud Engineering",
        description: "Building scalable production microservices, REST APIs, responsive web interfaces, and event-driven AWS cloud data workflows.",
        tags: ["Python", "FastAPI", "React", "MySQL", "AWS S3/Lambda", "Docker"]
      }
    ],
    softSkills: [
      "Analytical Problem-Solving",
      "Accountability & Ownership",
      "Rapid Adaptability",
      "Cross-Functional Collaboration",
      "Technical Communication"
    ],
    languages: [
      { name: "Sinhala", proficiency: "Native / Bilingual" },
      { name: "English", proficiency: "Intermediate" }
    ],
    cvUrl: "/Sankajith D. Jinasena.pdf",
    cvName: "Sankajith_D_Jinasena_CV.pdf",
    resumes: [
      {
        id: "sankajith-cv",
        name: "Sankajith D. Jinasena — Latest CV",
        description: "Official technical resume covering Machine Learning pipelines, DistilBERT transformers, AWS cloud architectures, Power BI dashboards, and Full-Stack Engineering.",
        fileName: "Sankajith_D_Jinasena_CV.pdf",
        url: "/Sankajith D. Jinasena.pdf",
        badge: "Data Science & AI"
      }
    ],
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/sankajithdjinasena/",
    github: "https://github.com/sankajithdjinasena",
    medium: "https://medium.com/@sankajithdjinasena",
    facebook: "https://www.facebook.com/profile.php?id=100092640245603",
    instagram: "https://www.instagram.com/sanke_jinasena/",
    email: "sankajithdjinasena@gmail.com",
    mobile: "+94 71 354 5642",
    location: "Kandy, Sri Lanka",
    portfolioUrl: "https://sankajithdjinasena.github.io",
  },

  techStack: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "PHP", "SQL", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Machine Learning & AI",
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "DistilBERT", "Transformers", "NLP", "YOLO", "OpenCV"]
    },
    {
      category: "Data Analysis & Visualization",
      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "DAX", "Star Schema", "Excel", "SciPy", "Statsmodels"]
    },
    {
      category: "Databases & Storage",
      items: ["MySQL", "MongoDB", "Database Normalization"]
    },
    {
      category: "Cloud & Data Services",
      items: ["AWS S3", "AWS Lambda", "AWS Glue", "Amazon Athena", "CloudWatch", "Event-Driven ETL"]
    },
    {
      category: "Web Development & Frameworks",
      items: ["React", "FastAPI", "Tailwind CSS", "Flask", "Pydantic", "ReportLab", "Dialogflow", "Chart.js"]
    },
    {
      category: "Tools & Methodologies",
      items: ["Git / GitHub", "Docker", "CRISP-DM", "Monte Carlo Simulation", "Markov Chains", "Microsoft Office", "Filmora", "Canva"]
    }
  ],

  workExperience: [
    {
      id: "exp-bank",
      role: "Digital Service Assistant",
      organization: "Commercial Bank of Ceylon PLC",
      period: "Oct 2023 - Apr 2024",
      contract: "Commercial Bank - KCC branch",
      description: "Promoted and supported adoption of Commercial Bank’s digital services (ComBank Digital, Q+, and Flash apps), educating clients on digital banking, providing technical and customer support, tracking usage metrics, and marketing digital platforms to expand customer engagement.",
      logo: "/images/commercial bank.png"
    },
    {
      id: "exp-dharmavijaya",
      role: "IT Consultant",
      organization: "Dharmavijaya Computer Training School",
      period: "Jan 2023 - Feb 2024",
      contract: "Registration No: DVS/6/5/64/34",
      description: "Delivered training and support in Microsoft Office, basic programming (Python, HTML, CSS), video editing, and computer hardware, while strengthening technical and managerial skills through supporting students and day-to-day operations.",
      logo: "/images/dharmavijaya.png"
    }
  ],

  education: [
    {
      id: "edu-susl",
      degree: "BSc (Hons) in Data Science",
      institution: "Sabaragamuwa University of Sri Lanka",
      period: "2024 - Present | CGPA: 3.76",
      logo: "/images/susl.png",
      description: "Coursework spanning machine learning, artificial intelligence, data analytics, and software engineering, applied through academic and independent projects."
    },
    {
      id: "edu-al",
      degree: "GCE Advanced Level Examination (Physical Science Stream)",
      institution: "Dharmaraja College, Kandy",
      period: "2020 - 2022 | Z-score: 1.3509",
      logo: "/images/dharmaraja.png",
      description: "Completed Advanced Level Examination in Physical Science stream including Combined Mathematics, Physics, and Chemistry."
    },
    {
      id: "edu-ol",
      degree: "GCE Ordinary Level Examination",
      institution: "Dharmaraja College, Kandy",
      period: "2008 - 2019",
      logo: "/images/dharmaraja.png",
      description: "Completed O/L examination passing with 8A's and 1B, with additional secondary subject distinction."
    }
  ],

  // Real verified certificate links from legacy portfolio
  certifications: [
    {
      id: "cert-datacamp-dsa",
      title: "Data Scientist Associate Certificate",
      issuer: "DataCamp",
      year: "2026 - 2028",
      featured: true,
      description: "Industry-standard certification validating foundational data science skills in data management, exploratory data analysis, statistical experimentation, and predictive modeling.",
      link: "https://www.datacamp.com/certificate/DSA0012959110562"
    },
    {
      id: "cert-google-ai",
      title: "Google AI Essentials",
      issuer: "Google (Coursera)",
      year: "2025",
      description: "Generative AI program covering prompt engineering techniques, productivity tools, and responsible AI implementation.",
      link: "https://www.coursera.org/account/accomplishments/specialization/B9GJDG7C4ARI"
    },
    {
      id: "cert-ibm-analytics",
      title: "Introduction to Data Analytics",
      issuer: "IBM (Coursera)",
      year: "2024",
      description: "Gained foundational knowledge in data analysis concepts, tools, data cleaning, and exploratory data analysis to support data-driven decision making.",
      link: "https://drive.google.com/file/d/1UAJo50OI3DCS_7vpYQ73g1AQ1t-_ff-O/view?usp=sharing"
    },
    {
      id: "cert-powerbi",
      title: "PowerBI for Beginners",
      issuer: "Simplilearn",
      year: "2024",
      description: "Hands-on data visualization, Power BI Desktop, DAX calculations, interactive dashboards, and reporting for business intelligence.",
      link: "https://drive.google.com/file/d/1_2W14_ZKJDWpWz1KC5cyD-hmMaqNYRUg/view"
    },
    {
      id: "cert-python-uom",
      title: "Python Programming",
      issuer: "University of Moratuwa (CODL)",
      year: "2023",
      description: "Practical course covering core programming fundamentals, data structures, automation, data handling, and scientific problem-solving in Python.",
      link: "https://drive.google.com/file/d/144j2uvZkWpzkmSGzl3n1DW-rEBrTulc3/view?usp=sharing"
    },
    {
      id: "cert-datacamp-docker",
      title: "Introduction to Docker",
      issuer: "DataCamp",
      year: "2024",
      description: "Containerization fundamentals, Dockerfile creation, multi-container compose architectures, and reproducibility in data science deployments.",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/575e8e7da76f47e5824a630d2f9a9881bf8a14a2?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa"
    },
    {
      id: "cert-ml-sololearn",
      title: "ML for Beginners",
      issuer: "Sololearn",
      year: "2024",
      description: "Foundational machine learning concepts, classification and regression algorithms, model evaluation, and Python implementation.",
      link: "https://www.sololearn.com/certificates/CC-ZBODVJPS"
    },
    {
      id: "cert-web-uom",
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa (CODL)",
      year: "2023",
      description: "Comprehensive web design principles, semantic HTML, modern responsive CSS layouts, and web usability standards.",
      link: "https://drive.google.com/file/d/1TunU8eOWtip8Af0t97gZ9sOI9amdhl_e/view?usp=sharing"
    },
    {
      id: "cert-google-marketing",
      title: "Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      year: "2023",
      description: "IAB-accredited program covering 26 modules including SEO, SEM, web analytics, email marketing, and online strategy execution.",
      link: "https://drive.google.com/file/d/18DqpUF0QNkAS59JxjoW4XT2Gi-DxzHN2/view?usp=sharing"
    },
    {
      id: "cert-pm-uom",
      title: "Foundations of Project Management",
      issuer: "University of Moratuwa (CODL)",
      year: "2023",
      description: "Project management methodologies, project lifecycle planning, risk management, and team collaboration fundamentals.",
      link: "https://drive.google.com/file/d/1UpZG6duYNWpBYWEZS9egz1Z4azff2ovu/view?usp=sharing"
    }
  ],

  achievements: [
    {
      id: "ach-codemania",
      title: "Codemania V6.0 Datathon - Top 15 Finalist",
      team: "Team Deadlock",
      description: "Selected from a competitive pool of inter-university participants as a Top 15 Finalist, applying data-driven approaches to solve complex problems in a fast-paced environment.",
      photos: [
        "/images/Achievements/Codemania/codemania (5).jpg",
        "/images/Achievements/Codemania/codemania (2).jpg",
        "/images/Achievements/Codemania/codemania (8).jpg",
        "/images/Achievements/Codemania/codemania (10).jpg"
      ]
    },
    {
      id: "ach-cryptx",
      title: "CryptX 2.0 - Top 15 Finalist",
      team: "Team Predictra",
      description: "Finalist at the CryptX 2.0 hackathon organized by the ICT Society, Faculty of Technology, University of Sri Jayewardenepura.",
      photos: [
        "/images/Achievements/CryptX 2.0/CryptX 2 (3).jpg",
        "/images/Achievements/CryptX 2.0/CryptX 2 (4).jpg",
        "/images/Achievements/CryptX 2.0/CryptX 2 (1).jpg",
        "/images/Achievements/CryptX 2.0/CryptX 2 (2).jpg"
      ]
    },
    {
      id: "ach-bitcode",
      title: "BitCode 6.0 - Top 10 Finalist",
      team: "Team Deadlock",
      description: "Finalist at the BitCode 6.0 hackathon organized by the Business Information Technology Students’ Association, Rajarata University.",
      photos: [
        "/images/Achievements/Bitcode V6.0/bitcode (1).jpg",
        "/images/Achievements/Bitcode V6.0/bitcode (2).jpg",
        "/images/Achievements/Bitcode V6.0/bitcode (3).jpg",
        "/images/Achievements/Bitcode V6.0/bitcode (4).jpg",
        "/images/Achievements/Bitcode V6.0/bitcode (5).jpg",
        "/images/Achievements/Bitcode V6.0/bitcode (6).jpg",
        "/images/Achievements/Bitcode V6.0/bitcode (7).jpg"
      ]
    },
    {
      id: "ach-cipher",
      title: "CIPHER 2.0 - Top 10 Finalist",
      team: "Team Predictra",
      description: "Finalist among top 10 teams at CIPHER 2.0, with the final pitch held at the IIT Auditorium.",
      photos: [
        "/images/Achievements/Cipher 2.0/Certificate.jpeg",
        "/images/Achievements/Cipher 2.0/Bookleat.jpeg",
        "/images/Achievements/Cipher 2.0/Group.jpeg"
      ]
    },
    {
      id: "ach-biofusion",
      title: "Bio Fusion Hackathon - Participant",
      team: "Team Deadlock",
      description: "Demonstrated enthusiasm, dedication, and meaningful engagement during the Bio Fusion Hackathon hosted by the University of Sri Jayewardenepura's IEEE EMBS chapter.",
      photos: [
        "/images/Achievements/BioFusion/BioFusion.jpg"
      ]
    },
    {
      id: "ach-jpurax",
      title: "J’PuraXtreme 3.0 - Finalist",
      team: "Team Predictra",
      description: "Qualified for the final round, demonstrating strong problem-solving, coding, logical thinking, and teamwork under time pressure.",
      photos: [
        "/images/Achievements/JapuraXtream/Japura (1).jpg",
        "/images/Achievements/JapuraXtream/Japura (2).jpg",
        "/images/Achievements/JapuraXtream/Japura (3).jpg",
        "/images/Achievements/JapuraXtream/Japura (4).jpg",
        "/images/Achievements/JapuraXtream/Japura (5).jpg",
        "/images/Achievements/JapuraXtream/Japura (6).jpg"
      ]
    },
    {
      id: "ach-codearena",
      title: "CodeAréna’26 - Finalist",
      team: "Team Predictra",
      description: "Advanced to the Grand Finale following a 36-hour developing, debugging, and pitching a complete solution under tight time constraints at Dialog Axiata PLC Headquarters.",
      photos: [
        "/images/Achievements/Codearena/Codearena (0).jpg",
        "/images/Achievements/Codearena/Codearena (1).jpg",
        "/images/Achievements/Codearena/Codearena (2).jpg",
        "/images/Achievements/Codearena/Codearena (3).jpg",
        "/images/Achievements/Codearena/Codearena (4).jpg",
        "/images/Achievements/Codearena/Codearena (5).jpg"
      ]
    },
    {
      id: "ach-coderally",
      title: "CodeRally 7.0 - Intermediate Tier Grand Finalist",
      team: "Team Predictra",
      description: "Qualified for the Intermediate Tier Grand Finale and a 24-hour hackathon challenge, demonstrating strong technical problem-solving, adaptability, and teamwork under pressure.",
      photos: [
        "/images/Achievements/coderally/coderally (1).jpg",
        "/images/Achievements/coderally/coderally (2).jpg",
        "/images/Achievements/coderally/coderally (3).jpg",
        "/images/Achievements/coderally/coderally (4).jpg"
      ]
    }
  ],

  volunteering: [
    {
      id: "vol-stemup2",
      title: "STEMUP - CodeClub - Balangoda Library",
      period: "April 25th, 2026",
      description: "Empowering the next generation of innovators! Volunteered with STEMUp Educational Foundation introducing students to Scratch logic and creative problem-solving challenges at Balangoda Library.",
      photos: [
        "/images/Volunteering/STEMUP2/STEMUP2 (1).jpeg",
        "/images/Volunteering/STEMUP2/STEMUP2 (2).jpg",
        "/images/Volunteering/STEMUP2/STEMUP2 (3).jpg",
        "/images/Volunteering/STEMUP2/STEMUP2 (4).jpg",
        "/images/Volunteering/STEMUP2/STEMUP2 (5).jpg",
        "/images/Volunteering/STEMUP2/STEMUP2 (6).jpg",
        "/images/Volunteering/STEMUP2/STEMUP2 (7).jpg"
      ]
    },
    {
      id: "vol-itech",
      title: "ITECH 2.0 Knowledge Sharing Exhibition",
      period: "May 28th, 2025",
      description: "Proud to Represent Sabaragamuwa University of Sri Lanka! Participated as a volunteer at the ITECH 2025 Knowledge Sharing Exhibition held at B/Karandagasdeniya Maha Vidyalaya, engaging with students and sharing technology insights.",
      photos: [
        "/images/Volunteering/ITECH2.0/ITECH (1).jpg",
        "/images/Volunteering/ITECH2.0/ITECH (2).jpg",
        "/images/Volunteering/ITECH2.0/ITECH (3).jpg",
        "/images/Volunteering/ITECH2.0/ITECH (4).jpg",
        "/images/Volunteering/ITECH2.0/ITECH (5).jpg",
        "/images/Volunteering/ITECH2.0/ITECH (6).jpg",
        "/images/Volunteering/ITECH2.0/ITECH (7).jpg"
      ]
    },
    {
      id: "vol-stemup1",
      title: "STEMUP - CodeClub - IT & Web Programming",
      period: "Sep 9th, 2025",
      description: "Volunteered with STEMUP Educational Foundation sharing knowledge on IT and web programming with bright school students to empower the next generation of innovators.",
      photos: [
        "/images/Volunteering/STEMUP1/STEMUP1 (4).jpeg",
        "/images/Volunteering/STEMUP1/STEMUP1 (2).jpeg",
        "/images/Volunteering/STEMUP1/STEMUP1 (1).jpeg",
        "/images/Volunteering/STEMUP1/STEMUP1 (3).jpeg",
        "/images/Volunteering/STEMUP1/STEMUP1 (5).jpeg"
      ]
    },
    {
      id: "vol-rotaract",
      title: "Volunteer - Rotaract Club of SUSL",
      period: "2025 - Present",
      description: "Contributing mainly on the technical side, supporting the club ‘s IT needs and activities to empower campus initiatives and community service projects.",
      photos: [
        "/images/Volunteering/Rotaract/btg (1).jpg",
        "/images/Volunteering/Rotaract/btg (2).jpg",
        "/images/Volunteering/Rotaract/btg (3).jpg",
        "/images/Volunteering/Rotaract/btg (4).jpg",
        "/images/Volunteering/Rotaract/btg (5).jpg",
        "/images/Volunteering/Rotaract/btg (6).jpg",
        "/images/Volunteering/Rotaract/btg (7).jpg"
      ]
    },
    {
      id: "vol-ieee",
      title: "Volunteer - IEEE Student Branch, SUSL",
      period: "2026 - Present",
      description: "Support the technical coordination of IEEE activities and events, including IT-related tasks, digital platforms, and other technical requirements.",
      photos: [
        "/images/Volunteering/IEEE/IEEE (6).jpg",
        "/images/Volunteering/IEEE/IEEE (5).jpg",
        "/images/Volunteering/IEEE/IEEE (4).jpg",
        "/images/Volunteering/IEEE/IEEE (3).jpg",
        "/images/Volunteering/IEEE/IEEE (2).jpg",
        "/images/Volunteering/IEEE/IEEE (1).jpg",
        "/images/Volunteering/IEEE/IEEE (7).jpeg",
      ]
    }
  ],

  references: [
    {
      id: "ref-priyan",
      name: "Professor S. Vasanthapriyan, Ph.D, SMIEEE",
      title: "Professor in Computer Science",
      institution: "Faculty of Computing, Sabaragamuwa University of Sri Lanka, P.O.Box 2, Belihuloya, Sri Lanka.",
      email: "priyan@foc.sab.ac.lk",
      mobile: "+94 71 785 1500"
    },
    {
      id: "ref-darshana",
      name: "Mr. Darshana Wanigarathna",
      title: "Principal - Dharmavijaya Computer School",
      institution: "Director Board Member - Co-operative Pensions Fund (Ministry of Co-operative), Investment Advisor",
      email: "mwgtdw@gmail.com",
      mobile: "+94 77 263 6647 / +94 71 681 4610"
    }
  ],

  projects: [
    {
      id: 1,
      name: "CareerCompass AI - Autonomous Career Coaching System",
      tagline: "5-Agent Compiled LangGraph State Machine with Pydantic Self-Healing",
      category: "ai",
      period: "Aug 2026",
      description: "Engineered a 5-agent autonomous coaching system using a compiled LangGraph state machine to deliver end-to-end skill-gap, interview, and job matching reports.",
      stack: ["Python", "FastAPI", "LangGraph", "LangChain", "Groq LPU (Llama 3.3)", "ChromaDB", "React", "Tailwind CSS", "Pydantic", "ReportLab"],
      image: "/images/Career-Compass-AI.png",
      github: "https://github.com/sankajithdjinasena/CareerCompass_AI",
      live: null,
      keyHighlights: [
        "Engineered a 5-agent autonomous coaching system using a compiled LangGraph state machine to deliver end-to-end skill-gap, interview, and job matching reports.",
        "Implemented self-healing and adaptive routing loops via Pydantic validation to auto-correct JSON schemas and dynamically revise learning paths based on mock interview performance.",
        "Integrated dynamic fallback retrieval, combining ChromaDB vector search with real-time web scraping to synthesize skills taxonomies and fetch live job/course listings."
      ]
    },
    {
      id: 2,
      name: "Detecting AI-Generated Product Reviews",
      tagline: "Comparative NLP Study & DistilBERT Transformer (98.05% Accuracy)",
      category: "ai",
      period: "July 2026 - Sep 2026",
      description: "Conducted a comparative NLP study across stylometrics, TF-IDF, and deep learning, fine-tuning a DistilBERT transformer that achieved 98.05% accuracy and a 0.981 F1-score in detecting AI-generated Amazon reviews.",
      stack: ["Python", "NLP", "TF-IDF", "DistilBERT", "React", "FastAPI", "Scikit-learn"],
      image: "/images/Projects/defaults/Detecting AI generated reviews.jpg",
      github: "https://github.com/sankajithdjinasena/Review-Real-Fake-Classifier",
      live: null,
      keyHighlights: [
        "Conducted a comparative NLP study across stylometrics, TF-IDF, and deep learning, fine-tuning a DistilBERT transformer that achieved 98.05% accuracy and a 0.981 F1-score in detecting AI-generated Amazon reviews.",
        "Engineered a 90.89% accurate feature-fusion model combining lexical and syntactic signals, deploying the full inference pipeline through a FastAPI backend and an interactive React dashboard."
      ]
    },
    {
      id: 3,
      name: "Telecom Customer Churn Analytics & Predictive Retention System",
      tagline: "Event-Driven AWS Analytics & Focal Loss XGBoost (0.8468 ROC-AUC)",
      category: "ai",
      period: "Oct 2026",
      description: "Engineered a predictive churn pipeline using SMOTE and Focal Loss XGBoost to handle severe class imbalance, achieving 80.21% Recall and 0.8468 ROC-AUC across 7,043 customer accounts.",
      stack: ["Python", "XGBoost", "Scikit-learn", "SMOTE", "AWS (S3, Lambda, Glue, Athena, CloudWatch)", "FastAPI", "React"],
      image: "/images/Projects/defaults/Telecom Customer Churn Analytics & Predictive Retention System.jpg",
      github: "https://github.com/sankajithdjinasena/AWS_Project_Team_07",
      live: null,
      keyHighlights: [
        "Engineered a predictive churn pipeline using SMOTE and Focal Loss XGBoost to handle severe class imbalance, achieving 80.21% Recall and 0.8468 ROC-AUC across 7,043 customer accounts.",
        "Architected an event-driven AWS analytics solution integrating S3 and Lambda for automated validation, alongside Glue and Amazon Athena serverless SQL to uncover critical churn segments accounting for $139k/month in lost revenue."
      ]
    },
    {
      id: 4,
      name: "Sri Lanka Residential Electricity Affordability Analysis",
      tagline: "Socio-Economic Energy Poverty Power BI Dashboard (4,063 Households)",
      category: "powerbi",
      period: "Aug 2026",
      description: "Built a 3-page interactive Power BI dashboard analyzing electricity consumption and affordability across 4,063 Sri Lankan households (2022-2025), uncovering income-based energy burden, disconnection risk, billing-awareness gaps, and smart-meter adoption patterns.",
      stack: ["Power BI", "DAX", "Star Schema", "Data Modeling", "Data Analytics"],
      image: "/images/Projects/ElectricityAffordability/page1.jpg",
      images: [
        "/images/Projects/ElectricityAffordability/page1.jpg",
        "/images/Projects/ElectricityAffordability/page2.jpg",
        "/images/Projects/ElectricityAffordability/page3.jpg"
      ],
      github: "https://drive.google.com/drive/folders/1E0mugLqzj74jVDgcJoB-qRxw1O0UFD3r?usp=sharing",
      live: "https://lnkd.in/eUedHW7t",
      pdf: "https://drive.google.com/drive/folders/1E0mugLqzj74jVDgcJoB-qRxw1O0UFD3r?usp=sharing",
      keyHighlights: [
        "Analyzed 4,063 Sri Lankan households across the LECO service area (RECON-SL dataset, IEEE DataPort) post-economic crisis.",
        "Built a 3-page interactive Power BI dashboard uncovering that poorest households spend 1.72% of income on power vs 0.75% for wealthy households.",
        "Discovered 13.83% faced disconnection risk and 64.8% lack bill calculation awareness."
      ]
    },
    {
      id: 5,
      name: "Employee Attrition Prediction using CRISP-DM",
      tagline: "6-Stage CRISP-DM Framework on 1,470 Records (0.814 ROC-AUC)",
      category: "analytics",
      period: "Jun 2026",
      description: "Executed the 6-stage CRISP-DM methodology on 1,470 employee records, engineering custom career-stage features and scaling features to address class imbalance.",
      stack: ["Python", "Pandas", "Scikit-learn", "CRISP-DM", "Classification (Logistic Regression, Random Forest, SVM)"],
      image: "/images/Projects/defaults/Employee Attrition Prediction using CRISP-DM.jpg",
      github: "https://github.com/sankajithdjinasena/EmployeeAttritionPrediction",
      live: null,
      keyHighlights: [
        "Executed the 6-stage CRISP-DM methodology on 1,470 employee records, engineering custom career-stage features and scaling features to address class imbalance.",
        "Benchmarked 5 classification algorithms, selecting Logistic Regression as the optimal operational model with 0.814 ROC-AUC and 0.610 Recall to prioritize high-risk retention candidates and pinpoint overtime and compensation as primary turnover drivers."
      ]
    },
    {
      id: 6,
      name: "WellTrackeR – AI Personal Health Monitoring & Diagnostic System",
      tagline: "3-Tier Role-Based Clinical Platform & ML Risk Screening",
      category: "ai",
      period: "Sep 2025 - Nov 2025",
      description: "Engineered a 3-tier, role-based clinical monitoring platform supporting Patients, Doctors, and Admins across a normalized 10-table MySQL relational schema with Chart.js vitals tracking and automated PDF health reporting.",
      stack: ["Python", "Flask", "Scikit-learn", "PHP", "MySQL", "Chart.js", "Dialogflow", "JavaScript"],
      image: "/images/Projects/defaults/Welltracker.jpg",
      github: "https://github.com/sankajithdjinasena/WelltackerR",
      live: null,
      keyHighlights: [
        "Engineered a 3-tier, role-based clinical monitoring platform supporting Patients, Doctors, and Admins across a normalized 10-table MySQL relational schema with Chart.js vitals tracking and automated PDF health reporting.",
        "Integrated multi-condition ML risk screening by serving Scikit-learn disease prediction models (diabetes, lung cancer, brain tumor) via a Flask REST microservice paired with a conversational Dialogflow triage assistant."
      ]
    },
    {
      id: 7,
      name: "Microsoft Stock Probability Analysis",
      tagline: "39 Years (1986–2025) Risk Metrics, Markov Chains & Monte Carlo",
      category: "analytics",
      period: "Sep 2025 - Nov 2025",
      description: "Modeled 39 years of daily historical stock returns (1986-2025) using parametric distributions (Normal, Log-Normal, Student’s t), fitting heavy-tailed characteristics and evaluating empirical win-loss probabilities.",
      stack: ["Python (Pandas, NumPy, Matplotlib, Seaborn)", "SciPy", "Statsmodels", "Monte Carlo Simulation", "Markov Chains"],
      image: "/images/Projects/defaults/Microsoft Stock Probability Analysis.jpg",
      github: "https://github.com/sankajithdjinasena/MicrosoftStockAnalyzeUsingProbability",
      live: null,
      keyHighlights: [
        "Modeled 39 years of daily historical stock returns (1986-2025) using parametric distributions (Normal, Log-Normal, Student’s t), fitting heavy-tailed characteristics and evaluating empirical win-loss probabilities.",
        "Implemented Markov chain transition matrices and Monte Carlo simulations to quantify trend momentum, conditional downside probability, and portfolio risk metrics including Value at Risk (VaR), Conditional VaR (CVaR), and Sharpe Ratio."
      ]
    },
    {
      id: 8,
      name: "Uber Trip Analysis & Booking Behavior Dashboard",
      tagline: "39.6K Bookings ($590.3K Value) Spatial & Temporal Heatmaps",
      category: "powerbi",
      period: "Sep 2026",
      description: "Explored 39.6K Uber bookings ($590.3K booking value, 134K trip miles) to uncover key travel and revenue patterns. Built interactive Power BI dashboards combining KPI cards, day vs. night trip breakdowns, pickup/drop-off location heatmaps, vehicle preferences (UberX leading), and hourly/daily time-series trends.",
      stack: ["Power BI", "DAX", "Business Intelligence", "Time-Series", "Heatmaps"],
      image: "/images/Projects/UberTripAnalysis/overview.jpg",
      images: [
        "/images/Projects/UberTripAnalysis/overview.jpg",
        "/images/Projects/UberTripAnalysis/time_analysis.jpg"
      ],
      github: "https://www.linkedin.com/in/sankajithdjinasena/",
      live: "https://www.linkedin.com/in/sankajithdjinasena/",
      keyHighlights: [
        "Explored 39.6K Uber bookings uncovering key travel and revenue patterns.",
        "Pickup and drop-off location heatmaps identifying top transit corridors.",
        "Hourly and daily time-series analysis highlighting peak commuting spikes."
      ]
    },
    {
      id: 9,
      name: "AgriAgent - Multilingual AI Farm Advisory System",
      tagline: "Trilingual FAISS Vector Search & Real-Time Agronomic LLM Advisor",
      category: "ai",
      period: "Aug 2026",
      description: "A trilingual (English, Sinhala, Tamil) AI farm advisory application with a FAISS-indexed knowledge base and Groq LLM agents providing real-time crop advisory, weather forecasts, fertilizer recommendations, and market-price analysis.",
      stack: ["Python", "FastAPI", "Groq LLM", "FAISS", "Sentence Transformers", "HTML/CSS/JS"],
      image: "/images/Projects/defaults/agri agent.jpg",
      github: "https://github.com/sankajithdjinasena",
      live: null,
      keyHighlights: [
        "Trilingual vector embedding retrieval pipeline indexing regional agricultural best practices.",
        "Sub-second inference response using Groq LLM acceleration with localized dialect adaptation.",
        "Real-time weather integration generating predictive fertilizer application advisories."
      ]
    },
    {
      id: 10,
      name: "NEXLAB - Smart Resource Booking Platform",
      tagline: "Centralized University Resource Booking & Conflict-Free Allocation Engine",
      category: "web",
      period: "Jul 2026",
      description: "A centralized university resource-booking platform with role-based access for students, faculty, and administrators. Uses priority-based scheduling for conflict-free allocation and dynamic waitlist routing for over-capacity requests.",
      stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      image: "/images/Projects/defaults/nexlab.jpg",
      github: "https://github.com/sankajithdjinasena/NEXLAB",
      live: null,
      keyHighlights: [
        "Priority-based scheduling algorithms preventing overlapping laboratory bookings.",
        "Multi-tiered role-based security separating student reservations from faculty approvals.",
        "Real-time resource utilization telemetry dashboards and automated confirmation dispatch."
      ]
    },
    {
      id: 11,
      name: "CSV Data Analyzer",
      tagline: "Automated Data Cleaning, Imputation & Interactive GUI Visualizer",
      category: "analytics",
      period: "Jan 2026 - Feb 2026",
      description: "A Python-based desktop application that enables users to efficiently explore, clean, visualize, and analyze CSV datasets through an intuitive graphical interface. Provides real-time data previews, automated data cleaning, interactive plots, and comprehensive statistical insights.",
      stack: ["Python", "Scikit-learn", "Tkinter", "Flask", "Pandas", "Matplotlib"],
      image: "/images/Projects/defaults/Csv.jpg",
      github: "https://github.com/sankajithdjinasena/PythonMiniProjects/tree/main/CSV_Analyzer",
      live: null,
      keyHighlights: [
        "Automated data profiling generating summary statistics and missing value heatmaps.",
        "One-click preprocessing pipeline supporting outlier detection, encoding, and standardization.",
        "Interactive desktop visualization suite built with Tkinter and Matplotlib integration."
      ]
    },
    {
      id: 12,
      name: "Smart Animal Watcher",
      tagline: "Real-Time AI Surveillance & YOLO Wildlife Threat Detection",
      category: "ai",
      period: "Jan 2026 - Feb 2026",
      description: "A real-time AI-powered surveillance system that detects animals entering a home environment, classifies them as safe or dangerous, and sends instant email alerts for potential threats using YOLO object detection and OpenCV.",
      stack: ["Python", "YOLO", "OpenCV", "Scikit-learn", "Flask"],
      image: "/images/Projects/defaults/smart animal.jpg",
      github: "https://github.com/sankajithdjinasena/SmartAnimalWatcher",
      live: null,
      keyHighlights: [
        "High-framerate video stream processing with OpenCV and YOLO bounding-box detection.",
        "Threat classification pipeline distinguishing harmless pets from dangerous intrusion vectors.",
        "Asynchronous email alert dispatcher with captured video frame attachments."
      ]
    },
    {
      id: 13,
      name: "Bus Management System - RideSync",
      tagline: "Centralized Public Transit Administration & Fleet Scheduling",
      category: "web",
      period: "Feb 2025 - Jun 2025",
      description: "RideSync is a web prototype modernizing public transport administration by integrating route scheduling, digital ticket booking, fleet management, and passenger feedback into a centralized platform.",
      stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      image: "/images/Projects/defaults/bus management.jpg",
      github: "https://github.com/sankajithdjinasena/BusManagementSystem",
      live: null,
      keyHighlights: [
        "Route scheduling and bus fleet tracking database architecture.",
        "Digital passenger seat reservation workflow with real-time seat availability.",
        "Commuter feedback and driver performance rating management."
      ]
    },
    {
      id: 14,
      name: "User Behavior Classification (Mobile Usage)",
      tagline: "Supervised ML Behavioral Profiling on Kaggle Telemetry",
      category: "ai",
      period: "Sep 2024 - Oct 2024",
      description: "Explored mobile device usage patterns to classify user behavior using real-world Kaggle datasets. Executed the full data science pipeline from data cleaning/EDA to training predictive ML classifiers.",
      stack: ["Python", "Scikit-learn", "Flask", "PHP", "MySQL"],
      image: "/images/Projects/defaults/mobile usage.jpg",
      github: "https://github.com/sankajithdjinasena/UserBehaviorClassPredictor",
      live: null,
      keyHighlights: [
        "End-to-end data science lifecycle from exploratory analysis to model tuning.",
        "Benchmarked Decision Trees, Random Forests, and Gradient Boosted trees.",
        "Packaged inference service into an interactive demonstration interface."
      ]
    },
    {
      id: 15,
      name: "Hydroscan - Water Quality Prediction",
      tagline: "Predictive Environmental Potability & Regression Framework",
      category: "ai",
      period: "Jan 2025 - Mar 2025",
      description: "Machine learning-based environmental prediction system forecasting water quality levels from historical data. Integrates regression and classification models into an interactive web application.",
      stack: ["Python", "Scikit-learn", "Flask", "PHP", "MySQL"],
      image: "/images/Projects/defaults/hydroscan.jpg",
      github: "https://github.com/sankajithdjinasena/WaterQualityPredictor",
      live: null,
      keyHighlights: [
        "Standardized chemical property dataset handling skewed distributions and high-correlation attributes.",
        "Trained classification ensemble achieving robust accuracy on unseen environmental validation sets.",
        "Interactive dashboard allowing field technicians to input water samples and receive instant safety ratings."
      ]
    }
  ]
};

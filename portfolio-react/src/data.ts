export const profile = {
  name: "Vishal Nyapathi",
  role: "Full-Stack and ML Engineer",
  location: "Hyderabad, Telangana",
  intro: [
    "Hi, I'm Vishal, an IT graduate who likes seeing a project through end to end instead of sticking to one layer of it. I build with React and TypeScript on the frontend, Node.js and FastAPI on the backend, and I've put real time into machine learning too, mostly computer vision and predictive models.",
    "I've built backend services for a hospital dashboard at CareSetu, trained models as an ML intern at YBI Foundation, and used both to put together two projects from scratch: a nutrition platform with its own recommendation engine, and a real-time detection system with a dashboard to match. I like being the one who owns a feature from the UI down to the database.",
  ],
  tagline:
    "I build products end to end: interfaces, APIs, and the machine learning underneath them. I like it when they hold up under real load, whether that's patient records at a hospital or a detection pipeline running at 11 FPS on CPU-only hardware.",
  bio: [
    "Most of what I know I've picked up by shipping things that had to actually work: production APIs at a healthcare startup, an ML pipeline that had to hit a latency budget, a nutrition app that had to serve real predictions instead of notebook results.",
    "I'm interested in where the frontend, backend, and machine learning parts of a project meet. A clean UI doesn't count for much if the API behind it is slow, and a model isn't worth much until it's actually wired into something people use.",
  ],
  email: "nyapathivishal214@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/vishall214" },
    { label: "LinkedIn", href: "https://linkedin.com/in/vishal-nyapathi-327201257" },
    { label: "LeetCode", href: "https://leetcode.com/u/vishall214/" },
  ],
  // Real metrics, not decorative filler. Pulled from the Overwatch project below.
  heroMetrics: [
    { value: "91ms", label: "end-to-end latency" },
    { value: "83%", label: "fewer false alerts" },
    { value: "11 FPS", label: "on CPU-only hardware" },
  ],
};

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  location: string;
  stack: string[];
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Backend Developer Intern",
    org: "CareSetu",
    period: "May 2025 – Jul 2025",
    location: "Hyderabad, Telangana",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "CI/CD", "REST APIs"],
    bullets: [
      "Built backend services for a hospital dashboard, designing MongoDB schemas and REST APIs for patient records, scheduling, and staff management across 15+ endpoints.",
      "Implemented JWT authentication with role-based access for 3 user roles (doctor, admin, front desk), and built a secure medical record upload service with validation.",
      "Refactored 10+ legacy APIs and resolved 12+ critical backend issues, improving average API response time by 18% and overall system stability.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "YBI Foundation",
    period: "May 2024 – Jun 2024",
    location: "Hyderabad, Telangana",
    stack: ["Python", "pandas", "scikit-learn", "Matplotlib", "Seaborn"],
    bullets: [
      "Built an ML pipeline to predict vehicle fuel efficiency (MPG), engineering and standardizing features on a 392-sample automotive dataset.",
      "Developed a baseline linear regression model achieving R² 0.70 and MAE 3.33 MPG on a held-out test set as an evaluation benchmark.",
      "Engineered degree-2 polynomial features, raising R² to 0.75 and cutting MAE to 2.79 MPG, a 16% error reduction over baseline.",
    ],
  },
];

export type Project = {
  name: string;
  period: string;
  summary: string;
  stack: string[];
  bullets: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Overwatch",
    period: "March 2026",
    summary:
      "A real-time AI surveillance system that detects, tracks, and scores threatening behavior on CPU-only hardware.",
    stack: [
      "Python",
      "YOLOv8",
      "ByteTrack",
      "FastAPI",
      "React.js",
      "OpenCV",
      "PostgreSQL",
      "Docker",
    ],
    bullets: [
      "Combined YOLOv8 detection with ByteTrack tracking to reach 91ms end-to-end latency, 0.87 event precision, ~11 FPS, and an IDF1 score of 77.1 on CPU-only hardware, outperforming SORT.",
      "Designed an asynchronous pipeline (capture → detection → tracking → behavior → alerts) with bounded queues and backpressure, cutting latency 2.2×.",
      "Built a rule-based behavior engine that flags intrusion, loitering, and crowding using 0–100 threat scoring with 8-second alert deduplication, cutting false alerts 83% (47/hr → 8/hr).",
    ],
    links: [{ label: "Live demo", href: "https://overwatch-virid.vercel.app" }],
  },
  {
    name: "MetaMeal",
    period: "July 2025",
    summary:
      "A full-stack MERN nutrition platform that generates personalized meal and workout plans from real dietary and fitness constraints.",
    stack: ["React.js", "Node.js", "MongoDB", "Express", "Machine Learning"],
    bullets: [
      "Built a full-stack MERN platform that generates personalized meal plans by optimizing calorie and macronutrient requirements.",
      "Curated a MongoDB dataset of 370+ dishes, combining rule-based and ML-driven filtering for dietary restrictions and health conditions.",
      "Integrated Harris-Benedict BMR/TDEE formulas with a random forest model to generate workout recommendations across 7+ fitness goals.",
    ],
    links: [{ label: "Live demo", href: "https://meta-meal.vercel.app" }],
  },
];

export const skills = [
  {
    category: "Languages & databases",
    items: [
      "Python",
      "C/C++",
      "Java",
      "JavaScript/TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    category: "ML & automation",
    items: ["scikit-learn", "OpenCV", "YOLOv8", "Hugging Face", "Selenium", "N8N", "Make"],
  },
  {
    category: "Frameworks",
    items: ["React", "REST APIs", "FastAPI", "Express", "Flask"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Kubernetes", "Jenkins", "Linux", "AWS (EC2, S3)", "Postman", "Jupyter"],
  },
  {
    category: "Concepts",
    items: [
      "Data Structures & Algorithms",
      "Generative AI",
      "CI/CD",
      "DevOps",
      "OOP",
      "Operating Systems",
      "RDBMS",
    ],
  },
];

export const achievements = [
  "Won 3+ hackathons, including a runner-up finish out of 80+ teams, and organized 5+ hackathons and technical competitions.",
  "Spearheaded a 21-member student team through Google's machine learning curriculum as part of the GDSC Machine Learning Team.",
  "Recipient of the AWS AI/ML Scholarship 2024.",
  "Placed 2nd twice at AI/ML and Full-Stack Project Expos among 75+ teams.",
];

export const education = {
  school: "MVSR Engineering College",
  location: "Hyderabad, Telangana",
  degree: "B.Tech in Information Technology",
  detail: "CGPA 7.89",
  period: "2022 – 2026",
};

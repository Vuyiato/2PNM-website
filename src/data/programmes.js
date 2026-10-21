// Programme catalogue: one source of truth for cards, filters, and future detail pages.
export const programmeCategories = [
  "All programmes",
  "4IR & Emerging Tech",
  "IT & Technical",
];

export const programmes = [
  {
    number: "01",
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "4IR & Emerging Tech",
    description:
      "Build a practical foundation in the tools shaping the next generation of work.",
    duration: "12 months",
    level: "Foundational",
    tag: "Popular pathway",
    accent: "sun",
    eligibility:
      "South African youth with an interest in technology and a willingness to learn. Final requirements depend on the funded intake.",
    delivery:
      "Hybrid learning combines online study with scheduled in-person sessions. Expect guided lessons, practical projects, and independent study between sessions.",
    accreditation:
      "Programme and accreditation details are confirmed for each intake.",
    funding:
      "Funded opportunities may be available. Check the current opportunity notice before applying.",
    learn: [
      "AI concepts and responsible technology",
      "Data, patterns, and machine learning foundations",
      "Practical problem-solving with AI tools",
      "Presenting a technology project with confidence",
    ],
    careers: [
      "AI support or junior data roles",
      "Digital operations",
      "Further study in technology",
      "Technology entrepreneurship",
    ],
  },
  {
    number: "02",
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "IT & Technical",
    description:
      "Learn how to protect people, systems, and information in a connected world.",
    duration: "12 months",
    level: "Career starter",
    tag: "Industry aligned",
    accent: "blue",
    eligibility:
      "Learners who are curious about computers, networks, privacy, and protecting information.",
    delivery:
      "Hybrid learning combines online study with scheduled in-person sessions. Practical, scenario-based exercises, demonstrations, and mentor guidance help you apply what you learn.",
    accreditation:
      "Accreditation and certification pathways are confirmed for each intake.",
    funding:
      "Some cybersecurity opportunities may be funded through partner programmes.",
    learn: [
      "Cybersecurity principles and digital safety",
      "Networks, threats, and vulnerabilities",
      "Identity, access, and secure behaviour",
      "Incident awareness and workplace readiness",
    ],
    careers: [
      "IT support",
      "Junior security operations",
      "Help desk and systems roles",
      "Further certification study",
    ],
  },
  {
    number: "03",
    slug: "internet-of-things",
    title: "Internet of Things",
    category: "4IR & Emerging Tech",
    description:
      "Learn how connected devices collect and share data to power smart systems.",
    duration: "By intake",
    level: "Career starter",
    tag: "Connected technology",
    accent: "mint",
    eligibility:
      "Learners interested in technology, electronics, data, and how connected devices solve practical problems. Any specific entry requirements are confirmed for each intake.",
    delivery:
      "Hybrid learning combines online study with scheduled in-person sessions. Guided lessons and practical activities help you understand connected-device systems and apply the concepts to real-world examples.",
    accreditation:
      "Accreditation and certification details are confirmed for each intake.",
    funding:
      "Funding availability and eligibility depend on the specific opportunity and intake.",
    learn: [
      "Internet of Things concepts and common use cases",
      "How sensors, devices, networks, and data work together",
      "Connected-device communication and basic system design",
      "Privacy, security, and responsible use of connected technology",
    ],
    careers: [
      "IoT or technical support",
      "Connected-device installation support",
      "Junior systems or network support",
      "Further study in IoT, electronics, or networking",
    ],
  },
  {
    number: "04",
    slug: "cloud-administration",
    title: "Cloud Administration",
    category: "IT & Technical",
    description:
      "Build skills to manage cloud services, user access, and essential IT resources.",
    duration: "By intake",
    level: "Career starter",
    tag: "Cloud foundations",
    accent: "coral",
    eligibility:
      "Learners interested in IT systems and online services. Basic computer confidence is useful; any formal entry requirements are confirmed for each intake.",
    delivery:
      "Hybrid learning combines online study with scheduled in-person sessions. Guided demonstrations and practical exercises introduce cloud administration concepts, supported by independent study.",
    accreditation:
      "Accreditation and certification details are confirmed for each intake.",
    funding:
      "Funding availability and eligibility depend on the specific opportunity and intake.",
    learn: [
      "Cloud computing concepts and service models",
      "Cloud resources such as compute, storage, and networking",
      "User accounts, permissions, and access management",
      "Monitoring, backups, security, and cost awareness",
    ],
    careers: [
      "Junior cloud support",
      "Cloud operations assistant",
      "IT or systems support",
      "Further study toward cloud certifications",
    ],
  },
];

export const opportunities = [
  {
    type: "Learnerships & Internships",
    title: "Build your career in Information and Communications Technology",
    detail:
      "Explore structured learning and workplace opportunities that help you develop practical ICT skills.",
    status: "Explore opportunities",
    statusKey: "explore",
    closingDate: "Dates vary by programme",
    location: "Location varies by programme",
    requirements:
      "Eligibility and entry requirements depend on the programme",
  },
  {
    type: "Work-Integrated Learning",
    title: "Gain practical workplace experience",
    detail:
      "Apply what you have studied, develop professional skills and gain experience in a working environment.",
    status: "Explore opportunities",
    statusKey: "explore",
    closingDate: "Dates vary by placement",
    location: "Placement dependent",
    requirements:
      "For students and graduates who meet the placement requirements",
  },
  {
    type: "Masterclasses",
    title: "Develop your team's digital skills",
    detail:
      "Explore focused training that helps teams strengthen their digital capabilities and apply new skills at work.",
    status: "Enquire now",
    statusKey: "enquire",
    closingDate: "Scheduling by arrangement",
    location: "Delivery options available on enquiry",
    requirements:
      "For organisations and teams; prerequisites vary by course",
  },
];

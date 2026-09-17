/**
 * data.js
 * ------------------------------------------------------------------
 * Single source of truth for the content on the site.
 * To add a new project later: just add another object to PROJECTS.
 * To update contact info: edit CONTACT_LINKS below.
 * Nothing here should be invented — every field should reflect real,
 * confirmed information.
 * ------------------------------------------------------------------
 */

const SKILL_GROUPS = [
  {
    title: "Programming",
    items: ["Python", "C#", "Java", "R", "SQL"],
  },
  {
    title: "AI & Data",
    items: ["Artificial Intelligence", "Data Analysis", "R Programming", "Python"],
  },
  {
    title: "Database",
    items: ["SQL", "Database Systems"],
  },
  {
    title: "Networking & Systems",
    items: ["Cisco Packet Tracer", "Networking", "System & Network Administration"],
  },
  {
    title: "UI / UX",
    items: ["Figma", "UI/UX Design"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "Visual Studio"],
  },
];

const PROJECTS = [
  {
    name: "Gr8Food — Restaurant Management System",
    tagline: "C# Windows Forms app with a SQL Server backend.",
    description:
      "A restaurant management system built in C# Windows Forms with a SQL Server database, covering ordering, menu management, a wallet feature, customer feedback, and reporting.",
    features: [
      "Order handling and menu management",
      "SQL Server database backend",
      "Wallet feature for customers",
      "Feedback and reporting tools",
    ],
    tech: ["C#", "Windows Forms", "SQL Server"],
    github: "https://github.com/arooba-ai/Gr8Food-Restaurant-Management-System",
    demo: null,
  },
  {
    name: "Python Hotel Management System",
    tagline: "Bookings, guests, and payments, built in Python.",
    description:
      "A hotel management system built in Python, featuring room management, guest records, bookings, payments, and administrative operations.",
    features: [
      "Room and guest record management",
      "Booking workflow",
      "Payment handling",
      "Administrative operations",
    ],
    tech: ["Python"],
    github: "https://github.com/arooba-ai/Python-Hotel-Management-System",
    demo: null,
  },
  {
    name: "Cisco Packet Tracer Networking Project",
    tagline: "Hub-and-spoke network topology with full IP addressing.",
    description:
      "A networking project built in Cisco Packet Tracer, featuring a hub-and-spoke topology, IP addressing, device configuration, and network connectivity.",
    features: [
      "Hub-and-spoke topology design",
      "IP addressing scheme",
      "Device configuration",
      "End-to-end network connectivity",
    ],
    tech: ["Cisco Packet Tracer", "Networking", "IP Addressing"],
    github: "https://github.com/arooba-ai/Cisco-Packet-Tracer-Networking-Project",
    demo: null,
  },
  {
    name: "Fashion E-commerce Prototype",
    tagline: "UI/UX prototype for a fashion shopping app.",
    description:
      "A UI/UX prototype for a fashion e-commerce mobile application, designed in Figma.",
    features: [
      "Mobile-first fashion e-commerce flow",
      "Designed and prototyped in Figma",
    ],
    tech: ["Figma", "UI/UX"],
    github: "https://github.com/arooba-ai/Fashion-Ecommerce-Prototype",
    demo: null,
  },
];

const JOURNEY = [
  {
    stage: "Foundation",
    items: ["Networking", "Database", "Mathematics", "Systems"],
  },
  {
    stage: "Development",
    items: ["Python", "C#", "Java", "SQL", "Git", "UI/UX"],
  },
  {
    stage: "Current focus",
    items: ["R", "Data Analysis", "System & Network Administration"],
  },
  {
    stage: "Career direction",
    items: ["AI", "Data Science", "Machine Learning"],
  },
];

const EDUCATION_SUBJECTS = [
  "Artificial Intelligence",
  "Data Analysis",
  "R Programming",
  "Java",
  "Database",
  "Networking",
  "System & Network Administration",
  "System Analysis & Design",
  "Integrated Computer Systems",
  "Mathematics",
  "Entrepreneurship",
];

/**
 * CONTACT_LINKS
 * TODO: Replace the placeholder values below with real details before
 * publishing this site. Nothing here should go live with placeholder
 * text still in it.
 */
const CONTACT_LINKS = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    placeholder: true,
  },
  {
    label: "LinkedIn",
    value: "Add your LinkedIn URL",
    href: "#",
    placeholder: true,
  },
  {
    label: "GitHub",
    value: "github.com/arooba-ai",
    href: "https://github.com/arooba-ai",
    placeholder: false,
  },
];

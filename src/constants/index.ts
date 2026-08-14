export interface NavLink {
  name: string;
  link: string;
}

export const navLinks: NavLink[] = [
  { name: "Work", link: "/work" },
  { name: "About", link: "/about" },
  { name: "Now", link: "/now" },
  { name: "Notes", link: "/notes" },
  { name: "Resume", link: "/resume" },
];

export interface Role {
  id: string;
  index: string;
  company: string;
  org: string;
  role: string;
  date: string;
  logo: string | null;
  image?: string;
  blurb: string;
  bullets: string[];
  tags: string[];
  link?: string;
  caseStudy?: boolean;
}

/** All five engagements, newest first — this is the site's single source of career content. */
export const roles: Role[] = [
  {
    id: "sunbreaker",
    index: "01",
    company: "Sunbreaker",
    org: "QuietWizard Studios",
    role: "Technical Lead",
    date: "2026 - Present",
    logo: "/images/qws_logo.png",
    blurb:
      "Reviving a brand let go in the 90s — I built the technical back end the founder needed: a Shopify store from scratch, including UI/UX, branding and workflows.",
    bullets: [
      "Sunbreaker is a brand being revived in 2026. The founder had the vision, assets, branding and marketing; he needed the technical back end, which is where I came in.",
      "Designed and built his Shopify store completely from scratch, including UI/UX, branding and workflows.",
      "Set up all the technical back-ends to help the owner run this business.",
    ],
    tags: ["Shopify", "UI/UX", "Brand", "Workflows"],
    link: "https://sunbreaker.surf",
  },
  {
    id: "simplecyber",
    index: "02",
    company: "Simple Cyber Technology",
    org: "Simple Cyber Technology",
    role: "Chief Technology Officer",
    date: "November 2025 - April 2026",
    logo: null,
    blurb:
      "A brand-new startup, built from the ground up. Technology stack, infrastructure, lead generation, hiring, website, branding and design.",
    bullets: [
      "Helped build this company from the ground up as a brand-new startup.",
      "In charge of building the technology stack and the infrastructure.",
      "In charge of building lead generation, hiring, the website, and doing all of the branding and design.",
    ],
    tags: ["Zero to one", "Infrastructure", "Brand", "Hiring"],
    link: "https://simplecybertech.com/",
  },
  {
    id: "equilife",
    index: "03",
    company: "EquiLife",
    org: "EquiLife",
    role: "Vice President of Technology",
    date: "November 2021 - March 2025",
    logo: "/images/el_logo.png",
    image: "/images/el_exp.png",
    blurb:
      "Owned the full SDLC for a custom labs portal on Azure, rebuilt the logistics pipeline into Shopify, and launched a program across iOS, Android and web.",
    bullets: [
      "Manage the full SDLC for building a custom Labs Registration and Administration Portal with latest .Net Core and Azure technology.",
      "Rebuilt the Logistics Pipeline (OMS, WMS and 3PL) with automation that directly connects to Shopify. This also required a overhaul of our entire SKU system.",
      "Completed the successful launch of the Ayubowan program, which included iOS, Android and Web apps as well as a WordPress CMS.",
    ],
    tags: [".NET Core", "Azure", "OMS / WMS", "Mobile"],
  },
  {
    id: "zymo",
    index: "04",
    company: "Zymo Research",
    org: "Zymo Research",
    role: "Web Development Manager",
    date: "May 2018 - Nov 2021",
    logo: "/images/zr_logo.png",
    image: "/images/zr_exp.png",
    blurb:
      "Migrated US and international storefronts from Magento to Shopify Plus, and ran the Azure and AWS infrastructure behind them.",
    bullets: [
      "Completed the eCommerce platform migration from Magento to Shopify Plus for US and International.",
      "Managed the development and maintenance for the Shopify eCommerce website as well as the custom internal websites and applications.",
      "Managed the Azure and AWS infrastructure, including VM's, Serverless/Microservice applications, CMS Caching, Routing as well as CI/CD pipelines.",
      "Used Docker to create a Web Service of a Python/Flask metafield manager application.",
    ],
    tags: ["Shopify Plus", "Magento", "AWS", "CI/CD"],
    caseStudy: true,
  },
  {
    id: "quietwizard",
    index: "05",
    company: "QuietWizard Studios",
    org: "QuietWizard Studios",
    role: "Founder",
    date: "January 2017 - Present",
    logo: "/images/qws_logo.png",
    blurb:
      "My own studio. Platform migrations, geolocation services, infrastructure and several hundred landing pages rebuilt as clean, reusable front-end code.",
    bullets: [
      "Completed the eCommerce platform migration from a custom eCommerce CMS in ASP/C# to Magento 2.2 Cloud Enterprise Edition.",
      "Developed and maintained geolocation services for city and state level targeting which allowed custom content to be displayed for the market close to the physical retail stores.",
      "Managed and maintained the infrastructure for both the local and cloud development/production environments.",
      "Converted over 200 landing pages from custom .net code to clean and reusable HTML/CSS/JS/Bootstrap code.",
    ],
    tags: ["Magento", "Geolocation", "Infrastructure"],
  },
];

export interface CapabilityTile {
  label: string;
  icon: string;
}

export const capabilityTiles: CapabilityTile[] = [
  { label: "Technology Strategy", icon: "/images/ideas.svg" },
  { label: "Cloud Architecture", icon: "/images/logos/azure.png" },
  { label: "eCommerce Platforms", icon: "/images/logos/shopify.png" },
  { label: "AI & Automation", icon: "/images/concepts.svg" },
];

export const capabilityChips: string[] = [
  "DevOps & CI/CD",
  "ERP / OMS / WMS Integrations",
  "Digital Transformation",
  "Agile Delivery",
  "UI/UX",
  "Team Building & Mentorship",
  "Cybersecurity Governance",
];

export interface StackLogo {
  src: string;
  name: string;
  invert?: boolean;
}

export const stackLogos: StackLogo[] = [
  { src: "/images/logos/shopify.png", name: "Shopify Plus" },
  { src: "/images/logos/azure.png", name: "Microsoft Azure" },
  { src: "/images/logos/aws-logo.png", name: "AWS", invert: true },
  { src: "/images/logos/gcp.png", name: "Google Cloud" },
  { src: "/images/logos/dotnet.png", name: ".NET" },
  { src: "/images/logos/react.png", name: "React" },
  { src: "/images/logos/node.png", name: "Node" },
  { src: "https://cdn.simpleicons.org/n8n/FFFFFF", name: "n8n" },
  { src: "https://cdn.simpleicons.org/zapier/FFFFFF", name: "Zapier" },
  { src: "/images/logos/openai-icon.png", name: "OpenAI", invert: true },
  { src: "/images/logos/atlassian.png", name: "Atlassian" },
];

export const positioning =
  "Tech leader with 20+ years scaling digital platforms in eCommerce and biotech. I turn complexity into clarity, leading enterprise migrations and building high-performing teams. Expert in Cloud Architecture, Shopify Plus, and .NET. Currently focused on AI and automation (n8n, Zapier) to maximize efficiency. I bridge the gap between executive strategy and hands-on engineering to drive growth.";

export const positioningLede = positioning.split(". ").slice(0, 2).join(". ") + ".";

export const availability =
  "Available for Fractional CTO, Engineering & eCommerce work as well as AI Automation & Integration.";

export interface SocialLink {
  name: string;
  imgPath: string;
  link: string;
}

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", imgPath: "/images/linkedin.png", link: "https://www.linkedin.com/in/themichaelfoss/" },
  { name: "X", imgPath: "/images/x.png", link: "https://x.com/michaelfoss" },
];

/** Now page — explicitly placeholder content, no streams or sessions scheduled yet. */
export interface NextUpItem {
  tone: "accent" | "neutral";
  tag: string;
  meta: string;
  title: string;
  date: string;
}

export const nextUpItems: NextUpItem[] = [
  { tone: "accent", tag: "Live next", meta: "YouTube · 60 min", title: "Session title placeholder", date: "Date placeholder" },
  { tone: "neutral", tag: "Scheduled", meta: "YouTube · 60 min", title: "Session title placeholder", date: "Date placeholder" },
  { tone: "neutral", tag: "Scheduled", meta: "YouTube · 60 min", title: "Session title placeholder", date: "Date placeholder" },
];

export interface CurrentStatus {
  text: string;
  live: boolean;
}

export const currentStatuses: CurrentStatus[] = [
  { text: "Building the Sunbreaker storefront", live: true },
  { text: "Reading list — placeholder", live: false },
  { text: "Side project — placeholder", live: false },
];

/** Notes page — explicitly placeholder content, no posts written yet. */
export interface NotePlaceholder {
  date: string;
  title: string;
  standfirst: string;
  category: string;
}

export const notesPlaceholder: NotePlaceholder[] = [
  { date: "Date", title: "Post title placeholder", standfirst: "Standfirst placeholder — a sentence or two summarizing the post.", category: "Category" },
  { date: "Date", title: "Post title placeholder", standfirst: "Standfirst placeholder — a sentence or two summarizing the post.", category: "Category" },
  { date: "Date", title: "Post title placeholder", standfirst: "Standfirst placeholder — a sentence or two summarizing the post.", category: "Category" },
  { date: "Date", title: "Post title placeholder", standfirst: "Standfirst placeholder — a sentence or two summarizing the post.", category: "Category" },
];

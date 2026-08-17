export interface NavLink {
  name: string;
  link: string;
}

export const navLinks: NavLink[] = [
  { name: "Work", link: "/work" },
  { name: "About", link: "/about" },
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

/** All eight engagements, newest first — this is the site's single source of career content. */
export const roles: Role[] = [
  {
    id: "quietwizard",
    index: "01",
    company: "QuietWizard Studios",
    org: "QuietWizard Studios",
    role: "Founder & Chief Executive Officer",
    date: "February 2017 - Present",
    logo: "/images/qws-logo.png",
    blurb:
      "At QuietWizard Studios, I partnered with multiple early-stage startups and small businesses to design, build, and deploy modern, scalable web solutions across biotechnology, automotive, apparel and medical industries. I transformed incomplete or legacy websites into production-ready, responsive digital platforms, leveraging Shopify, React, .NET Core, and Dockerized deployment pipelines. Working independently and under tight deadlines, I delivered rapid MVPs, marketing sites, and responsive redesigns that allowed clients to launch, validate, and scale their businesses efficiently.",
    bullets: [
      "Biotechnology Startup Launch: Converted a WordPress-based biotech testing site into a Shopify storefront, rebuilding the user experience and product architecture while crafting design, copy, and structure for a rapid MVP launch.",
      "Car Concierge Service Development: Built both a React/Material Design site (Gatsby) and a .NET Core web app as parallel prototypes, providing the startup with deployment flexibility and comparative performance data in AWS via Docker containers.",
      "Agile Marketing Site Delivery: Delivered a fully functional marketing site under compressed timelines, ensuring brand continuity with the company’s evolving product ecosystem.",
      "Medical Practice Campaign Implementation: Executed a WordPress landing page redesign for a plastic surgery clinic’s fall promotion, pixel-matching the provided desktop PSD design and rebuilding photo assets for full responsive compatibility.",
      "Design-to-Code Precision: Reconstructed and optimized visual assets for tablet and mobile breakpoints using Photoshop, ensuring consistent branding and visual fidelity across devices.",
      "Rapid Delivery Under Tight Timelines: Successfully launched multiple digital products within weeks, balancing speed, code quality, and design polish to meet renewal, campaign, and investor deadlines."
    ],
    tags: ["Shopify", "UI/UX", "Brand", "Workflows", "Technology Stack", "MVPs", "Rapid Delivery"],
    link: "https://quietwizard.com",
  },
  {
    id: "simplecyber",
    index: "02",
    company: "Simple Cyber Technology",
    org: "Simple Cyber Technology",
    role: "Chief Technology Officer",
    date: "November 2025 - April 2026",
    logo: "/images/sct-logo.png",
    blurb:
      "Served as a key early contributor in building Simple Cyber Technology from the ground up, driving technology and operations across rebranding, business model development, IT infrastructure, cybersecurity/MSP services, compliance, digital platforms, CRM systems, and AI-powered workflow improvements.",
    bullets: [
      "Played a foundational role in launching and scaling the business, supporting company naming, rebranding, business model development, and operational setup.",
      "Built and managed core technology functions, including IT infrastructure, cybersecurity/MSP systems, website deployment, and CRM implementation.",
      "Supported compliance efforts and operational readiness by establishing processes, tools, and systems across the organization.",
      "Partnered on compliance-related initiatives while introducing AI tools for research, process improvement, and workflow development to increase efficiency and support business growth."
    ],
    tags: ["Cybersecurity", "Infrastructure", "Brand", "MSP", "Governance/Compliance", "Hiring"],
    link: "https://simplecybertech.com/",
  },
  {
    id: "equilife",
    index: "03",
    company: "EquiLife",
    org: "EquiLife",
    role: "Vice President of Technology",
    date: "November 2021 - March 2025",
    logo: "/images/equilife-logo.jpg",
    image: "/images/equilife-exp.jpg",
    blurb:
      "At EquiLife, I led company-wide digital transformation across logistics, labs, eCommerce, and infrastructure. I architected automation-first systems integrating Shopify, Skubana (OMS/WMS), SEKO 3PL, and HubSpot, while building and mentoring internal engineering teams. My work modernized the technology stack, unified data across departments, and improved operational speed, accuracy, and scalability throughout the organization.",
    bullets: [
      "Modernized Logistics Infrastructure: Overhauled the fulfillment and warehouse ecosystem—implementing Skubana OMS/WMS and SEKO 3PL, and rebuilding the SKU system to support rapid product expansion.",
      "Automation Leadership: Built 20+ workflow bots to manage kit handling, carrier routing, and shipping logic (FedEx, UPS, domestic/international), reducing manual effort.",
      "Digital Labs Platform: Helped lead the design and launch of a .NET Core / Azure-based portal that digitized paper lab forms with OCR-driven PDF mapping and user-linked data, improving efficiency and compliance.",
      "Cross-Platform App Launch: Directed vendor teams to build Ayubowan, a content app (iOS, Android, Web) integrated with WordPress CMS for functional health engagement.",
      "Sales System Integration: Built a B2B Shopify store tied to HubSpot CRM, automating rep assignment, onboarding, and lifecycle campaigns.",
      "Operational Excellence: Helped standardize semi-annual sale operations with a one-month QA/code freeze cycle, cutting live-sale issues to near zero.",
      "Team & Tech Oversight: Scaled two development teams, mentored the eCommerce Director, and oversaw eCommerce tech (Shopify, Skio, Recharge, Zonos, Skubana).",
      "Security & Governance: Transitioned to a JAMF-managed Apple ecosystem, implemented 2FA and credential policies, and supported vendor contract review with the CTO.",
      "ERP Implementation: Co-led onboarding for Acumatica ERP, aligning logistics, finance, and inventory workflows with implementation partners."
    ],
    tags: ["Shopify Plus",".NET Core", "Azure", "OMS/WMS/3PL", "Subscriptions", "Automation", "AI Implementation", "Team Building", "Digital Transformation"],
  },
  {
    id: "zymo",
    index: "04",
    company: "Zymo Research",
    org: "Zymo Research",
    role: "Web Development Manager",
    date: "May 2018 - Nov 2021",
    logo: "/images/zymo-logo.jpg",
    image: "/images/zymo-exp.jpg",
    blurb:
      "At Zymo Research, I led the company’s digital transformation from a fragmented Magento environment to a unified, global Shopify Plus ecosystem. I managed a cross-functional team to rebuild the online presence, standardize design systems, and develop a proprietary Product Information Management (PIM) platform for international store synchronization. I also owned the AWS and Azure infrastructure, implementing CI/CD pipelines, Dockerized microservices, and research web apps that empowered internal teams. This modernization earned Zymo the 2019 Web Awards for Biotechnology and Technology Standard of Excellence.",
    bullets: [
      "Global eCommerce Migration: Directed full migration from Magento 2.2 to Shopify Plus, consolidating U.S., German, and international sites into one scalable, cloud-managed system with improved uptime and speed.",
      "Custom PIM Platform: Oversaw the building of a C#/.NET Core PIM on AWS EC2 with Aurora SQL, enabling multi-environment synchronization and drastically reducing catalog management time.",
      "Award-Winning Redesign: Led the six-month UX/UI overhaul and redesign of ZymoResearch, achieving a seamless Shopify launch recognized with WebAwards for excellence.",
      "Media & Design Standards: Created responsive image and layout standards, implementing AWS S3 asset versioning that cut design turnaround by 40%.",
      "DevOps & Infrastructure Ownership: Managed hybrid AWS + Azure systems, including EC2 instances, caching, routing, and CI/CD pipelines via Azure DevOps and GitHub Actions.",
      "Python/Flask App Innovation: Oversaw and helped develop a Docker-based Python/Flask web service to manage Shopify metafields cutting this workflow time by 70%.",
      "Team Leadership: Built and mentored a team of developers and interns, establishing coding standards, documentation, and a continuous learning culture."
    ],
    tags: ["Shopify Plus", "Magento", "AWS", "CI/CD", "ERP Integration", "PIM", "Python/Flask", "Team Building", "Digital Transformation"],
    caseStudy: true,
  },
  {
    id: "robbinsbros",
    index: "05",
    company: "Robbins Bros. Jewelers",
    org: "Robbins Bros. Jewelers",
    role: "Web Manager & Senior Developer",
    date: "Feb 2017 - Sept 2018",
    logo: "/images/rb-logo.jpg",
    image: "/images/rb-exp.jpg",
    blurb:
      "Recruited to modernize and re-platform Robbins Brothers’ outdated ASP.NET eCommerce system, I led the full migration to Magento 2 Enterprise Cloud Edition under an aggressive three-month deadline. I architected the new infrastructure, built hundreds of custom landing pages, partnered with backend engineers to ensure data integrity, and managed deployment and release schedules. The successful launch transformed the company’s digital storefront, delivering scalability, responsiveness, and a sustainable pipeline for ongoing innovation.",
    bullets: [
      "eCommerce Modernization: Directed migration from a legacy ASP.NET CMS to Magento 2 Enterprise Cloud, launching on schedule and creating a scalable, maintainable foundation for growth.",
      "Front-End Leadership: Developed 250+ responsive landing pages within Magento’s theming system, aligned with brand standards and optimized for SEO and conversion.",
      "Infrastructure Design: Architected and managed both cloud and local environments for production and staging, improving reliability and performance.",
      "Backend Collaboration: Partnered with a database engineer to design schema and optimize performance across front- and back-end systems.",
      "Post-Launch Ownership: Solely managed and maintained the Magento stack, overseeing patching, releases, and emergency fixes to ensure continuous uptime.",
      "Localized Personalization: Built geolocation-driven content targeting, customizing promotions and content by market to boost localized engagement.",
      "Cross-Functional Leadership: Supervised contract developers and consultants, aligning IT, marketing, and eCommerce objectives under tight timelines."
    ],
    tags: ["Magento", "DevOps", "Infrastructure", "WordPress", "eCommerce", "Front-End Development", "Team Leadership"],
  },
  {
    id: "roadtrip",
    index: "06",
    company: "Roadtrip Nation",
    org: "Roadtrip Nation",
    role: "Full-Stack Web Developer",
    date: "Sept 2016 - Jan 2017",
    logo: "/images/roadtrip-logo.png",
    blurb:
      "After the acquisition of College Confidential, I was brought in to stabilize and rebuild a complex, AWS-based infrastructure that had become unreliable due to a broken, reverse-engineered deployment system. I re-architected the cloud environment, restored automation, and re-established functional parity across production, staging, and development environments. My work revived platform stability, enabled faster deployments, and ensured consistency across WordPress, PHP, and forum applications; laying the groundwork for future scalability.",
    bullets: [
      "AWS Infrastructure Rebuild: Re-engineered the full AWS architecture—configuring VPCs, EC2/RDS instances, load balancers, auto-scaling groups, AMIs, and security layers—to restore performance and scalability.",
      "DevOps Automation Recovery: Rebuilt bash-based deployment pipelines, reinstating automated provisioning and version-controlled deployment across all environments.",
      "Authentication Integration: Reconstructed SimpleSAML SSO between WordPress and PHP forums, resolving user login issues and unifying identity management.",
      "Full-Stack Development: Enhanced and maintained multiple web properties using PHP, JavaScript, jQuery, Symfony, and Smarty templates, ensuring speed and code quality.",
      "Local Environment Optimization: Upgraded Vagrant VM builds to mirror production, standardizing local development for faster debugging and consistent releases.",
      "Operational Stabilization: Delivered complete infrastructure and deployment recovery within a three-month timeline, eliminating major system failures and enabling reliable, repeatable releases."
    ],
    tags: ["AWS", "SSO", "PHP Forums", "DevOps", "Infrastructure", "WordPress"],
  },
  {
    id: "lumina",
    index: "07",
    company: "Lumina Media",
    org: "Lumina Media",
    role: "Full-Stack Web Developer",
    date: "April 2016 - Sept 2016",
    logo: "/images/lumina-logo.jpg",
    blurb:
      "At Lumina Media, I was brought on to accelerate the company’s transition from print publishing to digital media by modernizing its online magazine infrastructure. I rebuilt and optimized multiple WordPress-based publication sites to deliver a high-quality editorial experience while integrating advanced ad systems and video monetization tools. I also developed local and cloud environments to streamline development workflows, containerized testing, and ensured site reliability through AWS-managed LEMP servers. My work enabled Lumina’s editorial teams to publish, monetize, and maintain large-scale digital content portfolios with agility and technical stability.",
    bullets: [
      "Digital Transformation Enablement: Led the migration of legacy ASP.NET-based publication systems to modern WordPress platforms, enabling editorial teams to manage and publish online content seamlessly.",
      "Custom WordPress Engineering: Built and maintained custom WordPress themes and plugins tailored for online magazines, combining user-friendly editorial workflows with visually rich, responsive layouts.",
      "Ad Monetization Integration: Implemented advertising pipelines using Google Tag Manager (GTM) and DoubleClick for Publishers (DFP), ensuring seamless ad delivery across articles and list views.",
      "Cloud Infrastructure Management: Configured and maintained AWS EC2-hosted LEMP servers, handling system updates, security patches, and backups using automated snapshot management.",
      "Local Development Optimization: Built Vagrant-based WordPress dev environments with database mirroring to enable plugin testing and custom code QA prior to production deployment.",
      "Frontend Optimization: Developed sites using PHP, JavaScript, jQuery, Gulp, Sass, and Bootstrap, ensuring responsive, performance-optimized pages with a premium magazine aesthetic.",
      "Rich Media Integration: Integrated Brightcove pre-roll video players and ad modules, enhancing multimedia engagement and introducing new digital revenue streams."
    ],
    tags: ["WordPress", "Infrastructure", "AWS", "GTM/DFP", "Digital Transformation", "Frontend Optimization"],
  },
  {
    id: "motorcyclesafety",
    index: "08",
    company: "Motorcycle Safety Foundation",
    org: "Motorcycle Safety Foundation",
    role: "Senior Front-End Web Developer",
    date: "December 2013 - April 2016",
    logo: "/images/msf-logo.jpg",
    blurb:
      "At the Motorcycle Safety Foundation (MSF), I led the modernization of the organization’s digital ecosystem—transitioning dozens of ColdFusion-based websites into scalable, responsive .NET and WordPress platforms. I architected MSF’s first .NET-based flagship site, introducing Bootstrap and AngularJS for responsive, cross-browser compatibility (including legacy IE8 support). Alongside front-end innovation, I managed the organization’s IIS web servers, implemented version control across 60+ web properties, and unified analytics and API integrations to support data-driven engagement.",
    bullets: [
      "Legacy Platform Modernization: Converted legacy ColdFusion sites to .NET 4.0 (VB & C#), creating a maintainable, modern web foundation.",
      "Responsive Design Leadership: Delivered a full responsive redesign using Bootstrap, improving UX consistency and accessibility across all browsers.",
      "Front-End Framework Innovation: Introduced AngularJS for two-way data binding and templating from JSON sources, streamlining development and reducing .NET dependency.",
      "Multi-Site Oversight: Managed 60+ active sites spanning .NET, ColdFusion, and WordPress, standardizing hosting, deployment, and maintenance practices.",
      "Source Control Implementation: Migrated all sites to Team Foundation Version Control, later transitioning to Bitbucket for better collaboration and recovery.",
      "API & Data Integration: Integrated YouTube, Twitter, Facebook, and Blog APIs, and developed JSON/XML modules for dynamic news and BRC Quiz content.",
      "Analytics & Optimization: Implemented Google Analytics event tracking, enabling full user-interaction mapping and data-backed UX improvements.",
      "Digital Communications: Designed responsive HTML email templates for newsletters and outreach campaigns with consistent branding."
    ],
    tags: ["ASP.NET", "AngularJS", "Infrastructure", "Responsive Design", "Legacy Modernization", "API Integration", "Analytics", "Email Templates"],
  },
];

export interface CapabilityTile {
  label: string;
  icon: string;
}

export const capabilityTiles: CapabilityTile[] = [
  { label: "Technology Strategy", icon: "/images/icon_technology_strategy.png" },
  { label: "Cloud Architecture", icon: "/images/logos/azure.png" },
  { label: "eCommerce Platforms", icon: "/images/logos/shopify.png" },
  { label: "AI & Automation", icon: "/images/icon_ai_automation.png" },
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

/**
 * The brand-color params (primary/text/background) are a Calendly Standard-plan feature —
 * silently ignored on the free plan, so this is inert until the account is upgraded.
 */
export const calendlyUrl =
  "https://calendly.com/michaelfoss/30-minute-meeting?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=f0a030&text_color=f6f4f0&background_color=101013";

export interface SocialLink {
  name: string;
  imgPath: string;
  link: string;
}

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", imgPath: "/images/linkedin.png", link: "https://www.linkedin.com/in/themichaelfoss/" },
  { name: "X", imgPath: "/images/x.png", link: "https://x.com/michaelfoss" },
];

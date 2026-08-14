export interface NavLink {
  name: string;
  link: string;
}

export interface Word {
  text: string;
  imgPath: string;
}

export interface Ability {
  imgPath: string;
  title: string;
  desc: string;
}

export interface TechStackImg {
  name: string;
  imgPath: string;
}

export interface ExpCard {
  imgPath: string;
  logoPath: string;
  company: string;
  title: string;
  date: string;
  responsibilities: string[];
}

export interface SocialImg {
  name: string;
  imgPath: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    name: "Experience",
    link: "/experience",
  },
  {
    name: "Skills",
    link: "/skills",
  },
];

const words: Word[] = [
  { text: "eCommerce", imgPath: "/images/cart.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "eCommerce", imgPath: "/images/cart.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
];

const abilities: Ability[] = [
  {
    imgPath: "/images/seo.png",
    title: "SEO Optimization",
    desc: "Ensuring your website ranks high on search engines for maximum visibility, traffic, and conversions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs: TechStackImg[] = [
  {
    name: "Shopify Developer",
    imgPath: "/images/logos/shopify.png",
  },
  {
    name: "Microsoft Azure",
    imgPath: "/images/logos/azure.png",
  },
  {
    name: "Google Cloud Platform",
    imgPath: "/images/logos/gcp.png",
  },
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Javascript Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Microsoft .Net Core Developer",
    imgPath: "/images/logos/dotnet.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/atlassian.png",
  },
];

const expCards: ExpCard[] = [
  {
    imgPath: "/images/rb_exp.png",
    logoPath: "/images/qws_logo.png",
    company: "QuietWizard Studios",
    title: "Founder",
    date: "January 2017 - Present",
    responsibilities: [
      "Completed the eCommerce platform migration from a custom eCommerce CMS in ASP/C# to Magento 2.2 Cloud Enterprise Edition.",
      "Developed and maintained geolocation services for city and state level targeting which allowed custom content to be displayed for the market close to the physical retail stores.",
      "Managed and maintained the infrastructure for both the local and cloud development/production environments.",
      "Converted over 200 landing pages from custom .net code to clean and reusable HTML/CSS/JS/Bootstrap code."
    ],
  },
  {
    imgPath: "/images/el_exp.png",
    logoPath: "/images/el_logo.png",
    company: "EquiLife",
    title: "Vice President of Technology",
    date: "November 2021 - March 2025",
    responsibilities: [
      "Manage the full SDLC for building a custom Labs Registration and Administration Portal with latest .Net Core and Azure technology.",
      "Rebuilt the Logistics Pipeline (OMS, WMS and 3PL) with automation that directly connects to Shopify. This also required a overhaul of our entire SKU system.",
      "Completed the successful launch of the Ayubowan program, which included iOS, Android and Web apps as well as a WordPress CMS.",
    ],
  },
  {
    imgPath: "/images/zr_exp.png",
    logoPath: "/images/zr_logo.png",
    company: "Zymo Research",
    title: "Web Development Manager",
    date: "May 2018 - Nov 2021",
    responsibilities: [
      "Completed the eCommerce platform migration from Magento to Shopify Plus for US and International.",
      "Managed the development and maintenance for the Shopify eCommerce website as well as the custom internal websites and applications.",
      "Managed the Azure and AWS infrastructure, including VM’s, Serverless/Microservice applications, CMS Caching, Routing as well as CI/CD pipelines.",
      "Used Docker to create a Web Service of a Python/Flask metafield manager application.",
    ],
  },
];

const socialImgs: SocialImg[] = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/themichaelfoss/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/michaelfoss",
  }
];

export {
  words,
  abilities,
  expCards,
  socialImgs,
  techStackImgs,
  navLinks,
};

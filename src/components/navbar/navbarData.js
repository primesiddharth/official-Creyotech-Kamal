import {
  BriefcaseBusiness,
  Building2,
  ContactRound,
  FileText,
  Heart,
  Hotel,
  Target,
  Users,
  UsersRound,
  Workflow,
} from "lucide-react";

export const serviceSections = [
  // =====================================================
  // 1. DEVELOPMENT
  // =====================================================
  {
    id: "web-development",
    title: "Development Services",
    href: "/services/web-development",
    items: [
      {
        title: "Starter Business Presence",
        href: "/services/web-development#starter-business-presence",
      },
      {
        title: "CMS-Based Scalable Site",
        href: "/services/web-development#cms-scalable-site",
      },
      {
        title: "High-Performance Website",
        href: "/services/web-development#high-performance-website",
      },
      {
        title: "Full-Stack Scalable System",
        href: "/services/web-development#fullstack-scalable-system",
      },

      // Mobile Application Development
      {
        title: "Android App Development",
        href: "/services/web-development#android-app-development",
      },
      {
        title: "iOS App Development",
        href: "/services/web-development#ios-app-development",
      },
      {
        title: "Cross-Platform App Development",
        href: "/services/web-development#cross-platform-app-development",
      },

      // WordPress
      {
        title: "WordPress Development",
        href: "/services/web-development#wordpress-development",
      },
    ],
  },

  // =====================================================
  // 2. DIGITAL MARKETING
  // =====================================================
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    items: [
      {
        title: "Foundation Growth System",
        href: "/services/digital-marketing#foundation-growth-system",
      },
      {
        title: "Growth Visibility System",
        href: "/services/digital-marketing#growth-visibility-system",
      },
      {
        title: "Scale Revenue Acquisition System",
        href: "/services/digital-marketing#scale-revenue-system",
      },

      // Performance Marketing
      {
        title: "Facebook Ads",
        href: "/services/digital-marketing#facebook-ads",
      },
      {
        title: "Instagram Ads",
        href: "/services/digital-marketing#instagram-ads",
      },
      {
        title: "Google Ads",
        href: "/services/digital-marketing#google-ads",
      },
      {
        title: "LinkedIn Ads",
        href: "/services/digital-marketing#linkedin-ads",
      },
      {
        title: "Performance Marketing",
        href: "/services/digital-marketing#performance-marketing",
      },
    ],
  },

  // =====================================================
  // 3. SOCIAL MEDIA MARKETING
  // =====================================================
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    items: [
      {
        title: "Starter Growth Plan",
        href: "/services/social-media-marketing#starter-growth-plan",
      },
      {
        title: "Growth Acceleration Plan",
        href: "/services/social-media-marketing#growth-acceleration-plan",
      },
      {
        title: "Scale & Authority Plan",
        href: "/services/social-media-marketing#scale-authority-plan",
      },
      {
        title: "Facebook Marketing",
        href: "/services/social-media-marketing#facebook-marketing",
      },
      {
        title: "Instagram Marketing",
        href: "/services/social-media-marketing#instagram-marketing",
      },
      {
        title: "LinkedIn Marketing",
        href: "/services/social-media-marketing#linkedin-marketing",
      },
      {
        title: "Social Media Management",
        href: "/services/social-media-marketing#social-media-management",
      },
    ],
  },

  // =====================================================
  // 5. BUSINESS ASSISTANCE
  // =====================================================
  {
    id: "business-assistance",
    title: "Business Assistance",
    href: "/services/business-assistance",
    items: [
      {
        title: "DPIIT / Startup India Registration",
        href: "/services/business-assistance#dpiit-registration",
      },
      {
        title: "Company Registration",
        href: "/services/business-assistance#company-registration",
      },
      {
        title: "Certification Assistance",
        href: "/services/business-assistance#certification",
      },
      {
        title: "Compliance Registration",
        href: "/services/business-assistance#compliance-registration",
      },
      {
        title: "GST Registration",
        href: "/services/business-assistance#gst-registration",
      },
      {
        title: "GST Return Assistance",
        href: "/services/business-assistance#gst-return",
      },
      {
        title: "Loan Processing Assistance",
        href: "/services/business-assistance#loan-processing",
      },
      {
        title: "Project Vetting",
        href: "/services/business-assistance#project-vetting",
      },
    ],
  },

  // =====================================================
  // 4. MISCELLANEOUS SERVICES
  // =====================================================
  {
    id: "miscellaneous-services",
    title: "Miscellaneous Services",
    href: "/services/miscellaneous-services",
    items: [
      {
        title: "Bulk SMS",
        href: "/services/miscellaneous-services#bulk-sms",
      },
      {
        title: "Bulk Email Marketing",
        href: "/services/miscellaneous-services#bulk-email-marketing",
      },
      {
        title: "RCS Messaging",
        href: "/services/miscellaneous-services#rcs-messaging",
      },
      {
        title: "WhatsApp Business API",
        href: "/services/miscellaneous-services#whatsapp-business-api",
      },
      {
        title: "Call API",
        href: "/services/miscellaneous-services#call-api",
      },
      {
        title: "Professional Email Setup",
        href: "/services/miscellaneous-services#professional-email",
      },
      {
        title: "Google Workspace",
        href: "/services/miscellaneous-services#google-workspace",
      },

      // Software / Platforms
      {
        title: "KarobarOne",
        href: "/services/miscellaneous-services#karobarone",
      },
      {
        title: "Creyotech CRM",
        href: "/services/miscellaneous-services#creyotech-crm",
      },
      {
        title: "Hotel Management System",
        href: "/services/miscellaneous-services#hotel-management",
      },
      {
        title: "School Management System",
        href: "/services/miscellaneous-services#school-management",
      },
    ],
  },

  // 5. Web Dev Projects
  {
    id: "web-development-projects",
    title: "Web Development Projects",
    href: "/our-work",
    items: [
      {
        title: "Dr. Emilia Dental Care",
        href: "https://dremiliadentalcare.creyotech.com/",
      },
      {
        title: "Horizon Multicare Hospital",
        href: "https://horizonmulticarehospital.creyotech.com",
      },
      {
        title: "Sterling Ledger Advisors",
        href: "https://sterlingledgeradvisors.creyotech.com",
      },
      {
        title: "ThreadCraft Fashion",
        href: "https://threadcraftfashion.creyotech.com",
      },
      {
        title: "Lumina Jewel House",
        href: "https://luminajewelhouse.creyotech.com",
      },
      {
        title: "Apex Build Construction",
        href: "https://apexbuildconstruction.creyotech.com",
      },
      {
        title: "PrimeVista Real Estate",
        href: "https://primevistarealestate.creyotech.com",
      },
    ],
  },
];

export const products = [
  {
    title: "KarobarOne",
    description: "Business management",
    icon: BriefcaseBusiness,
    href: "/products#karobar-one",
  },
  {
    title: "SankalpFlow",
    description: "Work & project management",
    icon: Workflow,
    href: "/products#sankalp-flow",
  },
  {
    title: "AtithiCore",
    description: "Hospitality management",
    icon: Hotel,
    href: "/products#atithi-core",
  },
  {
    title: "SampattiLink",
    description: "Real estate management",
    icon: Building2,
    href: "/products#sampatti-link",
  },
  {
    title: "KarmiHR",
    description: "HR & workforce management",
    icon: UsersRound,
    href: "/products#karmi-hr",
  },
  {
    title: "SamparkPulse",
    description: "CRM & customer management",
    icon: ContactRound,
    href: "/products#sampark-pulse",
  },
];

export const aboutMenu = {
  company: [
    {
      title: "About Creyotech",
      desc: "Who we are and what we do",
      href: "/about#about-company",
      icon: Building2,
    },
    {
      title: "Our Purpose",
      desc: "What drives us forward",
      href: "/about#purpose",
      icon: Target,
    },
    {
      title: "Our Team",
      desc: "Meet the people behind Creyotech",
      href: "/about#our-team",
      icon: Users,
    },
    {
      title: "Life at Creyotech",
      desc: "Our culture, people and workplace",
      href: "/about#life-at-creyotech",
      icon: Heart,
    },
  ],

  resources: [
    {
      title: "Case Studies",
      desc: "Explore our work and results",
      href: "/case-studies",
      icon: BriefcaseBusiness,
    },
    {
      title: "Whitepapers",
      desc: "Insights, research and expertise",
      href: "/whitepapers",
      icon: FileText,
    },
  ],
};

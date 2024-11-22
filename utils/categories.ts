import {
  IconAlarm,
  IconBuildingStore,
  IconCode,
  IconCoin,
  IconMessages,
  IconMovie,
  IconMusic,
  IconPalette,
  IconPhoto,
  IconSquareRoundedPlus,
  IconUser,
  IconVolume
} from "@tabler/icons-react"

export const categories = [
  {
    link: "/search/productivity",
    label: "productivity",
    icon: IconAlarm,
    rank: 1
  },
  { link: "/search/design", label: "design", icon: IconPalette, rank: 2 },
  {
    link: "/search/development",
    label: "development",
    icon: IconCode,
    rank: 3
  },
  {
    link: "/search/photography",
    label: "photography",
    icon: IconPhoto,
    rank: 4
  },
  { link: "/search/filmaking", label: "filmaking", icon: IconMovie, rank: 5 },
  { link: "/search/audio", label: "audio", icon: IconMusic, rank: 6 },
  {
    link: "/search/marketing",
    label: "marketing",
    icon: IconVolume,
    rank: 7
  },
  {
    link: "/search/business",
    label: "business",
    icon: IconBuildingStore,
    rank: 8
  },
  {
    link: "/search/collaboration",
    label: "collaboration",
    icon: IconMessages,
    rank: 9
  },
  { link: "/search/finance", label: "finance", icon: IconCoin, rank: 10 },
  { link: "/search/personal", label: "personal", icon: IconUser, rank: 11 },
  {
    link: "/search/Other",
    label: "Other",
    icon: IconSquareRoundedPlus,
    rank: 12
  }
]

export const subCategories = {
  development: [
    "no code",
    "website builder",
    "apps builder",
    "apis",
    "Open source",
    "Form builders",
    "Cloud infrastructure",
    "Cloud computing"
  ],
  design: ["design builders", "Interior design", "designtools", "Music"],
  photography: ["photo editors", ""],
  audio: [
    "recorders",
    "editors",
    "production",
    "Speech recognition",
    "Podcasting"
  ],
  filmaking: ["video editors", "video production"],
  marketing: [
    "seo",
    "blogging",
    "email marketing",
    "E-commerce",
    "Lead generation",
    "Marketplaces",
    "Advertising",
    "Branding",
    "Scrapers",
    "A/B testing",
    "Affiliate tracking  "
  ],
  productivity: [
    "knowladge management",
    "note taking",
    "Reading",
    "Task management",
    "Books",
    "todo list",
    "Translation",
    "Journaling",
    "Journalism",
    "Online scheduling"
  ],
  business: [
    "chatbots",
    "customer support",
    "sales",
    "analitycs",
    "feedback tools",
    "shipping and logistics",
    "Data visualization",
    "Freelancers",
    "Careers/jobs",
    "job boards",
    "Recruiting",
    "Storage",
    "Legal"
  ],
  finance: [
    "invoice management",
    "accounting",
    "payments",
    "fintech",
    "Angel investing",
    "Venture capital"
  ],
  extras: [
    "Monitoring",
    "Web hosting",
    "Remote work",
    "Privacy",
    "cms",
    "news"
  ],
  collaboration: [
    "Communities",
    "File sharing",
    "Project management",
    "Messaging",
    "socialmedia",
    "Meeting software"
  ],
  personal: ["Mental health", "Fitness  ", "Tourism", "paranting", "dating"]
}

export const tags = ["ai"]

export const profiles = [
  {
    id: "arjun",
    name: "Arjun Chatterjee",
    age: 29,
    city: "London, UK",
    profession: "Software Architect",
    education: "M.Tech, Jadavpur University",
    family: "Bengali Brahmin, progressive family",
    lifestyle: "Non-vegetarian, non-smoker",
    language: "Bengali, English",
    trust: "ID verified",
    lastActive: "Active today",
    matchScore: 94,
    highlights: ["M.Tech", "Progressive family", "Open to relocate"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSD4UH6xSnzaTZjUNZnJMquUfaz9jgWP-gd-97fTSAHMTIf1Bc-GX-PSwsJy-l1iQ8AAdRcN97qM_vnZq_yt1CO30dkZ1mdJBqaX3O3QeGE8xyxQbuKmac2b-DMP2bAszI3ycJC_bXIrjplI1L5_aC7NS7Qs26gQ0xMIkZiQgdUj1k9nvCBY1JzooLlbVLiENkgsXlSUUyHibJD6aR56Pzb1QGUyI4ssGTqWmZ7VWTdlspdc2qCRpLsKaME47Umtbj_mG5R0WIZ2i7",
    alt: "Sophisticated Bengali man in a warm sunlit library wearing a modern kurta.",
    reasons: ["Same cultural roots", "Career-aligned", "Open to relocation"],
    summary:
      "Values deep conversations, cultural roots, and a globally mobile life. Looking for a grounded partner who enjoys family time and quiet weekends.",
  },
  {
    id: "ishani",
    name: "Ishani Roy",
    age: 26,
    city: "Kolkata, India",
    profession: "Doctor (MBBS)",
    education: "MBBS, Calcutta National Medical College",
    family: "Kayastha, close-knit family",
    lifestyle: "Vegetarian at home, never smokes",
    language: "Bengali, Hindi, English",
    trust: "Profile verified",
    lastActive: "Active 2h ago",
    matchScore: 91,
    highlights: ["MBBS", "Kolkata based", "Never smokes"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHIRPs0UDY0Uqb4Z3LlncbiYKXN0h4dGtJRYGSkOtAkYbxOTWh6BPBcmzusUUwGRfXrmClHXhxpQlD_BIbLBcAH20_l_Jfghh8n438hnDns808VzkwDPJeeerWdW7xBRSddceCltZRPG_Nvny60oTkJWow_H7dM1iNZT76Yvq8It9Jx50eCJot96d6is49T5ozwRRLFobv8pr_FC2xOLEJAMcb0SlF8SLyl0P43eYIdGEcBziRISORNFngL_jHe5OIqoyttT-z3Rq3",
    alt: "Elegant young Bengali woman in a modern saree standing in a botanical garden.",
    reasons: ["Lives nearby", "Healthcare family fit", "Shared food values"],
    summary:
      "Passionate about healthcare and community. Seeking someone emotionally steady, family-oriented, and curious about the world.",
  },
  {
    id: "rahul",
    name: "Rahul Sen",
    age: 31,
    city: "Mumbai, India",
    profession: "Chartered Accountant",
    education: "CA, St. Xavier's College",
    family: "Upper middle class, Kolkata roots",
    lifestyle: "Non-vegetarian, social events",
    language: "Bengali, English, Hindi",
    trust: "Trust score 89%",
    lastActive: "Active yesterday",
    matchScore: 86,
    highlights: ["CA", "Kolkata roots", "Social lifestyle"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeaPPJYpVaM9PlldNNVa0h6Kjm3aILeiPYr-a0GDt1qey_51twSUZtnp5KTekFpIRUvFofpP2t1pI_wv6Fh6OGBTbHSEZQmAOCvjex2b-VImJpgnDcVvnu7jMZPt9xFO9NusN6cRe5TrhrNfVtPSCYo23UCKqWpNq3U4NyQLxu1FukTmqxlfWRCVuOlMsaQbMGwod4IDSecLws-Unw4oUs0QjozJB9aPu0Z27XfrQxSxCmr0Dt7a-74RwCBV5TNBKSKDBnZdv2JC2v",
    alt: "Friendly Bengali man in a smart casual shirt sitting in a modern cafe.",
    reasons: ["Financially stable", "Family-oriented", "Weekend creative life"],
    summary:
      "Balanced between tradition and a modern lifestyle. Enjoys weekend photography, careful planning, and spending time with family.",
  },
  {
    id: "sohini",
    name: "Sohini Bose",
    age: 28,
    city: "Bangalore, India",
    profession: "Marketing Lead",
    education: "MBA, IIM Calcutta",
    family: "Probashi Bengali, liberal family",
    lifestyle: "Yoga, vegetarian preference",
    language: "Bengali, English",
    trust: "Premium verified",
    lastActive: "Active today",
    matchScore: 88,
    highlights: ["MBA", "Probashi Bengali", "Yoga"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9LlUU3fCPzMjAMq65GBo7kXv2WSVFREUZuKpLIIAY8Lq25G9eenDMYSn6E58fVxWgSUw878134WHP4grizDTziLb4JbfoTue8xD3p1jKI8d54QS-bqQNPU4WFrqTgzE0ez8nI3Z-knf0Y3-JacY1yByaXfBwBWO7CBLS0qNepP1YRXfY7WLe97o7DW9YTDz0nL8kKl4ScDle8XHkkU3ZoZTZrrZ5cAvHLbpDA8BKWKJDn4kO_jeYHIxdLKzKsw5-LtyV0fH7uRtP5",
    alt: "Successful Bengali woman executive in an office with sunset skyline views.",
    reasons: ["Similar education", "Creative temperament", "Modern values"],
    summary:
      "Dynamic and goal-oriented, with a quiet affection for classical art and yoga. Looking for someone ambitious but warm.",
  },
] as const;

export const activeFilters = ["Age 24-32", "Bengali", "Graduate+", "Family-oriented"];
export const sortOptions = ["Relevance", "Recently active", "Highest match"];

export type DiscoveryProfile = (typeof profiles)[number];

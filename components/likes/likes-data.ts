export const interestedProfiles = [
  {
    name: "Rahul Banerjee",
    age: 30,
    meta: "Software Engineer - Bangalore",
    location: "Bangalore, Karnataka",
    receivedAt: "2 minutes ago",
    status: "Premium",
    statusStyle: "gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJOHYLlG4AfPmRRt4TcOZ8iEYQkbmM7Iq0lOk62eJ2E5_BzyG6oHhasXFrRagVFJsgr6U3_f2tkqjlFaTERizGjbaAqhFBA3-qRb45rXNuwEhzb8RAVAvuK_Fho7_i6CTasI0EZtMwkLG-A-aIS9CusWsN9cPk0_Ar2YB7aKrC0d0oeKlLtIjGUPy6j398yxPd19gsVrsyEMIq6q1D32tdUYQ-wbsWDE_3xjGHMKAyUfAvc6ZHqxiAs93BVkmtl9zQBFKW7xm6kheX",
    alt: "Rahul Banerjee smiling in a garden setting.",
    preview:
      "I liked the warmth in your profile and noticed we both love Rabindra Sangeet.",
    tags: ["Classical Music", "Photography", "Family Oriented"],
    match: "94% match",
  },
  {
    name: "Arjun Chatterjee",
    age: 29,
    meta: "Software Architect - London",
    location: "London, United Kingdom",
    receivedAt: "1 hour ago",
    status: "Verified",
    statusStyle: "teal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSD4UH6xSnzaTZjUNZnJMquUfaz9jgWP-gd-97fTSAHMTIf1Bc-GX-PSwsJy-l1iQ8AAdRcN97qM_vnZq_yt1CO30dkZ1mdJBqaX3O3QeGE8xyxQbuKmac2b-DMP2bAszI3ycJC_bXIrjplI1L5_aC7NS7Qs26gQ0xMIkZiQgdUj1k9nvCBY1JzooLlbVLiENkgsXlSUUyHibJD6aR56Pzb1QGUyI4ssGTqWmZ7VWTdlspdc2qCRpLsKaME47Umtbj_mG5R0WIZ2i7",
    alt: "Sophisticated Bengali man in a warm sunlit library wearing a modern kurta.",
    preview:
      "Your note about cultural roots and global perspective felt very familiar to me.",
    tags: ["Bengali Literature", "Travel", "Modern Values"],
    match: "91% match",
  },
  {
    name: "Debashis Roy",
    age: 32,
    meta: "Engineering Manager - USA",
    location: "Seattle, Washington",
    receivedAt: "Yesterday",
    status: "Trust 95%",
    statusStyle: "teal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwqDfhNXsKOm5GvW7uQASvxKRrxABDCtj2GpBLMIGaVnM_1Fx9rig46vpz1e1vR0GDKGjb2jB9qP5a8eOprH9bDVctAJYYqge6OnEPGwPLt1qhjgpF3b7k1JHk_kl5BeCU4Es-N_cXv5re1PS1bhTmsh5Wr_EAT4VimTYs6TfEDzGVpsDvOKnsj7SwBOur2SQgIja-eoCRRtlAbP_MspskGKj4z_ob5WLcMzzne6E0rj26jCKn4w4FEPO9xekNMuo2cmqEn7YsJjW2",
    alt: "Debashis Roy in a smart outdoor portrait.",
    preview:
      "I appreciate your balance of ambition, family values, and a quiet life outside work.",
    tags: ["Technology", "Cooking", "Weekend Travel"],
    match: "88% match",
  },
] as const;

export const summaryStats = [
  ["New interests", "12"],
  ["Accepted this week", "4"],
  ["Profile views", "86"],
] as const;

export type InterestedProfile = (typeof interestedProfiles)[number];

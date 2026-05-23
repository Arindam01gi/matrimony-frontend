import { Eye, Heart, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export const recentNotifications = [
  {
    name: "Rahul Banerjee",
    title: "sent you an interest.",
    meta: "2 minutes ago - Software Engineer, Bangalore",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJOHYLlG4AfPmRRt4TcOZ8iEYQkbmM7Iq0lOk62eJ2E5_BzyG6oHhasXFrRagVFJsgr6U3_f2tkqjlFaTERizGjbaAqhFBA3-qRb45rXNuwEhzb8RAVAvuK_Fho7_i6CTasI0EZtMwkLG-A-aIS9CusWsN9cPk0_Ar2YB7aKrC0d0oeKlLtIjGUPy6j398yxPd19gsVrsyEMIq6q1D32tdUYQ-wbsWDE_3xjGHMKAyUfAvc6ZHqxiAs93BVkmtl9zQBFKW7xm6kheX",
    alt: "Rahul Banerjee smiling in a garden setting.",
    icon: Heart,
    iconClass: "bg-primary text-white",
    actions: ["Accept Interest", "View Profile"],
    tags: ["Classical Music", "Photography"],
  },
  {
    name: "Priyanka Sen",
    title: "sent you a message.",
    meta: "15 minutes ago",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFh1YJBnhxsk9IStmuW5vQHx-DO6y7TlF90koCR9B80SLnSYs2r84WJods6BUv5DpVUxq31mr3aYMdZtnU2KLHIMZL_XO_ijTDVh_cWfYQ2FizdMvWs9drPzFcLfUFJtuNhk3wXlUHRX5NEzkxnxxEsoZChFNyVYy-TgHajCF5_LkOMEjzxFiVNqwKpY9h6mUpymzg2L_1i8dLdW3bLMxC2IS6ftCY00WdG-sKKWx0lpre90pUyH-qHukXqMd8xGQTTHciZZtJNgFB",
    alt: "Priyanka Sen in a refined saree portrait.",
    icon: MessageCircle,
    iconClass: "bg-secondary-container text-on-secondary-container",
    actions: ["Reply"],
    preview:
      "I really liked your profile. I see we both share an interest in Rabindra Sangeet...",
    tags: [],
  },
] as const;

export const olderNotifications = [
  {
    icon: Eye,
    title: "12 new people",
    text: "viewed your profile yesterday.",
    meta: "Yesterday, 10:30 PM",
    cta: "View stats",
    iconClass: "text-primary group-hover:bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Trust Score",
    text: "has increased to 95%.",
    meta: "2 days ago",
    badge: "Premium Perk",
    iconClass: "text-secondary-foreground group-hover:bg-secondary-container/20",
  },
  {
    icon: Sparkles,
    title: "New matches",
    text: "found based on your Profession filter.",
    meta: "2 days ago",
    cta: "Discover now",
    iconClass: "text-[#006f6e] group-hover:bg-[#006f6e]/10",
  },
] as const;

export type RecentNotification = (typeof recentNotifications)[number];
export type OlderNotification = (typeof olderNotifications)[number];

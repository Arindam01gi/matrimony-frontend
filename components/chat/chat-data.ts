import {
  Archive,
  Clock3,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";

export const categories = [
  { label: "All chats", count: 18, icon: MessageCircle, active: true },
  { label: "Interests", count: 4, icon: Heart, active: false },
  { label: "Matches", count: 9, icon: Users, active: false },
  { label: "Unread", count: 3, icon: Clock3, active: false },
  { label: "Archived", count: 2, icon: Archive, active: false },
] as const;

export const conversations = [
  {
    name: "Rahul Chatterjee",
    meta: "Senior Software Architect - Bengaluru",
    preview: "Thank you for replying. I also grew up listening to Rabindra Sangeet...",
    time: "2m",
    unread: 2,
    label: "Interest accepted",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKEE1slKnX_kNbjDo9oii42uM9fqO7n5na5SC57lQyAc7DJZWfl_G5YA9Vw4An8_GhwP4qnYHA3RsUjjmv3F7b5b_HfIVAYBXeIjdnT_1R71zs5kVD6RwR2E9S6Y7QLd7hPIB3U6ydZPq_T4SMeAj-luz0vuaDyZw8d0zAla4ZFx5BuME2BpsJ_wtE5_d2tCT8sbw46mQYPEqA__7-baMQFd-ANk30TgbKdcgpSt5r8uQPANU2EKVxdKKTPtxduN2XD_o4sxc8kQhc",
    online: true,
    active: true,
  },
  {
    name: "Siddharth Roy",
    meta: "Software Engineer - Bengaluru",
    preview: "Accepted your invitation. Your family values felt very aligned.",
    time: "1h",
    unread: 0,
    label: "New match",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUJccIJh5WSDXm023kq6aY7TM_CCIPxDR8eK1oRj0IQghgRMldb86ADCrWUF7ulMQCdIvSDWCIE3rs0hXX2PJzIYixpkTCVFR7cmbXBhMQWlbgz2bWI0FspvO4brJqbPxd0lao4kxnFQBXXkS4NV6LF9-fcCzbImMtOxVDxdIrUDD_WAYwz29lYydm1TzhHWIOeRJ9QhOOygykNiuOKJUjhgf8bbpuA2Rd1tixlRypfhs2ysaVzWBbtptCaKTL_cdhA9M6_KBXxMOm",
    online: true,
    active: false,
  },
  {
    name: "Amitav Ghosh",
    meta: "Consultant - Kolkata",
    preview: "I noticed we both enjoy old Bengali literature and quiet weekends.",
    time: "Yesterday",
    unread: 0,
    label: "Compatibility",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeaPPJYpVaM9PlldNNVa0h6Kjm3aILeiPYr-a0GDt1qey_51twSUZtnp5KTekFpIRUvFofpP2t1pI_wv6Fh6OGBTbHSEZQmAOCvjex2b-VImJpgnDcVvnu7jMZPtPSCYo23UCKqWpNq3U4NyQLxu1FukTmqxlfWRCVuOlMsaQbMGwod4IDSecLws-Unw4oUs0QjozJB9aPu0Z27XfrQxSxCmr0Dt7a-74RwCBV5TNBKSKDBnZdv2JC2v",
    online: false,
    active: false,
  },
  {
    name: "Priyanka Banerjee",
    meta: "Product Manager - London",
    preview: "Would love to know more about your work and your Durga Puja traditions.",
    time: "2d",
    unread: 1,
    label: "Unread",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFh1YJBnhxsk9IStmuW5vQHx-DO6y7TlF90koCR9B80SLnSYs2r84WJods6BUv5DpVUxq31mr3aYMdZtnU2KLHIMZL_XO_ijTDVh_cWfYQ2FizdMvWs9drPzFcLfUFJtuNhk3wXlUHRX5NEzkxnxxEsoZChFNyVYy-TgHajCF5_LkOMEjzxFiVNqwKpY9h6mUpymzg2L_1i8dLdW3bLMxC2IS6ftCY00WdG-sKKWx0lpre90pUyH-qHukXqMd8xGQTTHciZZtJNgFB",
    online: false,
    active: false,
  },
] as const;

export const activeMember = {
  name: "Rahul Chatterjee",
  age: 31,
  role: "Senior Software Architect",
  location: "Bengaluru, Karnataka",
  match: "92%",
  trust: "Verified",
  response: "Usually replies in 15 min",
  image: conversations[0].image,
  interests: ["Rabindra Sangeet", "Travel", "Classical Music"],
} as const;

export const messages = [
  {
    body: "Namaste! I came across your profile and was impressed by your career journey and your love for classical music. I would love to connect and learn more about your interests.",
    time: "10:46 AM",
    mine: false,
  },
  {
    body: "Hello Rahul! Thank you for the interest. It is rare to find someone who shares a passion for classical music these days. I would be happy to chat.",
    time: "11:02 AM",
    mine: true,
    status: "Read",
  },
  {
    body: "That is wonderful to hear. My Sunday mornings usually start with old records and tea. Do you still attend live concerts in Kolkata?",
    time: "11:08 AM",
    mine: false,
  },
] as const;

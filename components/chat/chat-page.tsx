import Image from "next/image";
import Link from "next/link";
import {
  Archive,
  BadgeCheck,
  Clock3,
  Heart,
  LockKeyhole,
  MapPin,
  MessageCircle,
  MoreVertical,
  Paperclip,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Smile,
  Star,
  Users,
  Video,
} from "lucide-react";

import { PROFILE_DETAILS_PATH } from "@/lib/routes";

const categories = [
  { label: "All chats", count: 18, icon: MessageCircle, active: true },
  { label: "Interests", count: 4, icon: Heart, active: false },
  { label: "Matches", count: 9, icon: Users, active: false },
  { label: "Unread", count: 3, icon: Clock3, active: false },
  { label: "Archived", count: 2, icon: Archive, active: false },
] as const;

const conversations = [
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeaPPJYpVaM9PlldNNVa0h6Kjm3aILeiPYr-a0GDt1qey_51twSUZtnp5KTekFpIRUvFofpP2t1pI_wv6Fh6OGBTbHSEZQmAOCvjex2b-VImJpgnDcVvnu7jMZPt9xFO9NusN6cRe5TrhrNfVtPSCYo23UCKqWpNq3U4NyQLxu1FukTmqxlfWRCVuOlMsaQbMGwod4IDSecLws-Unw4oUs0QjozJB9aPu0Z27XfrQxSxCmr0Dt7a-74RwCBV5TNBKSKDBnZdv2JC2v",
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

const activeMember = {
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

const messages = [
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

export function ChatPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pt-24 pb-28 md:px-8 lg:pb-16">
        <section className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="type-caption mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1 font-semibold text-primary">
              <MessageCircle className="size-4" />
              <span>Messages</span>
            </div>
            <h1 className="type-app-title">
              Chat
            </h1>
          </div>
          <div className="type-label flex w-fit items-center gap-2 rounded-lg border border-outline-variant/20 bg-white px-4 py-2.5 text-on-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <ShieldCheck className="size-5 text-primary" />
            <span>Mutual interest required</span>
          </div>
        </section>

        <section className="grid min-h-[720px] min-w-0 overflow-hidden rounded-xl border border-outline-variant/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] lg:grid-cols-[236px_minmax(320px,370px)_minmax(0,1fr)]">
          <ConnectionRail />
          <ConversationList />
          <ActiveThread />
        </section>
      </main>
    </div>
  );
}

function ConnectionRail() {
  return (
    <aside className="min-w-0 border-b border-outline-variant/20 bg-[#fffdfd] p-3 lg:flex lg:flex-col lg:border-r lg:border-b-0 lg:p-0">
      <div className="hidden border-b border-outline-variant/10 px-5 py-5 lg:block">
        <p className="type-eyebrow text-primary">
          Inbox
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-surface-container-low px-3 py-2">
            <p className="type-stat text-primary">
              18
            </p>
            <p className="type-micro font-normal text-on-surface-variant">
              Active
            </p>
          </div>
          <div className="rounded-lg bg-surface-container-low px-3 py-2">
            <p className="type-stat text-primary">
              3
            </p>
            <p className="type-micro font-normal text-on-surface-variant">
              Unread
            </p>
          </div>
        </div>
      </div>

      <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible lg:p-3">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className={[
                "type-button group relative flex min-h-11 shrink-0 cursor-pointer items-center gap-3 rounded-lg px-3 transition-all active:scale-95 lg:w-full",
                item.active
                  ? "bg-surface-container-low text-primary"
                  : "bg-white text-on-surface-variant hover:bg-surface-container-low lg:bg-transparent",
              ].join(" ")}
            >
              {item.active ? (
                <span className="absolute top-2 bottom-2 left-0 w-1 rounded-r-full bg-primary" />
              ) : null}
              <span
                className={[
                  "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                  item.active
                    ? "bg-white text-primary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant group-hover:text-primary",
                ].join(" ")}
              >
                <Icon className="size-4.5" />
              </span>
              <span className="min-w-0 flex-1 truncate text-left">
                {item.label}
              </span>
              <span
                className={[
                  "type-caption rounded-full px-2 py-0.5 font-bold",
                  item.active
                    ? "bg-primary text-white"
                    : "bg-surface-container-high text-on-surface-variant",
                ].join(" ")}
              >
                {item.count}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mx-3 mb-3 mt-auto hidden rounded-lg border border-outline-variant/20 bg-surface-container-low p-4 lg:block">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-white text-primary">
            <LockKeyhole className="size-4.5" />
          </span>
          <p className="type-label text-on-surface">
            Safe chat
          </p>
        </div>
        <button
          type="button"
          className="type-caption w-full cursor-pointer rounded-lg bg-white px-3 py-2 font-bold text-primary transition-colors hover:bg-surface"
        >
          Review settings
        </button>
      </div>
    </aside>
  );
}

function ConversationList() {
  return (
    <aside className="min-w-0 border-b border-outline-variant/20 bg-white lg:border-r lg:border-b-0">
      <div className="border-b border-outline-variant/10 p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="type-label">Messages</h2>
            <p className="type-caption text-on-surface-variant">
              3 unread conversations
            </p>
          </div>
          <span className="type-caption rounded-full bg-surface-container-low px-3 py-1 font-bold text-primary">
            Live
          </span>
        </div>
        <label className="relative block">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-on-surface-variant" />
          <input
            className="type-body-sm w-full rounded-lg border-0 bg-surface-container-low py-3 pr-4 pl-10 text-on-surface outline-none transition-shadow placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary/30"
            placeholder="Search by name or interest..."
            type="search"
          />
        </label>
      </div>

      <div className="grid max-h-[390px] overflow-y-auto md:max-h-none">
        {conversations.map((conversation) => (
          <button
            key={conversation.name}
            type="button"
            className={[
              "grid min-w-0 cursor-pointer grid-cols-[52px_minmax(0,1fr)] gap-3 border-b border-outline-variant/10 p-4 text-left transition-colors hover:bg-surface-container-low",
              conversation.active ? "border-l-4 border-l-primary bg-primary/5" : "",
            ].join(" ")}
          >
            <span className="relative size-13">
              <Image
                fill
                sizes="52px"
                src={conversation.image}
                alt={`${conversation.name} profile photo`}
                className="rounded-full object-cover"
              />
              {conversation.online ? (
                <span className="absolute right-0 bottom-0 size-3.5 rounded-full border-2 border-white bg-[#16a34a]" />
              ) : null}
            </span>
            <span className="min-w-0">
              <span className="mb-1 flex items-start justify-between gap-3">
                <span className="min-w-0">
                  <span className="type-label block truncate">
                    {conversation.name}
                  </span>
                  <span className="type-caption block truncate text-on-surface-variant">
                    {conversation.meta}
                  </span>
                </span>
                <span className="type-caption shrink-0 font-semibold text-on-surface-variant">
                  {conversation.time}
                </span>
              </span>
              <span className="mb-2 flex items-center justify-between gap-2">
                <span className="type-caption truncate font-bold text-primary">
                  {conversation.label}
                </span>
                {conversation.unread > 0 ? (
                  <span className="type-caption rounded-full bg-primary px-2 py-0.5 font-bold text-white">
                    {conversation.unread}
                  </span>
                ) : null}
              </span>
              <span className="type-caption line-clamp-2 text-on-surface-variant">
                {conversation.preview}
              </span>
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}

function ActiveThread() {
  return (
    <section className="flex min-h-[720px] min-w-0 flex-col bg-[#fffafa]">
      <header className="border-b border-outline-variant/10 bg-white px-4 py-4 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative size-12 shrink-0">
              <Image
                fill
                priority
                sizes="48px"
                src={activeMember.image}
                alt={`${activeMember.name} profile photo`}
                className="rounded-full object-cover"
              />
              <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-white bg-[#16a34a]" />
            </div>
            <div className="min-w-0">
              <h2 className="type-profile-name truncate">
                {activeMember.name}
              </h2>
              <p className="type-caption truncate font-semibold text-on-surface-variant">
                {activeMember.age} - {activeMember.role}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 text-on-surface-variant">
            <IconButton label="Start voice call" icon={<Phone className="size-5" />} />
            <IconButton label="Start video call" icon={<Video className="size-5" />} />
            <IconButton label="More conversation options" icon={<MoreVertical className="size-5" />} />
          </div>
        </div>

        <div className="type-caption mt-4 flex flex-wrap items-center gap-2 text-on-surface-variant">
          <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-low px-3 py-1 font-semibold">
            <BadgeCheck className="size-3.5 text-primary" />
            {activeMember.trust}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-low px-3 py-1">
            <MapPin className="size-3.5" />
            {activeMember.location}
          </span>
          <span className="rounded-full bg-surface-container-low px-3 py-1">
            {activeMember.response}
          </span>
          <Link
            href={PROFILE_DETAILS_PATH}
            className="rounded-full px-2 py-1 font-semibold text-primary hover:bg-surface-container-low"
          >
            View profile
          </Link>
        </div>
      </header>

      <div className="flex-1 space-y-6 overflow-y-auto px-4 py-6 md:px-8">
        <div className="flex justify-center">
          <span className="type-caption rounded-full bg-surface-container-high px-4 py-1.5 font-bold text-on-surface-variant">
            Today
          </span>
        </div>

        <CompatibilityStrip />

        <div className="space-y-5">
          {messages.map((message) => (
            <MessageBubble key={message.time} message={message} />
          ))}
        </div>
      </div>

      <footer className="border-t border-outline-variant/10 bg-white px-4 py-4 md:px-6">
        <div className="flex items-center gap-2 rounded-lg border border-outline-variant/20 bg-surface px-3 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <IconButton label="Attach a file" icon={<Paperclip className="size-5" />} />
          <input
            className="type-body min-w-0 flex-1 border-0 bg-transparent px-2 outline-none placeholder:text-on-surface-variant focus:ring-0"
            placeholder="Write a message..."
            type="text"
          />
          <IconButton label="Add emoji" icon={<Smile className="size-5" />} />
          <button
            type="button"
            className="type-button inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-lg bg-primary px-4 py-3 text-white transition-colors hover:bg-primary-container active:scale-95"
          >
            <span>Send</span>
            <Send className="size-4" />
          </button>
        </div>
        <div className="type-caption mt-3 flex flex-wrap justify-center gap-4 text-on-surface-variant">
          <button type="button" className="cursor-pointer hover:text-primary">
            Safety tips
          </button>
          <button type="button" className="cursor-pointer hover:text-primary">
            Report profile
          </button>
        </div>
      </footer>
    </section>
  );
}

function CompatibilityStrip() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-3 rounded-lg border border-outline-variant/20 bg-white px-4 py-3 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
          <Star className="size-5 fill-current" />
        </div>
        <div className="min-w-0">
          <h3 className="type-label text-primary">
            {activeMember.match} compatibility
          </h3>
          <p className="type-caption truncate text-on-surface-variant">
            Shared interests: {activeMember.interests.join(", ")}
          </p>
        </div>
      </div>
      <span className="type-caption w-fit rounded-full bg-surface-container-low px-3 py-1 font-semibold text-on-surface-variant">
        Mutual interest
      </span>
    </section>
  );
}

function MessageBubble({
  message,
}: {
  message: (typeof messages)[number];
}) {
  return (
    <div className={message.mine ? "flex justify-end" : "flex justify-start"}>
      <div
        className={[
          "max-w-[min(560px,88%)] rounded-xl px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
          message.mine
            ? "bg-primary text-white"
            : "border border-outline-variant/10 bg-white text-on-surface",
        ].join(" ")}
      >
        <p className="type-body">{message.body}</p>
        <p
          className={[
            "type-caption mt-3 text-right",
            message.mine ? "text-white/80" : "text-on-surface-variant",
          ].join(" ")}
        >
          {message.time}
          {"status" in message && message.status ? ` - ${message.status}` : ""}
        </p>
      </div>
    </div>
  );
}

function IconButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary active:scale-95"
    >
      {icon}
    </button>
  );
}

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
  { label: "All", detail: "Every active chat", count: 18, icon: MessageCircle, active: true },
  { label: "Interests", detail: "Accepted interests", count: 4, icon: Heart, active: false },
  { label: "Matches", detail: "Mutual matches", count: 9, icon: Users, active: false },
  { label: "Unread", detail: "Needs reply", count: 3, icon: Clock3, active: false },
  { label: "Archived", detail: "Quiet threads", count: 2, icon: Archive, active: false },
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
      <main className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 pt-24 pb-28 md:px-8 lg:pb-16">
        <section className="mb-5 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1 text-xs leading-4 font-semibold text-primary">
              <MessageCircle className="size-4" />
              <span>Thoughtful conversations</span>
            </div>
            <h1 className="font-heading text-[32px] leading-10 font-semibold">
              Chat
            </h1>
            <p className="mt-2 max-w-2xl text-base leading-6 text-on-surface-variant">
              A focused place to continue accepted interests and mutual matches,
              with just enough context to keep every conversation meaningful.
            </p>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-lg border border-outline-variant/20 bg-white px-4 py-2.5 text-sm leading-5 text-on-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <ShieldCheck className="size-5 text-primary" />
            <span>Mutual interest required</span>
          </div>
        </section>

        <section className="grid min-h-[720px] overflow-hidden rounded-xl border border-outline-variant/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] lg:grid-cols-[220px_minmax(310px,360px)_minmax(0,1fr)]">
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
    <aside className="border-b border-outline-variant/20 bg-surface-container-low/45 p-3 lg:border-r lg:border-b-0 lg:p-4">
      <div className="hidden px-2 pt-1 lg:block">
        <h2 className="font-heading text-2xl leading-8 font-semibold">Connect</h2>
        <p className="mt-1 text-xs leading-4 text-on-surface-variant">
          Manage messages
        </p>
      </div>

      <nav className="flex gap-2 overflow-x-auto lg:mt-6 lg:flex-col lg:overflow-visible">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className={[
                "flex min-h-12 shrink-0 cursor-pointer items-center gap-3 rounded-lg px-3 text-sm leading-5 font-semibold transition-all active:scale-95 lg:w-full",
                item.active
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-on-surface-variant hover:bg-surface-container-high lg:bg-transparent",
              ].join(" ")}
            >
              <Icon className="size-5 shrink-0" />
              <span className="min-w-0 text-left">
                <span className="block truncate">{item.label}</span>
                <span
                  className={[
                    "hidden truncate text-[11px] leading-4 font-medium lg:block",
                    item.active ? "text-white/75" : "text-on-surface-variant/70",
                  ].join(" ")}
                >
                  {item.detail}
                </span>
              </span>
              <span
                className={[
                  "ml-auto rounded-full px-2 py-0.5 text-[10px] leading-4",
                  item.active
                    ? "bg-white/18 text-white"
                    : "bg-surface-container-high text-on-surface-variant",
                ].join(" ")}
              >
                {item.count}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-5 hidden rounded-lg border border-outline-variant/20 bg-white p-4 lg:block">
        <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
          <LockKeyhole className="size-5" />
        </div>
        <p className="text-sm leading-5 font-bold text-primary">
          Privacy controls
        </p>
        <p className="mt-1 text-xs leading-4 text-on-surface-variant">
          Keep conversations comfortable with safety tools close by.
        </p>
      </div>
    </aside>
  );
}

function ConversationList() {
  return (
    <aside className="border-b border-outline-variant/20 bg-white lg:border-r lg:border-b-0">
      <div className="border-b border-outline-variant/10 p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-sm leading-5 font-bold">Messages</h2>
            <p className="text-xs leading-4 text-on-surface-variant">
              3 unread conversations
            </p>
          </div>
          <span className="rounded-full bg-surface-container-low px-3 py-1 text-xs leading-4 font-bold text-primary">
            Live
          </span>
        </div>
        <label className="relative block">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-on-surface-variant" />
          <input
            className="w-full rounded-lg border-0 bg-surface-container-low py-3 pr-4 pl-10 text-sm leading-5 text-on-surface outline-none transition-shadow placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary/30"
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
              "grid cursor-pointer grid-cols-[52px_minmax(0,1fr)] gap-3 border-b border-outline-variant/10 p-4 text-left transition-colors hover:bg-surface-container-low",
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
                  <span className="block truncate text-sm leading-5 font-bold">
                    {conversation.name}
                  </span>
                  <span className="block truncate text-xs leading-4 text-on-surface-variant">
                    {conversation.meta}
                  </span>
                </span>
                <span className="shrink-0 text-[10px] leading-4 font-semibold text-on-surface-variant">
                  {conversation.time}
                </span>
              </span>
              <span className="mb-2 flex items-center justify-between gap-2">
                <span className="truncate text-xs leading-4 font-bold text-primary">
                  {conversation.label}
                </span>
                {conversation.unread > 0 ? (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] leading-4 font-bold text-white">
                    {conversation.unread}
                  </span>
                ) : null}
              </span>
              <span className="line-clamp-2 text-xs leading-4 text-on-surface-variant">
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
              <h2 className="truncate font-heading text-2xl leading-8 font-semibold">
                {activeMember.name}
              </h2>
              <p className="truncate text-xs leading-4 font-semibold text-on-surface-variant">
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

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs leading-4 text-on-surface-variant">
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
          <span className="rounded-full bg-surface-container-high px-4 py-1.5 text-xs leading-4 font-bold text-on-surface-variant">
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
            className="min-w-0 flex-1 border-0 bg-transparent px-2 text-base leading-6 outline-none placeholder:text-on-surface-variant focus:ring-0"
            placeholder="Write a message..."
            type="text"
          />
          <IconButton label="Add emoji" icon={<Smile className="size-5" />} />
          <button
            type="button"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm leading-5 font-semibold text-white transition-colors hover:bg-primary-container active:scale-95"
          >
            <span>Send</span>
            <Send className="size-4" />
          </button>
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs leading-4 text-on-surface-variant">
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
          <h3 className="text-sm leading-5 font-bold text-primary">
            {activeMember.match} compatibility
          </h3>
          <p className="truncate text-xs leading-4 text-on-surface-variant">
            Shared interests: {activeMember.interests.join(", ")}
          </p>
        </div>
      </div>
      <span className="w-fit rounded-full bg-surface-container-low px-3 py-1 text-xs leading-4 font-semibold text-on-surface-variant">
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
        <p className="text-base leading-7">{message.body}</p>
        <p
          className={[
            "mt-3 text-right text-xs leading-4",
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

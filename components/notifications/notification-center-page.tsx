import Image from "next/image";
import Link from "next/link";
import {
  BellRing,
  CheckCheck,
  Eye,
  Heart,
  MessageCircle,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { DISCOVERY_PATH, PROFILE_DETAILS_PATH } from "@/lib/routes";

const recentNotifications = [
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

const olderNotifications = [
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

export function NotificationCenterPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto min-h-screen max-w-[1200px] px-5 pt-24 pb-28 md:px-10 lg:pb-16">
        <section className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1 text-xs leading-4 font-semibold text-primary">
              <BellRing className="size-4" />
              <span>Activity Center</span>
            </div>
            <h1 className="font-heading text-[32px] leading-10 font-semibold text-on-surface">
              Notifications
            </h1>
            <p className="mt-2 max-w-2xl text-base leading-6 text-on-surface-variant">
              Keep track of interests, messages, profile views, and account updates
              tailored for your matrimony journey.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-outline-variant/30 bg-white px-4 py-2 text-sm leading-5 font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high active:scale-95"
            >
              <CheckCheck className="size-4" />
              <span>Mark all as read</span>
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-outline-variant/30 bg-white px-4 py-2 text-sm leading-5 font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high active:scale-95"
            >
              <Settings className="size-4" />
              <span>Preferences</span>
            </button>
          </div>
        </section>

        <section className="mb-8">
          <SectionTitle active>Recent Activity</SectionTitle>
          <div className="space-y-3">
            {recentNotifications.map((notification) => (
              <RecentNotificationCard
                key={notification.name}
                notification={notification}
              />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Older Activity</SectionTitle>
          <div className="space-y-2">
            {olderNotifications.map((notification) => (
              <OlderNotificationRow
                key={`${notification.title}-${notification.meta}`}
                notification={notification}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="cursor-pointer text-sm leading-5 font-semibold text-on-surface-variant transition-colors hover:text-primary"
            >
              View more activity
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({
  active = false,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={[
        "mb-4 flex items-center gap-2 text-sm leading-5 font-semibold tracking-wider uppercase",
        active ? "text-primary" : "text-on-surface-variant",
      ].join(" ")}
    >
      {active ? <span className="size-2 rounded-full bg-primary" /> : null}
      {children}
    </h2>
  );
}

function RecentNotificationCard({
  notification,
}: {
  notification: (typeof recentNotifications)[number];
}) {
  const Icon = notification.icon;

  return (
    <article className="group rounded-xl border border-transparent bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="relative size-16 shrink-0">
          <Image
            fill
            sizes="64px"
            src={notification.image}
            alt={notification.alt}
            className="rounded-full border-2 border-primary-container/20 object-cover"
          />
          <div
            className={[
              "absolute -right-1 -bottom-1 rounded-full border-2 border-white p-1",
              notification.iconClass,
            ].join(" ")}
          >
            <Icon className="size-3.5 fill-current" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
            <div className="min-w-0">
              <p className="text-base leading-6 text-on-surface">
                <span className="font-bold">{notification.name}</span>{" "}
                {notification.title}
              </p>
              {"preview" in notification && notification.preview ? (
                <p className="mt-1 line-clamp-1 text-base leading-6 text-on-surface-variant italic">
                  &quot;{notification.preview}&quot;
                </p>
              ) : null}
              <p className="mt-1 text-xs leading-4 font-medium text-on-surface-variant">
                {notification.meta}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {notification.actions.map((action, index) =>
                action === "View Profile" ? (
                  <Link
                    key={action}
                    href={PROFILE_DETAILS_PATH}
                    className="inline-flex rounded-lg bg-surface-container-high px-4 py-2 text-sm leading-5 font-semibold text-on-surface-variant transition-colors hover:bg-surface-variant active:scale-95"
                  >
                    {action}
                  </Link>
                ) : (
                  <button
                    key={action}
                    type="button"
                    className={[
                      "cursor-pointer rounded-lg px-4 py-2 text-sm leading-5 font-semibold transition-all active:scale-95",
                      index === 0
                        ? "bg-primary-container text-on-primary-container hover:bg-primary"
                        : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant",
                    ].join(" ")}
                  >
                    {action}
                  </button>
                ),
              )}
            </div>
          </div>

          {notification.tags.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {notification.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-outline-variant/20 bg-surface-container-low px-3 py-1 text-xs leading-4 text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function OlderNotificationRow({
  notification,
}: {
  notification: (typeof olderNotifications)[number];
}) {
  const Icon = notification.icon;

  return (
    <article className="group flex flex-col gap-3 rounded-xl border border-outline-variant/10 bg-white/60 p-4 transition-colors hover:bg-surface-container-low sm:flex-row sm:items-center">
      <div
        className={[
          "flex size-12 shrink-0 items-center justify-center rounded-full bg-surface-container-high transition-colors",
          notification.iconClass,
        ].join(" ")}
      >
        <Icon className="size-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-base leading-6 text-on-surface">
          <span className="font-bold">{notification.title}</span>{" "}
          {notification.text}
        </p>
        <p className="text-xs leading-4 font-medium text-on-surface-variant">
          {notification.meta}
        </p>
      </div>

      {"badge" in notification && notification.badge ? (
        <span className="self-start rounded-full bg-secondary-container/20 px-3 py-1 text-xs leading-4 font-bold text-secondary-foreground sm:self-auto">
          {notification.badge}
        </span>
      ) : null}

      {"cta" in notification && notification.cta ? (
        <Link
          href={notification.cta === "Discover now" ? DISCOVERY_PATH : PROFILE_DETAILS_PATH}
          className="self-start text-sm leading-5 font-semibold text-primary hover:underline sm:self-auto"
        >
          {notification.cta}
        </Link>
      ) : null}
    </article>
  );
}

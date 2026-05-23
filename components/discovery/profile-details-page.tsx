"use client";

import Image from "next/image";
import { useState } from "react";

import {
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Heart,
  Languages,
  MapPin,
  MessageCircle,
  Music2,
  PersonStanding,
  Search,
  Share2,
  Sparkles,
  Utensils,
  WineOff,
} from "lucide-react";

const gallery = [
  {
    src: "/images/landing/stories/ananya-rahul.jpg",
    alt: "Ananya Das in an elegant Bengali celebration portrait.",
  },
  {
    src: "/images/landing/stories/priyanka-debashish.jpg",
    alt: "Lifestyle portrait in a lush garden setting.",
  },
  {
    src: "/images/auth/login-heritage.jpg",
    alt: "Close portrait in a warm heritage courtyard.",
  },
] as const;

const interests = [
  "Classical Music",
  "Photography",
  "Travel Enthusiast",
  "Home Cooking",
];

const familyDetails = [
  ["Father", "Retired Civil Engineer"],
  ["Mother", "Homemaker"],
  ["Siblings", "1 Younger Brother"],
  ["Status", "Upper Middle Class"],
];

const lifestyle = [
  {
    icon: Utensils,
    label: "Diet",
    value: "Non-Vegetarian",
  },
  {
    icon: WineOff,
    label: "Drinking/Smoking",
    value: "Never",
  },
  {
    icon: Languages,
    label: "Mother Tongue",
    value: "Bengali",
  },
];

export function ProfileDetailsPage() {
  const [activeImage, setActiveImage] = useState<(typeof gallery)[number]>(
    gallery[0],
  );

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <main className="mx-auto max-w-[1200px] px-5 pt-24 pb-36 md:px-10">
        <div className="grid grid-cols-12 items-start gap-8">
          <aside className="col-span-12 space-y-4 lg:sticky lg:top-24 lg:col-span-5">
            <section className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-sm">
              <Image
                priority
                fill
                sizes="(min-width: 1024px) 460px, calc(100vw - 40px)"
                src={activeImage.src}
                alt={activeImage.alt}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-8 text-white">
                <div className="mb-2 flex items-center gap-2">
                  <span className="type-eyebrow rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container">
                    Premium Member
                  </span>
                  <BadgeCheck className="size-4 fill-white text-white" />
                </div>
                <h1 className="type-profile-name">
                  Ananya Das, 27
                </h1>
                <p className="type-body mt-1 flex items-center gap-1 text-white/90">
                  <MapPin className="size-4" />
                  Kolkata, West Bengal
                </p>
              </div>
            </section>

            <div className="grid grid-cols-4 gap-3">
              {gallery.map((image) => {
                const isActive = image.src === activeImage.src;

                return (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Show ${image.alt}`}
                    onClick={() => setActiveImage(image)}
                    className={[
                      "relative aspect-square cursor-pointer overflow-hidden rounded-lg border-2 transition-all",
                      isActive
                        ? "border-primary-container"
                        : "border-transparent hover:border-outline-variant",
                    ].join(" ")}
                  >
                    <Image
                      fill
                      sizes="112px"
                      src={image.src}
                      alt=""
                      className="object-cover"
                    />
                  </button>
                );
              })}
              <button
                type="button"
                className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg bg-surface-container-high text-primary transition-colors hover:bg-surface-container-highest"
              >
                <Camera className="mb-1 size-5" />
                <span className="type-caption font-bold text-on-surface">
                  +12 More
                </span>
              </button>
            </div>
          </aside>

          <section className="col-span-12 space-y-8 lg:col-span-7">
            <InfoCard
              icon={<Search className="size-6" />}
              title="About Me"
              className="space-y-4"
            >
              <p className="type-body-lg text-on-surface-variant italic">
                &quot;A creative soul finding harmony between modern corporate life
                and traditional Bengali values. I believe in meaningful
                conversations, the smell of old books, and the magic of a perfect
                cup of tea.&quot;
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="type-label rounded-full border border-surface-variant bg-surface px-4 py-2 text-on-surface-variant"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </InfoCard>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={<Music2 className="size-6" />} title="Education">
                <DetailList
                  items={[
                    ["Masters in Fine Arts", "Visva-Bharati University, Santiniketan"],
                    ["Bachelor of Arts", "Presidency University, Kolkata"],
                  ]}
                />
              </InfoCard>

              <InfoCard
                icon={<BriefcaseBusiness className="size-6" />}
                title="Career"
              >
                <DetailList
                  items={[
                    ["Senior Creative Lead", "Elite Design Studio, Kolkata"],
                    ["Annual Income", "Rs. 15L - Rs. 20L per annum"],
                  ]}
                />
              </InfoCard>
            </div>

            <InfoCard
              icon={<PersonStanding className="size-6" />}
              title="Family Background"
            >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {familyDetails.map(([label, value]) => (
                  <div key={label}>
                    <p className="type-caption font-medium text-on-surface-variant/70 uppercase">
                      {label}
                    </p>
                    <p className="type-label mt-1">{value}</p>
                  </div>
                ))}
              </div>
              <div className="my-4 border-t border-surface-variant/50" />
              <p className="type-body text-on-surface-variant italic">
                &quot;Ours is a close-knit, progressive family rooted in
                traditional culture but with an open-minded approach to life&apos;s
                modern changes.&quot;
              </p>
            </InfoCard>

            <InfoCard icon={<Sparkles className="size-6" />} title="Lifestyle">
              <div className="grid gap-4 md:grid-cols-3">
                {lifestyle.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <Icon className="size-6 text-on-surface-variant/60" />
                      <div>
                        <p className="type-caption font-medium text-on-surface-variant/70">
                          {item.label}
                        </p>
                        <p className="type-label">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </InfoCard>
          </section>
        </div>
      </main>
      <FloatingActionBar />
    </div>
  );
}

function InfoCard({
  children,
  className = "",
  icon,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <article
      className={[
        "rounded-xl border border-surface-container-low bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
        className,
      ].join(" ")}
    >
      <div className="mb-4 flex items-center gap-3 text-primary">
        {icon}
        <h2 className="type-section-title text-on-surface">
          {title}
        </h2>
      </div>
      {children}
    </article>
  );
}

function DetailList({ items }: { items: Array<[string, string]> }) {
  return (
    <ul className="space-y-4">
      {items.map(([label, value]) => (
        <li key={label}>
          <p className="type-label text-primary">{label}</p>
          <p className="type-body mt-1 text-on-surface-variant">{value}</p>
        </li>
      ))}
    </ul>
  );
}

function FloatingActionBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-5 pb-6 md:px-10 md:pb-8">
      <div className="mx-auto flex max-w-[1200px] justify-end">
        <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-outline-variant/30 bg-surface/90 p-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-lg max-sm:w-full max-sm:justify-between">
          <div className="hidden px-4 md:block">
            <p className="type-caption font-medium text-on-surface-variant">
              Ready to connect with
            </p>
            <p className="type-profile-name text-primary">
              Ananya Das?
            </p>
          </div>
          <button
            type="button"
            className="type-button inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-white shadow-lg transition-all hover:brightness-110 active:scale-95 sm:px-8"
          >
            <Heart className="size-5 fill-white" />
            <span>Send Interest</span>
          </button>
          <button
            type="button"
            className="type-button inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary-container px-5 py-3 text-on-secondary-container transition-all hover:brightness-105 active:scale-95 sm:px-8"
          >
            <MessageCircle className="size-5" />
            <span>Message</span>
          </button>
          <button
            type="button"
            aria-label="Share profile"
            className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-xl text-on-surface-variant transition-colors hover:bg-surface-container-high"
          >
            <Share2 className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

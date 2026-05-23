import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Check,
  Compass,
  Crown,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  User,
  X,
} from "lucide-react";

import {
  DISCOVERY_PATH,
  MY_PROFILE_PATH,
  PROFILE_DETAILS_PATH,
} from "@/lib/routes";

const interestedProfiles = [
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

const summaryStats = [
  ["New interests", "12"],
  ["Accepted this week", "4"],
  ["Profile views", "86"],
] as const;

export function LikesPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto grid min-h-screen max-w-[1200px] grid-cols-12 gap-8 px-5 pt-24 pb-32 md:px-10 lg:pb-16">
        <section className="col-span-12 lg:col-span-8">
          <div className="mb-8 flex flex-col gap-4">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1 text-xs leading-4 font-semibold text-primary">
                <Heart className="size-4 fill-current" />
                <span>{interestedProfiles.length} new interests</span>
              </div>
              <h1 className="font-heading text-[32px] leading-10 font-semibold text-on-surface">
                Interests Received
              </h1>
              <p className="mt-2 max-w-2xl text-base leading-6 text-on-surface-variant">
                Review members who have expressed interest and open their full
                profile when you are ready to know more.
              </p>
            </div>

            <Link
              href={DISCOVERY_PATH}
              className="inline-flex w-fit items-center gap-2 text-sm leading-5 font-semibold text-primary transition-colors hover:text-primary-container"
            >
              <Compass className="size-4" />
              Discover more
            </Link>
          </div>

          {interestedProfiles.length > 0 ? (
            <div className="space-y-4">
              {interestedProfiles.map((profile) => (
                <InterestCard key={profile.name} profile={profile} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </section>

        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-24 space-y-4">
            <section className="rounded-xl border border-outline-variant/20 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-surface-container-high text-primary">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl leading-8 font-semibold">
                    Your activity
                  </h2>
                  <p className="text-xs leading-4 text-on-surface-variant">
                    Last 7 days
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
                {summaryStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg bg-surface-container-low p-4"
                  >
                    <p className="font-heading text-2xl leading-8 font-semibold text-primary">
                      {value}
                    </p>
                    <p className="mt-1 text-xs leading-4 font-medium text-on-surface-variant">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant/20 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="mb-4 flex items-center gap-3 text-primary">
                <ShieldCheck className="size-6" />
                <h2 className="font-heading text-2xl leading-8 font-semibold text-on-surface">
                  Stand out more
                </h2>
              </div>
              <p className="text-sm leading-5 text-on-surface-variant">
                Complete your profile details to help serious interests make a
                confident first move.
              </p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-surface-container-high">
                <div className="h-full w-[78%] rounded-full bg-primary" />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs leading-4 font-semibold">
                <span className="text-on-surface-variant">Profile strength</span>
                <span className="text-primary">78%</span>
              </div>
              <Link
                href={MY_PROFILE_PATH}
                className="mt-5 inline-flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-sm leading-5 font-semibold text-white transition-colors hover:bg-primary-container active:scale-95"
              >
                Improve profile
              </Link>
            </section>
          </div>
        </aside>
      </main>

    </div>
  );
}

function InterestCard({
  profile,
}: {
  profile: (typeof interestedProfiles)[number];
}) {
  const isGold = profile.statusStyle === "gold";

  return (
    <article className="group overflow-hidden rounded-xl border border-outline-variant/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(154,0,41,0.08)]">
      <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
        <Link
          href={PROFILE_DETAILS_PATH}
          aria-label={`Open ${profile.name}'s profile`}
          className="relative block aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[260px]"
        >
          <Image
            fill
            sizes="(min-width: 768px) 220px, calc(100vw - 40px)"
            src={profile.image}
            alt={profile.alt}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <span
              className={[
                "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs leading-4 font-bold backdrop-blur-sm",
                isGold
                  ? "bg-secondary-container/90 text-on-secondary-container"
                  : "bg-[#006f6e]/90 text-[#9befed]",
              ].join(" ")}
            >
              {isGold ? (
                <Crown className="size-3.5 fill-current" />
              ) : (
                <BadgeCheck className="size-3.5" />
              )}
              {profile.status}
            </span>
          </div>
        </Link>

        <div className="flex min-w-0 flex-col p-5 md:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div className="min-w-0">
              <Link href={PROFILE_DETAILS_PATH} className="group/title">
                <h2 className="font-heading text-2xl leading-8 font-semibold text-on-surface transition-colors group-hover/title:text-primary">
                  {profile.name}, {profile.age}
                </h2>
              </Link>
              <p className="mt-1 text-sm leading-5 font-semibold text-on-surface-variant">
                {profile.meta}
              </p>
              <p className="mt-2 flex items-center gap-1 text-xs leading-4 text-on-surface-variant">
                <MapPin className="size-3.5" />
                <span>{profile.location}</span>
              </p>
            </div>
            <div className="shrink-0 rounded-full bg-surface-container-low px-3 py-1 text-xs leading-4 font-bold text-primary">
              {profile.match}
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-surface-container-low p-4">
            <p className="text-sm leading-5 text-on-surface-variant">
              &quot;{profile.preview}&quot;
            </p>
            <p className="mt-2 text-xs leading-4 font-semibold text-primary">
              Sent interest {profile.receivedAt}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-outline-variant/20 bg-white px-3 py-1 text-xs leading-4 text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Link
              href={PROFILE_DETAILS_PATH}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm leading-5 font-semibold text-white transition-colors hover:bg-primary-container active:scale-95"
            >
              <User className="size-4" />
              <span>View Profile</span>
            </Link>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-surface-container-high px-4 py-3 text-sm leading-5 font-semibold text-primary transition-colors hover:bg-surface-container-highest active:scale-95"
            >
              <Check className="size-4" />
              <span>Accept</span>
            </button>
            <button
              type="button"
              aria-label={`Decline interest from ${profile.name}`}
              className="inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-3 text-on-surface-variant transition-colors hover:bg-surface-container-low active:scale-95"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <section className="rounded-xl border border-outline-variant/20 bg-white p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-surface-container-high text-primary">
        <Heart className="size-7" />
      </div>
      <h2 className="mt-4 font-heading text-2xl leading-8 font-semibold">
        No interests yet
      </h2>
      <p className="mx-auto mt-2 max-w-md text-base leading-6 text-on-surface-variant">
        New interests will appear here as soon as members respond to your
        profile.
      </p>
    </section>
  );
}

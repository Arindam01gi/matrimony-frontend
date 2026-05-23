import Image from "next/image";
import Link from "next/link";
import {
  Bolt,
  ChevronDown,
  CirclePlus,
  Compass,
  Crown,
  Heart,
  MessageCircle,
  User,
  Verified,
} from "lucide-react";

import { DISCOVERY_PATH, LIKES_PATH, MY_PROFILE_PATH, PROFILE_DETAILS_PATH } from "@/lib/routes";

const profiles = [
  {
    name: "Arjun Chatterjee, 29",
    meta: "Software Architect - London",
    badge: "Premium",
    badgeStyle: "gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSD4UH6xSnzaTZjUNZnJMquUfaz9jgWP-gd-97fTSAHMTIf1Bc-GX-PSwsJy-l1iQ8AAdRcN97qM_vnZq_yt1CO30dkZ1mdJBqaX3O3QeGE8xyxQbuKmac2b-DMP2bAszI3ycJC_bXIrjplI1L5_aC7NS7Qs26gQ0xMIkZiQgdUj1k9nvCBY1JzooLlbVLiENkgsXlSUUyHibJD6aR56Pzb1QGUyI4ssGTqWmZ7VWTdlspdc2qCRpLsKaME47Umtbj_mG5R0WIZ2i7",
    alt: "Sophisticated Bengali man in a warm sunlit library wearing a modern kurta.",
    tags: ["Classical Music", "Bengali Literature"],
    summary:
      "I value deep conversations, cultural roots, and global perspectives. Looking for someone...",
  },
  {
    name: "Ishani Roy, 26",
    meta: "Doctor (MBBS) - Kolkata",
    badge: "Verified",
    badgeStyle: "teal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHIRPs0UDY0Uqb4Z3LlncbiYKXN0h4dGtJRYGSkOtAkYbxOTWh6BPBcmzusUUwGRfXrmClHXhxpQlD_BIbLBcAH20_l_Jfghh8n438hnDns808VzkwDPJeeerWdW7xBRSddceCltZRPG_Nvny60oTkJWow_H7dM1iNZT76Yvq8It9Jx50eCJot96d6is49T5ozwRRLFobv8pr_FC2xOLEJAMcb0SlF8SLyl0P43eYIdGEcBziRISORNFngL_jHe5OIqoyttT-z3Rq3",
    alt: "Elegant young Bengali woman in a modern saree standing in a botanical garden.",
    tags: ["Traveler", "Cooking"],
    summary:
      "Passionate about healthcare and community. Seeking a companion to share life's simple joys...",
  },
  {
    name: "Rahul Sen, 31",
    meta: "Chartered Accountant - Mumbai",
    badge: null,
    badgeStyle: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeaPPJYpVaM9PlldNNVa0h6Kjm3aILeiPYr-a0GDt1qey_51twSUZtnp5KTekFpIRUvFofpP2t1pI_wv6Fh6OGBTbHSEZQmAOCvjex2b-VImJpgnDcVvnu7jMZPt9xFO9NusN6cRe5TrhrNfVtPSCYo23UCKqWpNq3U4NyQLxu1FukTmqxlfWRCVuOlMsaQbMGwod4IDSecLws-Unw4oUs0QjozJB9aPu0Z27XfrQxSxCmr0Dt7a-74RwCBV5TNBKSKDBnZdv2JC2v",
    alt: "Friendly Bengali man in a smart casual shirt sitting in a modern cafe.",
    tags: ["Finance", "Photography"],
    summary:
      "A balance of tradition and modern lifestyle. Family-oriented with a passion for weekend photography...",
  },
  {
    name: "Sohini Bose, 28",
    meta: "Marketing Lead - Bangalore",
    badge: "Premium",
    badgeStyle: "gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9LlUU3fCPzMjAMq65GBo7kXv2WSVFREUZuKpLIIAY8Lq25G9eenDMYSn6E58fVxWgSUw878134WHP4grizDTziLb4JbfoTue8xD3p1jKI8d54QS-bqQNPU4WFrqTgzE0ez8nI3Z-knf0Y3-JacY1yByaXfBwBWO7CBLS0qNepP1YRXfY7WLe97o7DW9YTDz0nL8kKl4ScDle8XHkkU3ZoZTZrrZ5cAvHLbpDA8BKWKJDn4kO_jeYHIxdLKzKsw5-LtyV0fH7uRtP5",
    alt: "Successful Bengali woman executive in an office with sunset skyline views.",
    tags: ["Art Collector", "Yoga"],
    summary:
      "Dynamic and goal-oriented, yet I find peace in classical art and yoga. Looking for a partner who...",
  },
] as const;

const quickMatches = [
  {
    name: "Debashis Roy",
    meta: "Engg Manager - USA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwqDfhNXsKOm5GvW7uQASvxKRrxABDCtj2GpBLMIGaVnM_1Fx9rig46vpz1e1vR0GDKGjb2jB9qP5a8eOprH9bDVctAJYYqge6OnEPGwPLt1qhjgpF3b7k1JHk_kl5BeCU4Es-N_cXv5re1PS1bhTmsh5Wr_EAT4VimTYs6TfEDzGVpsDvOKnsj7SwBOur2SQgIja-eoCRRtlAbP_MspskGKj4z_ob5WLcMzzne6E0rj26jCKn4w4FEPO9xekNMuo2cmqEn7YsJjW2",
  },
  {
    name: "Priya Dutta",
    meta: "Scientist - Kolkata",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArYlRbl6I2j3LIX6sePzTvmyWbmVrEVKZ5fpThn5_H61ZSGDT7po95n0BuOYbnXiQn24NYiTyuG3QfSrmy1klAbOFsFZBaAyyF0O2coMQ1vc4cvSlOlKPilV7oUHYqsfnny8KzZpprpXuqIbI4AP-9GcjrZckHaDGnc-wQ_s3e0VUOpU7iA_NDmgxnZabQ3kKPZqfalPhh42kUqWfWKjaQiBkDHBpY03huS8hRDB8enrNTOsNx85fbR28exg8CIO5yn_yqviT-f51f",
  },
] as const;

const recentlyViewed = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBNnVuWyGkCy4EsgAUn02KMjsOqcwZxABuGLv5IKMmrQr8Urcn10rZ-xAV5m27d-nhYkKU4NyCkJ0jfw1-jHSDROaMq4uub4F_KN1FjjGuiZZTzofRZc-dG83YfZyP6h-9vBoA-d5IURF3OWEdp8hUnhyGab-Zlc32n_MK2HU2EB9lyAJvMb0TvXh-MwZ6p5AndXg24-1JMqfY9GlTMrdh_xcq-WU09BEA17czATWrZXmMJwI0L_M1i_RrPHOeQJORgupBXHilfHR6u",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQCAOpBYJQX1Qoq5HV5THEVMpAOesf7fkpkXD43g9sSYasFnaWFeyOaP6DkWXINk5KFUwgUSrHdm_pIye31tcnR-TcAeiEMZK9Bg1wS0XfDGJvsq1GBa1FGUQ2WFZml9sNP0A8CFobQZnmUgeTV4bo5dxkhIwa6gaWn8v3cDVtmshYKiEnTpFPTyPzCOPTLDbLpZDKGXxN1yjjOzR3CgH6IV9bwzQIdJHZTVL6_PMoZTEv_-aKQ2gKCc4CtW_9TB2Gu2awjWMM35F7",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAxJ_0WTC7rYjviwFIa3FNtuBCWDYC06s70pQo7c5N1koEk3JOW5DKAnfD24GNdrjhUSdGVspj-yqNw_n38AwHRYQMQR3OEDgC153-XoLMokta0QQixpwKQZ0T168Gux91AzyQXw2t--Hzea_tfi1agrGS7YwbYEBNIpPdBwp1bYa0l8jTIb5VoSJua5w56qHek7Oh8SDtyRtig6TSYWvx49EUbsGDkWzOhfmkDlJOsj1HIyjGBuEXx5WIWtWjXWOU1-3wv5-j04iBX",
] as const;

export function DiscoveryFeedPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-12 gap-8 px-5 pt-24 pb-32 md:px-10 lg:pb-12">
        <FilterSidebar />

        <section className="col-span-12 flex flex-col gap-8 lg:col-span-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="font-heading text-[32px] leading-10 font-semibold text-on-surface">
                Discover Matches
              </h1>
              <p className="mt-1 text-base leading-6 text-on-surface-variant">
                Curated profiles based on your cultural preferences
              </p>
            </div>
            <button
              type="button"
              className="flex cursor-pointer items-center gap-2 self-start text-sm leading-5 font-semibold text-primary hover:underline sm:self-auto"
            >
              <span>Sort by: Relevance</span>
              <ChevronDown className="size-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {profiles.map((profile) => (
              <ProfileCard key={profile.name} profile={profile} />
            ))}
          </div>

          <div className="flex justify-center py-12">
            <div className="flex flex-col items-center gap-4">
              <div className="size-8 animate-spin rounded-full border-4 border-primary-container border-t-transparent" />
              <p className="text-sm leading-5 font-semibold text-on-surface-variant">
                Loading more profiles...
              </p>
            </div>
          </div>
        </section>

        <ActivitySidebar />
      </main>

      <MobileDiscoveryNav />
      <button
        type="button"
        aria-label="Add new discovery action"
        className="fixed right-5 bottom-24 z-40 flex size-14 cursor-pointer items-center justify-center rounded-full bg-secondary-container text-on-secondary-container shadow-lg transition-transform hover:scale-110 active:scale-95 md:right-10"
      >
        <CirclePlus className="size-8" />
      </button>
    </div>
  );
}

function FilterSidebar() {
  return (
    <aside className="col-span-3 hidden lg:block">
      <div className="sticky top-24 flex flex-col gap-8 rounded-xl border border-outline-variant/20 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div>
          <h2 className="mb-4 font-heading text-2xl leading-8 font-semibold text-primary">
            Refine Search
          </h2>
          <div className="mb-8 h-1 w-12 rounded-full bg-secondary-container" />
        </div>

        <FilterBlock label="Age Range">
          <div className="mt-2 flex items-center gap-4">
            <input className="w-full rounded-lg border-0 bg-surface-dim/30 p-3 text-base leading-6 focus:ring-2 focus:ring-primary-container" placeholder="24" type="number" />
            <span className="text-on-surface-variant">to</span>
            <input className="w-full rounded-lg border-0 bg-surface-dim/30 p-3 text-base leading-6 focus:ring-2 focus:ring-primary-container" placeholder="32" type="number" />
          </div>
        </FilterBlock>

        <FilterBlock label="Location">
          <select className="w-full cursor-pointer appearance-none rounded-lg border-0 bg-surface-dim/30 p-3 text-base leading-6 focus:ring-2 focus:ring-primary-container">
            <option>West Bengal, India</option>
            <option>Dhaka, Bangladesh</option>
            <option>New York, USA</option>
            <option>London, UK</option>
          </select>
        </FilterBlock>

        <FilterBlock label="Education">
          <div className="mt-2 flex flex-wrap gap-2">
            {["Masters", "Doctorate", "Bachelors"].map((item, index) => (
              <button
                key={item}
                type="button"
                className={[
                  "cursor-pointer rounded-full px-3 py-1 text-xs leading-4 font-medium transition-colors",
                  index === 0
                    ? "bg-primary-container text-on-primary-container"
                    : "border border-outline-variant bg-white text-on-surface-variant hover:bg-surface-container",
                ].join(" ")}
              >
                {item}
              </button>
            ))}
          </div>
        </FilterBlock>

        <FilterBlock label="Occupation">
          <select className="w-full cursor-pointer appearance-none rounded-lg border-0 bg-surface-dim/30 p-3 text-base leading-6 focus:ring-2 focus:ring-primary-container">
            <option>Software Professional</option>
            <option>Medical Practitioner</option>
            <option>Civil Services</option>
            <option>Architecture</option>
          </select>
        </FilterBlock>

        <button
          type="button"
          className="mt-8 w-full cursor-pointer rounded-xl bg-primary-container py-4 text-sm leading-5 font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg active:scale-95"
        >
          Apply Filters
        </button>
      </div>
    </aside>
  );
}

function FilterBlock({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm leading-5 font-semibold tracking-wider text-on-surface uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

function ProfileCard({ profile }: { profile: (typeof profiles)[number] }) {
  return (
    <Link
      href={PROFILE_DETAILS_PATH}
      className="group relative overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-xl"
    >
      <div className="relative h-[320px] overflow-hidden">
        <Image
          fill
          sizes="(min-width: 1024px) 310px, (min-width: 768px) 50vw, calc(100vw - 40px)"
          src={profile.image}
          alt={profile.alt}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {profile.badge ? (
          <div className="absolute top-4 left-4">
            <span
              className={[
                "flex items-center gap-1 rounded-full px-3 py-1 text-xs leading-4 font-bold backdrop-blur-sm",
                profile.badgeStyle === "gold"
                  ? "bg-secondary-container/90 text-on-secondary-container"
                  : "bg-[#006f6e]/90 text-[#9befed]",
              ].join(" ")}
            >
              {profile.badgeStyle === "gold" ? (
                <Crown className="size-3.5 fill-current" />
              ) : (
                <Verified className="size-3.5" />
              )}
              {profile.badge}
            </span>
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute right-6 bottom-4 left-6">
          <h2 className="font-heading text-2xl leading-8 font-semibold text-white">
            {profile.name}
          </h2>
          <p className="text-xs leading-4 font-medium text-white/80">{profile.meta}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-2">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-outline-variant/20 bg-surface-container px-3 py-1 text-xs leading-4 text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-2 line-clamp-2 text-base leading-6 text-on-surface-variant">
          {profile.summary}
        </p>
        <span className="mt-4 w-full rounded-xl bg-primary-container py-3 text-center text-sm leading-5 font-semibold text-white transition-colors group-hover:bg-primary">
          View Profile
        </span>
      </div>
    </Link>
  );
}

function ActivitySidebar() {
  return (
    <aside className="col-span-3 hidden lg:block">
      <div className="sticky top-24 flex flex-col gap-8">
        <section className="rounded-xl border border-outline-variant/20 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <h2 className="mb-4 flex items-center gap-2 font-heading text-2xl leading-8 font-semibold text-on-surface">
            <Bolt className="size-6 text-primary" />
            Quick Matches
          </h2>
          <div className="flex flex-col gap-4">
            {quickMatches.map((match) => (
              <Link
                key={match.name}
                href={PROFILE_DETAILS_PATH}
                className="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-surface-container-low"
              >
                <div className="relative size-12 overflow-hidden rounded-full border border-outline-variant">
                  <Image
                    fill
                    sizes="48px"
                    src={match.image}
                    alt={`${match.name} profile thumbnail`}
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm leading-5 font-semibold text-on-surface transition-colors group-hover:text-primary">
                    {match.name}
                  </p>
                  <p className="truncate text-xs leading-4 text-on-surface-variant">
                    {match.meta}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 w-full cursor-pointer py-2 text-sm leading-5 font-semibold text-primary hover:underline"
          >
            View All Matches
          </button>
        </section>

        <section className="rounded-xl border border-outline-variant/20 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <h2 className="mb-4 font-heading text-2xl leading-8 font-semibold text-on-surface">
            Recently Viewed
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {recentlyViewed.map((image, index) => (
              <Link
                key={image}
                href={PROFILE_DETAILS_PATH}
                className="relative size-16 shrink-0 overflow-hidden rounded-lg transition-all hover:ring-2 hover:ring-primary"
              >
                <Image
                  fill
                  sizes="64px"
                  src={image}
                  alt={`Recently viewed profile ${index + 1}`}
                  className="object-cover"
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-xl bg-primary-container p-8 text-on-primary-container shadow-md">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 size-24 rounded-full bg-white/10" />
          <h2 className="mb-2 font-heading text-2xl leading-8 font-semibold">
            Upgrade to Gold
          </h2>
          <p className="mb-4 text-xs leading-4">
            See who liked you and get unlimited messaging.
          </p>
          <Link
            href="/premium"
            className="inline-flex rounded-lg bg-white px-4 py-2 text-sm leading-5 font-semibold text-primary transition-colors hover:bg-surface-container-high"
          >
            Learn More
          </Link>
        </section>
      </div>
    </aside>
  );
}

function MobileDiscoveryNav() {
  const items = [
    { label: "Discovery", icon: Compass, href: DISCOVERY_PATH, active: true },
    { label: "Likes", icon: Heart, href: LIKES_PATH, active: false },
    { label: "Chat", icon: MessageCircle, href: "#", active: false },
    { label: "Profile", icon: User, href: MY_PROFILE_PATH, active: false },
  ] as const;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex h-20 items-center justify-around rounded-t-xl border-t border-outline-variant/20 bg-surface/90 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] backdrop-blur-lg md:hidden">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={[
              "flex flex-col items-center justify-center transition-all active:scale-90",
              item.active
                ? "rounded-full bg-primary-container px-4 py-1 text-on-primary-container"
                : "text-on-surface-variant hover:text-primary",
            ].join(" ")}
          >
            <Icon className={["size-6", item.active ? "fill-current" : ""].join(" ")} />
            <span className="text-xs leading-4 font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

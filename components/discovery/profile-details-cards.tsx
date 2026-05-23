import {
  BriefcaseBusiness,
  Music2,
  PersonStanding,
  Search,
  Sparkles,
} from "lucide-react";

import { familyDetails, interests, lifestyle } from "./profile-details-data";

export function ProfileInfoCards() {
  return (
    <section className="col-span-12 space-y-8 lg:col-span-7">
      <InfoCard icon={<Search className="size-6" />} title="About Me" className="space-y-4">
        <p className="type-body-lg text-on-surface-variant italic">
          &quot;A creative soul finding harmony between modern corporate life and
          traditional Bengali values. I believe in meaningful conversations, the
          smell of old books, and the magic of a perfect cup of tea.&quot;
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
        <InfoCard icon={<BriefcaseBusiness className="size-6" />} title="Career">
          <DetailList
            items={[
              ["Senior Creative Lead", "Elite Design Studio, Kolkata"],
              ["Annual Income", "Rs. 15L - Rs. 20L per annum"],
            ]}
          />
        </InfoCard>
      </div>

      <FamilyCard />
      <LifestyleCard />
    </section>
  );
}

function FamilyCard() {
  return (
    <InfoCard icon={<PersonStanding className="size-6" />} title="Family Background">
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
        &quot;Ours is a close-knit, progressive family rooted in traditional
        culture but with an open-minded approach to life&apos;s modern changes.&quot;
      </p>
    </InfoCard>
  );
}

function LifestyleCard() {
  return (
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
                <p className="type-label">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </InfoCard>
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
        "rounded-xl border border-surface-container-low bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-8",
        className,
      ].join(" ")}
    >
      <div className="mb-4 flex items-center gap-3 text-primary">
        {icon}
        <h2 className="type-section-title text-on-surface">{title}</h2>
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

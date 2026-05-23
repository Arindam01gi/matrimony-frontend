import Image from "next/image";
import Link from "next/link";

import { DISCOVERY_PATH, PROFILE_DETAILS_PATH } from "@/lib/routes";

import { OlderNotification, RecentNotification } from "./notifications-data";

export function SectionTitle({
  active = false,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={[
        "type-eyebrow mb-4 flex items-center gap-2",
        active ? "text-primary" : "text-on-surface-variant",
      ].join(" ")}
    >
      {active ? <span className="size-2 rounded-full bg-primary" /> : null}
      {children}
    </h2>
  );
}

export function RecentNotificationCard({
  notification,
}: {
  notification: RecentNotification;
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
            <NotificationCopy notification={notification} />
            <RecentActions notification={notification} />
          </div>

          {notification.tags.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {notification.tags.map((tag) => (
                <span
                  key={tag}
                  className="type-caption rounded-lg border border-outline-variant/20 bg-surface-container-low px-3 py-1 text-on-surface-variant"
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

function NotificationCopy({ notification }: { notification: RecentNotification }) {
  return (
    <div className="min-w-0">
      <p className="type-body text-on-surface">
        <span className="font-bold">{notification.name}</span>{" "}
        {notification.title}
      </p>
      {"preview" in notification && notification.preview ? (
        <p className="type-body mt-1 line-clamp-1 text-on-surface-variant italic">
          &quot;{notification.preview}&quot;
        </p>
      ) : null}
      <p className="type-caption mt-1 font-medium text-on-surface-variant">
        {notification.meta}
      </p>
    </div>
  );
}

function RecentActions({ notification }: { notification: RecentNotification }) {
  return (
    <div className="flex flex-wrap gap-2">
      {notification.actions.map((action, index) =>
        action === "View Profile" ? (
          <Link
            key={action}
            href={PROFILE_DETAILS_PATH}
            className="type-button inline-flex rounded-lg bg-surface-container-high px-4 py-2 text-on-surface-variant transition-colors hover:bg-surface-variant active:scale-95"
          >
            {action}
          </Link>
        ) : (
          <button
            key={action}
            type="button"
            className={[
              "type-button cursor-pointer rounded-lg px-4 py-2 transition-all active:scale-95",
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
  );
}

export function OlderNotificationRow({
  notification,
}: {
  notification: OlderNotification;
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
        <p className="type-body text-on-surface">
          <span className="font-bold">{notification.title}</span>{" "}
          {notification.text}
        </p>
        <p className="type-caption font-medium text-on-surface-variant">
          {notification.meta}
        </p>
      </div>
      {"badge" in notification && notification.badge ? (
        <span className="type-caption self-start rounded-full bg-secondary-container/20 px-3 py-1 font-bold text-secondary-foreground sm:self-auto">
          {notification.badge}
        </span>
      ) : null}
      {"cta" in notification && notification.cta ? (
        <Link
          href={notification.cta === "Discover now" ? DISCOVERY_PATH : PROFILE_DETAILS_PATH}
          className="type-button self-start text-primary hover:underline sm:self-auto"
        >
          {notification.cta}
        </Link>
      ) : null}
    </article>
  );
}

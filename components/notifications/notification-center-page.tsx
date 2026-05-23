import { BellRing, CheckCheck, Settings } from "lucide-react";

import {
  OlderNotificationRow,
  RecentNotificationCard,
  SectionTitle,
} from "./notification-cards";
import { olderNotifications, recentNotifications } from "./notifications-data";

export function NotificationCenterPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto min-h-screen max-w-[1200px] px-4 pt-24 pb-28 sm:px-5 md:px-10 lg:pb-16">
        <section className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="type-caption mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1 font-semibold text-primary">
              <BellRing className="size-4" />
              <span>Activity Center</span>
            </div>
            <h1 className="type-app-title text-on-surface">Notifications</h1>
            <p className="type-body mt-2 max-w-2xl text-on-surface-variant">
              Keep track of interests, messages, profile views, and account
              updates tailored for your matrimony journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
            <HeaderAction icon={<CheckCheck className="size-4" />}>
              Mark all as read
            </HeaderAction>
            <HeaderAction icon={<Settings className="size-4" />}>
              Preferences
            </HeaderAction>
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
              className="type-button cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
            >
              View more activity
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function HeaderAction({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="type-button inline-flex cursor-pointer items-center gap-2 rounded-xl border border-outline-variant/30 bg-white px-4 py-2 text-on-surface-variant transition-colors hover:bg-surface-container-high active:scale-95"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

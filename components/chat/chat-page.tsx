import { MessageCircle, ShieldCheck } from "lucide-react";

import { ActiveThread } from "./active-thread";
import { ConnectionRail } from "./chat-rail";
import { ConversationList } from "./conversation-list";

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
            <h1 className="type-app-title">Chat</h1>
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

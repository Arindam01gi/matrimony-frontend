import Image from "next/image";
import { Search } from "lucide-react";

import { conversations } from "./chat-data";

export function ConversationList() {
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

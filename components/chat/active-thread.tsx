import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  MapPin,
  MoreVertical,
  Paperclip,
  Phone,
  Send,
  Smile,
  Star,
  Video,
} from "lucide-react";

import { PROFILE_DETAILS_PATH } from "@/lib/routes";

import { activeMember, messages } from "./chat-data";
import { IconButton } from "./chat-icon-button";

export function ActiveThread() {
  return (
    <section className="flex min-h-[720px] min-w-0 flex-col bg-[#fffafa]">
      <ThreadHeader />
      <div className="flex-1 space-y-6 overflow-y-auto px-4 py-6 md:px-8">
        <div className="flex justify-center">
          <span className="type-caption rounded-full bg-surface-container-high px-4 py-1.5 font-bold text-on-surface-variant">
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
      <MessageComposer />
    </section>
  );
}

function ThreadHeader() {
  return (
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
            <h2 className="type-profile-name truncate">{activeMember.name}</h2>
            <p className="type-caption truncate font-semibold text-on-surface-variant">
              {activeMember.age} - {activeMember.role}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1 text-on-surface-variant">
          <IconButton label="Start voice call" icon={<Phone className="size-5" />} />
          <IconButton label="Start video call" icon={<Video className="size-5" />} />
          <IconButton
            label="More conversation options"
            icon={<MoreVertical className="size-5" />}
          />
        </div>
      </div>

      <div className="type-caption mt-4 flex flex-wrap items-center gap-2 text-on-surface-variant">
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
          <h3 className="type-label text-primary">
            {activeMember.match} compatibility
          </h3>
          <p className="type-caption truncate text-on-surface-variant">
            Shared interests: {activeMember.interests.join(", ")}
          </p>
        </div>
      </div>
      <span className="type-caption w-fit rounded-full bg-surface-container-low px-3 py-1 font-semibold text-on-surface-variant">
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
        <p className="type-body">{message.body}</p>
        <p
          className={[
            "type-caption mt-3 text-right",
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

function MessageComposer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-white px-4 py-4 md:px-6">
      <div className="flex items-center gap-2 rounded-lg border border-outline-variant/20 bg-surface px-3 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <IconButton label="Attach a file" icon={<Paperclip className="size-5" />} />
        <input
          className="type-body min-w-0 flex-1 border-0 bg-transparent px-2 outline-none placeholder:text-on-surface-variant focus:ring-0"
          placeholder="Write a message..."
          type="text"
        />
        <IconButton label="Add emoji" icon={<Smile className="size-5" />} />
        <button
          type="button"
          className="type-button inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-lg bg-primary px-4 py-3 text-white transition-colors hover:bg-primary-container active:scale-95"
        >
          <span>Send</span>
          <Send className="size-4" />
        </button>
      </div>
      <div className="type-caption mt-3 flex flex-wrap justify-center gap-4 text-on-surface-variant">
        <button type="button" className="cursor-pointer hover:text-primary">
          Safety tips
        </button>
        <button type="button" className="cursor-pointer hover:text-primary">
          Report profile
        </button>
      </div>
    </footer>
  );
}

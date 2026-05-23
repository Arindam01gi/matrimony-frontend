import { Heart, MessageCircle, Share2 } from "lucide-react";

export function FloatingActionBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-50 px-4 pb-4 sm:px-5 md:bottom-0 md:px-10 md:pb-8">
      <div className="mx-auto flex max-w-[1200px] justify-end">
        <div className="pointer-events-auto grid w-full grid-cols-[1fr_1fr_auto] gap-2 rounded-2xl border border-outline-variant/30 bg-surface/90 p-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-lg sm:flex sm:w-auto sm:items-center sm:gap-3 sm:p-3">
          <div className="hidden px-4 md:block">
            <p className="type-caption font-medium text-on-surface-variant">
              Ready to connect with
            </p>
            <p className="type-profile-name text-primary">Ananya Das?</p>
          </div>
          <button
            type="button"
            className="type-button inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-3 text-white shadow-lg transition-all hover:brightness-110 active:scale-95 sm:px-8 sm:py-3"
          >
            <Heart className="size-5 fill-white" />
            <span>Send Interest</span>
          </button>
          <button
            type="button"
            className="type-button inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary-container px-3 text-on-secondary-container transition-all hover:brightness-105 active:scale-95 sm:px-8 sm:py-3"
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

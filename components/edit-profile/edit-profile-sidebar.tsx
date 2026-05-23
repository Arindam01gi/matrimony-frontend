import Image from "next/image";
import { Camera, CirclePlus, Pencil, Sparkles, Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { EditProfileTabId, profilePhotos, tabs } from "./edit-profile-data";
import { IconButton } from "./edit-profile-controls";

export function EditProfileSidebar({
  activeTab,
  onSelectTab,
}: {
  activeTab: EditProfileTabId;
  onSelectTab: (id: EditProfileTabId) => void;
}) {
  return (
    <aside className="col-span-12 space-y-4 lg:sticky lg:top-24 lg:col-span-4">
      <PhotoGalleryCard />
      <ProfileStrengthCard />
      <nav className="hidden rounded-xl border border-outline-variant/20 bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] lg:block">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={cn(
                "type-button flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-left transition-all",
                activeTab === tab.id
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
              )}
            >
              <Icon className="size-5 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function PhotoGalleryCard() {
  return (
    <section className="min-w-0 rounded-xl border border-outline-variant/20 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="type-section-title text-primary">Photo Gallery</h2>
          <p className="type-body-sm text-on-surface-variant">4 of 6 slots used</p>
        </div>
        <button
          type="button"
          aria-label="Add photo"
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-on-primary"
        >
          <Camera className="size-5" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {profilePhotos.map((photo, index) => (
          <div
            key={photo.src}
            className={cn(
              "group relative aspect-square overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-low",
              index === 0 && "col-span-3 aspect-[4/3]",
            )}
          >
            <Image
              fill
              priority={index === 0}
              sizes={
                index === 0
                  ? "(min-width: 1024px) 468px, calc(100vw - 32px)"
                  : "(min-width: 1024px) 226px, calc((100vw - 48px) / 3)"
              }
              src={photo.src}
              alt={photo.alt}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/45 opacity-0 transition-opacity group-hover:opacity-100">
              <IconButton label="Edit photo">
                <Pencil className="size-4" />
              </IconButton>
              <IconButton label="Delete photo" destructive>
                <Trash2 className="size-4" />
              </IconButton>
            </div>
            {index === 0 ? (
              <span className="type-eyebrow absolute top-3 left-3 rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container">
                Primary
              </span>
            ) : null}
          </div>
        ))}

        <button
          type="button"
          className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-outline-variant/60 bg-surface text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
        >
          <CirclePlus className="mb-2 size-7" />
          <span className="type-caption font-semibold">Add Photo</span>
        </button>
      </div>
    </section>
  );
}

function ProfileStrengthCard() {
  return (
    <section className="min-w-0 rounded-xl border border-outline-variant/20 bg-surface-container-high p-4">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="size-5 fill-secondary-container text-secondary-container" />
        <h2 className="type-eyebrow font-bold text-on-secondary-container">
          Profile Strength: 85%
        </h2>
      </div>
      <div className="mb-3 h-2 overflow-hidden rounded-full bg-white">
        <div className="h-full w-[85%] rounded-full bg-primary" />
      </div>
      <p className="type-caption break-words font-medium text-on-surface-variant">
        Add father&apos;s occupation and family values to improve match relevance.
      </p>
    </section>
  );
}

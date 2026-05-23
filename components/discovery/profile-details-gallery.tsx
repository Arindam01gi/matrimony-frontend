"use client";

import Image from "next/image";
import { BadgeCheck, Camera, MapPin } from "lucide-react";

import { gallery, ProfileGalleryImage } from "./profile-details-data";

export function ProfileDetailsGallery({
  activeImage,
  onSelectImage,
}: {
  activeImage: ProfileGalleryImage;
  onSelectImage: (image: ProfileGalleryImage) => void;
}) {
  return (
    <aside className="col-span-12 space-y-4 lg:sticky lg:top-24 lg:col-span-5">
      <section className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-sm">
        <Image
          priority
          fill
          sizes="(min-width: 1024px) 460px, calc(100vw - 32px)"
          src={activeImage.src}
          alt={activeImage.alt}
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 text-white sm:p-8">
          <div className="mb-2 flex items-center gap-2">
            <span className="type-eyebrow rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container">
              Premium Member
            </span>
            <BadgeCheck className="size-4 fill-white text-white" />
          </div>
          <h1 className="type-profile-name">Ananya Das, 27</h1>
          <p className="type-body mt-1 flex items-center gap-1 text-white/90">
            <MapPin className="size-4" />
            Kolkata, West Bengal
          </p>
        </div>
      </section>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {gallery.map((image) => (
          <GalleryThumb
            key={image.src}
            image={image}
            isActive={image.src === activeImage.src}
            onSelectImage={onSelectImage}
          />
        ))}
        <button
          type="button"
          className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg bg-surface-container-high text-primary transition-colors hover:bg-surface-container-highest"
        >
          <Camera className="mb-1 size-5" />
          <span className="type-caption font-bold text-on-surface">+12 More</span>
        </button>
      </div>
    </aside>
  );
}

function GalleryThumb({
  image,
  isActive,
  onSelectImage,
}: {
  image: ProfileGalleryImage;
  isActive: boolean;
  onSelectImage: (image: ProfileGalleryImage) => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Show ${image.alt}`}
      onClick={() => onSelectImage(image)}
      className={[
        "relative aspect-square cursor-pointer overflow-hidden rounded-lg border-2 transition-all",
        isActive ? "border-primary-container" : "border-transparent hover:border-outline-variant",
      ].join(" ")}
    >
      <Image fill sizes="112px" src={image.src} alt="" className="object-cover" />
    </button>
  );
}

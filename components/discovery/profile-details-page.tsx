"use client";

import { useState } from "react";

import { FloatingActionBar } from "./profile-details-actions";
import { ProfileInfoCards } from "./profile-details-cards";
import { gallery, type ProfileGalleryImage } from "./profile-details-data";
import { ProfileDetailsGallery } from "./profile-details-gallery";

export function ProfileDetailsPage() {
  const [activeImage, setActiveImage] = useState<ProfileGalleryImage>(gallery[0]);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <main className="mx-auto max-w-[1200px] px-4 pt-24 pb-40 sm:px-5 md:px-10 md:pb-36">
        <div className="grid grid-cols-12 items-start gap-8">
          <ProfileDetailsGallery
            activeImage={activeImage}
            onSelectImage={setActiveImage}
          />
          <ProfileInfoCards />
        </div>
      </main>
      <FloatingActionBar />
    </div>
  );
}

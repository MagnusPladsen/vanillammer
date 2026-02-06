"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LightboxImage = {
  src: string;
  alt: string;
  title: string;
  location: string;
};

type ProjectsLightboxProps = {
  open: boolean;
  image: LightboxImage | null;
  onClose: () => void;
  closeLabel: string;
};

export function ProjectsLightbox({ open, image, onClose, closeLabel }: ProjectsLightboxProps) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10"
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-cream-50 shadow-2xl ring-1 ring-gold-200/70"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-[420px] w-full">
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-2 border-t border-border/70 px-6 py-4">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500">{image.location}</p>
          <h3 className="text-2xl font-semibold text-charcoal-900">{image.title}</h3>
        </div>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute right-4 top-4 border-cream-50/70 bg-cream-50/90",
            "hover:bg-white"
          )}
          onClick={onClose}
          aria-label={closeLabel}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

"use client";

import Script from "next/script";
import { useTranslation } from "react-i18next";
import { featuredInstagram } from "@/lib/data";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function InstagramGrid() {
  const { t } = useTranslation();
  const isProfileEmbed = featuredInstagram.length === 1;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 reveal">
      <SectionHeading
        eyebrow={t("home.instagram.eyebrow")}
        title={t("home.instagram.title")}
        subtitle={t("home.instagram.subtitle")}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featuredInstagram.map((url) => (
          <blockquote
            key={url}
            className={`instagram-media m-0 w-full rounded-lg border border-border/80 bg-white/80 p-3 ${
              isProfileEmbed ? "md:col-span-3" : ""
            }`}
            data-instgrm-permalink={url}
            data-instgrm-version="14"
          >
            <a href={url} className="text-sm text-muted-foreground">
              {t("home.instagram.viewLink")}
            </a>
          </blockquote>
        ))}
      </div>
      <noscript>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`fallback-${index}`}
              className="h-40 rounded-lg border border-border bg-gradient-to-br from-cream-50 via-white to-stone-200"
            />
          ))}
        </div>
      </noscript>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  );
}

"use client";

import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function AboutStory() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 reveal">
      <SectionHeading
        eyebrow={t("about.title")}
        title={t("about.story.title")}
        subtitle={t("about.story.body")}
      />
      <div className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {t("about.story.body2")}
      </div>
    </section>
  );
}

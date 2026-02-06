"use client";

import { useTranslation } from "react-i18next";

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 reveal">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-3xl font-semibold text-charcoal-900 md:text-4xl">
            {t("site.name")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            {t("home.intro")}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-white/70 p-6 text-sm text-muted-foreground hover:border-gold-200 transition-colors">
          <p className="font-semibold uppercase tracking-[0.2em] text-charcoal-900">
            {t("contact.details.location")}
          </p>
          <div className="mt-4 h-px w-full gold-divider" />
          <p className="mt-4">
            {t("site.description")}
          </p>
        </div>
      </div>
    </section>
  );
}

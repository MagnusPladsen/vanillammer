"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "no";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80"
          alt={t("images.heroAlt")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end gap-6 px-6 pb-20 pt-32 text-cream-50 md:min-h-[82vh]">
        <p className="max-w-xl text-xs font-semibold uppercase tracking-[0.4em] text-gold-200 reveal reveal-delay-1">
          {t("site.tagline")}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl reveal reveal-delay-2">
          {t("home.hero.title")}
        </h1>
        <p className="max-w-xl text-base text-cream-50/90 md:text-lg reveal reveal-delay-3">
          {t("home.hero.subtitle")}
        </p>
        <div className="flex flex-wrap items-center gap-4 reveal reveal-delay-4">
          <Button asChild className="bg-gold-500 text-charcoal-900 hover:bg-gold-200">
            <Link href={`/${locale}/contact`}>{t("cta.quote")}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gold-200/80 bg-cream-50/95 text-charcoal-900 hover:bg-cream-50"
          >
            <Link href={`/${locale}/projects`}>{t("cta.viewProjects")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

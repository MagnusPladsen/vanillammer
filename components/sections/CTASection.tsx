"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "no";

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 reveal">
      <div className="rounded-lg border border-border bg-white/80 p-10 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-900 md:text-4xl">
              {t("home.cta.title")}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              {t("home.cta.subtitle")}
            </p>
          </div>
          <Button asChild className="bg-gold-500 text-charcoal-900 hover:bg-gold-200">
            <Link href={`/${locale}/contact`}>{t("cta.quote")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

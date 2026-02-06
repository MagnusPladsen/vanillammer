"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "no";

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
        404
      </p>
      <h1 className="text-3xl font-semibold text-charcoal-900 md:text-4xl">
        {t("notFound.title")}
      </h1>
      <p className="text-sm text-muted-foreground md:text-base">
        {t("notFound.subtitle")}
      </p>
      <Button asChild className="bg-charcoal-900 text-cream-50">
        <Link href={`/${locale}`}>{t("cta.backHome")}</Link>
      </Button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/icons/Logo";

export function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "no";

  return (
    <footer className="border-t border-border/60 bg-cream-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo className="h-10 w-auto text-charcoal-900" />
          <p className="max-w-sm text-sm text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold uppercase tracking-[0.2em] text-charcoal-900">{t("nav.contact")}</p>
          <p>{t("contact.details.email")}</p>
          <p>{t("contact.details.phone")}</p>
          <p>{t("contact.details.location")}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold uppercase tracking-[0.2em] text-charcoal-900">{t("nav.services")}</p>
          <Link href={`/${locale}/services`} className="block text-muted-foreground hover:text-charcoal-900">
            {t("cta.viewServices")}
          </Link>
          <Link href={`/${locale}/projects`} className="block text-muted-foreground hover:text-charcoal-900">
            {t("cta.viewProjects")}
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}

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
          <div className="group inline-flex items-center gap-3">
            <Logo className="h-10 w-auto text-gold-500 drop-shadow-[0_6px_14px_rgba(231,181,31,0.25)]" />
            <span className="relative font-serif text-lg tracking-[0.2em] uppercase text-charcoal-900">
              <span className="relative z-10">Vanillammer</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] bg-gold-500 opacity-100" />
              <span className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-full bg-gold-200/35 opacity-100 blur-xl" />
            </span>
          </div>
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

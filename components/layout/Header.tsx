"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = ["home", "about", "services", "projects", "contact"] as const;

export function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "no";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-cream-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3 text-charcoal-900"
        >
          <Logo className="h-10 w-auto text-gold-500 drop-shadow-[0_6px_14px_rgba(231,181,31,0.25)]" />
          <span className="relative font-serif text-lg tracking-[0.2em] uppercase text-charcoal-900">
            <span className="relative z-10">Vanillammer</span>
            <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] bg-gold-500 opacity-100" />
            <span className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-full bg-gold-200/35 opacity-100 blur-xl" />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.14em] text-charcoal-900 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "home" ? `/${locale}` : `/${locale}/${item}`}
              className={cn(
                "cursor-pointer transition-colors hover:text-gold-500 hover:underline hover:underline-offset-8",
                pathname === `/${locale}/${item}` ||
                  (item === "home" && pathname === `/${locale}`)
                  ? "text-gold-500"
                  : "text-charcoal-900"
              )}
            >
              {t(`nav.${item}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Button asChild className="bg-gold-500 text-charcoal-900 hover:bg-gold-200">
            <Link href={`/${locale}/contact`}>{t("cta.quote")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="border-border">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-cream-50"
              closeLabel={t("accessibility.close")}
            >
              <SheetHeader>
                <SheetTitle className="text-left font-serif text-2xl">
                  {t("site.name")}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.14em]">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "home" ? `/${locale}` : `/${locale}/${item}`}
                    className="text-charcoal-900 hover:text-gold-500"
                  >
                    {t(`nav.${item}`)}
                  </Link>
                ))}
              </div>
              <Button asChild className="mt-8 w-full bg-gold-500 text-charcoal-900 hover:bg-gold-200">
                <Link href={`/${locale}/contact`}>{t("cta.quote")}</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { locales } from "@/lib/i18n/config";

function getSwitchedPath(pathname: string, targetLocale: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}`;
  }
  const [, ...rest] = segments;
  const restPath = rest.join("/");
  return restPath ? `/${targetLocale}/${restPath}` : `/${targetLocale}`;
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const current = pathname.split("/")[1] || "no";

  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-900">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getSwitchedPath(pathname, locale)}
          className={cn(
            "transition-colors",
            current === locale ? "text-charcoal-900" : "text-stone-400 hover:text-charcoal-900"
          )}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

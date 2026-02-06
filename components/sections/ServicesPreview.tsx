"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { serviceIcons } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { usePathname } from "next/navigation";

export function ServicesPreview() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "no";
  const services = t("services.items", { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 reveal">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow={t("services.title")}
          title={t("home.services.title")}
          subtitle={t("home.services.subtitle")}
        />
        <Button asChild variant="outline" className="border-border">
          <Link href={`/${locale}/services`}>{t("cta.viewServices")}</Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.slice(0, 3).map((service) => {
          const Icon = serviceIcons[service.id];
          return (
            <Card
              key={service.id}
              className="cursor-pointer border-border/80 bg-white/80 p-6 shadow-sm hover-lift hover-gold hover-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gold-200 bg-cream-50 text-gold-500">
                {Icon ? <Icon className="h-6 w-6" /> : null}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-charcoal-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {service.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

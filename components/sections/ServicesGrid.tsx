"use client";

import { useTranslation } from "react-i18next";
import { serviceIcons } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ServicesGrid() {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 reveal">
      <SectionHeading
        eyebrow={t("services.title")}
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = serviceIcons[service.id];
          return (
            <Card
              key={service.id}
              className="cursor-pointer border-border/80 bg-white/80 p-6 hover-lift hover-gold hover-glow"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gold-200 bg-cream-50 text-gold-500">
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {service.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

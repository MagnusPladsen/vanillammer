"use client";

import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ValuesGrid() {
  const { t } = useTranslation();
  const values = t("about.values.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20 reveal">
      <SectionHeading title={t("about.values.title")} />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {values.map((value, index) => (
          <Card
            key={index}
            className="border-border/80 bg-white/80 p-6 transition-all hover:-translate-y-1 hover:border-gold-200 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-charcoal-900">
              {value.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {value.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

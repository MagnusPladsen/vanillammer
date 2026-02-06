"use client";

import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function TeamSection() {
  const { t } = useTranslation();
  const members = t("about.team.members", { returnObjects: true }) as Array<{
    name: string;
    role: string;
  }>;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 reveal">
      <SectionHeading title={t("about.team.title")} />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {members.map((member) => (
          <Card
            key={member.name}
            className="border-border/80 bg-white/80 p-6 transition-all hover:-translate-y-1 hover:border-gold-200 hover:shadow-lg"
          >
            <div className="h-36 rounded-md bg-gradient-to-br from-cream-50 to-stone-200" />
            <h3 className="mt-4 text-lg font-semibold text-charcoal-900">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

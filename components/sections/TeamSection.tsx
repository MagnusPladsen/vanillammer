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
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {members.map((member) => (
          <Card
            key={member.name}
            className="group card-lux cursor-pointer border-border/80 p-6 hover-lift hover-gold hover-glow"
          >
            <div className="flex h-36 items-center justify-center rounded-md bg-gradient-to-br from-cream-50 to-stone-200">
              <svg viewBox="0 0 64 64" className="h-20 w-20 text-gold-500" aria-hidden="true">
                <circle cx="32" cy="20" r="10" fill="currentColor" />
                <path
                  d="M16 54c0-8.8 7.2-16 16-16s16 7.2 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M24 34h16"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-charcoal-900 transition-colors group-hover:text-gold-500">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { projectImages } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { usePathname } from "next/navigation";

export function ProjectsPreview() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "no";
  const projects = t("projects.items", { returnObjects: true }) as Array<{
    id: string;
    title: string;
    location: string;
  }>;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 reveal">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow={t("projects.title")}
          title={t("home.projects.title")}
          subtitle={t("home.projects.subtitle")}
        />
        <Button asChild variant="outline" className="border-border">
          <Link href={`/${locale}/projects`}>{t("cta.viewProjects")}</Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => {
          const image = projectImages.find((item) => item.id === project.id);
          return (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/80 bg-white/80 transition-all hover:-translate-y-1 hover:border-gold-200 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                {image ? (
                  <Image
                    src={image.src}
                    alt={t(`images.projects.${project.id}`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : null}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.location}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

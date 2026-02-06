"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { projectImages } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProjectsLightbox } from "@/components/sections/ProjectsLightbox";

export function ProjectsGrid() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as Array<{
    id: string;
    title: string;
    location: string;
  }>;
  const [activeId, setActiveId] = useState<string | null>(null);

  const lightboxImage = useMemo(() => {
    if (!activeId) return null;
    const project = projects.find((item) => item.id === activeId);
    const image = projectImages.find((item) => item.id === activeId);
    if (!project || !image) return null;
    return {
      src: image.src,
      alt: t(`images.projects.${project.id}`),
      title: project.title,
      location: project.location,
    };
  }, [activeId, projects, t]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 reveal">
      <SectionHeading
        eyebrow={t("projects.title")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => {
          const image = projectImages.find((item) => item.id === project.id);
          return (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden border-border/80 bg-white/80 transition-all hover:-translate-y-1 hover:border-gold-200 hover:shadow-lg"
              onClick={() => setActiveId(project.id)}
              role="button"
              aria-label={project.title}
            >
              <div className="relative h-56 w-full">
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
                <h3 className="text-lg font-semibold text-charcoal-900">
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
      <ProjectsLightbox
        open={Boolean(activeId)}
        image={lightboxImage}
        onClose={() => setActiveId(null)}
        closeLabel={t("accessibility.close")}
      />
    </section>
  );
}

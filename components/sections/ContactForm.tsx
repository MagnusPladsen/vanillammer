"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ContactForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 reveal">
      <SectionHeading
        eyebrow={t("nav.contact")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />
      <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <Card className="card-lux border-border/80 p-6 hover-lift hover-gold">
          {submitted ? (
            <div className="rounded-md border border-gold-200 bg-cream-50 p-6 text-sm text-charcoal-900">
              {t("contact.form.success")}
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label className="text-sm font-medium">{t("contact.form.name.label")}</label>
                <Input
                  className="mt-2"
                  placeholder={t("contact.form.name.placeholder")}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">{t("contact.form.email.label")}</label>
                <Input
                  type="email"
                  className="mt-2"
                  placeholder={t("contact.form.email.placeholder")}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">{t("contact.form.phone.label")}</label>
                <Input
                  className="mt-2"
                  placeholder={t("contact.form.phone.placeholder")}
                />
              </div>
              <div>
                <label className="text-sm font-medium">{t("contact.form.message.label")}</label>
                <Textarea
                  className="mt-2 min-h-[140px]"
                  placeholder={t("contact.form.message.placeholder")}
                  required
                />
              </div>
              <Button type="submit" className="btn-gold cursor-pointer">
                {t("contact.form.submit")}
              </Button>
            </form>
          )}
        </Card>
        <div className="space-y-6">
          <Card className="card-lux border-border/80 p-6 hover-lift hover-gold">
            <h3 className="text-lg font-semibold text-charcoal-900">
              {t("contact.details.title")}
            </h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>{t("contact.details.email")}</p>
              <p>{t("contact.details.phone")}</p>
              <p>{t("contact.details.location")}</p>
            </div>
          </Card>
          <Card className="overflow-hidden border-border/80 bg-white/80">
            <iframe
              title={t("contact.mapTitle")}
              src="https://www.google.com/maps?q=Lillehammer,%20Norway&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { I18nProvider } from "@/lib/i18n/client";
import { isLocale, locales } from "@/lib/i18n/config";
import { getResources, getServerTranslation } from "@/lib/i18n/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { t, locale } = await getServerTranslation(params.locale);
  const baseUrl = new URL("https://vanillammer.no");

  return {
    metadataBase: baseUrl,
    title: t("seo.title"),
    description: t("seo.description"),
    openGraph: {
      title: t("seo.title"),
      description: t("seo.description"),
      url: `/${locale}`,
      type: "website",
      locale: locale === "no" ? "nb_NO" : "en_US",
      images: [
        {
          url: "/opengraph-image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("seo.title"),
      description: t("seo.description"),
      images: ["/opengraph-image"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        no: "/no",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: requestedLocale } = await params;

  if (!isLocale(requestedLocale)) {
    notFound();
  }

  const resources = getResources();
  const { t, locale } = await getServerTranslation(requestedLocale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: t("site.name"),
    description: t("site.description"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lillehammer",
      addressCountry: "NO",
    },
    url: `https://vanillammer.no/${locale}`,
    telephone: "+47 123 45 678",
    email: "post@vanillammer.no",
  };

  return (
    <I18nProvider locale={locale} resources={resources}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </I18nProvider>
  );
}

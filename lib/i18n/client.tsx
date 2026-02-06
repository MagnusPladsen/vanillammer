"use client";

import { useState } from "react";
import { createInstance } from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale } from "./config";

type I18nProviderProps = {
  locale: string;
  resources: Record<string, { translation: Record<string, unknown> }>;
  children: React.ReactNode;
};

export function I18nProvider({ locale, resources, children }: I18nProviderProps) {
  const [i18n] = useState(() => {
    const instance = createInstance();
    instance.use(initReactI18next).init({
      resources,
      lng: locale,
      fallbackLng: defaultLocale,
      debug: false,
      returnNull: false,
      returnEmptyString: false,
      saveMissing: false,
      interpolation: {
        escapeValue: false,
      },
    });
    return instance;
  });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

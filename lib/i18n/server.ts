import { createInstance } from "i18next";
import { defaultLocale, isLocale } from "./config";
import { resources } from "./resources";

export async function getServerTranslation(locale: string) {
  const resolvedLocale = isLocale(locale) ? locale : defaultLocale;
  const instance = createInstance();
  await instance.init({
    resources,
    lng: resolvedLocale,
    fallbackLng: defaultLocale,
    debug: false,
    returnNull: false,
    returnEmptyString: false,
    saveMissing: false,
    interpolation: {
      escapeValue: false,
    },
  });

  return {
    t: instance.t.bind(instance),
    locale: resolvedLocale,
  };
}

export function getResources() {
  return resources;
}

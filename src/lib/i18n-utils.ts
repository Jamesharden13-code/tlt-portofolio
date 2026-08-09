// import { defaultLanguage, languages, type LanguageCode } from '@/i18n/ui';
// import { getRelativeLocaleUrl } from 'astro:i18n';

// export type LanguageSelectorItem = {
//   code: string;
//   name: string;
//   flag: string;
//   targetUrl: string;
// };

// export function prepareLanguagesForSelector(
//   currentPathname: string,
//   currentLocale: LanguageCode
// ): Array<LanguageSelectorItem> {
//   let basePathForLinks = currentPathname;

//   // Adjust basePathForLinks if currentLocale is not the default language
//   // and the pathname starts with the locale prefix.
//   if (currentLocale !== defaultLanguage) {
//     const prefix = `/${currentLocale}`;
//     if (currentPathname.startsWith(prefix)) {
//       basePathForLinks = currentPathname.substring(prefix.length) || '/';
//     }
//   }

//   return Object.keys(languages).map((langCodeStr) => {
//     const langCode = langCodeStr as LanguageCode;
//     return {
//       code: langCode,
//       name: languages[langCode].name,
//       flag: languages[langCode].flag,
//       targetUrl: getRelativeLocaleUrl(langCode, basePathForLinks),
//     };
//   });
// }
import { defaultLanguage, languages, type LanguageCode } from '@/i18n/ui';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type LanguageSelectorItem = {
  code: string;
  name: string;
  flag: string;
  targetUrl: string;
  href: string;
};

export function prepareLanguagesForSelector(
  currentPathname: string,
  currentLocale: LanguageCode
): Array<LanguageSelectorItem> {
  let basePathForLinks = currentPathname;

  // 1. Extraire le chemin de base sans le préfixe de langue (ex: '/en')
  if (currentLocale !== defaultLanguage) {
    const prefix = `/${currentLocale}`;
    if (currentPathname.startsWith(prefix)) {
      basePathForLinks = currentPathname.substring(prefix.length) || '/';
    }
  }

  // 2. Nettoyage du slash de fin pour faire une comparaison propre
  const cleanPath = basePathForLinks.replace(/\/$/, '') || '/';

  return Object.keys(languages).map((langCodeStr) => {
    const langCode = langCodeStr as LanguageCode;
    let finalPath = cleanPath;

    // 3. Traduction explicite pour les routes asymétriques
    if (langCode === 'en' && cleanPath === '/experience-formation') {
      finalPath = '/experience-education';
    } else if (langCode === 'fr' && cleanPath === '/experience-education') {
      finalPath = '/experience-formation';
    }

    return {
      code: langCode,
      name: languages[langCode].name,
      flag: languages[langCode].flag,
      targetUrl: getRelativeLocaleUrl(langCode, finalPath),
      href: getRelativeLocaleUrl(langCode, finalPath),
    };
  });
}
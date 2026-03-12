import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fi from './locales/fi.json';
import ja from './locales/ja.json';
import de from './locales/de.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import pt from './locales/pt.json';
import sv from './locales/sv.json';
import no from './locales/no.json';
import da from './locales/da.json';
import nl from './locales/nl.json';
import ko from './locales/ko.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';
import tr from './locales/tr.json';
import zh from './locales/zh.json';
import hi from './locales/hi.json';
import pl from './locales/pl.json';
import th from './locales/th.json';
import vi from './locales/vi.json';
import cs from './locales/cs.json';

const resources = {
    en: { translation: en },
    fi: { translation: fi },
    ja: { translation: ja },
    de: { translation: de },
    es: { translation: es },
    fr: { translation: fr },
    it: { translation: it },
    pt: { translation: pt },
    sv: { translation: sv },
    no: { translation: no },
    da: { translation: da },
    nl: { translation: nl },
    ko: { translation: ko },
    ru: { translation: ru },
    ar: { translation: ar },
    tr: { translation: tr },
    zh: { translation: zh },
    hi: { translation: hi },
    pl: { translation: pl },
    th: { translation: th },
    vi: { translation: vi },
    cs: { translation: cs }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;

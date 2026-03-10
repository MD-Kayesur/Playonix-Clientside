import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const LANGUAGES = [
  { code: "en", label: "English", flag: "gb" },
  { code: "fi", label: "Suomi", flag: "fi" },
  { code: "ja", label: "日本語", flag: "jp" },
  { code: "de", label: "Deutsch", flag: "de" },
  { code: "es", label: "Español", flag: "es" },
  { code: "fr", label: "Français", flag: "fr" },
  { code: "it", label: "Italiano", flag: "it" },
  { code: "pt", label: "Português", flag: "pt" },
  { code: "sv", label: "Svenska", flag: "se" },
  { code: "no", label: "Norsk", flag: "no" },
  { code: "da", label: "Dansk", flag: "dk" },
  { code: "nl", label: "Nederlands", flag: "nl" },
  { code: "ko", label: "한국어", flag: "kr" },
  { code: "ru", label: "Русский", flag: "ru" },
  { code: "ar", label: "العربية", flag: "sa" },
  { code: "tr", label: "Türkçe", flag: "tr" },
  { code: "zh", label: "中文", flag: "cn" },
];

const GoogleTranslate: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("app_language", lang);
  };

  // ✅ Initialize IP detection if no language is set
  useEffect(() => {
    const storedLang = localStorage.getItem("app_language") || localStorage.getItem("i18nextLng");

    if (!storedLang) {
      const alreadyAttempted = sessionStorage.getItem("ip_detection_attempted");
      if (alreadyAttempted) return;

      const detectLanguage = (url: string, isFallback = false) => {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            const country = data.country || data.country_code;
            const countryLanguageMap: Record<string, string> = {
              FI: "fi",
              JP: "ja",
            };

            const lang = countryLanguageMap[country] || "en";
            sessionStorage.setItem("ip_detection_attempted", "true");

            if (lang !== "en") {
              changeLanguage(lang);
            }
          })
          .catch(err => {
            console.error(`IP detection failed for ${url}:`, err);
            if (!isFallback) {
              detectLanguage("https://ipwho.is/json/", true);
            } else {
              sessionStorage.setItem("ip_detection_attempted", "true");
            }
          });
      };
      detectLanguage("https://ipapi.co/json/");
    }
  }, []);

  const language = i18n.language.split('-')[0]; // Handle cases like 'en-US'
  const selectedLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => navigate("/languages")}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
      >
        <img
          src={`https://flagcdn.com/w20/${selectedLang.flag}.png`}
          width={20}
          height={15}
          alt={selectedLang.label}
          className="rounded-sm"
        />
        <span className="md:hidden uppercase">{selectedLang.code}</span>
        <span className="hidden md:inline">{selectedLang.label}</span>
      </button>
    </div>
  );
};

export default GoogleTranslate;


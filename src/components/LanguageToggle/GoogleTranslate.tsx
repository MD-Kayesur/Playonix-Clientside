import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LANGUAGES = [
  { code: "en", label: "English (English)", flag: "gb" },
  { code: "de", label: "Deutsch (German)", flag: "de" },
  { code: "es", label: "Español (Spanish)", flag: "es" },
  { code: "he", label: "עברית (Hebrew)", flag: "il" },
  { code: "id", label: "Bahasa Indonesia (Indonesian)", flag: "id" },
  { code: "it", label: "Italiano (Italian)", flag: "it" },
  { code: "ja", label: "日本語 (Japanese)", flag: "jp" },
  { code: "ko", label: "한국어 (Korean)", flag: "kr" },
  { code: "pl", label: "Polski (Polish)", flag: "pl" },
  { code: "pt", label: "Português (Portuguese)", flag: "pt" },
  { code: "pt-BR", label: "Português Brasileiro (BR Portuguese)", flag: "br" },
  { code: "ro", label: "Română (Romanian)", flag: "ro" },
  { code: "ru", label: "русский (Russian)", flag: "ru" },
  { code: "sv", label: "Svenska (Swedish)", flag: "se" },
  { code: "th", label: "ภาษาไทย (Thai)", flag: "th" },
  { code: "tr", label: "Türkçe (Turkish)", flag: "tr" },
  { code: "uk", label: "українська (Ukrainian)", flag: "ua" },
  { code: "vi", label: "Tiếng Việt (Vietnamese)", flag: "vi" },
  { code: "zh-CN", label: "汉语 (Chinese - Simplified)", flag: "cn" },
  { code: "fi", label: "Suomi (Finland)", flag: "fi" },
];


const GoogleTranslate: React.FC = () => {
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  // Helper to get initial language from storage/cookie
  const getDefaultLanguage = () => {
    const cookieMatch = document.cookie.match(/googtrans=\/en\/([\w-]+)/);
    const storedLang = localStorage.getItem("app_language");
    return cookieMatch ? cookieMatch[1] : (storedLang || "en");
  };

  const changeLanguage = (lang: string) => {
    localStorage.setItem("app_language", lang);
    setLanguage(lang);
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${lang};path=/;domain=${domain}`;
    document.cookie = `googtrans=/en/${lang};path=/;`;
    window.location.reload();
  };

  // ✅ Initialize language
  useEffect(() => {
    const detectedLang = getDefaultLanguage();
    setLanguage(detectedLang);

    // If no language is set at all (first time user), trigger IP detection
    const cookieMatch = document.cookie.match(/googtrans=\/en\/([\w-]+)/);
    const storedLang = localStorage.getItem("app_language");

    if (!cookieMatch && !storedLang) {
      const alreadyAttempted = sessionStorage.getItem("ip_detection_attempted");
      if (alreadyAttempted && sessionStorage.getItem("detected_lang") !== "error") return;

      const detectLanguage = (url: string, isFallback = false) => {
        console.log(`Fetching IP data from: ${url}`);
        fetch(url)
          .then(res => res.json())
          .then(data => {
            console.log("IP Response Data:", data);
            const country = data.country || data.country_code;
            console.log("Detected Country Code:", country);

            const countryLanguageMap: Record<string, string> = {
              BD: "bn", FR: "fr", DE: "de", IT: "it", ES: "es",
              PT: "pt", IN: "hi", BR: "pt-BR", RU: "ru", CN: "zh-CN",
              JP: "ja", KR: "ko", MX: "es", AR: "es", CO: "es",
              IL: "he", ID: "id", PL: "pl", RO: "ro", SE: "sv",
              TH: "th", TR: "tr", UA: "uk", VN: "vi", FI: "fi"
            };

            const lang = countryLanguageMap[country];
            sessionStorage.setItem("ip_detection_attempted", "true");
            sessionStorage.removeItem("detected_lang");

            if (lang && lang !== "en") {
              changeLanguage(lang);
            }
          })
          .catch(err => {
            console.error(`IP detection failed for ${url}:`, err);
            if (!isFallback) {
              detectLanguage("https://ipwho.is/json/", true);
            } else {
              sessionStorage.setItem("ip_detection_attempted", "true");
              sessionStorage.setItem("detected_lang", "error");
            }
          });
      };
      detectLanguage("https://ipapi.co/json/");
    }
  }, []);

  // ✅ Load Google Translate script once
  useEffect(() => {
    if ((window as any).googleTranslateElementInit) return;
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGUAGES.map((l) => l.code).join(","),
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element",
      );
    };
  }, []);

  // ✅ Hide Google's default banner and tooltips
  useEffect(() => {
    const hideGoogleElements = () => {
      const iframe = document.querySelector("iframe.goog-te-banner-frame");
      const body = document.body;
      if (iframe instanceof HTMLIFrameElement) iframe.style.display = "none";
      if (body instanceof HTMLElement) body.style.top = "0px";
      const googleFrame = document.querySelector(".goog-te-gadget-icon");
      if (googleFrame instanceof HTMLElement) googleFrame.style.display = "none";
    };
    const interval = setInterval(hideGoogleElements, 300);
    setTimeout(() => clearInterval(interval), 5000);
    hideGoogleElements();
  }, []);

  const selectedLang = LANGUAGES.find((l) => l.code === language);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => navigate("/languages")}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
      >
        {selectedLang && (
          <img
            src={`https://flagcdn.com/w20/${selectedLang.flag}.png`}
            width={20}
            height={15}
            alt={selectedLang.label}
            className="rounded-sm"
          />
        )}
        <span className="md:hidden uppercase">{selectedLang?.code || "EN"}</span>
        <span className="hidden md:inline">{selectedLang?.label || "English"}</span>
      </button>

      <div
        id="google_translate_element"
        style={{ position: "absolute", left: "-9999px", top: 0 }}
      />
    </div>
  );
};

export default GoogleTranslate;

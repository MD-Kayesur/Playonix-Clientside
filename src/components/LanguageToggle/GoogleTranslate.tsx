import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LANGUAGES = [
  { code: "en", label: "English", flag: "gb" },
  { code: "fr", label: "French", flag: "fr" },
  { code: "es", label: "Español (Spanish)", flag: "es" },
  { code: "de", label: "Deutsch (German)", flag: "de" },
  { code: "it", label: "Italiano (Italian)", flag: "it" },
  { code: "pt", label: "Português (Portuguese)", flag: "pt" },
  { code: "bn", label: "Bangla", flag: "bd" },
  { code: "hi", label: "Hindi", flag: "in" },
  { code: "he", label: "עברית (Hebrew)", flag: "il" },
  { code: "id", label: "Bahasa Indonesia (Indonesian)", flag: "id" },
  { code: "ja", label: "日本語 (Japanese)", flag: "jp" },
  { code: "ko", label: "한국어 (Korean)", flag: "kr" },
  { code: "pl", label: "Polski (Polish)", flag: "pl" },
  { code: "pt-BR", label: "Português Brasileiro", flag: "br" },
  { code: "ro", label: "Română (Romanian)", flag: "ro" },
  { code: "ru", label: "русский (Russian)", flag: "ru" },
  { code: "sv", label: "Svenska (Swedish)", flag: "se" },
  { code: "th", label: "ภาษาไทย (Thai)", flag: "th" },
  { code: "tr", label: "Türkçe (Turkish)", flag: "tr" },
  { code: "uk", label: "українська (Ukrainian)", flag: "ua" },
  { code: "vi", label: "Tiếng Việt (Vietnamese)", flag: "vi" },
  { code: "zh-CN", label: "汉语 (Chinese – Simplified)", flag: "cn" },
  { code: "fi", label: "Suomi (Finland)", flag: "fi" },
];


const GoogleTranslate: React.FC = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const navigate = useNavigate();

  // ✅ Load Google Translate script once
  useEffect(() => {
    if ((window as any).googleTranslateElementInit) return;

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGUAGES.map((l) => l.code).join(","),
          layout: (window as any).google.translate.TranslateElement.InlineLayout
            .SIMPLE,
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

      if (iframe instanceof HTMLIFrameElement) {
        iframe.style.display = "none";
      }
      if (body instanceof HTMLElement) {
        body.style.top = "0px";
      }

      const googleFrame = document.querySelector(".goog-te-gadget-icon");
      if (googleFrame instanceof HTMLElement) {
        googleFrame.style.display = "none";
      }
    };

    const interval = setInterval(hideGoogleElements, 300);
    setTimeout(() => clearInterval(interval), 5000);
    hideGoogleElements();
  }, []);

  // ✅ Detect selected language from cookie or auto-detect via IP
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/([\w-]+)/);
    if (match) {
      setCurrentLang(match[1]);
    } else {
      // Check if we've already tried auto-detecting in this session to avoid infinite reloads
      const alreadyDetected = sessionStorage.getItem("detected_lang");
      if (alreadyDetected) return;

      // No cookie set, try auto-detecting via IP
      fetch("https://ipapi.co/json/")
        .then(res => res.json())
        .then(data => {
          const country = data.country;
          const countryLanguageMap: Record<string, string> = {
            BD: "bn", FR: "fr", DE: "de", IT: "it", ES: "es",
            PT: "pt", IN: "hi", BR: "pt-BR", RU: "ru", CN: "zh-CN",
            JP: "ja", KR: "ko", MX: "es", AR: "es", CO: "es",
            IL: "he", ID: "id", PL: "pl", RO: "ro", SE: "sv",
            TH: "th", TR: "tr", UA: "uk", VN: "vi", FI: "fi"
          };

          const lang = countryLanguageMap[country];
          sessionStorage.setItem("detected_lang", lang || "en");

          if (lang && lang !== "en") {
            const domain = window.location.hostname;
            document.cookie = `googtrans=/en/${lang};path=/;domain=${domain}`;
            document.cookie = `googtrans=/en/${lang};path=/;`;
            window.location.reload();
          }
        })
        .catch(err => {
          console.error("IP lookup failed", err);
          sessionStorage.setItem("detected_lang", "error");
        });
    }
  }, []);

  const selectedLang = LANGUAGES.find((l) => l.code === currentLang);

  return (
    <div className="relative inline-block text-left">
      {/* Selected Language Display ONLY - Clickable to go to Languages page */}
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

      {/* Hidden Google Element for Translation Engine */}
      <div
        id="google_translate_element"
        style={{ position: "absolute", left: "-9999px", top: 0 }}
      />
    </div>
  );
};

export default GoogleTranslate;

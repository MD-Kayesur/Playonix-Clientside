import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";


export const LANGUAGES = [
  { code: "en", label: "English", flag: "gb" },
  { code: "fr", label: "French", flag: "fr" },
  { code: "es", label: "Spanish", flag: "es" },
  { code: "de", label: "German", flag: "de" },
  { code: "it", label: "Italian", flag: "it" },
  { code: "pt", label: "Portuguese", flag: "pt" },
  { code: "bn", label: "Bangla", flag: "bd" },
  { code: "hi", label: "Hindi", flag: "in" },
  { code: "de", label: "Deutsch (German)", flag: "de" },
  { code: "es", label: "Español (Spanish)", flag: "es" },
  { code: "he", label: "עברית (Hebrew)", flag: "il" },
  { code: "id", label: "Bahasa Indonesia (Indonesian)", flag: "id" },
  { code: "it", label: "Italiano (Italian)", flag: "it" },
  { code: "ja", label: "日本語 (Japanese)", flag: "jp" },
  { code: "ko", label: "한국어 (Korean)", flag: "kr" },
  { code: "pl", label: "Polski (Polish)", flag: "pl" },
  { code: "pt", label: "Português (Portuguese)", flag: "pt" },
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


// English, Finnish, Portuguese, Spanish, Hindi 


const GoogleTranslate: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

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

  // ✅ Detect selected language from cookie
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    const lang = match ? match[1] : "en";
    setCurrentLang(lang);
  }, []);

  // ✅ Handle language switch
  const handleChange = (lang: string, e: any) => {
    if (e) {
      e.preventDefault();
    }
    setCurrentLang(lang);
    setOpen(false);

    document.cookie = `googtrans=/en/${lang};path=/;domain=${window.location.hostname}`;
    document.cookie = `googtrans=/en/${lang};path=/;`;
    window.location.reload();
  };

  const selectedLang = LANGUAGES.find((l) => l.code === currentLang);

  return (
    <div className="relative inline-block text-left">
      {/* Language Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm shadow-sm transition hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
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
        <span className="md:hidden uppercase">{selectedLang?.code}</span>
        <span className="hidden md:inline">{selectedLang?.label}</span>
        <FiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 z-50 mt-2 w-auto md:w-32 rounded-lg border border-gray-200 bg-white shadow-lg dark:bg-gray-800 dark:border-gray-600">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={(e) => handleChange(lang.code, e)}
                className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                <img
                  src={`https://flagcdn.com/w20/${lang.flag}.png`}
                  width={20}
                  height={15}
                  alt={lang.label}
                  className="rounded-sm"
                />
                <span className="md:hidden uppercase">{lang.code}</span>
                <span className="hidden md:inline">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Hidden Google Element */}
      <div
        id="google_translate_element"
        style={{ position: "absolute", left: "-9999px", top: 0 }}
      />
    </div>
  );
};

export default GoogleTranslate;

import { useEffect, useState } from "react";
import { LANGUAGES } from "@/components/LanguageToggle/GoogleTranslate";
import { Check } from "lucide-react";

const LanguagesPage = () => {
    const [currentLang, setCurrentLang] = useState("en");

    useEffect(() => {
        const match = document.cookie.match(/googtrans=\/en\/([\w-]+)/);
        const lang = match ? match[1] : "en";
        setCurrentLang(lang);
    }, []);

    const handleLanguageChange = (lang: string) => {
        document.cookie = `googtrans=/en/${lang};path=/;domain=${window.location.hostname}`;
        document.cookie = `googtrans=/en/${lang};path=/;`;
        window.location.reload();
    };

    return (
        <div className="min-h-full p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
            <div className=" mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Language Selection</h1>
                    <p className="text-muted-foreground">Select your preferred language for the platform.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group ${currentLang === lang.code
                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                                : "bg-card border-border hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.01]"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10 group-hover:border-primary/30 transition-colors">
                                    <img
                                        src={`https://flagcdn.com/w80/${lang.flag}.png`}
                                        alt={lang.label}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className={`font-bold ${currentLang === lang.code ? "text-primary-foreground" : "text-foreground"}`}>
                                        {lang.label}
                                    </p>
                                    <p className={`text-xs uppercase tracking-wider ${currentLang === lang.code ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                                        {lang.code}
                                    </p>
                                </div>
                            </div>
                            {currentLang === lang.code && (
                                <div className="bg-white/20 p-1 rounded-full">
                                    <Check size={18} className="text-primary-foreground" />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguagesPage;

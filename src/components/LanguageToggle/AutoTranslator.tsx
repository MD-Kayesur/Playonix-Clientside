import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const API_KEY = 'ec9d043fabd8de53bafc0883dd237ad7a31d0a9f';

const AutoTranslator: React.FC = () => {
    const { i18n } = useTranslation();

    const translateText = async (text: string, targetLang: string): Promise<string> => {
        if (!text.trim() || targetLang === 'en' || text.length < 2) return text;

        try {
            const response = await axios.post(
                `https://translation.googleapis.com/language/translate/v2`,
                {
                    q: text,
                    target: targetLang,
                    format: 'text',
                },
                {
                    params: { key: API_KEY },
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            return response.data.data.translations[0].translatedText;
        } catch (error) {
            console.error('Translation error:', error);
            return text;
        }
    };

    const translateElement = async (element: HTMLElement, targetLang: string): Promise<void> => {
        if (element.hasAttribute('data-no-translate')) return;
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE' || element.tagName === 'SVG') return;

        // ONLY translate direct text node children to avoid destroying icons/SVGs
        const nodes = Array.from(element.childNodes);
        for (const node of nodes) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
                const originalText = node.textContent.trim();
                // Avoid translating very short strings or pure numbers
                if (originalText.length > 1 && !/^\d+$/.test(originalText)) {
                    try {
                        const translated = await translateText(originalText, targetLang);
                        // Be extremely careful: only replace if the node is still there
                        if (node.parentNode === element) {
                            node.textContent = node.textContent.replace(originalText, translated);
                        }
                    } catch (e) {
                        // ignore
                    }
                }
            }
        }

        // Safe handling for inputs/placeholders
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            const placeholder = element.getAttribute('placeholder');
            if (placeholder?.trim()) {
                const translated = await translateText(placeholder, targetLang);
                element.setAttribute('placeholder', translated);
            }
        }
    };

    const translatePage = async (targetLang: string) => {
        if (targetLang === 'en') return;

        const elements = Array.from(document.querySelectorAll(
            'h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label, a, button, input[placeholder]'
        )) as HTMLElement[];

        const filteredElements = elements.filter(el => {
            if (el.innerText && el.innerText.length < 2) return false;
            if (el.hasAttribute('data-translated')) return false;
            return true;
        });

        if (filteredElements.length === 0) return;

        const batchSize = 10;
        for (let i = 0; i < filteredElements.length; i += batchSize) {
            const batch = filteredElements.slice(i, i + batchSize);
            await Promise.all(batch.map(async (el) => {
                await translateElement(el, targetLang);
                el.setAttribute('data-translated', 'true');
            }));
        }
    };

    useEffect(() => {
        const currentLang = i18n.language.split('-')[0];

        // Initial translation
        if (currentLang !== 'en') {
            setTimeout(() => translatePage(currentLang), 1000);
        }

        let debounceTimer: ReturnType<typeof setTimeout>;

        // Observe changes for dynamic content (scrolling, new items)
        const observer = new MutationObserver((mutations) => {
            const targetLang = i18n.language.split('-')[0];
            if (targetLang === 'en') return;

            let shouldTranslate = false;
            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    // Check if added nodes are actually elements we want to translate
                    const hasNewContent = Array.from(mutation.addedNodes).some(node =>
                        node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && node.textContent?.trim())
                    );
                    if (hasNewContent) {
                        shouldTranslate = true;
                        break;
                    }
                }
            }

            if (shouldTranslate) {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => translatePage(targetLang), 800);
            }
        });

        observer.observe(document.body, { childList: true, subtree: true, characterData: true });

        const handleLangChange = (lang: string) => {
            if (lang === 'en') {
                window.location.reload();
                return;
            }
            setTimeout(() => translatePage(lang), 500);
        };

        i18n.on('languageChanged', handleLangChange);

        return () => {
            observer.disconnect();
            i18n.off('languageChanged', handleLangChange);
        };
    }, [i18n]);

    return null;
};

export default AutoTranslator;

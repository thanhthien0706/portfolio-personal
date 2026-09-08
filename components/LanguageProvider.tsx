"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content, type Lang, type PortfolioContent } from "@/data/portfolio";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: PortfolioContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("vi");

  useEffect(() => {
    const saved = localStorage.getItem("ntt-lang") as Lang | null;
    if (saved === "vi" || saved === "en") {
      setLangState(saved);
      document.documentElement.setAttribute("lang", saved);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("ntt-lang", next);
    document.documentElement.setAttribute("lang", next);
  };

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

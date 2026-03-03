"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { OpcIcon } from "./OpcIcon";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  const otherLang = currentLang === "zh" ? "en" : "zh";
  const otherLangLabel = currentLang === "zh" ? "EN" : "中文";

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/members", label: t("nav.members") },
    { href: "/about", label: t("nav.about") },
  ];

  const switchLanguage = () => {
    i18n.changeLanguage(otherLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <OpcIcon />
            </div>
            <span className="text-black" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
              OPC Club
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-black font-medium"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={switchLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-black transition-colors"
              style={{ fontSize: "0.78rem", fontWeight: 500 }}
              title={`Switch to ${otherLangLabel}`}
            >
              <Globe className="w-3.5 h-3.5" />
              {otherLangLabel}
            </button>

            <Link
              href="/members"
              className="px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              {t("nav.join")}
            </Link>
          </div>

          {/* Mobile: lang switcher + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={switchLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-gray-400 transition-colors"
              style={{ fontSize: "0.72rem" }}
            >
              <Globe className="w-3 h-3" />
              {otherLangLabel}
            </button>
            <button
              className="p-2 text-gray-600 hover:text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-black bg-gray-100 font-medium"
                    : "text-gray-500 hover:text-black hover:bg-gray-50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/members"
                className="block w-full text-center px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.join")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Zap, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  const otherLang = currentLang === "zh" ? "en" : "zh";
  const otherLangLabel = currentLang === "zh" ? "EN" : "中文";

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/members", label: t("nav.members") },
    { to: "/about", label: t("nav.about") },
  ];

  const switchLanguage = () => {
    i18n.changeLanguage(otherLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Head */}
                <circle cx="9" cy="5.5" r="2.5" fill="white" />
                {/* Body / company base */}
                <path d="M3.5 16C3.5 12.134 6.134 9 9 9C11.866 9 14.5 12.134 14.5 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                {/* "1" accent line under feet — subtle company floor */}
                <line x1="6" y1="16" x2="12" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-black" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
              OPC Club
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors ${
                  location.pathname === link.to
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
            {/* Language switcher */}
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
              to="/members"
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
                key={link.to}
                to={link.to}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                  location.pathname === link.to
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
                to="/members"
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
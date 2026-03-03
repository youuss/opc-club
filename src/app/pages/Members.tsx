import { useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { MemberCard } from "../components/MemberCard";
import { members } from "../data/members";

// Category display keys for filter buttons
const CATEGORIES = [
  { key: "all", label: "categories.all" },
  { key: "tech", label: "categories.tech" },
  { key: "design", label: "categories.design" },
  { key: "content", label: "categories.content" },
  { key: "marketing", label: "categories.marketing" },
  { key: "education", label: "categories.education" },
  { key: "media", label: "categories.media" },
];

// Map i18n category key → Chinese data value
const categoryKeyToData: Record<string, string> = {
  tech: "技术开发",
  design: "设计创意",
  content: "内容创作",
  marketing: "营销咨询",
  education: "教育培训",
  media: "摄影视频",
};

export default function Members() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [activeCategoryKey, setActiveCategoryKey] = useState("all");

  const filtered = members.filter((m) => {
    const matchesCategory =
      activeCategoryKey === "all" ||
      m.category === categoryKeyToData[activeCategoryKey];
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      m.name.includes(q) ||
      m.company.toLowerCase().includes(q) ||
      m.tagline.includes(q) ||
      m.skills.some((s) => s.toLowerCase().includes(q)) ||
      m.location.includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-gray-400 mb-2"
            style={{ fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            {t("members.headerLabel")}
          </p>
          <h1
            className="text-white mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              whiteSpace: "pre-line",
            }}
          >
            {t("members.title")}
          </h1>
          <p className="text-gray-400 max-w-lg" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
            {t("members.subtitle")}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={t("common.searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-gray-100 rounded-full border-none outline-none text-gray-800 placeholder-gray-400"
                style={{ fontSize: "0.85rem" }}
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategoryKey(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                    activeCategoryKey === cat.key
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={{ fontSize: "0.8rem" }}
                >
                  {t(cat.label)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Members grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length > 0 ? (
          <>
            <p className="text-gray-400 mb-6" style={{ fontSize: "0.85rem" }}>
              {t("common.total", { count: filtered.length })}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-gray-400" />
            </div>
            <h3 className="text-gray-700 mb-2" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
              {t("common.noResults")}
            </h3>
            <p className="text-gray-400" style={{ fontSize: "0.9rem" }}>
              {t("common.noResultsHint")}
            </p>
          </div>
        )}
      </div>

      {/* Join CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gray-50 rounded-3xl p-10 text-center border border-gray-100">
          <h2
            className="text-gray-900 mb-3"
            style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            {t("members.joinCtaTitle")}
          </h2>
          <p
            className="text-gray-500 mb-6 max-w-md mx-auto"
            style={{ fontSize: "0.95rem" }}
          >
            {t("members.joinCtaSubtitle")}
          </p>
          <button
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            style={{ fontSize: "0.9rem" }}
          >
            {t("common.apply")}
          </button>
        </div>
      </div>
    </div>
  );
}

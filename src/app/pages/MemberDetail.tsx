import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  MapPin,
  ExternalLink,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { members } from "../data/members";

const categoryColors: Record<string, string> = {
  "技术开发": "bg-blue-50 text-blue-700 border-blue-100",
  "设计创意": "bg-purple-50 text-purple-700 border-purple-100",
  "内容创作": "bg-orange-50 text-orange-700 border-orange-100",
  "营销咨询": "bg-green-50 text-green-700 border-green-100",
  "教育培训": "bg-yellow-50 text-yellow-700 border-yellow-100",
  "摄影视频": "bg-pink-50 text-pink-700 border-pink-100",
};

const categoryI18nKey: Record<string, string> = {
  "技术开发": "categories.tech",
  "设计创意": "categories.design",
  "内容创作": "categories.content",
  "营销咨询": "categories.marketing",
  "教育培训": "categories.education",
  "摄影视频": "categories.media",
};

export default function MemberDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const member = members.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-700 mb-4">Member not found</h2>
          <Link to="/members" className="text-black underline">
            {t("common.backToMembers")}
          </Link>
        </div>
      </div>
    );
  }

  const colorClass = categoryColors[member.category] || "bg-gray-50 text-gray-700 border-gray-100";
  const categoryLabel = t(categoryI18nKey[member.category] || member.category);
  const otherMembers = members
    .filter((m) => m.id !== member.id && m.category === member.category)
    .slice(0, 3);

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Cover */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={member.cover}
          alt={member.company}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/members"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              style={{ fontSize: "0.85rem" }}
            >
              <ArrowLeft className="w-4 h-4" />
              {t("common.backToMembers")}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            {/* Profile header */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-md flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <h1
                        className="text-gray-900 mb-0.5"
                        style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.02em" }}
                      >
                        {member.name}
                      </h1>
                      <p className="text-gray-600 mb-2" style={{ fontSize: "0.95rem", fontWeight: 500 }}>
                        {member.company}
                      </p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${colorClass}`}
                        >
                          {categoryLabel}
                        </span>
                        <span
                          className="inline-flex items-center gap-1 text-gray-400"
                          style={{ fontSize: "0.8rem" }}
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          {member.location}
                        </span>
                        <span
                          className="inline-flex items-center gap-1 text-gray-400"
                          style={{ fontSize: "0.8rem" }}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          {t("common.founded")} {member.founded}
                        </span>
                      </div>
                    </div>
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
                        style={{ fontSize: "0.82rem" }}
                      >
                        {t("common.visitWebsite")}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-gray-600" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-2 mt-4">
                {member.social.twitter && (
                  <a
                    href={`https://twitter.com/${member.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${member.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={`https://github.com/${member.social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-600" />
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={`https://instagram.com/${member.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-gray-600" />
                  </a>
                )}
                {member.social.wechat && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full">
                    <MessageCircle className="w-3.5 h-3.5 text-gray-600" />
                    <span className="text-gray-600" style={{ fontSize: "0.78rem" }}>
                      {member.social.wechat}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
              <h3 className="text-gray-900 mb-4" style={{ fontSize: "1rem", fontWeight: 700 }}>
                {t("common.skills")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full"
                    style={{ fontSize: "0.82rem" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
              <h3 className="text-gray-900 mb-4" style={{ fontSize: "1rem", fontWeight: 700 }}>
                {t("common.services")}
              </h3>
              <div className="space-y-2">
                {member.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0"
                  >
                    <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-700" style={{ fontSize: "0.9rem" }}>
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-gray-900 mb-4" style={{ fontSize: "1rem", fontWeight: 700 }}>
                {t("common.achievements")}
              </h3>
              <div className="space-y-3">
                {member.achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span style={{ fontSize: "0.7rem" }}>🏆</span>
                    </div>
                    <p className="text-gray-600" style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            {/* Stats card */}
            <div className="bg-black text-white rounded-2xl p-6 mb-4">
              <h3
                className="text-white mb-4"
                style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 0.9 }}
              >
                {t("common.stats")}
              </h3>
              <div className="space-y-4">
                {member.revenue && (
                  <div>
                    <p
                      className="text-gray-400 mb-1"
                      style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {t("memberDetail.revenue")}
                    </p>
                    <p className="text-white" style={{ fontSize: "1.5rem", fontWeight: 800 }}>
                      {member.revenue}
                    </p>
                  </div>
                )}
                {member.clients !== undefined && (
                  <div>
                    <p
                      className="text-gray-400 mb-1"
                      style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      {t("memberDetail.clients")}
                    </p>
                    <p className="text-white" style={{ fontSize: "1.5rem", fontWeight: 800 }}>
                      {member.clients.toLocaleString()}+
                    </p>
                  </div>
                )}
                <div>
                  <p
                    className="text-gray-400 mb-1"
                    style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                  >
                    {t("memberDetail.founded")}
                  </p>
                  <p className="text-white" style={{ fontSize: "1.5rem", fontWeight: 800 }}>
                    {member.founded}
                  </p>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-4 border border-gray-100">
              <p className="text-gray-700 italic" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                "{member.tagline}"
              </p>
            </div>

            {/* Similar members */}
            {otherMembers.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-gray-900 mb-4" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                  {t("common.similarMembers")}
                </h3>
                <div className="space-y-3">
                  {otherMembers.map((m) => (
                    <Link
                      key={m.id}
                      to={`/members/${m.id}`}
                      className="flex items-center gap-3 group"
                    >
                      <img
                        src={m.avatar}
                        alt={m.name}
                        className="w-9 h-9 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-gray-800 group-hover:text-black transition-colors truncate"
                          style={{ fontSize: "0.82rem", fontWeight: 600 }}
                        >
                          {m.name}
                        </p>
                        <p className="text-gray-400 truncate" style={{ fontSize: "0.75rem" }}>
                          {m.company}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
}

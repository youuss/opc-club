"use client";

import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Member } from "../data/members";

interface MemberCardProps {
  member: Member;
}

const categoryColorMap: Record<string, string> = {
  "技术开发": "bg-blue-50 text-blue-700",
  "设计创意": "bg-purple-50 text-purple-700",
  "内容创作": "bg-orange-50 text-orange-700",
  "营销咨询": "bg-green-50 text-green-700",
  "教育培训": "bg-yellow-50 text-yellow-700",
  "摄影视频": "bg-pink-50 text-pink-700",
};

// Map category key to i18n key
const categoryI18nKey: Record<string, string> = {
  "技术开发": "categories.tech",
  "设计创意": "categories.design",
  "内容创作": "categories.content",
  "营销咨询": "categories.marketing",
  "教育培训": "categories.education",
  "摄影视频": "categories.media",
};

export function MemberCard({ member }: MemberCardProps) {
  const { t } = useTranslation();
  const colorClass = categoryColorMap[member.category] || "bg-gray-50 text-gray-700";
  const categoryLabel = t(categoryI18nKey[member.category] || member.category);

  return (
    <Link
      href={`/members/${member.id}`}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Cover image */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={member.cover}
          alt={member.company}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Avatar + name */}
        <div className="flex items-start gap-3 -mt-10 mb-4">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-14 h-14 rounded-xl object-cover border-2 border-white shadow-md flex-shrink-0"
          />
          <div className="pt-6">
            <div className="flex items-center gap-1">
              <h3 className="text-gray-900" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                {member.name}
              </h3>
            </div>
            <p className="text-gray-500" style={{ fontSize: "0.75rem" }}>{member.company}</p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-600 mb-4 line-clamp-2" style={{ fontSize: "0.82rem", lineHeight: "1.5" }}>
          {member.tagline}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {member.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md"
              style={{ fontSize: "0.72rem" }}
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md" style={{ fontSize: "0.72rem" }}>
              +{member.skills.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex items-center gap-1 text-gray-400">
            <MapPin className="w-3 h-3" />
            <span style={{ fontSize: "0.75rem" }}>{member.location}</span>
          </div>
          {member.revenue && (
            <span className="text-gray-700" style={{ fontSize: "0.78rem", fontWeight: 600 }}>
              {member.revenue}
            </span>
          )}
          <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
}

"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  Zap,
  TrendingUp,
  Quote,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { MemberCard } from "../components/MemberCard";
import { OpcIcon } from "../components/OpcIcon";
import { fetchMembers } from "@/lib/api-client";
import type { Member } from "@/lib/members";

export default function Home() {
  const { t } = useTranslation();
  const [featuredMembers, setFeaturedMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetchMembers().then((data) => {
      console.log('data',data);
      setFeaturedMembers(data.slice(0, 6))
    });
  }, []);

  const stats = [
    { value: "120+", label: t("home.statsSection.members") },
    { value: "¥500万+", label: t("home.statsSection.revenue") },
    { value: "32", label: t("home.statsSection.cities") },
    {
      value: "98%",
      label: t("home.statsSection.satisfaction"),
    },
  ];

  const values = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: t("home.valuesSection.independent.title"),
      desc: t("home.valuesSection.independent.desc"),
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t("home.valuesSection.connected.title"),
      desc: t("home.valuesSection.connected.desc"),
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: t("home.valuesSection.growing.title"),
      desc: t("home.valuesSection.growing.desc"),
    },
  ];

  const testimonials = [
    {
      text: t("home.testimonialsSection.t1"),
      name: "王晓燕",
      role: "Studio Bloom",
      avatar:
        "https://images.unsplash.com/photo-1770135157320-68ecfe9cd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwb21hbW4lMjBwb3J0cmFpdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MjUwNjc0Mnww&ixlib=rb-4.1.0&q=80&w=200",
    },
    {
      text: t("home.testimonialsSection.t2"),
      name: "李明远",
      role: "Codeforge Studio",
      avatar:
        "https://images.unsplash.com/photo-1770392988936-dc3d8581e0c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNTA2NzQyfDA&ixlib=rb-4.1.0&q=80&w=200",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, #000 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, #000 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span
                className="text-gray-600"
                style={{ fontSize: "0.8rem" }}
              >
                {t("home.badge")}
              </span>
            </div>

            <h1
              className="text-gray-900 mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                whiteSpace: "pre-line",
              }}
            >
              {t("home.heroTitle")}
            </h1>

            <p
              className="text-gray-500 mb-10 max-w-2xl"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: 1.7,
              }}
            >
              {t("home.heroSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/members"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                style={{ fontSize: "0.95rem" }}
              >
                {t("common.browseMembers")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                style={{ fontSize: "0.95rem" }}
              >
                {t("common.learnMore")}
              </Link>
            </div>
          </div>

          {/* Floating member cards */}
          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
            {featuredMembers.slice(0, 4).map((member, i) => (
              <motion.div
                key={member.id}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100"
                style={{
                  transform: `translateX(${i % 2 === 0 ? "0" : "20px"})`,
                }}
                initial={{ opacity: 0, x: 60 }}
                animate={{
                  opacity: 1,
                  x: i % 2 === 0 ? 0 : 20,
                }}
                transition={{
                  delay: i * 0.18,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-9 h-9 rounded-xl object-cover"
                />
                <div>
                  <p
                    className="text-gray-900"
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-gray-400"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {member.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-white mb-1"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-gray-400"
                  style={{ fontSize: "0.85rem" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-gray-900 mb-3"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              {t("home.valuesSection.title")}
            </h2>
            <p
              className="text-gray-500 max-w-xl mx-auto"
              style={{ fontSize: "0.95rem" }}
            >
              {t("home.valuesSection.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white mb-5">
                  {v.icon}
                </div>
                <h3
                  className="text-gray-900 mb-2"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-gray-500"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2
                className="text-gray-900 mb-2"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                {t("home.featuredSection.title")}
              </h2>
              <p
                className="text-gray-500"
                style={{ fontSize: "0.95rem" }}
              >
                {t("home.featuredSection.subtitle")}
              </p>
            </div>
            <Link
              href="/members"
              className="hidden sm:inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              {t("common.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/members"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              style={{ fontSize: "0.9rem" }}
            >
              {t("common.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-gray-900 mb-3"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              {t("home.testimonialsSection.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <Quote className="w-8 h-8 text-gray-200 mb-4" />
                <p
                  className="text-gray-700 mb-6"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p
                      className="text-gray-900"
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-gray-500"
                      style={{ fontSize: "0.78rem" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              whiteSpace: "pre-line",
            }}
          >
            {t("home.ctaSection.title")}
          </h2>
          <p
            className="text-gray-400 mb-10 max-w-xl mx-auto"
            style={{ fontSize: "1rem", lineHeight: 1.7 }}
          >
            {t("home.ctaSection.subtitle")}
          </p>
          <Link
            href="/members"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
            style={{ fontSize: "1rem", fontWeight: 600 }}
          >
            {t("common.joinNow")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                <OpcIcon color="black" />
              </div>
              <span
                className="text-white"
                style={{ fontSize: "1rem", fontWeight: 700 }}
              >
                OPC Club
              </span>
            </div>
            <p style={{ fontSize: "0.82rem" }}>
              {t("home.footer.tagline")}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="hover:text-white transition-colors"
                style={{ fontSize: "0.82rem" }}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/members"
                className="hover:text-white transition-colors"
                style={{ fontSize: "0.82rem" }}
              >
                {t("nav.members")}
              </Link>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
                style={{ fontSize: "0.82rem" }}
              >
                {t("nav.about")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

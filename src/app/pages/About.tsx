"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const timeline = t("about.timeline", { returnObjects: true }) as Array<{
    year: string;
    event: string;
  }>;

  const faq = t("about.faq", { returnObjects: true }) as Array<{
    q: string;
    a: string;
  }>;

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Zap className="w-7 h-7 text-white" fill="white" />
          </div>
          <h1
            className="text-gray-900 mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {t("about.title")}
          </h1>
          <p
            className="text-gray-500 max-w-2xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-gray-400 mb-3"
                style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                {t("about.missionLabel")}
              </p>
              <h2
                className="text-gray-900 mb-5"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  whiteSpace: "pre-line",
                }}
              >
                {t("about.missionTitle")}
              </h2>
              <p className="text-gray-500 mb-4" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                {t("about.missionP1")}
              </p>
              <p className="text-gray-500" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                {t("about.missionP2")}
              </p>
            </div>
            <div className="space-y-4">
              {[
                { num: "120+", desc: t("about.stat1Desc") },
                { num: "32", desc: t("about.stat2Desc") },
                { num: "¥500万+", desc: t("about.stat3Desc") },
              ].map((item) => (
                <div key={item.num} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div
                    className="text-gray-900 mb-1"
                    style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em" }}
                  >
                    {item.num}
                  </div>
                  <div className="text-gray-500" style={{ fontSize: "0.88rem" }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-gray-900 mb-3"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              {t("about.timelineTitle")}
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-gray-100 hidden sm:block" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-gray-900" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                      {item.year}
                    </span>
                  </div>
                  <div className="relative hidden sm:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-black border-2 border-white shadow-sm z-10" />
                  </div>
                  <div className="flex-1 pb-6">
                    <p className="text-gray-600" style={{ fontSize: "0.92rem", lineHeight: 1.6 }}>
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-gray-900 mb-3"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              {t("about.faqTitle")}
            </h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-gray-900 mb-3" style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                  {item.q}
                </h3>
                <p className="text-gray-500" style={{ fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {t("about.ctaTitle")}
          </h2>
          <p
            className="text-gray-400 mb-8"
            style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            {t("about.ctaSubtitle")}
          </p>
          <Link
            href="/members"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
            style={{ fontSize: "0.95rem", fontWeight: 600 }}
          >
            {t("about.ctaButton")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p style={{ fontSize: "0.82rem" }}>{t("about.footer")}</p>
        </div>
      </footer>
    </div>
  );
}

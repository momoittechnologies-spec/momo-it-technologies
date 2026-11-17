"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Bot,
  Cpu,
  Smartphone,
  Building2,
} from "lucide-react";

export interface HeroSlide {
  id: string;
  number: string;
  tabLabel: string;
  category: string;
  headlineWhite: string;
  headlineAccent: string;
  description: string;
  imageWebp: string;
  imageJpg: string;
  alt: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    icon?: "layers" | "chat" | "building" | "bot" | "mobile";
  };
}

const slides: HeroSlide[] = [
  {
    id: "software-engineering",
    number: "01",
    tabLabel: "Software Engineering",
    category: "Software Engineering & Cloud Architecture",
    headlineWhite: "Engineering Digital Products.",
    headlineAccent: "Transforming Businesses.",
    description:
      "We build intelligent software, scalable SaaS platforms, mobile applications and AI-powered business systems that solve real-world problems.",
    imageWebp: "/hero/slider/slide-1-software-engineering.webp",
    imageJpg: "/hero/slider/slide-1-software-engineering.jpg",
    alt: "MOMO IT Technologies - Software Engineering & Cloud Infrastructure",
    primaryCta: {
      label: "Start a Project",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Our Work",
      href: "/case-studies",
      icon: "layers",
    },
  },
  {
    id: "enterprise-solutions",
    number: "02",
    tabLabel: "Enterprise Solutions",
    category: "Enterprise Systems & ERP Architecture",
    headlineWhite: "Smart Systems.",
    headlineAccent: "Better Business Operations.",
    description:
      "Build powerful business systems with custom ERP, CRM, workflow automation and scalable enterprise software solutions.",
    imageWebp: "/hero/slider/slide-2-enterprise-solutions.webp",
    imageJpg: "/hero/slider/slide-2-enterprise-solutions.jpg",
    alt: "MOMO IT Technologies - Enterprise Systems & ERP Solutions",
    primaryCta: {
      label: "Explore Solutions",
      href: "/services",
    },
    secondaryCta: {
      label: "Talk to Our Team",
      href: "/contact",
      icon: "building",
    },
  },
  {
    id: "ai-automation",
    number: "03",
    tabLabel: "AI & Automation",
    category: "Agentic AI & Operations Automation",
    headlineWhite: "Make Your Business Smarter",
    headlineAccent: "with AI.",
    description:
      "Transform business operations through intelligent AI agents, automation workflows and next-generation digital integrations.",
    imageWebp: "/hero/slider/slide-3-ai-automation.webp",
    imageJpg: "/hero/slider/slide-3-ai-automation.jpg",
    alt: "MOMO IT Technologies - Artificial Intelligence & Automation",
    primaryCta: {
      label: "Discover AI Solutions",
      href: "/services/ai-automation",
    },
    secondaryCta: {
      label: "Start a Project",
      href: "/contact",
      icon: "bot",
    },
  },
  {
    id: "mobile-digital-products",
    number: "04",
    tabLabel: "Mobile Products",
    category: "Cross-Platform Mobile & Digital Apps",
    headlineWhite: "From Ideas to Powerful",
    headlineAccent: "Digital Products.",
    description:
      "Turn your ideas into scalable digital products with modern Android, iOS, PWA and custom application development.",
    imageWebp: "/hero/slider/slide-4-mobile-digital-products.webp",
    imageJpg: "/hero/slider/slide-4-mobile-digital-products.jpg",
    alt: "MOMO IT Technologies - Mobile & Digital Product Engineering",
    primaryCta: {
      label: "Build Your Product",
      href: "/services/mobile-app-development",
    },
    secondaryCta: {
      label: "View Our Work",
      href: "/case-studies",
      icon: "mobile",
    },
  },
];

const AUTOPLAY_DURATION = 6500; // 6.5 seconds

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Tab visibility detection to pause autoplay when tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Autoplay and progress bar interval
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || isPaused) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const stepMs = 50;
    const progressIncrement = (stepMs / AUTOPLAY_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPaused, nextSlide, activeIndex]);

  // Touch / Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section
      ref={sliderContainerRef}
      className="relative w-full overflow-hidden bg-[#040a18] text-white select-none"
      aria-roledescription="carousel"
      aria-label="MOMO IT Technologies Capabilities Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ======================================================== */}
      {/* 100% Full-Bleed Background Slides with Smooth Crossfade   */}
      {/* ======================================================== */}
      <div className="relative w-full h-[620px] sm:h-[640px] md:h-[660px] lg:h-[690px] xl:h-[720px] 2xl:h-[740px]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.id}
              role="tabpanel"
              id={`slide-${slide.id}`}
              aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.tabLabel}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background 3D Cinematic Visual */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <picture>
                  <source srcSet={slide.imageWebp} type="image/webp" />
                  <img
                    src={slide.imageJpg}
                    alt={slide.alt}
                    width={1920}
                    height={1080}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    className={`w-full h-full object-cover object-right md:object-center-right transition-transform duration-[7000ms] ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                  />
                </picture>

                {/* Master Directional Ambient Scrims */}
                {/* 1. Left-to-right solid scrim to guarantee WCAG AAA text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#040a18] via-[#040a18]/95 via-30% sm:via-45% md:via-50% lg:via-[#040a18]/70 lg:via-60% to-transparent pointer-events-none" />

                {/* 2. Top scrim for seamless navbar integration without gaps */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040a18] via-[#040a18]/70 to-transparent pointer-events-none" />

                {/* 3. Bottom scrim for seamless blend into the trust strip below */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#040a18] via-[#040a18]/80 to-transparent pointer-events-none" />

                {/* 4. Subtle ambient lighting bloom aligned with active slide */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.08] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
              </div>

              {/* ======================================================== */}
              {/* Content Container (Standardized to prevent layout jump)  */}
              {/* ======================================================== */}
              <div className="relative z-20 w-full h-full max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-28">
                <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl">
                  {/* Category Eyebrow Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-cyan-300 font-mono mb-5 backdrop-blur-md">
                    <span className="font-semibold uppercase tracking-wider text-white text-[11px]">
                      MOMO IT TECHNOLOGIES
                    </span>
                    <span className="text-gray-500">·</span>
                    <span className="text-cyan-300 font-medium text-[11px]">
                      {slide.category}
                    </span>
                  </div>

                  {/* Grand Dominant Display Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-extrabold text-white tracking-tight leading-[1.08] mb-5 font-heading">
                    <span className="block">{slide.headlineWhite}</span>
                    <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-200">
                      {slide.headlineAccent}
                    </span>
                  </h1>

                  {/* Refined Enterprise Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-7 font-normal">
                    {slide.description}
                  </p>

                  {/* Action Buttons Cluster */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                    <Link
                      href={slide.primaryCta.href}
                      className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                    >
                      <span>{slide.primaryCta.label}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href={slide.secondaryCta.href}
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm border border-white/15 shadow-xs hover:border-white/30 hover:-translate-y-0.5 transition-all"
                    >
                      {slide.secondaryCta.icon === "layers" && <Layers className="w-4 h-4 text-cyan-400" />}
                      {slide.secondaryCta.icon === "building" && <Building2 className="w-4 h-4 text-cyan-400" />}
                      {slide.secondaryCta.icon === "bot" && <Bot className="w-4 h-4 text-cyan-400" />}
                      {slide.secondaryCta.icon === "mobile" && <Smartphone className="w-4 h-4 text-cyan-400" />}
                      <span>{slide.secondaryCta.label}</span>
                    </Link>

                    <a
                      href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20would%20like%20to%20discuss%20a%20software%20project%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-xs border border-white/10 hover:border-emerald-400/50 transition-all"
                      title="Direct WhatsApp Chat with Engineering Lead"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Restrained Client Deployment Evidence Line */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 font-mono">
                    <span className="text-gray-400 font-semibold">Live Deployments:</span>
                    <Link
                      href="/case-studies/as-refrigerations"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium hover:underline underline-offset-2"
                    >
                      AS REFRIGERATIONS
                    </Link>
                    <span className="text-gray-600">·</span>
                    <Link
                      href="/case-studies/mana-tours"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium hover:underline underline-offset-2"
                    >
                      MANA Tours &amp; Travels
                    </Link>
                    <span className="text-gray-600 hidden sm:inline">·</span>
                    <span className="text-gray-400 hidden sm:inline">Kadapa HQ &amp; Global Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ======================================================== */}
        {/* Navigation Arrows (Prev / Next)                          */}
        {/* ======================================================== */}
        <div className="absolute right-4 sm:right-8 md:right-12 bottom-24 sm:bottom-28 z-30 flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-2.5 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-2.5 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* Bottom Carousel Controls: Tabs & Animated Progress Bar   */}
        {/* ======================================================== */}
        <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-30 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          {/* Desktop & Tablet: Segmented Interactive Tabs */}
          <div className="hidden md:grid grid-cols-4 gap-3 border-t border-white/10 pt-3">
            {slides.map((slide, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`text-left group relative py-2 transition-all cursor-pointer ${
                    isSelected ? "opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.tabLabel}`}
                >
                  {/* Active Progress Bar */}
                  <div className="absolute -top-3 left-0 right-0 h-0.5 bg-white/15 overflow-hidden rounded-full">
                    <div
                      className={`h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-75 ${
                        isSelected ? "w-full" : "w-0"
                      }`}
                      style={{
                        width: isSelected ? `${progress}%` : "0%",
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {slide.number}
                    </span>
                    <span
                      className={`text-xs font-semibold transition-colors ${
                        isSelected ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                      }`}
                    >
                      {slide.tabLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile: Compact Dots Indicator */}
          <div className="flex md:hidden items-center justify-between border-t border-white/10 pt-3">
            <div className="flex items-center gap-2">
              {slides.map((slide, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-400"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                );
              })}
            </div>
            <span className="text-[11px] font-mono text-gray-400">
              0{activeIndex + 1} / 0{slides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

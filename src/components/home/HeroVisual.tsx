"use client";

import React from "react";

export default function HeroVisual() {
  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end select-none">
      {/* Subtle soft ambient depth bloom behind the 3D sculpture */}
      <div className="absolute w-[85%] h-[85%] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Seamless 3D Visual with soft feathered vignette into the background */}
      <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-[680px]">
        <picture>
          <source srcSet="/hero/enterprise-digital-infrastructure.webp" type="image/webp" />
          <img
            src="/hero/enterprise-digital-infrastructure.jpg"
            alt="MOMO IT Technologies - Enterprise Software & Cloud Infrastructure"
            width={1376}
            height={768}
            className="w-full h-auto object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Soft edge gradients ensuring 100% invisible transition into #040a18 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040a18] via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040a18] via-transparent to-transparent opacity-50 pointer-events-none" />
      </div>
    </div>
  );
}

import React from "react";

type BackgroundMode = "full" | "band";

interface FixedBgSectionProps {
  id?: string;
  bgImage?: string; // optional
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  topWave?: boolean;
  bottomWave?: boolean;
  waveColorLight?: string; // hex or css color
  waveColorDark?: string;  // hex or css color
  backgroundMode?: BackgroundMode;
  bandHeightPercent?: number; // applies when backgroundMode === 'band'
}

export function FixedBgSection({
  id,
  bgImage,
  className = "",
  innerClassName = "",
  children,
  topWave = false,
  bottomWave = false,
  waveColorLight = "#ffffff",
  waveColorDark = "#111827", // tailwind gray-900
  backgroundMode = "full",
  bandHeightPercent = 60,
}: FixedBgSectionProps) {
  const isBand = backgroundMode === "band";
  const bandInlineStyle: React.CSSProperties | undefined = bgImage && isBand
    ? (bandHeightPercent >= 100
        ? { top: 0, height: '100%' }
        : { top: '50%', transform: 'translateY(-50%)', height: `${bandHeightPercent}%` })
    : undefined;

  return (
    <section id={id} className={`relative ${className}`}>
      {/* Fixed background layer (optional) */}
      {bgImage && (
        <div
          className={`absolute -z-10 bg-fixed bg-cover bg-center ${isBand ? "left-0 right-0" : "inset-0"}`}
          style={{ backgroundImage: `url(${bgImage})`, ...(bandInlineStyle ?? {}) }}
          aria-hidden
        >
          {/* subtle darken for readability inside the band */}
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
        </div>
      )}

      {/* top fade to soften transition with previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent dark:from-gray-900" aria-hidden />

      {/* Top wave (over previous section) */}
      {topWave && (
        <div className="absolute -top-[1px] left-0 right-0 h-16 pointer-events-none z-10" aria-hidden>
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            {/* Light mode */}
            <path className="dark:hidden" d="M0,64 C240,112 480,0 720,32 C960,64 1200,128 1440,64 L1440,0 L0,0 Z" fill={waveColorLight} />
            {/* Dark mode */}
            <path className="hidden dark:block" d="M0,64 C240,112 480,0 720,32 C960,64 1200,128 1440,64 L1440,0 L0,0 Z" fill={waveColorDark} />
          </svg>
        </div>
      )}

      <div className="relative z-10">
        <div
          className={`mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-20 rounded-3xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm shadow-lg border border-white/40 dark:border-white/10 ${innerClassName}`}
        >
          {children}
        </div>
      </div>

      {/* Bottom wave (over next section) */}
      {bottomWave && (
        <div className="absolute -bottom-[1px] left-0 right-0 h-16 pointer-events-none z-10" aria-hidden>
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            {/* Light mode */}
            <path className="dark:hidden" d="M0,64 C240,32 480,128 720,96 C960,64 1200,32 1440,64 L1440,120 L0,120 Z" fill={waveColorLight} />
            {/* Dark mode */}
            <path className="hidden dark:block" d="M0,64 C240,32 480,128 720,96 C960,64 1200,32 1440,64 L1440,120 L0,120 Z" fill={waveColorDark} />
          </svg>
        </div>
      )}
    </section>
  );
}

export default FixedBgSection;

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SlideProps {
  children: ReactNode;
  bg?: "primary" | "secondary";
  glow?: boolean;
  glowStrong?: boolean;
  className?: string;
}

export const Slide = ({ children, bg = "primary", glow = false, glowStrong = false, className = "" }: SlideProps) => {
  const bgClass = bg === "secondary" ? "bg-background-secondary" : "bg-background";
  const glowClass = glowStrong ? "amber-glow-strong" : glow ? "amber-glow" : "";

  return (
    <section className={`min-h-screen w-full ${bgClass} leather-texture relative overflow-hidden ${className}`}>
      {(glow || glowStrong) && <div className={`absolute inset-0 ${glowClass} pointer-events-none z-0`} />}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-16 md:px-12 lg:px-24 max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const GoldRule = ({ width = "40%" }: { width?: string }) => (
  <div className="flex justify-center my-6">
    <div className="h-px bg-gold" style={{ width, opacity: 0.7 }} />
  </div>
);

interface StatBlockProps {
  headline: string;
  subtext: string;
  delay?: number;
}

export const StatBlock = ({ headline, subtext, delay = 0 }: StatBlockProps) => (
  <FadeIn delay={delay}>
    <div className="flex gap-4 py-4">
      <div className="w-[3px] bg-gold shrink-0 rounded-full" />
      <div>
        <h3 className="font-headline text-gold text-2xl md:text-[28px] tracking-wide leading-tight mb-1">{headline}</h3>
        <p className="font-body text-foreground text-sm leading-relaxed">{subtext}</p>
      </div>
    </div>
  </FadeIn>
);

export const FeatureBlock = ({ title, body, delay = 0, variant = "default" }: { title: string; body: string; delay?: number; variant?: "default" | "amber" }) => (
  <FadeIn delay={delay}>
    <div className={`flex gap-4 py-4 ${variant === "amber" ? "rounded-lg px-4" : ""}`} style={variant === "amber" ? { background: "rgba(212,130,42,0.1)" } : {}}>
      <div className={`w-[3px] shrink-0 rounded-full ${variant === "amber" ? "bg-amber" : "bg-gold"}`} />
      <div>
        <h4 className="font-body font-semibold text-gold text-sm tracking-widest uppercase mb-2">{title}</h4>
        <p className="font-body text-foreground text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  </FadeIn>
);

"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type NumberTickerProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

export function NumberTicker({ value, suffix = "", className, duration = 2000 }: NumberTickerProps) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {current}
      {suffix}
    </span>
  );
}

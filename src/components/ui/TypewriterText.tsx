"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TypewriterTextProps = {
  texts: string[];
  className?: string;
  speed?: number;
  pauseTime?: number;
};

export function TypewriterText({ texts, className, speed = 60, pauseTime = 2000 }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(cursor);
  }, []);

  useEffect(() => {
    const current = texts[textIndex];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((v) => v + 1);
      }, speed);
      return () => clearTimeout(t);
    } else if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    } else if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((v) => v - 1);
      }, speed / 2);
      return () => clearTimeout(t);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((v) => (v + 1) % texts.length);
    }
  }, [charIndex, deleting, textIndex, texts, speed, pauseTime]);

  return (
    <span className={cn("font-code", className)}>
      {displayed}
      <span className={cn("text-primary", showCursor ? "opacity-100" : "opacity-0")}>█</span>
    </span>
  );
}

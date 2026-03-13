"use client";
import { cn } from "@/lib/utils";

type GlitchTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
};

export function GlitchText({ text, className, as: Tag = "span" }: GlitchTextProps) {
  return (
    <Tag
      className={cn("glitch font-mono-display inline-block", className)}
      data-text={text}
    >
      {text}
    </Tag>
  );
}

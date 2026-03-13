"use client";
import { cn } from "@/lib/utils";

type AnimatedBorderCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedBorderCard({ children, className }: AnimatedBorderCardProps) {
  return (
    <div className={cn("group relative rounded-xl p-px overflow-hidden", className)}>
      {/* アニメーションボーダー */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(var(--angle, 0deg), #2edf96, #1e3d2c, #2edf96)",
          animation: "borderSpin 3s linear infinite",
        }}
      />
      {/* 内側背景 */}
      <div className="relative rounded-[11px] bg-surface z-10 h-full">{children}</div>
    </div>
  );
}

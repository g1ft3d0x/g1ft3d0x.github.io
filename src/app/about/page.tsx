import { teamInfo, categories, history } from "@/data/team";
import { AnimatedBorderCard } from "@/components/ui/AnimatedBorderCard";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-24">

        {/* ヘッダー */}
        <div>
          <p className="font-code text-xs text-text-muted mb-3 tracking-widest"># ABOUT</p>
          <h1 className="font-mono-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
            G1FT3D とは
          </h1>
          <p className="text-text-muted leading-relaxed text-base md:text-lg max-w-2xl">
            {teamInfo.description}
          </p>
        </div>

        {/* 得意ジャンル */}
        <div>
          <p className="font-code text-xs text-text-muted mb-3 tracking-widest"># CATEGORIES</p>
          <h2 className="font-mono-display text-2xl font-bold text-text-primary mb-8">
            得意ジャンル
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <AnimatedBorderCard key={cat.name} className="h-full">
                <div className="p-5 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <div className="font-mono-display text-sm font-bold text-primary mb-2">
                    {cat.name}
                  </div>
                  <div className="font-code text-xs text-text-muted leading-relaxed">
                    {cat.description}
                  </div>
                </div>
              </AnimatedBorderCard>
            ))}
          </div>
        </div>

        {/* 活動履歴 */}
        <div>
          <p className="font-code text-xs text-text-muted mb-3 tracking-widest"># HISTORY</p>
          <h2 className="font-mono-display text-2xl font-bold text-text-primary mb-8">
            チーム履歴
          </h2>
          <div className="relative">
            {/* タイムラインライン */}
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {history.map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <span className="font-mono-display text-sm text-primary shrink-0 w-[52px] text-right">
                    {item.year}
                  </span>
                  <div className="relative flex items-center">
                    <div className="w-3 h-3 rounded-full border border-primary bg-base shrink-0 shadow-glow-sm" />
                  </div>
                  <p className="font-code text-sm text-text-muted pt-0.5">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

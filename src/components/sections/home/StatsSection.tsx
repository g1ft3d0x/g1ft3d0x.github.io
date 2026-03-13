import { NumberTicker } from "@/components/ui/NumberTicker";
import { stats } from "@/data/team";

export function StatsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-code text-xs text-text-muted mb-2 tracking-widest">
            # STATISTICS
          </p>
          <h2 className="font-mono-display text-2xl md:text-3xl text-text-primary">
            実績
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-border bg-surface rounded-xl p-6 text-center hover:border-primary transition-colors duration-300 group"
            >
              <div className="font-mono-display text-4xl md:text-5xl font-bold text-primary text-glow mb-2 group-hover:scale-110 transition-transform duration-300">
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-code text-xs text-text-muted tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

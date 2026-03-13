import { GlitchText } from "@/components/ui/GlitchText";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";

const typewriterTexts = [
  "> ./exploit --target=all --mode=pwn",
  "> python3 solve.py",
  "> strings binary | grep CTF{",
  "> sqlmap -u target --dump",
  "> nc ctf.example.com 1337",
  "> ssh -i 127.0.0.1 8080",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* グリッド背景 */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(46,223,150,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46,223,150,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* スポットライト */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60 opacity-50" />

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* チーム名 */}
        <div className="mb-6">
          <GlitchText
            text="G1FT3D"
            as="h1"
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary text-glow"
          />
        </div>

        {/* サブタイトル */}
        <div className="mb-8 h-8">
          <TypewriterText
            texts={typewriterTexts}
            className="text-sm text-text-primary text-text-muted"
          />
        </div>

        {/* 説明 */}
        <p className="text-text-muted text-sm text-text-primary max-w-xl mx-auto mb-10 leading-relaxed">
          CTF（Capture The Flag）を中心に活動するサイバーセキュリティチーム。<br />
          Web / Pwn / Crypto / Rev / Misc — 全ジャンル対応。
        </p>


      </div>
    </section>
  );
}

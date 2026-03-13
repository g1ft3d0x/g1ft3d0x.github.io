import { teamInfo } from "@/data/team";
import { ContactForm } from "@/components/sections/contact/ContactForm";

const links = [
  {
    label: "CTFtime",
    href: teamInfo.ctftimeUrl,
    icon: "🏆",
    description: "CTFtime チームページ",
  },
  {
    label: "X (Twitter)",
    href: teamInfo.twitterUrl,
    icon: "𝕏",
    description: "@G1FT3D",
  },
  {
    label: "Discord",
    href: teamInfo.discordUrl,
    icon: "💬",
    description: "Discord サーバー",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto space-y-16">

        {/* ヘッダー */}
        <div>
          <p className="font-code text-xs text-text-muted mb-3 tracking-widest"># CONTACT</p>
          <h1 className="font-mono-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            コンタクト
          </h1>
          <p className="text-text-muted text-sm leading-relaxed">
            CTF のコラボレーションや質問など、お気軽にどうぞ。
          </p>
        </div>

        {/* SNSリンク */}
        <div>
          <p className="font-code text-xs text-text-muted mb-6 tracking-widest"># FIND US</p>
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-border bg-surface rounded-lg px-6 py-4 hover:border-primary transition-all duration-200"
              >
                <span className="text-2xl">{link.icon}</span>
                <div>
                  <div className="font-mono-display text-sm text-text-primary group-hover:text-primary transition-colors">
                    {link.label}
                  </div>
                  <div className="font-code text-xs text-text-muted">{link.description}</div>
                </div>
                <span className="ml-auto text-text-muted group-hover:text-primary transition-colors text-sm">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* お問い合わせフォーム */}
        <div>
          <p className="font-code text-xs text-text-muted mb-6 tracking-widest"># MESSAGE</p>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}

import Image from "next/image";
import { FaGithub, FaGlobe, FaTrophy, FaXTwitter } from "react-icons/fa6";
import { SiZenn, SiQiita } from "react-icons/si";
import type { IconType } from "react-icons";
import { members, type Member } from "@/data/members";
import { SpotlightCard } from "@/components/ui/Spotlight";

const specialtyColors: Record<string, string> = {
  Web: "border-blue-500/60 text-blue-400",
  Pwn: "border-red-500/60 text-red-400",
  Crypto: "border-yellow-500/60 text-yellow-400",
  Rev: "border-purple-500/60 text-purple-400",
  Misc: "border-green-500/60 text-green-400",
  Forensics: "border-cyan-500/60 text-cyan-400",
  OSINT: "border-orange-500/60 text-orange-400",
  Blockchain: "border-emerald-500/60 text-emerald-400",
  Jail: "border-pink-500/60 text-pink-400",
  Boot2Root: "border-rose-500/60 text-rose-400",
  PPC: "border-lime-500/60 text-lime-400",
  Quantum: "border-violet-500/60 text-violet-400",
  Stego: "border-teal-500/60 text-teal-400",
  Hardware: "border-amber-500/60 text-amber-400",
  Network: "border-sky-500/60 text-sky-400",
  Mobile: "border-indigo-500/60 text-indigo-400",
  "AI/ML": "border-fuchsia-500/60 text-fuchsia-400",


};

const linkMeta: Record<string, { label: string; Icon: IconType; color: string }> = {
  github: { label: "GitHub", Icon: FaGithub, color: "hover:text-white" },
  twitter: { label: "X", Icon: FaXTwitter, color: "hover:text-white" },
  zenn: { label: "Zenn", Icon: SiZenn, color: "hover:text-blue-400" },
  qiita: { label: "Qiita", Icon: SiQiita, color: "hover:text-green-400" },
  ctftime: { label: "CTFtime", Icon: FaTrophy, color: "hover:text-yellow-400" },
  website: { label: "Website", Icon: FaGlobe, color: "hover:text-primary" },
};

function MemberCard({ member }: { member: Member }) {
  return (
    <SpotlightCard className="h-full">
      <div className="p-6 space-y-4">

        {/* アバター + 名前 + ロール */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-border border border-primary/30 flex items-center justify-center shrink-0 overflow-hidden">
            {member.icon ? (
              <Image
                src={`/icons/${member.icon}`}
                alt={member.name}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="font-mono-display text-lg text-primary">
                {member.name[0].toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-mono-display text-base font-bold text-text-primary">
              {member.name}
            </h3>
            {/* 専門タグ */}
            <div className="flex flex-wrap gap-1">
              {member.specialties.map((s) => (
                <span
                  key={s}
                  className={`font-code text-xs border rounded px-2 py-0.5 ${specialtyColors[s] ?? "border-border text-text-muted"}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* About */}
        <p className="font-code text-xs text-text-muted leading-relaxed">
          {member.about}
        </p>

        {/* Tech Stacks */}
        {member.stacks.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {member.stacks.map((stack) => (
              <img
                key={stack}
                src={`https://skillicons.dev/icons?i=${stack}&theme=dark`}
                alt={stack}
                title={stack}
                width={24}
                height={24}
                className="w-6 h-6 rounded"
              />
            ))}
          </div>
        )}

        {/* Links */}
        {member.link && (
          <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
            {(Object.entries(member.link) as [string, string][])
              .filter(([, url]) => url)
              .map(([key, url]) => {
                const meta = linkMeta[key];
                if (!meta) return null;
                const { label, Icon, color } = meta;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className={`text-text-muted ${color} transition-colors flex items-center gap-1.5 group`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-code text-[11px] group-hover:underline underline-offset-2">
                      {label}
                    </span>
                  </a>
                );
              })}
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}

export default function MembersPage() {
  const admins = members.filter((m) => m.role === "Admin");
  const regular = members.filter((m) => m.role === "Member");

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ページヘッダー */}
        <div>
          <p className="font-code text-xs text-text-muted mb-3 tracking-widest"># MEMBERS</p>
          <h1 className="font-mono-display text-4xl md:text-5xl font-bold text-text-primary">
            メンバー
          </h1>
        </div>

        {/* Admin セクション */}
        {admins.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-code text-xs text-primary border border-primary/40 rounded px-2 py-0.5 tracking-widest">
                ADMIN
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {admins.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Member セクション */}
        {regular.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-code text-xs text-text-muted border border-border rounded px-2 py-0.5 tracking-widest">
                MEMBER
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

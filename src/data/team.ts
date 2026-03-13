export const teamInfo = {
  name: "G1FT3D",
  tagline: "> ./exploit --target=ctf --mode=all",
  description:
    "G1FT3D は、CTF（Capture The Flag）を中心に活動するサイバーセキュリティチームです。" +
    "Web・Pwn・Crypto・Rev・Misc など幅広いジャンルに対応し、技術の研鑽と知識の共有を目的として活動しています。",
  founded: "2024",
  ctftimeUrl: "https://ctftime.org/",  // TODO: 実際のURLに変更
  twitterUrl: "https://twitter.com/",  // TODO: 実際のURLに変更
  discordUrl: "https://discord.gg/",   // TODO: 実際のURLに変更
};

export const categories = [
  { name: "Web",       icon: "🌐", description: "Web脆弱性・SQLi・XSS・SSRF等" },
  { name: "Pwn",       icon: "💥", description: "バッファオーバーフロー・ROP等" },
  { name: "Crypto",    icon: "🔐", description: "暗号解読・RSA・楕円曲線等" },
  { name: "Rev",       icon: "⚙️",  description: "リバースエンジニアリング・解析" },
  { name: "Misc",      icon: "🔍", description: "雑多な問題・総合系" },
  { name: "Forensics", icon: "🧪", description: "ログ・メモリ・ファイル解析" },
  { name: "OSINT",     icon: "🕵️", description: "公開情報からの情報収集・追跡" },
  { name: "Blockchain",icon: "⛓️", description: "スマートコントラクト・DeFi脆弱性" },
  { name: "Jail",      icon: "🔒", description: "サンドボックス脱出・制限環境突破" },
  { name: "Boot2Root", icon: "🖥️", description: "マシン侵入・権限昇格・完全掌握" },
  { name: "PPC",       icon: "🧮", description: "競技プログラミング・最適化問題" },
  { name: "Quantum",   icon: "⚛️",  description: "量子アルゴリズム・量子暗号" },
  { name: "Stego",     icon: "🖼️", description: "画像・音声への情報隠蔽・検出" },
  { name: "Hardware",  icon: "🔧", description: "回路解析・ファームウェア・IoT" },
  { name: "Mobile",    icon: "📱", description: "Android/iOS アプリ解析" },
  { name: "AI/ML",     icon: "🤖", description: "AIモデル攻撃・敵対的サンプル等" },
];

export const stats = [
  { label: "CTF参加回数", value: 42,  suffix: "回" },
  { label: "解いた問題数", value: 256, suffix: "問" },
  { label: "最高チーム順位", value: 3,  suffix: "位" },
  { label: "チームメンバー", value: 6,  suffix: "人" },
];

export const history = [
  { year: "2024", event: "チーム G1FT3D 結成" },
  { year: "2024", event: "初の国内 CTF 参加・入賞" },
  { year: "2025", event: "国際 CTF への参加を開始" },
  { year: "2025", event: "メンバー拡大・体制強化" },
];

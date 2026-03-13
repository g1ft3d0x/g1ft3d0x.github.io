export type Member = {
  name: string;
  role: "Admin" | "Member";
  specialties: string[];
  stacks: string[];   // skillicons.dev のアイコン名 例: ["python", "linux", "bash"]
  about: string;      // 詳細 bio
  link?: {
    github?: string;
    twitter?: string;
    zenn?: string;
    qiita?: string;
    ctftime?: string;
    website?: string;
  };
  icon?: string;      // public/icons/ に格納したファイル名 例: "0xLeader_icon.png"
  // 命名規則: {name}_icon.{ext}
};

export const members: Member[] = [
  {
    name: "Kurimochi",
    role: "Admin",
    specialties: ["Crypto", "Pwn", "Rev", "OSINT", "PPC", "Boot2Root", "Blockchain", "Jail"],
    stacks: ["python", "cpp", "rust", "solidity", "md", "docker", "kubernetes", "arch", "kali"],
    about: "チームリーダー。Web系の問題を中心に担当。OSINT・フォレンジックも対応。",
    link: {
      github: "https://github.com/kurimochi",
      twitter: "https://twitter.com/kurimochi_",
    },

    icon: "Kurimochi_icon.jpg",
  },
  {
    name: "JUCK",
    role: "Admin",
    specialties: ["Rev", "Forensics", "Quantum", "Network", "AI/ML"],
    stacks: ["dotnet", "typescript", "linux", "docker"],
    about: "自称G1FT3Dの顧問。広く浅く触ってます",
    link: {
      github: "https://github.com/JUCK-Kurohasu",
      twitter: "https://x.com/JUCK_28"
    },
    icon: "JUCK_icon.jpg",
  },
  {
    name: "Lua",
    role: "Admin",
    specialties: ["Crypto"],
    stacks: ["python", "rust"],
    about: "暗号専門。RSAから楕円曲線まで対応。格子暗号も勉強中。",
    link: {
      github: "https://github.com/lua-yuus2",
      twitter: "https://twitter.com/lua_yuus2",
    },
    icon: "Lua_icon.jpg",
  },
  {
    name: "長門i8080",
    role: "Admin",
    specialties: ["Rev", "Pwn"],
    stacks: ["c", "python", "linux"],
    about: "リバースエンジニアリング担当。マルウェア解析にも興味あり。",
    link: {
      github: "https://github.com/nagato-home-server",
      twitter: "https://twitter.com/nanasesior1",
    },
    icon: "nagato_icon.jpg",
  },
  {
    name: "w3b_ninja",
    role: "Member",
    specialties: ["Web"],
    stacks: ["js", "nodejs", "docker"],
    about: "Webセキュリティのスペシャリスト。XSSからSSTIまで幅広く対応。",
    link: {
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
    // icon: "w3b_ninja_icon.png",
  },
  {
    name: "m1sc_h4x",
    role: "Member",
    specialties: ["Misc", "Crypto"],
    stacks: ["python", "bash", "linux"],
    about: "なんでも屋。OSINT・フォレンジック・ステガノグラフィー等担当。",
    link: {
      github: "https://github.com/",
    },
    // icon: "m1sc_h4x_icon.png",
  },
];

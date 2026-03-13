export type CTFResult = {
  name: string;
  date: string;
  rank: string;
  solves: number;
  tags: string[];
};

export const recentResults: CTFResult[] = [
  {
    name: "picoCTF 2025",
    date: "2025-03",
    rank: "42nd",
    solves: 18,
    tags: ["Web", "Pwn", "Crypto"],
  },
  {
    name: "SECCON CTF 2024",
    date: "2024-12",
    rank: "15th",
    solves: 12,
    tags: ["Web", "Rev"],
  },
  {
    name: "TSG CTF 2024",
    date: "2024-11",
    rank: "30th",
    solves: 8,
    tags: ["Crypto", "Misc"],
  },
  {
    name: "CPCTF 2024",
    date: "2024-10",
    rank: "3rd",
    solves: 25,
    tags: ["Web", "Pwn", "Crypto", "Rev", "Misc"],
  },
];

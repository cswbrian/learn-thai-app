export type ConsonantClass = "high" | "mid" | "low";

export interface Consonant {
  thai: string;
  consonantSound: string;
  class: ConsonantClass;
  popularity?: number;
}

export const consonants: Consonant[] = [
  { thai: "ก", consonantSound: "k", class: "mid", popularity: 1.4 },
  { thai: "ข", consonantSound: "kh", class: "high", popularity: 2.2 },
  { thai: "ฃ", consonantSound: "kh", class: "high", popularity: 5 },
  { thai: "ค", consonantSound: "kh", class: "low", popularity: 1.4 },
  { thai: "ฅ", consonantSound: "kh", class: "low", popularity: 5 },
  { thai: "ฆ", consonantSound: "kh", class: "low", popularity: 3.3 },
  { thai: "ง", consonantSound: "ng", class: "low", popularity: 1.4 },
  { thai: "จ", consonantSound: "ch", class: "mid", popularity: 1.3 },
  { thai: "ฉ", consonantSound: "ch", class: "high", popularity: 2.2 },
  { thai: "ช", consonantSound: "ch", class: "low", popularity: 1.3 },
  { thai: "ซ", consonantSound: "s", class: "low", popularity: 1.3 },
  { thai: "ฌ", consonantSound: "ch", class: "low", popularity: 3.3 },
  { thai: "ญ", consonantSound: "y", class: "low", popularity: 3.1 },
  { thai: "ฎ", consonantSound: "d", class: "mid", popularity: 4 },
  { thai: "ฏ", consonantSound: "t", class: "mid", popularity: 4 },
  { thai: "ฐ", consonantSound: "th", class: "high", popularity: 4 },
  { thai: "ฑ", consonantSound: "th", class: "low", popularity: 4 },
  { thai: "ฒ", consonantSound: "th", class: "low", popularity: 4 },
  { thai: "ณ", consonantSound: "n", class: "low", popularity: 3.1 },
  { thai: "ด", consonantSound: "d", class: "mid", popularity: 1.2 },
  { thai: "ต", consonantSound: "t", class: "mid", popularity: 1.2 },
  { thai: "ถ", consonantSound: "th", class: "high", popularity: 2.2 },
  { thai: "ท", consonantSound: "th", class: "low", popularity: 1.2 },
  { thai: "ธ", consonantSound: "th", class: "low", popularity: 3.3 },
  { thai: "น", consonantSound: "n", class: "low", popularity: 1.2 },
  { thai: "บ", consonantSound: "b", class: "mid", popularity: 1.1 },
  { thai: "ป", consonantSound: "p", class: "mid", popularity: 1.1 },
  { thai: "ผ", consonantSound: "ph", class: "high", popularity: 2.2 },
  { thai: "ฝ", consonantSound: "f", class: "high", popularity: 2.1 },
  { thai: "พ", consonantSound: "ph", class: "low", popularity: 1.1 },
  { thai: "ฟ", consonantSound: "f", class: "low", popularity: 1.1 },
  { thai: "ภ", consonantSound: "ph", class: "low", popularity: 3.3 },
  { thai: "ม", consonantSound: "m", class: "low", popularity: 1.1 },
  { thai: "ย", consonantSound: "y", class: "low", popularity: 1.6 },
  { thai: "ร", consonantSound: "r", class: "low", popularity: 1.6 },
  { thai: "ล", consonantSound: "l", class: "low", popularity: 1.6 },
  { thai: "ว", consonantSound: "w", class: "low", popularity: 1.6 },
  { thai: "ศ", consonantSound: "s", class: "high", popularity: 3.2 },
  { thai: "ษ", consonantSound: "s", class: "high", popularity: 3.2 },
  { thai: "ส", consonantSound: "s", class: "high", popularity: 2.1 },
  { thai: "ห", consonantSound: "h", class: "high", popularity: 2.1 },
  { thai: "ฬ", consonantSound: "l", class: "low", popularity: 4 },
  { thai: "อ", consonantSound: "", class: "mid", popularity: 1.5 },
  { thai: "ฮ", consonantSound: "h", class: "low", popularity: 1.5 },
];


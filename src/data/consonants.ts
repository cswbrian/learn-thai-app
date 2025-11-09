export type ConsonantClass = "high" | "mid" | "low";

export interface Consonant {
  thai: string;
  consonantSound: string;
  class: ConsonantClass;
  popularity?: number;
  thaiName?: string; // Thai letter name with tone marks (e.g., "kɔ̌ɔ kài")
}

export const consonants: Consonant[] = [
  { thai: "ก", consonantSound: "k", class: "mid", popularity: 1.4, thaiName: "kɔ̌ɔ kài" },
  { thai: "ข", consonantSound: "kh", class: "high", popularity: 2.2, thaiName: "kɔ̌ɔ khǎi" },
  { thai: "ฃ", consonantSound: "kh", class: "high", popularity: 5, thaiName: "kɔ̌ɔ khùat" },
  { thai: "ค", consonantSound: "kh", class: "low", popularity: 1.4, thaiName: "kɔ̌ɔ khwaai" },
  { thai: "ฅ", consonantSound: "kh", class: "low", popularity: 5, thaiName: "kɔ̌ɔ khon" },
  { thai: "ฆ", consonantSound: "kh", class: "low", popularity: 3.3, thaiName: "kɔ̌ɔ rá-kuung" },
  { thai: "ง", consonantSound: "ng", class: "low", popularity: 1.4, thaiName: "ngǒo nguu" },
  { thai: "จ", consonantSound: "ch", class: "mid", popularity: 1.3, thaiName: "jɔ̌ɔ jaan" },
  { thai: "ฉ", consonantSound: "ch", class: "high", popularity: 2.2, thaiName: "chɔ̌ɔ chìng" },
  { thai: "ช", consonantSound: "ch", class: "low", popularity: 1.3, thaiName: "chɔ̌ɔ chaang" },
  { thai: "ซ", consonantSound: "s", class: "low", popularity: 1.3, thaiName: "sɔ̌ɔ sǒo" },
  { thai: "ฌ", consonantSound: "ch", class: "low", popularity: 3.3, thaiName: "chɔ̌ɔ chée" },
  { thai: "ญ", consonantSound: "y", class: "low", popularity: 3.1, thaiName: "yɔ̌ɔ yǐng" },
  { thai: "ฎ", consonantSound: "d", class: "mid", popularity: 4, thaiName: "dɔ̌ɔ chá-daa" },
  { thai: "ฏ", consonantSound: "t", class: "mid", popularity: 4, thaiName: "tɔ̌ɔ pà-tak" },
  { thai: "ฐ", consonantSound: "th", class: "high", popularity: 4, thaiName: "thɔ̌ɔ thǎan" },
  { thai: "ฑ", consonantSound: "th", class: "low", popularity: 4, thaiName: "thɔ̌ɔ món-thǒo" },
  { thai: "ฒ", consonantSound: "th", class: "low", popularity: 4, thaiName: "thɔ̌ɔ phú-thao" },
  { thai: "ณ", consonantSound: "n", class: "low", popularity: 3.1, thaiName: "nɔ̌ɔ nén" },
  { thai: "ด", consonantSound: "d", class: "mid", popularity: 1.2, thaiName: "dɔ̌ɔ dèk" },
  { thai: "ต", consonantSound: "t", class: "mid", popularity: 1.2, thaiName: "tɔ̌ɔ tào" },
  { thai: "ถ", consonantSound: "th", class: "high", popularity: 2.2, thaiName: "thɔ̌ɔ thǔng" },
  { thai: "ท", consonantSound: "th", class: "low", popularity: 1.2, thaiName: "thɔ̌ɔ thǎan" },
  { thai: "ธ", consonantSound: "th", class: "low", popularity: 3.3, thaiName: "thɔ̌ɔ thong" },
  { thai: "น", consonantSound: "n", class: "low", popularity: 1.2, thaiName: "nɔ̌ɔ nǔu" },
  { thai: "บ", consonantSound: "b", class: "mid", popularity: 1.1, thaiName: "bɔ̌ɔ bài-maai" },
  { thai: "ป", consonantSound: "p", class: "mid", popularity: 1.1, thaiName: "pɔ̌ɔ plàa" },
  { thai: "ผ", consonantSound: "ph", class: "high", popularity: 2.2, thaiName: "phɔ̌ɔ phǔng" },
  { thai: "ฝ", consonantSound: "f", class: "high", popularity: 2.1, thaiName: "fɔ̌ɔ fǎa" },
  { thai: "พ", consonantSound: "ph", class: "low", popularity: 1.1, thaiName: "phɔ̌ɔ phǎan" },
  { thai: "ฟ", consonantSound: "f", class: "low", popularity: 1.1, thaiName: "fɔ̌ɔ fan" },
  { thai: "ภ", consonantSound: "ph", class: "low", popularity: 3.3, thaiName: "phɔ̌ɔ sǎm-phao" },
  { thai: "ม", consonantSound: "m", class: "low", popularity: 1.1, thaiName: "mɔ̌ɔ mǎa" },
  { thai: "ย", consonantSound: "y", class: "low", popularity: 1.6, thaiName: "yɔ̌ɔ yák" },
  { thai: "ร", consonantSound: "r", class: "low", popularity: 1.6, thaiName: "rɔ̌ɔ rúea" },
  { thai: "ล", consonantSound: "l", class: "low", popularity: 1.6, thaiName: "lɔ̌ɔ lǐng" },
  { thai: "ว", consonantSound: "w", class: "low", popularity: 1.6, thaiName: "wɔ̌ɔ wǎen" },
  { thai: "ศ", consonantSound: "s", class: "high", popularity: 3.2, thaiName: "sɔ̌ɔ sǎa-lǎa" },
  { thai: "ษ", consonantSound: "s", class: "high", popularity: 3.2, thaiName: "sɔ̌ɔ rúe-sǐi" },
  { thai: "ส", consonantSound: "s", class: "high", popularity: 2.1, thaiName: "sɔ̌ɔ sǔea" },
  { thai: "ห", consonantSound: "h", class: "high", popularity: 2.1, thaiName: "hɔ̌ɔ hǐip" },
  { thai: "ฬ", consonantSound: "l", class: "low", popularity: 4, thaiName: "lɔ̌ɔ jú-lǎa" },
  { thai: "อ", consonantSound: "", class: "mid", popularity: 1.5, thaiName: "ɔ̌ɔ ǎang" },
  { thai: "ฮ", consonantSound: "h", class: "low", popularity: 1.5, thaiName: "hɔ̌ɔ nǒk-hǔuk" },
];


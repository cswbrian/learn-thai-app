export interface FinalConsonant {
  thai: string;
  finalSound: string;
}

// Final consonants grouped by their ending sound
export const finalConsonantsBySound: Record<string, FinalConsonant[]> = {
  k: [
    { thai: "ก", finalSound: "k" },
    { thai: "ณ", finalSound: "k" },
    { thai: "ข", finalSound: "k" },
    { thai: "ค", finalSound: "k" },
    { thai: "ฆ", finalSound: "k" },
  ],
  b: [
    { thai: "บ", finalSound: "b" },
    { thai: "ป", finalSound: "b" },
    { thai: "ฟ", finalSound: "b" },
    { thai: "พ", finalSound: "b" },
  ],
  d: [
    { thai: "ด", finalSound: "d" },
    { thai: "จ", finalSound: "d" },
    { thai: "ช", finalSound: "d" },
    { thai: "ซ", finalSound: "d" },
    { thai: "ฎ", finalSound: "d" },
    { thai: "ฏ", finalSound: "d" },
    { thai: "ฐ", finalSound: "d" },
    { thai: "ฑ", finalSound: "d" },
    { thai: "ฒ", finalSound: "d" },
    { thai: "ต", finalSound: "d" },
    { thai: "ถ", finalSound: "d" },
    { thai: "ท", finalSound: "d" },
    { thai: "ธ", finalSound: "d" },
    { thai: "ศ", finalSound: "d" },
    { thai: "ษ", finalSound: "d" },
    { thai: "ส", finalSound: "d" },
  ],
  n: [
    { thai: "น", finalSound: "n" },
    { thai: "ณ", finalSound: "n" },
    { thai: "ญ", finalSound: "n" },
    { thai: "ร", finalSound: "n" },
    { thai: "ล", finalSound: "n" },
    { thai: "ฬ", finalSound: "n" },
  ],
  m: [
    { thai: "ม", finalSound: "m" },
  ],
  ng: [
    { thai: "ง", finalSound: "ng" },
  ],
  w: [
    { thai: "ว", finalSound: "w" },
  ],
  y: [
    { thai: "ย", finalSound: "y" },
  ],
};

// Order for display
export const finalSoundOrder = ["k", "b", "d", "n", "m", "ng", "w", "y"];

// Get all final consonants as a flat array
export const finalConsonants: FinalConsonant[] = Object.values(finalConsonantsBySound).flat();


export type VowelType = "long" | "short" | "special";

export interface Vowel {
  thai: string;
  sound: string;
  type: VowelType;
}

// 12 pairs of long and short vowels
export const vowels: Vowel[] = [
  // Pair 1: อา / อะ
  { thai: "อา", sound: "/aː/", type: "long" },
  { thai: "อะ", sound: "/a/", type: "short" },
  
  // Pair 2: อี / อิ
  { thai: "อี", sound: "/iː/", type: "long" },
  { thai: "อิ", sound: "/i/", type: "short" },
  
  // Pair 3: อู / อุ
  { thai: "อู", sound: "/uː/", type: "long" },
  { thai: "อุ", sound: "/u/", type: "short" },
  
  // Pair 4: เอ / เอะ
  { thai: "เอ", sound: "/eː/", type: "long" },
  { thai: "เอะ", sound: "/e/", type: "short" },
  
  // Pair 5: แอ / แอะ
  { thai: "แอ", sound: "/ɛː/", type: "long" },
  { thai: "แอะ", sound: "/ɛ/", type: "short" },
  
  // Pair 6: โอ / โอะ
  { thai: "โอ", sound: "/oː/", type: "long" },
  { thai: "โอะ", sound: "/o/", type: "short" },
  
  // Pair 7: ออ / เอาะ
  { thai: "ออ", sound: "/ɔː/", type: "long" },
  { thai: "เอาะ", sound: "/ɔ/", type: "short" },
  
  // Pair 8: เออ / เออะ
  { thai: "เออ", sound: "/ɤː/", type: "long" },
  { thai: "เออะ", sound: "/ɤ/", type: "short" },
  
  // Pair 9: เอีย / เอียะ
  { thai: "เอีย", sound: "/iaː/", type: "long" },
  { thai: "เอียะ", sound: "/ia/", type: "short" },
  
  // Pair 10: เอือ / เอือะ
  { thai: "เอือ", sound: "/ɯaː/", type: "long" },
  { thai: "เอือะ", sound: "/ɯa/", type: "short" },
  
  // Pair 11: อัว / อัวะ
  { thai: "อัว", sound: "/uaː/", type: "long" },
  { thai: "อัวะ", sound: "/ua/", type: "short" },
  
  // Pair 12: เอา / เอาะ (Note: เอาะ is also used with ออ, but เอา is a distinct long vowel)
  { thai: "เอา", sound: "/au/", type: "long" },
  { thai: "เอาะ", sound: "/ɔ/", type: "short" },
];

// 8 Special Vowel Symbols
export const specialVowels: Vowel[] = [
  { thai: "ฤ", sound: "/rɯ/", type: "special" },
  { thai: "ฤา", sound: "/rɯː/", type: "special" },
  { thai: "ฦ", sound: "/lɯ/", type: "special" },
  { thai: "ฦา", sound: "/lɯː/", type: "special" },
  { thai: "ใ", sound: "/ai/", type: "special" },
  { thai: "ไ", sound: "/ai/", type: "special" },
  { thai: "ำ", sound: "/am/", type: "special" },
  { thai: "ๅ", sound: "/aː/", type: "special" },
];

// Helper function to get vowel pairs
export const getVowelPairs = () => {
  const longVowels = vowels.filter(v => v.type === "long");
  const shortVowels = vowels.filter(v => v.type === "short");
  
  return longVowels.map((long, index) => ({
    long,
    short: shortVowels[index],
  }));
};


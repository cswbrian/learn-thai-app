export interface ThaiNumber {
  thai: string;
  number: number;
  pronunciation?: string;
}

export const numbers: ThaiNumber[] = [
  { thai: "๐", number: 0, pronunciation: "soon" },
  { thai: "๑", number: 1, pronunciation: "nueng" },
  { thai: "๒", number: 2, pronunciation: "song" },
  { thai: "๓", number: 3, pronunciation: "sam" },
  { thai: "๔", number: 4, pronunciation: "see" },
  { thai: "๕", number: 5, pronunciation: "ha" },
  { thai: "๖", number: 6, pronunciation: "hok" },
  { thai: "๗", number: 7, pronunciation: "jet" },
  { thai: "๘", number: 8, pronunciation: "paet" },
  { thai: "๙", number: 9, pronunciation: "kao" },
  { thai: "๑๐", number: 10, pronunciation: "sip" },
];


import { Explanation } from "./type";

export const withOpacity = (hex: string, opacity: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};


export function formatScriptureData(data: any) {
  const explanations: Explanation[] = [];

  // Collect translations dynamically
  if (Array.isArray(data.translations)) {
    data.translations.forEach((item: any) => {
      const lang = item?.language?.language;
      const text = item?.text;

      if (lang && text) {
        explanations.push({ text, lang });
      }
    });
  }

  // Extract English transliteration
  const engVersion =
    data?.transliterations?.find(
      (t: any) => t?.language?.language === "English"
    )?.text ?? "";

  return {
    title: data?.text ?? "",
    engVersion,
    explanations,
  };
}

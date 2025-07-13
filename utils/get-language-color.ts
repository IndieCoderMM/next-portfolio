const languageColors = {
  javascript: "#f1e05a",
  typescript: "#2b7489",
  python: "#3572A5",
  css: "#563d7c",
  html: "#e34c26",
  ruby: "#701516",
};

export const getLanguageColor = (language: string) => {
  const lang = language.toLowerCase();
  if (Object.keys(languageColors).includes(lang)) {
    return languageColors[lang as keyof typeof languageColors];
  }
  return "#333";
};

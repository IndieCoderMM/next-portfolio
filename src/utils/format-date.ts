type Format = "short" | "long" | "numeric";

export const formatDate = (date: string, format?: Format) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: format,
    day: "numeric",
  });
};

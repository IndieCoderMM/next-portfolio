export const getBaseUrl = () => {
  return `https://${process.env.NEXT_PUBLIC_SITE_URL}`;
};

export const getParams = (
  obj: Record<string, string | Array<string> | undefined>,
) =>
  Object.entries(obj)
    .filter((entry) => entry[1])
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

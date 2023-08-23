import { getPlaiceholder } from "plaiceholder";

const getPlaceholder = async (src) => {
  const res = await fetch(src);
  const buffer = Buffer.from(await res.arrayBuffer());
  const {
    base64,
    metadata: { width, height },
  } = await getPlaiceholder(buffer);

  return { base64, width, height };
};

export default getPlaceholder;

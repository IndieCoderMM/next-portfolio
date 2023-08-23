import Image from "next/image";

const CoverImage = async ({ src, alt, placeholder, ...props }) => {
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      quality={100}
      placeholder="blur"
      blurDataURL={placeholder}
      className="h-auto w-full object-top"
    />
  );
};

export default CoverImage;

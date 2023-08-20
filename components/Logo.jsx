import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="mt-2 flex items-center justify-center">
      <Link
        href="/"
        className="flex items-center justify-center overflow-hidden rounded-full border-2 border-dark bg-white p-0.5 transition ease-in-out hover:scale-110"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;

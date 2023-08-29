import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className="flex items-center justify-center overflow-hidden rounded-full border-2 border-transparent bg-light p-0.5 transition-all duration-200 ease-in-out hover:translate-y-[-2px] hover:border-primary hover:shadow-lg dark:border-light  dark:hover:border-primary"
      >
        <Image
          src="/logo.png"
          alt="logo"
          priority
          width={70}
          height={70}
          className="object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;

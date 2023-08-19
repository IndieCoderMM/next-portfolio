import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="mt-2 flex items-center justify-center">
      <MotionLink
        href="/"
        className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-dark bg-light p-2 text-dark "
        whileHover={{
          backgroundColor: [
            "#fff",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#fff",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <h1 className="text-2xl font-bold ">HTO</h1>
      </MotionLink>
    </div>
  );
};

export default Logo;

import * as motion from "motion/react-client";
import AnimatedNumber from "../common/animated-number";

const Loader = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.5, duration: 1, type: "tween" }}
      className="bg-bg fixed top-0 left-0 z-[9999] h-full w-full"
    >
      <div className="flex h-full w-full flex-col p-4 max-md:gap-8 md:justify-between md:p-10">
        <span className="font-semibold text-white/40">Hein Thant</span>
        <div className="flex flex-col max-md:h-full max-md:justify-between">
          <div className="w-full text-3xl whitespace-pre-wrap md:w-2/5 md:text-5xl">
            I'm a coder, a learner, and a creator. I make software that solves
            problems and gets results.
          </div>
          <div className="flex items-end justify-between">
            <span className="text-white/30">Loading...</span>
            <motion.span className="text-7xl font-semibold md:text-9xl md:font-bold">
              <AnimatedNumber value={100} />%
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const LoaderWrapper = () => {
  return (
    <div className="min-h-screen w-full">
      <Loader onComplete={() => {}} />
    </div>
  );
};

export default LoaderWrapper;

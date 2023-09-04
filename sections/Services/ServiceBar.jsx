import AnimatedBar from "@/components/AnimatedBar";
import AnimatedNumber from "@/components/AnimatedNumber";

const ServiceBar = ({ title, percentage, barStyles }) => {
  return (
    <div className="flex w-full flex-col gap-2 py-4">
      <div className="flex items-end justify-between">
        <h2 className="text-lg font-semibold text-white lg:text-2xl">
          {title}
        </h2>
        <div className="font-semibold text-white lg:text-xl">
          <AnimatedNumber value={percentage} />%
        </div>
      </div>

      <AnimatedBar percentage={percentage} styles={barStyles} />
    </div>
  );
};

export default ServiceBar;

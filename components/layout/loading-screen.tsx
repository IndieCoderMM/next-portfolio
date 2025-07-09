import BlackholeLoader from "../common/blackhole-loader";
import Spinner from "../common/spinner";

const LoadingScreen = () => {
  return (
    <div className="relative min-h-[80vh] w-full">
      <div className="absolute inset-0 hidden items-center justify-center dark:flex">
        <BlackholeLoader />
      </div>
      <div className="absolute inset-0 grid place-items-center dark:hidden">
        <Spinner />
      </div>
    </div>
  );
};

export default LoadingScreen;

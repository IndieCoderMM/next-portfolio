import BlackholeLoader from "../common/blackhole-loader";

const LoadingScreen = () => {
  return (
    <div className="relative min-h-[80vh] w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <BlackholeLoader />
      </div>
    </div>
  );
};

export default LoadingScreen;

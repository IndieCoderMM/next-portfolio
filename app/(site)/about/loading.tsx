import Loader from "@/components/layout/loader";

const LoadingScreen = () => {
  return (
    <div className="grid min-h-[80vh] place-items-center">
      <Loader />
    </div>
  );
};

export default LoadingScreen;

const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 flex w-full items-center justify-center bg-light bg-dot-black/[0.2] dark:bg-dark dark:bg-dot-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
};

export default GridBackground;

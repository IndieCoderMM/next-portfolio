import ServiceCard from "./ServiceCard";

const ServicesGrid = ({ services }) => {
  return (
    <div className="innerWidth mx-auto flex flex-col items-center justify-center gap-8 overflow-hidden p-1 sm:flex-row sm:flex-wrap">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  );
};

export default ServicesGrid;

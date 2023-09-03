import ServiceCard from "./ServiceCard";

const ServicesGrid = ({ services }) => {
  return (
    <div className="interWidth mx-auto flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  );
};

export default ServicesGrid;

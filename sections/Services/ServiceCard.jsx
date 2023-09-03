import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="serviceCard relative w-[350px] text-dark">
      {/* Front Card */}
      <div className="ease flex h-[380px] w-full flex-col items-center justify-center gap-4 rounded-md bg-white p-8">
        <div className="h-16 w-16 rounded-full bg-gray-500">
          <img src="/images/placeholder.png" alt="placeholder" />
        </div>
        <h2 className="text-center text-xl font-semibold">{title}</h2>
      </div>
      {/* Back Card */}
      <div className="absolute left-0 top-0 h-[380px] w-full rounded-md bg-white px-4 py-10 text-center text-lg">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

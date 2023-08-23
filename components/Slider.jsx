"use client";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = ({ children, ...props }) => {
  return (
    <AwesomeSlider {...props}>
      {children.map((c, index) => (
        <div key={index} className="h-full w-full bg-blue-500">
          {c}
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default Slider;

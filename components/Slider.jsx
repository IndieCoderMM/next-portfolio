"use client";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

const Slider = ({ children, ...props }) => {
  return (
    <AwesomeSlider {...props} animation="foldOutAnimation">
      {children.map((c, index) => (
        <div key={index} className="h-full w-full bg-blue-500">
          {c}
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default Slider;

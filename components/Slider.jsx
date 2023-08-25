"use client";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

const Slider = ({ children, ...props }) => {
  return (
    <AwesomeSlider {...props} animation="foldOutAnimation">
      {children}
    </AwesomeSlider>
  );
};

export default Slider;

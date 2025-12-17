import React from "react";
import Svg, { Circle, Defs, Path, RadialGradient, Stop } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  colorIntial?: string;
  colorHalf?: string;
  colorEnd?: string;
}

const EllipseRadialBlur: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  colorIntial = "#FD9607",
  colorHalf = "#FD9607",
  colorEnd = "#FD9607",
  ...props
}) => (


  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Circle opacity="0.4" cx="20" cy="20" r="20" fill="url(#paint0_radial_221_2078)" />
    <Defs>
      <RadialGradient id="paint0_radial_221_2078" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(20)">
        <Stop stopColor={colorIntial} />
        <Stop offset="0.341346" stopColor={colorHalf} stopOpacity="0.5" />
        <Stop offset="1" stopColor={colorEnd} stopOpacity="0" />
      </RadialGradient>
    </Defs>
  </Svg>


);

export default EllipseRadialBlur;

import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const Toggler: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  color = "#9C043A",
  ...props
}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path d="M4 16H28M4 8H28M4 24H28" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Toggler;

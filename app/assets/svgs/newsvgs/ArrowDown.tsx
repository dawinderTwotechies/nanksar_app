import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ArrowDown: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  color = "#9C043A",
  ...props
}) => (
  <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" {...props}>
    <Path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ArrowDown;

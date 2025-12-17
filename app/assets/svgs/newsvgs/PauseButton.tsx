import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const PauseButton: React.FC<IconProps> = ({
  width = 29,
  height = 29,
  color = "#333333",
  ...props
}) => (

  <Svg width={width} height={height} viewBox="0 0 29 29" fill="none" {...props}>
    <Path d="M11 4H8C7.17157 4 6.5 4.67157 6.5 5.5V23.5C6.5 24.3284 7.17157 25 8 25H11C11.8284 25 12.5 24.3284 12.5 23.5V5.5C12.5 4.67157 11.8284 4 11 4Z" fill={color} />
    <Path d="M21 4H18C17.1716 4 16.5 4.67157 16.5 5.5V23.5C16.5 24.3284 17.1716 25 18 25H21C21.8284 25 22.5 24.3284 22.5 23.5V5.5C22.5 4.67157 21.8284 4 21 4Z" fill={color} />
  </Svg>
);

export default PauseButton;

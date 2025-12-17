import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const Mail: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  color = "#9C043A",
  ...props
}) => (

  <Svg width={width} height={height} viewBox="0 0 20 21" fill="none" {...props}>
    <Path d="M18.3332 5.18168C18.3332 4.26501 17.5832 3.51501 16.6665 3.51501H3.33317C2.4165 3.51501 1.6665 4.26501 1.6665 5.18168M18.3332 5.18168V15.1817C18.3332 16.0983 17.5832 16.8483 16.6665 16.8483H3.33317C2.4165 16.8483 1.6665 16.0983 1.6665 15.1817V5.18168M18.3332 5.18168L9.99984 11.015L1.6665 5.18168" stroke={color} strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
  </Svg>
);

export default Mail;

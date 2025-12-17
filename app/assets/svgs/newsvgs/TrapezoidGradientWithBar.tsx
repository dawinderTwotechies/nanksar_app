import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  colorPrimary?: string;
  colorSecondary?: string;
}

const TrapezoidGradientWithBar: React.FC<IconProps> = ({
  width = 72,
  height = 41,
  colorPrimary= "#9C043A",
  colorSecondary= '#FB9EBF',
  ...props
}) => (
  <Svg  width={width} height={height} viewBox="0 0 72 41" fill="none">
    <Path d="M10 0.84082H62V2.84082H10V0.84082Z" fill="url(#paint0_linear_1406_3005)" />
    <Path d="M10 0.84082H62L72 40.8408H0L10 0.84082Z" fill="url(#paint1_linear_1406_3005)" />
    <Defs>
      <LinearGradient id="paint0_linear_1406_3005" x1="10" y1="0.84082" x2="10.1536" y2="4.83491" gradientUnits="userSpaceOnUse">
        <Stop stopColor={colorSecondary} />
        <Stop offset="1" stopColor={colorPrimary} />
      </LinearGradient>
      <LinearGradient id="paint1_linear_1406_3005" x1="36" y1="0.84082" x2="36" y2="40.8408" gradientUnits="userSpaceOnUse">
        <Stop stopColor={colorPrimary} stopOpacity="0.26" />
        <Stop offset="1" stopColor={colorPrimary} stopOpacity="0" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default TrapezoidGradientWithBar;

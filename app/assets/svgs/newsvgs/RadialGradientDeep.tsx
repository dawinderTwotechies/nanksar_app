import React from "react";
import Svg, {
  G,
  Ellipse,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const RadialGradientDeep: React.FC<IconProps> = ({
  width = 402,
  height = 874,
  color = "#9C043A",
  ...props
}) => (
  <Svg width={width} height={height} viewBox="0 0 402 874" fill="none" {...props}>
    <Defs>
      <RadialGradient
        id="paint0_radial_158_3169"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(201 454.5) rotate(90) scale(454.5 492)"
      >
        <Stop offset={0} stopColor={color} />
        <Stop offset={1} stopColor={color} stopOpacity={0} />
      </RadialGradient>
    </Defs>

    {/* Simulated blur/glow layers */}
    <G opacity={0.5}>
      <Ellipse cx={201} cy={454.5} rx={492} ry={454.5} fill="url(#paint0_radial_158_3169)" />
    </G>
    <G opacity={0.3}>
      <Ellipse cx={201} cy={454.5} rx={492} ry={454.5} fill="url(#paint0_radial_158_3169)" />
    </G>
    <G opacity={0.15}>
      <Ellipse cx={201} cy={454.5} rx={492} ry={454.5} fill="url(#paint0_radial_158_3169)" />
    </G>
  </Svg>
);

export default RadialGradientDeep;

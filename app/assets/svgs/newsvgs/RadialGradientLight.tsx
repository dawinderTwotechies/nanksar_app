import React from "react";
import Svg, {
  G,
  Ellipse,
  Defs,
  RadialGradient,
  Stop,
  Filter,
  FeFlood,
  FeBlend,
  FeGaussianBlur,
} from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const RadialGradientLight: React.FC<IconProps> = ({
  width = 402,
  height = 635,
  color = "#9C043A",
  ...props
}) => (

  <Svg width={width} height={height} viewBox="0 0 402 635" fill="none" {...props}>
    <Defs>
      <RadialGradient
        id="paint0_radial_158_3154"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(201 317.5) rotate(90) scale(177.5 348)"
      >
        <Stop offset={0} stopColor={color} stopOpacity={0.4} />
        <Stop offset={1} stopColor={color} stopOpacity={0} />
      </RadialGradient>
    </Defs>

    {/* Base ellipse */}
    <G opacity={0.5}>
      <Ellipse
        cx={201}
        cy={317.5}
        rx={348}
        ry={177.5}
        fill="url(#paint0_radial_158_3154)"
      />
    </G>

    {/* Optional extra layers for blur effect */}
    <G opacity={0.3}>
      <Ellipse
        cx={201}
        cy={317.5}
        rx={348}
        ry={177.5}
        fill="url(#paint0_radial_158_3154)"
      />
    </G>
    <G opacity={0.15}>
      <Ellipse
        cx={201}
        cy={317.5}
        rx={348}
        ry={177.5}
        fill="url(#paint0_radial_158_3154)"
      />
    </G>
  </Svg>
);

export default RadialGradientLight;

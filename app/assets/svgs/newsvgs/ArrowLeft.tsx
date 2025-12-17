import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}


const ArrowLeft: React.FC<IconProps> = ({
    width = 24,
    height = 24,
    color = "#9C043A",
    ...props
}) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
        <Path d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);
export default ArrowLeft;

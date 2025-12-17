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
        <Path d="M15 18L9 12L15 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        
    </Svg>
);
export default ArrowLeft;

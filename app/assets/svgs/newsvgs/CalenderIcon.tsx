import React from "react";
import Svg, { Path, Defs, ClipPath, Rect, G } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const CalendarIcon: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  color = "#9C043A",
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 20 21"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_499_691)">
      <Path
        d="M13.3333 1.84827V5.1816M6.66667 1.84827V5.1816M2.5 8.51493H17.5M4.16667 3.51493H15.8333C16.7538 3.51493 17.5 4.26113 17.5 5.1816V16.8483C17.5 17.7687 16.7538 18.5149 15.8333 18.5149H4.16667C3.24619 18.5149 2.5 17.7687 2.5 16.8483V5.1816C2.5 4.26113 3.24619 3.51493 4.16667 3.51493Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_499_691">
        <Rect width="20" height="20" fill="white" y={0.181641} />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CalendarIcon;

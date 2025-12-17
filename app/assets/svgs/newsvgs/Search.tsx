import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const Search: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "#9C043A",
  ...props
}) => (


  <Svg width={width} height={height} strokeWidth={1.5} stroke={color} viewBox="0 0 24 24" fill="none" {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </Svg>
);

export default Search;

import React from "react";
import Svg, {
    G,
    Path,
    Defs,
    Filter,
    FeFlood,
    FeColorMatrix,
    FeOffset,
    FeGaussianBlur,
    FeComposite,
    FeBlend,
} from 'react-native-svg';

interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}

const Khanda: React.FC<IconProps> = ({
    width = 24,
    height = 24,
    color = "#9C043A",
    ...props
}) => (
    <Svg width={width} height={height} viewBox="0 0 135 135" fill="none" {...props}>
        <G filter="url(#filter0_d)">
            <Path
                d="M82.5 74.7727C96.45 67.9545 105 58.6477 105 47.5C105 38.4318 99.225 30.1136 89.5875 23.6364H89.325C93.75 28.2386 96.3 34.1705 96.3 40.6818C96.3 50.9091 90 57.7273 80.625 63.9659C80.625 64 76.425 66.3864 71.25 69.3523V65.6705L78.75 61.1364C78.75 61.1364 78 59.0909 77.175 55.8864C84.75 52.8864 90 46.4432 90 38.9773C90 31.6136 84.9 25.2386 77.4375 22.1705C78.15 18.9659 78.75 16.8182 78.75 16.8182L67.5 10L56.25 16.8182C56.25 16.8182 56.85 18.9659 57.5625 22.1705C50.1375 25.2386 45 31.6136 45 38.9773C45 46.4432 50.25 52.8864 57.825 55.8864C57 59.0909 56.25 61.1364 56.25 61.1364L63.75 65.6705V69.3523C58.575 66.3864 54.375 64 54.375 63.9659C45 57.7273 38.7 50.9091 38.7 40.6818C38.7 34.1705 41.25 28.2386 45.675 23.6364H45.45C35.775 30.1136 30 38.4318 30 47.5C30 58.6477 38.5875 67.9545 52.5 74.7727L56.25 69.6591L63.45 73.8523L50.025 81.5909L52.5 85L63.75 78.4205V85H71.25V78.4205L82.5 85L84.975 81.5909L71.55 73.8523L78.75 69.6591L82.5 74.7727ZM85.3125 38.9773C85.3125 44.3977 81.6 49.0682 76.1625 51.5568C75.525 48.2841 75 44.5 75 40.6818C75 36.1477 75.75 30.9659 76.575 26.5682C81.7875 29.0909 85.3125 33.6932 85.3125 38.9773ZM49.6875 38.9773C49.6875 33.6932 53.2125 29.0909 58.4625 26.5682C59.25 30.9659 60 36.1477 60 40.6818C60 44.5 59.475 48.2841 58.8375 51.5568C53.4 49.0682 49.6875 44.3977 49.6875 38.9773Z"
                fill={color}
            />
        </G>
        <Defs>
            <Filter
                id="filter0_d"
                x="0"
                y="0"
                width="135"
                height="135"
                filterUnits="userSpaceOnUse"
            >
                <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                <FeColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <FeOffset dy="20" />
                <FeGaussianBlur stdDeviation="15" />
                <FeComposite in2="hardAlpha" operator="out" />
                <FeColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <FeBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                />
                <FeBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </Filter>
        </Defs>
    </Svg>
);

export default Khanda;

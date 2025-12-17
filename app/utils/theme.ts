import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');


const COLORS = {
  default: {
    primary: "#021E42",
    secondary: "#fbfcfe",
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: {
    primary: "#EC691F",
    secondary: "#fbfcfe",
    black: "#000000",
    white: "#FFFFFF",
  },
  secondary: {
    primary: "#9C043A",
    secondary: "#fbfcfe",
    black: "#000000",
    white: "#FFFFFF",
  },
  tertiary: {
    primary: "#9C043A",
    secondary: "#fbfcfe",
    black: "#000000",
    white: "#FFFFFF",
  },
  quaternary: {
    primary: "#9C043A",
    secondary: "#fbfcfe",
    black: "#000000",
    white: "#FFFFFF",
  },
};


const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
  widthPer: (percent = 100) => width * (percent / 100),
  heightPer: (percent = 100) => height * (percent / 100),
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 1,
  },
};

const FONTS = {
};



export { COLORS, SIZES, SHADOWS, FONTS };

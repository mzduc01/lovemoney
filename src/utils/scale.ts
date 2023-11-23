import {Dimensions, Platform} from "react-native";
import {isTablet} from "react-native-device-info";
const {width, height} = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
const isTabletDevices = () => {
  if (Platform.OS === "android") {
    return longDimension / shortDimension <= 1.6;
  }
  return isTablet();
};
//Guideline sizes are based on standard ~5" screen mobile device and 7,9" screen tablet & ipad
const guidelineBaseWidth = isTabletDevices() ? 768 : 375;
const guidelineBaseHeight = isTabletDevices() ? 1024 : 667;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const ratioW = (size: number) => (shortDimension * size) / 100;

const fontCheck = (font: number) => {
  return isTabletDevices() ? moderateScale(font * 1.2) : scale(font);
};
const fontCheck1 = (font: number) => {
  return isTabletDevices() ? moderateScale(font * 1.2) : scale(font * 1.2);
};

export {
  scale,
  verticalScale,
  moderateScale,
  ratioW,
  width,
  height,
  isTabletDevices,
  fontCheck,
  fontCheck1,
};

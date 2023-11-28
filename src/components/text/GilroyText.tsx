import {moderateScale} from "@app/utils/scale";
import React, {ReactElement} from "react";
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from "react-native";
interface IProps extends TextProps {
  children?: ReactElement | any;
  style?: StyleProp<TextStyle>;
  myFontStyle?: TYPE_OF_FONT;
  onPress?: () => void;
}
export type TYPE_OF_FONT = "Regular" | "Bold" | "ExtraBold" | "Medium" | "SemiBold" | "Light";

const FONT_FAMILY = {
  Bold: "Gilroy-Bold",
  ExtraBold: "Gilroy-ExtraBold",
  Light: "Gilroy-Light",
  Medium: "Gilroy-Medium",
  Regular: "Gilroy-Regular",
  SemiBold: "Gilroy-SemiBold",
};

const GilroyText = (props: IProps) => {
  const {children, style, myFontStyle} = props;
  let textStyle = {};
  if (myFontStyle) {
    textStyle = {
      fontFamily: FONT_FAMILY[myFontStyle],
    };
  } else {
    textStyle = {
      fontFamily: FONT_FAMILY.Regular,
    };
  }
  return (
    <Text
      allowFontScaling={false}
      onPress={props.onPress}
      {...props}
      style={[styles.text, style, textStyle]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
    padding: 0,
    fontSize: moderateScale(18),
    color: "#1C1C1C",
  },
});
export default GilroyText;

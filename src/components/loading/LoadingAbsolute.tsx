import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import Colors from "../../assets/colors/Colors";
import {width, height} from "@app/utils/scale";

export const LoadingAbsolute = () => {
  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        width: width,
        height: height,
        flexDirection: "row",
        zIndex: 1,
        backgroundColor: "rgba(52, 52, 52, 0.6)",
      }}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};
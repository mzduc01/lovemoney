import {Text, View,TouchableOpacity} from "react-native";
import React from "react";
import AppActions from "@app/redux/app/actions";
import { useDispatch } from "react-redux";

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(AppActions.toggleMenu(true));
      };
  return (
    <View style={{flex: 1, justifyContent:'center'}}>
      <TouchableOpacity onPress={onClick}>
        <Text>click here</Text>
      </TouchableOpacity>
    </View>
  );
};

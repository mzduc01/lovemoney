import * as Screens from "@app/screens";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import Routes from "../Routes";
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}>
      <AuthStack.Screen
        name={Routes.REGISTER}
        component={Screens.RegisterProfile}
        options={{gestureEnabled: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;



import ModalMenu from "@app/components/modal/ModalMenu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Routes from "../Routes";
import BottomTabNavigator from "./bottom-tab-navigator";

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <>
      <ModalMenu />
      <MainStack.Navigator
        initialRouteName={Routes.MAIN_BOTTOM_TAB}
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}>
        <MainStack.Screen
          name={Routes.MAIN_BOTTOM_TAB}
          component={BottomTabNavigator}
        />
        {/* <MainStack.Screen
          name={Routes.RC_BOTTOM_TAB}
          component={RecruitmentBottomTab}
        /> */}

      </MainStack.Navigator>
    </>
  );
};

export default MainNavigator;

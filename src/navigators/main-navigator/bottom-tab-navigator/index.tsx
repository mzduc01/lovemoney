import Routes from "@app/navigators/Routes";
import { HomeScreen, SignImage } from "@app/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Header } from "./header";
import { MyTabBar } from "./tab-bar";

const BottomTabStack = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <>
      <BottomTabStack.Navigator
        initialRouteName={Routes.HOME}
        tabBar={(props: any) => <MyTabBar {...props} />}
        screenOptions={{
          //headerShown: false,
          header: (props) => <Header {...props}/>
        }}>
        <BottomTabStack.Screen
          options={{
            tabBarLabel: "Trang chủ",
          }}
          name={Routes.HOME}
          component={HomeScreen}
        />
        <BottomTabStack.Screen
          options={{
            tabBarLabel: "Hoạt động",
          }}
          name={Routes.ACTIVITY}
          component={SignImage}
        />
        <BottomTabStack.Screen
          options={{
            tabBarLabel: "Biểu đồ",
          }}
          name={Routes.CHART}
          component={HomeScreen}
        />
        <BottomTabStack.Screen
          options={{
            tabBarLabel: "Cài đặt",
          }}
          name={Routes.SETTING}
          component={HomeScreen}
        />
      </BottomTabStack.Navigator>
    </>
  );
};

export default BottomTabNavigator;

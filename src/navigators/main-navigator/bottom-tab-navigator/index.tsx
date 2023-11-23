import Routes from "@app/navigators/Routes";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MyTabBar} from "./tab-bar";
import {Text, TouchableOpacity, View} from "react-native";
import {navigate} from "@app/navigators/rootNavigation";
import AppActions from "@app/redux/app/actions";
import {useDispatch} from "react-redux";
import {HomeScreen} from "@app/screens";

const BottomTabStack = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const dispatch = useDispatch();
  return (
    <>
      <BottomTabStack.Navigator
        initialRouteName={Routes.HOME}
        tabBar={(props: any) => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <BottomTabStack.Screen
          options={{
            tabBarLabel: "Home",
          }}
          name={Routes.HOME}
          component={HomeScreen}
        />
        <BottomTabStack.Screen
          options={{
            tabBarLabel: "Activity",
          }}
          name={Routes.ACTIVITY}
          component={HomeScreen}
        />
        <BottomTabStack.Screen
          options={{
            tabBarLabel: "Chart",
          }}
          name={Routes.CHART}
          component={HomeScreen}
        />
        <BottomTabStack.Screen
          options={{
            tabBarLabel: "Setting",
          }}
          name={Routes.SETTING}
          component={HomeScreen}
        />
      </BottomTabStack.Navigator>
    </>
  );
};

export default BottomTabNavigator;

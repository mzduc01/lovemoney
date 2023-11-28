import {moderateScale, scale} from "@app/utils/scale";
import React from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useDispatch} from "react-redux";
import {iconForcusList, iconList} from "./constant";
import LinearGradient from "react-native-linear-gradient";
import GilroyText from "@app/components/text/GilroyText";

export function MyTabBar({state, descriptors, navigation}: any) {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 5.22,
        elevation: 7,
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={["#FFFF", "#E7F7E5"]}
        style={[
          styles.tabBarContainer,
          {
            //paddingBottom: insets.bottom,
            height: scale(35) + insets.bottom,
          },
        ]}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const Icon = isFocused ? iconForcusList[index] : iconList[index];
          // let Icon = iconList[index];
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableHighlight
              key={route.key}
              underlayColor="white"
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabContainer}>
              <>
                <View style={styles.vCenter}>
                  <View
                    style={{
                      width: scale(35),
                      height: scale(32),
                      alignItems: "center",
                    }}>
                    {Icon}
                  </View>
                  <GilroyText
                    style={{
                      color: isFocused ? "#1C1C1C" : "#D0D0D0",
                      fontSize: moderateScale(10),
                    }}>
                    {label}
                  </GilroyText>
                </View>

                {/* {index === 2 && <Badge />} */}
              </>
            </TouchableHighlight>
          );
        })}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    paddingTop: scale(12),
    // justifyContent: "center",
    // alignItems: "center",
  },
  iconNoti: {
    backgroundColor: "#DF1A78",
    width: scale(15),
    height: scale(15),
    borderRadius: scale(7.5),
    position: "absolute",
    zIndex: 1,
    top: 0,
    right: 0,
  },
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    paddingHorizontal: scale(12),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5.22,

    elevation: 7,
  },
  vCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  vIcon: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5.22,

    elevation: 7,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: scale(50),
    height: scale(50),
  },
});

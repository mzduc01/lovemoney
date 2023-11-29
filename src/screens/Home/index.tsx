import GilroyText from "@app/components/text/GilroyText";
import {increment} from "@app/redux/budget/reducer";
import {RootState} from "@app/redux/store";
import {width} from "@app/utils/scale";
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {MinusCircle, PlusCircle} from "lucide-react-native";
import React, {useCallback, useMemo, useRef, useState} from "react";
import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {useDispatch, useSelector} from "react-redux";
import {BalanceAdd, FloatingButton, OptionsAdd} from "./component";
import useAnimatedState from "@app/hooks/useAnimatedState";
import {BounceIn, BounceOut} from "react-native-reanimated";

export const HomeScreen = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const dispatch = useDispatch();
  const [stateAdd, setStateAdd] = React.useState(true);
  // variables
  const snapPoints = useMemo(() => ["50%", "100%"], []);

  // callbacks
  const handlePresentModalPress = useCallback((state: boolean) => {
    setStateAdd(state);
    bottomSheetModalRef.current?.present();
  }, []);
  const handleBackModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const counter = useSelector(
    (state: RootState) => state.budgetSlice.currentBalance,
  );
  const [open, setOpen] = React.useState(false);


  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <ScrollView>
        {/* <LottieView
          style={{
            width: width - 100,
            height: height / 3,
            alignSelf: "center",
          }}
          source={require("@app/assets/lottie/home.json")}
          autoPlay
          loop
        /> */}
        {/* <CurrentBalence /> */}
        {/* <TouchableOpacity
          onPress={() => handlePresentModalPress(false)}
          style={{alignItems: "center", marginTop: 30}}>
          <PlusCircle size={23} color="#646464" />
          <GilroyText>Thêm tiền</GilroyText>
        </TouchableOpacity> */}
        <View
          style={{
            margin: 20,
            flex: 1,
            backgroundColor: "#E4F7E5",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 7,
            borderRadius: 10,
            marginTop: 30,
          }}>
          <View
            style={{
              backgroundColor: "white",
              margin: 2,
              height: 30,
              width: 200,
              position: "absolute",
              left: 10,
              zIndex: 1,
              top: -15,
            }}>
            <GilroyText>Lịch sử biến động: </GilroyText>
          </View>
          <View style={{backgroundColor: "white", margin: 2, height: 50}}>
            {/* <GilroyText>Số dư đang có</GilroyText> */}
          </View>
        </View>
      </ScrollView>

      <BottomSheetModalProvider>
        <FloatingButton
          style={{bottom: 20, width: 70, height: 70}}
          onPress={() => setOpen(!open)}
          Icon={PlusCircle}
        />
        {open && (
          <>
            <FloatingButton
              entering={BounceIn}
              exiting={BounceOut}
              style={{bottom: 90, right: 90}}
              onPress={() => handlePresentModalPress(false)}
              Icon={PlusCircle}
            />
            <FloatingButton
              entering={BounceIn}
              exiting={BounceOut}
              style={{bottom: 20, right: 110}}
              onPress={() => handlePresentModalPress(true)}
              Icon={MinusCircle}
            />
            <FloatingButton
              entering={BounceIn}
              exiting={BounceOut}
              style={{bottom: 110}}
              onPress={() => handlePresentModalPress(false)}
              Icon={PlusCircle}
            />
          </>
        )}
        <BottomSheetModal
          handleComponent={() => (
            <LinearGradient
              style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={["#FFF7E0", "#E7F7E5"]}>
              <View
                style={{
                  backgroundColor: "white",
                  flex: 1,
                  width: width - 20,
                  margin: 10,
                  borderRadius: 12,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: -1,
                    height: -1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 7,
                }}>
                <View
                  style={{
                    height: 6,
                    width: 40,
                    backgroundColor: "#EDEDED",
                    alignSelf: "center",
                    marginVertical: 8,
                    borderRadius: 12,
                  }}></View>
              </View>
            </LinearGradient>
          )}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <LinearGradient
            style={styles.contentContainer}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={["#FFF7E0", "#E7F7E5"]}>
            <View
              style={{
                backgroundColor: "white",
                flex: 1,
                width: width - 20,
                margin: 10,
                borderRadius: 12,
                shadowColor: "#000",
                shadowOffset: {
                  width: -1,
                  height: -1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 7,
              }}>
              {stateAdd ? <OptionsAdd /> : <BalanceAdd />}
            </View>
          </LinearGradient>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

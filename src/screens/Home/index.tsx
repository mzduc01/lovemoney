import GilroyText from "@app/components/text/GilroyText";
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import React, {useCallback, useMemo, useRef} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CurrentBalence, FloatingButton, OptionsAdd} from "./component";
import LinearGradient from "react-native-linear-gradient";
import {height, width} from "@app/utils/scale";
import LottieView from "lottie-react-native";
import {PlusCircle} from "lucide-react-native";

export const HomeScreen = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "100%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleBackModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

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
        <TouchableOpacity style={{alignItems: "center", marginTop: 30}}>
          <PlusCircle size={23} color="#646464" />
          <GilroyText>Thêm tiền</GilroyText>
        </TouchableOpacity>
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
        <FloatingButton onPress={handlePresentModalPress} />
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
              <OptionsAdd />
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

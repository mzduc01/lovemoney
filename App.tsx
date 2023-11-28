/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { LoadingProvider } from "@app/context/LoadingProvider";
import store from "@app/redux/store";
//import {AppContainer} from "@app/navigators/app-container";

import { AppContainer } from "@app/navigators";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

const App = () => {
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   SplashScreen.hide();
  //   // handlerCodepush();
  // }, []);
  // const deploymentKey = isAndroid
  //   ? Config.CODEPUSH_ANDROID_KEY
  //   : Config.CODEPUSH_IOS_KEY;

  // const handlerCodepush = async () => {
  //   try {
  //     if (!__DEV__) {
  //       await codePush.sync({
  //         updateDialog: undefined,
  //         deploymentKey,
  //         // installMode: codePush.InstallMode.IMMEDIATE,
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err, false, "code push");
  //   }
  // };

  return (
    <LoadingProvider>
      <Provider store={store}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={"transparent"}
          translucent={true}
        />
        <SafeAreaProvider>
          <LinearGradient
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={["#FFFF", "#E4F7E5"]}>
            <SafeAreaView style={{flex: 1}}>
              <AppContainer />
            </SafeAreaView>
          </LinearGradient>
        </SafeAreaProvider>
      </Provider>
    </LoadingProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// let codePushOptions = {
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//   installMode: codePush.InstallMode.ON_NEXT_RESTART,
// };

// export default codePush(codePushOptions)(App);
export default App;




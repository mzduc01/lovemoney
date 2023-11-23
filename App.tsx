/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";

import store from "@app/redux/store";
import {LoadingProvider} from "@app/context/LoadingProvider";
//import {AppContainer} from "@app/navigators/app-container";

import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import { AppContainer } from "@app/navigators";

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
          <AppContainer/>
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

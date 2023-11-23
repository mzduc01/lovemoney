import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigator from '../auth-navigator';
import MainNavigator from '../main-navigator';
import rootNavigation from '../rootNavigation';
export const AppContainer = () => {
  return (
    <NavigationContainer ref={rootNavigation.navigationRef}>
      {true ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

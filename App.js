import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Dashboard from './Screen/Dashboard';
import Login from './Screen/Login';
import VisitorsAdd from './Screen/visitoradd';
import CreateVisitor from './Screen/visitorDetails';
import ProfilePick from './Screen/visitorProfilePick';

import BottamNavigator from './Navigation/BottamNavigation';


const Stack = createStackNavigator();

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'black',
    },
  };

  return (
    <PaperProvider theme={MyTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" theme={MyTheme} component={Login} />
          <Stack.Screen name="tabs" theme={MyTheme} component={BottamNavigator} />
          <Stack.Screen name="Dash" theme={MyTheme}  component={Dashboard} />
          <Stack.Screen name="VisitorsAdd" theme={MyTheme} component={VisitorsAdd} />
          <Stack.Screen name="VSADD" theme={MyTheme} component={CreateVisitor} />
          <Stack.Screen name="PROPICK" theme={MyTheme} component={ProfilePick} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

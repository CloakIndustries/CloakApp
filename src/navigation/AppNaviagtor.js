import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../auth/Splash';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

const Stack = createNativeStackNavigator();
const AppNaviagtor = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNaviagtor;

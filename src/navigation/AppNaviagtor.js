import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../auth/Splash';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Cart from '../Screen/Cart';
import Home from '../Screen/Home';
import Settings from '../Screen/Settings';
import Category from '../Screen/Categories';
import CustomBottomTab from './components/shared/BottomTabs/CustomBottomTab';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
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
  );
};
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="dashboard"
        component={Home}
      />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Home"
          component={AppStack}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Cart'}}
          name="Cart"
          component={Cart}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Categories'}}
          name="Categories"
          component={Category}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Setting'}}
          name="Setting"
          component={Settings}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

const AppNaviagtor = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <NavigationContainer onReady={() => changeNavigationBarColor('#818281')}>
      {isLogged ? <AuthStack /> : <BottomTabs />}
    </NavigationContainer>
  );
};

export default AppNaviagtor;

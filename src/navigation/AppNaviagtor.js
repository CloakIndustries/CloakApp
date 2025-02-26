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
import EditProfile from '../Screen/Setting/EditProfile';
import ShippingAddress from '../Screen/Setting/ShippingAddress';
import AddShippingAddress from '../Screen/Setting/AddShippingAddress';
import Favourite from '../Screen/Setting/Favourite';
import Order from '../Screen/Setting/Order';
import ProductDetails from '../Screen/ProductDetails';

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
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Screen
        options={{headerShown: false}}
        name="dashboard"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProductDetails"
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
};
const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Settings}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ShiipingAddresses"
        component={ShippingAddress}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddShippingAddress"
        component={AddShippingAddress}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Favourite"
        component={Favourite}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Order"
        component={Order}
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
          component={SettingStack}
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

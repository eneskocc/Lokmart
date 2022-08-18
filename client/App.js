import * as React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './app/redux/store';
import {Provider} from 'react-redux';

import {colors} from './app/config';

import Home from './app/screens/Home';
import Splash from './app/screens/Welcome/Splash';
import Splash1 from './app/screens/Welcome/Splash1';
import Login from './app/screens/Welcome/Login';
import Register from './app/screens/Welcome/Register';
import Categories from './app/screens/Home/Categories';
import Search from './app/screens/Home/Search';
import Filter from './app/screens/Home/Filter';
import Products from './app/screens/Home/Products';
export const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Splash1" component={Splash1} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

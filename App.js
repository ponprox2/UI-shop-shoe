/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import LoginMomo from './component/loginMomo';
import Home from './component/home';
import WishList from './component/wishList';
import Cart from './component/Cart';
import User from './component/User';
import ProductDetail from './component/productDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from './component/icon/home.svg';
import Heart from './component/icon/heart.svg';
import CartIcon from './component/icon/cart.svg';
import UserIcon from './component/icon/userIcon.svg';
import BottomNav from './component/bottomNav';
import {MenuProvider} from 'react-native-popup-menu';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={ProductDetail}
          options={{
            tabBarIcon: props => {
              return (
                <View>
                  <HomeIcon />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="wishlist"
          component={WishList}
          options={{
            tabBarIcon: props => {
              return (
                <View>
                  <Heart />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarIcon: props => {
              return (
                <View>
                  <CartIcon />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="customer"
          component={User}
          options={{
            tabBarIcon: props => {
              return (
                <View>
                  <UserIcon />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="tabs" component={BottomNav} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <MyTabs /> */}
    </MenuProvider>
  );
}

export default App;

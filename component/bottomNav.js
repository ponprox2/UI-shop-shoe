import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
} from 'react-native';
import Home from './home';
import WishList from './wishList';
import Cart from './Cart';
import User from './User';
import HomeIcon from './icon/home.svg';
import Heart from './icon/heart.svg';
import CartIcon from './icon/cart.svg';
import UserIcon from './icon/userIcon.svg';
const Tab = createBottomTabNavigator();

function BottomNav({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {position: 'absolute'},
      }}>
      <Tab.Screen
        navigation={navigation}
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <HomeIcon fill={props.focused ? 'black' : '#D6D6D6'} />
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
                <Heart fill={props.focused ? 'black' : '#D6D6D6'}/>
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
                <CartIcon fill={props.focused ? 'black' : '#D6D6D6'}/>
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
                <UserIcon fill={props.focused ? 'black' : '#D6D6D6'}/>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;

import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome, Ionicons, FontAwesome5, Foundation } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import OrdersScreen from '../screens/OrdersScreen';
import AppointmentScreen from '../screens/AppointmentScreen';


const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                  
                />
              );
            } else if (route.name === 'Cart') {
              return (
                <FontAwesome
                  name={focused ? 'shopping-cart' : 'shopping-cart'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Profile') {
                return (
                  <FontAwesome5
                    name={focused ? 'user-cog' : 'user-cog'}
                    size={size}
                    color={color}
                  />
                );
              }
              else if (route.name === 'Appointments') {
                return (
                  <Ionicons
                    name={focused ? 'list-circle' : 'list-circle-outline'}
                    size={size}
                    color={color}
                  />
                );
              }
          },
          tabBarInactiveTintColor: '#fecaca',
          tabBarActiveTintColor: 'white',
          tabBarStyle : {
            backgroundColor : '#0891b2',
            opacity : 0.98
          }
          // tabBarBackground : {
          //   backgroundColor : 'black'
          // }
          
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        //   options={{ tabBarBadge: 3 }}
        />
        {/* <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: 3 }} /> */}
        <Tab.Screen name="Appointments" component={AppointmentScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}
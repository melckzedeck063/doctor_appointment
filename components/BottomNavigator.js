import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome, Ionicons, FontAwesome5, Foundation, Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import OrdersScreen from '../screens/OrdersScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import ThreadScreen from '../screens/ThreadScreen';


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
            else if (route.name === 'Chats') {
                return (
                  <Feather
                    name={focused ? 'message-square' : 'message-circle'}
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
            backgroundColor : '#008494',
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
        <Tab.Screen name="Appointments" component={AppointmentScreen} />
        {/* <Tab.Screen name="Completed" component={CompletedAppointments} /> */}
        <Tab.Screen name="Chats"  component={ThreadScreen} 
          
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}
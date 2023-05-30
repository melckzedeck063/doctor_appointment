import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SIgnUpScreen';
import BottomNavigator from './components/BottomNavigator';
import DiseaseScreen from './screens/DiseaseScreen';
import DoctorScreen from './screens/DoctorScreen';
import AllDoctors from './screens/AllDoctorsScreen';
import AllCategories from './screens/AllCategories';
import AppointmentDetails from './screens/AppointmentDetails';
import MessageScreen from './screens/MessageScreen';
import CategoryForm from './screens/CategoryForm';
import DoctorForm from './screens/DoctorForm';
import SettingsScreen from './screens/SettingScreen';
import MessageListScreen from './screens/ChatListScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <StatusBar style='light' />
         <Stack.Navigator
               screenOptions={{
                headerStyle: {
                  backgroundColor: '#0891b2',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
         >
             <Stack.Screen   name='Welcome'  component={WelcomeScreen} 
             options = {{title : 'Welcome'}}
             />
             <Stack.Screen name='Home' component={HomeScreen} 
                options={{title  : 'Home'}}
             />
              <Stack.Screen   name='Login'  component={LoginScreen} 
             options = {{title : 'Welcome'}}
             />
             <Stack.Screen name='SignUp' component={SignUpScreen} 
                options={{title  : 'Home'}}
             />
             <Stack.Screen name='HomeTab' component={BottomNavigator}
                options={{
                  headerShown :  false
                }}
             />
             <Stack.Screen name='Disease'  component={DiseaseScreen} />
             <Stack.Screen name='Doctor' component={DoctorScreen} />
             <Stack.Screen name='AllDoctors' component={AllDoctors}
                options={{title  : 'All Doctors'}}
             />
            <Stack.Screen name='NewDoctor' component={DoctorForm}
                options={{title  : 'Register Doctor'}}
             />
             <Stack.Screen name="AllCategories" component={AllCategories} 
                options={{title  :  'All Categories'}}
             />
            <Stack.Screen name="NewCategory" component={CategoryForm} 
                options={{title  :  'New Service'}}
             />
             <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} 
                options={{title  :  'Appointment Details'}}
             />
            <Stack.Screen name="Completed" component={CompletedAppointments} 
                options={{title  :  'Appointments'}}
             />
             <Stack.Screen name="Message" component={MessageScreen} 
                options={{title  :  'Message Screen'}}
             />
            <Stack.Screen name="ChatList" component={MessageListScreen} 
                options={{title  :  'Messages'}}
             />
            <Stack.Screen name="ChatScreen" component={ChatScreen} 
                options={{title  :  'My Chats'}}
             />
            <Stack.Screen name="Settings" component={SettingsScreen} 
                options={{title  :  'Settings Screen'}}
             />
         </Stack.Navigator>
     </NavigationContainer>
  );
}

export const  HomeTab = () => {
  return (
      <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#E34749' },
        headerTintColor: 'white',
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor: 'grey' },
        tabBarLabelStyle : {fontSize : 14, padding : 4, height :  32},
        headerShown: false
        }}
      >
      
      </Tab.Navigator>

  )
}

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompletedAppointments from './screens/CompletedAppointments';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
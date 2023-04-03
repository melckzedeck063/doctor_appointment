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
             <Stack.Screen name="AllCategories" component={AllCategories} 
                options={{title  :  'All Categories'}}
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


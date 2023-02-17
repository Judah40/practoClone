import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/signIn';
import HomePage from './screens/HomePage';
import Prescription from './screens/Prescription';
import Pharmacy from './screens/Pharmacy';




const Stack = createNativeStackNavigator();
export default function App() {
  return (
     <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="homePage" component={HomePage}/>
        <Stack.Screen name="login" component={SignIn}/>
        <Stack.Screen name="Prescribe" component={Prescription}/>
        <Stack.Screen name="pharmacy" component={Pharmacy}/>
      </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}


import { View, Text,StyleSheet } from "react-native";
import HomeScreen from './screens/HomeScreen'
import Prescriptions from './screens/Prescriptions'
import { LinearGradient } from 'expo-linear-gradient';
import LoginPage from './screens/LoginPage'
import DocLogin from './screens/DocLogin'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen'
import PatientReg from './screens/PatientReg'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer navBarHidden={true}> 
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="DocLogin" component={DocLogin} options={{ headerShown:false }}/>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown:false }}/>
        <Stack.Screen name="PatientReg" component={PatientReg} options={{headerShown:false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Prescriptions" component={Prescriptions} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});

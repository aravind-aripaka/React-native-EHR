import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
//import LinearGradient from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Alert } from 'react-native';
// import LoginPage from '../../screens/LoginPage'
// import Prescriptions from '../../screens/Prescriptions'


const Header = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}> 
        <TouchableOpacity 
         //onPress={() => navigation.navigate("Login")}
        >
        <Image 
            style={styles.logo} 
            source={require('../../assets/logo.png')
            }
        />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity
            //onPress={() => navigation.navigate("Login")}
            >
            <Image 
                source={require('../../assets/user.png')}
                style={styles.icon} 
            />
            </TouchableOpacity>
            <TouchableOpacity
            >
            <Image 
                source={require('../../assets/home.png')}
                style={styles.icon} 
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("Prescriptions")}
            >
            </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        //marginHorizontal: 5,
        marginVertical: 6
    },
    iconsContainer : {
        flexDirection: 'row',
        marginRight : 5,
    },  
    logo : {
        width:200,
        height:100, 
        resizeMode: 'contain',
    },

    icon : {
        width: 30,
        height: 30,
        margin: 10,
        marginLeft : 15,
        resizeMode: 'contain',
    }
})


export default Header
import { View, Text,StyleSheet,ImageBackground,Image,TextInput,Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView,Button,TouchableOpacity } from 'react-native'
// import Header from '../components/home/Header'
// import Form from '../components/home/Form'
import { LinearGradient } from 'expo-linear-gradient';
import loginBg from '../assets/loginBg.jpg'
import logo from '../assets/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')

const DocLogin = ({ navigation }) => {
  return (
    <ImageBackground source={loginBg} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style = {styles.logoText}> DOCTOR LOGIN </Text>
      </View>

      <View>
      {/* <Icon name={'ios-person-outline'} size={28} style={styles.inputIcon}/> */}
        <TextInput 
          style={styles.input}
          placeholder={'Aadhar Number'}
          keyboardType = 'numeric'
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'  
          />
        <TextInput 
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'  
        />
      </View>

      <View>
      <TouchableOpacity>
        <View style={{ margin : 45 , flexDirection : 'row' }}>
          <Button
            title="Login as Doctor"
            color="black"
            onPress={() =>
            navigation.navigate('Home')
            }
          />
        </View>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
 
const styles = StyleSheet.create({
   backgroundContainer: {
     flex: 1,
     width: null,
     height: null,
     justifyContent: 'center',
     alignItems: 'center',
   },
   logoContainer: {
    alignItems: 'center',
   },
   logo : {
        width:300,
        height:200, 
        resizeMode: 'contain',
    },
    logoText: {
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10,
      opacity: 0.7
    },
    input : {
      width : WIDTH - 55,
      height: 45,
      borderRadius: 45,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'gray',
      color: 'white',
      marginHorizontal:25,
      marginVertical: 25,
    },
    inputIcon : {
      position : 'absolute',
      top : 10,
      Left : 37,
    }
})

export default DocLogin;
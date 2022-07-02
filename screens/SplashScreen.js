import { useEffect,useRef } from 'react'
import { View, Text,StyleSheet,Image,Animated,TouchableOpacity} from 'react-native'
import { SafeAreaProvider, useSafeAreaFrame ,useSafeAreaInsets} from 'react-native-safe-area-context';
import React from 'react'
//import { SafeAreaView } from 'react-native'
//import Header from '../components/home/Header'
//import Form from '../components/home/Form'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logo.png'

const SplashScreen = ({ navigation }) => {
    const edges = useSafeAreaInsets();

    const startAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        setTimeout(() => {
            Animated.sequence([
                Animated.timing(
                    startAnimation,
                    {
                        toValue: 100,
                        useNativeDriver: true
                    }
                )

            ])

        },500);
    },[])

  return (
        
            <LinearGradient 
            style={styles.container}
            colors={["#c4e0e5","#4ca1af"]}
            >
                <Animated.View
                    style={{ transform : [{translateY: startAnimation }],padding : 5}}
                >
                    <Image source={logo} style={styles.logo} />
                    <Text style={{marginLeft : 60,justifyContent : 'center',fontSize : 30,color : 'black',fontFamily : 'monospace'}}>
                        Decentralised     _ Healthcare_   
                    </Text> 
                </Animated.View>
                <View>
                    <View style={{flexDirection: 'row',marginTop: 20}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("DocLogin")}
                        >
                            <View style={{marginTop : 10,marginBottom : 30,backgroundColor :'#2b5876',padding : 12,borderRadius : 10}}>
                                <Text style={{marginLeft : 5,fontSize : 20,fontWeight : 'bold',color : 'white',justifyContent : 'center'}}> 🧑‍⚕️ Doctor</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                        >
                            <View style={{marginLeft : 10,marginTop : 10,marginBottom : 30,backgroundColor :'#2b5876',padding : 12,borderRadius : 10}}>
                                <Text style={{marginLeft : 5,fontSize : 20,fontWeight : 'bold',color : 'white',justifyContent : 'center'}}>😷 Patient </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("DocLogin")}
                    >
                        <View style={{marginTop : 10,marginBottom : 30,backgroundColor :'#2b5876',padding : 12,borderRadius : 10}}>
                            <Text style={{marginLeft : 5,fontSize : 20,fontWeight : 'bold',color : 'white',justifyContent : 'center'}}>🏥 Hospital </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("DocLogin")}
                    >
                        <View style={{marginTop : 10,marginBottom : 30,backgroundColor :'#2b5876',padding : 12,borderRadius : 10}}>
                            <Text style={{marginLeft : 5,fontSize : 20,fontWeight : 'bold',color : 'white',justifyContent : 'center'}}>⚕️ Owner</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("DocLogin")}
                    >
                        <View style={{marginTop : 10,marginBottom : 30,backgroundColor :'#2b5876',padding : 12,borderRadius : 10}}>
                            <Text style={{marginLeft : 5,fontSize : 20,fontWeight : 'bold',color : 'white',justifyContent : 'center'}}>®️ Insurance company </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor : 'black',width : '100%',height : '100%',borderRadius : 25,padding : 20}}> 
                        <Text style={{color : 'yellow',justifyContent : 'center',fontFamily : 'monospace'}}> .terminal </Text>
                        <Text style={{color : 'yellow',justifyContent : 'center',fontFamily : 'monospace'}}> /medi-app$ highly_secure </Text>
                        <Text style={{color : 'yellow',justifyContent : 'center',fontFamily : 'monospace'}}> /medi-app$ decentralised_system </Text>
                        <Text style={{color : 'yellow',justifyContent : 'center',fontFamily : 'monospace'}}> /medi-app$ distributed_ledger </Text>
                        <Text style={{color : 'yellow',justifyContent : 'center',fontFamily : 'monospace'}}> /medi-app$ zero_scams </Text>
                        <Text style={{color : 'yellow',justifyContent : 'center',fontFamily : 'monospace'}}> /medi-app$ transparency </Text>              
                </View>             
               </LinearGradient>     
        

       
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ededdb',
        flex:1,
        marginTop: 25,
        alignItems: 'center',
        padding : 1,
    },
    logo : {
        
    }
})

export default SplashScreen;
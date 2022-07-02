import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../components/home/Header'
import Form from '../components/home/Form'
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
                <SafeAreaView style={styles.container}>
                <LinearGradient 
                style={styles.container}
                colors={["cyan","blue","red"]}
                >
                    <Header /> 
                    <Form />
                </LinearGradient>
                </SafeAreaView>       
  )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#ededdb',
        flex:1,
        //marginTop: 25,
    },
})

export default HomeScreen
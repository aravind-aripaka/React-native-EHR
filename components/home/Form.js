import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
//import LinearGradient from 'expo-linear-gradient';
import { TouchableOpacity,ScrollView } from 'react-native';
//import { back } from 'react-native/Libraries/Animated/Easing';


const Form = () => {
  return (
    <ScrollView>
    <View>
        <View style={styles.profilePic}>
            <Image 
                source={{uri : 'https://media-exp1.licdn.com/dms/image/C5603AQHSN1Zf8VF3IQ/profile-displayphoto-shrink_200_200/0/1638282512336?e=1661990400&v=beta&t=7xvQ6KUo4rM4nCkF_NhigfNF9rccH6QPYYSaxhx8nAg'}}
                style={{width : 80, height : 80,borderRadius : 40}} 
            />
            <Text style={{marginLeft : 40, marginTop : 25,fontSize : 40,color : 'white'}}> Aravind A </Text>
        </View>
            <View style={styles.container}>
                <View style={{padding : 2}}>
                    <View style={styles.form}>
                    <View style={{flexDirection : 'row'}}>
                            <Text style = {{fontSize : 25,color : 'white',marginRight : 100}}>UID NO</Text>
                            <Text style = {{color : 'white',fontSize : 25}}> 123X32 </Text> 
                        </View>
                    </View>
                    <View style={{flexDirection : 'row'}}>
                        <Text style = {{fontSize : 25,marginRight : 100}}>DOB</Text>
                        <Text style = {{fontSize : 25}}> 22/08/2002 </Text> 
                    </View>
                    <View style={styles.form}>
                    <View style={{flexDirection : 'row'}}>
                            <Text style = {{fontSize : 25,color : 'white',marginRight : 100}}>Insured</Text>
                            <Text style = {{color : 'white',fontSize : 25}}> Yes </Text> 
                        </View>
                    </View>
                    <View style={{flexDirection : 'row'}}>
                        <Text style = {{fontSize : 25,marginRight : 100}}>Gender</Text>
                        <Text style = {{fontSize : 25}}> Male </Text> 
                    </View>
                    <View style={styles.form}>
                        <View style={{flexDirection : 'row'}}>
                            <Text style = {{fontSize : 25,color : 'white',marginRight : 60}}>Public Key</Text>
                            <Text style = {{color : 'white',fontSize : 15}}> 1XBSSHA83782</Text> 
                        </View>  
                    </View>
                    <View style={{flexDirection : 'row'}}>
                        <Text style = {{fontSize : 25,marginRight : 100}}>Phone</Text>
                        <Text style = {{fontSize : 20}}> 6364858707 </Text> 
                    </View>
                    <View style={styles.form}>
                    <View style={{flexDirection : 'row'}}>
                            <Text style = {{fontSize : 25,color : 'white',marginRight : 100}}>Diabetic</Text>
                            <Text style = {{color : 'white',fontSize : 25}}> No</Text> 
                        </View>  
                    </View>
                    <View>
                        <Text style = {{fontSize : 25}}>LIST OF ALLERGIES</Text>
                        <Text>
                        Antibiotics -- amoxicillin (Moxatag) | ampicillin | penicillin (Bicillin L-A) | tetracycline, and others 
                        Nonsteroidal anti-inflammatory drugs like ibuprofen and naproxen |
                        Aspirin |
                        Sulfa drugs
                        </Text> 
                    </View>
                    <View style={styles.form}>
                        <Text style = {{fontSize : 25,color: 'white'}}>UNDER MEDICATION</Text>
                        <Text style = {{color: 'white'}}>
                            Antibiotics -- amoxicillin (Moxatag) | ampicillin | penicillin (Bicillin L-A) | tetracycline, and others 
                            Nonsteroidal anti-inflammatory drugs like ibuprofen and naproxen |
                            Aspirin |
                            Sulfa drugs
                        </Text> 
                    </View>
                    <View>
                        <Text style = {{fontSize : 25}}>INSURANCE DETAILS</Text>
                        <View style = {{flexDirection : 'row'}}>
                            <View>
                                <Text style = {{fontWeight : 'bold'}}>Name of company</Text>
                            </View>
                            <View style = {{marginLeft : 160}}>
                                <Text> LIC </Text> 
                            </View>
                        </View>
                        <View style = {{flexDirection : 'row'}}>
                            <View>
                                <Text style = {{fontWeight : 'bold'}}>Policy Number</Text>
                            </View>
                            <View style = {{marginLeft: 170}}>
                                <Text> 67822</Text> 
                            </View>
                        </View>
                        <View style = {{flexDirection : 'row'}}>
                            <View>
                                <Text style = {{fontWeight : 'bold'}}>Expiry Date</Text>
                            </View>
                            <View style = {{marginLeft: 150}}>
                                <Text> 22/08/2026 </Text> 
                            </View>
                        </View>
                    </View>

                </View>
            </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 30,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'red'
    },
    profilePic :{
        marginLeft: 30,
        flexDirection : 'row'
    },
    form : {
        borderColor : 'black',
        borderWidth : 2,
        backgroundColor: 'black',
        //flexDirection : 'row',
        //justifyContent : 'center',
    }
})

export default Form;

